var PF = require('pathfinding');

var matrix =  	[
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];


exports.setMatrix = function(req, res)
{
    var application_id = req.params.application_id = "MMO_RPG_START";   
    matrix = req.body;
    res.send(matrix);
};

exports.getPath = function(req, res)
{

    var application_id = req.params.application_id = "MMO_RPG_START";   
    var user_pos = req.query.user_pos;
    var user_to = req.query.user_to;

    console.log(user_pos.x, user_to.y)

    var grid = new PF.Grid(matrix[0].length, matrix.length , matrix);
	
	var finder = new PF.AStarFinder({
    	
	});

    var path = finder.findPath(user_pos.x, user_pos.y, user_to.x, user_to.y, grid);
   	var newPath = PF.Util.smoothenPath(grid, path);
	res.send(newPath);

};