document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded! 🚀");

  // 🎵 Music Player
  const musicToggle = document.getElementById("music-toggle");
  const backgroundMusic = document.getElementById("background-music");

  if (musicToggle && backgroundMusic) {
    musicToggle.addEventListener("click", function () {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = "🎵 Pause Music";
      } else {
        backgroundMusic.pause();
        musicToggle.textContent = "🎵 Play Music";
      }
    });
  }

  // 💔 Floating Single Message Box
  const singleButton = document.getElementById("single-button");
  const messageBox = document.getElementById("single-message");

  if (singleButton && messageBox) {
    singleButton.addEventListener("click", function () {
      const singleMessages = [
        "💔 No date? No problem! More pizza for you! 🍕",
        "😂 Your wallet is safe this Valentine's Day! 💰",
        "😎 Single? That means more time for gaming! 🎮",
        "💪 Remember: Relationship status < Inner peace ✨",
        "😂 You didn’t choose the single life, the single life chose you!",
        "Roses are red, violets are blue, I'm single, and my bank account loves me too! 💳😂",
        "Who needs love when WiFi is this strong? 📶❤️",
        "No heartbreaks, just high scores. 🎮😎",
        "Valentine’s Day? More like Discount Chocolate Eve! 🍫🥳",
      ];

      const randomMessage =
        singleMessages[Math.floor(Math.random() * singleMessages.length)];

      messageBox.textContent = randomMessage;
      messageBox.style.display = "block";
      messageBox.classList.add("fade-in");

      setTimeout(() => {
        messageBox.classList.remove("fade-in");
        messageBox.classList.add("fade-out");
        setTimeout(() => {
          messageBox.style.display = "none";
          messageBox.classList.remove("fade-out");
        }, 500);
      }, 4000);
    });
  }

  // 📜 Timeline Hover & Click Events
  const timelineEvents = document.querySelectorAll(".timeline-item");
  timelineEvents.forEach((event) => {
    event.addEventListener("mouseover", function () {
      event.style.backgroundColor = "#ff4d6d";
      event.style.color = "white";
    });
    event.addEventListener("mouseout", function () {
      event.style.backgroundColor = "#fff";
      event.style.color = "#333";
    });
    event.addEventListener("click", function () {
      toggleDetails(event);
    });
  });

  function toggleDetails(event) {
    let existingDetail = event.querySelector(".details");

    if (existingDetail) {
      existingDetail.remove();
    } else {
      let details = document.createElement("p");
      details.classList.add("details");
      details.innerText = event.getAttribute("data-description");
      event.appendChild(details);
    }
  }

  // 💌 Love Note Creator
  const noteInput = document.querySelector(".note-creator textarea");
  const createNoteButton = document.getElementById("create-note");
  const noteOutput = document.getElementById("note-output");

  function generateNote() {
    const noteText = noteInput.value.trim();
    if (noteText !== "") {
      const romanticPhrases = [
        "Forever yours ❤️",
        "With love and devotion 💕",
        "To the moon and back 🌙",
        "Endless love 💖",
        "My heart is yours 💘",
        "You make my world brighter just by being in it. 🌎✨",
        "The best place in the world is next to you. 💞",
        "You are my today and all of my tomorrows. 💞",
      ];
      const randomPhrase =
        romanticPhrases[Math.floor(Math.random() * romanticPhrases.length)];

      noteOutput.textContent = `💌 ${noteText} — ${randomPhrase}`;
      noteOutput.style.opacity = "1";
    } else {
      noteOutput.textContent =
        "Please write a message before generating your love note!";
      noteOutput.style.opacity = "1";
    }
  }

  if (noteInput && createNoteButton) {
    createNoteButton.addEventListener("click", generateNote);
    noteInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        generateNote();
      }
    });
  }

  // 💌 Love Letter Gallery - Popup System
  const loveLetters = {
  napoleon: {
    title: "Napoleon to Josephine",
    text: `"Since I left you, I have been constantly depressed. My happiness is to be near you."`,
  },
  beethoven: {
    title: "Beethoven’s Immortal Beloved",
    text: `"Ever thine. Ever mine. Ever ours."`,
  },
  frida: {
    title: "Frida Kahlo to Diego Rivera",
    text: `"I don’t know how to write love letters. But I want to tell you that my whole being opens itself to you."`,
  },
  cash: {
    title: "Johnny Cash to June Carter",
    text: `"Happy Birthday Princess,  
We get old and get used to each other. We think alike. We read each other’s minds.  
We know what the other wants without asking.  
Sometimes we irritate each other a little bit. Maybe sometimes take each other for granted.  
But once in a while, like today, I meditate on it and realize how lucky I am to share my life with the greatest woman I ever met.  

You still fascinate and inspire me. You influence me for the better.  
You’re the object of my desire, the #1 Earthly reason for my existence.  
I love you very much.  

Happy Birthday, Princess.  

- Johnny Cash"`,
  },
  zelda: {
    title: "Zelda Fitzgerald to F. Scott Fitzgerald",
    text: `"Darling—  
Please, please don’t be so depressed—We’ll be married soon, and then these lonesome nights will be over forever—  
You are the loveliest person I ever knew, and for you to be in any way unhappy is more grief than I can bear—  
And I love you, my dear, my dear—with all the fervor of a soul that is afraid of itself, and the future—  
I love you, always.  

- Zelda Fitzgerald"`,
  },
};

  const modal = document.getElementById("letterModal");
  const modalTitle = document.getElementById("letter-title");
  const modalText = document.getElementById("letter-text");

  function openLetter(letterKey) {
    if (loveLetters[letterKey]) {
      const letter = loveLetters[letterKey];
      modalTitle.textContent = letter.title;
      modalText.textContent = letter.text;
      modal.style.display = "flex";
    }
  }

  function closeLetter() {
    modal.style.display = "none";
  }

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeLetter();
    }
  });

  window.openLetter = openLetter;
  window.closeLetter = closeLetter;
});
