'use strict';

const nowDate = new Date();
const curYear = nowDate.getFullYear(); 
export const firstYear = 1900;

export const createRange = (from, to, arr=[]) => {
    arr.push(from);
    from < to ? createRange(++from, to, arr) : null;
    return arr
} 

export const vars = {
    days: ['Monday','Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday'],
    dates:  createRange(1,31),
    months: ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'Devember'],
    years:  createRange(firstYear, curYear),
}

function editClassName(elem, cname, action) {
    let cur = elem.className;
    let chg;
    if (action == 'add') {
        chg = cur + ' ' + cname;
    } else { //'remove'
        chg = cur.replace(cname, '');
    }
    elem.setAttribute('class', chg);
}

function textToDate(dateText) {
    let reg = dateText.match(/(\d+)-(.*?)-(\d+)/);
    return new Date(reg[3], months.indexOf(reg[2]), reg[1])
}

function dateToText(date) {
    return date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear()
}

function daysSince(dateText, fin=null) {
    if (dateText == null || dateText == undefined ) return '0d';

    let now = new Date();
    if (fin != null) {
        now = textToDate(fin);
    }
    let then = textToDate(dateText);
    return parseInt((now-then) / (1000 * 60 * 60 * 24))+'d'
}

// add capitalize method to String prototype
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

Date.prototype.toCustomString = function(format='normal') {
    let hrs = this.getHours();
    let mins = this.getMinutes();
    let day = vars.days[this.getDay()]+','
    if (format == 'short') { // remove time
        hrs = mins = '';
        // -> Saturday, 8 November 1946 :
        // need to strip ' :' <- with space before colon!
    }
    if (format == 'very short') {
        hrs = mins = '';
        day = '';
    }
    return ([
        day,
        , this.getDate()
        , vars.months[this.getMonth()]
        , this.getFullYear()
        , [hrs, mins].map(x => (x != '' && x<10) ? '0'+x : x).join(':')
    ].join(' ').replace(' :', ''))
} 

Date.prototype.toDbString = function() {
    let mth = this.getMonth();
    mth = mth < 10 ? '0'+mth : mth;
    return ([
          this.getFullYear()
        , mth
        , this.getDate()
    ].join('-'))
} 

export const concatClassName = (standard, custom=null) => {
    return (!custom) ? standard : standard + ' ' + custom
}
