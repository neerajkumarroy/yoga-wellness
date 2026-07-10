import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center bg-cream dark:bg-dark">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🧘 5000+ Happy Students
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-dark dark:text-cream">
              Discover Inner Peace Through Yoga
            </h1>
            <p className="mt-6 text-lg text-dark/60 dark:text-cream/60 max-w-lg">
              Transform your body, calm your mind, and improve your lifestyle with personalized yoga sessions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="rounded-full bg-primary text-white px-7 py-3.5 font-medium shadow-premium hover:bg-primary/90 transition-colors"
              >
                Book Free Trial
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-primary text-primary px-7 py-3.5 font-medium hover:bg-primary/5 transition-colors"
              >
                Explore Classes
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="font-heading text-3xl text-primary">5000+</p>
                <p className="text-sm text-dark/50 dark:text-cream/50">Students</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-primary">10+</p>
                <p className="text-sm text-dark/50 dark:text-cream/50">Years Experience</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-primary">4.9</p>
                <p className="text-sm text-dark/50 dark:text-cream/50">Rating</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-premium mt-20">
        <img
       src="/images/mainhome.png"
        alt="Yoga Wellness"
       className="w-full h-full object-cover"
        />
      </div>
        </div>
      </main>
      {/* ----------------------------------------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}

      <div>

        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          🌿 Transform Your Lifestyle
        </span>

        <h2 className="text-5xl font-bold text-gray-900 mt-6 leading-tight">
          More Than Yoga,
          <span className="text-green-600 block">
            A Better Way To Live
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Yoga is not only about physical fitness—it’s about creating harmony
          between your body, mind, and soul. Join thousands of people who have
          transformed their lives through mindful movement and meditation.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              🧘
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Daily Yoga Practice
              </h4>

              <p className="text-gray-500 text-sm">
                Improve flexibility & strength
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              🌿
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Mindfulness
              </h4>

              <p className="text-gray-500 text-sm">
                Reduce stress naturally
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              ❤️
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Healthy Lifestyle
              </h4>

              <p className="text-gray-500 text-sm">
                Build lifelong healthy habits
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              😌
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Inner Peace
              </h4>

              <p className="text-gray-500 text-sm">
                Balance your body and mind
              </p>
            </div>
          </div>

        </div>

        <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition">
          Start Your Journey →
        </button>

      </div>

      {/* Right Side */}

      <div className="relative">

     <div className="absolute -inset-4 bg-green-100 rounded-[60%_40%_55%_45%/45%_55%_45%_55%] blur-2xl opacity-60"></div>

  <img
    src="/images/homeimg.jpeg"
    alt="Yoga Lifestyle"
    className="relative w-full h-[600px] object-cover
    rounded-[60%_40%_55%_45%/45%_55%_45%_55%]
    shadow-2xl border-8 border-white"
  />

        {/* Floating Card */}

        <div className="absolute -bottom-8 left-8 bg-white rounded-3xl shadow-xl p-6">

          <h3 className="text-4xl font-bold text-green-600">
            5000+
          </h3>

          <p className="text-gray-600">
            Happy Students
          </p>

        </div>

        {/* Floating Card */}

        <div className="absolute top-8 -right-6 bg-green-600 text-white rounded-3xl p-6 shadow-xl">

          <h3 className="text-3xl font-bold">
            4.9 ★
          </h3>

          <p>
            Student Rating
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ------------------------------------------------------------------------------------------------------- */}
<section className="py-20 bg-gradient-to-b from-white to-green-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <span className="text-green-600 font-semibold uppercase tracking-wider">
        Testimonials
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
        What Our Students Say
      </h2>

      <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
        Thousands of students have transformed their lives through our yoga
        programs. Here's what they have to say.
      </p>
    </div>

    {/* Testimonials */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="flex mb-5 text-yellow-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 leading-8 mb-8">
          "Joining Yoga Wellness completely changed my lifestyle. My stress
          levels have reduced, and I feel healthier and more energetic every
          day."
        </p>

        <div className="flex items-center gap-4">

          <img
            src="/images/home3.jpg"
            alt="Student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="font-bold text-gray-800">
              Priya Sharma
            </h4>

            <p className="text-gray-500 text-sm">
              Yoga Student
            </p>
          </div>

        </div>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="flex mb-5 text-yellow-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 leading-8 mb-8">
          "The trainers are extremely supportive and professional. I have
          improved my flexibility, posture, and confidence within just three
          months."
        </p>

        <div className="flex items-center gap-4">

          <img
            src="/images/homeimg.jpeg"
            alt="Student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="font-bold text-gray-800">
              Rahul Verma
            </h4>

            <p className="text-gray-500 text-sm">
              Premium Member
            </p>
          </div>

        </div>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="flex mb-5 text-yellow-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 leading-8 mb-8">
          "The online classes are amazing. I can practice yoga from home while
          receiving expert guidance from certified instructors."
        </p>

        <div className="flex items-center gap-4">

          <img
            src="/images/home2.jpeg"
            alt="Student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="font-bold text-gray-800">
              Neha Gupta
            </h4>

            <p className="text-gray-500 text-sm">
              Online Student
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Bottom Stats */}

    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-4xl font-bold text-green-600">
          5000+
        </h3>

        <p className="text-gray-600 mt-2">
          Happy Students
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-green-600">
          4.9★
        </h3>

        <p className="text-gray-600 mt-2">
          Average Rating
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-green-600">
          10+
        </h3>

        <p className="text-gray-600 mt-2">
          Years Experience
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-green-600">
          100%
        </h3>

        <p className="text-gray-600 mt-2">
          Satisfaction
        </p>
      </div>

    </div>

  </div>
