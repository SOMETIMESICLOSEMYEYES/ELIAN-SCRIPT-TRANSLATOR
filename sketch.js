function run(i) {
event.preventDefault() 
  var textIn = document.getElementById("in")
  var textOut = document.getElementById("out")
  
  if (i == 2)
  {
    var englishText = english(textIn.value)
    out.textContent = english(textIn.value).join("")
  }
  else {
    out.textContent = elian(textIn.value).join("")
  }
}

var charmap = {
    a: "ﬧ",
    b: "コ",
    c: "┘",
    d: "п",
    e: "ߛ",
    f: "ப",
    g: "厂",
    h: "ⵎ",
    i: "ட",
    j: "ᒣ",
    k: "ᓗ",
    l: "ᒧ",
    m: "ᒉ",
    n: "ᑭ",
    o: "ᘂ",
    p: "ᒥ",
    q: "ᓕ",
    r: "ᒪ",
    s: "ᒭ",
    t: "ᓘ",
    u: "ᒨ",
    v: "ᒕ",
    w: "ᑮ",
    x: "ᒎ",
    y: "ᓟ",
    z: "ᓛ",
}
  
function reverseCharmap(_charmap) {
   var keys = Object.keys(_charmap)
   var newmap = {}
   for (var key of keys)
      newmap[_charmap[key]] = key
   return newmap
}

function elian(text) {
  var letters = text.split("")
  var replacer = (ch) => {
    var replacement = charmap[ch.toLowerCase()]
    return replacement || ch
  }
  return letters.map(replacer)
}

function english(text)
{
  var _charmap = reverseCharmap(charmap)
  var letters = [... text]
  var replacer = (ch) => {
    var replacement = _charmap[ch.toLowerCase()]
    return replacement || ch
  }
  return letters.map(replacer)
}

function Clear(){
     document.getElementById('in').value = "";
     document.getElementById('out').value = "";
}
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  
}