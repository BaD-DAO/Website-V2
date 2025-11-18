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
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-32 border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">BaD Academy</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              World-class AI and blockchain education designed for African innovators
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-black border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-black border-2 border-white">
              <div className="text-6xl font-bold mb-2">50+</div>
              <div className="text-lg">Expert Instructors</div>
            </div>
            <div className="text-center p-8 bg-black border-2 border-white">
              <div className="text-6xl font-bold mb-2">2,500+</div>
              <div className="text-lg">Students Trained</div>
            </div>
            <div className="text-center p-8 bg-black border-2 border-white">
              <div className="text-6xl font-bold mb-2">95%</div>
              <div className="text-lg">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Level Courses */}
      <section className="py-20 bg-black border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Junior Level Courses</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Perfect for beginners and those looking to start their journey in AI and blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.junior.map((course, index) => (
              <div key={index} className="bg-black border-2 border-white overflow-hidden hover:bg-white hover:text-black transition-all duration-300 group">
                <div className="bg-white text-black p-8 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                  <div className="flex items-center gap-4 text-lg">
                    <span>⏱️ {course.duration}</span>
                    <span className="border-2 border-current px-3 py-1">{course.level}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="font-bold mb-4 text-xl">What You'll Learn:</h4>
                  <ul className="space-y-3">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start text-lg">
                        <span className="mr-3">✓</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-8 w-full bg-white text-black border-2 border-white py-3 font-bold group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Level Courses */}
      <section className="py-20 bg-black border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Enterprise Level Courses</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Advanced training for teams and organizations ready to implement cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.enterprise.map((course, index) => (
              <div key={index} className="bg-black border-2 border-white overflow-hidden hover:bg-white hover:text-black transition-all duration-300 group">
                <div className="bg-white text-black p-8 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                  <div className="flex items-center gap-4 text-lg">
                    <span>⏱️ {course.duration}</span>
                    <span className="border-2 border-current px-3 py-1">{course.level}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="font-bold mb-4 text-xl">What You'll Learn:</h4>
                  <ul className="space-y-3">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start text-lg">
                        <span className="mr-3">✓</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-8 w-full bg-white text-black border-2 border-white py-3 font-bold group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-xl mb-10">
            Transform your career with cutting-edge AI and blockchain education
          </p>
          <button className="bg-white text-black border-2 border-white px-10 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 text-lg">
            Browse All Courses
          </button>
        </div>
      </section>
    </div>
  );
}
