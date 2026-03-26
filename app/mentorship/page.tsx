import { Users, Target, MessageCircle, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: 'Career Guidance',
    description: 'Get advice on career paths, job searching, and professional development from experienced mentors.',
    icon: Target,
  },
  {
    title: 'Skill Development',
    description: 'Learn new technical skills and best practices from professionals working in the field.',
    icon: TrendingUp,
  },
  {
    title: 'Networking',
    description: 'Build valuable connections with professionals and peers in the tech industry.',
    icon: Users,
  },
  {
    title: 'Support System',
    description: 'Join a supportive community that understands your challenges and celebrates your successes.',
    icon: MessageCircle,
  },
];

const mentorProfiles = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Software Engineer at Google',
    expertise: 'Cloud Computing, Distributed Systems',
    experience: '8 years',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Data Scientist at Meta',
    expertise: 'Machine Learning, Data Analytics',
    experience: '6 years',
  },
  {
    name: 'Emily Chen',
    role: 'Cybersecurity Analyst',
    expertise: 'Network Security, Ethical Hacking',
    experience: '5 years',
  },
  {
    name: 'Dr. Amanda Williams',
    role: 'AI Research Scientist',
    expertise: 'Natural Language Processing, AI',
    experience: '10 years',
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Apply',
    description: 'Fill out our mentorship application form with your interests and goals.',
  },
  {
    step: 2,
    title: 'Get Matched',
    description: 'We carefully match you with a mentor based on your career interests and goals.',
  },
  {
    step: 3,
    title: 'Connect',
    description: 'Meet your mentor and establish communication preferences and meeting schedules.',
  },
  {
    step: 4,
    title: 'Grow',
    description: 'Work with your mentor throughout the semester to achieve your professional goals.',
  },
];

export default function MentorshipPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentorship Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Connect with experienced professionals and peers who can guide you through your 
            academic journey and help you achieve your career goals in tech.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Why Join Our Mentorship Program?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mentorship program pairs students with experienced professionals and alumni 
              to provide guidance, support, and career insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-md h-full">
                  <div className="w-12 h-12 bg-[#CC0000] rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-[#CC0000]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Meet Our Mentors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mentors are accomplished professionals working at top tech companies and research institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorProfiles.map((mentor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="w-20 h-20 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#003366] text-center mb-1">
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-3">{mentor.role}</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-700">
                    <span className="font-semibold">Expertise:</span> {mentor.expertise}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Experience:</span> {mentor.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">For Mentees</h2>
              <p className="text-gray-600 mb-6">
                Looking for guidance in your tech career? Our mentorship program connects you with 
                experienced professionals who can help you navigate your journey.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">One-on-one guidance from industry professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Career advice and professional development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Networking opportunities and industry insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Resume reviews and interview preparation</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#004080] transition-colors">
                Apply as a Mentee
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">For Mentors</h2>
              <p className="text-gray-600 mb-6">
                Share your knowledge and experience with the next generation of women in tech. 
                Make a lasting impact on students' careers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Give back to the community and inspire others</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Develop leadership and coaching skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Expand your professional network</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Flexible time commitment (2-4 hours/month)</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#003366] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Mentorship?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            We're here to help! Reach out to learn more about our mentorship program.
          </p>
          <button className="px-8 py-3 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
