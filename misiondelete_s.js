var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('misiondb', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'misiondb' database");
        db.collection('misions', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'misions' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving mision: ' + id);
    db.collection('misions', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('misions', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addMision = function(req, res) {
    var mision = req.body;
    console.log('Adding mision: ' + JSON.stringify(mision));
    db.collection('misions', function(err, collection) {
        collection.insert(mision, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
exports.updateMision = function(req, res) {
    var id = req.params.id;
    var mision = req.body;
    console.log('Updating mision: ' + id);
    console.log(JSON.stringify(mision));
    db.collection('misions', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, mision, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating mision: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(mision);
            }
        });
    });
}
 
exports.deleteMision = function(req, res) {
    var id = req.params.id;
    console.log('Deleting mision: ' + id);
    db.collection('misions', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
 
var populateDB = function() {
 
    var misions = [
    {		
		app_id: "MMO_RPG_START",
		misioner_id: "1",
		mision_id: "1",
        name: "kill'em all", 
        history: "History is short, just kill them",
        description: "Do you need a picture?, just kill them all",
        picture: "killeemm.jpg",
		coins_requested: 0,
		coins_rewarded: 800,
		items_requested: [		
		{
			item_id: 1, 
			name:"orc head", 
			quant: 20,
			peculiariaties:[status: "without orc body"]
		}],
		items_rewarded: [
		{
			item_id: 2,
			name: "super axe", 
			quant: 1,
			peculiariaties:[damage_status: "20", item_class: "magical"]
		}]
    }
	];
 
    db.collection('misions', function(err, collection) {
        collection.insert(misions, {safe:true}, function(err, result) {});
    });
 
};

/*examples*/
var populateDB_examples = function() {
 
    var misions = [
    {		
		app_id: "here_goes_the_name_or_id_of_the_app_requesting_the_mision_sorry_about_the_length_of_this_field_XD. i.e: APP_UIIDUUDD_EIUFB",
		misioner_id: "optional, caller may assign the mision to a particular character. i.e: 1",
		mision_id: "optional, caller may assign the mision an id, remermeber mongo already gaven an unique id to the mision. i.e: 1",
        name: "i.e: kill all the ducks", 
        history: "i.e: There was a time when the ducklings were part of modern civilization, but they were corrupted by the cheese roasty tasty juice, and broken to the marron side.",
        description: "i.e: The ducklings are mean, must be exterminated.",
        picture: "i.e: cosme_fulanito.jpg",
		coins_requested: i.e: 300,
		coins_rewarded: i.e: 800,
		items_requested: [
		{may_be_objects_here_like_this_one_or:},
		{
			item_id: 1, 
			name:"axe", 
			peculiariaties:[]
		}],
		[
		{may_be_objects_here_like_this_one_or:},
		{
			item_id: 1, 
			name:"axe", 
			peculiariaties:[]
		}]
    },
	{or_another_mision_just_like_this}
	];
 
    db.collection('misions', function(err, collection) {
        collection.insert(misions, {safe:true}, function(err, result) {});
    });
 
};