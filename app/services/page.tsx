import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const services = [
  {
    icon: "🧘",
    title: "Yoga Classes",
    description:
      "Transform your body and mind with expert-led yoga classes for every level. Our certified instructors guide you through a personalized journey toward greater strength, flexibility, balance, and lasting well-being.",
       image: "/images/service.jpg",
  },
  {
    icon: "🧠",
    title: "Meditation",
    description:
      "Reduce stress and improve focus through guided meditation sessions.",
       image: "/images/service2.png",
  },
  {
    icon: "💪",
    title: "Personal Training",
    description:
      "Get customized yoga plans designed according to your fitness goals.",
       image: "/images/yoga6.jpeg",
  },
  {
    icon: "🥗",
    title: "Nutrition Guidance",
    description:
      "Healthy diet plans prepared by wellness and nutrition experts.",
       image: "/images/homeimg.jpeg",
  },
  {
    icon: "🌿",
    title: "Therapeutic Yoga",
    description:
      "Special yoga sessions for back pain, stress relief, and flexibility.",
       image: "/images/service4.png",
  },
  {
    icon: "💻",
    title: "Online Classes",
    description:
      "Attend live yoga sessions from anywhere with expert trainers.",
       image: "/images/service3.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="bg-gray-50">
<Navbar />
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F3F9F2] to-[#DDF5E5] py-27">

  {/* Background Glow */}
  <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-300/40 blur-[120px]"></div>
  <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-300/30 blur-[120px]"></div>
  <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-200/30 blur-[140px]"></div>

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#15803d_1px,transparent_1px)] [background-size:32px_32px]"></div>

  <div className="relative max-w-7xl mx-auto px-6 text-center">

    {/* Badge */}
    <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 backdrop-blur-md px-5 py-2 text-sm font-medium text-green-700 shadow-sm mb-8">
      🧘 Professional Yoga Services
    </span>

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 mb-6">
      Discover Our
      <span className="block text-green-700">
        Wellness Services
      </span>
    </h1>

    {/* Description */}
    <p className="text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto mb-10">
      From yoga classes and guided meditation to wellness coaching and
      personalized fitness programs, our expert instructors are here to help
      you build strength, reduce stress, and create a healthier lifestyle.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-5">

      <a
        href="#services"
        className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-800 hover:-translate-y-1"
      >
        Explore Services →
      </a>

      <a
        href="/contact"
        className="rounded-full border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition-all duration-300 hover:bg-green-700 hover:text-white"
      >
        Book a Session
      </a>

    </div>

  </div>

</section>

       <section className="py-28 bg-[#FAF8F4]">

    <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
                Our Services
            </span>

            <h2 className="text-5xl font-bold mt-4 text-gray-900">
                Experience Wellness
                <span className="block text-green-700">
                    Like Never Before
                </span>
            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
                Every service is thoughtfully designed to nurture your body,
                calm your mind, and transform your everyday lifestyle.
            </p>

        </div>

        <div className="space-y-32">

            {services.map((service, index) => (

                <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-16 items-center ${
                        index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                >

                    {/* Image */}

                    <div className="relative">

                        <img
                            src={service.image}
                            alt={service.title}
                            className="rounded-[40px] h-[420px] w-full object-cover shadow-2xl"
                        />

                        <div className="absolute -bottom-8 -right-8 w-15 h-15 rounded-full bg-orange-400"></div>

                    </div>

                    {/* Content */}

                    <div>

                        <h1 className="text-8xl font-black text-green-200">
                            0{index + 1}
                        </h1>

                        <h3 className="text-4xl font-bold text-gray-900 mt-3">
                            {service.title}
                        </h3>

                        <div className="w-24 h-1 bg-orange-500 rounded-full my-6"></div>

                        <p className="text-lg text-gray-600 leading-9">

                            {service.description}

                        </p>

                        <button className="mt-10 group flex items-center gap-3 text-green-700 font-semibold text-lg">

                            Learn More

                            <span className="group-hover:translate-x-2 transition">
                                →
                            </span>

                        </button>

                    </div>

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