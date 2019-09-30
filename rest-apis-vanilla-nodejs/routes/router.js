const { baseURI } = require("../config").config;
const controllers = require("../controller");

const routes = {
  users: `${baseURI}/users`
};

module.exports = (req, res) => {
  const url = req.url.includes("?")
    ? req.url.substr(0, req.url.lastIndexOf("?"))
    : req.url;

  switch (url) {
    case routes.users:
      users(req, res, req.method);
      break;
  }
};

function users(req, res, reqMethod) {
  switch (reqMethod) {
    case "GET":
      controllers.users.getUsers(req, res);
      break;
    case "POST":
      controllers.users.createUser(req, res);
      break;
    case "PATCH":
      controllers.users.updateUser(req, res);
      break;
    case "DELETE":
      controllers.users.deleteUser(req, res);
      break;
  }
}
