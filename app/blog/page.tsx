"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { blogs } from "../../data/blogs";
import { useState } from "react";
export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
const [visibleBlogs, setVisibleBlogs] = useState(3);
const filteredBlogs =
  selectedCategory === "All"
    ? blogs
    : blogs.filter((blog) => blog.category === selectedCategory);

const displayedBlogs = filteredBlogs.slice(0, visibleBlogs);  
return (
    
    <main className="bg-[#f7f7f2] min-h-screen">

      <Navbar />

      {/* Hero */}
      <section className="relative h-[500px]">

        <Image
          src="/images/yoga8.jpeg"
          alt="Yoga Blog"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center max-w-4xl px-6">

            <span className="inline-block bg-green-600/20 border border-green-500 text-green-300 px-5 py-2 rounded-full mb-6">
              Yoga Wellness Blog
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Live Better.
              <br />
              Feel Better.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-8">
              Explore yoga, meditation, nutrition, wellness and mindfulness
              articles written to help you build a healthier and happier life.
            </p>

          </div>

        </div>

      </section>

      {/* Categories */}

      <section className="py-14">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

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
  onClick={() => {
    setSelectedCategory(item);
    setVisibleBlogs(3);
  }}
  className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300
  ${
    selectedCategory === item
      ? "bg-green-700 text-white"
      : "bg-white border border-green-700 text-gray-700 hover:bg-green-700 hover:text-white"
  }`}
>
  {item}
</button>

            ))}

          </div>

        </div>

      </section>

      {/* Blog Cards */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {displayedBlogs.map((blog) => (

              <div
                key={blog.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:-translate-y-3 hover:shadow-green-300/30 transition duration-500"
              >

                <div className="relative overflow-hidden">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>
               

                <div className="p-7">

                  <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1 text-xs font-semibold mb-4">
                    {blog.category}
                  </span>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 leading-7 mb-6">
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500 text-sm">
                      {blog.date}
                    </span>

                    <Link
                      href={`/blog/${blog.id}`}
                      className="text-green-700 font-semibold hover:text-black transition"
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
      <div className="mt-14 flex justify-center">
  {visibleBlogs < filteredBlogs.length && (
    <button
      onClick={() => setVisibleBlogs((prev) => prev + 3)}
      className="rounded-full bg-gradient-to-r from-green-700 to-green-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
    >
      Read More Blogs
    </button>
  )}
</div>

      {/* Quote Section */}

      {/* Inspirational Section */}

<section className="py-24 bg-gradient-to-br from-[#F8F6F0] via-[#EEF8EE] to-[#E3F5E5]">

  <div className="max-w-5xl mx-auto text-center px-6">

    <span className="inline-block mb-5 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
      Daily Inspiration
    </span>

    <h2 className="text-5xl font-bold text-[#123524] leading-tight mb-6">
      "Yoga is the journey of the self,
      <br />
      through the self,
      <br />
      to the self."
    </h2>

    <p className="text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
      Every article is thoughtfully created to inspire mindful living,
      improve flexibility, reduce stress, and help you build a healthier,
      happier lifestyle through yoga and wellness.
    </p>

  </div>

</section>

{/* Newsletter */}

<section className="py-24 bg-gradient-to-br from-[#EAF8EA] via-[#F6FBF5] to-[#FFFDF8]">

  <div className="max-w-5xl mx-auto px-6">

    <div className="rounded-[35px] bg-white shadow-2xl border border-green-100 p-12 md:p-16 text-center">

      <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-5">
        Newsletter
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#123524] mb-6">
        Join Our Wellness Community
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Get weekly yoga tips, meditation techniques, healthy recipes,
        and wellness articles delivered directly to your inbox.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">

        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full md:w-[420px] rounded-full border border-green-300 px-6 py-4 text-gray-800 outline-none focus:border-green-600 focus:ring-4 focus:ring-green-200"
        />

        <button className="rounded-full bg-gradient-to-r from-green-700 to-green-500 px-8 py-4 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg">
          Subscribe Now
        </button>

      </div>

    </div>

  </div>

</section>

      <Footer />

    </main>
  );
}