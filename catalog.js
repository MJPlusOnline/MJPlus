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
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/MICHAEL_JACKSON_BAD_LIVE_WEMBLEY_originalinterlaced.mp4",
      mp4:    "https://mjtvplus.com/0/MICHAEL_JACKSON_BAD_LIVE_WEMBLEY_originalinterlaced.mp4",
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
        { sec:6548, label: "MAN IN THE MIRROR" }
        // KEIN "THE WAY YOU MAKE ME FEEL" in der Original-Version
      ]
    },
    {
      key: "enhanced",
      label: "Enhanced",
      type: "mp4",
      source: "https://mjtvplus.com/0/MJ%20-%201988%20Wembley%20Remaster%20(Pro%20FULL).mp4",
      mp4:    "https://mjtvplus.com/0/MJ%20-%201988%20Wembley%20Remaster%20(Pro%20FULL).mp4",
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
    }
  ]
},
{
  id: 'tvperformances',
  title: 'TV Performances 1979–2006',
  poster: 'tvperformances.jpg',
  type: 'single',
  category: ['tv', 'tv appearances', 'home'], // <= alle Varianten rein
  tier: 'performance',                                 // <= kleingeschrieben
  versions: [
    {
      key: 'collection',
      label: 'Collection',
      type: 'list',
      chapters: [
        { label: 'PLAY ALL', sec: 0 },
        { label: 'DISNEY MEDLEY (1979)', link: 'https://mjtvplus.com/0/DisneyMedley79.mp4' },
        { label: 'ROCK WITH YOU (1979 THE DIANA ROSS SHOW)', link: '' },
        { label: 'ROCK WITH YOU (1980 BECAUSE WE CARE GALA)', link: 'https://mjtvplus.com/0/Rock%20With%20You%20%C2%A6%20Because%20We%20Care%20Gala,%201980%20.mp4' },
        { label: 'ROCK WITH YOU / EASE ON DOWN (1981 DIANA ROSS)', link: 'https://mjtvplus.com/0/DianaCBS81_1.mp4' },
        { label: 'YOU WERE THERE (1990 SAMMY DAVIS JR. 60TH ANNIVERSARY)', link: 'https://mjtvplus.com/0/MJ%20-%201990%20You%20Were%20There%204K%20Upscale%20(No%20Logo).mp4' },
        { label: "BLACK OR WHITE / WILL YOU BE THERE (1991 MTV 10TH ANNIVERSARY)", link: "https://mjtvplus.com/0/%5b1991.06.06%5d%20MTV's%2010th%20Anniversary%20Special%20-%20Black%20Or%20White,%20Will%20You%20Be%20There.mp4" },
        { label: "GONE TOO SOON / HEAL THE WORLD (1992 ROYAL CONCERT FOR AIDS)", link: "https://mjtvplus.com/0/%5b1992.01.20%5d%20Clinton's%20Inaugural%20Gala%20-%20Gone%20Too%20Soon,%20Heal%20The%20World.mp4" },
        { label: "DANGEROUS (1993 AMA'S)", link: 'https://mjtvplus.com/0/dangerous93_4x3_lossless.mp4' },
        { label: 'REMEMBER THE TIME (1993 SOUL TRAIN MUSIC AWARDS)', link: '' },
        { label: "DANGEROUS (1995 WETTEN DASS...?)", link: 'https://mjtvplus.com/0/Wetten%20Dass%201995%20-%20Dangerous%20(ZDF%20logo%20removed).mp4' },
        { label: "EARTH SONG (1995 WETTEN DASS...?)", link: 'https://mjtvplus.com/0/%5b1995.11.4%5d%20Wetter%20Dass%20-%20Earth%20Song%20(no%20logo%20Version).mp4' },
        { label: 'EARTH SONG (1996 BRIT AWARDS)', link: 'https://mjtvplus.com/0/Michael%20Jackson%20-%20Earth%20Song%20(1996%20Brit%20Awards%20Performance).mp4' },
        { label: "EARTH SONG (1996 VMA'S)", link: 'https://mjtvplus.com/0/Earth%20Song%20VMA96.mp4' },
        { label: "ELIZABETH, I LOVE YOU (1997 ELIZABETH TAYLOR CELEBRATION)", link: "https://mjtvplus.com/0/%5b1997.02.16%5d%20Taylor's%2065th%20Birthday%20Gala%20-%20Elizabeth%20I%20Love%20You.mp4" },
        { label: "POP (FEAT. 'N SYNC) (2001 VMA'S)", link: 'https://mjtvplus.com/0/NSYNC%20&%20Michael%20Jackson%20-%20Pop%20-%20MTV%20VMA%20(2001).mp4' },
        { label: 'WHAT MORE CAN I GIVE (2001 WASHINGTON DC BENEFIT)', link: 'https://mjtvplus.com/0/%5b2001.10.21%5d%20United%20We%20Stand%20Concert%20-%20What%20More%20Can%20I%20Give.mp4' },
        { label: "DANGEROUS (2002 AMERICAN BANDSTAND 50TH ANNIVERSARY)", link: "https://mjtvplus.com/0/%5b2002.05.03%5d%20American%20Bandstand's%2050th%20Anniversary%20Celebration%20-%20Dangerous.mp4" },
        { label: 'DANGEROUS (2002 AT THE APOLLO)', link: 'https://mjtvplus.com/0/%5b2002.10.08%5d%20A%20Night%20At%20The%20Apollo%20-%20Dangerous%20(HQ%20Version).mp4' },
        { label: "WE ARE THE WORLD (2006 VMA'S)", link: 'https://mjtvplus.com/0/WATW2006.mp4' }
      ]
    }
  ]
},
{
  id: 'grammys88',
  title: 'Grammy Awards 1988 — TWYMMF & MITM',
  poster: 'grammys88.jpg',          // passe den Dateinamen ggf. an
  tier: 'performance',                       // sorgt fürs TV-Badge & TV-Seite
  category: ['TV Appearances'],     // nicht unter Live

  // Welche Variante standardmäßig ausgewählt ist:
  defaultVersion: 'enhanced',

  // Zwei Versionen – beide teilen sich die gleiche Setlist
  versions: [
    {
      key: 'original',
      label: 'Original',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/Grammy%20Awards%201988%20%28TWYMMF%20%26MITM%29.mp4',
      chapters: [
        { label: 'Intro',                       sec: 0   },
        { label: 'The Way You Make Me Feel',    sec: 86  }, // 01:26
        { label: 'Man In The Mirror',           sec: 198 }  // 03:18
      ]
    },
    {
      key: 'enhanced',
      label: 'Enhanced 16:9',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/Grammys%2088%20WIDE%20Small.mp4',
      chapters: [
        { label: 'Intro',                       sec: 0   },
        { label: 'The Way You Make Me Feel',    sec: 86  }, // 01:26
        { label: 'Man In The Mirror',           sec: 198 }  // 03:18
      ]
    }
  ]
},
{
  id: 'blitzspezial97',
  title: 'Blitz Spezial (Sat.1, 1997)',
  poster: 'blitzspezial.jpg', // <– Bilddatei-Name, anpassen falls anders
  type: 'single',
  category: ['TV'],        // damit er auf der TV-Seite erscheint
  tier: 'TV',              // sorgt für das rote "TV"-Badge
  source: 'https://mjtvplus.com/0/Blitz_Sat1_1997.mp4',
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
  type: "bundle",                 // wichtig: nicht "multi"
  category: "live",
  tier: "pro",

  defaultRecording: "sept26",
  defaultVersion: "enhanced",

  recordings: [
    {
      key: "sept26",
      label: "Sep 26, 1987",
      chapters: [
        { label: "PLAY ALL", sec: 0 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 107 },
        { label: "THINGS I DO FOR YOU", sec: 423 },
        { label: "OFF THE WALL", sec: 632 },
        { label: "HUMAN NATURE", sec: 859 },
        { label: "HEARTBREAK HOTEL", sec: 1188 },
        { label: "SHE'S OUT OF MY LIFE", sec: 1456 },
        { label: "I WANT YOU BACK", sec: 1718 },
        { label: "THE LOVE YOU SAVE", sec: 1782 },
        { label: "I'LL BE THERE", sec: 1841 },
        { label: "ROCK WITH YOU", sec: 2099 },
        { label: "LOVELY ONE", sec: 2343 },
        { label: "WORKING DAY AND NIGHT", sec: 2709 },
        { label: "BEAT IT", sec: 3142 },
        { label: "BILLIE JEAN", sec: 3532 },
        { label: "SHAKE YOUR BODY", sec: 3845 },
        { label: "THRILLER", sec: 4659 },
        { label: "I JUST CAN'T STOP LOVING YOU", sec: 4919 },
        { label: "BAD", sec: 5318 }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Michael%20Jackson%20-%20BAD%20Tour%20Yokohama%20'87%20(H264).mp4",
          mp4:    "https://mjtvplus.com/0/Michael%20Jackson%20-%20BAD%20Tour%20Yokohama%20'87%20(H264).mp4"
        },
        {
          key: "enhanced",
          label: "Enhanced",
          type: "mp4",
          source: "https://mjtvplus.com/0/MJ%20-%201987%20Bad%20Tour%20Yokohama,%20Japan%201987.mp4",
          mp4:    "https://mjtvplus.com/0/MJ%20-%201987%20Bad%20Tour%20Yokohama,%20Japan%201987.mp4"
        }
      ]
    },
    {
      key: "oct5",
      label: "Oct 5, 1987",
      chapters: [
        { label: "PLAY ALL", sec: 0 },
        { label: "THINGS I DO FOR YOU", sec: 0 },
        { label: "OFF THE WALL", sec: 207 },
        { label: "HUMAN NATURE", sec: 447 },
        { label: "J5 MEDLEY", sec: 743 },
        { label: "ROCK WITH YOU", sec: 1113 },
        { label: "WORKING DAY AND NIGHT", sec: 1360 },
        { label: "BEAT IT", sec: 1790 }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Yokohama.%20Another%20Day..mp4",
          mp4:    "https://mjtvplus.com/0/Yokohama.%20Another%20Day..mp4"
        }
      ]
    }
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
      { key: "enhanced", label: "Enhanced", type: "mp4", source: "https://mjtvplus.com/0/Toronto%20UPSCALE%20NEW%202025%20kai.mp4", mp4: "https://mjtvplus.com/0/Toronto%20UPSCALE%20NEW%202025%20kai.mp4" }
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
  title: "MSG – 30th Anniversary Celebration (September 7 & 10, 2001)",
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
          source: "https://mjtvplus.com/0/MJ%20-%202001%2030th%202001%204Kupload.mp4",   // später Link einfügen
          mp4: "https://mjtvplus.com/0/MJ%20-%202001%2030th%202001%204Kupload.mp4"
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
  id: "historyrehearsals96",
  title: "Behind The Scenes 1996",
  poster: "rehearsals96.jpg",   // <- ggf. anpassen
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
  {
  id: "dangerousrehearsals92",
  title: "Dangerous Tour Rehearsals (1992–1993)",
  poster: "dangerousrehearsals92.jpg",
  type: "multi",
  category: "live",
  tier: "pro",
  versions: [
    {
      key: "tape1and4",
      label: "Tape #1 & 4 '92",
      type: "mp4",
      source: "https://mjtvplus.com/0/dwt%20reh%20tape1.mp4",
      mp4:    "https://mjtvplus.com/0/dwt%20reh%20tape1.mp4",
      chapters: [
        { sec: 0, label: "Play All" },
        { sec: 381, label: "Jam" },
        { sec: 760, label: "Wanna Be Startin' Somethin'" },
        { sec: 1118, label: "Human Nature" },
        { sec: 1376, label: "Smooth Criminal" },
        { sec: 1863, label: "I Just Can't Stop Loving You" },
        { sec: 2192, label: "She's Out of My Life" },
        { sec: 2426, label: "I Want You Back" },
        { sec: 2490, label: "The Love You Save" },
        { sec: 2551, label: "I'll Be There" },
        { sec: 2772, label: "Rock With You" },
        { sec: 3076, label: "Thriller" },
        { sec: 3498, label: "Billie Jean" },
        { sec: 3973, label: "Remember the Time" },
        { sec: 4559, label: "Working Day & Night" },
        { sec: 4982, label: "Beat It" },
        { sec: 5425, label: "Will You Be There" },
        { sec: 5838, label: "The Way You Make Me Feel" },

        // --- Tape 4 section ---
        { sec: 6204, label: "--- Tape #4 ---" },
        { sec: 6204, label: "Working Day & Night" },
        { sec: 7158, label: "Beat It" },
        { sec: 7782, label: "Will You Be There" },
        { sec: 8218, label: "The Way You Make Me Feel" },
        { sec: 8651, label: "Bad" },
        { sec: 9049, label: "Black or White" },
        { sec: 9368, label: "Heal The World" },
        { sec: 10378, label: "Man In The Mirror" }
      ]
    },
    {
      key: "tape2",
      label: "Tape #2 '92",
      type: "mp4",
      source: "https://mjtvplus.com/0/MJ%20-%201992%20Tape%202%20Dangerous%20Rehearsal_Processed%20by%20HappyLee%20V2.mp4",
      mp4:    "https://mjtvplus.com/0/MJ%20-%201992%20Tape%202%20Dangerous%20Rehearsal_Processed%20by%20HappyLee%20V2.mp4",
      chapters: [
        { sec: 0, label: "Bad" },
        { sec: 63, label: "Black Or White" },
        { sec: 566, label: "Heal The World" },
        { sec: 1416, label: "Man In The Mirror" }
      ]
    },
    {
      key: "orange93",
      label: "Orange '93",
      type: "mp4",
      source: "https://mjtvplus.com/0/Orange%20rehearsal%20OG%20TAPE.mp4",
      mp4:    "https://mjtvplus.com/0/Orange%20rehearsal%20OG%20TAPE.mp4",
      chapters: [
        { sec: 0, label: "Dangerous" },
        { sec: 345, label: "Dangerous (Second)" },
        { sec: 717, label: "Dangerous (Third)" },
        { sec: 1144, label: "Jam" },
        { sec: 1642, label: "Black or White" },
        { sec: 1834, label: "Black or White (Second)" },
        { sec: 2254, label: "The Way You Make Me Feel" },
        { sec: 2734, label: "Heal The World" },
        { sec: 3576, label: "Dangerous (Fourth)" }
      ]
    },
    {
      key: "dress93",
      label: "Dress Reh. '93",
      type: "mp4",
      source: "https://mjtvplus.com/0/MJ%20-%201993-08-16%20Dangerous%20Dress%20Rehearsal%20Enhanced%20by%20HappyLee.mp4",
      mp4:    "https://mjtvplus.com/0/MJ%20-%201993-08-16%20Dangerous%20Dress%20Rehearsal%20Enhanced%20by%20HappyLee.mp4",
      chapters: [
        { sec: 0, label: "Working Day And Night" },
        { sec: 456, label: "Beat It" },
        { sec: 1191, label: "Will You Be There" },
        { sec: 1644, label: "Dangerous" },
        { sec: 2194, label: "The Way You Make Me Feel" },
        { sec: 2552, label: "Bad (Band)" },
        { sec: 2952, label: "Black Or White (Band)" },
        { sec: 3364, label: "Heal The World (Band)" }
      ]
    }
  ]
},
{
  id: "dallas84",
  title: "Dallas, July 13, 1984",
  poster: "dallas84.jpg",
  type: "bundle",
  category: "live",
  tier: "pro",

  defaultRecording: "pro",
  defaultVersion: "original",

  recordings: [
    {
      key: "pro",
      label: "PRO",
      chapters: [
        { sec: 0, label: "PLAY ALL" },
        { sec: 0, label: "THE SWORD IN THE STONE" },
        { sec: 350, label: "WANNA BE STARTIN' SOMETHIN'" },
        { sec: 665, label: "THINGS I DO FOR YOU" },
        { sec: 887, label: "OFF THE WALL" },
        { sec: 1178, label: "HUMAN NATURE" },
        { sec: 1412, label: "THIS PLACE HOTEL" },
        { sec: 1724, label: "SHE'S OUT OF MY LIFE" },
        { sec: 1974, label: "LET'S GET SERIOUS" },
        { sec: 2265, label: "YOU LIKE ME DON'T YOU" },
        { sec: 2655, label: "TELL ME I'M NOT DREAMIN'" },
        { sec: 2919, label: "I WANT YOU BACK" },
        { sec: 2983, label: "THE LOVE YOU SAVE" },
        { sec: 3047, label: "I'LL BE THERE" },
        { sec: 3281, label: "ROCK WITH YOU" },
        { sec: 3523, label: "LOVELY ONE" },
        { sec: 3888, label: "WORKING DAY AND NIGHT" },
        { sec: 4521, label: "BEAT IT (FT. EDDIE VAN HALEN)" },
        { sec: 4967, label: "BILLIE JEAN" },
        { sec: 5340, label: "SHAKE YOUR BODY" }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Dallas%2084.mp4",
          mp4: "https://mjtvplus.com/0/Dallas%2084.mp4"
        }
      ]
    }
  ]
},
{
  id: "kansas84",
  title: "Kansas City, July 6, 1984",
  poster: "kansas84.jpg",
  type: "bundle",               // Einheitliches Format wie bei Rome '88
  category: "live",
  tier: "pro",

  // Standard-Auswahl
  defaultRecording: "original",
  defaultVersion: "original",

  recordings: [
    {
      key: "original",
      label: "PRO",
      chapters: [
        { sec:    0,    label: "PLAY ALL" },
        { sec:    0,    label: "SWORD IN THE STONE" },
        { sec:   79,    label: "WANNA BE STARTIN' SOMETHIN'" },
        { sec:  365,    label: "THINGS I DO FOR YOU" },
        { sec:  584,    label: "OFF THE WALL" },
        { sec:  873,    label: "HUMAN NATURE" },
        { sec: 1123,    label: "THIS PLACE HOTEL" },
        { sec: 1439,    label: "SHE'S OUT OF MY LIFE" },
        { sec: 1774,    label: "JERMAINE'S MEDLEY" },
        { sec: 2623,    label: "LOVELY ONE" },
        { sec: 2895,    label: "WORKING DAY AND NIGHT" },
        { sec: 3525,    label: "BEAT IT" },
        { sec: 3925,    label: "BILLIE JEAN" }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Kansas%2084%20OG%20File.mp4",
          mp4:    "https://mjtvplus.com/0/Kansas%2084%20OG%20File.mp4"
        }
      ]
    }
  ]
},
{
  id: "johannesburg97",
  title: "Johannesburg, Oct 12, 1997",
  poster: "johannesburg97.jpg",
  type: "multi",
  category: "live",
  tier: "pro",
  versions: [
    {
      key: "enhanced",
      label: "Enhanced",
      type: "mp4",
      source: "https://mjtvplus.com/0/MJ%20-%201997%20History%20Tour%20Johannesburg,%20South%20Africa.mp4",
      mp4:    "https://mjtvplus.com/0/MJ%20-%201997%20History%20Tour%20Johannesburg,%20South%20Africa.mp4"
    }
  ],
  chapters: [
    { sec:    0,   label: "PLAY ALL" },
    { sec:  155,   label: "SCREAM" },
    { sec:  394,   label: "THEY DON'T CARE ABOUT US" },
    { sec:  550,   label: "IN THE CLOSET" },
    { sec:  694,   label: "WANNA BE STARTIN' SOMETHIN'" },
    { sec: 1119,   label: "STRANGER IN MOSCOW" },
    { sec: 1595,   label: "SMOOTH CRIMINAL" },
    { sec: 2142,   label: "YOU ARE NOT ALONE" },
    { sec: 2641,   label: "THE JACKSON 5 MEDLEY" },
    { sec: 3669,   label: "BILLIE JEAN" },
    { sec: 4312,   label: "THRILLER" },
    { sec: 4724,   label: "BEAT IT" },
    { sec: 5473,   label: "DANGEROUS" },
    { sec: 5826,   label: "BLACK OR WHITE" },
    { sec: 6242,   label: "EARTH SONG" },
    { sec: 7000,   label: "WE ARE THE WORLD" },
    { sec: 7901,   label: "HISTORY" }
  ]
},
{
  id: "kualalumpur96",
  title: "Kuala Lumpur, Malaysia (1996)",
  poster: "kualalumpur96.jpg",
  type: "bundle",                  // Mehrere PRO-Aufnahmen
  category: "live",
  tier: "pro",

  // Standardauswahl
  defaultRecording: "oct29",
  defaultVersion: "original",

  recordings: [
    {
      key: "oct27",
      label: "Oct 27, 1996",
      chapters: [
        { sec: 0, label: "PLAY ALL" }
        // Setlist folgt später
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
    },
    {
      key: "oct29",
      label: "Oct 29, 1996",
      chapters: [
        { sec: 0, label: "PLAY ALL" },
        { sec: 0, label: "THE GREAT GATES OF KIEV (INTRO)" },
        { sec: 429, label: "SCREAM" },
        { sec: 600, label: "THE DRILL" },
        { sec: 653, label: "THEY DON'T CARE ABOUT US" },
        { sec: 823, label: "IN THE CLOSET" },
        { sec: 939, label: "WANNA BE STARTIN' SOMETHIN" },
        { sec: 1299, label: "STRANGER IN MOSCOW" },
        { sec: 1800, label: "SMOOTH CRIMINAL" },
        { sec: 2187, label: "YOU ARE NOT ALONE" },
        { sec: 2565, label: "THE WAY YOU MAKE ME FEEL" },
        { sec: 2851, label: "I WANT YOU BACK" },
        { sec: 2930, label: "THE LOVE YOU SAVE" },
        { sec: 2992, label: "I'LL BE THERE" },
        { sec: 3703, label: "BILLIE JEAN" },
        { sec: 4203, label: "THRILLER" },
        { sec: 4600, label: "BEAT IT" },
        { sec: 5291, label: "DANGEROUS" },
        { sec: 5637, label: "BLACK OR WHITE" },
        { sec: 5987, label: "EARTH SONG" },
        { sec: 6768, label: "HEAL THE WORLD" },
        { sec: 7623, label: "TDCAU / THE GREAT GATES OF KIEV" },
        { sec: 7807, label: "HISTORY" }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Kuala%20Lumpur%2029.10.1996%20(merged).mp4",
          mp4:    "https://mjtvplus.com/0/Kuala%20Lumpur%2029.10.1996%20(merged).mp4"
        }
      ]
    }
  ]
},
{
  id: "copenhagen97",
  title: "Copenhagen, Denmark (August 1997)",
  poster: "copenhagen97.jpg",
  type: "bundle",
  category: "live",
  tier: "pro",

  // Standard-Auswahl
  defaultRecording: "aug14",
  defaultVersion: "original",

  recordings: [
    {
      key: "aug14",
      label: "August 14, 1997",
      chapters: [
       { sec:    0,    label: "PLAY ALL" },
  { sec:    0,    label: "INTRO" },
  { sec:  348,    label: "SCREAM" },
  { sec:  507,    label: "THE DRILL / TDCAU" },
  { sec:  738,    label: "IN THE CLOSET" },
  { sec:  861,    label: "WANNA BE STARTIN' SOMETHIN'" },
  { sec: 1279,    label: "STRANGER IN MOSCOW" },
  { sec: 1859,    label: "SMOOTH CRIMINAL" },
  { sec: 2180,    label: "YOU ARE NOT ALONE" },
  { sec: 2626,    label: "THE JACKSON 5 MEDLEY" },
  { sec: 3281,    label: "BILLIE JEAN" },
  { sec: 3788,    label: "THRILLER" },
  { sec: 4170,    label: "BEAT IT" },
  { sec: 4680,    label: "BLOOD ON THE DANCE FLOOR" },
  { sec: 4953,    label: "DANGEROUS" },
  { sec: 5203,    label: "BLACK OR WHITE" },
  { sec: 5467,    label: "EARTH SONG" },
  { sec: 6234,    label: "HEAL THE WORLD" },
  { sec: 6917,    label: "HISTORY" },
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/MJ%20-%201997%20Copenhagen%20(HD%20AI%20Remaster%2060fps)small.mp4",
          mp4: "https://mjtvplus.com/0/MJ%20-%201997%20Copenhagen%20(HD%20AI%20Remaster%2060fps)small.mp4"
        }
      ]
    },
    {
      key: "aug29",
      label: "August 29, 1997 (AM.)",
      chapters: [
        { label: "PLAY ALL", sec: 0 },
        { label: "SCREAM", sec: 0 },
        { label: "THE DRILL SEQUENCE", sec: 183 },
        { label: "THEY DON'T CARE ABOUT US", sec: 298 },
        { label: "IN THE CLOSET", sec: 577 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 680 },
        { label: "STRANGER IN MOSCOW", sec: 943 },
        { label: "SMOOTH CRIMINAL", sec: 1111 },
        { label: "YOU ARE NOT ALONE", sec: 1372 },
        { label: "JACKSON 5 MEDLEY", sec: 1653 },
        { label: "BILLIE JEAN", sec: 1896 },
        { label: "THRILLER", sec: 2385 },
        { label: "BEAT IT", sec: 2623 },
        { label: "BLOOD ON THE DANCE FLOOR", sec: 3039 },
        { label: "DANGEROUS", sec: 3260 },
        { label: "BLACK OR WHITE", sec: 3500 },
        { label: "EARTH SONG", sec: 3714 },
        { label: "HEAL THE WORLD", sec: 4002 },
        { label: "HISTORY", sec: 4088 }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Copenhagen%2029.08.1997%20%5bsource%20%232%5d.mp4",
          mp4:    "https://mjtvplus.com/0/Copenhagen%2029.08.1997%20%5bsource%20%232%5d.mp4"
        }
      ]
    }
  ]
},
{
  id: "livingwithmj",
  title: "Living with Michael Jackson (2003)",
  poster: "livingwithmj2003.jpg",
  type: "single",
  category: "tv",
  tier: "doc",
  versions: [
    {
      key: "original",
      label: "Original",
      type: "mp4",
      source: "https://mjtvplus.com/0/lwmjeng.mp4",
      mp4: "https://mjtvplus.com/0/lwmjeng.mp4"
    }
  ],
  chapters: [] // keine Setlist / Kapitel
},
{
  id: "moscow96",
  title: "Moscow, Russia (1996)",
  poster: "moscow96.jpg",
  type: "bundle",
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
        { label: "THE GREAT GATE OF KIEV", sec: 13 },
        { label: "SCREAM", sec: 478 },
        { label: "THEY DON'T CARE ABOUT US", sec: 703 },
        { label: "IN THE CLOSET", sec: 870 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 984 },
        { label: "STRANGER IN MOSCOW", sec: 1323 },
        { label: "SMOOTH CRIMINAL", sec: 1762 },
        { label: "YOU ARE NOT ALONE", sec: 2124 },
        { label: "THE WAY YOU MAKE ME FEEL", sec: 2460 },
        { label: "I WANT YOU BACK", sec: 2724 },
        { label: "THE LOVE YOU SAVE", sec: 2793 },
        { label: "I'LL BE THERE", sec: 2855 },
        { label: "ROCK WITH YOU", sec: 3130 },
        { label: "OFF THE WALL", sec: 3194 },
        { label: "BILLIE JEAN", sec: 3539 },
        { label: "THRILLER", sec: 3982 },
        { label: "BEAT IT", sec: 4076 },
        { label: "EARTH SONG", sec: 4316 }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/VHS%20173.mp4",
          mp4: "https://mjtvplus.com/0/VHS%20173.mp4"
        }
      ]
    }
  ]
},
{
  id: "mjfriendsmunich99",
  title: "MJ & Friends – Munich, Germany (June 27, 1999)",
  poster: "mjfriendsmunich99.jpg",
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
        { label: "INTRO", sec: 0 },
        { label: "MEDLEY", sec: 86 },
        { label: "BILLIE JEAN", sec: 233 },
        { label: "DANGEROUS", sec: 473 },
        { label: "EARTH SONG", sec: 767 },
        { label: "YOU ARE NOT ALONE", sec: 1394 },
        { label: "HEAL THE WORLD [INSTRUMENTAL ENDING]", sec: 1645 }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/MJ&Friends%20ZDF%20(1999).mp4",
          mp4: "https://mjtvplus.com/0/MJ&Friends%20ZDF%20(1999).mp4"
        },
        {
          key: "enhanced",
          label: "Enhanced  (soon)",
          type: "mp4",
          source: "",
          mp4: ""
        }
      ]
    }
  ]
},
{
  id: "gothenburg88",
  title: "Gothenburg, Sweden (1988)",
  poster: "gothenburg88.jpg",
  type: "bundle",
  category: "live",
  tier: "am",

  defaultRecording: "am",
  defaultVersion: "original",

  recordings: [
    {
      key: "am",
      label: "AM.",
      chapters: [
        { sec: 0,     label: "PLAY ALL" },
        { sec: 78,    label: "WANNA BE STARTIN' SOMETHIN'" },
        { sec: 385,   label: "THIS PLACE HOTEL" },
        { sec: 683,   label: "ANOTHER PART OF ME" },
        { sec: 948,   label: "I JUST CAN'T STOP LOVING YOU" },
        { sec: 1240,  label: "SHE'S OUT OF MY LIFE" },
        { sec: 1460,  label: "JACKSON 5 MEDLEY" },
        { sec: 1875,  label: "ROCK WITH YOU" },
        { sec: 2135,  label: "HUMAN NATURE" },
        { sec: 2484,  label: "SMOOTH CRIMINAL" },
        { sec: 2843,  label: "DIRTY DIANA" },
        { sec: 3250,  label: "THRILLER" },
        { sec: 4230,  label: "WORKING DAY & NIGHT" },
        { sec: 4676,  label: "BEAT IT" },
        { sec: 5088,  label: "BILLIE JEAN" },
        { sec: 5548,  label: "BAD" }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/MJ%20-%201988%20Gothenburg,%20Sweden%20(Amateur)small.mp4",
          mp4:    "https://mjtvplus.com/0/MJ%20-%201988%20Gothenburg,%20Sweden%20(Amateur)small.mp4"
        }
      ]
    }
  ]
},
{
  id: "hwtbrunei96",
  title: "Brunei (December 31, 1996)",
  poster: "brunei96htw.jpg",
  type: "bundle",
  category: "live",
  tier: "pro",

  defaultRecording: "pro",
  defaultVersion: "original",

  recordings: [
    {
      key: "pro",
      label: "PRO",
      chapters: [
        { sec:  0,    label: "PLAY ALL" },
        { sec:  43,   label: "THE GREAT GATE OF KIEV" },
        { sec: 489,   label: "HISTORY MEDLEY" },
        { sec: 497,   label: "SCREAM" },
        { sec: 655,   label: "THEY DON'T CARE ABOUT US" },
        { sec: 886,   label: "SHE DRIVES ME WILD / IN THE CLOSET" },
        { sec: 1001,  label: "WANNA BE STARTIN' SOMETHIN'" },
        { sec: 1320,  label: "STRANGER IN MOSCOW" },
        { sec: 1637,  label: "SMOOTH CRIMINAL" },
        { sec: 2015,  label: "YOU ARE NOT ALONE" },
        { sec: 2340,  label: "THE WAY YOU MAKE ME FEEL" },
        { sec: 2601,  label: "JACKSON 5 MEDLEY" },
        { sec: 2610,  label: "I WANT YOU BACK" },
        { sec: 2679,  label: "THE LOVE YOU SAVE" },
        { sec: 2740,  label: "I'LL BE THERE" },
        { sec: 3449,  label: "BILLIE JEAN" },
        { sec: 3937,  label: "THRILLER" },
        { sec: 4350,  label: "BEAT IT" },
        { sec: 4807,  label: "DANGEROUS" },
        { sec: 5054,  label: "BLACK OR WHITE" },
        { sec: 5431,  label: "EARTH SONG" },
        { sec: 5986,  label: "HEAL THE WORLD" },
        { sec: 6498,  label: "TDCAU & THE GREAT GATE OF KIEV (INTERLUDE)" },
        { sec: 6687,  label: "HISTORY" }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/1996%20HWT%20Brunei%20New%20Year%20Celebration%20(1080p)%20LASERDISC.mp4",
          mp4:    "https://mjtvplus.com/0/1996%20HWT%20Brunei%20New%20Year%20Celebration%20(1080p)%20LASERDISC.mp4"
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
  id: 'mexico75',
  title: 'Mexico (1975)',
  category: ['Live', 'early'], // 👈 hier ergänzt
  tier: 'pro',
  poster: 'mexico75.jpg',
  versions: [
    {
      key: 'pro',
      label: 'PRO',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/Moving_Violation_Tour_1975_Merged_Lossless.mp4',
      chapters: [
        { label: 'PLAY ALL', sec: 0 },
        { label: '(YOU WERE MADE) ESPECIALLY FOR ME', sec: 0 },
        { label: "IT'S TOO LATE TO CHANGE THE TIME", sec: 201 },
        { label: 'NEVER CAN SAY GOODBYE', sec: 360 },
        { label: "PAPA WAS A ROLLIN' STONE", sec: 471 },
        { label: 'HAPPY', sec: 746 },
        { label: 'I AM LOVE', sec: 1015 },
        { label: "ROCKIN' ROBIN", sec: 1506 },
        { label: 'THE LIFE OF THE PARTY', sec: 1637 },
        { label: 'FOREVER CAME TODAY', sec: 1826 },
        { label: 'MUSIC AND ME', sec: 2101 },
        { label: 'BEN', sec: 2264 },
        { label: "I'LL BE THERE", sec: 2445 },
        { label: 'MEDLEY: I WANT YOU BACK / ABC / THE LOVE YOU SAVE', sec: 2577 },
        { label: 'ONE DAY IN YOUR LIFE', sec: 3181 },
        { label: 'DANCING MACHINE', sec: 3507 },
        { label: 'BODY LANGUAGE (DO THE LOVE DANCE)', sec: 3857 }
      ]
    }
  ]
},
{
  id: "royalbrunei96",
  title: "Bandar Seri Begawan, Brunei (July 16, 1996)",
  poster: "royalbrunei96.jpg",
  type: "bundle",
  category: "live",
  tier: "pro",

  defaultRecording: "pro",
  defaultVersion: "enhanced",

  recordings: [
    {
      key: "pro",
      label: "PRO",
      chapters: [
        { label: "PLAY ALL", sec: 0 },
        { label: "JAM", sec: 451 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 789 },
        { label: "HUMAN NATURE", sec: 1108 },
        { label: "SMOOTH CRIMINAL", sec: 1398 },
        { label: "I JUST CAN'T STOP LOVING YOU", sec: 1740 },
        { label: "SHE'S OUT OF MY LIFE", sec: 2062 },
        { label: "THE JACKSON 5 MEDLEY", sec: 2311 },
        { label: "THRILLER", sec: 2745 },
        { label: "BILLIE JEAN", sec: 3089 },
        { label: "THE WAY YOU MAKE ME FEEL", sec: 3546 },
        { label: "BEAT IT", sec: 4117 },
        { label: "YOU ARE NOT ALONE", sec: 4555 },
        { label: "DANGEROUS", sec: 4899 },
        { label: "BLACK OR WHITE", sec: 5240 },
        { label: "MAN IN THE MIRROR", sec: 5522 },
        { label: "EARTH SONG", sec: 5958 }
      ],
      versions: [
        {
          key: "original",
          label: "Original (soon)",
          type: "mp4",
          source: "",
          mp4: ""
        },
        {
          key: "enhanced",
          label: "Enhanced",
          type: "mp4",
          source: "https://mjtvplus.com/0/MJ%20-%201996%20Brunei%20Royal%20(Lee%20Remaster).mp4",
          mp4: "https://mjtvplus.com/0/MJ%20-%201996%20Brunei%20Royal%20(Lee%20Remaster).mp4"
        }
      ]
    }
  ]
},
{
  id: "auckland96",
  title: "Auckland, Nov 9, 1996",
  poster: "auckland96.jpg",
  type: "bundle",
  category: "live",
  tier: "pro",

  // Standard-Auswahl
  defaultRecording: "nov9",
  defaultVersion: "original",

  recordings: [
    {
      key: "nov9",
      label: "November 9 (1996)",
      chapters: [
       { sec:   60, label: "PLAY ALL" },
{ sec:   83, label: "PLAY ALL" },
{ sec:  173, label: "GATES OF KIEV (INTRO)" },
{ sec:  480, label: "SCREAM" },
{ sec:  644, label: "THEY DON'T CARE ABOUT US" },
{ sec:  870, label: "IN THE CLOSET" },
{ sec:  986, label: "WANNA BE STARTIN' SOMETHIN'" },
{ sec: 1354, label: "STRANGER IN MOSCOW" },
{ sec: 1761, label: "SMOOTH CRIMINAL" },
{ sec: 2226, label: "YOU ARE NOT ALONE" },
{ sec: 2604, label: "THE WAY YOU MAKE ME FEEL" },
{ sec: 2930, label: "I WANT YOU BACK" },
{ sec: 3009, label: "THE LOVE YOU SAVE" },
{ sec: 3071, label: "I'LL BE THERE" },
{ sec: 3441, label: "ROCK WITH YOU" },
{ sec: 3525, label: "OFF THE WALL" },
{ sec: 3599, label: "DON'T STOP 'TIL YOU GET ENOUGH" },
{ sec: 4010, label: "BILLIE JEAN" },
{ sec: 4622, label: "THRILLER" },
{ sec: 5018, label: "BEAT IT" },
{ sec: 5512, label: "COME TOGETHER" },
{ sec: 5604, label: "D.S." },
{ sec: 5961, label: "DANGEROUS" },
{ sec: 6213, label: "BLACK OR WHITE" },
{ sec: 6675, label: "EARTH SONG" },
{ sec: 7425, label: "HEAL THE WORLD" },
{ sec: 8162, label: "HISTORY" }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Auckland%20Nov9th%201996.mp4",
          mp4:    "https://mjtvplus.com/0/Auckland%20Nov9th%201996.mp4"
        }
      ]
    },
    {
      key: "nov11",
      label: "November 11 (1996)",
      chapters: [
        { label: "PLAY ALL", sec: 0 }
        // Setlist folgt, sobald du sie hast
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
  id: "dianesawyer95",
  title: "Diane Sawyer Interview (June 14, 1995)",
  poster: "dianesawyer95.jpg",
  type: "bundle",
  category: "tv",
  tier: "interview",

  // nur eine Aufnahme, aber zwei Sprachversionen
  defaultRecording: "int",
  defaultVersion: "english",

  recordings: [
    {
      key: "int",
      label: "Interview",
      chapters: [
        { sec: 0, label: "Play All" }
      ],
      versions: [
        {
          key: "english",
          label: "English",
          type: "mp4",
          source: "https://mjtvplus.com/0/Primetime%2095%20HD.mp4", 
          mp4: "https://mjtvplus.com/0/Primetime%2095%20HD.mp4"
        },
        {
          key: "german",
          label: "German",
          type: "mp4",
          source: "https://mjtvplus.com/0/MJ&Lisa%20RTL%20Prime%20Time%20(merged%20lossless).mp4",
          mp4: "https://mjtvplus.com/0/MJ&Lisa%20RTL%20Prime%20Time%20(merged%20lossless).mp4"
        }
      ]
    }
  ]
},
{
  id: 'geraldo03',
  title: 'Geraldo Rivera Interview (2003)',
  poster: 'geraldo.jpg',
  type: 'single',
  category: ['TV Appearances'],
  tier: 'interview',
  source: 'https://mjtvplus.com/0/Geraldo_Interview_2003_merged_lossless.mp4'
},
{
  id: 'superbowl93',
  title: 'Super Bowl XXVII Halftime Show (1993)',
  poster: 'superbowl.jpg',
  tier: 'performance',
  category: ['TV Appearances'],
  defaultVersion: 'enhanced',
  versions: [
    {
      key: 'enhanced',
      label: 'Enhanced',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/MJ_Superbowl_50p_Upscale.mp4',
      chapters: [
        { label: 'Intro',                          sec: 0   },
        { label: 'Toaster Entrance',               sec: 77  }, // 01:17
        { label: 'Jam',                            sec: 170 }, // 02:50
        { label: 'Billie Jean',                    sec: 220 }, // 03:40
        { label: 'Black Or White',                 sec: 287 }, // 04:47
        { label: 'We Are The World (Interlude & Speech)', sec: 492 }, // 08:12
        { label: 'Heal The World',                 sec: 585 }  // 09:45
      ]
    },
    {
      key: 'original',
      label: 'Original (coming soon)',
      type: 'mp4',
      mp4: '', // noch leer, später ergänzen
      chapters: [
        { label: 'Intro',                          sec: 0   },
        { label: 'Toaster Entrance',               sec: 77  },
        { label: 'Jam',                            sec: 170 },
        { label: 'Billie Jean',                    sec: 220 },
        { label: 'Black Or White',                 sec: 287 },
        { label: 'We Are The World (Interlude & Speech)', sec: 492 },
        { label: 'Heal The World',                 sec: 585 }
      ]
    }
  ]
},
{
  id: 'popgalerie95',
  title: 'ZDF Pop-Galerie (1995)',
  poster: 'popgalerie.jpg',
  tier: 'doc',                 // Groß/Klein egal – wird toLowerCase() verarbeitet
  category: ['TV Appearances'],
  type: 'mp4',                 // optional, aber nice to have
  mp4: 'https://mjtvplus.com/0/MJ%20-%201995%20-%20Pop-Galerie%20(German%20Doku).mp4'
},
 {
  id: "oprah1993",
  title: "Oprah Interview (February 10, 1993)",
  poster: "oprah1993.jpg",
  type: "bundle",
  category: "tv",
  tier: "interview",

  // nur eine Aufnahme, aber zwei Sprachversionen
  defaultRecording: "int",
  defaultVersion: "english",

  recordings: [
    {
      key: "int",
      label: "Interview",
      chapters: [
        { sec: 0, label: "PLAY ALL" }
      ],
      versions: [
        {
          key: "english",
          label: "English",
          type: "mp4",
          source: "https://mjtvplus.com/0/opraheng.mp4",
          mp4: "https://mjtvplus.com/0/opraheng.mp4"
        },
        {
          key: "german",
          label: "German",
          type: "mp4",
          source: "https://mjtvplus.com/0/oprahgerm.mp4",
          mp4: "https://mjtvplus.com/0/oprahgerm.mp4"
        }
      ]
    }
  ]
},
{
  id: "helsinki97",
  title: "Helsinki, Finland (August 24, 1997)",
  poster: "helsinki97.jpg",
  type: "bundle",
  category: "live",
  tier: "pro",

  defaultRecording: "pro",
  defaultVersion: "original",

  recordings: [
    {
      key: "pro",
      label: "PRO",
      chapters: [
        { label: "GATES OF KIEV", sec: 0 },
        { label: "SCREAM", sec: 421 },
        { label: "THEY DON'T CARE ABOUT US", sec: 662 },
        { label: "IN THE CLOSET", sec: 811 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 940 },
        { label: "STRANGER IN MOSCOW", sec: 1323 },
        { label: "SMOOTH CRIMINAL", sec: 1657 },
        { label: "YOU ARE NOT ALONE", sec: 2318 },
        { label: "THE JACKSON 5 MEDLEY", sec: 2733 },
        { label: "BILLIE JEAN", sec: 3523 },
        { label: "THRILLER", sec: 4269 },
        { label: "BEAT IT", sec: 4695 },
        { label: "DANGEROUS", sec: 5401 },
        { label: "BLACK OR WHITE", sec: 5660 },
        { label: "EARTH SONG", sec: 6076 },
        { label: "HEAL THE WORLD", sec: 6835 },
        { label: "THEY DON'T CARE ABOUT US (INSTRUMENTAL INTERLUDE)", sec: 7352 },
        { label: "HISTORY", sec: 7441 }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/helsinki97.mp4",
          mp4: "https://mjtvplus.com/0/helsinki97.mp4"
        },
        {
          key: "enhanced",
          label: "Enhanced (Soon)",
          type: "mp4",
          source: "",
          mp4: ""
        }
      ]
    }
  ]
},
{
  id: "seoul1996",
  title: "Seoul, South Korea (October 11–13, 1996)",
  poster: "seoul96.jpg",
  type: "bundle",
  category: "live",
  tier: "pro",

  // Standard-Auswahl
  defaultRecording: "pro",
  defaultVersion: "original",

  recordings: [
    {
      key: "pro",
      label: "PRO (Oct 11 & 13, 1996)",
      chapters: [
        { sec: 0, label: "PLAY ALL" },
        { sec: 1, label: "THE GREAT GATES OF KIEV (INTRO)" },
        { sec: 355, label: "SCREAM" },
        { sec: 520, label: "THEY DON'T CARE ABOUT US" },
        { sec: 745, label: "IN THE CLOSET" },
        { sec: 870, label: "WANNA BE STARTIN' SOMETHIN'" },
        { sec: 1220, label: "STRANGER IN MOSCOW" },
        { sec: 1548, label: "SMOOTH CRIMINAL" },
        { sec: 1953, label: "YOU ARE NOT ALONE" },
        { sec: 2288, label: "THE WAY YOU MAKE ME FEEL" },
        { sec: 2585, label: "I WANT YOU BACK" },
        { sec: 2657, label: "THE LOVE YOU SAVE" },
        { sec: 2720, label: "I'LL BE THERE" },
        { sec: 3155, label: "BILLIE JEAN" },
        { sec: 3780, label: "THRILLER" },
        { sec: 4128, label: "BEAT IT" },
        { sec: 4645, label: "COME TOGETHER" },
        { sec: 4740, label: "D.S." },
        { sec: 4865, label: "DANGEROUS" },
        { sec: 5105, label: "BLACK OR WHITE" },
        { sec: 5430, label: "EARTH SONG" },
        { sec: 6330, label: "HEAL THE WORLD" },
        { sec: 6930, label: "HISTORY" }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Seoul%201996%20(merged%20lossless).mp4",
          mp4: "https://mjtvplus.com/0/Seoul%201996%20(merged%20lossless).mp4"
        }
      ]
    },
    {
      key: "am",
      label: "AM. (Oct 13, 1996)",
      chapters: [
        { sec: 0, label: "PLAY ALL" },
        { sec: 370, label: "BILLIE JEAN" },
        { sec: 875, label: "THRILLER" },
        { sec: 1139, label: "BEAT IT" },
        { sec: 1536, label: "COME TOGETHER" },
        { sec: 1769, label: "D.S." },
        { sec: 1849, label: "DANGEROUS" },
        { sec: 1810, label: "BLACK OR WHITE" },
        { sec: 1918, label: "EARTH SONG" },
        { sec: 2100, label: "HEAL THE WORLD" }
      ],
      versions: [
        {
          key: "original",
          label: "Original",
          type: "mp4",
          source: "https://mjtvplus.com/0/Seoul,%20Korea%20amateur%20shot%201996.10.13.mp4",
          mp4: "https://mjtvplus.com/0/Seoul,%20Korea%20amateur%20shot%201996.10.13.mp4"
        }
      ]
    }
  ]
},
  {
  id: 'hockenheim97',
  title: 'Hockenheim, Germany August 3, 1997',
  category: ['Live'],
  tier: 'am',
  poster: 'hockenheim97.jpg',
  versions: [
    {
      key: 'original',
      label: 'Original',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/Hockenheim_1997_merged_lossless.mp4',
      chapters: [
        { label: 'PLAY ALL', sec: 0 },
        { label: 'INTRO', sec: 114 },                     // 01:54
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 148 },// 02:28
        { label: 'BILLIE JEAN (ENDING)', sec: 320 },       // 05:20
        { label: 'THRILLER', sec: 391 },                   // 06:31
        { label: 'BEAT IT', sec: 810 },                    // 13:30
        { label: 'BLOOD ON THE DANCE FLOOR', sec: 1350 },  // 22:30
        { label: 'DANGEROUS', sec: 1690 },                 // 28:10
        { label: 'BLACK OR WHITE', sec: 1957 },            // 32:37
        { label: 'EARTH SONG', sec: 2351 },                // 39:11
        { label: 'HEAL THE WORLD', sec: 3120 },            // 52:00
        { label: 'HISTORY', sec: 3812 }                    // 01:03:32
      ]
    }
  ]
},
{
  id: 'gelsenkirchen97',
  title: 'AM. Gelsenkirchen, Germany June 15, 1997',
  category: ['Live'],
  tier: 'am',
  poster: 'gelsenkirchen97.jpg',
  versions: [
    {
      key: 'original',
      label: 'Original',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/Gelsen97Am.mp4',
      chapters: [
        { label: 'PLAY ALL', sec: 0 },
        { label: 'INTRO', sec: 0 },
        { label: 'SCREAM', sec: 388 },
        { label: 'THE DRILL DANCE', sec: 567 },
        { label: "THEY DON'T CARE ABOUT US", sec: 611 },
        { label: 'IN THE CLOSET', sec: 774 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 870 },
        { label: 'STRANGER IN MOSCOW', sec: 1285 },
        { label: 'SMOOTH CRIMINAL', sec: 1760 },
        { label: 'YOU ARE NOT ALONE', sec: 2185 },
        { label: 'THE WAY YOU MAKE ME FEEL', sec: 2557 },
        { label: 'J5 MEDLEY', sec: 2874 },
        { label: 'BILLIE JEAN', sec: 3799 },
        { label: 'THRILLER', sec: 4317 },
        { label: 'BEAT IT', sec: 4714 },
        { label: 'BLOOD ON THE DANCE FLOOR', sec: 5205 },
        { label: 'DANGEROUS', sec: 5480 },
        { label: 'BLACK OR WHITE', sec: 5838 },
        { label: 'EARTH SONG', sec: 6224 },
        { label: 'HEAL THE WORLD', sec: 6988 },
        { label: 'HISTORY', sec: 7642 }
      ]
    }
  ]
},
  {
  id: 'memphis81',
  title: 'Memphis, Tennessee 1981',
  category: ['The Jacksons', 'Live'],
  tier: 'pro',
  poster: 'memphis81.jpg',
  versions: [
    {
      key: 'original',
      label: 'Original',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/%5b1981.7.8%5d%20Memphis_One%20Camera.mp4',
      chapters: [
        { label: 'PLAY ALL', sec: 0 },
        { label: 'INTRO', sec: 0 },
        { label: 'CAN YOU FEEL IT', sec: 136 },             // 2:16
        { label: 'THINGS I DO FOR YOU', sec: 372 },         // 6:12
        { label: 'OFF THE WALL', sec: 590 },                // 9:50
        { label: 'BEN', sec: 785 },                         // 13:05
        { label: 'THIS PLACE HOTEL', sec: 1003 },           // 16:43
        { label: "SHE'S OUT OF MY LIFE", sec: 1290 }        // 21:30
      ]
    },
    {
      key: 'enhanced',
      label: 'Enhanced (soon)',
      type: 'mp4',
      mp4: '',
      upcoming: true
    }
  ]
},
  {
  id: 'basel97',
  title: 'Basel, Switzerland June 8, 1997',
  category: ['Live'],
  tier: 'pro',
  poster: 'basel97.jpg',
  versions: [
    {
      key: 'pro',
      label: 'PRO',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/MJ%20-%201997%20Basel%20(Full%20Pro).mp4',
      chapters: [
        { label: 'PLAY ALL', sec: 0 },
        { label: 'SCREAM', sec: 391 },                    // 6:31
        { label: "THEY DON'T CARE ABOUT US", sec: 619 },  // 10:19
        { label: 'IN THE CLOSET', sec: 786 },             // 13:06
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 912 }, // 15:12
        { label: 'STRANGER IN MOSCOW', sec: 1317 },       // 21:57
        { label: 'SMOOTH CRIMINAL', sec: 1752 },          // 29:12
        { label: 'YOU ARE NOT ALONE', sec: 2231 },        // 37:11
        { label: 'THE JACKSON 5 MEDLEY', sec: 2699 },     // 44:59
        { label: 'BILLIE JEAN', sec: 3624 },              // 1:00:24
        { label: 'THRILLER', sec: 4156 },                 // 1:09:16
        { label: 'BEAT IT', sec: 4544 },                  // 1:15:44
        { label: 'BLOOD ON THE DANCE FLOOR', sec: 5101 }, // 1:25:01
        { label: 'DANGEROUS', sec: 5590 },                // 1:33:10
        { label: 'BLACK OR WHITE', sec: 5955 },           // 1:39:15
        { label: 'EARTH SONG', sec: 6300 },               // 1:45:00
        { label: 'HEAL THE WORLD', sec: 7088 },           // 1:58:08
        { label: 'HISTORY', sec: 7929 }                   // 2:12:09
      ]
    },
    {
      key: 'am',
      label: 'AM.',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/basel%201997am.mp4',
      chapters: [
        { label: 'PLAY ALL', sec: 0 },
        { label: 'SCREAM', sec: 0 },
        { label: "THEY DON'T CARE ABOUT US", sec: 215 },   // 03:35
        { label: 'IN THE CLOSET', sec: 390 },              // 06:30
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 504 },// 08:24
        { label: 'STRANGER IN MOSCOW', sec: 920 },         // 15:20
        { label: 'SMOOTH CRIMINAL', sec: 1430 },           // 23:50
        { label: 'YOU ARE NOT ALONE', sec: 1843 },         // 30:43
        { label: 'J5 MEDLEY', sec: 2245 }                  // 37:25
      ]
    }
  ]
},
{
  id: 'gothenburg97',
  title: 'Gothenburg, August 16, 1997',
  category: ['Live'],
  tier: 'pro',
  poster: 'gothenburg97.jpg',
  versions: [
    {
      key: 'original',
      label: 'Original',
      type: 'mp4',
      mp4: 'https://mjtvplus.com/0/gothenburg95tv1000.mp4',
      chapters: [
        { label: 'PLAY ALL', sec: 0 },
        { label: 'THE GREAT GATE OF KIEV (OPENING)', sec: 0 },
        { label: 'SCREAM', sec: 406 },
        { label: 'THE DRILL', sec: 575 },
        { label: "THEY DON'T CARE ABOUT US", sec: 633 },
        { label: 'IN THE CLOSET', sec: 800 },
        { label: "WANNA BE STARTIN' SOMETHIN'", sec: 923 },
        { label: 'STRANGER IN MOSCOW', sec: 1380 },
        { label: 'SMOOTH CRIMINAL', sec: 1955 },
        { label: 'YOU ARE NOT ALONE', sec: 2342 },
        { label: 'I WANT YOU BACK', sec: 2800 },
        { label: 'THE LOVE YOU SAVE', sec: 2883 },
        { label: "I'LL BE THERE", sec: 2947 },
        { label: 'BILLIE JEAN', sec: 3642 },
        { label: 'THRILLER', sec: 4175 },
        { label: 'BEAT IT', sec: 4597 },
        { label: 'BLOOD ON THE DANCE FLOOR', sec: 5151 },
        { label: 'DANGEROUS', sec: 5446 },
        { label: 'BLACK OR WHITE', sec: 5807 },
        { label: 'EARTH SONG', sec: 6245 },
        { label: 'HEAL THE WORLD', sec: 7040 },
        { label: 'TDCAU & THE GREAT GATE OF KIEV (INTERLUDE)', sec: 7582 },
        { label: 'HISTORY', sec: 7771 }
      ]
    },
    {
      key: 'enhanced',
      label: 'Enhanced (soon)',
      type: 'mp4',
      mp4: ''
    }
    ] // <-- Ende versions von gothenburg97
  }   // <-- Ende Objekt gothenburg97
  ,

  // ===== RESTLICHE POSTER (ohne Quellen, werden trotzdem angezeigt) =====
  // (Achtung: keine Duplikate der IDs oben!)

  { id:"bucharest96",   title:"Bucharest 96",   poster:"bucharest96.jpg",   source:"", type:"hls", category:"live", tier:"pro" },

  // neue Poster + AM/PRO Markierungen
  { id:"nysept10-01ama", title:"New York 2001 (Sept 10)", poster:"nysept10-01ama.jpg", source:"", type:"hls", category:"live", tier:"am" },
  { id:"ny84",           title:"New York 84",   poster:"ny84.jpg",          source:"", type:"hls", category:["jacksons","live"], tier:"am" },

  // weitere AM-Markierungen laut deiner Liste
  { id:"mexico93",       title:"Mexico 93",     poster:"mexico93.jpg",      source:"", type:"hls", category:"live", tier:"am" },
  { id:"amsterdam96",    title:"Amsterdam 96",  poster:"amsterdam96.jpg",   source:"", type:"hls", category:"live", tier:"am" },
  { id:"tokyo97",        title:"Tokyo 97",      poster:"tokyo97.jpg",       source:"", type:"hls", category:"live", tier:"am" },

  // --- Tour Reports ---
  { id:"badreports89",        title:"Bad Tour Report 1989",        poster:"badreports89.jpg",        source:"", type:"hls", category:"live", tier:"pro" },
  { id:"badreports87",        title:"Bad Tour Report 1987",        poster:"badreports87.jpg",        source:"", type:"hls", category:"live", tier:"pro" },
  { id:"badreports88",        title:"Bad Tour Report 1988",        poster:"badreports88.jpg",        source:"", type:"hls", category:"live", tier:"pro" },
  { id:"dangerousreports92",  title:"Dangerous Tour Report 1992",  poster:"dangerousreports92.jpg",  source:"", type:"hls", category:"live", tier:"pro" },
  { id:"dangerousreports93",  title:"Dangerous Tour Report 1993",  poster:"dangerousreports93.jpg",  source:"", type:"hls", category:"live", tier:"pro" },
  { id:"historyreports96",    title:"History Tour Report 1996",    poster:"historyreports96.jpg",    source:"", type:"hls", category:"live", tier:"pro" },
  { id:"historyreports97",    title:"History Tour Report 1997",    poster:"historyreports97.jpg",    source:"", type:"hls", category:"live", tier:"pro" },

  // --- Interviews (sichtbar auf Home + Interviews, nicht unter Live) ---
  { id:"barbarawalters97",      title:"Barbara Walters Interview (1997)", poster:"barbarawalters97.jpg",      source:"https://mjtvplus.com/0/Barbara%20Walters.mp4",                             type:"mp4", category:["interviews","home"], tier:"interview" },
  { id:"commemorated2010",      title:"Michael Jackson Commemorated (2010)", poster:"commemorated2010.jpg",    source:"https://mjtvplus.com/0/2010%20Commemorated_stream.mp4",                   type:"mp4", category:["interviews","home"], tier:"doc" },
  { id:"oprahouttakes93",       title:"Oprah Interview – Outtakes (1993)",  poster:"oprahouttakes93.jpg",      source:"https://mjtvplus.com/0/1995%20-%20Oprah%20Outtakes%20(merged).mp4",       type:"mp4", category:["interviews","home"], tier:"tv" },
  { id:"privatehomemovies2003", title:"Michael Jackson: Private Home Movies (2003)", poster:"privatehomemovies2003.jpg", source:"https://mjtvplus.com/0/Michael%20Jackson%20Private%20Home%20Movies.mp4", type:"mp4", category:["interviews","home"], tier:"tv" },
  { id:"taketwo2003",           title:"Take Two – The Footage You Were Never Meant to See (2003)", poster:"taketwo2003.jpg", source:"https://mjtvplus.com/0/Michael%20Jackson%20-%20Take%202%20(german,%20Jetzt%20rede%20ich).mp4", type:"mp4", category:["interviews","home"], tier:"doc" },

  // --- The Jacksons ---
  { id:"losangeles81",  title:"Los Angeles (1981)", poster:"losangeles81.jpg",  source:"", type:"hls", category:["jacksons","live"], tier:"pro" }

]; // <-- einziges schließendes Ende der window.catalog-Array