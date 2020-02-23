# Documentation

This is a a small React web application (currently seven pages) for a made-up small medical pharmaceutical company. \
Principal users are Users (staff and patients), Patients and Prescribers.

With this application you can:
- Login
- View Users, Patients, Prescribers
- Add new Users and Patients

### Setup
1. Clone repo (includes Node, React, react-dom, Expressjs, Webpack/Babel)
2. Install MySql
3. Create the MySql database
4. Start the Mysql server
5. Update the connection object in js/server.js with your new database name and password
6. Add records to database: you can use the files already created in the db/create folder e.g.

   create tables: mysql -u root -p medbiodb < create_tables.sql \
   insert records: mysql -u root -p medbiodb < insert_users.sql \
   minimum required files: \
   create_tables, insert_users, insert_patients, insert_prescribers, insert_gender \  

7. From the /med folder -> start the node server: \
   node server.js

You should now be able to view the website from \
http://localhost:8080/login.html


**TODO**
- User authentication and login tracking (use Redux, Flux ?)
- new user change password on first login
- hash password
- hiding password input
- select and edit user, patients, prescribers from list
- logout page
- proper home page
- add prescriptions, orders, visits


