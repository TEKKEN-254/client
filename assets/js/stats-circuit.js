/* IMPORTING PLAYERS */
import { players } from "./player-list.js";

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

let s1Rank = document.getElementById("season-1-rank");
let s1Points = document.getElementById("season-1-points");
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


/* DISPLAY FUNCTION */
const displayStats = id => {
    currentSeason.innerHTML = "Season Four";
    if (playerStats[id].isFinalistSeason4) {
        currentNormal.style.display = "none";
        currentFinalist.style.display = "inline";
        currentRankF.innerHTML = playerStats[id].s4RankF;
        currentRankQ.innerHTML = playerStats[id].s4Rank;
        currentPointsQ.innerHTML = playerStats[id].s4Points;
    }
    // Adjust values to match current season
    currentRank.innerHTML = playerStats[id].s4Rank;
    currentRankR.innerHTML = playerStats[id].s4Rank;
    currentPoints.innerHTML = playerStats[id].s4Points;
    currentPointsR.innerHTML = playerStats[id].s4Points;

    currentTourneys.innerHTML = playerStats[id].s4Tourneys;
    currentSetsWon.innerHTML = playerStats[id].s4SetsWon;
    currentSetsLost.innerHTML = playerStats[id].s4SetsLost;
    currentMatchesWon.innerHTML = playerStats[id].s4MatchesWon;
    currentMatchesLost.innerHTML = playerStats[id].s4MatchesLost;

    totalTourneys.innerHTML = playerStats[id].totalTourneys;
    totalSetsWon.innerHTML = playerStats[id].totalSetsWon;
    totalSetsLost.innerHTML = playerStats[id].totalSetsLost;
    totalMatchesWon.innerHTML = playerStats[id].totalMatchesWon;
    totalMatchesLost.innerHTML = playerStats[id].totalMatchesLost;
    totalHighestFinish.innerHTML = playerStats[id].totalHighestFinish;


    if (playerStats[id].isSeason1) {
        isSeason1.style.display = "block";
    }
    s1Rank.innerHTML = playerStats[id].s1Rank;
    s1Points.innerHTML = playerStats[id].s1Points;
    s1Tourneys.innerHTML = playerStats[id].s1Tourneys;
    s1SetsWon.innerHTML = playerStats[id].s1SetsWon;
    s1SetsLost.innerHTML = playerStats[id].s1SetsLost;
    s1MatchesWon.innerHTML = playerStats[id].s1MatchesWon;
    s1MatchesLost.innerHTML = playerStats[id].s1MatchesLost;
    s1HighestFinish.innerHTML = playerStats[id].s1HighestFinish;
    s1HFtourney.innerHTML = playerStats[id].s1HFtourney;


    if (playerStats[id].isSeason2) {
        isSeason2.style.display = "block";
    }
    if (playerStats[id].isFinalistSeason2) {
        isNormalSeason2.style.display = "none";
        isFinalistSeason2.style.display = "inline";
        s2RankF.innerHTML = playerStats[id].s2RankF;
        s2RankQ.innerHTML = playerStats[id].s2Rank;
        s2PointsQ.innerHTML = playerStats[id].s2Points;
    }
    s2Division.innerHTML = playerStats[id].s2Division;
    s2Rank.innerHTML = playerStats[id].s2Rank;
    s2Points.innerHTML = playerStats[id].s2Points;
    s2Tourneys.innerHTML = playerStats[id].s2Tourneys;
    s2SetsWon.innerHTML = playerStats[id].s2SetsWon;
    s2SetsLost.innerHTML = playerStats[id].s2SetsLost;
    s2MatchesWon.innerHTML = playerStats[id].s2MatchesWon;
    s2MatchesLost.innerHTML = playerStats[id].s2MatchesLost;
    s2HighestFinish.innerHTML = playerStats[id].s2HighestFinish;
    s2HFtourney.innerHTML = playerStats[id].s2HFtourney;


    if (playerStats[id].isSeason3) {
        isSeason3.style.display = "block";
    }
    if (playerStats[id].isFinalistSeason3) {
        isNormalSeason3.style.display = "none";
        isFinalistSeason3.style.display = "inline";
        s3RankF.innerHTML = playerStats[id].s3RankF;
        s3RankQ.innerHTML = playerStats[id].s3Rank;
        s3PointsQ.innerHTML = playerStats[id].s3Points;
    }
    s3Division.innerHTML = playerStats[id].s3Division;
    s3Rank.innerHTML = playerStats[id].s3Rank;
    s3Points.innerHTML = playerStats[id].s3Points;
    s3Tourneys.innerHTML = playerStats[id].s3Tourneys;
    s3SetsWon.innerHTML = playerStats[id].s3SetsWon;
    s3SetsLost.innerHTML = playerStats[id].s3SetsLost;
    s3MatchesWon.innerHTML = playerStats[id].s3MatchesWon;
    s3MatchesLost.innerHTML = playerStats[id].s3MatchesLost;
    s3HighestFinish.innerHTML = playerStats[id].s3HighestFinish;
    s3HFtourney.innerHTML = playerStats[id].s3HFtourney;


    if (playerStats[id].isSeason4) {
        isSeason4.style.display = "block";
    }
    if (playerStats[id].isFinalistSeason4) {
        isNormalSeason4.style.display = "none";
        isFinalistSeason4.style.display = "inline";
        s4RankF.innerHTML = playerStats[id].s4RankF;
        s4RankQ.innerHTML = playerStats[id].s4Rank;
        s4PointsQ.innerHTML = playerStats[id].s4Points;
    }
    s4Rank.innerHTML = playerStats[id].s4Rank;
    s4Points.innerHTML = playerStats[id].s4Points;
    s4Tourneys.innerHTML = playerStats[id].s4Tourneys;
    s4SetsWon.innerHTML = playerStats[id].s4SetsWon;
    s4SetsLost.innerHTML = playerStats[id].s4SetsLost;
    s4MatchesWon.innerHTML = playerStats[id].s4MatchesWon;
    s4MatchesLost.innerHTML = playerStats[id].s4MatchesLost;
    s4HighestFinish.innerHTML = playerStats[id].s4HighestFinish;
    s4HFtourney.innerHTML = playerStats[id].s4HFtourney;
}


