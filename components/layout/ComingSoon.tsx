import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-cream dark:bg-dark">
        <h1 className="font-heading text-4xl text-dark dark:text-cream mb-3">{title}</h1>
        <p className="text-dark/50 dark:text-cream/50 max-w-md">
          This page is part of the next build phase and is coming soon.
        </p>
      </main>
      <Footer />
    </>
  );
}
