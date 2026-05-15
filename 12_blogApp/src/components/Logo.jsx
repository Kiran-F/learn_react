import React from 'react'

function Logo({ width = '100px', className = '' }) {
  return (
    <div
      className={`inline-flex items-center justify-center px-4 py-2 ${className}`}
      style={{ width }}
    >
      <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black">
        BLOGY
      </span>
    </div>
  )
}

export default Logo