/* PLAYER STATS */

const playerStats = {
    // DVK
    "4092983": {
        // Totals
        totalTourneys: 17,
        totalSetsWon: 87,
        totalSetsLost: 40,
        totalMatchesWon: 211,
        totalMatchesLost: 149,
        totalHighestFinish: "2nd",

        // Season One
        isSeason1: true,

        s1Rank: "4th",
        s1Points: 97,
        s1Tourneys: 4,
        s1SetsWon: 16,
        s1SetsLost: 7,
        s1MatchesWon: 51,
        s1MatchesLost: 40,
        s1HighestFinish: "2nd",
        s1HFtourney: "R2",

        // Season Two
        isSeason2: true,
        isFinalistSeason2: true,

        s2Division: "Premier",
        s2RankF: "4th",
        s2Rank: "2nd",
        s2Points: 65,
        s2Tourneys: 4,
        s2SetsWon: 25,
        s2SetsLost: 10,
        s2MatchesWon: 55,
        s2MatchesLost: 30,
        s2HighestFinish: "2nd",
        s2HFtourney: "Q2",

        // Season Three
        isSeason3: true,
        isFinalistSeason3: true,

        s3Division: "Premier",
        s3RankF: "T-9th",
        s3Rank: "3rd",
        s3Points: 121,
        s3Tourneys: 7,
        s3SetsWon: 39,
        s3SetsLost: 20,
        s3MatchesWon: 88,
        s3MatchesLost: 64,
        s3HighestFinish: "2nd",
        s3HFtourney: "Q2, Q6",

        // Season Four
        isSeason4: true,
        // isFinalistSeason4: ,

        // s4RankF: "",
        s4Rank: "3rd",
        s4Points: 16,
        s4Tourneys: 2,
        s4SetsWon: 7,
        s4SetsLost: 4,
        s4MatchesWon: 17,
        s4MatchesLost: 15,
        s4HighestFinish: "2nd",
        s4HFtourney: "Q2",
    },
    // Frost
    "4644523": {
        // Totals
        totalTourneys: 15,
        totalSetsWon: 80,
        totalSetsLost: 37,
        totalMatchesWon: 197,
        totalMatchesLost: 120,
        totalHighestFinish: "1st",

        // Season One
        isSeason1: true,

        s1Rank: "11th",
        s1Points: 20,
        s1Tourneys: 3,
        s1SetsWon: 5,
        s1SetsLost: 6,
        s1MatchesWon: 20,
        s1MatchesLost: 21,
        s1HighestFinish: "7th",
        s1HFtourney: "R2, R3",

        // Season Two
        isSeason2: true,
        isFinalistSeason2: true,
        s2RankF: "T-5th",

        s2Division: "Premier",
        s2Rank: "6th",
        s2Points: 55,
        s2Tourneys: 4,
        s2SetsWon: 17,
        s2SetsLost: 12,
        s2MatchesWon: 41,
        s2MatchesLost: 31,
        s2HighestFinish: "3rd",
        s2HFtourney: "Q2, Q3",

        // Season Three
        isSeason3: true,
        isFinalistSeason3: true,
        s3RankF: "3rd",

        s3Division: "Premier",
        s3Rank: "2nd",
        s3Points: 135,
        s3Tourneys: 7,
        s3SetsWon: 48,
        s3SetsLost: 16,
        s3MatchesWon: 113,
        s3MatchesLost: 53,
        s3HighestFinish: "2nd",
        s3HFtourney: "Q3, Q4, Q5",

        // Season Four
        isSeason4: true,
        // isFinalistSeason4: ,
        // s4RankF: "",

        s4Rank: "2nd",
        s4Points: 17,
        s4Tourneys: 2,
        s4SetsWon: 10,
        s4SetsLost: 3,
        s4MatchesWon: 23,
        s4MatchesLost: 15,
        s4HighestFinish: "1st",
        s4HFtourney: "Q1",
    },
    /*
    // Template
    "0000000": {
        // Totals
        totalTourneys: ,
        totalSetsWon: ,
        totalSetsLost: ,
        totalMatchesWon: ,
        totalMatchesLost: ,
        totalHighestFinish: "",

        // Season One
        isSeason1: , // Use boolean value

        s1Rank: "",
        s1Points: ,
        s1Tourneys: ,
        s1SetsWon: ,
        s1SetsLost: ,
        s1MatchesWon: ,
        s1MatchesLost: ,
        s1HighestFinish: "",
        s1HFtourney: "",

        // Season Two
        isSeason2: , // Use boolean value
        isFinalistSeason2: , // Use boolean value
        s2RankF: "",
        
        s2Division: "",
        s2Rank: "",
        s2Points: ,
        s2Tourneys: ,
        s2SetsWon: ,
        s2SetsLost: ,
        s2MatchesWon: ,
        s2MatchesLost: ,
        s2HighestFinish: "",
        s2HFtourney: "",

        // Season Three
        isSeason3: , // Use boolean value
        isFinalistSeason3: , // Use boolean value
        s3RankF: "",

        s3Division: "",
        s3Rank: "",
        s3Points: ,
        s3Tourneys: ,
        s3SetsWon: ,
        s3SetsLost: ,
        s3MatchesWon: ,
        s3MatchesLost: ,
        s3HighestFinish: "",
        s3HFtourney: "",

        // Season Four
        isSeason4: , // Use boolean value
        isFinalistSeason4: , // Use boolean value
        s4RankF: "",

        s4Rank: "",
        s4Points: ,
        s4Tourneys: ,
        s4SetsWon: ,
        s4SetsLost: ,
        s4MatchesWon: ,
        s4MatchesLost: ,
        s4HighestFinish: "",
        s4HFtourney: "",
    },
     */
};


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