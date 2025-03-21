"use client";

import React from 'react';
import { GooeyText } from '@/components/ui/gooey-text';

const SplashScreen = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      <GooeyText
        texts={[
          "Welcome",
          "to",
          "My",
          "Portfolio",
          "Sudesh Seneviratne",
          "Developer & Designer",
        ]}
        morphTime={0.75}
        cooldownTime={0.25}
        className="font-bold mb-8"
        textClassName="text-white"
      />
    </div>
  );
};

export default SplashScreen;
