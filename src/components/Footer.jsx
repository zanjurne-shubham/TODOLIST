import React from 'react'
// import "./output.css"

const Footer = () => {
  return (
   <footer className="w-full bg-violet-600 text-white mt-10">
  <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Left */}
    <div className="text-center md:text-left">
      <h2 className="font-bold text-lg">iTask Manager</h2>
      <p className="text-sm text-violet-200">
        Manage your todos at one place
      </p>
    </div>

    {/* Center */}
    <div className="text-sm text-violet-200 text-center">
      © {new Date().getFullYear()} All Rights Reserved
    </div>

    {/* Right */}
    <div className="text-sm font-semibold text-center md:text-right">
      Created by <span className="text-amber-300">Shubham Zanjurne</span>
    </div>

  </div>
</footer>

  )
}

export default Footer
