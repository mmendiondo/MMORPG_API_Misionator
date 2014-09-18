///HTTPOBJECT
var apiServer = "http://172.17.15.152:3000/";

var xhr = function() {
  var xhr = new XMLHttpRequest();
  if (!window.XMLHttpRequest) xhr=new ActiveXObject("Microsoft.XMLHTTP");
  return function( method, url, request_data, callback ) {
      xhr.onreadystatechange = function() {
          if ( xhr.readyState === 4 ) {
              callback( xhr.responseText );
          }
      };
      xhr.open( method, apiServer + url);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      if (request_data)
        xhr.send(request_data);
      else
        xhr.send();
    };
}();


function getResponse(data) {
  console.log("ok");
  return data;
}

///HTTPOBJECT

var GET_MISIONS = "misions",
    POST_MISION = "misions",
    GET_PATH = "paths",
    SET_MATRIX = "paths/matrix"
 ;


function getPath(user_pos_x, user_pos_y, user_to_x, user_to_y)
{
  xhr("GET", GET_PATH + "?" + "user_pos[x]=" + user_pos_x + "&" + "user_pos[y]="+
    user_pos_y + "&" + "user_to[x]=" + user_to_x  + "&" + "user_to[y]=" + user_to_y, null, getResponse);
}

function setMatrix(matrix)
{
   xhr("POST", SET_MATRIX, JSON.stringify(matrix), getResponse);
}

function addNewMision()
{
  xhr("POST",POST_MISION, JSON.stringify(mision), getResponse);
}

function getMisions()
{
  xhr("GET", GET_MISIONS, null, getResponse);
}

function getMision(obj_id)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
       return xmlhttp.responseText;
      }
    };
  xmlhttp.open("GET","/misions/" + obj_id.toString(), true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send();
}

function updateMision(object_id)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
         return xmlhttp.responseText;
      }
    };
  xmlhttp.open("PUT","/misions/" + object_id, true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(mision));
}


function deleteMision(object_id)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        return xmlhttp.responseText;
      }
    };
  xmlhttp.open("DELETE","/misions/" + object_id, true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send();
}

function completeMision(mision_id)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
         return xmlhttp.responseText;
      }
    };
    mision = {};
  mision.items_requested = [
        {
            item_id: 1,
            name:"orc head",
            quant: 20,
            peculiariaties: [{status: "without orc body"}]
        }];
  xmlhttp.open("PUT","/misions/player/complete/" + mision_id.toString(), true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(mision.items_requested));
}



function lookForCompletionMisions(player_id)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
         return xmlhttp.responseText;
      }
    };
  mision = {};
  mision.items_requested = [
        {
            item_id: 1,
            name:"orc head",
            quant: 20,
            peculiariaties: [{status: "without orc body"}]
        }];

  xmlhttp.open("POST","/misions/player/complete/lookFor/" + player_id.toString(), true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(mision.items_requested));
}


function lookForCompletionExternalMisions()
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
         return xmlhttp.responseText;
      }
    };
  mision = {};
  mision.items_requested = [
        {
            item_id: 1,
            name:"orc head",
            quant: 20,
            peculiariaties: [{status: "without orc body"}]
        }];

         console.log(JSON.stringify(mision.items_requested));
  xmlhttp.open("POST","/misions/complete/lookFor/", true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(mision.items_requested));
}


function getActiveMisions()
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        return xmlhttp.responseText;
      }
    };
  xmlhttp.open("GET","/misions/active/", true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send();
}

function getRegionMisions(region)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        return xmlhttp.responseText;
      }
    };
  xmlhttp.open("GET","/misions/region/" + region.toString(), true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send();
}

function getPlayerActiveMisions(player_id)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        return xmlhttp.responseText;
      }
    };
  xmlhttp.open("GET","/misions/player/active/" + player_id.toString(), true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send();
}

function getPlayerMisions(player_id)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        return xmlhttp.responseText;
      }
    };
  xmlhttp.open("GET","/misions/player/" + player_id.toString(), true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send();
}