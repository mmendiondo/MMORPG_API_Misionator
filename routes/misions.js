var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('misiondb', server, {w:1});

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'misiondb' database");
        db.collection('misions', {strict:true}, function(err, collection) {           
            populateDB();
        });
    }
    else
    {
         console.log(err);
    }
});

//All methods will check app_id Calling.
exports.startUp = function(req, res)
{
    res.sendfile("index.html");
};


//All methods will check app_id Calling.
exports.getMision = function(req, res)
{
    var application_id = req.params.application_id = "MMO_RPG_START";
    var mision_id = req.params.mision_id;
    console.log('Retrieving mision: ' + mision_id);
    db.collection('misions', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(mision_id), app_id: application_id}, function(err, item) {
            res.send(item);
        });
    });
};

exports.getMisions = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    db.collection('misions', function(err, collection) {
        collection.find({app_id: application_id}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.getActiveMisions = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    db.collection('misions', function(err, collection) {
        collection.find({app_id: application_id, completed: false}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.getPlayerMisions = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    var misioner_id = req.params.player_id;
    db.collection('misions', function(err, collection) {
        collection.find({app_id: application_id, misioner_id: misioner_id}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.getRegionMisions = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    var region = req.params.region;
    db.collection('misions', function(err, collection) {
        collection.find({app_id: application_id, region: region}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.getPlayerActiveMisions = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    var misioner_id = req.params.player_id;
    db.collection('misions', function(err, collection) {
        collection.find({app_id: application_id, misioner_id: misioner_id, completed: false}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.deleteMision = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    var mision_id = req.params.mision_id;
    console.log('Deleting mision: ' + mision_id);
    db.collection('misions', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(mision_id), app_id: application_id}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(result);
            }
        });
    });
};

exports.addMision = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    var mision = req.body;
    mision.application_id = application_id;

    db.collection('misions', function(err, collection) {
        collection.insert(mision, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(result[0]);
            }
        });
    });
};

exports.updateMision = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    var mision_id = req.params.mision_id;
    var mision = req.body;
    console.log('Updating mision: ' + mision_id);
    db.collection('misions', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(mision_id), app_id: application_id}, mision, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating mision: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(result);
            }
        });
    });
};

exports.completeMision = function(req, res) {
     var application_id = req.params.application_id = "MMO_RPG_START";
    var mision_id = req.params.mision_id;
    var mision_reqs = req.body;

    console.log('Updating mision: ' + mision_id);
    console.log("Have everything? : " + JSON.stringify(mision_reqs));

    db.collection('misions', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(mision_id), app_id: application_id, items_requested: mision_reqs.items}, {$set: {completed:true}}, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating mision: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(result);
            }
        });
    });
};

exports.lookForCompletionMisions = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    var misioner_id = req.params.player_id;
    var mision_req_items = req.body;
    db.collection('misions', function(err, collection) {
        collection.find({app_id: application_id, misioner_id: misioner_id}).toArray(function(err, items) {
             //create a method to validate this -----------TODO: REF 1---------
            var misions_complete = [];
            for (var i = 0; i < items.length; i++) {
                if (hasTheItems(items[i].items_requested, mision_req_items))
                    misions_complete.push(items[i]);
<<<<<<< HEAD
            } 
=======
            }
>>>>>>> 2b92f211f047dfdc1d818b7197b1d686164703b3
            res.send(misions_complete);
        });
    });
};

exports.lookForCompletionExternalMisions = function(req, res) {
    var application_id = req.params.application_id = "MMO_RPG_START";
    var all_my_items = req.body;
    db.collection('misions', function(err, collection) {
        collection.find({app_id: application_id}).toArray(function(err, items) {
            //create a method to validate this -----------TODO: REF 1---------
            var misions_complete = [];
            for (var i = 0; i < items.length; i++) {
                if (hasTheItems(items[i].items_requested, all_my_items))
                    misions_complete.push(items[i]);
            }
            res.send(misions_complete);
        });
    });
};

//Odd solution, TODO: change for smarter one
var hasTheItems = function (items_requested, all_my_items)
{
    var enough = false;
    for (var i = 0; i < items_requested.length; i++) {
        for (var j = 0; j < all_my_items.length; j++) {
           enough = has_enough_of_this_item(items_requested[i], all_my_items[j]);
           if (enough) break;
        }
        if (!enough) return false;
    }
    return enough;
    //here, check each item to see if there are enough to complete the requests for the mision
    //return JSON.stringify(items_requested) == JSON.stringify(all_my_items);
}

