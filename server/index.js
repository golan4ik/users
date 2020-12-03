const gen = require("mocking_g");
const userChema = require("./schemas/user.json");

gen.generate(userChema, 100);

/**
 * http://localhost:5588/mocking_G/generate?library=users&category=user
 */
