

let text = "";

let state = 0;

const newParagraph = (text, tag) => {
  return `<p class="${tag}">` + text + "</p>";
}

const sheSaid = (text) => {
  return addParagraph( `<span class="tag">Her: </span>` + text, "her");
}

const youSay = (text) => {
  return addParagraph( `<span class="tag">You: </span>` + text, "you");
}

const newButton = (text, onclick) => {
  return `<button onclick="doAction('${text}')">` + text + "</button>";
}

const addElement= (element) => {
  text = text + element;
  document.getElementById("demo").innerHTML = text;
}

const addButton = (text) => addElement(newButton(text));

const addParagraph = (text, tag) => addElement(newParagraph(text, tag));

const enterState = () => {
  switch(state){
    case 0:
      sheSaid("Hello? Is anybody there?");
      addElement(newButton("Hello?"));
      addElement(newButton("No."));
      break;
    case 1:
      addElement(newButton("Listen"));
      addElement(newButton("Feel around."));
      addElement(newButton("Try to remember."));
      break;

    case 2:
      sheSaid("We must be in the old underground railway.");
      break;

    case 3:
      sheSaid("Are you okay?");
      addParagraph("She sounds very scared.");
      addButton("Yes");
      addButton("No");
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
          youSay("Hello?")
          sheSaid("Do you know where we are? My head hurts and I can't see a thing.");
          state = 1;
          break;
        case "No.":
          youSay("No.")
          sheSaid("Ha, ha. Very funny. Except not funny at all because my head hurts and I can't see anything and some random stranger is making fun of me. Do you know where we are?");
          state = 1;
        default:
          break;
      }
      break;

      case 1:
        switch (action) {
          case "Listen":
            addParagraph("You strain your eyes. The darkness is inpenaterable, so you strain your ears instead. You hear a drip, drip, drip sound, and you notice how cold and clammy you feel. You hear your own breath, and your heartbeat. You hear the short, fearful breaths of someone not too far from you. All the sounds have an echo-y reverb.");
            youSay("Are we in a cave?");
            state = 2;
            break;
          case "Feel around.":
            addParagraph("You stretch out you fingers, gingerly. They brush the cold, rough surface of a brick wall. You move your feet around, and kick something hard and metallic.");
            youSay("Ow.");
            state = 3;
            break;
          case "Try to remember.":
            addParagraph("You strain your memory. You were on the train, coming back from the night shift. Did you get off the train? You don't remember. Your head aches too.");
            youSay("The last thing I remember is being on the train.");
            state = 2;
            break;
          default:
            break;
        }

        break;
        case 2:
          switch (action) {
            default:

              break;
          }

        break;
        case 3:
          switch (action) {
            case "Yes":
              youSay("I'm fine, I just stubbed my toe.");
            case "No":
              youSay("I just stubbed my toe! Do you THINK I'm okay?");
            default:
              addParagraph("You hear her footsteps coming towards you, and then the unmistakable sounds of a person tripping over. A few moments later, her thoughtful voice came from the ground.");
              sheSaid("Train tracks.");
              state = 2;
              break;
          }
    default:
      break;
  }

  enterState();
}

enterState();
