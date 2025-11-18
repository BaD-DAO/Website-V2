export default function Academy() {
  const courses = {
    junior: [
      {
        title: 'Blockchain Fundamentals',
        duration: '8 weeks',
        level: 'Beginner',
        topics: ['Bitcoin & Ethereum', 'Smart Contracts', 'DApps', 'Web3 Basics']
      },
      {
        title: 'AI & Machine Learning Basics',
        duration: '10 weeks',
        level: 'Beginner',
        topics: ['Python Programming', 'Data Science', 'ML Algorithms', 'Neural Networks']
      },
      {
        title: 'Full Stack Web3 Development',
        duration: '12 weeks',
        level: 'Intermediate',
        topics: ['Solidity', 'React', 'IPFS', 'DeFi Protocols']
      }
    ],
    enterprise: [
      {
        title: 'Enterprise Blockchain Solutions',
        duration: '6 weeks',
        level: 'Advanced',
        topics: ['Private Blockchains', 'Hyperledger', 'Supply Chain', 'Security']
      },
      {
        title: 'AI for Business Transformation',
        duration: '8 weeks',
        level: 'Advanced',
        topics: ['AI Strategy', 'ML Operations', 'Data Infrastructure', 'ROI Analysis']
      },
      {
        title: 'DAO Governance & Management',
        duration: '4 weeks',
        level: 'Advanced',
        topics: ['Token Economics', 'Voting Systems', 'Treasury Management', 'Legal Framework']
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">BaD Academy</h1>
          <p className="text-xl text-purple-100">
            World-class AI and blockchain education designed for African innovators
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Level Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Junior Level Courses</h2>
            <p className="text-xl text-gray-600">
              Perfect for beginners and those looking to start their journey in AI and blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.junior.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span>⏱️ {course.duration}</span>
                    <span className="bg-white/20 px-2 py-1 rounded">{course.level}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold mb-3 text-gray-900">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Level Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Level Courses</h2>
            <p className="text-xl text-gray-600">
              Advanced training for teams and organizations ready to implement cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.enterprise.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border-2 border-blue-200">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span>⏱️ {course.duration}</span>
                    <span className="bg-white/20 px-2 py-1 rounded">{course.level}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold mb-3 text-gray-900">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Contact Sales
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose BaD Academy?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-semibold mb-2">Industry Experts</h3>
              <p className="text-gray-600 text-sm">Learn from professionals with real-world experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold mb-2">Job Placement</h3>
              <p className="text-gray-600 text-sm">Connect with hiring partners across Africa</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-gray-600 text-sm">Earn recognized credentials for your skills</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Join a network of learners and professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-xl mb-8">
            Transform your career with cutting-edge AI and blockchain education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
              Browse All Courses
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
