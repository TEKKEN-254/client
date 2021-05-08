/* IMPORTING PLAYERS */
import { players as playersTK } from "./player-list-tk.js";
import { players as playersMK } from "./player-list-mk.js";
import helperFunctions from "./helper-functions.js";
const { duplicateObject, getGame, numToWords, capitalize } = helperFunctions;

/* DECLARATIONS */
// Current season
let currentSeason = document.getElementById("current-season");
let currentNormal = document.getElementById("current-normal");
let currentFinalist = document.getElementById("current-finalist");

let currentRank = document.getElementById("current-rank");
let currentRankQ = document.getElementById("current-rank-q");
let currentRankR = document.getElementById("current-rank-r");
let currentRankF = document.getElementById("current-rank-f");
let currentPoints = document.getElementById("current-points");
let currentPointsQ = document.getElementById("current-points-q");
let currentPointsR = document.getElementById("current-points-r");

let currentTourneys = document.getElementById("current-tourneys-played");
let currentSetsWon = document.getElementById("current-sets-won");
let currentSetsLost = document.getElementById("current-sets-lost");
let currentMatchesWon = document.getElementById("current-matches-won");
let currentMatchesLost = document.getElementById("current-matches-lost");

// Totals
let totalTourneys = document.getElementById("total-tourneys-played");
let totalSetsWon = document.getElementById("total-sets-won");
let totalSetsLost = document.getElementById("total-sets-lost");
let totalMatchesWon = document.getElementById("total-matches-won");
let totalMatchesLost = document.getElementById("total-matches-lost");
let totalHighestFinish = document.getElementById("total-highest-finish");

// Season One
let isSeason1 = document.getElementById("season-1-stats");
let isNormalSeason1 = document.getElementById("season-1-normal");
let isFinalistSeason1 = document.getElementById("season-1-finalist");

let s1Rank = document.getElementById("season-1-rank");
let s1RankQ = document.getElementById("season-1-rank-q");
let s1RankF = document.getElementById("season-1-rank-f");
let s1Points = document.getElementById("season-1-points");
let s1PointsQ = document.getElementById("season-1-points-q");
let s1Tourneys = document.getElementById("season-1-tourneys-played");
let s1SetsWon = document.getElementById("season-1-sets-won");
let s1SetsLost = document.getElementById("season-1-sets-lost");
let s1MatchesWon = document.getElementById("season-1-matches-won");
let s1MatchesLost = document.getElementById("season-1-matches-lost");
let s1HighestFinish = document.getElementById("season-1-highest-finish");
let s1HFtourney = document.getElementById("season-1-hf-tourney");

// Season Two
let isSeason2 = document.getElementById("season-2-stats");
let isNormalSeason2 = document.getElementById("season-2-normal");
let isFinalistSeason2 = document.getElementById("season-2-finalist");

let s2Division = document.getElementById("season-2-division");
let s2Rank = document.getElementById("season-2-rank");
let s2RankQ = document.getElementById("season-2-rank-q");
let s2RankF = document.getElementById("season-2-rank-f");
let s2Points = document.getElementById("season-2-points");
let s2PointsQ = document.getElementById("season-2-points-q");
let s2Tourneys = document.getElementById("season-2-tourneys-played");
let s2SetsWon = document.getElementById("season-2-sets-won");
let s2SetsLost = document.getElementById("season-2-sets-lost");
let s2MatchesWon = document.getElementById("season-2-matches-won");
let s2MatchesLost = document.getElementById("season-2-matches-lost");
let s2HighestFinish = document.getElementById("season-2-highest-finish");
let s2HFtourney = document.getElementById("season-2-hf-tourney");

// Season Three
let isSeason3 = document.getElementById("season-3-stats");
let isNormalSeason3 = document.getElementById("season-3-normal");
let isFinalistSeason3 = document.getElementById("season-3-finalist");

let s3Division = document.getElementById("season-3-division");
let s3Rank = document.getElementById("season-3-rank");
let s3RankQ = document.getElementById("season-3-rank-q");
let s3RankF = document.getElementById("season-3-rank-f");
let s3Points = document.getElementById("season-3-points");
let s3PointsQ = document.getElementById("season-3-points-q");
let s3Tourneys = document.getElementById("season-3-tourneys-played");
let s3SetsWon = document.getElementById("season-3-sets-won");
let s3SetsLost = document.getElementById("season-3-sets-lost");
let s3MatchesWon = document.getElementById("season-3-matches-won");
let s3MatchesLost = document.getElementById("season-3-matches-lost");
let s3HighestFinish = document.getElementById("season-3-highest-finish");
let s3HFtourney = document.getElementById("season-3-hf-tourney");

// Season Four
let isSeason4 = document.getElementById("season-4-stats");
let isNormalSeason4 = document.getElementById("season-4-normal");
let isFinalistSeason4 = document.getElementById("season-4-finalist");

