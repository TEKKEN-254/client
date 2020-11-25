/* IMPORTING CHARACTERS */
import { characters } from "./character-list.js";
import { players } from "./player-list.js";

/* DECLARATIONS */
// Savanna FGC ID
let playerId = document.getElementById("sfgc-id");
let playerImg = document.getElementById("player-img");

// Profile
let playerName = document.getElementById("player-name");
let pseudonym = document.getElementById("pseudonym");

let team = document.getElementById("team-name");
let teamShorthand = document.getElementById("team-shorthand");

let birthDate = document.getElementById("birth-date");
let platform = document.getElementById("platform");
let onlineId = document.getElementById("online-id");

// Character info
let mainCharImg = document.getElementById("bio-main");
let mainChar = document.getElementById("main-char");
let otherChars = document.getElementById("other-chars");

// Socials
let isFacebook = document.getElementById("is-facebook");
let facebook = document.getElementById("player-facebook");

let isTwitter = document.getElementById("is-twitter");
let twitter = document.getElementById("player-twitter");

let isInstagram = document.getElementById("is-instagram");
let instagram = document.getElementById("player-instagram");

let isYouTube = document.getElementById("is-youtube");
let youtube = document.getElementById("player-youtube");

let isTwitch = document.getElementById("is-twitch");
let twitch = document.getElementById("player-twitch");


/* DISPLAY FUNCTION */
const display = id => {
    if (!players[id].pseudonym) {
        document.title = `${document.title} - ${players[id].playerName}`;
    } else {
        document.title = `${document.title} - ${players[id].pseudonym}`;
    }

    playerId.innerHTML = players[id].playerId;
    if (!players[id].playerImg || players[id].playerImg === "/assets/img/players/0000000.jpg") {
        playerImg.src = "/assets/img/players/placeholder.jpg";
    } else {
        playerImg.src = players[id].playerImg;
    }

    if (!players[id].team) {
        team.remove();
        if (!players[id].pseudonym) {
            pseudonym.innerHTML = players[id].playerName;
            playerName.remove();
        } else {
            pseudonym.innerHTML = players[id].pseudonym;
            playerName.innerHTML = players[id].playerName;
        }
    } else {
        team.setAttribute("data-original-title", players[id].team);
        teamShorthand.innerHTML = players[id].teamShorthand;
        if (!players[id].pseudonym) {
            pseudonym.innerHTML = " " + players[id].playerName;
            playerName.remove();
        } else {
            pseudonym.innerHTML = " " + players[id].pseudonym;
            playerName.innerHTML = players[id].playerName;
        }
    }

    if (players[id].facebook) {
        isFacebook.style.display = "inline-block";
        facebook.href = players[id].facebook;
    }
    if (players[id].twitter) {
        isTwitter.style.display = "inline-block";
        twitter.href = players[id].twitter;
    }
    if (players[id].instagram) {
        isInstagram.style.display = "inline-block";
        instagram.href = players[id].instagram;
    }
    if (players[id].youtube) {
        isYouTube.style.display = "inline-block";
        youtube.href = players[id].youtube;
    }
    if (players[id].twitch) {
        isTwitch.style.display = "inline-block";
        twitch.href = players[id].twitch;
    }

    if (!players[id].displayBirthDate) {
        birthDate.innerHTML = "<em>Classified</em>";
    } else {
        birthDate.innerHTML = players[id].birthDate;
    }

    platform.innerHTML = players[id].platform;
    onlineId.innerHTML = players[id].onlineId;

    const playerMain = players[id].mainChar;
    const playerOtherChars = players[id].otherChars;
    mainChar.innerHTML = `<a href="/guides/character.html?view=${players[id].mainChar}" target="_blank">${characters[playerMain].name}</a>`;

    if (!characters[playerMain].image) {
        mainCharImg.style.backgroundImage = `url('/assets/img/characters/placeholder.png')`;
    } else {
        mainCharImg.style.backgroundImage = `url('${characters[playerMain].image}')`;
    }

    if (Array.isArray(playerOtherChars)) {
        const charList = [];
        for (const char of playerOtherChars) {
            if (!charList.includes(char)) {
                charList.push(char);
            }
        }
        charList.sort();

        const charLinks = [];
        for (const char of charList) {
            const charUrl = `<a href="/guides/character.html?view=${char}" target="_blank">${characters[char].name}</a>`;
            charLinks.push(charUrl);
        }
        otherChars.innerHTML = charLinks.join(", ");
    } else if (playerOtherChars) {
        otherChars.innerHTML = `<a href="/guides/character.html?view=${players[id].otherChars}" target="_blank">${characters[playerOtherChars].name}</a>`;
    } else {
        otherChars.innerHTML = "N/A";
    }
}

/* CALLING DISPLAY FUNCTION */
let params = (new URL(document.location)).searchParams;
let id = params.get("id");

if (typeof id !== "number") {
    id = id.toLowerCase();
    for (const player in players) {
        let playerId = players[player]["playerId"];
        let playerName = players[player]["playerName"].toLowerCase();
        let pseudonym = players[player]["pseudonym"].toLowerCase();

        if (id === playerName || id === pseudonym) {
            id = playerId;
        }
    }
}

let uniqueId = Number.parseInt(id);
if (Number.isInteger(uniqueId)) {
    display(uniqueId);
}