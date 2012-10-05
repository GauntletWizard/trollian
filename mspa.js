/**
 * @fileoverview Description of this file.
 */

function swapCase(str) {
  var swapped = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 96) {
      swapped[i] = str.charAt(i).toLowerCase();
    } else {
      swapped[i] = str.charAt(i).toUpperCase();
    }
  }
  return swapped.join("");
}

function findPesterRoot() {
  var spoilerwin = document.getElementsByClassName("spoiler")[0];
  if (spoilerwin) {
    spoilerwin.style.display = "";
    var chats = spoilerwin.children[1].children[0].children[0].children[0].children[0].children
    return chats
  }
}

function twinArmageddons(line) {
  //Also known as Sollux Captor
  line = line.replace(/two/g, 'to');
  line = line.replace(/ii/g, 'i');
  line = line.replace(/2/g, 's');
  return line;
}
function gallowsCalibrator(line) {
  //Also known as Terezi Pyrope
  line = line.toLowerCase();
  line = line.replace(/3/g, 'e');
  line = line.replace(/4/g, 'a');
  line = line.replace(/1/g, 'i');
  return line;
}
function carcinoGeneticist(line) {
  //Also known as Karkat Vantas
  line = line.toLowerCase();
  return line;
}
function adiosToreador(line) {
  //Also known as Tavros Nitram
  line = swapCase(line);
  return line;
}
function arachnidsGrip(line) {
  line = line.replace(/8/g, "b");
  line = line.replace(/iiiiiiii/g, 'i');
  return line;
}

function fixChats() {
  var pesterlog = findPesterRoot();
  if (!pesterlog) {
    return;
  }
  for (l = 0; l < pesterlog.length; l++) {
    msg = pesterlog[l];
    line = msg.innerHTML;
    var speaker = msg.innerHTML.substring(0,2);
    switch (speaker) {
      case "GC":
      case "gc":
          msg.innerHTML = gallowsCalibrator(msg.innerHTML);
          break;
      case "TA":
      case "ta":
          msg.innerHTML = twinArmageddons(msg.innerHTML);
          break;
      case "CG":
      case "cg":
          msg.innerHTML = carcinoGeneticist(msg.innerHTML);
          break;
      case "AT":
      case "at":
          msg.innerHTML = adiosToreador(msg.innerHTML);
          break;
      case "AG":
      case "ag":
          msg.innerHTML = arachnidsGrip(line);
          break;
    }
  }
}
