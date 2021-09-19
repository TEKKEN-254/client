/* BIRTH DATE FORMATTING */
const dobOptions = { day: "numeric", month: "long", year: "numeric" };

/* PLAYERS */
const players = {
    // DVK
    4092983: {
        playerId: 4092983,
        playerImg: "/assets/img/players/4092983.jpg",
        playerPronouns: "male",

        playerName: "Davy Kamanzi",
        pseudonym: "DVK",

        team: "Watchmen Esports",
        teamShorthand: "WTCH",

        birthDate: new Date("1997-08-10").toLocaleDateString("en-KE", dobOptions),
        displayBirthDate: true,

        platform: "PSN (PlayStation)",
        onlineId: "DavyK17",

        mainChar: "miguel",
        otherChars: ["jin", "geese"],

        twitter: "https://twitter.com/DavyK17",
        instagram: "https://instagram.com/davyk17",
        youtube: "https://youtube.com/davykamanzi",
        twitch: "https://twitch.tv/davyk17",

        stats: {
            circuit: {
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
            sfn: {
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
        },
    },
    // Frost
    4644523: {
        playerId: 4644523,
        playerImg: "/assets/img/players/4644523.jpg",
        playerPronouns: "male",

        playerName: "Cassey Nyasio",
        pseudonym: "Frost",

        team: "Masters of Mayhem",
        teamShorthand: "MM",

        birthDate: new Date("2000-03-02").toLocaleDateString("en-KE", dobOptions),
        displayBirthDate: true,

        platform: "PSN (PlayStation)",
        onlineId: "dnyasio",

        mainChar: "bryan",
        otherChars: ["dragunov", "lars", "claudio"],

        twitter: "https://twitter.com/nyasio_derrick",
        instagram: "https://instagram.com/__f.rost__",
        youtube: "https://www.youtube.com/channel/UCz9PiVLNjZ-sa3Kp3WsSEzw",

        stats: {
            circuit: {
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
            sfn: {
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
        },
    },
    /*
    // Template
    0000000: {
        playerId: 0000000,
        playerImg: "/assets/img/players/0000000.jpg",
        playerPronouns: "male/female/neutral",

        playerName: "Full name",
        pseudonym: "Pseudonym",

        team: "",
        teamShorthand: "",

        birthDate: new Date("YYYY-MM-DD").toLocaleDateString("en-KE", dobOptions),
        displayBirthDate: true,

        platform: "Platform",
        onlineId: "Online ID",

        mainChar: "",
        otherChars: [""],

        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
        twitch: "https://twitch.tv/",

        stats: {
            circuit: {

            },
            sfn: {

            },
        },
    },
    */
};


/* EXPORTING PROFILES */
export { players };