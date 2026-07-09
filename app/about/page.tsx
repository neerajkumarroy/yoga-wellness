import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Yoga Wellness
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-8">
            Helping people achieve a healthier body, peaceful mind, and balanced
            lifestyle through yoga, meditation, and holistic wellness.
          </p>
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