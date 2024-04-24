module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "secret",
  database: "develop",
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
