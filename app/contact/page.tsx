import { Mail, MapPin, Calendar, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Join our community and start making connections that will shape your future in tech. 
            We welcome all women interested in computer science and engineering!
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions or want to learn more about WiCSE? Fill out the form and we'll 
                get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="jane.doe@fau.edu"
                  />
                </div>

                <div>
                  <label htmlFor="major" className="block text-sm font-semibold text-gray-700 mb-2">
                    Major
                  </label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="Computer Science"
                  />
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-semibold text-gray-700 mb-2">
                    Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  >
                    <option value="">Select your year</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="graduate">Graduate Student</option>
                    <option value="alumni">Alumni</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in... *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="membership">Becoming a Member</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="events">Attending Events</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="Tell us more about yourself and how you'd like to get involved..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#003366] mb-1">Email</h3>
                    <a href="mailto:wicse@fau.edu" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                      wicse@fau.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#003366] mb-1">Location</h3>
                    <p className="text-gray-600">
                      Engineering Building, Room 36<br />
                      777 Glades Road<br />
                      Boca Raton, FL 33431
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#003366] mb-1">Meetings</h3>
                    <p className="text-gray-600">
                      General Meetings: Wednesdays at 6:00 PM<br />
                      Engineering Building, Room 201
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Thursday:</span>
                    <span className="font-semibold">2:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday:</span>
                    <span className="font-semibold">1:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#003366] rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Join Our Mailing List</h3>
                <p className="text-blue-100 mb-4">
                  Stay updated on events, opportunities, and announcements.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#CC0000]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-[#003366] mb-2">
                Do I need to be a CS/CE major to join?
              </h3>
              <p className="text-gray-600">
                No! We welcome all women interested in technology, regardless of major. Many of our 
                members come from diverse backgrounds including business, design, and other fields.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-[#003366] mb-2">
                Is there a membership fee?
              </h3>
              <p className="text-gray-600">
                No, membership is completely free! We want to make our community accessible to everyone.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-[#003366] mb-2">
                How do I get involved?
              </h3>
              <p className="text-gray-600">
                Simply fill out the contact form above or attend one of our general meetings on 
                Wednesdays at 6:00 PM. We'd love to meet you!
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-[#003366] mb-2">
                Can I join if I'm a graduate student or alumni?
              </h3>
              <p className="text-gray-600">
                Absolutely! We have programs for graduate students and love having alumni stay 
                connected as mentors and guest speakers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
