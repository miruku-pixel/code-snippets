import TypingIntro from "./components/hero/TypingIntro";
import AnimatedButton from "./components/buttons/AnimatedButton";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <TypingIntro />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-blue-300">
        <AnimatedButton
          text="Follow me!"
          onClick={() => alert("Hello World!")}
        />
      </div>
    </div>
  );
}

export default App;
