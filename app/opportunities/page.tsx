import { Briefcase, GraduationCap, Award, Building2, MapPin, Clock, DollarSign } from 'lucide-react';

const internships = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'Summer 2026',
    salary: '$8,000/month',
    deadline: 'April 30, 2026',
    description: 'Work on cutting-edge projects with experienced engineers. Build scalable systems used by millions.',
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'Meta',
    location: 'Menlo Park, CA',
    type: 'Summer 2026',
    salary: '$8,500/month',
    deadline: 'May 5, 2026',
    description: 'Analyze large datasets and build machine learning models to improve user experience.',
  },
  {
    id: 3,
    title: 'Cybersecurity Intern',
    company: 'Microsoft',
    location: 'Redmond, WA',
    type: 'Summer 2026',
    salary: '$7,500/month',
    deadline: 'April 25, 2026',
    description: 'Help protect Microsoft products and services from security threats.',
  },
  {
    id: 4,
    title: 'UX Design Intern',
    company: 'Apple',
    location: 'Cupertino, CA',
    type: 'Summer 2026',
    salary: '$7,000/month',
    deadline: 'May 10, 2026',
    description: 'Design intuitive user interfaces for next-generation Apple products.',
  },
];

const scholarships = [
  {
    id: 1,
    title: 'Grace Hopper Scholarship',
    amount: '$5,000',
    deadline: 'June 1, 2026',
    eligibility: 'Women in CS/CE, GPA 3.0+',
    description: 'Annual scholarship for women pursuing degrees in computer science or computer engineering.',
  },
  {
    id: 2,
    title: 'Women in Technology Scholarship',
    amount: '$3,000',
    deadline: 'May 15, 2026',
    eligibility: 'Undergraduate women in tech',
    description: 'Supporting women who demonstrate excellence in technology and leadership.',
  },
  {
    id: 3,
    title: 'FAU Engineering Excellence Award',
    amount: '$2,500',
    deadline: 'April 20, 2026',
    eligibility: 'FAU Engineering students',
    description: 'Merit-based scholarship for outstanding engineering students at FAU.',
  },
];

const research = [
  {
    id: 1,
    title: 'AI Research Assistant',
    professor: 'Dr. Sarah Johnson',
    department: 'Computer Science',
    commitment: '10-15 hours/week',
    description: 'Assist with research on natural language processing and machine learning applications.',
  },
  {
    id: 2,
    title: 'Cybersecurity Research Position',
    professor: 'Dr. Michael Chen',
    department: 'Computer Engineering',
    commitment: '12-20 hours/week',
    description: 'Research network security vulnerabilities and develop defensive strategies.',
  },
  {
    id: 3,
    title: 'Human-Computer Interaction Study',
    professor: 'Dr. Emily Rodriguez',
    department: 'Computer Science',
    commitment: '8-10 hours/week',
    description: 'Study user behavior and design more intuitive software interfaces.',
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Opportunities</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Discover internships, scholarships, research positions, and career opportunities 
            to advance your journey in computer science and engineering.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-2">Internships</h2>
              <p className="text-gray-600">Gain real-world experience at top tech companies</p>
            </div>
            <button className="px-6 py-2 border border-[#003366] text-[#003366] font-semibold rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
              Filter
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#003366] mb-1">{internship.title}</h3>
                    <div className="flex items-center text-gray-700 font-semibold mb-2">
                      <Building2 className="h-5 w-5 mr-2" />
                      {internship.company}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{internship.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{internship.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm">{internship.salary}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{internship.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Deadline: {internship.deadline}</span>
                  <button className="px-4 py-2 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#004080] transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-2">Scholarships</h2>
            <p className="text-gray-600">Financial support for your education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((scholarship) => (
              <div
                key={scholarship.id}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-[#CC0000] rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{scholarship.title}</h3>
                <div className="text-2xl font-bold text-[#CC0000] mb-3">{scholarship.amount}</div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-700">Deadline:</span>
                    <span className="text-gray-600 ml-1">{scholarship.deadline}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-700">Eligibility:</span>
                    <span className="text-gray-600 ml-1">{scholarship.eligibility}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{scholarship.description}</p>

                <button className="w-full px-4 py-2 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#004080] transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-2">Research Opportunities</h2>
            <p className="text-gray-600">Work alongside faculty on cutting-edge research</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.map((position) => (
              <div
                key={position.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#003366] mb-2">{position.title}</h3>
                
                <div className="space-y-1 mb-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Professor:</span>
                    <span className="text-gray-600 ml-1">{position.professor}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Department:</span>
                    <span className="text-gray-600 ml-1">{position.department}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Time:</span>
                    <span className="text-gray-600 ml-1">{position.commitment}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{position.description}</p>

                <button className="w-full px-4 py-2 border border-[#003366] text-[#003366] font-semibold rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
                  Contact Professor
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-md text-center">
            <Briefcase className="h-16 w-16 text-[#003366] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Have an Opportunity to Share?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              If you know of internships, scholarships, or research positions that would benefit 
              our community, we'd love to hear about them!
            </p>
            <button className="px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors">
              Submit Opportunity
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#003366] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Internship Placements</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$500K+</div>
              <div className="text-blue-100">Scholarships Awarded</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Research Projects</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
