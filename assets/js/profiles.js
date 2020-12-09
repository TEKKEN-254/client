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
let facebookImg = document.querySelector("#player-facebook > img");

let isTwitter = document.getElementById("is-twitter");
let twitter = document.getElementById("player-twitter");
let twitterImg = document.querySelector("#player-twitter > img");

let isInstagram = document.getElementById("is-instagram");
let instagram = document.getElementById("player-instagram");
let instagramImg = document.querySelector("#player-instagram > img");

let isYouTube = document.getElementById("is-youtube");
let youtube = document.getElementById("player-youtube");
let youtubeImg = document.querySelector("#player-youtube > img");

let isTwitch = document.getElementById("is-twitch");
let twitch = document.getElementById("player-twitch");
let twitchImg = document.querySelector("#player-twitch > img");


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

            playerImg.alt = `Close-up of ${players[id].playerName}`;
        } else {
            pseudonym.innerHTML = players[id].pseudonym;
            playerName.innerHTML = players[id].playerName;

            playerImg.alt = `Close-up of ${players[id].pseudonym}`;
        }
    } else {
        team.setAttribute("data-original-title", players[id].team);
        teamShorthand.innerHTML = players[id].teamShorthand;
        if (!players[id].pseudonym) {
            pseudonym.innerHTML = " " + players[id].playerName;
            playerName.remove();

            playerImg.alt = `Close-up of ${players[id].playerName}`;
        } else {
            pseudonym.innerHTML = " " + players[id].pseudonym;
            playerName.innerHTML = players[id].playerName;

            playerImg.alt = `Close-up of ${players[id].pseudonym}`;
        }
    }

    if (players[id].facebook) {
        isFacebook.style.display = "inline-block";
        facebook.href = players[id].facebook;
        if (!players[id].pseudonym) {
            facebookImg.alt = `${players[id].playerName}'s Facebook page`;
        } else {
            facebookImg.alt = `${players[id].pseudonym}'s Facebook page`;
        }
    }
    if (players[id].twitter) {
        isTwitter.style.display = "inline-block";
        twitter.href = players[id].twitter;
        if (!players[id].pseudonym) {
            twitterImg.alt = `${players[id].playerName}'s Twitter page`;
        } else {
            twitterImg.alt = `${players[id].pseudonym}'s Twitter page`;
        }
    }
    if (players[id].instagram) {
        isInstagram.style.display = "inline-block";
        instagram.href = players[id].instagram;
        if (!players[id].pseudonym) {
            instagramImg.alt = `${players[id].playerName}'s Instagram page`;
        } else {
            instagramImg.alt = `${players[id].pseudonym}'s Instagram page`;
        }
    }
    if (players[id].youtube) {
        isYouTube.style.display = "inline-block";
        youtube.href = players[id].youtube;
        if (!players[id].pseudonym) {
            youtubeImg.alt = `${players[id].playerName}'s YouTube channel`;
        } else {
            youtubeImg.alt = `${players[id].pseudonym}'s YouTube channel`;
        }
    }
    if (players[id].twitch) {
        isTwitch.style.display = "inline-block";
        twitch.href = players[id].twitch;
        if (!players[id].pseudonym) {
            twitchImg.alt = `${players[id].playerName}'s Twitch channel`;
        } else {
            twitchImg.alt = `${players[id].pseudonym}'s Twitch channel`;
        }
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
        if (!players[id].pseudonym) {
            mainCharImg.setAttribute("aria-label", `Image of ${players[id].playerName}'s main character, ${characters[playerMain].name}`);
        } else {
            mainCharImg.setAttribute("aria-label", `Image of ${players[id].pseudonym}'s main character, ${characters[playerMain].name}`);
        }
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