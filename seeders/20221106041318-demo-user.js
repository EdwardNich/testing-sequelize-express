"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Users", [
      {
        name: "Ojan",
        email: "ojan@gmail.com",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dollong",
        email: "dollong@gmail.com",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dila",
        email: "dila@gmail.com",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Users", null, {});
  },
};
