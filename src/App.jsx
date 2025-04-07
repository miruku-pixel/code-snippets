import AnimatedButton from "./components/buttons/AnimatedButton";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <AnimatedButton text="Follow me!" onClick={() => alert("Hello World!")} />
    </div>
  );
}

export default App;
