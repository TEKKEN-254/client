/* BIRTH DATE FORMATTING */
const dobOptions = { day: "numeric", month: "long", year: "numeric" };

/* PLAYERS */
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
        displayBirthDate: true,

        platform: "PSN (PlayStation)",
        onlineId: "DavyK17",

        mainChar: "jin",
        otherChars: ["miguel", "geese"],

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
        displayBirthDate: true,

        platform: "PSN (PlayStation)",
        onlineId: "dnyasio",

        mainChar: "bryan",
        otherChars: ["dragunov", "lars", "claudio"],

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
    },
    */
    /* PLAYERS OBJECT SIZE */
    get numberOf() {
        return (Object.keys(this).length - 1);
    }
};


/* EXPORTING PROFILES */
export { players };