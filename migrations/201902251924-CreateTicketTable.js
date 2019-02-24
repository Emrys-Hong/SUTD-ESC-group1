'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      name: {
          allowNull: false,
          type: Sequelize.STRING
      },
      email: {
      	allowNull: false,
      	type: Sequelize.STRING
      },
      contact: {
          allowNull: false,
          type:  Sequelize.STRING
      },
      topic: {
          allowNull: false,
          type: Sequelize.STRING
      },
      detail: {
          allowNull: false,
          type: Sequelize.STRING
      },
      response: {
        allowNull: true,
        type: Sequelize.STRING
      }

    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tickets');
  }
};