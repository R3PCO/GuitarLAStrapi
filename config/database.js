module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdfveo9a6gdh84sdflgg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_daa3'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'LjZpo1BC20XwXq4mh7eGUmu7PuZ6PI4x'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
