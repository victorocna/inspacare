const ip = require("ip")

exports.handler = async (event) => {
  console.log(`${event.httpMethod} ${event.path} ${ip.address()}`)

  return {
    statusCode: 200,
    body: "Ok"
  };
};
