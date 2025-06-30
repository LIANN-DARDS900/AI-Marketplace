import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const features = [
    { title: "Reliable & Trusted", desc: "All tools are vetted and verified.", icon: "⚡" },
    { title: "Easy to Use", desc: "Get started in seconds with user‑friendly tools.", icon: "👨‍💻" },
    { title: "Flexible Plans", desc: "Pricing that fits any budget and scale.", icon: "💰" },
    { title: "Fast Integration", desc: "Instant API setup to start using tools now.", icon: "⚙️" },
    { title: "24/7 Support", desc: "We're here around the clock to help you.", icon: "🛎️" },
    { title: "Secure & Private", desc: "Enterprise-level encryption for your data.", icon: "🔒" },
  ]

  const testimonials = [
    { name: "Alice", quote: "Amazing AI tools—saved me hours!", avatar: "https://i.pravatar.cc/100?img=32" },
    { name: "Bob", quote: "Incredible support and top‑quality agents.", avatar: "https://i.pravatar.cc/100?img=12" },
    { name: "Clara", quote: "Transformed my workflow with these agents.", avatar: "https://i.pravatar.cc/100?img=48" },
  ]

  const featured = [
    {
      name: "CopyGen AI",
      category: "Productivity",
      price: "$9/month",
      image: "https://picsum.photos/400/250?random=11",
    },
    {
      name: "VisionDetect",
      category: "Image Recognition",
      price: "$15/month",
      image: "https://picsum.photos/400/250?random=12",
    },
    {
      name: "AutoCoder",
      category: "Code Assistance",
      price: "$29/month",
      image: "https://picsum.photos/400/250?random=13",
    },
  ]

  return (
    <div className="space-y-20">

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 opacity-80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Discover Powerful AI Agents<br className="hidden sm:block" />
              That Make You Smarter
            </h1>
            <p className="text-lg text-indigo-200">
              Browse our curated marketplace of AI tools, filter by use‑case, and subscribe to the ones that elevate your productivity.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-indigo-900 font-semibold py-3 px-6 rounded-md hover:shadow-lg transition">
                Get Started
              </button>
              <button className="text-white border border-white font-medium py-3 px-6 rounded-md hover:bg-white hover:text-indigo-900 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="/assets/erasebg-transformed.png"
              alt="Futuristic purple ring"
              className="w-full max-w-md shadow-2xl rounded-lg transform hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      {/* Animated Feature Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Our AI Agents?</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Curated, high‑quality AI tools designed to help you work smarter, faster, and creatively.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-50 rounded-lg text-center shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
                <p className="text-gray-600">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

   
      {/* Featured Products */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured AI Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {featured.map((tool, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <img src={tool.image} alt={tool.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">Category: {tool.category}</p>
                  <p className="text-sm text-gray-600 mb-4">Price: {tool.price}</p>
                  <button
                    onClick={() => navigate('/marketplace')}
                    className="mt-auto block w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
                  >
                    View in Marketplace
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate('/marketplace')}
              className="bg-white border border-indigo-600 text-indigo-600 font-semibold py-3 px-8 rounded-md hover:bg-indigo-50 transition"
            >
              See All Products
            </button>
          </div>
        </div>
      </div>
   {/* Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <h4 className="font-semibold">{t.name}</h4>
              </div>
              <p className="text-gray-600">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-indigo-600 text-white py-12 rounded-t-lg">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Workflow?</h2>
          <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </div>

    </div>
  )
}
