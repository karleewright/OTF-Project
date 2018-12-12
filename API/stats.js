const { send, json } = require('micro');
const {get, post, put, del} = require('microrouter')
const db = require('./dbconfig');


const stats = db.get("Stats")

/* { Date: ",
    Burned: ",
    Low: ",
    Med: ",
    High: ",
    Critical: ",
    Extreme : ",
    AvgHR: “,
    PeakHR : ",  
    AvgPercMaxHR : ",
    MaxHR :  “} */


// [GET] /stats	200 []	Get all the stats
const getStats = async (req, res) => {
    const result = await stats.find().then(results => (results))
    send(res, 200, result)

}


//[GET]	 /stats/id/:id	200 {} 	Get a single stat set by ID
const getStatsByID = async (req, res) => {
    const result = await stats.find({"_id" : req.params.id }).then(results => (results))
    send(res, 200, result)
}

/*[POST]	  /stats	200 {}	Create a Daily Stat Record
{ Date: ",
    Burned: ",
    Low: ",
    Med: ",
    High: ",
    Critical: ",
    Extreme : ",
    AvgHR: “,
    PeakHR : ",  
    AvgPercMaxHR : ",
    MaxHR :  “} */

const postStats = async (req,res) => {
    const body = await json (req)
    // const result = await stats.body({"_id" : req.params.id}).then(results => (results))
    const result = await stats.insert( body ).then(results => (results))
    send(res, 200, result)
}


// [PUT] /stats/id/:id	200 {} 	Update a Daily Stat Record

/*{ Date: ",
    Burned: ",
    Low: ",
    Med: ",
    High: ",
    Critical: ",
    Extreme : ",
    AvgHR: “,
    PeakHR : ",  
    AvgPercMaxHR : ",
    MaxHR :  “} */	

const updateStats = async (req, res) => {
    const body = await json(req)
    const result= await stats.update({"_id": req.params.id }, body).then(results =>(results))
    send(res, 200, result)
}


// [DELETE]	/stats/id/:id	200 {} 	Delete all the stats with this ID
//users.findOneAndDelete({name: 'foo'}).then((doc) => {})
const deleteStats = async (req, res) => {
    const result = await stats.remove({"_id":req.params.id}).then(results => (results))
    send(res, 200, result)
}

const notfound = (req, res) => send(res, 404, 'NOT WORKING!!!!')




//microrouter calls 
// get(path = String, handler = Function)
// post(path = String, handler = Function)
// put (path = String, handler = Function)
// del(path = String, handler = Function)



module.exports = [
  get ('/stats', getStats),
  get('/stats/id/:id',getStatsByID),
  post('/stats', postStats),
  put('/stats/id/:id', updateStats),
  del('/stats/id/:id', deleteStats),
  get('/*', notfound)
]