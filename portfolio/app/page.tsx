"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          {/* Hero Section with Profile Picture */}
          <section className="flex flex-col items-center justify-center pt-20 pb-12">
            <div className="relative">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-sm transform scale-105 animate-pulse"></div>
              {/* Profile Picture */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-white">
                <Image
                  src="/Rounded-ProfilePic.png"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <h1 className="mt-8 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Sudesh Arosha Seneviratne
            </h1>
            <p className="mt-4 text-xl text-gray-300">Front-End Developer & UI/UX Designer</p>
          </section>
          
          {/* Introduction Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 border-b border-purple-500 pb-2">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about creating beautiful, functional, and user-friendly web applications.
                With expertise in modern web technologies, I build solutions that make a difference.
                Welcome to my digital portfolio where I showcase my work and skills.
              </p>
            </div>
          </section>
          
          {/* Skills Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 border-b border-blue-500 pb-2">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'CSS/Tailwind', 'UI/UX Design'].map((skill, index) => (
                  <div key={index} className="bg-gray-700 p-3 rounded-md text-center hover:bg-gray-600 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Projects Preview */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 border-b border-pink-500 pb-2">Featured Projects</h2>
              <p className="text-gray-300 mb-6">
                Here are some of my recent projects. Click on any to explore more.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((_, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg cursor-pointer hover:transform hover:scale-105 transition-transform">
                    <div className="h-32 bg-gray-600 rounded-md mb-4"></div>
                    <h3 className="font-semibold text-lg">Project {index + 1}</h3>
                    <p className="text-gray-400 text-sm mt-2">Short description of the project goes here.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Footer/Contact Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-6">
                I'm always open to new opportunities and collaborations.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Contact Me
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  )
}

export default Page;