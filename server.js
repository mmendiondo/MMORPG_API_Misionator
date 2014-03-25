var express = require('express'),
    mision = require('./routes/misions');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/misions', mision.findAll);
app.get('/misions/:id', mision.findById);
app.post('/misions', mision.addMision);
app.put('/misions/:id', mision.updateMision);
app.delete('/misions/:id', mision.deleteMision);
 
app.listen(3000);
console.log('Listening on port 3000...');
/*
{
	id_user:1,
	req_items: {item_id:1, cant:2},
	req_coins 0,
	rew_items: {item_id:2, cant:1},
	rew_coins: 300,
	description_req: "conseguime todo esto",
	description_rew: "y te doy todo esto",
	history: "mi hermano necesita esto, podes ayudarme?",
	accepted_by:[{}]
}*/