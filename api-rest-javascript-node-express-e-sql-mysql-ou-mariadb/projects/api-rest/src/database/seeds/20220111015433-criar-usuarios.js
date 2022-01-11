const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "users",
    [
      {
        nome: "admin",
        email: "admin@email.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Luiz",
        email: "luiz@email.com",
        password_hash: await bcryptjs.hash("654321", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Maria",
        email: "maria@email.com",
        password_hash: await bcryptjs.hash("13579", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
