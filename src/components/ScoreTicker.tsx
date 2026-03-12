"use client";

import React from 'react';
import { motion } from 'framer-motion';

const scores = [
  { home: "RAIDERS", away: "MENACE", score: "3 - 2", status: "FINAL", date: "OCT 18" },
  { home: "COUGARS", away: "BLADES", score: "4 - 1", status: "FINAL", date: "OCT 18" },
  { home: "BLUES", away: "GOLDEN HAWKS", score: "2 - 5", status: "FINAL", date: "OCT 17" },
  { home: "RAIDERS", away: "COUGARS", score: "5 - 4", status: "FINAL (OT)", date: "OCT 15" },
  { home: "DUKES", away: "PANTHERS", score: "3 - 3", status: "FINAL (SO)", date: "OCT 15" },
  { home: "99ERS", away: "MENACE", score: "1 - 6", status: "FINAL", date: "OCT 14" },
];

const ScoreTicker = () => {
  return (
    <div className="bg-slate-950 text-white py-2 overflow-hidden border-b border-slate-800 hidden md:block">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {[...scores, ...scores].map((game, i) => (
          <div key={i} className="inline-flex items-center px-8 border-r border-slate-800 last:border-r-0">
            <span className="text-[10px] font-bold text-slate-500 mr-3">{game.date}</span>
            <div className="flex items-center gap-4 text-xs font-black">
              <span className={game.home === "RAIDERS" ? "text-blue-400" : ""}>{game.home}</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px]">{game.score}</span>
              <span className={game.away === "RAIDERS" ? "text-blue-400" : ""}>{game.away}</span>
            </div>
            <span className="ml-3 text-[10px] font-bold text-green-500">{game.status}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScoreTicker;