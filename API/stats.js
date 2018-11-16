const { send } = require('micro');
const {get, put, post, del} = require('microrouter')
const db = require('./data');

const Example = db.get("Example")
//const DataSetName = db.get("DataSetName")

const getAll = async (req, res) => {
    const result = await Example.find({}) 
    .then(result => result).catch(err => err )
    send(res, 200, result)

}
const notfound = (req, res) => send(res, 404, 'Not found route')


//DO I CREATE A NEW FILE FOR THIS?
const postAll = async (req,res) => {
    const result = await DataSetName.post({})
    .then(result => result).catch(err => err )
    send(res, 200, result)
}
const notfount = (req,res) => send(res, 404, 'Error in post')



 



module.exports = [
  get("/stats", getAll),
  get('/*', notfound)
  //post("/post",postAll)
  //post ('/*', notfound) is this not found required on every verb request?

]