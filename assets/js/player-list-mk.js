/* BIRTH DATE FORMATTING */
const dobOptions = { day: "numeric", month: "long", year: "numeric" };

/* PLAYERS */
const players = {
    // Baraza
    3502487: {
        playerId: 3502487,
        playerImg: "/assets/img/players/3502487.jpg",
        playerPronouns: "male",

        playerName: "Yunus Baraza",
        pseudonym: "Baraza",

        team: "Rampage Esports",
        teamShorthand: "RMP",

        birthDate: new Date("1995-07-15").toLocaleDateString("en-KE", dobOptions),
        displayBirthDate: false,

        platform: "PSN (PlayStation)",
        onlineId: "Jay25flow_MK",

        mainChar: "cassie",
        otherChars: ["cetrion", "jacqui", "johnny", "liu-kang"],

        twitter: "https://twitter.com/Baraza_Snr",
        instagram: "https://instagram.com/baraza_snr",
        youtube: "https://youtube.com/channel/UCty0PI1MoIgLZaWKGV6FgUg",

        stats: {
            circuit: {
                // Totals
                totalTourneys: 2,
                totalSetsWon: 4,
                totalSetsLost: 4,
                totalMatchesWon: 15,
                totalMatchesLost: 11,
                totalHighestFinish: "2nd",

                // Season One
                isSeason1: true,
                // isFinalistSeason1: ,

                // s1RankF: "",
                s1Rank: "3rd",
                s1Points: 11,
                s1Tourneys: 2,
                s1SetsWon: 4,
                s1SetsLost: 4,
                s1MatchesWon: 15,
                s1MatchesLost: 11,
                s1HighestFinish: "2nd",
                s1HFtourney: "Q1",
            },
            /*
            sfn: {
                currentRank: "",
                currentRankDiff: "Up/Down/Same",
                // previousRank: ,

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
                lastResult: "",
                lastResultScore: "",
                lastResultOpp: "",
                lastResultOppId: ,
            },
            */
        },
    },

    // Mr Stacks
    1717441: {
        playerId: 1717441,
        playerImg: "/assets/img/players/1717441.jpg",
        playerPronouns: "male",

        playerName: "Abdiqani Rashid",
        pseudonym: "Mr Stacks",

        team: "FTG",
        teamShorthand: "FTG",

        birthDate: new Date("1990-05-21").toLocaleDateString("en-KE", dobOptions),
        displayBirthDate: false,

        platform: "PSN (PlayStation)",
        onlineId: "ArybaStacks",

        mainChar: "cetrion",
        otherChars: ["cassie", "sonya"],

        instagram: "https://instagram.com/arybastacks",

        stats: {
            circuit: {
                // Totals
                totalTourneys: 2,
                totalSetsWon: 10,
                totalSetsLost: 2,
                totalMatchesWon: 32,
                totalMatchesLost: 12,
                totalHighestFinish: "1st",

                // Season One
                isSeason1: true,
                // isFinalistSeason1: ,

                // s1RankF: "",
                s1Rank: "1st",
                s1Points: 16,
                s1Tourneys: 2,
                s1SetsWon: 10,
                s1SetsLost: 2,
                s1MatchesWon: 32,
                s1MatchesLost: 12,
                s1HighestFinish: "1st",
                s1HFtourney: "Q1, Q2",
            },
            /*
            sfn: {
                currentRank: "",
                currentRankDiff: "Up/Down/Same",
                // previousRank: ,

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
                lastResult: "",
                lastResultScore: "",
                lastResultOpp: "",
                lastResultOppId: ,
            },
            */
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
                // Totals
                totalTourneys: ,
                totalSetsWon: ,
                totalSetsLost: ,
                totalMatchesWon: ,
                totalMatchesLost: ,
                totalHighestFinish: "",

                // Season One
                isSeason1: true,
                // isFinalistSeason1: ,

                // s1RankF: "",
                s1Rank: "",
                s1Points: ,
                s1Tourneys: ,
                s1SetsWon: ,
                s1SetsLost: ,
                s1MatchesWon: ,
                s1MatchesLost: ,
                s1HighestFinish: "",
                s1HFtourney: "",
            },
            sfn: {
                currentRank: "",
                currentRankDiff: "Up/Down/Same",
                // previousRank: ,

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
                lastResult: "",
                lastResultScore: "",
                lastResultOpp: "",
                lastResultOppId: ,
            },
        },
    },
    */
};


/* EXPORTING PROFILES */
export { players };