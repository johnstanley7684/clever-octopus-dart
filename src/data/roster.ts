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

const defaultStats = { gp: 0, g: 0, a: 0, pts: 0, pim: 0, plusMinus: 0 };
const defaultBio = "A dedicated member of the Georgetown Raiders, committed to excellence on and off the ice.";
const logoUrl = "https://www.georgetownraiders.com/pics/georgetown logo.png";
const staffPlaceholder = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";

export const players: Player[] = [
  { id: "2", name: "CALVIN ILKAY", number: "2", position: "DEFENCE", height: "6'2", weight: "152 lbs", shot: "Left", hometown: "Georgetown", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "4", name: "ALEXANDER RAK", number: "4", position: "DEFENCE", height: "6'2", weight: "153 lbs", shot: "Right", hometown: "Oakville", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "6", name: "JAMES PROCTOR", number: "6", position: "FORWARD", height: "6'2", weight: "154 lbs", shot: "Left", hometown: "Texas", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "7", name: "BRADEN LAUWAERT", number: "7", position: "FORWARD", height: "6'2", weight: "155 lbs", shot: "Left", hometown: "Brantford", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "8", name: "GAVIN YIN", number: "8", position: "DEFENCE", height: "6'2", weight: "156 lbs", shot: "Left", hometown: "Mississauga", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "9", name: "KASEN BEITZ", number: "9", position: "FORWARD", height: "6'2", weight: "157 lbs", shot: "Left", hometown: "Niagara Falls", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "21", name: "VINCE ALBANESE", number: "21", position: "FORWARD", height: "6'2", weight: "158 lbs", shot: "Right", hometown: "Georgetown", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "13", name: "OWEN MELI", number: "13", position: "FORWARD", height: "6'2", weight: "159 lbs", shot: "Right", hometown: "Brantford", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "14", name: "DARYAN MATTHEWS", number: "14", position: "DEFENCE", height: "6'2", weight: "160 lbs", shot: "Right", hometown: "Mississauga", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "15", name: "GAVIN WANG", number: "15", position: "FORWARD", height: "6'2", weight: "161 lbs", shot: "Right", hometown: "Niagara Falls", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "16", name: "JACKSON BELL", number: "16", position: "FORWARD", height: "6'2", weight: "162 lbs", shot: "Left", hometown: "Texas", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "17", name: "AYDEN AGIUS", number: "17", position: "DEFENCE", height: "6'2", weight: "163 lbs", shot: "Left", hometown: "Toronto", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "18", name: "THOMAS KIRKLAND", number: "18", position: "FORWARD", height: "6'2", weight: "164 lbs", shot: "Left", hometown: "Barrie", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "20", name: "JOEL APTHORPE", number: "20", position: "FORWARD", height: "6'2", weight: "165 lbs", shot: "Left", hometown: "Georgetown", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "23", name: "DENEEMS MOSLER-PLATA", number: "23", position: "FORWARD", height: "6'2", weight: "166 lbs", shot: "Right", hometown: "Georgetown", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "24", name: "ADRIANO DIGIOSA", number: "24", position: "FORWARD", height: "6'2", weight: "167 lbs", shot: "Right", hometown: "Georgetown", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "30", name: "LUKE QUINN", number: "30", position: "GOALIE", height: "6'2", weight: "168 lbs", shot: "Right", hometown: "Georgetown", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "35", name: "IVAN KASTELAN", number: "35", position: "GOALIE", height: "6'2", weight: "169 lbs", shot: "Right", hometown: "Mississauga", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "37", name: "FRANK LECCE", number: "37", position: "FORWARD", height: "6'2", weight: "170 lbs", shot: "Left", hometown: "Mississauga", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "44", name: "NOAH SMITH", number: "44", position: "DEFENCE", height: "6'2", weight: "171 lbs", shot: "Right", hometown: "Mississauga", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "71", name: "LOGAN DEWAR", number: "71", position: "FORWARD", height: "6'2", weight: "172 lbs", shot: "Left", hometown: "Toronto", image: logoUrl, bio: defaultBio, stats: defaultStats },
  { id: "91", name: "BRADEN HARTLEIB", number: "91", position: "DEFENCE", height: "6'2", weight: "173 lbs", shot: "Right", hometown: "Toronto", image: logoUrl, bio: defaultBio, stats: defaultStats },
];

export const staff: Staff[] = [
  { id: "s1", name: "Ted Puccini", role: "Governor", experience: "Management", image: staffPlaceholder },
  { id: "s2", name: "Chris Thompson", role: "General Manager", experience: "Management", image: staffPlaceholder },
  { id: "s3", name: "Nick Rotondi", role: "Director of Hockey Operations", experience: "Management", image: staffPlaceholder },
  { id: "s4", name: "Jeff Angelidis", role: "Head Coach", experience: "Coaching", image: staffPlaceholder },
  { id: "s5", name: "Mark Biesenthal", role: "Assistant Coach", experience: "Coaching", image: staffPlaceholder },
  { id: "s6", name: "Navinder Biln", role: "Assistant Coach", experience: "Coaching", image: staffPlaceholder },
  { id: "s7", name: "Nick Dahan", role: "Goalie Coach", experience: "Coaching", image: staffPlaceholder },
  { id: "s8", name: "Dana Flatt", role: "Athletic Therapist", experience: "Medical", image: staffPlaceholder },
  { id: "s9", name: "Matthew Taylor", role: "Head Equipment Manager", experience: "Operations", image: staffPlaceholder },
  { id: "s10", name: "Rina Atkinson", role: "Game Day Coordinator/Entry", experience: "Operations", image: staffPlaceholder },
  { id: "s11", name: "Wayne Webster", role: "Game Day Operations/Sponsorship", experience: "Operations", image: staffPlaceholder },
  { id: "s12", name: "Sam Hilson", role: "Content Creator", experience: "Media", image: staffPlaceholder },
  { id: "s13", name: "Alan Corkum", role: "Play by Play Announcer", experience: "Media", image: staffPlaceholder },
  { id: "s14", name: "Gary Morrison", role: "Camera Operator/Flohockey", experience: "Media", image: staffPlaceholder },
  { id: "s15", name: "Madison Yacynuk", role: "Game Day Intern", experience: "Intern", image: staffPlaceholder },
  { id: "s16", name: "Matthew Elogio", role: "Game Day Intern", experience: "Intern", image: staffPlaceholder },
  { id: "s17", name: "Alex Pincente", role: "Game Day Intern", experience: "Intern", image: staffPlaceholder },
  { id: "s18", name: "Maghfoor Ahmad", role: "Game Day Volunteer", experience: "Volunteer", image: staffPlaceholder },
  { id: "s19", name: "Mike Elson", role: "Head Scout", experience: "Scouting", image: staffPlaceholder },
  { id: "s20", name: "David Ciss", role: "Regional Scout", experience: "Scouting", image: staffPlaceholder },
  { id: "s21", name: "Mitchell Skilton", role: "Regional Scout", experience: "Scouting", image: staffPlaceholder },
  { id: "s22", name: "Jesse Candela", role: "Regional Scout", experience: "Scouting", image: staffPlaceholder },
  { id: "s23", name: "Cameron Cook", role: "Regional Scout", experience: "Scouting", image: staffPlaceholder },
];