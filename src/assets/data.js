import m1 from "./music/musik-1.mp3";
import m2 from "./music/musik-2.mp3";
import m3 from "./music/musik-3.mp3";
import m4 from "./music/musik-4.mp3";
import m5 from "./music/musik-5.mp3";
import m6 from "./music/musik-6.mp3";
import m7 from "./music/musik-7.mp3";

import cover1 from "./img/musik-1.jpg";
import cover2 from "./img/musik-2.jpg";
import cover3 from "./img/musik-3.jpg";
import cover4 from "./img/musik-4.jpg";
import cover5 from "./img/musik-5.jpg";
import cover6 from "./img/musik-6.jpg";
import cover7 from "./img/musik-7.jpg";
import defCover from "./img/wave.png";

const defaultData = [
  {
    name: "Song name",
    cover: defCover,
    artist: "Artist",
  },
];

const chillHop = [
  {
    name: "Build a Peach",
    cover: cover1,
    artist: "Bella Poarch",
    audio: m1,
    color: ["#205950", "#2ab3bf"],
    id: 112,
    active: true,
  },
  {
    name: "Meri Jan",
    cover: cover2,
    artist: "Shivangi",
    audio: m2,
    color: ["#EF8EA9", "#ab417f"],
    id: 113,
    active: false,
  },
  {
    name: "Massak Kali",
    cover: cover3,
    artist: "Mohit Chauhan",
    audio: m3,
    color: ["#CD607D", "#c94043"],
    id: 114,
    active: false,
  },
  {
    name: "Hanuman chalisa",
    cover: cover4,
    artist: "Unknown",
    audio: m4,
    color: ["#EF8EA9", "#ab417f"],
    id: 115,
    active: false,
  },
  {
    name: "Chand Shifarish",
    cover: cover5,
    artist: "Kailash Kher and Shaan",
    audio: m5,
    color: ["#CD607D", "#c94043"],
    id: 116,
    active: false,
  },
  {
    name: "Yari teri yari",
    cover: cover6,
    artist: "Amitabh Bachchan and Farhan Akhtar",
    audio: m6,
    color: ["#205950", "#2ab3bf"],
    id: 117,
    active: false,
  },
  {
    name: "Tu Ban ja gali",
    cover: cover7,
    artist: "Asit Tripathy",
    audio: m7,
    color: ["#205950", "#2ab3bf"],
    id: 118,
    active: false,
  },
  //ADD MORE HERE
];

export { chillHop, defaultData };
