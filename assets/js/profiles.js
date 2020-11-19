/* IMPORTING CHARACTERS */
import { characters } from './character-list.js';

/* DECLARATIONS */
// Savanna FGC ID
let playerId = document.getElementById("sfgc-id");
let playerImg = document.getElementById("player-img");

// Profile
let playerName = document.getElementById("player-name");
let pseudonym = document.getElementById("pseudonym");

// let team = document.getElementById("team-name");
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
    if (players[id].pseudonym) {
        document.title = `${document.title} - ${players[id].pseudonym}`;
    }

    playerId.innerHTML = players[id].playerId;
    if (!players[id].playerImg || players[id].playerImg === "/assets/img/players/0000000.jpg") {
        playerImg.src = "/assets/img/players/placeholder.jpg";
    } else {
        playerImg.src = players[id].playerImg;
    }

    playerName.innerHTML = players[id].playerName;
    pseudonym.innerHTML = players[id].pseudonym;

    // team.innerHTML = players[id].team;
    teamShorthand.innerHTML = players[id].teamShorthand + " ";

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

    birthDate.innerHTML = players[id].birthDate;
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
            const charUrl = `<a href="/guides/character.html?view=${char}" target="_blank">${characters[char].name}</a>`;
            charList.push(charUrl);
        }
        otherChars.innerHTML = charList.join("&nbsp;&ndash;&nbsp;");
    } else if (playerOtherChars) {
        otherChars.innerHTML = `<a href="/guides/character.html?view=${players[id].otherChars}" target="_blank">${characters[playerOtherChars].name}</a>`;
    } else {
        otherChars.innerHTML = "N/A";
    }
}

/* PROFILES */
const dobOptions = { day: "numeric", month: "long", year: "numeric" };

const players = {
    // DVK
    4092983: {
        playerId: 4092983,
        playerImg: "/assets/img/players/4092983.jpg",

        playerName: "Davy Kamanzi",
        pseudonym: "DVK",

        team: "Watchmen Esports",
        teamShorthand: "WTCH",

        birthDate: new Date("1997-08-10").toLocaleDateString("en-KE", dobOptions),
        platform: "PSN (PlayStation)",
        onlineId: "DavyK17",

        mainChar: "jin",
        otherChars: "miguel",

        twitter: "https://twitter.com/DavyK17",
        instagram: "https://instagram.com/davyk17",
        youtube: "https://youtube.com/davykamanzi",
        twitch: "https://twitch.tv/davyk17",
    },
    // Frost
    4644523: {
        playerId: 4644523,
        playerImg: "/assets/img/players/4644523.jpg",

        playerName: "Cassey Nyasio",
        pseudonym: "Frost",

        team: "Masters of Mayhem",
        teamShorthand: "MM",

        birthDate: new Date("2000-03-02").toLocaleDateString("en-KE", dobOptions),
        platform: "PSN (PlayStation)",
        onlineId: "dnyasio",

        mainChar: "leroy",
        otherChars: ["bryan", "claudio"],

        twitter: "https://twitter.com/nyasio_derrick",
        instagram: "https://instagram.com/__f.rost__",
        youtube: "https://www.youtube.com/channel/UCz9PiVLNjZ-sa3Kp3WsSEzw",
    },
    /*
    // Template
    0000000: {
        playerId: 0000000,
        playerImg: "/assets/img/players/0000000.jpg",

        playerName: "Full name",
        pseudonym: "Pseudonym",

        team: "",
        teamShorthand: "",

        birthDate: new Date("YYYY-MM-DD").toLocaleDateString("en-KE", dobOptions),
        platform: "Platform",
        onlineId: "Online ID",

        mainChar: "",
        otherChars: [""],

        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
        twitch: "https://twitch.tv/",
    },
    */
};

/* CALLING DISPLAY FUNCTION */
let params = (new URL(document.location)).searchParams;
let uniqueId = params.get("id");
display(uniqueId);