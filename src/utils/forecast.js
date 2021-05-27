const request = require('request')




const forecast = (latitude, longitude, callback) =>{
  const url = `http://api.weatherstack.com/current?access_key=a8f971e1e29774a4098a416030fd26e9&query=${latitude},${longitude}`

  request( { url, json:true}, (error,{ body }) =>{
    if(error){
      callback('Unable to connect to Weather Service',undefined)
    }else if(body.error){
      callback('Unable to find location. Try again', undefined)
    }else{
      const temperature = body.current.temperature
      const feelslike = body.current.feelslike
      const descriptions = body.current.weather_descriptions[0] 
      const humidity = body.current.humidity

      callback(undefined, 
        `${descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees,
          and humiditiy is ${humidity}%.`)
    }
  })
}

module.exports = forecast