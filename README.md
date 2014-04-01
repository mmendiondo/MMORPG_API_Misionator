MMORPG_API_Misionator
=====================

API to help mission creation from individual characters


The idea is to create a CRUD API that will help to easily provide the needed infrastructure for any game to get and post new missions.

Ideally created to provide players own mission creation, so anyone can create or be assigned to a mission from any other.

so basically, no npc's should be needed but just players anywhere in the map with a question symbol over their heads asking for help.

REST API using Node.js, Express, and MongoDB

TUTORIAL THAT HELPS TO CONFIGURE NODE Express and mongo db 

http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/

Starting with simple mision requests so.


app_id on body request
METHODS AND PARAMETERS

app.get('/misions/'), mision.getMisions); // Gets all misions
app.get('/misions/active/'), mision.getActiveMisions); // Gets all active misions
app.delete('/misions/mision_id'), mision.deleteMision); // Deletes specific mision by mision_id
app.post('/misions/'); // Adds specific mision, passing mision in body req

app.put('/misions/:mision_id'); // Updates specific mision by mision_id, passing mision in body req
app.get('/misions/:mision_id'); // Gets specific mision by mision_id
app.get('/misions/region/:region'); // Gets all misions by region
app.get('/misions/player/active/:player_id',);// Gets player active misions by player_id
app.get('/misions/player/:player_id');// Gets all player misions by player_id


app.put('/misions/player/complete/:mision_id');//Sets mision completed by mision_id, passing items as req_items in body req


//need to clarify this method.. don't know if makes sense
app.put('/misions/player/lookForCompletedMisions/:player_id', mision.lookForCompletedMisions);// Gets all player potencially completed misions, passing items as req_items in body req

app.put('/misions/complete/lookFor/');// Gets all potencial completed misions, passing items as req_items in body req
