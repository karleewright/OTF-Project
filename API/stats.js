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


//Testing in postman http://localhost:4000/stats/id/5bf2f377160a52eb15dca057
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

const createStats = async (req,res) => {
    const body = await json (req)
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
    const result = await stats.find ({}).then(results => (results))
    send(res, 200, 'Update Daily Stats with ID ${req.params.id} using ${req.body}')
}


// [DELETE]	/stats/id/:id	200 {} 	Delete all the stats with this ID



const notfound = (req, res) => send(res, 404, 'NOT WORKING!!!!')





// get(path = String, handler = Function)
// post(path = String, handler = Function)
// put (path = String, handler = Function)
// del(path = String, handler = Function)



module.exports = [
  get ('/stats', getStats),
  get('/stats/id/:id',getStatsByID),
  post('/stats', createStats),
  put('stats/id/:id', updateStats)
//   get('/*', notfound),
  
]