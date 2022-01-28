# tms

# Task Management System for Projects backend

### Setup envoirment

#### `cp .env.example .env`

Write application envoirment variables in to .env file

#### `cp config/config.json.example config/config.json`

Write db envoirment variables in to config/config.json file

### Create postgres database on your local machine

#### `npm run db:megrate`

Run migrations

#### `npm run db:seed`

Run seeders.

### Scripts

#### `npm run start`

Starts the application in development using `nodemon`

#### `npm run format:code`

Format your code.

#### `npm run lint`

Check systax your code via eslint:airbnb

| **Roles/Modules** | users | organizations | organization_users | projects | tasks | modules | roles | role_access | permissions |
| :---------------: | :---: | :-----------: | :----------------: | :------: | :---: | :-----: | :---: | :---------: | :---------: |
|     **Admin**     | crud  |     crud      |        crud        |   crud   | crud  |  crud   | crud  |    crud     |    crud     |
|    **Rahbar**     |   r   |      ru       |        crud        |   crud   |
|     **Xodim**     |       |               |                    |    r     |  ru   |

#### Database architecture

https://dbdiagram.io/d/61f121667cf3fc0e7c69f0be
