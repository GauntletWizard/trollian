/**
 * @fileoverview Description of this file.
 */

function addText() {
  var comic = document.getElementById("strip");
  var nav = document.getElementById("nav");
  nav.innerHTML = nav.innerHTML +
      '<div style="margin-right:10px">' +
      '<p>Alt: ' + comic.alt + "</p><p>Title: " + comic.title + "</p></div>";
  console.log(nav.scrollHeight);
  window.setTimeout(fixContent,10);
}

function fixContent() {
  var nav = document.getElementById("nav");
  console.log(nav.scrollHeight);
  document.getElementsByClassName("content")[0].style.height = nav.scrollHeight + 26 + "px";
}

addText()
