import Navbar from '../components/Navbar'

export default function Marketplace() {
  const tools = [
    {
      name: "CopyGen AI",
      category: "Productivity",
      price: "$9/month",
      image: "https://picsum.photos/400/250?random=1",
    },
    {
      name: "Smart Translate",
      category: "Language",
      price: "$12/month",
      image: "https://picsum.photos/400/250?random=2",
    },
    {
      name: "VisionDetect",
      category: "Image Recognition",
      price: "$15/month",
      image: "https://picsum.photos/400/250?random=3",
    },
    {
      name: "AlgoTrade Bot",
      category: "Finance",
      price: "$25/month",
      image: "https://picsum.photos/400/250?random=4",
    },
    {
      name: "VoiceClone",
      category: "Audio/Voice",
      price: "$18/month",
      image: "https://picsum.photos/400/250?random=5",
    },
    {
      name: "AutoCoder",
      category: "Code Assistance",
      price: "$29/month",
      image: "https://picsum.photos/400/250?random=6",
    },
  ]

  return (
<div className="min-h-screen bg-gradient-to-b from-[#1a1143] to-[#301b5c] text-white">
      {/* Include Navbar here */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-28"> {/* use py-28 to leave space below fixed navbar */}
        <h1 className="text-3xl font-bold mb-6">Explore AI Tools</h1>

        {/* Search Bar UI */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10 hover:shadow-lg transition">
              <img
                src={tool.image}
                alt={`${tool.name} thumbnail`}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-200 mb-1">Category: {tool.category}</p>
                <p className="text-sm text-gray-200 mb-3">Price: {tool.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
