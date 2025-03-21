"use client";

import React, { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
          {/* Your portfolio content goes here */}
        </div>
      )}
    </>
  )
}

export default Page;