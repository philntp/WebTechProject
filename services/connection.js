var MongoClient = require('mongodb').MongoClient
var mongoDB = 'mongodb://admin:admin@ds229435.mlab.com:29435/swusport';

MongoClient.connect(mongoDB, function(err, db) {
  if (err) return

  var collection = db.collection('student')
  collection.insert({id: 2}, (err, result) => {
    collection.find({}).toArray((err, docs)  => {
      docs.forEach(res => {
          console.log(res)
      })
      db.close()
    })
  })
})