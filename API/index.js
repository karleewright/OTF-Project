
const { router, get} = require('microrouter')
const cors= require('micro-cors')()


const Stats=require('./stats')
const 
module.exports = cors(
    router(
        ...Stats,
        
    )  
    
)

