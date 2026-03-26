import { Target, Users, Heart, Award, Mail } from 'lucide-react';

const mission = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower and support women in computer science and engineering at FAU by providing mentorship, resources, and opportunities for professional growth.',
  },
  {
    icon: Heart,
    title: 'Our Vision',
    description: 'A diverse and inclusive tech community where women thrive as leaders, innovators, and change-makers in the field of technology.',
  },
  {
    icon: Award,
    title: 'Our Values',
    description: 'Excellence, inclusivity, collaboration, and continuous learning. We believe in supporting each other and lifting as we climb.',
  },
];

const team = [
  {
    name: 'Jessica Martinez',
    role: 'President',
    major: 'Computer Science',
    year: 'Senior',
  },
  {
    name: 'Aisha Patel',
    role: 'Vice President',
    major: 'Computer Engineering',
    year: 'Junior',
  },
  {
    name: 'Rachel Kim',
    role: 'Events Coordinator',
    major: 'Computer Science',
    year: 'Junior',
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Mentorship Director',
    major: 'Software Engineering',
    year: 'Senior',
  },
  {
    name: 'Maya Thompson',
    role: 'Outreach Coordinator',
    major: 'Computer Science',
    year: 'Sophomore',
  },
  {
    name: 'Priya Sharma',
    role: 'Treasurer',
    major: 'Computer Engineering',
    year: 'Junior',
  },
];

const stats = [
  { number: '2018', label: 'Founded' },
  { number: '500+', label: 'Members' },
  { number: '50+', label: 'Annual Events' },
  { number: '100+', label: 'Partner Companies' },
];

const achievements = [
  'Winner of FAU Student Organization of the Year 2025',
  'Hosted the largest student-run tech conference in South Florida',
  'Placed 100+ members in internships at top tech companies',
  'Awarded over $200,000 in scholarships to members',
  'Established partnerships with Google, Meta, Microsoft, and Amazon',
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn more about our organization, mission, and the amazing team working to 
            empower women in technology at Florida Atlantic University.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mission.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#003366] mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Women in Computer Science & Engineering (WiCSE) at Florida Atlantic University was 
                founded in 2018 by a group of passionate students who recognized the need for a 
                supportive community for women in tech fields.
              </p>
              <p>
                What started as a small study group has grown into one of the most active student 
                organizations on campus, with over 500 members and partnerships with leading tech 
                companies across the country.
              </p>
              <p>
                Today, we continue to provide mentorship, professional development opportunities, 
                and a welcoming community for all women interested in computer science and engineering 
                at FAU. Our members have gone on to work at companies like Google, Meta, Microsoft, 
                Amazon, and many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-[#003366] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated students leading WiCSE this year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-24 h-24 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-1">{member.name}</h3>
                <p className="text-[#CC0000] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.major}</p>
                <p className="text-gray-500 text-sm">{member.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Achievements</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-[#CC0000] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 pt-1">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#003366] mb-4">Partner With Us</h2>
                <p className="text-gray-600 mb-6">
                  Interested in sponsoring events, recruiting our talented members, or collaborating 
                  with WiCSE? We'd love to hear from you!
                </p>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:wicse@fau.edu" className="hover:text-[#CC0000] transition-colors">
                    wicse@fau.edu
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#003366] mb-4">Our Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center font-semibold text-gray-700">
                    Google
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center font-semibold text-gray-700">
                    Meta
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center font-semibold text-gray-700">
                    Microsoft
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center font-semibold text-gray-700">
                    Amazon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#003366] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Become part of a supportive network of women in tech at FAU. All majors and experience 
            levels are welcome!
          </p>
          <button className="px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </main>
  );
}
