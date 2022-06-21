const axios=require('axios')

const getCitiesSorted= async function(req, res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[]
        for (i=0; i<cities.length; i++){
        let obj={city:cities[i]}
        let res=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=b7d1040ad87df54bc59d86e1db744d06`)
        console.log(res.data.main.temp)
        obj.temp=res.data.main.temp
        cityObjArray.push(obj)
        }
        let sorting=cityObjArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sorting)
        res.status(500).send({status:true, data: sorting})
        
          

        }catch(error){
        console.log(error)
        res.status(500).send({msg: error.message})
        
}
}


module.exports.getCitiesSorted=getCitiesSorted