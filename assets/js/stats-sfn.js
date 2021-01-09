/* IMPORTING PLAYERS */
import { players } from "./player-list.js";

/* DECLARATIONS */
let currentRank = document.getElementById("current-rank");
let currentRankR = document.getElementById("current-rank-r");
let currentRankDiff = document.getElementById("current-rank-diff");
// let previousRank = document.getElementById("previous-rank");

let setsWon = document.getElementById("sets-won");
let setsLost = document.getElementById("sets-lost");
let matchesWon = document.getElementById("matches-won");
let matchesLost = document.getElementById("matches-lost");

let currentWinStreak = document.getElementById("current-win-streak");
let longestWinStreak = document.getElementById("longest-win-streak");
let currentLossStreak = document.getElementById("current-loss-streak");
let longestLossStreak = document.getElementById("longest-loss-streak");
let highestRank = document.getElementById("highest-rank");
let highestRankEdition = document.getElementById("hr-edition");

let lastSFN = document.getElementById("last-sfn");
let lastResult = document.getElementById("last-result");
let lastResultScore = document.getElementById("last-result-score");
let lastResultOpp = document.getElementById("last-result-opponent");
let lastResultOppId = document.getElementById("last-result-opponent-link");


/* DISPLAY FUNCTION */
const displayStats = id => {
    currentRank.innerHTML = playerStats[id].currentRank;
    currentRankR.innerHTML = playerStats[id].currentRank;
    if (!(playerStats[id].currentRankDiff === "Same")) {
        if (!(playerStats[id].currentRankDiff === "Up")) {
            if (!(playerStats[id].currentRankDiff === "Down")) {
                console.log(`Error: currentRankDiff must be set to "Up", "Down" or "Same"`);
            } else {
                currentRankDiff.innerHTML = `${playerStats[id].currentRankDiff} from ${playerStats[id].previousRank}`;
            }
        } else {
            currentRankDiff.innerHTML = `${playerStats[id].currentRankDiff} from ${playerStats[id].previousRank}`;
        }
    } else {
        currentRankDiff.innerHTML = "No change";
        playerStats[id].previousRank = null;
    }

    setsWon.innerHTML = playerStats[id].setsWon;
    setsLost.innerHTML = playerStats[id].setsLost;
    matchesWon.innerHTML = playerStats[id].matchesWon;
    matchesLost.innerHTML = playerStats[id].matchesLost;

    currentWinStreak.innerHTML = playerStats[id].currentWinStreak;
    longestWinStreak.innerHTML = playerStats[id].longestWinStreak;
    currentLossStreak.innerHTML = playerStats[id].currentLossStreak;
    longestLossStreak.innerHTML = playerStats[id].longestLossStreak;
    highestRank.innerHTML = playerStats[id].highestRank;
    highestRankEdition.innerHTML = playerStats[id].hrEdition;

    lastSFN.innerHTML = playerStats[id].lastSFN;
    if (!(playerStats[id].lastResult === "Win")) {
        if (!(playerStats[id].lastResult === "Loss")) {
            console.log(`
                    Error: lastResult must be set to "Win"
                    or "Loss"
                    `);
        } else {
            lastResult.innerHTML = playerStats[id].lastResult;
        }
    } else {
        lastResult.innerHTML = playerStats[id].lastResult;
    }
    lastResultScore.innerHTML = playerStats[id].lastResultScore;
    lastResultOpp.innerHTML = playerStats[id].lastResultOpp;
    lastResultOppId.href = "./profile.html?id=" + playerStats[id].lastResultOppId;
}


/* PLAYER STATS */
const playerStats = {
    // DVK
    4092983: {
        currentRank: "1st",
        currentRankDiff: "Same",
        // previousRank: ,

        setsWon: 4,
        setsLost: 1,
        matchesWon: 19,
        matchesLost: 10,

        currentWinStreak: 2,
        longestWinStreak: 2,
        currentLossStreak: 0,
        longestLossStreak: 1,
        highestRank: "1st",
        hrEdition: 5,

        lastSFN: 8,
        lastResult: "Win",
        lastResultScore: "5-3",
        lastResultOpp: "WTCH | Mickey",
        lastResultOppId: 2907096,
    },
    // Frost
    4644523: {
        currentRank: "3rd",
        currentRankDiff: "Same",
        // previousRank: ,

        setsWon: 3,
        setsLost: 2,
        matchesWon: 18,
        matchesLost: 16,

        currentWinStreak: 3,
        longestWinStreak: 3,
        currentLossStreak: 0,
        longestLossStreak: 2,
        highestRank: "2nd",
        hrEdition: 4,

        lastSFN: 7,
        lastResult: "Win",
        lastResultScore: "3-2",
        lastResultOpp: "Vega",
        lastResultOppId: 7167649,
    },
    /*
    // Template
    0000000: {
        currentRank: ,
        currentRankDiff: ,
        previousRank: ,

        setsWon: ,
        setsLost: ,
        matchesWon: ,
        matchesLost: ,

        currentWinStreak: ,
        longestWinStreak: ,
        currentLossStreak: ,
        longestLossStreak: ,
        highestRank: "",
        hrEdition: ,

        lastSFN: ,
        lastResult: ,
        lastResultScore: ,
        lastResultOpp: ,
        lastResultOppLink: ,
    },
    */
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
    displayStats(uniqueId);
}