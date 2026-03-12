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
  { id: "1", name: "Robert 'Buck' Wilson", role: "Head Coach", experience: "15 Seasons", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { id: "2", name: "Sarah Jenkins", role: "Assistant Coach", experience: "8 Seasons", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
  { id: "3", name: "Mike Thompson", role: "General Manager", experience: "20 Seasons", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
];