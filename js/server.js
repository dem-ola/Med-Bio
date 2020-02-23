'use strict'

// node does not yet support import/export statements (Feb 2020)
// so some variables (host, url, endpoints etc) 
// may be repeated here and in setup.jsx where webpack/babel transpiles them

// setup
const express = require('express');
//const cors = require('cors'); // cross-origin requests
const mysql = require('mysql');

const app = express();
const appName = 'Med'
//app.use(cors());
// alternative cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database:'medbiodb',
    password:'demolasql',
});
const hostUrl = 'http://localhost';
const port = 3000;
const endpoints = {
    genders: 'genders',
    patients: 'patients',
}

// connect
connection.connect(err => {
    if(err) return(err);
});

// queries
const endQueries = {
    '/genders':         'SELECT * FROM med_gender',
    '/patients/add':    'INSERT INTO med_patients',
    '/patients' :       'SELECT * FROM med_patients',
    '/login' :          'SELECT * FROM med_users',
    '/prescribers' :    'SELECT * FROM med_prescribers',
    '/users' :          'SELECT * FROM med_users',
    '/users/add':       'INSERT INTO med_users',
}

// urls
const endPoints = [
    'login',
    'patients',
    'prescribers',
    'prescriptions',
    'orders'
]

/* scan url for endpoints */
function checkPoint(url) {
    let ep = [];
    ep = endPoints.filter((p) => url.indexOf(p) != -1)
    return ep.length > 0 ? ep[0] : null
}

/* query database */
function makeQuery(req, res, qry) {
    connection.query(qry, (err, results) => {
        if (err) {
            res.status(404).send({msg: err.sqlMessage});
        } else {
            if (results.length == 0) {
                res.send({msg:'Sorry, we found no matching account details'});
            } else {
                return res.json({
                    data: results
                })
            }
        }
    });
}

/* retrieve query fields and values */
function decompose(qType, request) {
    let req, fields, values;

    req = request.split('&');
    fields = req.map(x => x.split('=')[0]).filter(x => x.length > 0)
    values = req.map(x => x.split('=')[1]).filter(x => x != undefined)
    values = values.map(
        x => x == undefined || x.length == 0 ? 'null' : "'"+x+"'"
    )

    switch(qType) {
        case 'insert': 
            fields = fields.join();
            break;
        case 'select':
            break;
    }
    return [fields, values]
}

function prepareQuery(req) {
    let split = req.originalUrl.split('?');
    let point = split[0];
    let record = split[1];
    let subject = checkPoint(point)
    let sqlQry = endQueries[point]
    let qryType = sqlQry.split(' ')[0].toLowerCase();
    return {'record':record, 'qryType':qryType, 'sqlQry': sqlQry};
}

app.get("/*", (req, res) => {
    let [record, qryType, sqlQry] = Object.values(prepareQuery(req)); 
    let forInsert = '',  where = '';
    if (record != undefined) { 
        forInsert = decompose(qryType, record);
        switch (qryType) {
            case 'select':
                where = ' WHERE ' + forInsert[0][0] + ' = ' + forInsert[1][0] + ';'
                break;
        }
    }
    sqlQry += where
    makeQuery(req, res, sqlQry)
});

app.post("/*", (req, res) => {
    let [record, qryType, sqlQry] = Object.values(prepareQuery(req)); 
    let forInsert = '',  where = '';
    if (record != undefined) { 
        forInsert = decompose(qryType, record);
        switch (qryType) {
            case 'insert':
                where = ' (' + forInsert[0] + ') VALUES (' + forInsert[1] + ');';
                break;
        }
    }
    sqlQry += where
    makeQuery(req, res, sqlQry)
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("The query route does not exist.");
});

// start server
app.listen(port, function() {
    console.log(`${appName} app now listening on port ${port}.`);
});


