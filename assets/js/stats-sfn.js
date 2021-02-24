/* IMPORTING PLAYERS */
import { players } from "./player-list-tk.js";

/* DECLARATIONS */
let currentRank = document.getElementById("current-rank");
let currentRankR = document.getElementById("current-rank-r");
let currentRankDiff = document.getElementById("current-rank-diff");

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
    currentRank.innerHTML = players[id]["stats"]["sfn"].currentRank;
    currentRankR.innerHTML = players[id]["stats"]["sfn"].currentRank;
    if (!(players[id]["stats"]["sfn"].currentRankDiff === "Same")) {
        if (!(players[id]["stats"]["sfn"].currentRankDiff === "Up") && !(players[id]["stats"]["sfn"].currentRankDiff === "Down")) {
            console.log(`Error: currentRankDiff must be set to "Up", "Down" or "Same"`);
        } else {
            currentRankDiff.innerHTML = `${players[id]["stats"]["sfn"].currentRankDiff} from ${players[id]["stats"]["sfn"].previousRank}`;
        }
    } else {
        currentRankDiff.innerHTML = "No change";
        players[id]["stats"]["sfn"].previousRank = null;
    }

    setsWon.innerHTML = players[id]["stats"]["sfn"].setsWon;
    setsLost.innerHTML = players[id]["stats"]["sfn"].setsLost;
    matchesWon.innerHTML = players[id]["stats"]["sfn"].matchesWon;
    matchesLost.innerHTML = players[id]["stats"]["sfn"].matchesLost;

    currentWinStreak.innerHTML = players[id]["stats"]["sfn"].currentWinStreak;
    longestWinStreak.innerHTML = players[id]["stats"]["sfn"].longestWinStreak;
    currentLossStreak.innerHTML = players[id]["stats"]["sfn"].currentLossStreak;
    longestLossStreak.innerHTML = players[id]["stats"]["sfn"].longestLossStreak;
    highestRank.innerHTML = players[id]["stats"]["sfn"].highestRank;
    highestRankEdition.innerHTML = players[id]["stats"]["sfn"].hrEdition;

    lastSFN.innerHTML = players[id]["stats"]["sfn"].lastSFN;
    if (!(players[id]["stats"]["sfn"].lastResult === "Win")) {
        if (!(players[id]["stats"]["sfn"].lastResult === "Loss")) {
            console.log(`
                    Error: lastResult must be set to "Win"
                    or "Loss"
                    `);
        } else {
            lastResult.innerHTML = players[id]["stats"]["sfn"].lastResult;
        }
    } else {
        lastResult.innerHTML = players[id]["stats"]["sfn"].lastResult;
    }
    lastResultScore.innerHTML = players[id]["stats"]["sfn"].lastResultScore;
    lastResultOpp.innerHTML = players[id]["stats"]["sfn"].lastResultOpp;
    lastResultOppId.href = "./profile.html?id=" + players[id]["stats"]["sfn"].lastResultOppId;
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