

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
      addButton("Hello?");
      addButton("No.");
      break;
    case 1:
      addButton("Listen");
      addButton("Feel around");
      addButton("Try to remember");
      break;

    case 2:
      sheSaid("We must be in the old underground railway.");
      addButton("Check pockets");
      addButton("Sob")
      break;

    case 3:
      sheSaid("Are you okay?");
      addParagraph("She sounds very scared.");
      addButton("Yes");
      addButton("No");
      break;

    case 4:
      addParagraph("Her face is pale and covered in dirt. She smiles weakly at you.");
      addParagraph("The two of you are in a red-brick tunnel, just wide enough for a single train to pass through.");
      addButton("Go left");
      addButton("Go right");

      break;
    case 7:
      addParagraph("You're alone in the dark. Except you're not.");
      addParagraph("You stop breathing.");
      addParagraph("You hear a soft, slow breath. You feel moist air on your face.");
      addButton("Close eyes");
      addButton("Scream");
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
          case "Feel around":
            addParagraph("You stretch out you fingers, gingerly. They brush the cold, rough surface of a brick wall. You move your feet around, and kick something hard and metallic.");
            youSay("Ow.");
            state = 3;
            break;
          case "Try to remember":
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
            case "Sob":
              addParagraph("It's dark. It's cold. You don't know how to get home. You can't help it. Tears spring to your eyes, and before you know it, they're tumbling down your cheeks. Sobs rack your body, and you sniff, acomplishing nothing.");
              sheSaid("Oh, um, it's okay! We just have to find our way out of here!");
              addParagraph("She clumbsiliy makes her way over to you and wraps you in a hug. She's soft and warm, and you feel a little better.");
              addParagraph("Then, her hands drop to your bum. You stiffen awkwardly.");
              youSay("Uhh--");
              addParagraph("Before you can exclaim either repulsion or delight, she pulls something out of your back pocket. Your lighter.");
              sheSaid("Is this what I think it is?");
              addParagraph("She flicks the lighter, and the spark catches. The small flame is blindingly bright.");
              youSay("I knew I shouldn't quit smoking.");
              addParagraph("You take the lighter from her.");
              state = 4;
              break;
            case "Check pockets":
              addParagraph("You pat down your pockets. Your phone is gone. Your wallet is gone. Your cigarettes are gone. But when you check your back pocket -- jackpot!");
              addParagraph("You flick the lighter, and the spark catches. The small flame is blindingly bright.");
              state = 4;
            break;
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

          break;
          case 4:
            switch (action) {
              default:
                addParagraph("You lead her down the tunnel, holding up your lighter.");
                sheSaid("Beware the straight.");
                addParagraph("The hair on the back of your neck prickels at her words. Then you see what she was reading: black, ugly graffeti on the otherwise featureless tunnel walls." );
                addParagraph("BEWARE THE STRAIGHT", "wall");
                youSay("What's a straight?");
                sheSaid("Like a ghost, I think.");
                youSay("Isn't that a wraith?");
                sheSaid("I don't know then.");
                addButton("Continue");
                state = 5;
                break;
            }
            break;
            case 5:
              switch (action) {
                default:
                  addParagraph("You continue down the tunnel. You keep telling yourself that the tunnel has to end eventually.");
                  addParagraph("You hear a noise.");
                  addButton("Run");
                  addButton("Turn around")
                  state = 6;
                  break;
              }
            break;
            case 6:
              switch (action) {
                case "Run":
                  addParagraph("You're not sure what the noise was, but it was lound and scary. You break into a sprint. She is right behind you, running too.");
                  addParagraph("Your foot catches on a sleeper, and you trip. You smack face first onto the ground. The lighter flies from your hand and goes out.");
                  sheSaid("Come on!")
                  addParagraph("She doesn't stop. She runs past you, footsteps vanishing down the tunnel.");
                  state = 7;
                break;
                case "Turn around":
                  addParagraph("You're not sure what the noise was, so you turn to investigate. The shadows shift with the flicker of the flame, but before you can figure out what any of them might be, the flame dies.");
                  sheSaid("Come on.");
                  addParagraph("She doesn't wait for you. She walks past you, footsteps vanishing down the tunnel.");
                  state = 7;
                break;
                default:
                  break;
              }

              case 7:
                switch (action) {
                  default:
                    addParagraph("Game Over", "wall");
                    case = 8;
                    break;
                }
    default:
      break;
  }

  enterState();
}

enterState();
