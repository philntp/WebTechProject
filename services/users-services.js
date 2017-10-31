var db = require('./connection');

exports.createUser = ( (user,err) => {
    var collection = db.get().collection('student');
    collection.insert({
        name : user.name,
        nickname : user.nickname
    })
})