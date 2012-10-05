/**
 * This makes the text of trollchats readable.
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
    spoilerwin.parentNode.children[0].style.display = "None";
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
  line = line.replace(/h8/g, 'hate');
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
      default:
          continue;
    }
    msg.innerHTML = speaker + line;
  }
}

fixChats();