var has_enough_of_this_item = function(item_requested, my_item)
{
   return (item_requested.name == my_item.name && 
            item_requested.quant <= my_item.quant &&
            hasThePecularities(item_requested.peculiariaties, my_item.peculiariaties));
}

var hasThePecularities = function(item_req_pecs, item_i_have_pecs)
{
    for (var prop in item_req_pecs){
        if (item_req_pecs[prop] != item_i_have_pecs[prop])
        {
            return false;
        }
    }
    return true;
}


/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.


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
        level_required: 1,
        sub_level_required: null,
        class_required: "magical",
        second_class_required: "witch",
        coins_requested: 0,
        coins_rewarded: 800,
        experience_required: 0,
        experience_rewarded: 800,
        completed: false,
        repetable: true,
        region: "Tall Guiso",
        items_requested: [
        {
            item_id: 1,
            name:"orc head",
            quant: 20,
            peculiariaties:  {status: "without orc body", weight: 100}
        }],
        items_rewarded: [
        {
            item_id: 2,
            name: "super axe",
            quant: 1,
            peculiariaties: {damage_status: "20", item_class: "magical"}
        }]
    }
    ];
<<<<<<< HEAD

=======
>>>>>>> 2b92f211f047dfdc1d818b7197b1d686164703b3
    db.collection('misions', function(err, collection) {
        collection.remove({app_id: "MMO_RPG_START"}, {safe:true}, function(err, result) {});
        collection.insert(misions, {safe:true}, function(err, result) {});
    });
};

var schema = 
 {       
        app_id: String.empty,
        misioner_id: String.empty,
        mision_id: String.empty,
        name: String.empty,
        history: String.empty,
        description: String.empty,
        picture: String.empty,       
        level_required: 0,
        sub_level_required: 0,
        class_required: String.empty,
        second_class_required: String.empty,
        coins_requested: 0,
        coins_rewarded: 0,
        experience_required: 0,
        experience_rewarded: 0,
        completed: false,
        repetable: false,
        region: String.empty,
        items_requested: [
        {
            item_id: 0, 
            name:String.empty,
            quant: 0,
            peculiariaties: {}
        }],
        items_rewarded: [
        {
            item_id: 0, 
            name:String.empty,
            quant: 0,
            peculiariaties: {}
        }]
    }

/*
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
            peculiariaties:[{status: "without orc body"}]
        }],
        items_rewarded: [
        {
            item_id: 2,
            name: "super axe", 
            quant: 1,
            peculiariaties:[{damage_status: "20", item_class: "magical"}]
        }]
    }
    ];
 
    db.collection('misions', function(err, collection) {
        collection.insert(misions, {safe:true}, function(err, result) {});
    });
 
};


var populateDB_examples = function() {
 
    var misions = [
    {       
        app_id: "here_goes_the_name_or_id_of_the_app_requesting_the_mision_sorry_about_the_length_of_this_field_XD. i.e: APP_UIIDUUDD_EIUFB",
        misioner_id: " caller may assign the mision to a particular character. i.e: 1",
        mision_id: "optional, caller may assign the mision an id, remermeber mongo already gaven an unique id to the mision. i.e: 1",
        name: "i.e: kill all the ducks", 
        history: "i.e: There was a time when the ducklings were part of modern civilization, but they were corrupted by the cheese roasty tasty juice, and broken to the marron side.",
        description: "i.e: The ducklings are mean, must be exterminated.",
        picture: "i.e: cosme_fulanito.jpg",
        coins_rewarded: "i.e: 800",
        items_requested: [
        {may_be_objects_here_like_this_one_or: "may_be_objects_here_like_this_one_or"},
        {
            item_id: 1, 
            name:"axe", 
            peculiariaties:[]
        }],
        items_rewarded: [
        {may_be_objects_here_like_this_one_or: "may_be_objects_here_like_this_one_or"},
        {
            item_id: 1, 
            name:"axe", 
            peculiariaties:[]
        }]
    },
    {or_another_mision_just_like_this: "or_another_mision_just_like_this"}
    ];
 
    db.collection('misions', function(err, collection) {
        collection.insert(misions, {safe:true}, function(err, result) {});
    });
 
};

*/