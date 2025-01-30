window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var checkboxes = document.querySelectorAll("textarea");

for(var i = 0; i <= 2; i++)
{
	checkboxes[i].setAttribute('maxlength',30)
}
}

};
