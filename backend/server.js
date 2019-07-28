var express = require('express');
var app = express();


// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var Datastore = require('nedb')
  , db = new Datastore({ filename: './db/data.db', autoload: true });


var Info = (function(){
    return function Info(Info){
        this.name = Info.name;
        this.contact = Info.contact;
        this.telephone = Info.tel;
        this.number = Info.num;
        this.location = Info.location;
        this.remove = "";
    }
}());

app.post('/add', (req, res) => {
    var data = new Info(req.body);
    db.insert(data, function (err, data) {
        // error checking for db aciton
        if (err) return res.status(500).send("Database error");
        // return the new created comment to frontend
        return res.json(data);
    });
})

app.put('/update', (req, res) => {
    var name = req.body.name;
    var contact = req.body.contact;
    var telephone = req.body.telephone;
    var number = req.body.number;
    var location = req.body.location;
    var id = req.body["_id"];
    db.update({ "_id": id }, { $set: { "name":name, "contact": contact, "location": location,"telephone" : telephone,"number":number} }, function (err, numReplaced) {
        return res.json(numReplaced);
    });
})

app.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    db.remove({_id: id}, {}, function(err, numRemove) {
        if (err) return res.status(500).send("Database error");
        return res.json(id);
    }); 
})

app.get('/data', (req, res) => {
    db.find({}, function (err, docs) {
        res.json(docs);
    });
})

app.listen(3000);