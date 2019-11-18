exports.handler = async () => {
  console.log("GET /.netlify/functions/ Hello world")

  return {
    statusCode: 200,
    body: "Ok"
  }
}
