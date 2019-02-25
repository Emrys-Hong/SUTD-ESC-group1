Runing the app:
`DEBUG=myapp:* npm start`


# DATABASE 
start postgres:
`brew services start postgresql`

run postgres
`psql postgres`

create/drop a user in postgres
`CREATE ROLE "express-mvp-dbuser" WITH LOGIN PASSWORD '123.456';`
`DROP ROLE "express-mvp-dbuser";`
create a database
`CREATE DATABASE "express-mvp-db";`
`DROP DATABASE "express-mvp-db";`

install sequelize as orm for manipulating data from javascript
`npm install sequelize --save`

database drive lib in nodejs for postsql: pg -- a low level lib for sequelize to access database lib
`npm install pg --save`


command tool for sequelize: sequelize-cli
`npm install sequelize-cli -g`

set config for  sequelize-cli  the  .sequelizerc file
```
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js'),
  'models-path': path.resolve('', 'models'),
  'seeders-path': path.resolve('', 'seeders'),
  'migrations-path': path.resolve('', 'migrations')
}
```

initialize  the database
`sequelize init`

modify `config/config.js`
```
module.exports = {
  "development": {
    "username": "express-mvp-dbuser",
    "password": "123.456",
    "database": "express-mvp-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

move the state of the table from one place to another in migrate like create table, and change columns. everytime we update the migrate folder we run
`sequelize db:migrate`


install user login packages
`npm install passport passport-local bcrypt validator express-session connect-flash --save`


install validator and lodash
`npm install validator lodash --save`