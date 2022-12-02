module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'get-discount'),
      user: env('DATABASE_USERNAME', 'yaroom'),
      password: env('DATABASE_PASSWORD', 'GJq!oS&t5B'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
