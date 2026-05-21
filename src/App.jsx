import React from 'react'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          It Works! 🎉
        </h1>
        <p className="text-gray-600 mb-6">
           <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200" onClick={() => setCount(count + 1)}>
            Count: {count}
           </button>
        </p>
        <p className="text-gray-600 mb-6">
          If this is a centered white card with a soft shadow, and the button below turns darker blue when you hover over it, your Tailwind v3 setup is perfect.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200" onClick={() => alert('Hello! This is a Tailwind v3 setup. Everything is working perfectly!')}>
          Check this alert
        </button>
      </div>
    </div>
  )
}

export default App