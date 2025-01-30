window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

window.Script2 = function()
{
  var lmsAPI = parent;
var name = lmsAPI.GetStudentName();
var nameArray = name.split(", ");
var firstName = nameArray[1];
var lastName = nameArray[0];
var player = GetPlayer();

player.SetVar('last_name',lastName);
}

window.Script3 = function()
{
  var player = GetPlayer();
function findLMSAPI(win) { 
if (win.hasOwnProperty("GetStudentID")) return win;
else if (win.parent == win) return null;
else return findLMSAPI(win.parent); 
} 
var lmsAPI = findLMSAPI(this); 
var myName = lmsAPI.GetStudentName(); 
var array = myName.split(','); 
var LMSName = array[0]; 
player.SetVar("Name", LMSName);

}

};
