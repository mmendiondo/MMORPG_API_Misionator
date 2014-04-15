MMORPG_API_Misionator
=====================
API to help mission creation from individual characters
---------------------
The idea is to create a CRUD API that will help to easily provide the needed infrastructure for any game to get and post new missions.

Ideally created to provide players own mission creation, so anyone can create or be assigned to a mission from any other.

so basically, no npc's should be needed but just players anywhere in the map with a question symbol over their heads asking for help.

**REST API using Node.js, Express, and MongoDB**

TUTORIAL THAT HELPS TO CONFIGURE NODE Express and mongo db 

http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/

*Starting with simple mision requests so.*

**app_id on body request**

METHODS AND PARAMETERS
---------------------
- get **misions**  Gets all misions
- get **misions/active** Gets all active misions
- delete **misions/:misionId** Deletes specific mision by mision_id
- post **misions/** mision.json Adds specific mision, passing mision in body req
- update **misions/:misionId** Updates specific mision by mision_id, passing mision in body req
- get **misions/:misionId** Gets specific mision by mision_id
- get **misions/region/:region** // Gets all misions by region
- get **misions/player/active/:playerId** Gets player active misions by player_id
- get **misions/player/:playerid** Gets all player misions by player_id
- put **misions/player/complete/:misionId** Sets mision completed by misionId, passing items as req_items in body req

need to clarify this method.. don't know if makes sense:
- put **misions/player/lookForCompletedMisions/:playerId** Gets all player potencially completed misions, passing items as req_items in body req
- put **misions/complete/lookFor/** Gets all potencial completed misions, passing items as req_items in body req

