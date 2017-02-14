const json = require('micro').json

module.exports = async (req, res) => {
  const data = await json(req)
  console.log(data)

  if (data.token === process.env.TOKEN) {

  }
}
