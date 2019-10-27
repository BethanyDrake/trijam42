

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

const enterState = () => {
  switch(state){
    case 0:
      addElement(newParagraph("Hello? Is anybody there?"));
      addElement(newButton("Hello?"));
      addElement(newButton("No."));
      break;
    case 1:
      addElement(newButton("Listen"));
      addElement(newButton("Feel around."));
      addElement(newButton("Try to remember."));
      break;
    default:
      break;
  }
}

const doAction = (action) => {
  switch (state){
    case 0:
      switch (action) {
        case "Hello?":
          addParagraph("Do you know where we are? My head hurts and I can't see a thing.");
          state = 1;
          break;
        case "No.":
          addParagraph("Ha, ha. Very funny. Except not funny at all because my head hurts and I can't see anything and some random stranger is making fun of me. Do you know where we are?");
          state = 1;
        default:
          break;
      }

      case 1:
        switch (action) {
          case "Listen":
            addParagraph("You strain your eyes. The darkness is inpenaterable, so you strain your ears instead. You hear a drip, drip, drip sound, and you notice how cold and clammy you feel. You hear your own breath, and your heartbeat. You hear the short, fearful breaths of someone not too far from you. All the sounds have an echo-y reverb.");
            addParagraph("Are we in a cave?");
            state = 2;
            break;
          case "Feel around.":
            addParagraph("You stretch out you fingers, gingerly. They brush the cold, rough surface of a brick wall. You move your feet around, and kick something hard and metallic.");
            addParagraph("Ow.");
            state = 2;
            break;
          case "Try to remember.":
            addParagraph("You strain your memory. You were on the train, coming back from the night shift. Did you get off the train? You don't remember. Your head aches too.");
            state = 2;
            break;
          default:
            break;
        }
    default:
      break;
  }

  enterState();
}

enterState();
