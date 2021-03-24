'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Searches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locationA: {
        type: Sequelize.STRING
      },
      locationB: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      caselocationA: {
        type: Sequelize.INTEGER
      },
      caselocationB: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Searches');
  }
};