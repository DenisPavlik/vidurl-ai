function App() {
  return (
    <>
      <main className="max-w-2xl mx-auto flex px-4 gap-8">
        <div className="py-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold uppercase mb-4">
            <span className="text-5xl">URl to video</span> <br />{" "}
            <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-300 bg-clip-text text-transparent">
              with power of AI
            </span>
          </h1>
          <form className="grid gap-2">
            <input
              className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow"
              type="text"
              placeholder="https://..."
            />
            <button
              className="bg-emerald-600 text-white px-4 py-2 rounded-full uppercase"
              type="submit"
            >
              Create&nbsp;video
            </button>
          </form>
        </div>
        <div className="py-4">
          <div className="bg-gray-200 w-[240px] h-[380px] rounded-2xl text-gray-500 p-8">
            video here
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
