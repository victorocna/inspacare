const morgan = require("morgan");

exports.handler = async () => {
  morgan(":method :url");
  morgan("combined");

  return {
    statusCode: 200,
    body: "Ok"
  };
};