let s4Rank = document.getElementById("season-4-rank");
let s4RankQ = document.getElementById("season-4-rank-q");
let s4RankF = document.getElementById("season-4-rank-f");
let s4Points = document.getElementById("season-4-points");
let s4PointsQ = document.getElementById("season-4-points-q");
let s4Tourneys = document.getElementById("season-4-tourneys-played");
let s4SetsWon = document.getElementById("season-4-sets-won");
let s4SetsLost = document.getElementById("season-4-sets-lost");
let s4MatchesWon = document.getElementById("season-4-matches-won");
let s4MatchesLost = document.getElementById("season-4-matches-lost");
let s4HighestFinish = document.getElementById("season-4-highest-finish");
let s4HFtourney = document.getElementById("season-4-hf-tourney");

/* DEFINING PERTINENT DATA */

// Getting division
let division = getGame();

// Duplicating player objects
let players = {};
switch (division) {
    case "tekken":
        duplicateObject(playersTK, players);
        break;
    case "mk":
        duplicateObject(playersMK, players);
        break;
    default:
        console.log(`Sorry, the division "${division}" does not exist.`);
}

/* CURRENT SEASON FUNCTION */
const showCurrentSeason = num => {
    let word = numToWords(num);
    word = capitalize(word);

    currentSeason.innerHTML = `Season ${word}`;
    if (players[id]["stats"]["circuit"][`isFinalistSeason${num}`]) {
        currentNormal.style.display = "none";
        currentFinalist.style.display = "inline";
        currentRankF.innerHTML = players[id]["stats"]["circuit"][`s${num}RankF`];
        currentRankQ.innerHTML = players[id]["stats"]["circuit"][`s${num}Rank`];
        currentPointsQ.innerHTML = players[id]["stats"]["circuit"][`s${num}Points`];
    }
    // Adjust values to match current season
    currentRank.innerHTML = players[id]["stats"]["circuit"][`s${num}Rank`];
    currentRankR.innerHTML = players[id]["stats"]["circuit"][`s${num}Rank`];
    currentPoints.innerHTML = players[id]["stats"]["circuit"][`s${num}Points`];
    currentPointsR.innerHTML = players[id]["stats"]["circuit"][`s${num}Points`];

    currentTourneys.innerHTML = players[id]["stats"]["circuit"][`s${num}Tourneys`];
    currentSetsWon.innerHTML = players[id]["stats"]["circuit"][`s${num}SetsWon`];
    currentSetsLost.innerHTML = players[id]["stats"]["circuit"][`s${num}SetsLost`];
    currentMatchesWon.innerHTML = players[id]["stats"]["circuit"][`s${num}MatchesWon`];
    currentMatchesLost.innerHTML = players[id]["stats"]["circuit"][`s${num}MatchesLost`];
}


