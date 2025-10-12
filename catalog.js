// catalog.js  —  MUSS JS sein (nicht JSON!)
window.catalog = [
  // ===== VIDEOS MIT QUELLEN (inkl. Setlists) =====
  {
    id: "wembley88",
    title: "Wembley, London (July 16, 1988)",
    poster: "wembley88.jpg",
    type: "multi",
    category: "live",
    tier: "pro",
    versions: [
      { key: "original", label: "Original", type: "hls", source: "", mp4: "" },
      { key: "enhanced", label: "Enhanced", type: "hls", source: "", mp4: "" }
    ],
    chapters: [
      { sec:   0, label: "PLAY ALL" },
      { sec: 107, label: "INTRO" },
      { sec: 193, label: "WANNA BE STARTIN' SOMETHIN" },
      { sec: 503, label: "HEARTBREAK HOTEL" },
      { sec: 798, label: "ANOTHER PART OF ME" },
      { sec:1051, label: "I JUST CAN'T STOP LOVING YOU" },
      { sec:1352, label: "SHE'S OUT OF MY LIFE" },
      { sec:1583, label: "I WANT YOU BACK" },
      { sec:1647, label: "THE LOVE YOU SAVE" },
      { sec:1707, label: "I'LL BE THERE" },
      { sec:2018, label: "ROCK WITH YOU" },
      { sec:2280, label: "HUMAN NATURE" },
      { sec:2654, label: "SMOOTH CRIMINAL" },
      { sec:3021, label: "DIRTY DIANA" },
      { sec:3413, label: "THRILLER" },
      { sec:3693, label: "BAND GROOVE" },
      { sec:4528, label: "WORKING' DAY AND NIGHT" },
      { sec:5004, label: "BEAT IT" },
      { sec:5412, label: "BILLIE JEAN" },
      { sec:5977, label: "BAD" },
      { sec:6548, label: "MAN IN THE MIRROR" },
      { sec:7102, label: "THE WAY YOU MAKE ME FEEL (BONUS)" }
    ]
  },

  {
    id: "oslo92",
    title: "Oslo, Norway (July 15, 1992)",
    poster: "oslo92.jpg",
    type: "multi",
    category: "live",
    tier: "pro",
    versions: [
      { key: "original", label: "Original", type: "mp4", source: "", mp4: "" },
      { key: "enhanced", label: "Enhanced", type: "mp4", source: "https://mjtvplus.com/0/Dangerous%20Tour%20Oslo,%20Norway%201992_HappyLee&Rudolf.mp4", mp4: "https://mjtvplus.com/0/Dangerous%20Tour%20Oslo,%20Norway%201992_HappyLee&Rudolf.mp4" }
    ],
    chapters: [
      { sec:   0, label: "PLAY ALL" },
      { sec: 114, label: "JAM" },
      { sec: 503, label: "WANNA BE STARTIN' SOMETHIN" },
      { sec: 847, label: "HUMAN NATURE" },
      { sec:1191, label: "SMOOTH CRIMINAL" },
      { sec:1566, label: "I JUST CAN'T STOP LOVING YOU" },
      { sec:1875, label: "SHE'S OUT OF MY LIFE" },
      { sec:2141, label: "THE JACKSON 5 MEDLEY" },
      { sec:2542, label: "THRILLER" },
      { sec:2897, label: "BILLIE JEAN" },
      { sec:3335, label: "WORKIN' DAY AND NIGHT" },
      { sec:3806, label: "BEAT IT" },
      { sec:4342, label: "WILL YOU BE THERE" },
      { sec:4837, label: "THE WAY YOU MAKE ME FEEL" },
      { sec:5199, label: "BAD" },
      { sec:5634, label: "BLACK OR WHITE" },
      { sec:6196, label: "HEAL THE WORLD" },
      { sec:6692, label: "MAN IN THE MIRROR" }
    ]
  },

  {
    id: "copen92",
    title: "Copenhagen, Denmark (Aug 20, 1992)",
    poster: "copen92.jpg",
    type: "multi",
    category: "live",
    tier: "pro",
    versions: [
      { key: "original", label: "Original", type: "mp4", source: "", mp4: "" },
      { key: "enhanced", label: "Enhanced", type: "mp4", source: "https://mjtvplus.com/0/MJ%20-%201992%20Dangerous%20Tour%20Copenhagen,%20Denmark.mp4", mp4: "https://mjtvplus.com/0/MJ%20-%201992%20Dangerous%20Tour%20Copenhagen,%20Denmark.mp4" }
    ],
    chapters: [
      { sec:   0, label: "PLAY ALL" },
      { sec:  93, label: "JAM" },
      { sec: 504, label: "WANNA BE STARTIN' SOMETHIN" },
      { sec: 889, label: "HUMAN NATURE" },
      { sec:1219, label: "SMOOTH CRIMINAL" },
      { sec:1685, label: "I JUST CAN'T STOP LOVING YOU" },
      { sec:1980, label: "SHE'S OUT OF MY LIFE" },
      { sec:2243, label: "THE JACKSON 5 MEDLEY" },
      { sec:2662, label: "THRILLER" },
      { sec:2996, label: "BILLIE JEAN" },
      { sec:3443, label: "WORKIN' DAY AND NIGHT" },
      { sec:3954, label: "BEAT IT" },
      { sec:4545, label: "WILL YOU BE THERE" },
      { sec:4975, label: "BLACK OR WHITE" },
      { sec:5471, label: "HEAL THE WORLD" },
      { sec:6082, label: "MAN IN THE MIRROR" }
    ]
  },

  {
    id: "tokyo88",
    title: "Tokyo, Japan (December 9, 1988)",
    poster: "tokyo88.jpg",
    type: "bundle",        // Mehrfach-Aufnahmen (z.B. Pro-Shot + Fan-Cam)
    category: "live",
    tier: "pro",

    // Default-Auswahl
    defaultRecording: "d09",
    defaultVersion: "original",

    recordings: [
      {
        key: "d09",
        label: "PRO",
        chapters: [
          { sec:   0,  label: "PLAY ALL" },
          { sec:   0,  label: "INTRO" },
          { sec:  77,  label: "WANNA BE STARTIN' SOMETHIN" },
          { sec: 380,  label: "HEARTBREAK HOTEL" },
          { sec: 681,  label: "ANOTHER PART OF ME" },
          { sec: 921,  label: "HUMAN NATURE" },
          { sec: 1280, label: "SMOOTH CRIMINAL" },
          { sec: 1644, label: "I JUST CAN'T STOP LOVING YOU (INCOMPLETE)" }
        ],
        versions: [
          {
            key: "original",
            label: "Original",
            type: "mp4",
            source: "https://mjtvplus.com/0/MJ%20-%201988%20Tokyo%20SD%20(No%20Logo%20by%20Kai).mp4",
            mp4:    "https://mjtvplus.com/0/MJ%20-%201988%20Tokyo%20SD%20(No%20Logo%20by%20Kai).mp4"
          },
          {
            key: "enhanced",
            label: "Enhanced",
            type: "mp4",
            source: "https://mjtvplus.com/0/MJ%20-%201988%20Tokyo%20(No%20Logo%20by%20Kai)%20HD-Upscale.mp4",
            mp4:    "https://mjtvplus.com/0/MJ%20-%201988%20Tokyo%20(No%20Logo%20by%20Kai)%20HD-Upscale.mp4"
          }
        ]
      },
      {
        key: "fanA",
        label: "AM.",
        chapters: [
          { sec: 0, label: "PLAY ALL" }
          // weitere Kapitel hier eintragen …
        ],
        versions: [
          { key: "original", label: "Original", type: "mp4", source: "", mp4: "" }
        ]
      }
    ]
  },

  {
    id: "brisbane87",
    title: "Brisbane, Australia (November 28, 1987)",
    poster: "brisbane87.jpg",
    type: "multi",
    category: "live",
    tier: "pro",
    versions: [
      { key: "original", label: "Original", type: "mp4", source: "https://mjtvplus.com/0/Bad%20Tour%20-%20Brisbane%20'87%20(Original%20Source).mp4", mp4: "https://mjtvplus.com/0/Bad%20Tour%20-%20Brisbane%20'87%20(Original%20Source).mp4" },
      { key: "enhanced", label: "Enhanced", type: "mp4", source: "https://mjtvplus.com/0/MJ%20-%201987%20Brisbane%20(HD%20Upscale).mp4", mp4: "https://mjtvplus.com/0/MJ%20-%201987%20Brisbane%20(HD%20Upscale).mp4" }
    ],
    chapters: [
      { sec:   0,  label: "PLAY ALL" },
      { sec:  45,  label: "WANNA BE STARTIN' SOMETHIN" },
      { sec: 366,  label: "THINGS I DO FOR YOU" },
      { sec: 583,  label: "OFF THE WALL" },
      { sec: 823,  label: "HUMAN NATURE" },
      { sec:1189,  label: "THIS PLACE HOTEL" },
      { sec:1500,  label: "SHE'S OUT OF MY LIFE" },
      { sec:1754,  label: "JACKSON 5 MEDLEY" },
      { sec:2143,  label: "ROCK WITH YOU" },
      { sec:2390,  label: "LOVELY ONE" }
    ]
  },

  {
    id: "beunos93",
    title: "Buenos Aires, Argentina (October 10, 1993)",
    poster: "beunos93.jpg",
    type: "multi",
    category: "live",
    tier: "pro",
    versions: [
      { key: "original", label: "Original", type: "mp4", source: "", mp4: "" },
      { key: "enhanced", label: "Enhanced", type: "mp4", source: "https://mjtvplus.com/0/MJ%20-%201993%20Live%20In%20Buenos%20Aires.mp4", mp4: "https://mjtvplus.com/0/MJ%20-%201993%20Live%20In%20Buenos%20Aires.mp4" }
    ],
    chapters: [
      { sec:    0, label: "PLAY ALL" },
      { sec:  366, label: "JAM" },
      { sec:  831, label: "WANNA BE STARTIN' SOMETHIN'" },
      { sec: 1274, label: "HUMAN NATURE" },
      { sec: 1658, label: "SMOOTH CRIMINAL" },
      { sec: 2235, label: "I JUST CAN'T STOP LOVING YOU" },
      { sec: 2546, label: "SHE'S OUT OF MY LIFE" },
      { sec: 2940, label: "THE JACKSON 5 MEDLEY" },
      { sec: 3453, label: "THRILLER" },
      { sec: 3863, label: "BILLIE JEAN" },
      { sec: 4670, label: "WILL YOU BE THERE" },
      { sec: 5264, label: "DANGEROUS" },
      { sec: 5615, label: "BLACK OR WHITE" },
      { sec: 6345, label: "HEAL THE WORLD" }
    ]
  },

  {
    id: "yokohama87",
    title: "Yokohama, Japan (September 26, 1987)",
    poster: "yokohama87.jpg",
    type: "multi",
    category: "live",
    tier: "pro",
    versions: [
      { key: "original", label: "Original", type: "hls", source: "", mp4: "" },
      { key: "enhanced", label: "Enhanced", type: "mp4", source: "https://mjtvplus.com/0/MJ%20-%201987%20Bad%20Tour%20Yokohama,%20Japan%201987.mp4", mp4: "https://mjtvplus.com/0/MJ%20-%201987%20Bad%20Tour%20Yokohama,%20Japan%201987.mp4" }
    ],
    chapters: [
      { sec:    0,   label: "PLAY ALL" },
      { sec:  107,   label: "WANNA BE STARTIN' SOMETHIN" },
      { sec:  423,   label: "THINGS I DO FOR YOU" },
      { sec:  632,   label: "OFF THE WALL" },
      { sec:  859,   label: "HUMAN NATURE" },
      { sec: 1188,   label: "HEARTBREAK HOTEL" },
      { sec: 1456,   label: "SHE'S OUT OF MY LIFE" },
      { sec: 1718,   label: "I WANT YOU BACK" },
      { sec: 1782,   label: "THE LOVE YOU SAVE" },
      { sec: 1841,   label: "I'LL BE THERE" },
      { sec: 2099,   label: "ROCK WITH YOU" },
      { sec: 2343,   label: "YOU ARE MY LOVELY ONE" },
      { sec: 2709,   label: "WORKING DAY AND NIGHT" },
      { sec: 3142,   label: "BEAT IT" },
      { sec: 3532,   label: "BILLIE JEAN" },
      { sec: 3845,   label: "SHAKE YOUR BODY" },
      { sec: 4659,   label: "THRILLER" },
      { sec: 4919,   label: "I JUST CAN'T STOP LOVING YOU" },
      { sec: 5318,   label: "BAD" }
    ]
  },

  {
    id: "toronto84",
    title: "Toronto, Canada (October 5, 1984)",
    poster: "toronto84.jpg",
    type: "multi",
    category: "live",
    tier: "pro",
    versions: [
      { key: "original", label: "Original", type: "mp4", source: "https://mjtvplus.com/0/Toronto%201984_Original%20BQ.mp4", mp4: "https://mjtvplus.com/0/Toronto%201984_Original%20BQ.mp4" },
      { key: "enhanced", label: "Enhanced", type: "mp4", source: "", mp4: "" }
    ],
    chapters: [
      { sec:    0,   label: "PLAY ALL" },
      { sec:    0,   label: "SWORD IN THE STONE INTRO" },
      { sec:  520,   label: "WANNA BE STARTIN' SOMETHIN" },
      { sec:  846,   label: "THINGS I DO FOR YOU" },
      { sec: 1075,   label: "OFF THE WALL" },
      { sec: 1367,   label: "HUMAN NATURE" },
      { sec: 1608,   label: "THIS PLACE HOTEL" },
      { sec: 1923,   label: "SHE'S OUT OF MY LIFE" },
      { sec: 2195,   label: "JERMAINE JACKSON MEDLEY" },
      { sec: 2964,   label: "JACKSON 5 MEDLEY" },
      { sec: 3408,   label: "ROCK WITH YOU" },
      { sec: 3664,   label: "LOVELY ONE" },
      { sec: 4063,   label: "WORKING DAY AND NIGHT" },
      { sec: 4827,   label: "BEAT IT" },
      { sec: 5332,   label: "BILLIE JEAN" },
      { sec: 5730,   label: "SHAKE YOUR BODY" }
    ]
  },

  {
    id: "bremen92",
    title: "Bremen, Germany (August 8, 1992)",
    poster: "bremen92.jpg",
    type: "multi",
    category: "live",
    tier: "pro",
    versions: [
      { key: "original", label: "Original", type: "hls", source: "", mp4: "" },
      { key: "enhanced", label: "Enhanced", type: "mp4", source: "https://mjtvplus.com/0/MJ%20-%201992%20DWT%20Bremen,%20Germany_BQ%20by%20HappyLee.mp4", mp4: "https://mjtvplus.com/0/MJ%20-%201992%20DWT%20Bremen,%20Germany_BQ%20by%20HappyLee.mp4" }
    ],
    chapters: [
      { label: "PLAY ALL", sec: 0 },
      { label: "INTRO", sec: 0 },
      { label: "JAM", sec: 308 },
      { label: "WANNA BE STARTIN' SOMETHIN'", sec: 699 },
      { label: "HUMAN NATURE", sec: 1055 },
      { label: "SMOOTH CRIMINAL", sec: 1393 },
      { label: "I JUST CAN'T STOP LOVING YOU", sec: 1835 },
      { label: "SHE'S OUT OF MY LIFE", sec: 2133 },
      { label: "THE JACKSON 5 MEDLEY", sec: 2420 },
      { label: "THRILLER", sec: 2836 },
      { label: "BILLIE JEAN", sec: 3188 },
      { label: "WORKIN' DAY AND NIGHT", sec: 3836 },
      { label: "BEAT IT", sec: 4376 },
      { label: "WILL YOU BE THERE", sec: 5002 },
      { label: "BLACK OR WHITE", sec: 5528 },
      { label: "HEAL THE WORLD", sec: 6028 },
      { label: "MAN IN THE MIRROR", sec: 6660 }
    ]
  },

 {
  id: "rome88",
  title: "Rome, Italy (May 23, 1988)",
  poster: "rome88.jpg",
  type: "bundle",                  // Mehrfach-Aufnahmen (PRO + AM.)
  category: "live",
  tier: "pro",

  // Standard-Auswahl
  defaultRecording: "pro",
  defaultVersion: "enhanced",

  recordings: [
    {
      key: "pro",
      label: "PRO",
      chapters: [
        { label: "PLAY ALL", sec: 00 },
        { label: "INTRO", sec: 50 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 132 },
        { label: "HEARTBREAK HOTEL", sec: 447 },
        { label: "ANOTHER PART OF ME", sec: 744 },
        { label: "I JUST CAN'T STOP LOVING YOU", sec: 1016 },
        { label: "SHE'S OUT OF MY LIFE", sec: 1299 },
        { label: "I WANT YOU BACK", sec: 1517 },
        { label: "THE LOVE YOU SAVE", sec: 1582 },
        { label: "I'LL BE THERE", sec: 1643 },
        { label: "ROCK WITH YOU", sec: 1872 },
        { label: "HUMAN NATURE", sec: 2142 },
        { label: "SMOOTH CRIMINAL (INTRO)", sec: 2459 },
        { label: "SMOOTH CRIMINAL", sec: 2521 },
        { label: "DIRTY DIANA", sec: 2907 },
        { label: "THRILLER", sec: 3319 }
      ],
      versions: [
        { key: "original",  label: "Original",  type: "mp4", source: "", mp4: "" },
        { key: "enhanced",  label: "Enhanced",  type: "mp4",
          source: "https://mjtvplus.com/0/MJ%20-%201988%20Rome.mp4",
          mp4:    "https://mjtvplus.com/0/MJ%20-%201988%20Rome.mp4" }
      ]
    },
    {
      key: "am",
      label: "AM. (May 24, 1988)",
      chapters: [
        { label: "PLAY ALL", sec: 0 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 0 },
        { label: "HEARTBREAK HOTEL", sec: 284 },
        { label: "ANOTHER PART OF ME", sec: 571 },
        { label: "I JUST CAN'T STOP LOVING YOU", sec: 809 },
        { label: "SHE'S OUT OF MY LIFE", sec: 1098 },
        { label: "I WANT YOU BACK", sec: 1315 },
        { label: "THE LOVE YOU SAVE", sec: 1385 },
        { label: "I'LL BE THERE", sec: 1446 },
        { label: "ROCK WITH YOU", sec: 1701 },
        { label: "HUMAN NATURE", sec: 1953 },
        { label: "SMOOTH CRIMINAL", sec: 2252 },
        { label: "DIRTY DIANA", sec: 2552 },
        { label: "THRILLER", sec: 2889 },
        { label: "WORKING DAY AND NIGHT", sec: 3158 },
        { label: "BEAT IT", sec: 3555 },
        { label: "BILLIE JEAN", sec: 3935 },
        { label: "BAD", sec: 4355 },
        { label: "THE WAY YOU MAKE ME FEEL", sec: 4808 },
        { label: "MAN IN THE MIRROR", sec: 5118 }
      ],
      versions: [
        { key: "original", label: "Original", type: "mp4",
          source: "https://mjtvplus.com/0/Rome%2088%20Νew%20Rip.mp4",
          mp4: "https://mjtvplus.com/0/Rome%2088%20Νew%20Rip.mp4" }
      ]
    }
  ]
},
{
  id: "barcelona88",
  title: "Barcelona, Spain (August 9, 1988)",
  poster: "barcelona88.jpg",
  type: "bundle",          // Nur AM.-Version (keine PRO-Aufnahme)
  category: "live",
  tier: "am",

  // Standard-Auswahl
  defaultRecording: "am",
  defaultVersion: "original",

  recordings: [
    {
      key: "am",
      label: "AM.",
      chapters: [
        { label: "PLAY ALL", sec: 0 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 61 },   // 1:11 → -10s
        { label: "THIS PLACE HOTEL", sec: 353 },             // 6:13 → -10s
        { label: "ANOTHER PART OF ME", sec: 649 },           // 10:59 → -10s
        { label: "I JUST CAN'T STOP LOVING YOU", sec: 922 }, // 15:32 → -10s
        { label: "SHE'S OUT OF MY LIFE", sec: 1218 },        // 20:28 → -10s
        { label: "JACKSON 5 MEDLEY", sec: 1435 },            // 24:25 → -10s
        { label: "ROCK WITH YOU", sec: 1871 },               // 31:31 → -10s
        { label: "HUMAN NATURE", sec: 2172 },                // 36:22 → -10s
        { label: "SMOOTH CRIMINAL", sec: 2484 },             // 41:34 → -10s
        { label: "DIRTY DIANA", sec: 2925 },                 // 48:45 → -10s
        { label: "THRILLER", sec: 3318 },                    // 55:28 → -10s
        { label: "BAND GROOVE", sec: 3552 },                 // 59:22 → -10s
        { label: "WORKING DAY AND NIGHT", sec: 4543 },       // 1:15:43 → -10s
        { label: "BEAT IT", sec: 5003 },                     // 1:23:23 → -10s
        { label: "BILLIE JEAN", sec: 5512 },                 // 1:32:02 → -10s
        { label: "BAD", sec: 6078 }                          // 1:41:18 → -10s
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/VHS%20-%20Barcelona%201988.%207,04%20GB.mp4",
          mp4:    "https://mjtvplus.com/0/VHS%20-%20Barcelona%201988.%207,04%20GB.mp4"
        }
      ]
    }
  ]
},
{
  id: "msg2001",
  title: "MSG – 30th Anniversary Celebration (September 7, 2001)",
  poster: "ny01pro.jpg",
  type: "bundle",
  category: "live",
  tier: "pro",

  // Standardauswahl
  defaultRecording: "pro",
  defaultVersion: "original",

  recordings: [
    {
      key: "pro",
      label: "PRO",
      chapters: [
      { label: "PLAY ALL", sec: 0 },
        { label: "LIZ TAYLOR SPEECH", sec: 0 },     // 0:43 → 0:00
        { label: "INTRO", sec: 53 },  // 1:37 → 0:53
        { label: "THE JACKSONS MEDLEY", sec: 102 },                         // 2:26 → 1:42
        { label: "CAN YOU FEEL IT", sec: 103 },                             // 2:27 → 1:43
        { label: "HISTORY (Prelude) / ABC", sec: 198 },                     // 4:02 → 3:18
        { label: "(STOP!) THE LOVE YOU SAVE", sec: 273 },                   // 5:17 → 4:33
        { label: "I'LL BE THERE", sec: 338 },                               // 6:22 → 5:38
        { label: "I WANT YOU BACK", sec: 642 },                             // 11:26 → 10:42
        { label: "DANCING MACHINE (ft. *NSYNC)", sec: 722 },                // 12:46 → 12:02
        { label: "SHAKE YOUR BODY (DOWN TO THE GROUND)", sec: 847 },        // 14:51 → 14:07
        { label: "CHRIS TUCKER SPEECH", sec: 1094 },        // 18:58 → 18:14
        { label: "THE WAY YOU MAKE ME FEEL", sec: 1151 },                   // 19:55 → 19:11
        { label: "BLACK OR WHITE", sec: 1429 },                             // 24:33 → 23:49
        { label: "BEAT IT", sec: 1574 },                                    // 26:58 → 26:14
        { label: "BILLIE JEAN", sec: 1842 },                                // 31:26 → 30:42
        { label: "YOU ROCK MY WORLD INTRO", sec: 2331 },             // 39:35 → 38:51
        { label: "YOU ROCK MY WORLD", sec: 2352 },                          // 39:56 → 39:12
        { label: "CREDITS", sec: 2671 }        // 45:15 → 44:31
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/MJ%20-%202001%2030th%20Anniversary%20(HD).mp4",
          mp4:    "https://mjtvplus.com/0/MJ%20-%202001%2030th%20Anniversary%20(HD).mp4"
        },
        {
          key: "enhanced",
          label: "Enhanced",
          type: "mp4",
          source: "",   // später Link einfügen
          mp4: ""
        }
      ]
    }
  ]
},
{
  id: "munich97",
  title: "Munich, Germany (1997)",
  poster: "munich97.jpg",
  type: "multi",
  category: "live",
  tier: "pro",

  versions: [
    { key: "original",  label: "Original",  type: "mp4", source: "", mp4: "" },
    { key: "enhanced",  label: "Enhanced",  type: "mp4",
      source: "https://mjtvplus.com/0/MJ%20-%201997%20Munich%20HD%20ZDF%20(lee)_HD.mp4",
      mp4:    "https://mjtvplus.com/0/MJ%20-%201997%20Munich%20HD%20ZDF%20(lee)_HD.mp4"
    }
  ],

  chapters: [
    { label: "PLAY ALL",                     sec:    0 },
    { label: "SCREAM",                       sec:  266 }, // 04:26
    { label: "THEY DON'T CARE ABOUT US",     sec:  504 }, // 08:24
    { label: "IN THE CLOSET",                sec:  736 }, // 12:16
    { label: "WANNA BE STARTIN' SOMETHIN'",  sec:  837 }, // 13:57
    { label: "STRANGER IN MOSCOW",           sec: 1222 }, // 20:22
    { label: "SMOOTH CRIMINAL",              sec: 1568 }, // 26:08
    { label: "YOU ARE NOT ALONE",            sec: 1962 }, // 32:42
    { label: "JACKSON 5 MEDLEY",             sec: 2322 }, // 38:42
    { label: "BILLIE JEAN",                  sec: 3087 }, // 51:27
    { label: "THRILLER",                     sec: 3606 }, // 1:00:06
    { label: "BEAT IT",                      sec: 4004 }, // 1:06:44
    { label: "BLOOD ON THE DANCE FLOOR",     sec: 4521 }, // 1:15:21
    { label: "DANGEROUS",                    sec: 4788 }, // 1:19:48
    { label: "BLACK OR WHITE",               sec: 5140 }, // 1:25:40
    { label: "EARTH SONG",                   sec: 5447 }, // 1:30:47
    { label: "HEAL THE WORLD",               sec: 6200 }, // 1:43:20
    { label: "HISTORY",                      sec: 6804 }  // 1:53:24
  ]
},
{
  id: "monza92",
  title: "Monza, Italy (1992)",
  poster: "monza92.jpg",
  type: "multi",
  category: "live",
  tier: "am",

  versions: [
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/Monza%20July%207%20New%20Rip.mp4",
      mp4:    "https://mjtvplus.com/0/Monza%20July%207%20New%20Rip.mp4"
    }
  ],

   chapters: [
    { label: "PLAY ALL",                          sec:    0 },
    { label: "BRACE YOURSELF",                    sec:    0 },
    { label: "JAM",                               sec:  206 },   // 03:26
    { label: "WANNA BE STARTIN' SOMETHIN'",       sec:  679 },   // 11:19
    { label: "HUMAN NATURE",                      sec: 1066 },   // 17:46
    { label: "SMOOTH CRIMINAL",                   sec: 1487 },   // 24:47
    { label: "I JUST CAN'T STOP LOVING YOU",      sec: 1885 },   // 31:25
    { label: "SHE'S OUT OF MY LIFE",              sec: 2151 },   // 35:51
    { label: "I WANT YOU BACK",sec: 2407 },                       // 40:07
    { label: "THE LOVE YOU SAVE",                 sec: 2471 },   // 41:11
    { label: "I'LL BE THERE",                     sec: 2525 },   // 42:05
    { label: "THRILLER",                          sec: 2871 },   // 47:51
    { label: "BILLIE JEAN",                       sec: 3191 },   // 53:11
    { label: "WORKING DAY AND NIGHT",             sec: 3869 },   // 1:04:29
    { label: "BEAT IT",                           sec: 4330 },   // 1:12:10
    { label: "WILL YOU BE THERE",                 sec: 4920 },   // 1:22:00
    { label: "THE WAY YOU MAKE ME FEEL",          sec: 5327 },   // 1:28:47
    { label: "BAD",                               sec: 5727 },   // 1:35:27
    { label: "BLACK OR WHITE",                    sec: 6147 },   // 1:42:27
    { label: "HEAL THE WORLD",                    sec: 6680 },   // 1:51:20
    { label: "MAN IN THE MIRROR",                 sec: 7208 }    // 2:00:08
  ]
},
{
  id: "budapest96",
  title: "Budapest, Hungary (September 10, 1996)",
  poster: "budapest96.jpg",
  type: "multi",
  category: "live",
  tier: "am",

  versions: [
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/VHS%2048-HIStory%20Tour%20Budapest.mp4",
      mp4:    "https://mjtvplus.com/0/VHS%2048-HIStory%20Tour%20Budapest.mp4"
    }
  ],

  chapters: [
    { label: "PLAY ALL",                        sec:    0 },
    { label: "THE GREAT GATE OF KIEV (OPENING)",sec:    0 },     // 0:00
    { label: "SCREAM",                          sec:  452 },     // 7:32
    { label: "THE DRILL",                       sec:  615 },     // 10:15
    { label: "THEY DON'T CARE ABOUT US",        sec:  675 },     // 11:15
    { label: "IN THE CLOSET",                   sec:  793 },     // 13:13
    { label: "WANNA BE STARTIN' SOMETHIN'",     sec:  865 },     // 14:25
    { label: "STRANGER IN MOSCOW",              sec:  870 },     // 14:30
    { label: "SMOOTH CRIMINAL",                 sec: 1088 },     // 18:08
    { label: "YOU ARE NOT ALONE",               sec: 1440 },     // 24:00
    { label: "THE WAY YOU MAKE ME FEEL",        sec: 1670 },     // 27:50
    { label: "I WANT YOU BACK",                 sec: 1927 },     // 32:07
    { label: "THE LOVE YOU SAVE",               sec: 1987 },     // 33:04
    { label: "I'LL BE THERE",                   sec: 2007 },     // 33:24
    { label: "ROCK WITH YOU",                   sec: 2120 },     // 35:23
    { label: "OFF THE WALL",                    sec: 2159 },     // 35:52
    { label: "DON'T STOP 'TIL YOU GET ENOUGH",  sec: 2188 },     // 36:21
    { label: "BILLIE JEAN",                     sec: 2467 },     // 41:07
    { label: "THRILLER",                        sec: 2719 },     // 45:19
    { label: "BEAT IT",                         sec: 3118 },     // 51:58
    { label: "COME TOGETHER",                   sec: 3481 },     // 58:01
    { label: "D.S.",                            sec: 3539 },     // 58:49
    { label: "DANGEROUS",                       sec: 3674 },     // 1:01:14
    { label: "BLACK OR WHITE",                  sec: 3767 },     // 1:02:37
    { label: "EARTH SONG",                      sec: 4045 },     // 1:07:30
    { label: "HEAL THE WORLD",                  sec: 4400 },     // 1:13:20
    { label: "THE GREAT GATE OF KIEV (REPRISE)",sec: 4600 },     // 1:16:40
    { label: "HISTORY",                         sec: 4742 }      // 1:19:02
  ]
},
{
  id: "ostende97",
  title: "Ostende, Belgium (September 3, 1997)",
  poster: "ostende97.jpg",
  type: "bundle",             // Mehrfach-Aufnahmen (Left Side + Front)
  category: "live",
  tier: "am",

  // Standard-Auswahl
  defaultRecording: "left",
  defaultVersion: "original",

  recordings: [
    {
      key: "left",
      label: "Left Side",
      chapters: [
  { label: "PLAY ALL",                    sec:    0 },
  { label: "INTRO",                       sec:   94 },   // 1:34
  { label: "SCREAM",                      sec:  476 },   // 7:56
  { label: "THEY DON'T CARE ABOUT US",    sec:  707 },   // 11:47
  { label: "IN THE CLOSET",               sec:  928 },   // 15:28
  { label: "WANNA BE STARTIN' SOMETHIN'", sec: 1028 },   // 17:08
  { label: "STRANGER IN MOSCOW",          sec: 1500 },   // 25:00
  { label: "SMOOTH CRIMINAL",             sec: 2038 },   // 33:58
  { label: "YOU ARE NOT ALONE",           sec: 2575 },   // 42:55
  { label: "JACKSON 5 MEDLEY",            sec: 3038 },   // 50:38
  { label: "BILLIE JEAN",                 sec: 3925 },   // 01:05:25
  { label: "THRILLER",                    sec: 4650 },   // 01:17:30
  { label: "BEAT IT",                     sec: 5060 },   // 01:24:20
  { label: "DANGEROUS",                   sec: 5850 },   // 1:37:30
  { label: "BLACK OR WHITE",              sec: 6195 },   // 1:43:15
  { label: "EARTH SONG",                  sec: 6600 },   // 1:50:00
  { label: "HEAL THE WORLD",              sec: 7409 },   // 2:03:29
  { label: "HISTORY",                     sec: 8515 }    // 2:21:55
],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Michael%20Jackson%20Live%20In%20Ostende%201997%20(Full%20Amateur%20Concert)%20%5bNEW%20RAW%202022%20Left%20Version%20RIP%5d_1.mp4",
          mp4:    "https://mjtvplus.com/0/Michael%20Jackson%20Live%20In%20Ostende%201997%20(Full%20Amateur%20Concert)%20%5bNEW%20RAW%202022%20Left%20Version%20RIP%5d_1.mp4"
        }
      ]
    },

    {
      key: "front",
      label: "Front (Coming Soon)",
      chapters: [
        { label: "PLAY ALL", sec: 0 }
        // Hier später eigene Kapitel & Link ergänzen
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "",
          mp4: ""
        }
      ]
    }
  ]
},
{
  id: "bucharest92",
  title: "Bucharest, Romania (Oct 1, 1992)",
  poster: "bucharest92.jpg",
  type: "bundle",           // Mehrfach-Versionen: Original + Enhanced
  category: "live",
  tier: "pro",

  // Standard-Auswahl
  defaultRecording: "pro",
  defaultVersion: "original",

  recordings: [
    {
      key: "pro",
      label: "PRO",
      chapters: [
        { label: "PLAY ALL",                        sec:    0 },
        { label: "BRACE YOURSELF",                  sec:  315 }, // 5:15
        { label: "JAM",                             sec:  655 }, // 10:55
        { label: "WANNA BE STARTIN' SOMETHIN'",     sec: 1032 }, // 17:12
        { label: "HUMAN NATURE",                    sec: 1360 }, // 22:40
        { label: "SMOOTH CRIMINAL",                 sec: 1745 }, // 29:05
        { label: "I JUST CAN'T STOP LOVING YOU",    sec: 2045 }, // 34:05
        { label: "SHE'S OUT OF MY LIFE",            sec: 2307 }, // 38:27
        { label: "JACKSON 5 MEDLEY",                sec: 2602 }, // 43:22
        { label: "THRILLER",                        sec: 2987 }, // 49:47
        { label: "BILLIE JEAN",                     sec: 3335 }, // 55:35
        { label: "WORKIN' DAY AND NIGHT",           sec: 3990 }, // 1:06:30
        { label: "BEAT IT",                         sec: 4590 }, // 1:16:30
        { label: "WILL YOU BE THERE",               sec: 5037 }, // 1:23:57
        { label: "BLACK OR WHITE",                  sec: 5504 }, // 1:31:44
        { label: "HEAL THE WORLD",                  sec: 5996 }, // 1:39:56
        { label: "MAN IN THE MIRROR",               sec: 6462 }, // 1:47:42
        { label: "ROCKET MAN",                      sec: 7200 }  // 2:00:00
      ],
      versions: [
        {
          key: "original",
          label: "Original (BBC MSTR)",
          type: "mp4",
          source: "https://mjtvplus.com/0/michael%20jackson%20bucharest%20mfx%20(1).mp4",
          mp4:    "https://mjtvplus.com/0/michael%20jackson%20bucharest%20mfx%20(1).mp4"
        },
        {
          key: "enhanced",
          label: "Enhanced (coming soon)",
          type: "mp4",
          source: "",
          mp4: ""
        }
      ]
    }
  ]
},
{
  id: "london79",
  title: "London, UK (1979)",
  poster: "london79.jpg",
  type: "bundle",          // Mehrfach-Versionen (Original + Enhanced)
  category: "live",
  tier: "pro",

  // Standardauswahl
  defaultRecording: "pro",
  defaultVersion: "original",

  recordings: [
    {
      key: "pro",
      label: "PRO",
     chapters: [
        { label: "PLAY ALL",                sec:    0 },
        { label: "INTRO",                   sec:   27 },   // 00:00 + 27s
        { label: "DANCING MACHINE",         sec:  115 },   // 01:28 + 27s
        { label: "THINGS I DO FOR YOU",     sec:  252 },   // 03:45 + 27s
        { label: "BEN",                     sec:  474 },   // 07:27 + 27s
        { label: "KEEP ON DANCING",         sec:  635 },   // 10:08 + 27s
        { label: "I WANT YOU BACK",         sec:  926 },   // 14:49 + 27s
        { label: "ABC",                     sec: 1001 },   // 15:44 + 27s
        { label: "THE LOVE YOU SAVE",       sec: 1033 },   // 16:16 + 27s
        { label: "I'LL BE THERE",           sec: 1156 },   // 17:39 + 27s
        { label: "ENJOY YOURSELF",          sec: 1272 },   // 19:55 + 27s
        { label: "DESTINY",                 sec: 1534 },   // 24:57 + 27s
        { label: "SHOW YOU THE WAY TO GO",  sec: 1818 },   // 29:21 + 27s
        { label: "ALL NIGHT DANCIN'",       sec: 2332 },   // 38:15 + 27s
        { label: "BLAME IT ON THE BOOGIE",  sec: 2609 }    // 42:32 + 27s
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/the%20jacksons%20london%201975-1.mp4",
          mp4:    "https://mjtvplus.com/0/the%20jacksons%20london%201975-1.mp4"
        },
        {
          key: "enhanced",
          label: "Enhanced (coming soon)",
          type: "mp4",
          source: "",
          mp4: ""
        }
      ]
    }
  ]
},
{
  id: "historyrehearsals",
  title: "History Tour Behind The Scenes",
  poster: "historyrehearsals.jpg",   // <- ggf. anpassen
  type: "mp4",
  category: "live",
  tier: "pro",
  source: "https://mjtvplus.com/0/BTS%20History%20Textless%20Master.mp4",
  mp4:    "https://mjtvplus.com/0/BTS%20History%20Textless%20Master.mp4"
},
{
  id: "mjfriendsseoul99",
  title: "MJ & Friends — Seoul, South Korea (1999)",
  poster: "mjfriendsseoul99.jpg",
  type: "bundle",           // Mehrfach-Aufnahmen (PRO + AM.)
  category: "live",
  tier: "pro",

  // Standard-Auswahl
  defaultRecording: "pro",
  defaultVersion: "original",

  recordings: [
    {
      key: "pro",
      label: "PRO",
      chapters: [
        { label: "PLAY ALL",           sec:    0 },
        { label: "MEDLEY",             sec:  660 },  // 0:00 + 11 min
        { label: "BILLIE JEAN",        sec:  909 },  // 4:09 + 11 min
        { label: "DANGEROUS",          sec: 1190 },  // 8:10 + 11 min
        { label: "EARTH SONG",         sec: 1557 },  // 15:07 + 11 min
        { label: "YOU ARE NOT ALONE",  sec: 2752 },  // 35:02 + 11 min
        { label: "HEAL THE WORLD",     sec: 2994 }   // 39:06 + 11 min
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/MJ%20-%201999%20MJ%20&%20Friends%20(Seoul%20New%20Rip).mp4",
          mp4:    "https://mjtvplus.com/0/MJ%20-%201999%20MJ%20&%20Friends%20(Seoul%20New%20Rip).mp4"
        },
        {
          key: "enhanced",
          label: "Enhanced (coming soon)",
          type: "mp4",
          source: "",
          mp4: ""
        }
      ]
    },
    {
      key: "am",
      label: "AM.",
      chapters: [
        { label: "PLAY ALL", sec: 0 }
        // Setlist + Links werden später ergänzt
      ],
      versions: [
        { key: "original", label: "Original", type: "mp4", source: "", mp4: "" }
      ]
    }
  ]
},
{
  id: "stockholm92",
  title: "Stockholm, Sweden (July 17 & 18, 1992)",
  poster: "stockholm92.jpg",
  type: "bundle",              // zwei Aufnahmedaten in einem Eintrag
  category: "live",
  tier: "am",

  // Default-Auswahl
  defaultRecording: "1992-07-17",
  defaultVersion: "original",

  recordings: [
    {
      key: "1992-07-17",
      label: "July 17, 1992",
      chapters: [
        { label: "PLAY ALL",                         sec:    0 },
        { label: "JAM",                              sec:  101 },  // 01:41
        { label: "WANNA BE STARTIN' SOMETHIN'",      sec:  489 },  // 08:09
        { label: "HUMAN NATURE",                     sec:  843 },  // 14:03
        { label: "SMOOTH CRIMINAL",                  sec: 1226 },  // 20:26
        { label: "I JUST CAN'T STOP LOVING YOU",     sec: 1610 },  // 26:50
        { label: "SHE'S OUT OF MY LIFE",             sec: 1874 },  // 31:14
        { label: "I WANT YOU BACK",                  sec: 2122 },  // 35:22
        { label: "THE LOVE YOU SAVE",                sec: 2190 },  // 36:30
        { label: "I'LL BE THERE",                    sec: 2252 },  // 37:32
        { label: "THRILLER",                         sec: 2504 },  // 41:44
        { label: "BILLIE JEAN",                      sec: 2863 },  // 47:43
        { label: "WORKING DAY AND NIGHT",            sec: 3501 },  // 58:21
        { label: "BEAT IT",                          sec: 3964 },  // 01:06:04
        { label: "WILL YOU BE THERE",                sec: 4494 },  // 01:14:54
        { label: "BLACK OR WHITE",                   sec: 5011 },  // 01:23:31
        { label: "HEAL THE WORLD",                   sec: 5486 },  // 01:31:26
        { label: "MAN IN THE MIRROR",                sec: 6012 }   // 01:40:12
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Stockholm%20(17th)%20New%20Rip.mp4",
          mp4:    "https://mjtvplus.com/0/Stockholm%20(17th)%20New%20Rip.mp4"
        }
      ]
    },
    {
      key: "1992-07-18",
      label: "July 18, 1992",
      chapters: [
        { label: "PLAY ALL",                         sec:    0 },
        { label: "INTRO",                            sec:    0 },  // 00:00
        { label: "JAM",                              sec:  215 },  // 03:35
        { label: "WANNA BE STARTIN' SOMETHIN'",      sec:  604 },  // 10:04
        { label: "HUMAN NATURE",                     sec:  953 },  // 15:53
        { label: "SMOOTH CRIMINAL",                  sec: 1351 },  // 22:31
        { label: "I JUST CAN'T STOP LOVING YOU",     sec: 1745 },  // 29:05
        { label: "SHE'S OUT OF MY LIFE",             sec: 2010 },  // 33:30
        { label: "JACKSON 5 MEDLEY",                 sec: 2271 },  // 37:51
        { label: "THRILLER",                         sec: 2689 },  // 44:49
        { label: "BILLIE JEAN",                      sec: 2994 },  // 49:54
        { label: "WORKING DAY AND NIGHT",            sec: 3686 },  // 01:01:26
        { label: "BEAT IT",                          sec: 4212 },  // 01:10:12
        { label: "WILL YOU BE THERE",                sec: 4806 },  // 01:20:06
        { label: "BLACK OR WHITE",                   sec: 5299 },  // 01:28:19
        { label: "HEAL THE WORLD",                   sec: 5844 },  // 01:37:24
        { label: "MAN IN THE MIRROR",                sec: 6385 }   // 01:46:25
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/1992.07.18%20Stockholm.mp4",
          mp4:    "https://mjtvplus.com/0/1992.07.18%20Stockholm.mp4"
        }
      ]
    }
  ]
},
{
  id: "lausanne97",
  title: "Lausanne, Switzerland (June 20, 1997)",
  poster: "lausanne97.jpg",
  type: "multi",
  category: "live",
  tier: "am",
  versions: [
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/1997.06.20%20Lausanne.mp4",
      mp4:    "https://mjtvplus.com/0/1997.06.20%20Lausanne.mp4"
    }
  ],
  chapters: [
    { sec:    0, label: "PLAY ALL" },
    { sec:    0, label: "THE GREAT GATE OF KIEV (OPENING)" },
    { sec:  497, label: "SCREAM" },
    { sec:  667, label: "THE DRILL" },
    { sec:  724, label: "THEY DON'T CARE ABOUT US" },
    { sec:  890, label: "IN THE CLOSET" },
    { sec: 1014, label: "WANNA BE STARTIN' SOMETHIN'" },
    { sec: 1398, label: "STRANGER IN MOSCOW" },
    { sec: 1920, label: "SMOOTH CRIMINAL" },
    { sec: 2315, label: "YOU ARE NOT ALONE" },
    { sec: 2684, label: "I WANT YOU BACK" },
    { sec: 2769, label: "THE LOVE YOU SAVE" },
    { sec: 2832, label: "I'LL BE THERE" },
    { sec: 3259, label: "BILLIE JEAN (INTRO)" },
    { sec: 3373, label: "BILLIE JEAN" },
    { sec: 3891, label: "THRILLER" },
    { sec: 4345, label: "BEAT IT" },
    { sec: 4857, label: "BLOOD ON THE DANCE FLOOR" },
    { sec: 5181, label: "DANGEROUS" },
    { sec: 5444, label: "BLACK OR WHITE" },
    { sec: 5814, label: "EARTH SONG" },
    { sec: 6430, label: "HEAL THE WORLD" },
    { sec: 6991, label: "TDCAU & THE GREAT GATE OF KIEV" },
    { sec: 7164, label: "HISTORY" }
  ]
},
{
  id: "oviedo92",
  title: "Oviedo, Spain (September 6, 1992)",
  poster: "oviedo92.jpg",
  type: "multi",
  category: "live",
  tier: "am",
  versions: [
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/Oviedo%20New%20Rip.mp4",
      mp4:    "https://mjtvplus.com/0/Oviedo%20New%20Rip.mp4"
    }
  ],
  chapters: [
    { sec:    0, label: "PLAY ALL" },
    { sec:   45, label: "BRACE YOURSELF" },
    { sec:  389, label: "JAM" },
    { sec:  787, label: "WANNA BE STARTIN' SOMETHIN'" },
    { sec: 1154, label: "HUMAN NATURE" },
    { sec: 1573, label: "SMOOTH CRIMINAL" },
    { sec: 1982, label: "I JUST CAN'T STOP LOVING YOU" },
    { sec: 2305, label: "SHE'S OUT OF MY LIFE" },
    { sec: 2639, label: "I WANT YOU BACK" },
    { sec: 2710, label: "THE LOVE YOU SAVE" },
    { sec: 2772, label: "I'LL BE THERE" },
    { sec: 3092, label: "THRILLER" },
    { sec: 3467, label: "BILLIE JEAN" },
    { sec: 4163, label: "WORKING DAY AND NIGHT" },
    { sec: 4758, label: "BEAT IT" },
    { sec: 5411, label: "WILL YOU BE THERE" },
    { sec: 5905, label: "BLACK OR WHITE" },
    { sec: 6475, label: "HEAL THE WORLD" },
    { sec: 7008, label: "MAN IN THE MIRROR" }
  ]
},
{
  id: "leipzig97",
  title: "Leipzig, Germany (August 3, 1997)",
  poster: "leipzig97.jpg",
  type: "multi",
  category: "live",
  tier: "am",
  versions: [
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/Leipzig%2008.03.1997%20Color%20Rip.mp4",
      mp4:    "https://mjtvplus.com/0/Leipzig%2008.03.1997%20Color%20Rip.mp4"
    }
  ],
  chapters: [
    { sec:    0, label: "PLAY ALL" },
    { sec:    0, label: "BEAT IT" },
    { sec:  303, label: "BLOOD ON THE DANCE FLOOR" },
    { sec:  555, label: "DANGEROUS" },
    { sec:  797, label: "BLACK OR WHITE" }
  ]
},
{
  id: "marbella88",
  title: "Marbella, Spain (August 5, 1988)",
  poster: "marbella88.jpg",
  type: "multi",
  category: "live",
  tier: "am",
  versions: [
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/Marbella%20New%20Vhs.mp4",
      mp4:    "https://mjtvplus.com/0/Marbella%20New%20Vhs.mp4"
    }
  ],
  chapters: [
    { sec:    0, label: "PLAY ALL" },
    { sec:    7, label: "INTRO" },
    { sec:   70, label: "WANNA BE STARTIN' SOMETHIN'" },
    { sec:  373, label: "THIS PLACE HOTEL" },
    { sec:  651, label: "ANOTHER PART OF ME" },
    { sec:  939, label: "I JUST CAN'T STOP LOVING YOU" },
    { sec: 1203, label: "SHE'S OUT OF MY LIFE" },
    { sec: 1459, label: "I WANT YOU BACK" },
    { sec: 1524, label: "THE LOVE YOU SAVE" },
    { sec: 1585, label: "I'LL BE THERE" },
    { sec: 1796, label: "BAND GROOVE" },
    { sec: 2044, label: "WORKING DAY AND NIGHT" },
    { sec: 2467, label: "BEAT IT" },
    { sec: 2900, label: "BILLIE JEAN" },
    { sec: 3455, label: "BAD" }
  ]
},
{
  id: "milan97",
  title: "Milan, Italy (1997)",
  poster: "milan97.jpg",
  type: "multi",
  category: "live",
  tier: "am",
  versions: [
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/Milan%2097%20New%20Rip.mp4",
      mp4:    "https://mjtvplus.com/0/Milan%2097%20New%20Rip.mp4"
    }
  ],
  chapters: [
    { sec:    0, label: "PLAY ALL" },
    { sec:    0, label: "THE GREAT GATE OF KIEV (OPENING)" },
    { sec:  404, label: "SCREAM" },
    { sec:  575, label: "THE DRILL" },
    { sec:  633, label: "THEY DON'T CARE ABOUT US" },
    { sec:  799, label: "IN THE CLOSET" },
    { sec:  924, label: "WANNA BE STARTIN' SOMETHIN'" },
    { sec: 1321, label: "STRANGER IN MOSCOW" },
    { sec: 1866, label: "SMOOTH CRIMINAL" },
    { sec: 2250, label: "YOU ARE NOT ALONE" },
    { sec: 2733, label: "I WANT YOU BACK" },
    { sec: 2815, label: "THE LOVE YOU SAVE" },
    { sec: 2877, label: "I'LL BE THERE" },
    { sec: 3528, label: "BILLIE JEAN (INTRO)" },
    { sec: 3702, label: "BILLIE JEAN" },
    { sec: 4204, label: "THRILLER" },
    { sec: 4670, label: "BEAT IT" },
    { sec: 5143, label: "BLOOD ON THE DANCE FLOOR" },
    { sec: 5631, label: "DANGEROUS" },
    { sec: 5982, label: "BLACK OR WHITE" },
    { sec: 6375, label: "EARTH SONG" },
    { sec: 7195, label: "HEAL THE WORLD" },
    { sec: 7724, label: "TDCAU & THE GREAT GATE OF KIEV (INTERLUDE)" },
    { sec: 7909, label: "HISTORY" }
  ]
},

  // ===== RESTLICHE POSTER (ohne Quellen, werden trotzdem angezeigt) =====
  // (Achtung: keine Duplikate der IDs oben!)
    { id:"tokyo87",       title:"Tokyo 87",       poster:"tokyo87.jpg",       source:"", type:"hls", category:"live", tier:"pro" },
  { id:"auckland96",    title:"Auckland 96",    poster:"auckland96.jpg",    source:"", type:"hls", category:"live", tier:"pro" },
  { id:"basel97",       title:"Basel 97",       poster:"basel97.jpg",       source:"", type:"hls", category:"live", tier:"pro" },
  { id:"bucharest96",   title:"Bucharest 96",   poster:"bucharest96.jpg",   source:"https://stream.mux.com/Om7y481gzPH00TZ6DVl5NpmSVGrqJMJbvz17dmVVn00yA.m3u8", type:"hls", category:"live", tier:"pro" },
  { id:"copenhagen97",  title:"Copenhagen 97",  poster:"copenhagen97.jpg",  source:"", type:"hls", category:"live", tier:"pro" },
  { id:"gothenburg97",  title:"Gothenburg 97",  poster:"gothenburg97.jpg",  source:"", type:"hls", category:"live", tier:"pro" },
  { id:"helsinki97",    title:"Helsinki 97",    poster:"helsinki97.jpg",    source:"", type:"hls", category:"live", tier:"pro" },
  { id:"johannesburg97",title:"Johannesburg 97",poster:"johannesburg97.jpg",source:"", type:"hls", category:"live", tier:"pro" },
  { id:"kualalumpur96", title:"Kuala Lumpur 96",poster:"kualalumpur96.jpg", source:"", type:"hls", category:"live", tier:"pro" },
  { id:"seoul96",       title:"Seoul 96",       poster:"seoul96.jpg",       source:"", type:"hls", category:"live", tier:"pro" },

  // neue Poster + AM/PRO Markierungen
  { id:"royalbrunei96", title:"Brunei 96 (Royal Celebration)", poster:"royalbrunei96.jpg", source:"", type:"hls", category:"live", tier:"pro" },
  { id:"brunei96htw",   title:"Brunei 96 – Heal The World",    poster:"brunei96htw.jpg",   source:"", type:"hls", category:"live", tier:"pro" },
  { id:"nysept10-01ama",title:"New York 2001 (Sept 10)", poster:"nysept10-01ama.jpg", source:"", type:"hls", category:"live", tier:"am" },
  { id:"kansas84",      title:"Kansas 84",     poster:"kansas84.jpg",      source:"", type:"hls", category:"live", tier:"pro" },
  { id:"ny84",          title:"New York 84",   poster:"ny84.jpg",          source:"", type:"hls", category:"live", tier:"am"  },
  { id:"dallas84",      title:"Dallas 84",     poster:"dallas84.jpg",      source:"", type:"hls", category:"live", tier:"pro" },

  // weitere AM-Markierungen laut deiner Liste
  { id:"mexico93",      title:"Mexico 93",     poster:"mexico93.jpg",      source:"", type:"hls", category:"live", tier:"am"  },
  { id:"amsterdam96",   title:"Amsterdam 96",  poster:"amsterdam96.jpg",   source:"", type:"hls", category:"live", tier:"am"  },
  { id:"tokyo97",       title:"Tokyo 97",      poster:"tokyo97.jpg",       source:"", type:"hls", category:"live", tier:"am"  },
  { id:"hockenheim97",  title:"Hockenheim 97", poster:"hockenheim97.jpg",  source:"", type:"hls", category:"live", tier:"am"  },
  { id:"gelsenkirchen97",title:"Gelsenkirchen 97",poster:"gelsenkirchen97.jpg",source:"", type:"hls", category:"live", tier:"am" },
  { id:"badreports89",     title:"Bad Tour Report 1989",    poster:"badreports89.jpg",     source:"", type:"hls", category:"live", tier:"pro" },
  { id:"badreports87",     title:"Bad Tour Report 1987",    poster:"badreports87.jpg",     source:"", type:"hls", category:"live", tier:"pro" },
  { id:"badreports88",     title:"Bad Tour Report 1988",    poster:"badreports88.jpg",     source:"", type:"hls", category:"live", tier:"pro" },
  { id:"dangerousreports92",title:"Dangerous Tour Report 1992",poster:"dangerousreports92.jpg",source:"",type:"hls",category:"live",tier:"pro" },
  { id:"dangerousreports93",title:"Dangerous Tour Report 1993",poster:"dangerousreports93.jpg",source:"",type:"hls",category:"live",tier:"pro" },
  { id:"historyreports96", title:"History Tour Report 1996",poster:"historyreports96.jpg",source:"",type:"hls",category:"live",tier:"pro" },
  { id:"historyreports97", title:"History Tour Report 1997",poster:"historyreports97.jpg",source:"",type:"hls",category:"live",tier:"pro" }
];