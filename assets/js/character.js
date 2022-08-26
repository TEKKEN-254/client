/* IMPORTING CHARACTERS */
import { characters } from './character-list-tk.js';
import { players } from "./player-list-tk.js";

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
    let charSex = characters[character].sex;

    if (characters[character].name) {
        document.title = `${document.title} - ${characters[character].name}`;

        let pronoun;
        if (charSex === "male") {
            pronoun = "his";
        } else if (charSex === "female") {
            pronoun = "her";
        } else {
            pronoun = "their";
        }

        let metaDesc = [
            document.querySelector(`meta[name="description"]`),
            document.querySelector(`meta[property="og:description"]`),
            document.querySelector(`meta[name="twitter:description"]`),
        ];
        metaDesc.forEach(e => {
            e.setAttribute("content", `Learn more about ${characters[character].name} and ${pronoun} playstyle in Tekken 7.`)
        })
    }

    charName.innerHTML = characters[character].name;
    charNickname.innerHTML = characters[character].nickname;

    charFlag.src = characters[character].flag;

    charImg.children[0].srcset = `${characters[character].image}.webp`;
    charImg.children[1].srcset = `${characters[character].image}.png`;
    charImg.children[2].src = `${characters[character].image}.png`;

    charImg2.children[0].srcset = `${characters[character].image}.webp`;
    charImg2.children[1].srcset = `${characters[character].image}.png`;
    charImg2.children[2].src = `${characters[character].image}.png`;

    let charAppears;
    if (charSex === "male") {
        charAppears = "he appears";
    } else if (charSex === "female") {
        charAppears = "she appears";
    } else {
        charAppears = "they appear";
    }
    charImg.alt = `${characters[character].name}, as ${charAppears} in Tekken 7`;
    charImg2.alt = `${characters[character].name}, as ${charAppears} in Tekken 7`;

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

    const charNotablePlayers = characters[character].notablePlayers;

    if (Array.isArray(charNotablePlayers) && charNotablePlayers.length > 0) {
        const playerList = [];
        for (const player of charNotablePlayers) {
            if (!playerList.includes(player)) {
                playerList.push(player);
            }
        }
        // playerList.sort();

        const playerLinks = [];
        for (const player of playerList) {
            for (const ind in players) {
                if (players[ind].pseudonym === player || players[ind].playerName === player) {
                    const playerUrl = `<a href="/circuit/tekken/profile.html?id=${players[ind].playerId}" target="_blank">${player}</a>`;
                    playerLinks.push(playerUrl);
                }
            }
        }
        notablePlayers.innerHTML = playerLinks.join(", ");
    } else if ((Array.isArray(charNotablePlayers) && charNotablePlayers.length === 0) || !charNotablePlayers) {
        notablePlayers.innerHTML = "N/A";
    } else if (charNotablePlayers) {
        for (const ind in players) {
            if (players[ind].pseudonym === charNotablePlayers || players[ind].playerName === charNotablePlayers) {
                notablePlayers.innerHTML = `<a href="/circuit/tekken/profile.html?id=${players[ind].playerId}" target="_blank">${charNotablePlayers}</a>`;
            }
        }
    }
}


/* CALLING DISPLAY FUNCTION */
let params = (new URL(document.location)).searchParams;
let char = params.get("view").toLowerCase();
display(char);