</section>
{/* ------------------------------------------------------------------------------------ */}
<section className="py-24 bg-gradient-to-r from-green-600 to-emerald-500">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center text-white mb-14">

      <span className="bg-white/20 px-5 py-2 rounded-full text-sm">
        ✨ Interactive Wellness Guide
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-6">
        What's Your Wellness Goal?
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-green-100 text-lg">
        Choose your goal and discover the perfect yoga program designed
        especially for you.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300">

        <div className="text-6xl mb-5">🧘</div>

        <h3 className="text-2xl font-bold text-gray-800">
          Reduce Stress
        </h3>

        <p className="text-gray-600 mt-4">
          Meditation and breathing techniques to calm your mind.
        </p>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
          Explore
        </button>

      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300">

        <div className="text-6xl mb-5">💪</div>

        <h3 className="text-2xl font-bold text-gray-800">
          Build Strength
        </h3>

        <p className="text-gray-600 mt-4">
          Powerful yoga sessions to improve strength and flexibility.
        </p>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
          Explore
        </button>

      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300">

        <div className="text-6xl mb-5">⚖️</div>

        <h3 className="text-2xl font-bold text-gray-800">
          Weight Loss
        </h3>

        <p className="text-gray-600 mt-4">
          Burn calories with guided yoga and healthy lifestyle plans.
        </p>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
          Explore
        </button>

      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300">

        <div className="text-6xl mb-5">❤️</div>

        <h3 className="text-2xl font-bold text-gray-800">
          Healthy Lifestyle
        </h3>

        <p className="text-gray-600 mt-4">
          Complete wellness plans including yoga, meditation and nutrition.
        </p>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
          Explore
        </button>

      </div>

    </div>

  </div>
</section>
{/* ----------------------------------------------------------------------------- */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="text-green-600 font-semibold uppercase tracking-widest">
        Simple Process
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
        Your Wellness Journey Starts Here
      </h2>

      <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
        Start your yoga journey in just four simple steps and experience a healthier, happier lifestyle.
      </p>
    </div>

    {/* Timeline */}
    <div className="grid md:grid-cols-4 gap-8">

      <div className="relative bg-green-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
          1
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mt-6">
          Register
        </h3>

        <p className="text-gray-600 mt-4">
          Create your free account and join our growing yoga community.
        </p>
      </div>

      <div className="relative bg-green-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
          2
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mt-6">
          Choose a Program
        </h3>

        <p className="text-gray-600 mt-4">
          Pick the yoga class that matches your goals and experience level.
        </p>
      </div>

      <div className="relative bg-green-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
          3
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mt-6">
          Practice Daily
        </h3>

        <p className="text-gray-600 mt-4">
          Attend live or recorded sessions with guidance from expert trainers.
        </p>
      </div>

      <div className="relative bg-green-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
          4
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mt-6">
          Transform Yourself
        </h3>

        <p className="text-gray-600 mt-4">
          Improve your health, reduce stress, and enjoy a balanced lifestyle.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <a
        href="/pricing"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
      >
        Start Your Journey →
      </a>
    </div>

  </div>
</section>
{/* --------------------------------------------------------------------------- */}

 
      <Footer />
    </>
  );
}
