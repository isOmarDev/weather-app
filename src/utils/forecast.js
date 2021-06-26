const request = require('request')

const forecast = (x, y, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8536a6a9b4100508a5f9c965f8d05331&query=New%20York&query=${x},${y}`
  
  request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike)
    }
  })
}

module.exports = forecast