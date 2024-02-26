import { metadata } from "./layout";

export default function Home() {
  return (
    <main className="p-4 h-full flex bg-gray-50">
      <section className="bg-white h-fit mx-auto mt-[10%] max-w-screen-sm border-0 rounded-md shadow-xl px-8 py-4">
        <h1 className="text-2xl text-center my-4">Image Generator</h1>
        <p className="text-xs leading-5 text-center text-gray-700">{metadata.description}</p>
        <form className="flex flex-col gap-3 mt-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="desc" className="text-sm font-medium">Prompt</label>
            <textarea placeholder="Escreva um texto descritivo da imagem que gostarias de gerar" className="text-sm text-zinc-600 border border-gray-400 rounded-md max-h-40 h-28 outline-none p-2" id="desc"></textarea>
          </div>
          <button className="py-3 px-2 bg-zinc-900 text-white text-sm border-0 rounded-md transition hover:brightness-150">Generate</button>
        </form>
      </section>
    </main>
  );
}
