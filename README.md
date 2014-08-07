MMORPG_API_Misionator
=====================

Api to help mision creation from individual characters
		<p>
			MMORPG_API_Misionator
		</p>
		<p>
			API to help mission creation from individual characters
			---------------------
		</p>
		<p>
			The idea is to create a CRUD API that will help to easily provide the needed infrastructure for any game to get and post new missions.
		</p>
		<p>
			Ideally created to provide players own mission creation, so anyone can create or be assigned to a mission from any other.
		</p>
		<p>
			so basically, no npc's should be needed but just players anywhere in the map with a question symbol over their heads asking for help.
		</p>
		<p>
			**REST API using Node.js, Express, and MongoDB**
		</p>
		<p>
			TUTORIAL THAT HELPS TO CONFIGURE NODE Express and mongo db 
		</p>
		<p>
			http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/
		</p>
		<p>
			*Starting with simple mision requests so.*

			**app_id on body request**
		</p>
		<p>
			METHODS AND PARAMETERS
		<div>
			- get **misions**  Gets all misions
		</div><div>
			- get **misions/active** Gets all active misions
		</div><div>
			- delete **misions/:misionId** Deletes specific mision by mision_id
		</div><div>
			- post **misions/** mision.json Adds specific mision, passing mision in body req
		</div><div>
			- update **misions/:misionId** Updates specific mision by mision_id, passing mision in body req
		</div><div>
			- get **misions/:misionId** Gets specific mision by mision_id
		</div><div>
			- get **misions/region/:region** // Gets all misions by region
		</div><div>
			- get **misions/player/active/:playerId** Gets player active misions by player_id
		</div><div>
			- get **misions/player/:playerid** Gets all player misions by player_id
		</div><div>
			- put **misions/player/complete/:misionId** Sets mision completed by misionId, passing items as req_items in body req
		</div><div>
			need to clarify this method.. don't know if makes sense:
			- put **misions/player/lookForCompletedMisions/:playerId** Gets all player potencially completed misions, passing items as req_items in body req
			- put **misions/complete/lookFor/** Gets all potencial completed misions, passing items as req_items in body req
		</div>
    <p>
    <div>
       - post **paths/matrix** posting matrix as array like [[0,0,0,1,0], [0,0,0,0,0]] where 0 is walkable and 1 doesn't 
     - get **paths** Getspath from and to within a matrix previously set giving by query strig user_pos[x], user_pos[y], user_to[x], user_to[y]
     </div>
		</p>
