module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn("users", "provider");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "provider", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },
};
