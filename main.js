

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

const createState = (id, action) => {
  return {id, action}
}
const states = [
  {
    id: 0,
    onEnterState: () => {
      sheSaid("Hello? Is anybody there?");
      addButton("Hello?");
      addButton("No.");
    },

    actions: ["Hello?", "No."]
  },
  {
    id: 1,
    onEnterState: () => {
      addButton("Listen");
      addButton("Feel around");
      addButton("Try to remember");
    },

    actions: ["Listen", "Feel around", "Try to remember"]
  },
  {
    id: 2,
    onEnterState: () => {
      sheSaid("We must be in the old underground railway.");
      addButton("Check pockets");
      addButton("Sob")
    },
    actions: ["Check pockets", "Sob"]
  },
  {
    id: 3,
    onEnterState: () => {
      sheSaid("Are you okay?");
      addParagraph("She sounds very scared.");
      addButton("Yes");
      addButton("No");
    },
    actions: ["Yes", "No"]
  },
  {
    id: 4,
    onEnterState: () => {
      addParagraph("Her face is pale and covered in dirt. She smiles weakly at you.");
      addParagraph("The two of you are in a red-brick tunnel, just wide enough for a single train to pass through.");
      addButton("Go left");
      addButton("Go right");
    },
    actions: ["Go left", "Go right"]
  },
  {
    id: 5,
    onEnterState: () => {
      addParagraph("You lead her down the tunnel, holding up your lighter.");
      sheSaid("Beware the straight.");
      addParagraph("The hair on the back of your neck prickels at her words. Then you see what she was reading: black, ugly graffeti on the otherwise featureless tunnel walls." );
      addParagraph("BEWARE THE STRAIGHT", "wall");
      youSay("What's a straight?");
      sheSaid("Like a ghost, I think.");
      youSay("Isn't that a wraith?");
      sheSaid("I don't know then.");
      addButton("Continue");
    },
    actions: ["Continue"]
  },
  {
    id: 6,
    onEnterState: () => {
      addParagraph("You continue down the tunnel. You keep telling yourself that the tunnel has to end eventually.");
      addParagraph("You hear a noise.");
      addButton("Run");
      addButton("Turn around")
    },
    actions: ["Run", "Turn around"]
  },
  {
    id: 7,
    onEnterState: () => {
      addParagraph("You're alone in the dark. Except you're not.");
      addParagraph("You stop breathing.");
      addParagraph("You hear a soft, slow breath. You feel moist air on your face.");
      addButton("Close eyes");
      addButton("Scream");
    },
    actions: [
      "Close eyes",
      "Scream"
    ]
  },
]

const enterState = () => {
  states.filter(({id}) => id === state)[0].onEnterState()
}

