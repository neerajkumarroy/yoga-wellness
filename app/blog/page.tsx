import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
const blogs = [
  {
    id: 1,
    title: "10 Benefits of Daily Yoga Practice",
    category: "Yoga",
    date: "July 2026",
    image: "/images/home3.jpg",
    description:
      "Discover how practicing yoga every day can improve flexibility, reduce stress, and boost your overall health.",
  },
  {
    id: 2,
    title: "Meditation for Beginners",
    category: "Meditation",
    date: "July 2026",
    image: "/images/homeimg.jpeg",
    description:
      "Simple meditation techniques to calm your mind, improve focus, and reduce anxiety naturally.",
  },
  {
    id: 3,
    title: "Healthy Eating for a Better Lifestyle",
    category: "Nutrition",
    date: "July 2026",
    image: "/images/home2.jpeg",
    description:
      "Learn how balanced nutrition supports your yoga journey and helps maintain long-term wellness.",
  },
  
];

export default function BlogPage() {
  return (

    <main className="bg-gray-50 min-h-screen">
<Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our Wellness Blog
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Expert articles on yoga, meditation, nutrition, fitness and healthy
            living to help you become your best self.
          </p>
        </div>
      </section>

      {/* Categories */}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">

          {[
            "All",
            "Yoga",
            "Meditation",
            "Nutrition",
            "Fitness",
            "Lifestyle",
          ].map((item) => (
            <button
              key={item}
              className="px-6 py-3 rounded-full bg-white shadow hover:bg-green-600 hover:text-white transition"
            >
              {item}
            </button>
          ))}

        </div>
      </section>

      {/* Blog Cards */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

                  <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mb-4">
                    {blog.category}
                  </span>

                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {blog.description}
                  </p>

                  <div className="flex justify-between items-center">

                    <span className="text-sm text-gray-500">
                      {blog.date}
                    </span>

                    <Link
                      href={`/blog/${blog.id}`}
                      className="text-green-600 font-semibold hover:underline"
                    >
                      Read More →
                    </Link>

                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Newsletter */}

      <section className="bg-green-600 py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white mb-5">
            Stay Updated
          </h2>

          <p className="text-green-100 mb-8 text-lg">
            Subscribe to receive the latest yoga tips, wellness articles,
            meditation guides, and healthy lifestyle updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 rounded-lg w-full sm:w-96 outline-none"
            />

            <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition">
              Subscribe
            </button>

          </div>

        </div>

      </section>
<Footer/>
    </main>
  );
}