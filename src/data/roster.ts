export interface Player {
  id: string;
  name: string;
  number: string;
  position: string;
  height: string;
  weight: string;
  shot: string;
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

export const players: Player[] = [
  { 
    id: "31", 
    name: "Finn Marshall", 
    number: "31", 
    position: "Goalie", 
    height: "6'1\"", 
    weight: "175 lbs", 
    shot: "Left", 
    image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?auto=format&fit=crop&q=80&w=400",
    bio: "A standout goaltender known for his quick reflexes and calm demeanor under pressure.",
    stats: { gp: 25, g: 0, a: 1, pts: 1, pim: 2, plusMinus: 0 }
  },
  { 
    id: "91", 
    name: "Jack Guvenal", 
    number: "91", 
    position: "Forward", 
    height: "5'10\"", 
    weight: "180 lbs", 
    shot: "Right", 
    image: "https://images.unsplash.com/photo-1526232759583-26f173565548?auto=format&fit=crop&q=80&w=400",
    bio: "A dynamic offensive threat with exceptional playmaking abilities.",
    stats: { gp: 42, g: 15, a: 25, pts: 40, pim: 12, plusMinus: 10 }
  },
  { 
    id: "44", 
    name: "Erik Johansson", 
    number: "44", 
    position: "Defense", 
    height: "6'4\"", 
    weight: "220 lbs", 
    shot: "Right", 
    image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=400",
    bio: "A physical presence on the blue line with a powerful shot from the point.",
    stats: { gp: 42, g: 8, a: 28, pts: 36, pim: 42, plusMinus: 22 }
  },
  // Add more players here following the same structure
];

export const staff: Staff[] = [
  { 
    id: "1", 
    name: "Robert 'Buck' Wilson", 
    role: "Head Coach", 
    experience: "15 Seasons", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    id: "2", 
    name: "Sarah Jenkins", 
    role: "Assistant Coach", 
    experience: "8 Seasons", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    id: "3", 
    name: "Mike Thompson", 
    role: "General Manager", 
    experience: "20 Seasons", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
  },
];