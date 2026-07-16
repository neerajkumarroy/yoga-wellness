import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      duration: "/month",
      popular: false,
      description: "Perfect for beginners starting their yoga journey.",
      features: [
        "3 Live Classes / Week",
        "Recorded Sessions",
        "Basic Meditation",
        "Community Support",
        "Email Support",
      ],
    },
    {
      name: "Premium",
      price: "₹1,999",
      duration: "/month",
      popular: true,
      description: "Our most popular plan for regular practitioners.",
      features: [
        "Unlimited Live Classes",
        "Recorded Sessions",
        "Personal Trainer",
        "Diet Consultation",
        "Meditation Classes",
        "Priority Support",
      ],
    },
    {
      name: "Professional",
      price: "₹3,999",
      duration: "/month",
      popular: false,
      description: "Complete wellness experience with personal guidance.",
      features: [
        "Everything in Premium",
        "1-on-1 Yoga Sessions",
        "Personal Diet Plan",
        "Monthly Health Report",
        "WhatsApp Support",
        "Certificate Programs",
      ],
    },
  ];

  return (
    <main className="bg-gray-50">
<Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F3F9F2] to-[#DDF5E5] py-50 ">

  {/* Background Glow */}
  <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-300/40 blur-[120px]"></div>
  <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-300/30 blur-[120px]"></div>
  <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-200/30 blur-[140px]"></div>

  {/* Pattern */}
  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#15803d_1px,transparent_1px)] [background-size:32px_32px]"></div>

  <div className="relative max-w-7xl mx-auto px-6 text-center">

    {/* Badge */}
    <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-5 py-2 text-sm font-semibold text-green-700 shadow-md mb-8">
      💚 Flexible Membership Plans
    </span>

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
      Find the Perfect
      <span className="block text-green-700">
        Wellness Plan
      </span>
    </h1>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-8 mb-12">
      Choose a membership that matches your goals, schedule, and lifestyle.
      Whether you're just beginning your yoga journey or looking to deepen
      your practice, we have a plan designed for you.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">

      <button className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:bg-green-800 hover:-translate-y-1">
        View Memberships
      </button>

      <button className="rounded-full border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition-all duration-300 hover:bg-green-700 hover:text-white">
        Book Free Trial
      </button>

    </div>   

    </div>
</section>

      {/* Pricing Cards */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {plans.map((plan, index) => (

              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl p-8 transition hover:scale-105 ${
                  plan.popular
                    ? "border-4 border-green-600"
                    : "border border-gray-200"
                }`}
              >

                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}

                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  {plan.name}
                </h2>

                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-green-600">
                    {plan.price}
                  </span>

                  <span className="text-gray-500">
                    {plan.duration}
                  </span>
                </div>

                <ul className="space-y-4 mb-10">

                  {plan.features.map((feature, i) => (

                    <li key={i} className="flex items-center gap-3">

                      <span className="text-green-600 font-bold">
                        ✓
                      </span>

                      <span className="text-gray-700">
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition">
                  Choose Plan
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}      
     <section className="py-24 bg-gradient-to-br from-green-50 to-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block px-5 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
        Membership Benefits
      </span>

      <h2 className="mt-6 text-5xl font-bold text-gray-900">
        Why Choose Our
        <span className="text-green-600"> Yoga Membership?</span>
      </h2>

      <p className="mt-5 text-lg text-gray-600 leading-8">
        Enjoy unlimited access to expert-led yoga classes, wellness guidance,
        and a supportive community dedicated to helping you achieve a healthier,
        happier lifestyle.
      </p>

    </div>

    {/* Features */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl">
          🧘
        </div>

        <h3 className="text-xl font-bold mt-6 text-orange-500">
          Unlimited Classes
        </h3>

        <p className="mt-3 text-gray-600">
          Attend yoga sessions every day without any restrictions.
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl">
          👨‍🏫
        </div>

        <h3 className="text-xl font-bold mt-6 text-orange-500">
          Expert Trainers
        </h3>

        <p className="mt-3 text-gray-600">
          Learn from certified yoga instructors with years of experience.
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl">
          📱
        </div>

        <h3 className="text-xl font-bold mt-6 text-orange-500">
          Online & Offline
        </h3>

        <p className="mt-3 text-gray-600">
          Practice from home or visit our yoga studio anytime.
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl">
          ❤️
        </div>

        <h3 className="text-xl font-bold mt-6 text-orange-500">
          Personal Guidance
        </h3>

        <p className="mt-3 text-gray-600">
          Receive personalized wellness advice and yoga recommendations.
        </p>

      </div>

    </div>

  </div>

</section>
<div className="mt-[-100px]"><Footer /></div>
    </main>
  );
}