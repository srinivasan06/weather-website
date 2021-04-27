var request = require('request')

const geocode = (address, callback) =>{

    const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3Jpbml2YXNhcnVsMDYiLCJhIjoiY2tuaDN5cXlwMGllYzJucWh2NGRrc202cyJ9.MERYm43TOGegVyhrL7hZKQ&limit=1'
request({uri : url1,  json: true }, (e,{body})=>{
if(e)
{
    callback('Unable To Get Weather Service', undefined)
}
else if(body.features.length === 0)
{
    callback('Please Provide Valid Location', undefined)
}
else{
    var longitude = body.features[0].center[0]
    var latitude =body.features[0].center[1]
    var place =body.features[0].place_name   
    callback(undefined, {
         longitude,
         latitude,
        place
        })
        }


})

}



module.exports = geocode