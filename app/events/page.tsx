import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Tech Talk: Women in AI',
    date: 'April 15, 2026',
    time: '6:00 PM - 8:00 PM',
    location: 'Engineering Building, Room 201',
    description: 'Join us for an inspiring talk featuring women leaders in artificial intelligence and machine learning.',
    attendees: 45,
    category: 'Tech Talk',
  },
  {
    id: 2,
    title: 'Resume Workshop',
    date: 'April 22, 2026',
    time: '5:00 PM - 7:00 PM',
    location: 'Career Center',
    description: 'Get your resume reviewed by industry professionals and learn best practices for tech resumes.',
    attendees: 30,
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'Networking Night',
    date: 'May 5, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'Student Union Ballroom',
    description: 'Connect with fellow students, alumni, and tech professionals in a relaxed networking environment.',
    attendees: 80,
    category: 'Networking',
  },
  {
    id: 4,
    title: 'Hackathon 2026',
    date: 'May 18-19, 2026',
    time: '9:00 AM - 9:00 PM',
    location: 'Innovation Lab',
    description: '24-hour hackathon focused on solving real-world problems. Form teams and build amazing projects!',
    attendees: 120,
    category: 'Hackathon',
  },
];

const pastEvents = [
  {
    id: 5,
    title: 'Introduction to Cybersecurity',
    date: 'March 10, 2026',
    category: 'Workshop',
  },
  {
    id: 6,
    title: 'Career Fair Prep Session',
    date: 'February 28, 2026',
    category: 'Workshop',
  },
  {
    id: 7,
    title: 'Women in Tech Panel',
    date: 'February 15, 2026',
    category: 'Panel',
  },
];

export default function EventsPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Join us for workshops, tech talks, networking events, and more. Connect with fellow students 
            and industry professionals while building your skills.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#003366]">Upcoming Events</h2>
            <button className="px-6 py-2 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors">
              Add to Calendar
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#003366] text-white text-sm font-semibold rounded-full mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#003366]">{event.title}</h3>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{event.description}</p>

                <button className="w-full px-4 py-2 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#004080] transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003366] mb-8">Past Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full mb-2">
                  {event.category}
                </span>
                <h3 className="text-lg font-bold text-[#003366] mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-2 border border-[#003366] text-[#003366] font-semibold rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
              View All Past Events
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#003366] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Have an idea for a workshop, talk, or event? We'd love to hear from you!
          </p>
          <button className="px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors">
            Submit Event Proposal
          </button>
        </div>
      </section>
    </main>
  );
}
