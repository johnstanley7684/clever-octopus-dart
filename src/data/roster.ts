export interface Player {
  id: string;
  name: string;
  number: string;
  position: string;
  height: string;
  weight: string;
  shot: string;
  hometown: string;
  image: string;
  bio: string;
  stats: {
    gp: number;
    g: number;
    a: number;
    pts: number;
    pim: number;
    plusMinus: number;
  };
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
}

const defaultBio = "A dedicated member of the Georgetown Raiders, committed to excellence on and off the ice.";
const logoUrl = "https://www.georgetownraiders.com/pics/georgetown logo.png";
const staffLogoUrl = "http://www.georgetownraiders.com/pics/georgetown logo.png";

export const players: Player[] = [
  { id: "7", name: "BRADEN LAUWAERT", number: "7", position: "FORWARD", height: "6'2\"", weight: "185 lbs", shot: "Left", hometown: "Brantford, ON", image: logoUrl, bio: defaultBio, stats: { gp: 54, g: 28, a: 38, pts: 66, pim: 42, plusMinus: 18 } },
  { id: "9", name: "KASEN BEITZ", number: "9", position: "FORWARD", height: "6'1\"", weight: "175 lbs", shot: "Left", hometown: "Chesley, ON", image: logoUrl, bio: defaultBio, stats: { gp: 54, g: 22, a: 41, pts: 63, pim: 16, plusMinus: 21 } },
  { id: "21", name: "VINCE ALBANESE", number: "21", position: "FORWARD", height: "5'11\"", weight: "180 lbs", shot: "Right", hometown: "Toronto, ON", image: logoUrl, bio: defaultBio, stats: { gp: 51, g: 26, a: 32, pts: 58, pim: 48, plusMinus: 15 } },
  { id: "13", name: "OWEN MELI", number: "13", position: "FORWARD", height: "6'0\"", weight: "170 lbs", shot: "Right", hometown: "Oakville, ON", image: logoUrl, bio: defaultBio, stats: { gp: 54, g: 19, a: 35, pts: 54, pim: 22, plusMinus: 14 } },
  { id: "16", name: "JACKSON BELL", number: "16", position: "FORWARD", height: "5'10\"", weight: "165 lbs", shot: "Left", hometown: "Georgetown, ON", image: logoUrl, bio: defaultBio, stats: { gp: 53, g: 23, a: 26, pts: 49, pim: 62, plusMinus: 9 } },
  { id: "18", name: "THOMAS KIRKLAND", number: "18", position: "FORWARD", height: "6'3\"", weight: "195 lbs", shot: "Left", hometown: "Barrie, ON", image: logoUrl, bio: defaultBio, stats: { gp: 54, g: 15, a: 30, pts: 45, pim: 30, plusMinus: 11 } },
  { id: "4", name: "ALEXANDER RAK", number: "4", position: "DEFENCE", height: "6'2\"", weight: "190 lbs", shot: "Right", hometown: "Oakville, ON", image: logoUrl, bio: defaultBio, stats: { gp: 54, g: 8, a: 34, pts: 42, pim: 72, plusMinus: 24 } },
  { id: "2", name: "CALVIN ILKAY", number: "2", position: "DEFENCE", height: "6'1\"", weight: "185 lbs", shot: "Left", hometown: "Toronto, ON", image: logoUrl, bio: defaultBio, stats: { gp: 50, g: 5, a: 27, pts: 32, pim: 44, plusMinus: 19 } },
  { id: "6", name: "JAMES PROCTOR", number: "6", position: "FORWARD", height: "5'9\"", weight: "160 lbs", shot: "Left", hometown: "Texas, USA", image: logoUrl, bio: defaultBio, stats: { gp: 48, g: 12, a: 18, pts: 30, pim: 36, plusMinus: 8 } },
  { id: "8", name: "GAVIN YIN", number: "8", position: "DEFENCE", height: "6'0\"", weight: "180 lbs", shot: "Left", hometown: "Mississauga, ON", image: logoUrl, bio: defaultBio, stats: { gp: 52, g: 4, a: 22, pts: 26, pim: 28, plusMinus: 12 } },
  { id: "17", name: "AYDEN AGIUS", number: "17", position: "DEFENCE", height: "6'1\"", weight: "185 lbs", shot: "Left", hometown: "Toronto, ON", image: logoUrl, bio: defaultBio, stats: { gp: 45, g: 2, a: 15, pts: 17, pim: 32, plusMinus: 5 } },
  { id: "20", name: "JOEL APTHORPE", number: "20", position: "FORWARD", height: "5'11\"", weight: "175 lbs", shot: "Left", hometown: "Georgetown, ON", image: logoUrl, bio: defaultBio, stats: { gp: 42, g: 6, a: 8, pts: 14, pim: 12, plusMinus: -2 } },
  { id: "23", name: "DENEEMS MOSLER-PLATA", number: "23", position: "FORWARD", height: "6'0\"", weight: "180 lbs", shot: "Right", hometown: "Georgetown, ON", image: logoUrl, bio: defaultBio, stats: { gp: 38, g: 4, a: 6, pts: 10, pim: 18, plusMinus: -4 } },
  { id: "24", name: "ADRIANO DIGIOSA", number: "24", position: "FORWARD", height: "5'10\"", weight: "170 lbs", shot: "Right", hometown: "Georgetown, ON", image: logoUrl, bio: defaultBio, stats: { gp: 35, g: 3, a: 5, pts: 8, pim: 10, plusMinus: -1 } },
  { id: "30", name: "LUKE QUINN", number: "30", position: "GOALIE", height: "6'2\"", weight: "190 lbs", shot: "Left", hometown: "Georgetown, ON", image: logoUrl, bio: defaultBio, stats: { gp: 32, g: 0, a: 1, pts: 1, pim: 2, plusMinus: 0 } },
  { id: "35", name: "IVAN KASTELAN", number: "35", position: "GOALIE", height: "6'1\"", weight: "185 lbs", shot: "Left", hometown: "Mississauga, ON", image: logoUrl, bio: defaultBio, stats: { gp: 24, g: 0, a: 0, pts: 0, pim: 0, plusMinus: 0 } },
  { id: "37", name: "FRANK LECCE", number: "37", position: "FORWARD", height: "5'11\"", weight: "175 lbs", shot: "Left", hometown: "Mississauga, ON", image: logoUrl, bio: defaultBio, stats: { gp: 30, g: 2, a: 4, pts: 6, pim: 8, plusMinus: -3 } },
  { id: "44", name: "NOAH SMITH", number: "44", position: "DEFENCE", height: "6'2\"", weight: "195 lbs", shot: "Right", hometown: "Mississauga, ON", image: logoUrl, bio: defaultBio, stats: { gp: 40, g: 1, a: 9, pts: 10, pim: 24, plusMinus: 6 } },
  { id: "71", name: "LOGAN DEWAR", number: "71", position: "FORWARD", height: "6'0\"", weight: "180 lbs", shot: "Left", hometown: "Toronto, ON", image: logoUrl, bio: defaultBio, stats: { gp: 28, g: 5, a: 3, pts: 8, pim: 14, plusMinus: 2 } },
  { id: "91", name: "BRADEN HARTLEIB", number: "91", position: "DEFENCE", height: "6'1\"", weight: "185 lbs", shot: "Right", hometown: "Toronto, ON", image: logoUrl, bio: defaultBio, stats: { gp: 25, g: 0, a: 4, pts: 4, pim: 12, plusMinus: 1 } },
];

