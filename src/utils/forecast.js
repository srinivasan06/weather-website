const request = require('request')
const forecast = (longitude,latitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=863e993ef4adaeff6a9c70e78289a25f&query= '+latitude+','+longitude+'&units=m'
   
   request({ url, json: true},(error, {body})=>
       {
           if(error)
           {
               callback('Unable To Get Weather Service' , undefined)
           }
           else if(body.error)
           {
               callback('Please Provide Valid Location', undefined)
           }
           else{
               callback( undefined,`temprature is ${body.current.temperature} and lookslike ${body.current.feelslike}`)
 
       }
   
   
   
       })
   
   } 
   


   module.exports = forecast;