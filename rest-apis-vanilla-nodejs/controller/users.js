const { queryStringParser } = require("../utils/utils");

const users = [];

exports.getUsers = (req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ total: users.length, data: users }));
};

exports.createUser = (req, res) => {
  /* req.on("data", chunk => {
    // console.log("chunk:", chunk);

    let user = JSON.parse(Buffer.from(chunk, "utf-8").toString());
    console.log(user);

    users.push(user);

    const response = {
      status: 200,
      statusText: "OK",
      message: "Client Inserted!"
    };

    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(response));
  }); */

  req.on("end", () => {
    const user = req.body;

    users.push(user);

    const response = {
      status: 200,
      statusText: "OK",
      message: "Client Inserted!"
    };

    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(response));
  });
};

exports.updateUser = (req, res) => {
  req.on("end", () => {
    // let query = queryStringParser(req);
    let query = req.query;

    console.log(query);

    const id = Number.parseInt(query.id);
    const user = req.body;

    users[id] = user;

    const response = {
      status: 200,
      statusText: "OK",
      message: "Client Updated!"
    };

    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(response));
  });
};

exports.deleteUser = (req, res) => {};
