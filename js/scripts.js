/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function show_menu() {
  document.getElementById("menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu_arrow')) {
    hide_by_class("dropdown-content");
  } 
  if (event.target.matches(".modal")) {
      hide_by_class("modal");
  }
}

function hide_by_class(className)
{
  var elems = document.getElementsByClassName(className);
  var i;
  for (i = 0; i < elems.length; i++) {
    var elem = elems[i];
    if (elem.classList.contains('show')) {
      elem.classList.remove('show');
    }
  }
}

function show_by_id(id)
{
  var elem = document.getElementById(id);
    if (!elem.classList.contains('show')) {
      elem.classList.add('show');
  }
}
function hide_by_id(id)
{
  var elem = document.getElementById(id);
    if (elem.classList.contains('show')) {
      elem.classList.remove('show');
  }
}
function show_login() {
  hide_by_class("error-text");
  show_by_id("login");
}

function login(){
  hide_by_class("error-text");
  var userName = document.getElementById("user-name").value;
  if(userName ==null || userName.trim().length == 0){
    show_by_id("login-required");
    return;
  } 
  var password = document.getElementById("password").value;
  if(password ==null || password.length == 0){
    show_by_id("password-required");
    return;
  }
  show_by_id("login-error");
}
function close_login(){
  hide_by_id("login")
}
