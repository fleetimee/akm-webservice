<div style="display: inline">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png" width="auto" height="64px">
  <img src="https://expressjs.com/images/express-facebook-share.png" width="auto" height="64px">
</div>

# akm-webservice

REST API using Express, Sequelize, PostgreSQL

## Getting Started

```bash
# Clone the repository
git clone https://github.com/fleetimee/akm-webservice.git

# Enter into the directory
cd akm-webservice/

# Install the dependencies
yarn

# Set the environment variables:
cp .env.example .env

# Running the boilerplate:
yarn dev
```

## Configuration

Variables for the environment

| Option             | Description                         |
| ------------------ | ----------------------------------- |
| SERVER_PORT        | Port the server will run on         |
| SERVER_JWT         | true or false                       |
| SERVER_JWT_SECRET  | JWT secret                          |
| SERVER_JWT_TIMEOUT | JWT duration time                   |
| DB_DIALECT         | "mysql", "postgresql", among others |
| DB_HOST            | Database host                       |
| DB_USER            | Database username                   |
| DB_PASS            | Database password                   |
| DB_NAME            | Database name                       |
| AWS_KEYID          | Access key ID                       |
| AWS_SECRETKEY      | User secret key                     |
| AWS_BUCKET         | Bucket name                         |

## Commands for sequelize

```bash
# Creates the database
yarn sequelize db:create

# Drops the database
yarn sequelize db:drop

# Load migrations
yarn sequelize db:migrate

# Undo migrations
yarn sequelize db:migrate:undo:all

# Load seeders
yarn sequelize db:seed:all
```
