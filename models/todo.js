'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {}

  Todo.init(
    {
      title: {
        field: 'title',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            args: true,
            msg: 'Title is missing',
          },
          notEmpty: {
            args: true,
            msg: 'Title is required',
          },
        },
      },
      isDone: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Todo',
    },
  );
  return Todo;
};
