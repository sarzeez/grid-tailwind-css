
function App() {
  return (
    <div className="grid min-h-screen place-items-center scroll-smooth">
      <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 md:grid-cols-4">
        <h1 className="text-4xl font-extrabold text-gray-700 xs:col-span-2 xs:grid xs:grid-cols-2 xs:gap-4 md:col-span-3 md:text-5xl md:grid-cols-3">
          <span className="bg-blue-200 md:col-span-2">Grid layout with Tailwind CSS.</span>
        </h1>
        <p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">Amet magna quis elit do. Sit ullamco amet nisi ea eiusmod ad ea fugiat veniam cillum.</p>
        <div className="h-16 bg-blue-500 xs:h-auto xs:square"></div>
        <div className="h-16 bg-pink-500 xs:h-auto xs:square"></div>
        <div className="h-16 bg-blue-500 xs:h-auto xs:square"></div>
        <div className="h-16 bg-pink-500 xs:h-auto xs:square md:col-start-2"></div>
        <div className="h-16 bg-blue-500 xs:h-auto xs:square"></div>
        <div className="h-16 bg-pink-500 xs:h-auto xs:square"></div>
        <div className="h-16 bg-blue-500 xs:h-auto xs:square"></div>
        <div className="h-16 bg-pink-500 xs:h-auto xs:square"></div>
        <p className="self-center md:text-lg md:col-span-2 md:text-center md:px-4">Amet magna quis elit do. Sit ullamco amet nisi ea eiusmod ad ea fugiat veniam cillum.</p>
      </div>
    </div>
  );
}

export default App;
