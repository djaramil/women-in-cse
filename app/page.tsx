import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, Briefcase, BookOpen, ArrowRight, Target, Heart, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004080] text-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/fau-logo.svg"
                alt="Florida Atlantic University Owls"
                width={150}
                height={150}
                className="drop-shadow-2xl"
                priority
                unoptimized
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Women in Computer Science & Engineering
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Florida Atlantic University
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-50">
              Empowering the next generation of women leaders in technology through 
              mentorship, community, and professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors"
              >
                View Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#003366] mb-2">500+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#003366] mb-2">50+</div>
              <div className="text-gray-600">Events Annually</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#003366] mb-2">100+</div>
              <div className="text-gray-600">Mentorship Connections</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover opportunities to grow, connect, and succeed in the tech industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/events" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#CC0000] transition-colors">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">Events</h3>
                <p className="text-gray-600">
                  Workshops, tech talks, networking sessions, and conferences throughout the year.
                </p>
              </div>
            </Link>

            <Link href="/mentorship" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#CC0000] transition-colors">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">Mentorship</h3>
                <p className="text-gray-600">
                  Connect with experienced professionals and peers for guidance and support.
                </p>
              </div>
            </Link>

            <Link href="/opportunities" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#CC0000] transition-colors">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">Opportunities</h3>
                <p className="text-gray-600">
                  Internships, scholarships, research positions, and career opportunities.
                </p>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#CC0000] transition-colors">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">Resources</h3>
                <p className="text-gray-600">
                  Study materials, career guides, and technical resources to help you succeed.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Empower</h3>
              <p className="text-gray-600">
                Build confidence and skills to excel in computer science and engineering fields.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Connect</h3>
              <p className="text-gray-600">
                Foster a supportive community of women in tech at FAU and beyond.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Inspire</h3>
              <p className="text-gray-600">
                Showcase role models and create pathways for future women leaders in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#003366] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our community and start making connections that will shape your future in tech.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#A00000] transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
