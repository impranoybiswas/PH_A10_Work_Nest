import React from "react";

const ProgressCircle = ({ completed, total, size = 120 }) => {
  const percentage = Math.round((completed / total) * 100);
  const strokeWidth = 10;
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className="relative w-fit h-fit">
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Foreground progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#10a4a0"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">{percentage}%</p>
          <p className="text-xs text-gray-500">Contributed</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
