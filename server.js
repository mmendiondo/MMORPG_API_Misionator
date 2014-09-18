var express = require('express'),
    mision = require('./routes/misions'),
    paths = require('./routes/paths');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    // Add headers
	app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

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

    app.use(express.bodyParser());
});


//MISIONS
app.get('/', mision.startUp); // Gets all misions
app.get('/misions', mision.getMisions); // Gets all misions
app.get('/misions/active', mision.getActiveMisions); // Gets all active misions
app.delete('/misions/:mision_id', mision.deleteMision); // Deletes specific mision by mision_id
app.post('/misions', mision.addMision); // Adds specific mision, passing mision in body req
app.put('/misions/:mision_id', mision.updateMision); // Updates specific mision by mision_id, passing mision in body req
app.get('/misions/:mision_id', mision.getMision); // Gets specific mision by mision_id
app.get('/misions/region/:region', mision.getRegionMisions); // Gets all misions by region
app.get('/misions/player/active/:player_id', mision.getPlayerActiveMisions);// Gets player active misions by player_id
app.get('/misions/player/:player_id', mision.getPlayerMisions);// Gets all player misions by player_id
app.put('/misions/player/complete/:mision_id', mision.completeMision);//Sets mision completed by mision_id, passing items as req_items in body req


//need to clarify this method.. don't know if makes sense
app.post('/misions/player/complete/lookFor/:player_id', mision.lookForCompletionMisions);// Gets all player misions, passing items as req_items in body req and player_id
app.post('/misions/complete/lookFor', mision.lookForCompletionExternalMisions);// Gets all player misions, passing items as req_items in body req and player_id

//PATHS AND MAPS

//req.query.user_pos gets user_pos from query_string like user_pos[x]=1&user_pos[y]=2
//req.query.user_to gets user_to from query_string like user_to[x]=1&user_to[y]=2
app.get('/paths', paths.getPath);
app.post('/paths/matrix', paths.setMatrix);


app.listen(3000);
console.log('Listening on port 3000...');