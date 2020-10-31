/* IMPORTING CHARACTERS */
import { characters } from './character-list.js';

/* DECLARATIONS */
// Profile
let charName = document.getElementById("char-name");
let charNickname = document.getElementById("nickname");

let charFlag = document.getElementById("flag");
let charImg = document.getElementById("image");
let charImg2 = document.getElementById("image-2");

let charAge = document.getElementById("age");
let charCountry = document.getElementById("country");
let charFightingStyle = document.getElementById("fighting-style");
let charDebut = document.getElementById("first-appearance");

// Scores
let charOffense = document.getElementById("offense");
let charDefence = document.getElementById("defence");
let charRange = document.getElementById("range");
let charPunishment = document.getElementById("punishment");

let charGimmicks = document.getElementById("gimmicks");
let charExecution = document.getElementById("execution");
let charHurtbox = document.getElementById("hurtbox");

// Playstyle and Intro
let charPlaystyle = document.getElementById("playstyle");
let charIntro = document.getElementById("introduction");

// Notable players
let notablePlayers = document.getElementById("notable-players");


/* DISPLAY FUNCTION */
const display = character => {
    if (characters[character].name) {
        document.title = `${document.title} - ${characters[character].name}`;
    }

    charName.innerHTML = characters[character].name;
    charNickname.innerHTML = characters[character].nickname;

    charFlag.src = characters[character].flag;
    charImg.src = characters[character].image;
    charImg2.src = characters[character].image;

    charAge.innerHTML = characters[character].age;
    charCountry.innerHTML = characters[character].country;
    charFightingStyle.innerHTML = characters[character].fightingStyle;
    charDebut.innerHTML = characters[character].debut;

    charOffense.innerHTML = characters[character].offense;
    charDefence.innerHTML = characters[character].defence;
    charRange.innerHTML = characters[character].range;
    charPunishment.innerHTML = characters[character].punishment;

    charGimmicks.innerHTML = characters[character].gimmicks;
    charExecution.innerHTML = characters[character].execution;
    charHurtbox.innerHTML = characters[character].hurtbox;

    charPlaystyle.innerHTML = characters[character].playstyle;
    charIntro.innerHTML = characters[character].introduction;
    notablePlayers.innerHTML = characters[character].notablePlayers.join(", ");
}


/* CALLING DISPLAY FUNCTION */
let params = (new URL(document.location)).searchParams;
let char = params.get("view").toLowerCase();
display(char);