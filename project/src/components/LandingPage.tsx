import React, { useState, useEffect } from 'react';
import { TrendingUp, Code, Rocket, ArrowRight } from 'lucide-react';

export const LandingPage: React.FC<{ onEnter: () => void }> = ({ onEnter }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className={`text-center transform transition-all duration-1000 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <TrendingUp className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Welcome to StockSense
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="w-5 h-5 text-blue-400" />
            <p className="text-xl text-blue-200">Team Code Brigades</p>
          </div>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Hack2Hire Hackathon Project: Advanced Stock Analytics Platform
            for Intelligent Investment Decisions
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 w-48">
              <h3 className="text-blue-400 font-semibold mb-2">Real-time Analysis</h3>
              <p className="text-gray-300 text-sm">Dynamic stock performance metrics</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 w-48">
              <h3 className="text-purple-400 font-semibold mb-2">Risk Analytics</h3>
              <p className="text-gray-300 text-sm">Advanced risk assessment tools</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 w-48">
              <h3 className="text-indigo-400 font-semibold mb-2">Smart Insights</h3>
              <p className="text-gray-300 text-sm">AI-powered market intelligence</p>
            </div>
          </div>

          <button
            onClick={onEnter}
            className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Enter Platform
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-gray-400 text-sm">
            Made with <span className="text-red-400">♥</span> for Invesco Hack2Hire 2024
          </p>
        </div>
      </div>
    </div>
  );
};