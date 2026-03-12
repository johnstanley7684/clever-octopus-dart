"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const scores = [
  { home: "RAIDERS", away: "ROYALS", score: "4 - 2", status: "FINAL", date: "SEP 06" },
  { home: "RANGERS", away: "RAIDERS", score: "1 - 3", status: "FINAL", date: "AUG 30" },
  { home: "RAIDERS", away: "JR. CANADIENS", score: "2 - 4", status: "FINAL", date: "AUG 23" },
  { home: "MENACE", away: "BLADES", score: "3 - 1", status: "FINAL", date: "SEP 06" },
  { home: "COUGARS", away: "BLUES", score: "2 - 2", status: "FINAL (OT)", date: "SEP 05" },
  { home: "SABRES", away: "99ERS", score: "5 - 0", status: "FINAL", date: "SEP 04" },
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
          <Link 
            key={i} 
            to="/match-center" 
            className="inline-flex items-center px-8 border-r border-slate-800 last:border-r-0 hover:bg-slate-900 transition-colors"
          >
            <span className="text-[10px] font-bold text-slate-500 mr-3">{game.date}</span>
            <div className="flex items-center gap-4 text-xs font-black">
              <span className={game.home === "RAIDERS" ? "text-red-500" : ""}>{game.home}</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px]">{game.score}</span>
              <span className={game.away === "RAIDERS" ? "text-red-500" : ""}>{game.away}</span>
            </div>
            <span className="ml-3 text-[10px] font-bold text-green-500">{game.status}</span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default ScoreTicker;