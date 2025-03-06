import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">
              Bridging the Statistics Gap
            </h1>
            <p className="text-xl mb-8">
              The epicenter of statistics and any national statistical production system all over the world
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/hero-image.jpg" 
              alt="Statistics visualization" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 