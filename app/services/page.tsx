import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const services = [
  {
    icon: "🧘",
    title: "Yoga Classes",
    description:
      "Join beginner to advanced yoga classes guided by certified instructors.",
  },
  {
    icon: "🧠",
    title: "Meditation",
    description:
      "Reduce stress and improve focus through guided meditation sessions.",
  },
  {
    icon: "💪",
    title: "Personal Training",
    description:
      "Get customized yoga plans designed according to your fitness goals.",
  },
  {
    icon: "🥗",
    title: "Nutrition Guidance",
    description:
      "Healthy diet plans prepared by wellness and nutrition experts.",
  },
  {
    icon: "🌿",
    title: "Therapeutic Yoga",
    description:
      "Special yoga sessions for back pain, stress relief, and flexibility.",
  },
  {
    icon: "💻",
    title: "Online Classes",
    description:
      "Attend live yoga sessions from anywhere with expert trainers.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="bg-gray-50">
<Navbar />
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20 mt-22">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h1 className="text-5xl font-bold mb-5">
              Our Services
            </h1>

            <p className="text-lg max-w-3xl mx-auto">
              Discover professional yoga, meditation, wellness, and fitness
              services designed to help you live a healthier and happier life.
            </p>

          </div>
        </section>

        {/* Services */}

        <section className="py-20">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
                >
                  <div className="text-5xl mb-5">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {service.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Why Choose Us */}

        <section className="bg-white py-20">

          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Why Choose Yoga Wellness?
            </h2>

            <div className="grid md:grid-cols-4 gap-8">

              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  Certified Trainers
                </h3>
                <p className="text-gray-600">
                  Learn from experienced yoga professionals.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  Flexible Schedule
                </h3>
                <p className="text-gray-600">
                  Morning, evening, and weekend classes available.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  Personalized Care
                </h3>
                <p className="text-gray-600">
                  Customized programs based on your goals.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🌎</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  Online & Offline
                </h3>
                <p className="text-gray-600">
                  Learn from home or visit our wellness center.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="bg-green-600 text-white py-20">

          <div className="max-w-5xl mx-auto text-center px-6">

            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your Wellness Journey?
            </h2>

            <p className="text-lg mb-8">
              Join our yoga community and experience better health, peace,
              flexibility, and mindfulness.
            </p>

            <Link
              href="/pricing"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              View Membership Plans
            </Link>

          </div>

        </section>

      </main>

      <div className="mt-[-100px]"><Footer /></div>
    </>
  );
}