export const staff: Staff[] = [
  { id: "s1", name: "Ted Puccini", role: "Governor", experience: "Management", image: staffLogoUrl },
  { id: "s2", name: "Chris Thompson", role: "General Manager", experience: "Management", image: staffLogoUrl },
  { id: "s3", name: "Nick Rotondi", role: "Director of Hockey Operations", experience: "Management", image: staffLogoUrl },
  { id: "s4", name: "Jeff Angelidis", role: "Head Coach", experience: "Coaching", image: staffLogoUrl },
  { id: "s5", name: "Mark Biesenthal", role: "Assistant Coach", experience: "Coaching", image: staffLogoUrl },
  { id: "s6", name: "Navinder Biln", role: "Assistant Coach", experience: "Coaching", image: staffLogoUrl },
  { id: "s7", name: "Nick Dahan", role: "Goalie Coach", experience: "Coaching", image: staffLogoUrl },
  { id: "s8", name: "Dana Flatt", role: "Athletic Therapist", experience: "Medical", image: staffLogoUrl },
  { id: "s9", name: "Matthew Taylor", role: "Head Equipment Manager", experience: "Operations", image: staffLogoUrl },
  { id: "s10", name: "Rina Atkinson", role: "Game Day Coordinator/Entry", experience: "Operations", image: staffLogoUrl },
  { id: "s11", name: "Wayne Webster", role: "Game Day Operations/Sponsorship", experience: "Operations", image: staffLogoUrl },
  { id: "s12", name: "Sam Hilson", role: "Content Creator", experience: "Media", image: staffLogoUrl },
  { id: "s13", name: "Alan Corkum", role: "Play by Play Announcer", experience: "Media", image: staffLogoUrl },
  { id: "s14", name: "Gary Morrison", role: "Camera Operator/Flohockey", experience: "Media", image: staffLogoUrl },
  { id: "s15", name: "Madison Yacynuk", role: "Game Day Intern", experience: "Intern", image: staffLogoUrl },
  { id: "s16", name: "Matthew Elogio", role: "Game Day Intern", experience: "Intern", image: staffLogoUrl },
  { id: "s17", name: "Alex Pincente", role: "Game Day Intern", experience: "Intern", image: staffLogoUrl },
  { id: "s18", name: "Maghfoor Ahmad", role: "Game Day Volunteer", experience: "Volunteer", image: staffLogoUrl },
  { id: "s19", name: "Mike Elson", role: "Head Scout", experience: "Scouting", image: staffLogoUrl },
  { id: "s20", name: "David Ciss", role: "Regional Scout", experience: "Scouting", image: hometown: "Scouting", image: staffLogoUrl },
  { id: "s21", name: "Mitchell Skilton", role: "Regional Scout", experience: "Scouting", image: staffLogoUrl },
  { id: "s22", name: "Jesse Candela", role: "Regional Scout", experience: "Scouting", image: staffLogoUrl },
  { id: "s23", name: "Cameron Cook", role: "Regional Scout", experience: "Scouting", image: staffLogoUrl },
];