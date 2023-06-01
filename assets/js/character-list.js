/* CHARACTERS */
const characters = {
    // Akuma
    akuma: {
        // Profile
        name: "Akuma (Gouki)",
        nickname: "The Raging Demon",
        sex: "male",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/akuma",

        age: "Unknown",
        country: "Unknown",
        fightingStyle: "Ansatsuken, Satsui no Hadō",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 10,
        defence: 10,
        range: 7,
        punishment: 7,

        gimmicks: 4,
        execution: 5,
        hurtbox: 3,

        // Playstyle
        playstyle: `Offensive, unorthodox, "MESSATSU!"`,
        introduction: "<p>Guest character from Capcom's <em>Street Fighter</em> series with great offensive tools and some of the highest damage output in the game thanks to his meter and special moves. However, a lot of his key moves come with some risk, generally being either unsafe on block or leaving him vulnerable in mid-air.</p>",

        // Notable players 
        notablePlayers: ["Vega"],
    },
    get gouki() {
        return this.akuma;
    },
    get gōki() {
        return this.akuma;
    },

    // Alisa Bosconovitch
    alisa: {
        // Profile
        name: "Alisa Bosconovitch",
        nickname: "The Steel Maiden",
        sex: "female",

        flag: "/assets/img/flagicons/russia.svg",
        image: "/assets/img/characters/tk7/alisa-2",

        age: "Unknown",
        country: "Russia",
        fightingStyle: "High-mobility combat using thrusters",
        debut: "<em>Tekken 6</em>",

        // Scores
        offense: 9,
        defence: 9,
        range: 8,
        punishment: 8,

        gimmicks: 5,
        execution: 2,
        hurtbox: 2,

        // Playstyle
        playstyle: "Versatile, poking",
        introduction: "<p>Fairly well-rounded character who excels in defence with great options from the mid-range and great poking, as well as dangerous offensive tools in her Destructive Form (DES). However, her moves from her unique stances, for the most part, are pretty linear and weak under pressure.</p>",

        // Notable players 
        notablePlayers: ["Mickey"],
    },
    get "alisa bosconovitch" () {
        return this.alisa;
    },

    // Anna Williams
    anna: {
        // Profile
        name: "Anna Williams",
        nickname: "The Scarlet Lightning",
        sex: "female",

        flag: "/assets/img/flagicons/ireland.svg",
        image: "/assets/img/characters/tk7/anna",

        age: "41 (physically 22 due to cryosleep)",
        country: "Republic of Ireland",
        fightingStyle: "Assassination arts (based on Aikido and Koppojutsu)",
        debut: "<em>Tekken</em>",

        // Scores
        offense: 9,
        defence: 6,
        range: 6,
        punishment: 4,

        gimmicks: 5,
        execution: 3,
        hurtbox: 2,

        // Playstyle
        playstyle: "Offensive, mix-up heavy",
        introduction: "<p>Rushdown character with dangerous mix-ups from close range, good damage output and a great variety of throws, while her Chaos Judgment (CJM) stance auto-launches lows and auto-reverses throws. However, most of her best lows carry some heavy risk, while her punishment in general is very poor.</p>",

        // Notable players 
        notablePlayers: ["Frost"],
    },
    get "anna williams" () {
        return this.anna;
    },

    // Armor King
    armorKing: {
        // Profile
        name: "Armor King",
        nickname: "The Mysterious Masked Wrestler",
        sex: "male",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/armor-king",

        age: "Unknown",
        country: "Unknown",
        fightingStyle: "Shoot wrestling",
        debut: "<em>Tekken 5: Dark Resurrection</em> (Armor King II; the first Armor King debuted in <em>Tekken</em>)",

        // Scores
        offense: 7,
        defence: 6,
        range: 8,
        punishment: 7,

        gimmicks: 4,
        execution: 3,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, grappling",
        introduction: "<p>Versatile character with good poking, great counter-hit tools, good range and a great selection of throws, including from his wavedash mix-up to begin a chain of throws with high damage potential. However, he suffers from bad tracking on a number of his key attacks, while his while standing punishment is lacklustre.</p>",

        // Notable players 
        notablePlayers: ["Furious Monkey", "Vega"],
    },
    get armorking() {
        return this.armorKing;
    },
    get "armor-king" () {
        return this.armorKing;
    },
    get armourKing() {
        return this.armorKing;
    },
    get armourking() {
        return this.armorKing;
    },
    get "armour-king" () {
        return this.armorKing;
    },
    get "armor king" () {
        return this.armorKing;
    },
    get "armour king" () {
        return this.armorKing;
    },

    // Asuka Kazama
    asuka: {
        // Profile
        name: "Asuka Kazama",
        nickname: "The Gang Mediator",
        sex: "female",

        flag: "/assets/img/flagicons/japan.svg",
        image: "/assets/img/characters/tk7/asuka-2",

        age: 17,
        country: "Japan",
        fightingStyle: "Kazama-ryū traditional martial arts",
        debut: "<em>Tekken 5</em>",

        // Scores
        offense: 7,
        defence: 10,
        range: 7,
        punishment: 6,

        gimmicks: 5,
        execution: 1,
        hurtbox: 2,

        // Playstyle
        playstyle: "Defensive, keep-out",
        introduction: "<p>Turtle character with excellent defensive options, excellent whiff punishment and good crushing on some key moves. Ironically, she struggles to rush down defensive opponents herself as she lacks any great offensive tools, while her 10-frame punishment is extremely poor.</p>",

        // Notable players 
        notablePlayers: ["Username-Required", "Yaz"],
    },
    get "asuka kazama" () {
        return this.asuka;
    },
    get "kazama asuka" () {
        return this.asuka;
    },

    // Bob Richards
    bob: {
        // Profile
        name: `Robert "Bob" Richards`,
        nickname: "Speed and Weight",
        sex: "male",

        flag: "/assets/img/flagicons/united-states.svg",
        image: "/assets/img/characters/tk7/bob",

        age: 27,
        country: "United States",
        fightingStyle: "Freestyle karate",
        debut: "<em>Tekken 6</em>",

        // Scores
        offense: 9,
        defence: 7,
        range: 8,
        punishment: 7,

        gimmicks: 4,
        execution: 2,
        hurtbox: 3,

        // Playstyle
        playstyle: "Offensive, poking, set-up heavy",
        introduction: "<p>Offensive character with great pokes, annoying lows, effective counter hit tools and good range, as well as a few decent defensive options. However, he generally has an average damage output and slow standing launchers.</p>",

        // Notable players 
        notablePlayers: ["Mickey", "Battousai"],
    },
    get "bob richards" () {
        return this.bob;
    },
    get "robert richards" () {
        return this.bob;
    },

    // Bryan Fury
    bryan: {
        // Profile
        name: "Bryan Fury",
        nickname: "Snake Eyes",
        sex: "male",

        flag: "/assets/img/flagicons/united-states.svg",
        image: "/assets/img/characters/tk7/bryan-2",

        age: "31 (cyborg)",
        country: "United States",
        fightingStyle: "Kickboxing",
        debut: "<em>Tekken 3</em>",

        // Scores
        offense: 8,
        defence: 9,
        range: 8,
        punishment: 8,

        gimmicks: 5,
        execution: 4,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, keep-out, counter hit baiting",
        introduction: "<p>Versatile character who excels in controlling space, with great options at both close and mid-range to keep the opponent honest. However, he tends to struggle under pressure as he lacks any great “panic moves,” while his back sway and taunt set-ups make it difficult to realise his full potential at higher levels of play.</p>",

        // Notable players 
        notablePlayers: ["Frost"],
    },
    get brian() {
        return this.bryan;
    },
    get "bryan fury" () {
        return this.bryan;
    },
    get "brian fury" () {
        return this.bryan;
    },

    // Claudio Serafino
    claudio: {
        // Profile
        name: "Claudio Serafino",
        nickname: "The Archer of Sirius",
        sex: "male",

        flag: "/assets/img/flagicons/italy.svg",
        image: "/assets/img/characters/tk7/claudio",

        age: 27,
        country: "Italy",
        fightingStyle: "Sirius-style exorcism sorcery",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 9,
        defence: 8,
        range: 8,
        punishment: 7,

        gimmicks: 5,
        execution: 1,
        hurtbox: 3,

        // Playstyle
        playstyle: `Versatile, poking, "DAH!"`,
        introduction: "<p>Fairly versatile character who excels in offense with great poking, great counter hit tools, a good damage output and good range on key moves. The variety of his throws, however, is lacklustre, while a lot of his effective offense comes with his Starburst state, which can only be activated by landing certain moves.</p>",

        // Notable players
        notablePlayers: ["Frost", "Ghost"],
    },
    get "claudio serafino" () {
        return this.claudio;
    },

    // Devil Jin
    devilJin: {
        // Profile
        name: "Devil Jin",
        nickname: "The Heir of the Cursed Blood",
        sex: "male",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/devil-jin-2",

        age: 21,
        country: "Unknown",
        fightingStyle: "Advanced Mishima-ryū karate, Kazama-ryū traditional martial arts",
        debut: "<em>Tekken 5</em>",

        // Scores
        offense: 9,
        defence: 8,
        range: 8,
        punishment: 10,

        gimmicks: 3,
        execution: 4,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, Mishima",
        introduction: "<p>Extremely versatile character with answers to pretty much any situation he finds himself in; great options on both offense and defence at close and mid-range, excellent punishment, great counter hit tools, great damage output and variety in his throws. As a Mishima character, he does however require good execution to succeed at higher levels of play.</p>",

        // Notable players 
        notablePlayers: ["Tony Claessen", "Frost"],
    },
    get deviljin() {
        return this.devilJin;
    },
    get "devil-jin" () {
        return this.devilJin;
    },
    get "devil jin" () {
        return this.devilJin;
    },

    // Sergei Dragunov
    dragunov: {
        // Profile
        name: "Sergei Dragunov",
        nickname: "The White Angel of Death",
        sex: "male",

        flag: "/assets/img/flagicons/russia.svg",
        image: "/assets/img/characters/tk7/dragunov-2",

        age: 26,
        country: "Russia",
        fightingStyle: "Commando Sambo",
        debut: "<em>Tekken 5: Dark Resurrection</em>",

        // Scores
        offense: 10,
        defence: 8,
        range: 8,
        punishment: 8,

        gimmicks: 4,
        execution: 3,
        hurtbox: 4,

        // Playstyle
        playstyle: "Offensive, poking, finna d+2",
        introduction: "<p>Very well-rounded character who excels in offense, with great pressure tools, great counter hit tools, variety in his throws and lethal options from ultimate tackle to harass the opponent, as well as effective keep-out tools to keep them in check. However, while not a significant weakness, his punishment perhaps could be better in terms of damage.</p>",

        // Notable players 
        notablePlayers: ["Frost", "Vega"],
    },
    get sergei() {
        return this.dragunov;
    },
    get drag() {
        return this.dragunov;
    },
    get "sergei dragunov" () {
        return this.dragunov;
    },

    // Eddy Gordo
    eddy: {
        // Profile
        name: "Eddy Gordo",
        nickname: "The Capoeira Prodigy",
        sex: "male",

        flag: "/assets/img/flagicons/brazil.svg",
        image: "/assets/img/characters/tk7/eddy",

        age: 29,
        country: "Brazil",
        fightingStyle: "Capoeira",
        debut: "<em>Tekken 3</em>",

        // Scores
        offense: 5,
        defence: 5,
        range: 7,
        punishment: 6,

        gimmicks: 5,
        execution: 3,
        hurtbox: 4,

        // Playstyle
        playstyle: "Offensive, mix-up heavy",
        introduction: "<p>Elusive character with stances that go low to the ground and crush a lot of high and some mid attacks, greatly limiting the opponent's options, with good poking from his stances and some good keep-out tools. Despite also having great while standing punishment, his standing punishment is mediocre, and a lot of his best moves are unsafe on block, frequently leaving him fighting at a disadvantage.</p>",

        // Notable players 
        notablePlayers: ["Furious Monkey"],
    },
    get "eddy gordo" () {
        return this.eddy;
    },

    // Eliza
    eliza: {
        // Profile
        name: "Eliza",
        nickname: "The Sleepy Vampire",
        sex: "female",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/eliza",

        age: "1,000+",
        country: "Unknown",
        fightingStyle: "Unknown",
        debut: "<em>Tekken Revolution</em>",

        // Scores
        offense: 7,
        defence: 5,
        range: 6,
        punishment: 6,

        gimmicks: 4,
        execution: 5,
        hurtbox: 1,

        // Playstyle
        playstyle: "Offensive, unorthodox",
        introduction: "<p>Offensive character with 2D-style tools such as projectiles and meter, allowing her some of the highest damage output in the game to go with decent poking and decent range. However, she lacks any truly effective defensive options, while a lot of her key moves are unsafe on block, meaning she has to take big risks to deal significant damage.</p>",

        // Notable players 
        notablePlayers: ["Harem Shoryu"],
    },

    // Fahkumram
    fahkumram: {
        // Profile
        name: "Fahkumram",
        nickname: "The Humble Hostage",
        sex: "male",

        flag: "/assets/img/flagicons/thailand.svg",
        image: "/assets/img/characters/tk7/fahkumram",

        age: 28,
        country: "Thailand",
        fightingStyle: "Muay Thai",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 10,
        defence: 8,
        range: 10,
        punishment: 10,

        gimmicks: 5,
        execution: 2,
        hurtbox: 5,

        // Playstyle
        playstyle: "Versatile, set-up heavy",
        introduction: "<p>Extremely versatile character with a good answer for virtually every question, using his great poking, excellent range, excellent punishment, great damage output and fearsome counter hit tools. However, his large frame renders him unable to sidestep attacks that most other characters can, while also leaving him vulnerable to more damaging combos.</p>",

        // Notable players 
        notablePlayers: ["Nixx Fury"],
    },
    get fahk() {
        return this.fahkumram;
    },

    // Feng Wei
    feng: {
        // Profile
        name: "Feng Wei",
        nickname: "The Master of God Fist",
        sex: "male",

        flag: "/assets/img/flagicons/china.svg",
        image: "/assets/img/characters/tk7/feng-2",

        age: 26,
        country: "China",
        fightingStyle: "God Fist-style Chinese martial arts",
        debut: "<em>Tekken 5</em>",

        // Scores
        offense: 9,
        defence: 9,
        range: 8,
        punishment: 6,

        gimmicks: 4,
        execution: 2,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, poking, set-up heavy",
        introduction: "<p>Well-rounded character who does well in both offense and defence, with great poking, dangerous mix-ups, good range, great whiff punishment and some elusive stances. He does, however, lack range on a number of key punishers.</p>",

        // Notable players 
        notablePlayers: ["Frost", "Ghost", "PR1EST"],
    },
    get "feng wei" () {
        return this.feng;
    },

    // Ganryu
    ganryu: {
        // Profile
        name: "Ganryu",
        nickname: "The Sumo Streamer",
        sex: "male",

        flag: "/assets/img/flagicons/japan.svg",
        image: "/assets/img/characters/tk7/ganryu",

        age: 55,
        country: "Japan",
        fightingStyle: "Sumo",
        debut: "<em>Tekken</em>",

        // Scores
        offense: 10,
        defence: 8,
        range: 6,
        punishment: 8,

        gimmicks: 5,
        execution: 3,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, poking, mix-up heavy",
        introduction: "<p>Well-rounded character (no pun intended) with intimidating offense, consisting of some good poking, great mix-ups (especially at the wall), good counter hit tools and variety in his throws, as well as some good evasive tools. However, he struggles to impose himself away from close range, and while he has good punishment, some of it tends to be inconsistent thanks to some finnicky hitboxes.</p>",

        // Notable players 
        notablePlayers: ["Mickey", "Battousai", "PR1EST"],
    },

    // Geese Howard
    geese: {
        // Profile
        name: "Geese Howard",
        nickname: "The Crime Lord of South Town",
        sex: "male",

        flag: "/assets/img/flagicons/united-states.svg",
        image: "/assets/img/characters/tk7/geese",

        age: 43,
        country: "United States",
        fightingStyle: "Aiki-jujutsu, Kobujutsu, Hakkyokuseiken",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 9,
        defence: 10,
        range: 6,
        punishment: 7,

        gimmicks: 5,
        execution: 4,
        hurtbox: 4,

        // Playstyle
        playstyle: `Versatile, unorthodox, "PREDICTABO!"`,
        introduction: "<p>Guest character from SNK's <em>Fatal Fury</em>, <em>Art of Fighting</em> and <em>The King of Fighters</em> series with arguably the highest damage output in the game thanks to his special moves and extensive meter, complimented by his decent poking, good mix-ups, great counter hit tools, good punishment and unique attack reversals to make for some great defence. However, many of his key moves have average range, one of the consequences of which is his lacklustre long-range punishment.</p>",

        // Notable players 
        notablePlayers: ["DVK"],
    },
    get "geese howard" () {
        return this.geese;
    },

    // Gigas
    gigas: {
        // Profile
        name: "Gigas",
        nickname: "The G Corp Experiment",
        sex: "male",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/gigas",

        age: "Data deleted",
        country: "Data deleted",
        fightingStyle: "Destructive impulse",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 8,
        defence: 4,
        range: 9,
        punishment: 7,

        gimmicks: 4,
        execution: 1,
        hurtbox: 5,

        // Playstyle
        playstyle: "Versatile, poking, keep-out",
        introduction: "<p>Somewhat versatile character, with good poking, good punishment, great range and good damage output. However, he lacks good defensive options, partially due to his large frame, while much of his move set is fairly situational, making him a tough character to succeed with at any level.</p>",

        // Notable players 
        notablePlayers: ["Nixx Fury"],
    },

    // Heihachi Mishima
    heihachi: {
        // Profile
        name: "Heihachi Mishima",
        nickname: "The King of Iron Fist",
        sex: "male",

        flag: "/assets/img/flagicons/japan.svg",
        image: "/assets/img/characters/tk7/heihachi-2",

        age: 75,
        country: "Japan (citizenship denied by government)",
        fightingStyle: "Mishima-ryū karate",
        debut: "<em>Tekken</em>",

        // Scores
        offense: 9,
        defence: 7,
        range: 8,
        punishment: 7,

        gimmicks: 3,
        execution: 4,
        hurtbox: 4,

        // Playstyle
        playstyle: "Offensive, Mishima",
        introduction: "<p>Offensive Mishima character with great poking, good counter hit tools, great damage output and good range. However, a lot of his best lows are launch punishable if not just unsafe on block, while his WS/FC punishment is mediocre.</p>",

        // Notable players 
        notablePlayers: ["Poker Face"],
    },
    get "heihachi mishima" () {
        return this.heihachi;
    },
    get "mishima heihachi" () {
        return this.heihachi;
    },

    // Hwoarang
    hwoarang: {
        // Profile
        name: "Hwoarang",
        nickname: "The Blood Talon",
        sex: "male",

        flag: "/assets/img/flagicons/south-korea.svg",
        image: "/assets/img/characters/tk7/hwoarang-2",

        age: 21,
        country: "South Korea",
        fightingStyle: "Taekwondo",
        debut: "<em>Tekken 3</em>",

        // Scores
        offense: 10,
        defence: 6,
        range: 7,
        punishment: 7,

        gimmicks: 4,
        execution: 3,
        hurtbox: 3,

        // Playstyle
        playstyle: "Offensive, poking, mix-up heavy",
        introduction: "<p>Rushdown character with a wide array of great pokes, great pressure tools, great mix-ups and good standing punishment to harass the opponent, as well as some decent defensive tools. However, his WS punishment is lacking, while his four stances and the various tools that come with each of them demand a high level of awareness from the player to succeed at higher levels of play.</p>",

        // Notable players 
        notablePlayers: ["Proto-G", "Ghost", "Nixx Fury"],
    },
    get hwo() {
        return this.hwoarang;
    },
    get "hwoa rang" () {
        return this.hwoarang;
    },

    // Jack-7
    jack7: {
        // Profile
        name: "Jack-7",
        nickname: "The Super Killing Machine",
        sex: "male",

        flag: "/assets/img/flagicons/russia.svg",
        image: "/assets/img/characters/tk7/jack-7",

        age: "N/A",
        country: "Russia",
        fightingStyle: "Brute force",
        debut: "<em>Tekken 7</em> (the first in the line of robots debuted in <em>Tekken</em>)",

        // Scores
        offense: 9,
        defence: 7,
        range: 9,
        punishment: 8,

        gimmicks: 4,
        execution: 2,
        hurtbox: 5,

        // Playstyle
        playstyle: "Versatile, keep-out, poking",
        introduction: "<p>Versatile character with an emphasis on keep-out, boasting great range, good damage output, great throws and some of the best pokes in the game to set up his excellent whiff punishment. However, his counter hit tools are generally mediocre, while his relatively small move set makes him somewhat predictable.</p>",

        // Notable players 
        notablePlayers: ["PR1EST"],
    },
    get jack() {
        return this.jack7;
    },
    get "jack-7" () {
        return this.jack7;
    },
    get "jack 7" () {
        return this.jack7;
    },

    // Jin Kazama
    jin: {
        // Profile
        name: "Jin Kazama",
        nickname: "The Child of Destiny",
        sex: "male",

        flag: "/assets/img/flagicons/japan.svg",
        image: "/assets/img/characters/tk7/jin",

        age: 21,
        country: "Japan",
        fightingStyle: "Traditional karate",
        debut: "<em>Tekken 3</em>",

        // Scores
        offense: 9,
        defence: 10,
        range: 8,
        punishment: 8,

        gimmicks: 3,
        execution: 3,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, keep-out, Mishima",
        introduction: "<p>Versatile character who performs at his best in the mid-range, armed with good poking, great counter hit tools, great damage output, variety in his throws and a unique parry that deals with all highs and mids except projectiles (fireballs). While his Mishima-style tools are not quite as effective as those of the out-and-out Mishima characters, he makes up for it with other situational moves that plug those weaknesses. He does, however, lack range on a few key punishers.</p>",

        // Notable players 
        notablePlayers: ["Ace", "DVK"],
    },
    get "jin kazama" () {
        return this.jin;
    },
    get "kazama jin" () {
        return this.jin;
    },

    // Josie Rizal
    josie: {
        // Profile
        name: "Josie Rizal",
        nickname: "The Crybaby",
        sex: "female",

        flag: "/assets/img/flagicons/philippines.svg",
        image: "/assets/img/characters/tk7/josie",

        age: 18,
        country: "Philippines",
        fightingStyle: "Eskrima-based kickboxing",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 7,
        defence: 9,
        range: 8,
        punishment: 8,

        gimmicks: 4,
        execution: 2,
        hurtbox: 2,

        // Playstyle
        playstyle: "Versatile, counter hit baiting",
        introduction: "<p>Fairly well-rounded character with good pokes, great counter hit tools, good damage output and some unique evasive moves that make her hard to put under pressure. However, a lot of her options at close range are quite linear.</p>",

        // Notable players 
        notablePlayers: ["Mickey", "Darktempest"],
    },
    get "josie rizal" () {
        return this.josie;
    },

    // Julia Chang
    julia: {
        // Profile
        name: "Julia Chang",
        nickname: "The Nature-Loving Beauty",
        sex: "female",

        flag: "/assets/img/flagicons/united-states.svg",
        image: "/assets/img/characters/tk7/julia",

        age: 20,
        country: "United States",
        fightingStyle: "Chinese martial arts based on Xin Yi Liu He Quan and Bajiquan",
        debut: "<em>Tekken 3</em>",

        // Scores
        offense: 10,
        defence: 7,
        range: 9,
        punishment: 10,

        gimmicks: 5,
        execution: 4,
        hurtbox: 2,

        // Playstyle
        playstyle: "Versatile, mix-up heavy",
        introduction: "<p>Extremely versatile character with great mix-ups, excellent range, good damage output, variety in her throws and some of the best punishment in the game. However, she lacks a good set of pressure tools, while many of her best moves also require good execution to utilise effectively.</p>",

        // Notable players
        notablePlayers: ["Mickey", "Harem Shoryu"],
    },
    get "julia chang" () {
        return this.julia;
    },

    // Katarina Alves
    katarina: {
        // Profile
        name: "Katarina Alves",
        nickname: "The Cocky Harrier",
        sex: "female",

        flag: "/assets/img/flagicons/brazil.svg",
        image: "/assets/img/characters/tk7/katarina",

        age: 22,
        country: "Brazil",
        fightingStyle: "Savate",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 8,
        defence: 8,
        range: 7,
        punishment: 9,

        gimmicks: 5,
        execution: 1,
        hurtbox: 2,

        // Playstyle
        playstyle: "Versatile, poking, counter hit baiting",
        introduction: "<p>Fairly versatile character with an emphasis on rushdown, with great poking, great counter hit tools, threatening mix-ups and good damage output, as well as great range that makes for a few good keep-out tools. However, most of her best lows are quite unsafe, while most of her Harrier (HAR) stance transitions can be interrupted on block.</p>",

        // Notable players 
        notablePlayers: ["Darktempest", "Battousai"],
    },
    get kat() {
        return this.katarina;
    },
    get "katarina alves" () {
        return this.katarina;
    },

    // Kazumi Mishima
    kazumi: {
        // Profile
        name: "Kazumi Mishima",
        nickname: "The Assassin of Hachijō",
        sex: "female",

        flag: "/assets/img/flagicons/japan.svg",
        image: "/assets/img/characters/tk7/kazumi",

        age: "Unknown (deceased)",
        country: "Japan",
        fightingStyle: "Hachijō-ryū karate, Mishima-ryū karate",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 9,
        defence: 7,
        range: 7,
        punishment: 7,

        gimmicks: 3,
        execution: 1,
        hurtbox: 2,

        // Playstyle
        playstyle: "Offensive, poking",
        introduction: "<p>Offensive character who, despite her name, lacks a big chunk of the Mishima-style toolset that her family members possess but more than makes up for it with great poking, great pressure tools, good counter hit tools and great range (partly thanks to her teleporting pet tiger). However, she lacks range on some key punishers, while most of her best lows are quite slow and unreliable for pressure.</p>",

        // Notable players 
        notablePlayers: ["Furious Monkey", "Vega", "Frost"],
    },
    get "kazumi mishima" () {
        return this.kazumi;
    },
    get "mishima kazumi" () {
        return this.kazumi;
    },

    // Kazuya Mishima
    kazuya: {
        // Profile
        name: "Kazuya Mishima",
        nickname: "The Devil's Master",
        sex: "male",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/kazuya",

        age: 49,
        country: "Japan (revoked his nationality)",
        fightingStyle: "Mishima-ryū karate",
        debut: "<em>Tekken</em>",

        // Scores
        offense: 8,
        defence: 8,
        range: 8,
        punishment: 10,

        gimmicks: 3,
        execution: 4,
        hurtbox: 3,

        // Playstyle
        playstyle: "Defensive, Mishima",
        introduction: "<p>Defensive Mishima character that relies on spacing to set up his excellent whiff punishment, coupled with great damage output, good mix-ups, excellent block punishment and great counter hit tools. However, his poking could be better, while he requires a high level of execution to bring the best out of him at higher levels of play.</p>",

        // Notable players 
        notablePlayers: ["Proto-G", "Chuma Mzee"],
    },
    get "kazuya mishima" () {
        return this.kazuya;
    },
    get "mishima kazuya" () {
        return this.kazuya;
    },

    // King
    king: {
        // Profile
        name: "King",
        nickname: "Anger of Beast",
        sex: "male",

        flag: "/assets/img/flagicons/mexico.svg",
        image: "/assets/img/characters/tk7/king-2",

        age: 30,
        country: "Mexico",
        fightingStyle: "Catch wrestling",
        debut: "<em>Tekken 3</em> (King II; the first King debuted in <em>Tekken</em>)",

        // Scores
        offense: 7,
        defence: 9,
        range: 8,
        punishment: 9,

        gimmicks: 5,
        execution: 3,
        hurtbox: 4,

        // Playstyle
        playstyle: "Versatile, grappling",
        introduction: "<p>Versatile character with by far the widest selection of throws in the game, making him a beast at close range, coupled with great punishment, good poking, great counter hit tools and good range. However, his lows, the best of which are very unsafe on block, are lacklustre in general.</p>",

        // Notable players 
        notablePlayers: ["Xstar"],
    },

    // Kuma and Panda
    kumaPanda: {
        // Profile
        name: "Kuma and Panda",
        nickname: "The Raging Beast and Xiaoyu's Bodyguard",
        sex: "male and female",

        flag: "/assets/img/flagicons/japan-china-kuma-panda.svg",
        image: "/assets/img/characters/tk7/kuma-panda-2",

        age: "10 (Kuma), 9 (Panda)",
        country: "Japan (Kuma), China (Panda)",
        fightingStyle: "Kuma Shinken",
        debut: "<em>Tekken 3</em> (Kuma II and Panda; the first Kuma debuted in <em>Tekken</em>)",

        // Scores
        offense: 6,
        defence: 4,
        range: 8,
        punishment: 9,

        gimmicks: 5,
        execution: 2,
        hurtbox: 5,

        // Playstyle
        playstyle: "Versatile, poking, set-up heavy",
        introduction: "<p>Fairly versatile characters with a focus on defensive poking to set up their good punishment, while they also have great mix-ups from Hunting Bear Stance (HBS). However, their big bodies (hurtboxes) severely limit their mobility and defensive options, while also leaving them vulnerable to extended combos that wouldn’t work on most of the cast.</p>",

        // Notable players 
        notablePlayers: ["PR1EST"],
    },
    get pandaKuma() {
        return this.kumaPanda;
    },
    get kumapanda() {
        return this.kumaPanda;
    },
    get pandakuma() {
        return this.kumaPanda;
    },
    get "kuma-panda" () {
        return this.kumaPanda;
    },
    get "panda-kuma" () {
        return this.kumaPanda;
    },
    get kuma() {
        return this.kumaPanda;
    },
    get panda() {
        return this.kumaPanda;
    },
    get "kuma and panda" () {
        return this.kumaPanda;
    },
    get "panda and kuma" () {
        return this.kumaPanda;
    },
    get "kuma & panda" () {
        return this.kumaPanda;
    },
    get "panda & kuma" () {
        return this.kumaPanda;
    },
    get bear() {
        return this.kumaPanda;
    },
    get bears() {
        return this.kumaPanda;
    },
    get "the bears" () {
        return this.kumaPanda;
    },

    // Kunimitsu
    kunimitsu: {
        // Profile
        name: "Kunimitsu",
        nickname: "The Treacherous Ninja",
        sex: "female",

        flag: "/assets/img/flagicons/japan.svg",
        image: "/assets/img/characters/tk7/kunimitsu",

        age: "Unknown",
        country: "Japan",
        fightingStyle: "Manji ninjutsu",
        debut: "<em>Tekken 7</em> (Kunimitsu II; the first Kunimitsu debuted in <em>Tekken</em>)",

        // Scores
        offense: "?",
        defence: "?",
        range: "?",
        punishment: "?",

        gimmicks: "?",
        execution: "?",
        hurtbox: "?",

        // Playstyle
        playstyle: "TBD",
        introduction: "<p>Character overview coming soon.</p>",

        // Notable players 
        notablePlayers: ["Mickey", "Harem Shoryu"],
    },
    get kuni() {
        return this.kunimitsu;
    },

    // Lars Alexandersson
    lars: {
        // Profile
        name: "Lars Alexandersson",
        nickname: "The Rebel Leader",
        sex: "male",

        flag: "/assets/img/flagicons/sweden.svg",
        image: "/assets/img/characters/tk7/lars",

        age: 28,
        country: "Sweden",
        fightingStyle: "Tekken Force martial arts",
        debut: "<em>Tekken 6</em>",

        // Scores
        offense: 6,
        defence: 8,
        range: 7,
        punishment: 9,

        gimmicks: 5,
        execution: 1,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, poking",
        introduction: "<p>Fairly versatile character with great range, good poking, good counter hit tools, great whiff punishment and good damage output. However, he has to take risks to open up the opponent and deal some serious damage, as some of his best lows are unsafe on block and his stance transitions can be fairly easily interrupted on block.</p>",

        // Notable players 
        notablePlayers: ["Frost", "Darktempest"],
    },
    get "lars alexandersson" () {
        return this.lars;
    },

    // Marshall Law
    law: {
        // Profile
        name: "Marshall Law",
        nickname: "The Dragon Chef",
        sex: "male",

        flag: "/assets/img/flagicons/united-states.svg",
        image: "/assets/img/characters/tk7/law",

        age: 48,
        country: "United States",
        fightingStyle: "Jeet Kune Do",
        debut: "<em>Tekken</em>",

        // Scores
        offense: 10,
        defence: 7,
        range: 9,
        punishment: 10,

        gimmicks: 5,
        execution: 3,
        hurtbox: 3,

        // Playstyle
        playstyle: "Offensive, poking, mix-up heavy",
        introduction: "<p>Offensive character with great mix-ups, great pressure tools and good damage output, as well as effective defensive tools such as his unique attack reversal and some evasive crushing tools to snake his way past the opponent. However, maximising his damage and enforcing a lot of his offense at higher levels of play relies on his Dragon Sign Stance (DSS), which requires very good execution.</p>",

        // Notable players 
        notablePlayers: ["RobbyM$", "Chuma Mzee"],
    },
    get "marshall law" () {
        return this.law;
    },

    // Lee Chaolan
    lee: {
        // Profile
        name: "Lee Chaolan",
        nickname: "The Silver-Haired Demon",
        sex: "male",

        flag: "/assets/img/flagicons/china.svg",
        image: "/assets/img/characters/tk7/lee",

        age: 48,
        country: "China",
        fightingStyle: "Various martial arts",
        debut: "<em>Tekken</em> (has also appeared as Violet since <em>Tekken 4</em>)",

        // Scores
        offense: 6,
        defence: 7,
        range: 6,
        punishment: 6,

        gimmicks: 3,
        execution: 4,
        hurtbox: 3,

        // Playstyle
        playstyle: "Offensive, poking, counter hit baiting",
        introduction: "<p>Offensive character with decent poking, good mix-ups, good counter hit tools and good damage output. However, his range is mediocre, he has limited defensive options and maximising his damage requires very good execution.</p>",

        // Notable players 
        notablePlayers: ["Mickey", "RobbyM$"],
    },
    get violet() {
        return this.lee;
    },
    get "lee chaolan" () {
        return this.lee;
    },

    // Lei Wulong
    lei: {
        // Profile
        name: "Lei Wulong",
        nickname: "Super Police",
        sex: "male",

        flag: "/assets/img/flagicons/hong-kong.svg",
        image: "/assets/img/characters/tk7/lei",

        age: 47,
        country: "Hong Kong",
        fightingStyle: "Chinese martial arts based on the Five Animals Form and Drunken Boxing",
        debut: "<em>Tekken 2</em>",

        // Scores
        offense: 9,
        defence: 9,
        range: 6,
        punishment: 6,

        gimmicks: 5,
        execution: 3,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, set-up heavy, mix-up heavy",
        introduction: "<p>Versatile character with excellent evasive tools from his stances, which also give him great situational moves, great mix-ups, good counter hit tools, good damage output and variety on his throws. However, his standing punishment is lacklustre, while mastering the character demands the player to memorise his extremely vast moveset, which makes for a steep learning curve.</p>",

        // Notable players 
        notablePlayers: ["Tony Claessen", "Proto-G"],
    },
    get "lei wulong" () {
        return this.lei;
    },

    // Leo Kliesen
    leo: {
        // Profile
        name: "Leo Kliesen",
        nickname: "The Spelunker",
        sex: "ambiguous",

        flag: "/assets/img/flagicons/germany.svg",
        image: "/assets/img/characters/tk7/leo-2",

        age: 19,
        country: "Germany",
        fightingStyle: "Bajiquan",
        debut: "<em>Tekken 6</em>",

        // Scores
        offense: 9,
        defence: 9,
        range: 8,
        punishment: 9,

        gimmicks: 2,
        execution: 2,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, mix-up heavy",
        introduction: "<p>Extremely versatile character that has great tools for any situation; good poking, good mix-ups, great counter hit tools, variety on their throws and some great defensive options. No significant weaknesses to speak of, but some tools such as their orbital (u/f+3+4) and homing moves could be better.</p>",

        // Notable players 
        notablePlayers: ["QueenArrow"],
    },
    get "leo kliesen" () {
        return this.leo;
    },

    // Leroy Smith
    leroy: {
        // Profile
        name: "Leroy Smith",
        nickname: "The Sentinel of New York",
        sex: "male",

        flag: "/assets/img/flagicons/united-states.svg",
        image: "/assets/img/characters/tk7/leroy",

        age: "Unknown (50+)",
        country: "United States",
        fightingStyle: "Wing Chun",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 9,
        defence: 10,
        range: 8,
        punishment: 9,

        gimmicks: 5,
        execution: 1,
        hurtbox: 3,

        // Playstyle
        playstyle: `Versatile, set-up heavy, "WEAK!"`,
        introduction: "<p>Versatile character with great tools for any situation, boasting great poking, great counter hit tools, great damage output and fearsome defensive options with his unique parry and Hermit stance, complimented with some very good crushing tools. He does, however, lack variety in his throws, even though he doesn’t really need it.</p>",

        // Notable players 
        notablePlayers: ["Battousai", "Frost"],
    },
    get "leroy smith" () {
        return this.leroy;
    },

    // Lidia Sobieska
    lidia: {
        // Profile
        name: "Lidia Sobieska",
        nickname: "The Polish Prime Minister",
        sex: "female",

        flag: "/assets/img/flagicons/poland.svg",
        image: "/assets/img/characters/tk7/lidia",

        age: 29,
        country: "Poland",
        fightingStyle: "Traditional karate",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: "?",
        defence: "?",
        range: "?",
        punishment: "?",

        gimmicks: "?",
        execution: "?",
        hurtbox: "?",

        // Playstyle
        playstyle: "TBD",
        introduction: "<p>Character overview coming soon.</p>",

        // Notable players 
        notablePlayers: ["Frost", "Mickey"],
    },
    get "lidia sobieska" () {
        return this.lidia;
    },

    // Lili De Rochefort
    lili: {
        // Profile
        name: `Emilie "Lili" De Rochefort`,
        nickname: "The Magnate's Flower",
        sex: "female",

        flag: "/assets/img/flagicons/monaco.svg",
        image: "/assets/img/characters/tk7/lili-2",

        age: 16,
        country: "Monaco",
        fightingStyle: "Self-taught (based on gymnastics and street fighting)",
        debut: "<em>Tekken 5: Dark Resurrection</em>",

        // Scores
        offense: 6,
        defence: 8,
        range: 6,
        punishment: 9,

        gimmicks: 5,
        execution: 2,
        hurtbox: 2,

        // Playstyle
        playstyle: "Offensive, poking",
        introduction: "<p>Fairly versatile character focused on offense with some good poking, great mix-ups, great punishment, some evasive crushing moves and the best sidestep in the game. However, a lot of her offense tends to be quite linear, while she has to resort to taking big risks to open up very defensive opponents.</p>",

        // Notable players 
        notablePlayers: ["Mickey", "Frost", "Battousai"],
    },
    get emilie() {
        return this.lili;
    },
    get "lili de rochefort" () {
        return this.lili;
    },
    get "emilie de rochefort" () {
        return this.lili;
    },

    // Lucky Chloe
    luckyChloe: {
        // Profile
        name: "Lucky Chloe",
        nickname: "The Pop Sensation",
        sex: "female",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/lucky-chloe",

        age: 17,
        country: "Unknown (secret)",
        fightingStyle: "Freestyle dance, acrobatics",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 6,
        defence: 6,
        range: 6,
        punishment: 7,

        gimmicks: 5,
        execution: 2,
        hurtbox: 1,

        // Playstyle
        playstyle: "Offensive, mix-up heavy",
        introduction: "<p>Rushdown character with a good set of mix-ups both while facing and with her back to the opponent, coupled with excellent damage output and some evasive tools to crush retaliation from the opponent. However, her defensive options are rather limited and her poking and range in general are mediocre.</p>",

        // Notable players 
        notablePlayers: ["Mickey", "Harem Shoryu"],
    },
    get lucky() {
        return this.luckyChloe;
    },
    get chloe() {
        return this.luckyChloe;
    },
    get "lucky chloe" () {
        return this.luckyChloe;
    },

    // Craig Marduk
    marduk: {
        // Profile
        name: "Craig Marduk",
        nickname: "The Brutal Vale Tudo Fighter",
        sex: "male",

        flag: "/assets/img/flagicons/australia.svg",
        image: "/assets/img/characters/tk7/marduk",

        age: 28,
        country: "Australia",
        fightingStyle: "Vale Tudo",
        debut: "<em>Tekken 4</em>",

        // Scores
        offense: 9,
        defence: 6,
        range: 8,
        punishment: 6,

        gimmicks: 5,
        execution: 2,
        hurtbox: 5,

        // Playstyle
        playstyle: "Offensive, set-up heavy, grappling",
        introduction: `<p>Offensive character who hits like a train, armed with great range, variety in his throws, good standing punishment and a unique tackle that affords him some of the scariest okizeme situations in the game. However, his poking and while standing punishment are rather mediocre, while he also tends to struggle under pressure due to a lack of effective "panic moves" to bail him out.</p>`,

        // Notable players 
        notablePlayers: ["Ghost"],
    },
    get craig() {
        return this.marduk;
    },
    get "craig marduk" () {
        return this.marduk;
    },

    // Master Raven
    masterRaven: {
        // Profile
        name: "Master Raven",
        nickname: "The Dark Talon's Boss",
        sex: "female",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/master-raven",

        age: "Unknown",
        country: "Unknown",
        fightingStyle: "Ninjutsu",
        debut: "<em>Tekken 7</em> (her subordinate, Raven, debuted in <em>Tekken 5</em>)",

        // Scores
        offense: 8,
        defence: 7,
        range: 7,
        punishment: 7,

        gimmicks: 4,
        execution: 3,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, unorthodox",
        introduction: "<p>Unorthodox but versatile character based on her male counterpart from previous games. She has a unique move set catering to a variety of situations, as well as great poking, great counter hit tools and great damage output. However, a lot of her best offensive options are unsafe on block, meaning she needs to take big risks to hurt the opponent, while her combos tend to be quite inconsistent.</p>",

        // Notable players 
        notablePlayers: ["Harem Shoryu", "Battousai"],
    },
    get masterraven() {
        return this.masterRaven;
    },
    get "master-raven" () {
        return this.masterRaven;
    },
    get "master raven" () {
        return this.masterRaven;
    },
    get raven() {
        return this.masterRaven;
    },

    // Miguel Caballero Rojo
    miguel: {
        // Profile
        name: "Miguel Caballero Rojo",
        nickname: "The Vengeful Savage",
        sex: "male",

        flag: "/assets/img/flagicons/spain.svg",
        image: "/assets/img/characters/tk7/miguel",

        age: 26,
        country: "Spain",
        fightingStyle: "None (Brawling)",
        debut: "<em>Tekken 6</em>",

        // Scores
        offense: 9,
        defence: 7,
        range: 7,
        punishment: 6,

        gimmicks: 5,
        execution: 1,
        hurtbox: 4,

        // Playstyle
        playstyle: "Offensive, poking",
        introduction: "<p>Rushdown character with a wide selection of excellent pokes to chip away at the opponent's health, setting up his great counter hit tools and good whiff punishment, while also possessing good mix-ups and great damage output. However, his jab range is mediocre and his punishment in certain situations is inconsistent.</p>",

        // Notable players 
        notablePlayers: ["DVK", "Battousai"],
    },
    get "miguel caballero" () {
        return this.miguel;
    },
    get "miguel rojo" () {
        return this.miguel;
    },
    get "miguel caballero rojo" () {
        return this.miguel;
    },

    // Negan
    negan: {
        // Profile
        name: "Negan Smith",
        nickname: "The Leader of the Saviors",
        sex: "male",

        flag: "/assets/img/flagicons/united-states.svg",
        image: "/assets/img/characters/tk7/negan",

        age: "Unknown (early to mid-50s)",
        country: "United States",
        fightingStyle: "Self-taught",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 9,
        defence: 5,
        range: 7,
        punishment: 8,

        gimmicks: 5,
        execution: 1,
        hurtbox: 4,

        // Playstyle
        playstyle: "Offensive, poking, lots of swearing",
        introduction: "<p>Guest character from AMC's <em>The Walking Dead</em> series who excels in offense with good poking and mix-ups, including from his Intimidation stance which also auto-launches lows, as well as great counter hit tools, good damage output and good punishment. However, most of his best lows have poor range and, besides his f+1+2 (a launching power crush), his defensive options are rather limited.</p>",

        // Notable players 
        notablePlayers: ["Frost"],
    },

    // Nina Williams
    nina: {
        // Profile
        name: "Nina Williams",
        nickname: "The Silent Assassin",
        sex: "female",

        flag: "/assets/img/flagicons/ireland.svg",
        image: "/assets/img/characters/tk7/nina",

        age: "43 (physically 24 due to cryosleep)",
        country: "Republic of Ireland",
        fightingStyle: "Assassination arts (based on Aikido and Koppojutsu)",
        debut: "<em>Tekken</em>",

        // Scores
        offense: 9,
        defence: 8,
        range: 6,
        punishment: 6,

        gimmicks: 5,
        execution: 4,
        hurtbox: 2,

        // Playstyle
        playstyle: "Offensive, poking",
        introduction: "<p>Versatile character who excels in offense, bullying the opponent with some great pressure tools, great poking and the widest selection of throws in the game after King, while also possessing some effective defensive tools. However, many of her best tools, as well as her movement, require good execution to utilise effectively, while she struggles to impose herself away from close range.</p>",

        // Notable players 
        notablePlayers: ["Vega"],
    },
    get "nina williams" () {
        return this.nina;
    },

    // Noctis Lucis Caelum
    noctis: {
        // Profile
        name: "Noctis Lucis Caelum",
        nickname: "The Chosen King",
        sex: "male",

        flag: "/assets/img/flagicons/unknown.svg",
        image: "/assets/img/characters/tk7/noctis",

        age: 20,
        country: "Kingdom of Lucis",
        fightingStyle: "Weapon summoning",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 6,
        defence: 6,
        range: 10,
        punishment: 10,

        gimmicks: 5,
        execution: 1,
        hurtbox: 3,

        // Playstyle
        playstyle: "Defensive, mix-up heavy",
        introduction: "<p>Guest character from Square Enix's <em>Final Fantasy</em> series, possessing the best range in the game which is exemplified by his great keep-out tools and excellent whiff punishment, as well as good evasive crushing moves and good damage output. However, his poking is mediocre, his best lows are all quite unsafe on block and he has by far the most unsafe rage art in the game.</p>",

        // Notable players 
        notablePlayers: ["Defiant"],
    },
    get "noctis lucis" () {
        return this.noctis;
    },
    get "noctis caelum" () {
        return this.noctis;
    },
    get "noctis lucis caelum" () {
        return this.noctis;
    },

    // Paul Phoenix
    paul: {
        // Profile
        name: "Paul Phoenix",
        nickname: "The Hot-Blooded Fighter",
        sex: "male",

        flag: "/assets/img/flagicons/united-states.svg",
        image: "/assets/img/characters/tk7/paul-2",

        age: 48,
        country: "United States",
        fightingStyle: "Modified martial arts based on judo",
        debut: "<em>Tekken</em>",

        // Scores
        offense: 9,
        defence: 9,
        range: 8,
        punishment: 10,

        gimmicks: 5,
        execution: 2,
        hurtbox: 3,

        // Playstyle
        playstyle: `Versatile, mix-up heavy, "UUOOOAAAARGH!"`,
        introduction: "<p>Extremely versatile character with great mix-ups, excellent punishment, great counter hit tools, variety in his throws, powerful options from ultimate tackle and probably the highest damage output in the game after the 2D-style characters. However, his rushdown tools are quite limited, his most powerful moves are very unsafe on block and his back sway makes for increased difficulty in creating distance with the opponent at higher levels of play.</p>",

        // Notable players
        notablePlayers: ["Battousai", "Poker Face"],
    },
    get "paul phoenix" () {
        return this.paul;
    },

    // Shaheen
    shaheen: {
        // Profile
        name: "Shaheen",
        nickname: "The Arab Falcon",
        sex: "male",

        flag: "/assets/img/flagicons/saudi-arabia.svg",
        image: "/assets/img/characters/tk7/shaheen",

        age: 32,
        country: "Saudi Arabia",
        fightingStyle: "Military fighting style",
        debut: "<em>Tekken 7</em>",

        // Scores
        offense: 9,
        defence: 7,
        range: 7,
        punishment: 8,

        gimmicks: 3,
        execution: 2,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, poking, counter hit baiting",
        introduction: "<p>Versatile character with a set of great pokes to frustrate the opponent, setting up his great counter hit tools and good whiff punishment, as well as some great mix-ups, good damage output and some evasive crushing tools. However, his pressure tools are very limited, while a lot of his lows besides his slide (d/f, d, d/f+3) are not all that threatening.</p>",

        // Notable players 
        notablePlayers: ["Poker Face"],
    },

    // Steve Fox
    steve: {
        // Profile
        name: "Steve Fox",
        nickname: "The Stinging Hook",
        sex: "male",

        flag: "/assets/img/flagicons/united-kingdom.svg",
        image: "/assets/img/characters/tk7/steve-2",

        age: 21,
        country: "United Kingdom",
        fightingStyle: "Boxing",
        debut: "<em>Tekken 4</em>",

        // Scores
        offense: 7,
        defence: 9,
        range: 8,
        punishment: 6,

        gimmicks: 3,
        execution: 4,
        hurtbox: 3,

        // Playstyle
        playstyle: "Offensive, counter hit baiting",
        introduction: "<p>Offensive character with a powerful set of counter hit tools, as well as some great poking, great damage output and evasive stances to induce whiffs. However, his lows in general are very tame, a lot of his offense consists of highs which can be ducked and punished, while he also has slow standing and crouching launchers.</p>",

        // Notable players 
        notablePlayers: ["Ace", "Frost", "Proto-G"],
    },
    get "steve fox" () {
        return this.steve;
    },

    // Ling Xiaoyu
    xiaoyu: {
        // Profile
        name: "Ling Xiaoyu",
        nickname: "The Dancing Phoenix",
        sex: "female",

        flag: "/assets/img/flagicons/china.svg",
        image: "/assets/img/characters/tk7/xiaoyu-2",

        age: 18,
        country: "China",
        fightingStyle: "Chinese martial arts based on Baguazhang and Piguaquan",
        debut: "<em>Tekken 3</em>",

        // Scores
        offense: 7,
        defence: 9,
        range: 5,
        punishment: 7,

        gimmicks: 5,
        execution: 3,
        hurtbox: 1,

        // Playstyle
        playstyle: "Versatile, mix-up heavy, set-up heavy",
        introduction: "<p>Versatile character with great poking, excellent mix-ups, decent variety on her throws and a set of very evasive stances that crush highs and even a lot of mids, setting up her good whiff punishment. However, a lot of her offense tends to be rather linear and her damage output for the most part is average.</p>",

        // Notable players 
        notablePlayers: ["Mickey", "QueenArrow"],
    },
    get ling() {
        return this.xiaoyu;
    },
    get xiao() {
        return this.xiaoyu;
    },
    get "ling xiaoyu" () {
        return this.xiaoyu;
    },

    // Yoshimitsu
    yoshimitsu: {
        // Profile
        name: "Yoshimitsu",
        nickname: "The Inheritor of the Demon Sword",
        sex: "male",

        flag: "/assets/img/flagicons/japan.svg",
        image: "/assets/img/characters/tk7/yoshimitsu",

        age: "Unknown",
        country: "Japan",
        fightingStyle: "Advanced Manji ninjutsu",
        debut: "<em>Tekken</em>",

        // Scores
        offense: 8,
        defence: 9,
        range: 7,
        punishment: 8,

        gimmicks: 5,
        execution: 3,
        hurtbox: 3,

        // Playstyle
        playstyle: "Versatile, unorthodox, set-up heavy",
        introduction: "<p>Extremely unorthodox character with a set of very situational moves, as well as some good poking, good mix-ups and lethal unblockable moves. Since a lot of his moves are very situational, succeeding with the character at higher levels of play demands a high level of understanding of his various stances and extensive move set, as well as a high level of creativity.</p>",

        // Notable players 
        notablePlayers: ["Wraith", "Hattori"],
    },
    get yoshi() {
        return this.yoshimitsu;
    },

    // Zafina
    zafina: {
        // Profile
        name: "Zafina",
        nickname: "The Guardian of Azazel",
        sex: "female",

        flag: "/assets/img/flagicons/egypt.svg",
        image: "/assets/img/characters/tk7/zafina",

        age: 23,
        country: "Egypt",
        fightingStyle: "Ancient Assassination Arts",
        debut: "<em>Tekken 6</em>",

        // Scores
        offense: 9,
        defence: 8,
        range: 8,
        punishment: 6,

        gimmicks: 5,
        execution: 2,
        hurtbox: 2,

        // Playstyle
        playstyle: "Versatile, set-up heavy",
        introduction: "<p>Elusive, set-up heavy character with good mix-ups, especially from her Scarecrow stance, good damage output and great counter hit tools. However, her ability to impose herself at range is limited, while her punishment (especially while rising/crouching) could be better.</p>",

        // Notable players 
        notablePlayers: ["Harem Shoryu", "Vega"],
    },

    /*
    template: {
        // Profile
        name: "",
        nickname: "",
        sex: "male/female/ambiguous",

        flag: "/assets/img/flagicons/.svg",
        image: "/assets/img/characters/tk7/",

        age: ,
        country: "",
        fightingStyle: "",
        debut: "<em></em>",

        // Scores
        offense: ,
        defence: ,
        range: ,
        punishment: ,

        gimmicks: ,
        execution: ,
        hurtbox: ,

        // Playstyle
        playstyle: "",
        introduction: "<p></p>",

        // Notable players 
        notablePlayers: [],
    },
    */
}

/* EXPORTING CHARACTERS */
export { characters };