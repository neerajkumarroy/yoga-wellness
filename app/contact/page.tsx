import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F3F9F2] to-[#DDF5E5] py-33">

  {/* Background Effects */}
  <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-200/40 blur-[120px]"></div>
  <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-emerald-300/30 blur-[100px]"></div>
  <div className="absolute -bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-200/40 blur-[120px]"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="max-w-4xl mx-auto text-center">

      {/* Badge */}
      <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 backdrop-blur-md px-5 py-2 text-sm font-medium text-green-700 shadow-sm mb-8">
        🌿 Get In Touch
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 mb-6">
        Contact
        <span className="block text-green-700">
          Yoga Wellness
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto mb-12">
        We'd love to hear from you. Whether you have questions about yoga
        classes, memberships, meditation sessions, or wellness programs,
        our experienced team is here to help you begin a healthier,
        happier, and more balanced life.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">

        <button className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-800 hover:-translate-y-1">
          Book Free Trial
        </button>

        <button className="rounded-full border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition-all duration-300 hover:bg-green-700 hover:text-white">
          Contact Our Team
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-lg p-6 border border-green-100">
          <h3 className="text-4xl font-bold text-green-700">5000+</h3>
          <p className="mt-2 text-gray-600">Happy Students</p>
        </div>

        <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-lg p-6 border border-green-100">
          <h3 className="text-4xl font-bold text-green-700">10+</h3>
          <p className="mt-2 text-gray-600">Years Experience</p>
        </div>

        <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-lg p-6 border border-green-100">
          <h3 className="text-4xl font-bold text-green-700">100%</h3>
          <p className="mt-2 text-gray-600">Personal Guidance</p>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* Contact Info */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Address
              </h3>
              <p className="text-gray-600">
                123 Wellness Street
                <br />
                IT Park,Shastradhara Road, Dehradun (248001)
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Phone
              </h3>
              <p className="text-gray-600">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Email
              </h3>
              <p className="text-gray-600">
                support@yogawellness.com
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🕒</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Working Hours
              </h3>
              <p className="text-gray-600">
                Mon - Sat
                <br />
                6:00 AM - 8:00 PM
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="bg-white rounded-3xl shadow-lg p-10">

              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Business Info */}

            <div>

              <div className="bg-white rounded-3xl shadow-lg p-10 mb-8">

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Visit Our Studio
                </h2>

                <p className="text-gray-600 leading-8 mb-6">
                  Join us for expert-led yoga sessions, meditation classes,
                  wellness workshops, and personalized fitness guidance.
                </p>

                <div className="space-y-4 text-gray-700">

                  <p>📍  Shastradhara Road,Dehradun, IT Park (248001), India</p>

                  <p>📞 +91 98765 43210</p>

                  <p>📧 support@yogawellness.com</p>

                  <p>🕒 Monday - Saturday</p>

                </div>

              </div>

              {/* Google Map */}

              <div className="rounded-3xl overflow-hidden shadow-lg">

                <iframe
                  src="https://www.google.com/maps?q=Shastradhara%20Road%2C%20IT%20Park%2C%20Dehradun&output=embed"
                  width="100%"
                  height="350"
                  loading="lazy"
                  className="border-0"
                ></iframe>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-100">

        <div className="max-w-5xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-14">

            <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
              FAQ
            </span>

            <h2 className="text-5xl font-bold text-gray-900 mt-5">
              Frequently Asked
              <span className="text-green-600"> Questions</span>
            </h2>

            <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
              Find answers to the most commonly asked questions about our yoga
              classes, memberships, and wellness programs.
            </p>

          </div>

          {/* FAQ Cards */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  🧘
                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Do I need previous yoga experience?
                  </h3>

                  <p className="text-gray-600 leading-7">
                    No. Our yoga classes are designed for beginners, intermediate,
                    and advanced practitioners. Our instructors guide you according
                    to your experience level.
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  💻
                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Do you offer online yoga classes?
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Yes! We offer both online live sessions and offline studio
                    classes so you can practice yoga anytime, anywhere.
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  📅
                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    How can I book a class?
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Booking is easy! Simply fill out the contact form, call us
                    directly, or register through our website to reserve your spot.
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  🕒
                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    What are your class timings?
                  </h3>

                  <p className="text-gray-600 leading-7">
                    We offer flexible morning and evening batches from Monday to
                    Saturday to suit your schedule.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <div className="mt-[-100px]"><Footer /></div>
    </main>
  );
}