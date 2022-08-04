const fs= require("fs").promises;
const listFiles=async()=>{
    try{
        const files=await fs.readdir(".")
        for(const file of files){
            console.log(file)
        }
    }
    catch(err){
        console.error(err)
    }
}
listFiles();