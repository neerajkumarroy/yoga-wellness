import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />
      {/* Hero Section */}
     <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F3F9F2] to-[#DDF5E5] flex items-center justify-center pt-40">

  {/* Background Glow */}
  <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-green-300/40 blur-[120px]" />

  <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-emerald-300/30 blur-[120px]" />

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lime-200/20 blur-[150px]" />

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#15803d_1px,transparent_1px)] [background-size:35px_35px]" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

    {/* Badge */}
    <span className="inline-block px-6 py-2 rounded-full border border-green-200 bg-white/70 backdrop-blur-md text-green-700 font-semibold mb-8 shadow-sm">
      🌿 Welcome to Yoga Wellness
    </span>

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-gray-900">

      About

      <span className="block bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
        Yoga Wellness
      </span>

    </h1>

    {/* Description */}
    <p className="mt-8 max-w-4xl mx-auto text-lg md:text-2xl leading-9 text-gray-600">

      Helping people achieve a healthier body,
      peaceful mind and balanced lifestyle through

      <span className="text-green-700 font-semibold"> Yoga</span>,

      <span className="text-emerald-600 font-semibold"> Meditation</span>,

      and holistic wellness practices.

    </p>

    {/* Buttons */}
    <div className="mt-12 flex flex-wrap justify-center gap-6">

      <a
        href="/services"
        className="rounded-full bg-green-700 px-10 py-5 font-semibold text-white shadow-xl hover:bg-green-800 hover:-translate-y-1 transition-all duration-300"
      >
        Explore Services →
      </a>

      <a
        href="/contact"
        className="rounded-full border-2 border-green-700 px-10 py-5 font-semibold text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300"
      >
        Contact Us
      </a>

    </div>

    {/* Stats */}
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-green-100 p-6 shadow-lg">
        <h3 className="text-4xl font-bold text-green-700">5000+</h3>
        <p className="mt-2 text-gray-600">Happy Students</p>
      </div>

      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-green-100 p-6 shadow-lg">
        <h3 className="text-4xl font-bold text-emerald-600">150+</h3>
        <p className="mt-2 text-gray-600">Yoga Sessions</p>
      </div>

      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-green-100 p-6 shadow-lg">
        <h3 className="text-4xl font-bold text-green-700">10+</h3>
        <p className="mt-2 text-gray-600">Expert Trainers</p>
      </div>

      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-green-100 p-6 shadow-lg">
        <h3 className="text-4xl font-bold text-emerald-600">4.9★</h3>
        <p className="mt-2 text-gray-600">Average Rating</p>
      </div>

    </div>

  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

    <div className="w-8 h-14 border-2 border-green-700 rounded-full flex justify-center">

      <div className="w-2 h-3 bg-green-700 rounded-full mt-2 animate-pulse" />

    </div>

  </div>

</section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/images/homeimg.jpeg"
              alt="Yoga Wellness"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Yoga Wellness was created with a simple vision—to make yoga,
              meditation, and wellness accessible to everyone. Whether you're a
              beginner or an experienced practitioner, our platform offers
              expert guidance to help you grow physically, mentally, and
              spiritually.
            </p>

            <p className="text-gray-600 leading-8">
              We believe wellness is not just about exercise. It is about
              creating healthy habits, improving mental clarity, reducing
              stress, and living a happier life every day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🎯</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              To inspire healthy living by providing quality yoga education,
              personalized wellness programs, and expert guidance for every
              individual.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🌿</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              To become a trusted global wellness platform that transforms
              lives through yoga, mindfulness, and holistic health practices.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-gray-800 text-center mb-14">
            Why Choose Yoga Wellness?
          </h2>

          <div className="grid md:grid-cols-2 text-gray-600 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Expert Trainers",
                icon: "🧘",
                text: "Learn from certified yoga instructors."
              },
              {
                title: "Online Classes",
                icon: "💻",
                text: "Practice anytime from anywhere."
              },
              {
                title: "Personal Guidance",
                icon: "❤️",
                text: "Customized wellness plans for everyone."
              },
              {
                title: "Healthy Community",
                icon: "🤝",
                text: "Join thousands of wellness enthusiasts."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-green-600 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Wellness
              </h3>

              <p>
                Building healthier lifestyles through yoga and mindfulness.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Trust
              </h3>

              <p>
                Providing authentic knowledge with experienced professionals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Growth
              </h3>

              <p>
                Helping every individual reach their highest potential.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* CTA */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Begin Your Wellness Journey Today
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Join our yoga community and experience a healthier, happier, and
            more balanced lifestyle.
          </p>

          <a
            href="/courses"
            className="inline-block text-gary-800 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition"
          >
            Explore Courses
          </a>

        </div>

      </section>
  <Footer />
    </main>
  );
}