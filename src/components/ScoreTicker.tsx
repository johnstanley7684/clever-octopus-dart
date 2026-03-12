"use client";

import React from 'react';
import { motion } from 'framer-motion';

const scores = [
  { home: "TITANS", away: "WOLVES", score: "4 - 2", status: "FINAL", date: "OCT 5" },
  { home: "SHARKS", away: "TITANS", score: "3 - 1", status: "FINAL", date: "OCT 1" },
  { home: "TITANS", away: "BEARS", score: "5 - 0", status: "FINAL", date: "SEP 28" },
  { home: "KINGS", away: "RAVENS", score: "2 - 3", status: "FINAL", date: "OCT 6" },
  { home: "BLIZZARDS", away: "WOLVES", score: "1 - 4", status: "FINAL", date: "OCT 6" },
];

const ScoreTicker = () => {
  return (
    <div className="bg-slate-950 text-white py-2 overflow-hidden border-b border-slate-800 hidden md:block">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...scores, ...scores].map((game, i) => (
          <div key={i} className="inline-flex items-center px-8 border-r border-slate-800 last:border-r-0">
            <span className="text-[10px] font-bold text-slate-500 mr-3">{game.date}</span>
            <div className="flex items-center gap-4 text-xs font-black">
              <span className={game.home === "TITANS" ? "text-blue-400" : ""}>{game.home}</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px]">{game.score}</span>
              <span className={game.away === "TITANS" ? "text-blue-400" : ""}>{game.away}</span>
            </div>
            <span className="ml-3 text-[10px] font-bold text-green-500">{game.status}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScoreTicker;