import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { blogs } from "../../../data/blogs";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetails({ params }: Props) {
  const { id } = await params;

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-red-600">
            Blog Not Found
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#FDFBF7]">

        {/* Hero Image */}
        <section className="pt-28">
          <div className="max-w-6xl mx-auto px-6">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={600}
              priority
              className="w-full h-[500px] rounded-3xl object-cover shadow-xl"
            />
          </div>
        </section>

        {/* Blog Content */}
        <section className="max-w-4xl mx-auto px-6 py-16">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            {blog.category}
          </span>

          <h1 className="text-5xl font-extrabold text-gray-900 mt-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-gray-500 mt-3 mb-8">
            Published on {blog.date}
          </p>

          <div className="w-24 h-1 bg-green-600 rounded-full mb-10"></div>

          <article className="mt-8">

  <ReactMarkdown
    components={{
      h1: ({ children }) => (
        <h1 className="text-5xl font-bold text-gray-900 mt-10 mb-6">
          {children}
        </h1>
      ),

      h2: ({ children }) => (
        <h2 className="text-3xl font-bold text-green-700 mt-10 mb-4">
          {children}
        </h2>
      ),

      p: ({ children }) => (
        <p className="text-lg leading-9 text-gray-700 mb-6">
          {children}
        </p>
      ),

      ul: ({ children }) => (
        <ul className="list-disc ml-6 mb-6">
          {children}
        </ul>
      ),

      li: ({ children }) => (
        <li className="mb-2">
          {children}
        </li>
      ),
    }}
  >
    {blog.content}
  </ReactMarkdown>

</article>

        </section>

      </main>

      <Footer />
    </>
  );
}