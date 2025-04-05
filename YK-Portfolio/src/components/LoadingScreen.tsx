import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
export function LoadingScreen() {
  useTheme();
  const [progressWidth, setProgressWidth] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    // Show logo first
    setTimeout(() => {
      setShowLogo(true);
      // Then show the text
      setTimeout(() => {
        setShowText(true);
        // Then start the progress bar
        setTimeout(() => {
          const interval = setInterval(() => {
            setProgressWidth((prev) => {
              if (prev >= 100) {
                clearInterval(interval);
                return 100;
              }
              return prev + 5;
            });
          }, 50);
          return () => clearInterval(interval);
        }, 400);
      }, 600);
    }, 300);
  }, []);
  return (
    <div className="fixed inset-0 w-full h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 z-50">
      <div className="relative">
        {/* Logo animation */}
        <div
          className={`text-6xl font-bold relative transition-all duration-1000 ${
            showLogo ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <span className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-600 to-green-600 dark:from-emerald-200 dark:via-emerald-400 dark:to-green-300">
            YK
          </span>
          {/* Animated circles around the logo */}
          <div className="absolute -inset-4 flex items-center justify-center">
            <div
              className={`absolute w-20 h-20 rounded-full border-2 border-emerald-500/30 dark:border-emerald-400/30 ${
                showLogo ? "animate-ping-slow" : "opacity-0"
              }`}
            ></div>
            <div
              className={`absolute w-24 h-24 rounded-full border-2 border-emerald-500/20 dark:border-emerald-400/20 ${
                showLogo ? "animate-ping-slow animation-delay-300" : "opacity-0"
              }`}
            ></div>
            <div
              className={`absolute w-28 h-28 rounded-full border-2 border-emerald-500/10 dark:border-emerald-400/10 ${
                showLogo ? "animate-ping-slow animation-delay-600" : "opacity-0"
              }`}
            ></div>
          </div>
        </div>
        {/* Text animation */}
        <div
          className={`mt-4 text-center transition-all duration-700 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">Portfolio</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-8 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-green-500 dark:from-emerald-300 dark:to-green-400 transition-all duration-300 ease-out rounded-full"
          style={{
            width: `${progressWidth}%`,
          }}
        ></div>
      </div>
      {/* Loading text */}
      <div className="mt-4 flex items-center space-x-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Loading
          {Array((Math.floor(progressWidth / 25) % 4) + 1)
            .fill(".")
            .join("")}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {progressWidth}%
        </span>
      </div>
    </div>
  );
}
