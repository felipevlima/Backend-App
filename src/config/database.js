module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'dashplan',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
