# Documentation

This is a a small React web application for an imaginary small medical pharmacy. \
Principal users are Users (staff and patients), Patients and Prescribers.

With this application you can:
- Login
- View Users, Patients, Prescribers
- Add new Users and Patients

### Setup
1. Clone repo
2. Install MySql
3. Create the MySql database
4. Start the Mysql server
5. Update the connection object in server.js with your new database name and password
6. Add records to database: you can use the files already created e.g. \
   create tables: mysql -u root -p medbiodb < create_tables.sql \
   insert records: mysql -u root -p medbiodb < insert_users.sql \
   required files: \
   create_tables, insert_user, insert_patients, insert_prescribers, insert_gender \  

7. From the /med folder -> start the node server: \
   node server.js

You should now be able to view the website from \
http://localhost:8080/login.html


**Let's create some items for content**


**Create vessels - new vessels are open by default** \
**Keywords required but only 'key' is compulsory**
```
b = Box(key='secret', name="new box")
c = Crate(key='secret')             # no name given; set to None
```

**TODO** \
- User authentication \
- not implemented
first login change pw
hashing pw
hiding pw input
cannot select user from list
cannot edit users from list
cannot track user login - may need redux/flux
logout page not done
proper home page?


