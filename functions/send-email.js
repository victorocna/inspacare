const morgan = require("morgan");

exports.handler = async () => {
  morgan("dev");

  return {
    statusCode: 200,
    body: "Ok"
  };
};