/* DISPLAY FUNCTION */
const displayStats = id => {
    // Current season logic
    switch (division) {
        case "tekken":
            showCurrentSeason(4);
            break;
        case "mk":
            showCurrentSeason(1);
            break;
    }

    // Totals
    totalTourneys.innerHTML = players[id]["stats"]["circuit"].totalTourneys;
    totalSetsWon.innerHTML = players[id]["stats"]["circuit"].totalSetsWon;
    totalSetsLost.innerHTML = players[id]["stats"]["circuit"].totalSetsLost;
    totalMatchesWon.innerHTML = players[id]["stats"]["circuit"].totalMatchesWon;
    totalMatchesLost.innerHTML = players[id]["stats"]["circuit"].totalMatchesLost;
    totalHighestFinish.innerHTML = players[id]["stats"]["circuit"].totalHighestFinish;


    // Season One
    if (players[id]["stats"]["circuit"].isSeason1) {
        isSeason1.style.display = "block";
    }
    if (division !== "tekken" && players[id]["stats"]["circuit"].isFinalistSeason1) {
        isNormalSeason1.style.display = "none";
        isFinalistSeason1.style.display = "inline";
        s1RankF.innerHTML = players[id]["stats"]["circuit"].s1RankF;
        s1RankQ.innerHTML = players[id]["stats"]["circuit"].s1Rank;
        s1PointsQ.innerHTML = players[id]["stats"]["circuit"].s1Points;
    }

    s1Rank.innerHTML = players[id]["stats"]["circuit"].s1Rank;
    s1Points.innerHTML = players[id]["stats"]["circuit"].s1Points;
    s1Tourneys.innerHTML = players[id]["stats"]["circuit"].s1Tourneys;
    s1SetsWon.innerHTML = players[id]["stats"]["circuit"].s1SetsWon;
    s1SetsLost.innerHTML = players[id]["stats"]["circuit"].s1SetsLost;
    s1MatchesWon.innerHTML = players[id]["stats"]["circuit"].s1MatchesWon;
    s1MatchesLost.innerHTML = players[id]["stats"]["circuit"].s1MatchesLost;
    s1HighestFinish.innerHTML = players[id]["stats"]["circuit"].s1HighestFinish;
    s1HFtourney.innerHTML = players[id]["stats"]["circuit"].s1HFtourney;


    // Season Two
    if (players[id]["stats"]["circuit"].isSeason2) {
        isSeason2.style.display = "block";
    }
    if (players[id]["stats"]["circuit"].isFinalistSeason2) {
        isNormalSeason2.style.display = "none";
        isFinalistSeason2.style.display = "inline";
        s2RankF.innerHTML = players[id]["stats"]["circuit"].s2RankF;
        s2RankQ.innerHTML = players[id]["stats"]["circuit"].s2Rank;
        s2PointsQ.innerHTML = players[id]["stats"]["circuit"].s2Points;
    }
    if (division === "tekken") {
        s2Division.innerHTML = players[id]["stats"]["circuit"].s2Division;
    }
    s2Rank.innerHTML = players[id]["stats"]["circuit"].s2Rank;
    s2Points.innerHTML = players[id]["stats"]["circuit"].s2Points;
    s2Tourneys.innerHTML = players[id]["stats"]["circuit"].s2Tourneys;
    s2SetsWon.innerHTML = players[id]["stats"]["circuit"].s2SetsWon;
    s2SetsLost.innerHTML = players[id]["stats"]["circuit"].s2SetsLost;
    s2MatchesWon.innerHTML = players[id]["stats"]["circuit"].s2MatchesWon;
    s2MatchesLost.innerHTML = players[id]["stats"]["circuit"].s2MatchesLost;
    s2HighestFinish.innerHTML = players[id]["stats"]["circuit"].s2HighestFinish;
    s2HFtourney.innerHTML = players[id]["stats"]["circuit"].s2HFtourney;


    // Season Three
    if (players[id]["stats"]["circuit"].isSeason3) {
        isSeason3.style.display = "block";
    }
    if (players[id]["stats"]["circuit"].isFinalistSeason3) {
        isNormalSeason3.style.display = "none";
        isFinalistSeason3.style.display = "inline";
        s3RankF.innerHTML = players[id]["stats"]["circuit"].s3RankF;
        s3RankQ.innerHTML = players[id]["stats"]["circuit"].s3Rank;
        s3PointsQ.innerHTML = players[id]["stats"]["circuit"].s3Points;
    }
    if (division === "tekken") {
        s3Division.innerHTML = players[id]["stats"]["circuit"].s3Division;
    }
    s3Rank.innerHTML = players[id]["stats"]["circuit"].s3Rank;
    s3Points.innerHTML = players[id]["stats"]["circuit"].s3Points;
    s3Tourneys.innerHTML = players[id]["stats"]["circuit"].s3Tourneys;
    s3SetsWon.innerHTML = players[id]["stats"]["circuit"].s3SetsWon;
    s3SetsLost.innerHTML = players[id]["stats"]["circuit"].s3SetsLost;
    s3MatchesWon.innerHTML = players[id]["stats"]["circuit"].s3MatchesWon;
    s3MatchesLost.innerHTML = players[id]["stats"]["circuit"].s3MatchesLost;
    s3HighestFinish.innerHTML = players[id]["stats"]["circuit"].s3HighestFinish;
    s3HFtourney.innerHTML = players[id]["stats"]["circuit"].s3HFtourney;


    // Season Four
    if (players[id]["stats"]["circuit"].isSeason4) {
        isSeason4.style.display = "block";
    }
    if (players[id]["stats"]["circuit"].isFinalistSeason4) {
        isNormalSeason4.style.display = "none";
        isFinalistSeason4.style.display = "inline";
        s4RankF.innerHTML = players[id]["stats"]["circuit"].s4RankF;
        s4RankQ.innerHTML = players[id]["stats"]["circuit"].s4Rank;
        s4PointsQ.innerHTML = players[id]["stats"]["circuit"].s4Points;
    }
    s4Rank.innerHTML = players[id]["stats"]["circuit"].s4Rank;
    s4Points.innerHTML = players[id]["stats"]["circuit"].s4Points;
    s4Tourneys.innerHTML = players[id]["stats"]["circuit"].s4Tourneys;
    s4SetsWon.innerHTML = players[id]["stats"]["circuit"].s4SetsWon;
    s4SetsLost.innerHTML = players[id]["stats"]["circuit"].s4SetsLost;
    s4MatchesWon.innerHTML = players[id]["stats"]["circuit"].s4MatchesWon;
    s4MatchesLost.innerHTML = players[id]["stats"]["circuit"].s4MatchesLost;
    s4HighestFinish.innerHTML = players[id]["stats"]["circuit"].s4HighestFinish;
    s4HFtourney.innerHTML = players[id]["stats"]["circuit"].s4HFtourney;
}


/* CALLING DISPLAY FUNCTION */
let params = (new URL(document.location)).searchParams;
let id = params.get("id");

if (typeof id !== "number") {
    id = id.toLowerCase();
    for (const player in players) {
        let playerId = players[player]["playerId"];
        let playerName = players[player]["playerName"].toLowerCase();
        let pseudonym = players[player]["pseudonym"] ? players[player]["pseudonym"].toLowerCase() : null;

        if (id === playerName || id === pseudonym) {
            id = playerId;
        }
    }
}

let uniqueId = Number.parseInt(id);
if (Number.isInteger(uniqueId)) {
    displayStats(uniqueId);
}