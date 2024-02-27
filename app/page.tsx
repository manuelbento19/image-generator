import Footer from "./components/Footer";
import Form from "./components/Form";
import { metadata } from "./layout";

export default function Home() {
  return (
    <main className="p-4 h-full flex bg-gray-50 relative">
      <section className="bg-white h-fit mx-auto mt-[10%] max-w-screen-sm border-0 rounded-md shadow-xl px-8 py-4">
        <h1 className="text-2xl text-center my-4">Image Generator</h1>
        <p className="text-xs leading-5 text-center text-gray-700">{metadata.description}</p>
        <Form/>
      </section>
      <Footer/>
    </main>
  );
}
