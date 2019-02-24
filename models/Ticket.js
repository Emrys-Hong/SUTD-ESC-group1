/* jshint indent: 2 */

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,

      allowNull: false,
      primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: true
    },
    topic: {
        type: DataTypes.STRING,
        allowNull: true
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.STRING,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.STRING,
        allowNull: true
    }
  });

  return Ticket;
};