// ------------------------------
// TRUE deterministic randomizer (no pattern)
// ------------------------------
function getShaneIndex(month, day) {
    const seed = `${month}-${day}`;
  
    // Strong FNV-1a hash
    let hash = 2166136261;
    for (let i = 0; i < seed.length; i++) {
      hash ^= seed.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
  
    hash >>>= 0; // force unsigned
  
    return hash % 31;
  }
  
  // ------------------------------
  // Shane images
  // ------------------------------
  const shaneImages = [];
  for (let i = 1; i <= 31; i++) {
    shaneImages.push(`pics/ShaneH${i}.png`);
  }
  
  // ------------------------------
  // Shane texts
  // ------------------------------
  const shaneTexts = [
    "Shane being a little silly boy at a rink interview",
    "Shane being confident he will make more goals this season",
    "Shane being 3 apples tall 🍎",
    "Shane in his cozy fleece canada jacket",
    "Shane chewing his mouthguard",
    "Shane eating hamburgers",
    "Shane watching Rozanov win the Cup",
    "Shane being a little cutie baby before the NHL draft",
    "Shane concussed with a broken collarbone",
    "Shane enjoying some ice cream🍦",
    "Shane after being asked if he likes girls",
    "Shane having teary bottom eyes in a bathroom",
    "Shane being horny after tuna melts",
    "Shane noticing someone interesting at the draft-gala",
    "Shane dissociating at the draft-gala",
    "Shane and his jawline not being happy about being placed second",
    "Shane hearing the love of his life suggest he marry someone else for a visa",
    "Shane being very proud of his chirp",
    "Shane having an existential crisis after coming out accidentally",
    "Shane in the Metros lockerroom",
    "Shane in tha clurb but he is with his girlfriend instead of the boy he wants to smooch",
    "Shane being a little bit tipsy and a lot of bit frustrated",
    "Shane meeting his future husband for the first time",
    "Shane on the Phone with his beard/ex-girlfriend",
    "Shane getting busy while on the phone with Hayden",
    "Shane being locked IN",
    "Shane sitting in the stairwell with hearteyes for his 'casual' hookup partner",
    "Shane seeing something he is very interested in",
    "Shane coming out as more of a hole than a peg",
    "Shane sweaty in the gym indirectly kissing someone by drinkingbottle",
    "Shane doing yoga in hoochie daddy shorts"
  ];
  
  // ------------------------------
  // DOM elements
  // ------------------------------
  const monthInput = document.getElementById("month");
  const dayInput = document.getElementById("day");
  const showButton = document.getElementById("showShane");
  const resultText = document.getElementById("resultText");
  const shaneImage = document.getElementById("shaneImage");
  const shareButton = document.getElementById("shareTwitter");
  
  // ------------------------------
  // Days per month
  // ------------------------------
  const daysInMonth = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
    7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
  };
  
  // ------------------------------
  // Landing page default
  // ------------------------------
  resultText.textContent = "What Shane will come to your birthday party?";
  shaneImage.src = "";
  shaneImage.style.display = "none";
  
  // ------------------------------
  // Update day options when month changes
  // ------------------------------
  monthInput.addEventListener("change", () => {
    const month = parseInt(monthInput.value, 10);
    dayInput.innerHTML = '<option value="">--</option>';
  
    if (!month || !daysInMonth[month]) return;
  
    const maxDay = daysInMonth[month];
    for (let d = 1; d <= maxDay; d++) {
      const option = document.createElement("option");
      option.value = d;
      option.textContent = d;
      dayInput.appendChild(option);
    }
  });
  
  // ------------------------------
  // Show Shane
  // ------------------------------
  showButton.addEventListener("click", () => {
    const month = parseInt(monthInput.value, 10);
    const day = parseInt(dayInput.value, 10);
  
    if (!month || !day) {
      resultText.textContent = "What Shane will come to your birthday party?";
      shaneImage.src = "";
      shaneImage.style.display = "none";
      return;
    }
  
    const index = getShaneIndex(month, day);
  
    const imagePath = shaneImages[index];
    const textForShane = shaneTexts[index];
  
    resultText.textContent = textForShane;
    shaneImage.src = imagePath;
    shaneImage.style.display = "block";
  });
  
  // ------------------------------
  // Twitter share
  // ------------------------------
  shareButton.addEventListener("click", () => {
    if (shaneImage.style.display === "none") return;
  
    const text = resultText.textContent;
    const url = "https://holinanov.github.io/Shane-Hollander-birthday-finder/";
  
    const twitterUrl =
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  
    window.open(twitterUrl, "_blank");
  });
  
