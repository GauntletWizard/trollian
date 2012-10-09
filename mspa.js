/**
 * This makes the text of trollchats readable.
 *
 * Reference: http://mspaintadventures.wikia.com/wiki/Typing_Quirk
 *
 * ==UserScript==
 * @name Trollian
 * @description Makes the text of trollchats readable.
 * @version 1
 * @downloadURL https://raw.github.com/GauntletWizard/trollian/master/mspa.js
 * @include http://www.mspaintadventures.com/*
 * ==/UserScript==
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

// This is stupid, and doesn't work. I'm leaving TC as just toLowerCase.
function stickyCase(str) {
  var swapped = [];
  for (var i =0; i < str.length; i++) {
    if (i % 2) {
      if (str.charCodeAt(i) < 96) {
        swapped[i] = str.charAt(i).toLowerCase();
      } else {
        swapped[i] = str.charAt(i).toUpperCase();
      }
    } else {
      if (str.charCodeAt(i) < 96) {
        swapped[i] = str.charAt(i).toLowerCase();
      } else {
        swapped[i] = str.charAt(i).toUpperCase();
      }
    }
  }
  return swapped.join("");
}

// Finds the root of the pesterlog, as well as causes it to be displayed.
function findPesterRoot() {
  var spoilerwin = document.getElementsByClassName("spoiler")[0];
  if (spoilerwin) {
    spoilerwin.style.display = "";
    spoilerwin.parentNode.children[0].style.display = "None";
    var chats = spoilerwin.children[1].children[0].children[0].children[0].children[0].children
    return chats
  }
}

function twinArmageddons(line) {
  // Also known as Sollux Captor
  line = line.replace(/two/g, 'to');
  line = line.replace(/ii/g, 'i');
  line = line.replace(/2/g, 's');
  return line;
}
function gallowsCalibrator(line) {
  // Also known as Terezi Pyrope
  line = line.toLowerCase();
  line = line.replace(/3/g, 'e');
  line = line.replace(/4/g, 'a');
  line = line.replace(/1/g, 'i');
  return line;
}
function carcinoGeneticist(line) {
  // Also known as Karkat Vantas
  line = line.toLowerCase();
  return line;
}
function adiosToreador(line) {
  // Also known as Tavros Nitram
  line = swapCase(line);
  return line;
}
function arachnidsGrip(line) {
  // Also known as Vriska
  //Goddamnit, Vriska, why is your letter usage overloaded?
  line = line.replace(/cheapsk8/g, 'cheapskate');
  line = line.replace(/8l8tant/g, 'blatant');
  line = line.replace(/h8/g, 'hate');
  line = line.replace(/8n't/g, 'ain\'t');
  line = line.replace(/8/g, 'b');
  line = line.replace(/iiiiiiii/g, 'i');
  // I think this one's cute.
  // line = line.replace(/::::)/g, ':)');
  return line;
}
function terminallyCapricious(line) {
  line = line.toLowerCase();
  return line;
}
function apocalypseArisen(line) {
  // Also known as Aradia Megido
  line = line.replace(/0/g, 'o');
  return line;
}
function grimAuxiliatrix(line) {
  // I Can Survive Having Every Word Capitalized. I've Done CamelCase.
  // line = line.toLowerCase();
  return line;
}
function arsenicCatnip(line) {
  // Also known as Nepeta Leijon
  line = ":" + line.slice(10);
  //line = line.replace(/:33\ \< /, ' '); // Gack.
  line = line.replace(/3/g, 'e');
  return line;
}
function centaursTesticle(line) {
  line = ":" + line.slice(10);
  line = line.replace(/0/g, 'o');
  line = line.replace(/1/g, 'l');
  line = line.replace(/%/g, 'x');
  return line;
}

function caligulasAquarium(line) {
  // Eridan Ampora
  line = line.replace(/ww/g, 'w');
  line = line.replace(/vv/g, 'v');
  return line;
}

function cuttlefishCuller(line) {
  line = line.replace(/\)\(/g, 'h');
  return line;
}


// Functions to show/hide the mangled and original versions of text lines.
function showOrig() {
  this.getElementsByClassName('orighover')[0].style.display="";
  this.getElementsByClassName('mangled')[0].style.display="none";
};
function showMangled(msg) {
  this.getElementsByClassName('orighover')[0].style.display="none";
  this.getElementsByClassName('mangled')[0].style.display="";
};

function fixChats() {
  var pesterlog = findPesterRoot();
  if (!pesterlog) {
    return;
  }
  for (l = 0; l < pesterlog.length; l++) {
    msg = pesterlog[l];
    line = msg.innerHTML.slice(2);
    var speaker = msg.innerHTML.substring(0,2);
    // TODO: Display original formatting on hover.
    switch (speaker) {
      case "GC":
      case "gc":
          line = gallowsCalibrator(line);
          break;
      case "TA":
      case "ta":
          line = twinArmageddons(line);
          break;
      case "CG":
      case "cg":
          line = carcinoGeneticist(line);
          break;
      case "AT":
      case "at":
          line = adiosToreador(line);
          break;
      case "AG":
      case "ag":
          line = arachnidsGrip(line);
          break;
      case "TC":
          line = terminallyCapricious(line);
          break;
      case "AA":
          line = apocalypseArisen(line);
          break;
      case "GA":
          line = grimAuxiliatrix(line);
          break;
      case "AC":
          line = arsenicCatnip(line);
          break;
      case "CT":
          line = centaursTesticle(line);
          break;
      case "CC":
          line = cuttlefishCuller(line);
          break;
      case "CA":
          line = caligulasAquarium(line);
          break;
      default:
          continue;
    }
    msg.innerHTML = '<span class="mangled">' + speaker + line + '</span>' +
        '<span class="orighover" style="display:none;">' +
        msg.innerHTML + '</span>';
    msg.onmouseover = showOrig;
    msg.onmouseout = showMangled;
  }
};


fixChats();
