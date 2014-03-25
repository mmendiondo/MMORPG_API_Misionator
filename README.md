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

"GET" /misions

"POST" "/misions" mision_object

"GET" /misions/:id

"DELETE" "/misions/:id"

"PUT" "/misions/:id" mision_object


