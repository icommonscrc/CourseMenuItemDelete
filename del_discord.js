javascript:
var menuitem = "Discord Info for CCI";
var dropdownButton = document.querySelector('[title="' + menuitem + ' menu item options"]');
dropdownButton.focus();
dropdownButton.click();

var dropdownDiv = document.getElementsByClassName("cmdiv")[0];
var deleteButton = dropdownDiv.querySelector('a[title="Delete"]');
deleteButton.click();
