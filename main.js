

let text = "";

let state = 0;

const newParagraph = (text) => {
  return "<p>" + text + "</p>";
}

const newButton = (text, onclick) => {
  return `<button onclick="doAction('${text}')">` + text + "</button>";
}

const addElement= (element) => {
  text = text + element;
  document.getElementById("demo").innerHTML = text;

}

const addParagraph = (text) => addElement(newParagraph(text));

const doAction = (action) => {
  switch (state){
    case 0:
      switch (action) {
        case "Hello?":
          addParagraph("Do you know where we are? My head hurts and I can't see a thing.");
          break;
        case "No.":
          addParagraph("Ha, ha. Very funny. Except not funny at all because my head hurts and I can't see anything and some random stranger is making fun of me. Do you know where we are?");
        default:
          break;
      }
    default:
      break;
  }


}


addElement(newParagraph("Hello? Is anybody there?"));
addElement(newButton("Hello?"));
addElement(newButton("No."));
