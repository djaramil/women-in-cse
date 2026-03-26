import { BookOpen, Code, Video, FileText, ExternalLink, Download } from 'lucide-react';

const categories = [
  {
    title: 'Programming & Development',
    icon: Code,
    resources: [
      {
        name: 'Python for Beginners',
        type: 'Tutorial Series',
        link: '#',
        description: 'Comprehensive guide to learning Python from scratch',
      },
      {
        name: 'Web Development Bootcamp',
        type: 'Course',
        link: '#',
        description: 'Full-stack web development with React and Node.js',
      },
      {
        name: 'Data Structures & Algorithms',
        type: 'Study Guide',
        link: '#',
        description: 'Essential concepts for technical interviews',
      },
    ],
  },
  {
    title: 'Career Development',
    icon: FileText,
    resources: [
      {
        name: 'Resume Template for Tech',
        type: 'Template',
        link: '#',
        description: 'ATS-friendly resume template for software engineers',
      },
      {
        name: 'Interview Preparation Guide',
        type: 'Guide',
        link: '#',
        description: 'Behavioral and technical interview tips',
      },
      {
        name: 'Salary Negotiation Tips',
        type: 'Article',
        link: '#',
        description: 'How to negotiate your tech job offer',
      },
    ],
  },
  {
    title: 'Learning Platforms',
    icon: Video,
    resources: [
      {
        name: 'LeetCode',
        type: 'Platform',
        link: 'https://leetcode.com',
        description: 'Practice coding problems and algorithms',
      },
      {
        name: 'Coursera',
        type: 'Platform',
        link: 'https://coursera.org',
        description: 'Online courses from top universities',
      },
      {
        name: 'freeCodeCamp',
        type: 'Platform',
        link: 'https://freecodecamp.org',
        description: 'Free coding bootcamp and certifications',
      },
    ],
  },
  {
    title: 'Study Materials',
    icon: BookOpen,
    resources: [
      {
        name: 'CS Fundamentals Cheat Sheet',
        type: 'PDF',
        link: '#',
        description: 'Quick reference for core CS concepts',
      },
      {
        name: 'System Design Primer',
        type: 'Guide',
        link: '#',
        description: 'Learn how to design large-scale systems',
      },
      {
        name: 'Git & GitHub Tutorial',
        type: 'Tutorial',
        link: '#',
        description: 'Version control essentials for developers',
      },
    ],
  },
];

const recommendedBooks = [
  {
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    description: 'Essential guide for technical interview preparation',
  },
  {
    title: 'Lean In',
    author: 'Sheryl Sandberg',
    description: 'Women, work, and the will to lead',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    description: 'Your journey to mastery in software development',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    description: 'The big ideas behind reliable, scalable systems',
  },
];

export default function ResourcesPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Access curated learning materials, career guides, and tools to help you 
            succeed in your computer science and engineering journey.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#003366]">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.resources.map((resource, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-[#003366] flex-1">
                            {resource.name}
                          </h3>
                          <ExternalLink className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                        </div>
                        <span className="inline-block px-3 py-1 bg-[#003366] text-white text-xs font-semibold rounded-full mb-3">
                          {resource.type}
                        </span>
                        <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                        <a
                          href={resource.link}
                          className="inline-flex items-center text-[#CC0000] font-semibold hover:text-[#A00000] transition-colors"
                        >
                          Access Resource
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Recommended Books</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential reading for aspiring tech professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedBooks.map((book, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-[#CC0000] rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#003366] mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                <p className="text-sm text-gray-600">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#003366] to-[#004080] rounded-lg p-8 md:p-12 text-white text-center">
            <Download className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Download Our Resource Pack</h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Get instant access to our curated collection of templates, guides, and study materials.
            </p>
            <button className="px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors">
              Download Now (Free)
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">
              Have a Resource to Share?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Know of a great tutorial, course, or tool that would benefit our community? 
              Let us know and we'll add it to our collection!
            </p>
            <button className="px-8 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#004080] transition-colors">
              Submit Resource
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