const actions = [
  {
    from: 0,
    when: "Hello?",
    action: () => {
      youSay("Hello?")
      sheSaid("Do you know where we are? My head hurts and I can't see a thing.");
      state = 1;
    }
  },
  {
    from: 0,
    when: "No.",
    action: () => {
      youSay("No.")
      sheSaid("Ha, ha. Very funny. Except not funny at all because my head hurts and I can't see anything and some random stranger is making fun of me. Do you know where we are?");
      state = 1;
    }
  } ,
  {
    from: 1,
    when: "Listen",
    action: () => {
      addParagraph("You strain your eyes. The darkness is inpenaterable, so you strain your ears instead. You hear a drip, drip, drip sound, and you notice how cold and clammy you feel. You hear your own breath, and your heartbeat. You hear the short, fearful breaths of someone not too far from you. All the sounds have an echo-y reverb.");
      youSay("Are we in a cave?");
      state = 2;
    }
  },
  {
    from: 1,
    when: "Feel around",
    action: () => {
      addParagraph("You stretch out you fingers, gingerly. They brush the cold, rough surface of a brick wall. You move your feet around, and kick something hard and metallic.");
      youSay("Ow.");
      state = 3;
    }
  },
  {
    from: 1,
    when: "Try to remember",
    action: () => {
      addParagraph("You strain your memory. You were on the train, coming back from the night shift. Did you get off the train? You don't remember. Your head aches too.");
      youSay("The last thing I remember is being on the train.");
      state = 2;
    }
  },
  {
    from: 2,
    when: "Sob",
    action: () => {
      addParagraph("It's dark. It's cold. You don't know how to get home. You can't help it. Tears spring to your eyes, and before you know it, they're tumbling down your cheeks. Sobs rack your body, and you sniff, acomplishing nothing.");
      sheSaid("Oh, um, it's okay! We just have to find our way out of here!");
      addParagraph("She clumbsiliy makes her way over to you and wraps you in a hug. She's soft and warm, and you feel a little better.");
      addParagraph("Then, her hands drop to your bum. You stiffen awkwardly.");
      youSay("Uhh--");
      addParagraph("Before you can exclaim either repulsion or delight, she pulls something out of your back pocket. Your lighter.");
      sheSaid("Is this what I think it is?");
      addParagraph("She flicks the lighter, and the spark catches. The small flame is blindingly bright.");
      youSay("Good thing I didn't quit smoking.");
      addParagraph("You take the lighter from her.");
      state = 4;
    }
  },
  {
    from: 2,
    when: "Check pockets",
    action: () => {
      addParagraph("You pat down your pockets. Your phone is gone. Your wallet is gone. Your cigarettes are gone. But when you check your back pocket -- jackpot!");
      addParagraph("You flick the lighter, and the spark catches. The small flame is blindingly bright.");
      state = 4;
    }
  },
  {
    from: 3,
    when: "Yes",
    action: () => {
      youSay("I'm fine, I just stubbed my toe.");
      addParagraph("You hear her footsteps coming towards you, and then the unmistakable sounds of a person tripping over. A few moments later, her thoughtful voice came from the ground.");
      sheSaid("Train tracks.");
      state = 2;
    }
  },
  {
    from: 3,
    when: "No",
    action: () => {
      youSay("I just stubbed my toe! Do you THINK I'm okay?");
      addParagraph("You hear her footsteps coming towards you, and then the unmistakable sounds of a person tripping over. A few moments later, her thoughtful voice came from the ground.");
      sheSaid("Train tracks.");
      state = 2;
    }
  },
]

const getStateFromId = (stateId) => {
  return states.filter(({id}) => id === stateId)[0]
}

const createDefaultBehaviour = (stateId, action) => {

  var stateObject = getStateFromId(stateId)
  if (stateObject == undefined) {
    console.log("tried to get state that doesn't exist: " + stateId)
  }
  stateObject.actions.forEach(s => {
    actions.push({
      from: stateId,
      when: s,
      action,
    })
  })
}

createDefaultBehaviour(4, () => {
  state = 5;
})

createDefaultBehaviour(5, () => {
  state = 6;
})

actions.push(
  {
    from: 6,
    when: "Run",
    action: () => {
      addParagraph("You're not sure what the noise was, but it was lound and scary. You break into a sprint. She is right behind you, running too.");
      addParagraph("Your foot catches on a sleeper, and you trip. You smack face first onto the ground. The lighter flies from your hand and goes out.");
      sheSaid("Come on!")
      addParagraph("She doesn't stop. She runs past you, footsteps vanishing down the tunnel.");
      state = 7;
    }
  },
  {
    from: 6,
    when: "Turn around",
    action: () => {
      addParagraph("You're not sure what the noise was, so you turn to investigate. The shadows shift with the flicker of the flame, but before you can figure out what any of them might be, the flame dies.");
      sheSaid("Come on.");
      addParagraph("She doesn't wait for you. She walks past you, footsteps vanishing down the tunnel.");
      state = 7;
    }
  }
)


createDefaultBehaviour(7, () => {
  addParagraph("Game Over", "wall");
  state = 8;
})
const doAction = (action) => {
  const actionsForState = actions.filter(actionObject => actionObject.from === state)
  const matchingActions = actionsForState.filter(actionObject => actionObject.when === action)
  matchingActions[0].action()
  enterState();
}

enterState();
