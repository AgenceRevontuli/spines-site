import AnimatedBackground from "./Components/Experiences/AnimatedBackground"
import Test from "./Components/Experiences/Test"
import Header from "./Components/Header"

export default function Home() {
  return (
    <div>
        <header className="h-screen relative">
          <Test />
          <Header />
        </header>
    </div>
  )
}
