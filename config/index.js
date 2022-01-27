const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config();
}
module.exports = {
  port: process.env.APP_PORT || 3000,
  POSTGRES: {
    host: process.env.POSTGRES_DB_HOST,
    port: process.env.POSTGRES_DB_PORT,
    user: process.env.POSTGRES_DB_USER,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME
  },
  JWT: {
    key: process.env.JWT_SECRET_KEY,
    expiration: process.env.JWT_EXPIRATION
  },
  MODULES: {
    users: 'Foydalanuvchilar',
    organizations: 'Tashkilotlar',
    organizationUsers: 'Tashkilot xodimlari',
    projects: 'Loyihalar',
    tasks: 'Vazifalar',
    roles: 'Rollar',
    modules: 'Modullar',
    roleAccesses: 'Rol imkoniyatlari',
    permissions: 'Ruxsatlar'
  }
};
