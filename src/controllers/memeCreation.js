const axios=require('axios')

const memeHandler= async function(req, res){
    try{
        let memeId = req.body.template_id
        let text0 = req.body.text0
        let text1 = req.body.text1
        let username = req.body.username
        let password = req.body.password
  
        let options={
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
            // url: `https://api.imgflip.com/caption_image?template_id=438680&text0=hey whats app&text1=having fun at mall&username=chewie12345&password=meme@123`
        }
        let result= await axios(options)
        // console.log(result.data)
        res.status(200).send({msg:result.data})
    }catch(error){
        console.log(error)
        res.status(500).send({msg: error.message})
    }
}


module.exports.memeHandler=memeHandler