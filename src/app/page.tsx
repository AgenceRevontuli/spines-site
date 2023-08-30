import Test from "./Components/Experiences/Test"
import FadeInText from "./Components/FadeInText"
import Header from "./Components/Header"
import Prestations from "./Components/Prestations/Prestations"
import Clients from './Components/Clients'
import Psynyou from "./Components/Projects/Psynyou"

export default function Home() {
  return (
    <>
        <header className="h-screen relative">
          <Test />
          <Header />
          <div className="px-32 flex flex-col justify-center h-full w-8/12">
            <div className="rounded-full inline-block bg-[#ffffff88] w-fit px-4 py-2 mb-8">
              <p className="text-slate-700">Studio Growth Marketing</p>
            </div>
            <h1 className="text-white text-6xl font-sans">Optimisez vos actions sur le web pour passer de x1 à x6 de marge</h1>
            <div className="mt-8">
              <button className="bg-white px-8 py-4 rounded-full text-xl">Réserver un appel de découverte</button>
            </div>
            <div className="text-white mt-8">
              <p>+100 clients accompagnés</p>
              <Clients />
            </div>
          </div>
        </header>
        <div className="px-32 py-32 text-white bg-slate-950 flex justify-center">
          <div className="flex flex-col gap-16 justify-center max-w-5xl">
            <p className="text-2xl">Vous n'avez pas besoin de nous si ... </p> 
            <FadeInText 
              text="vos objectifs sont parfaitement définis, votre stratégie d'acquisition est testée et optimisée, vous pilotez toutes vos actions marketing et vos processus de prospection et de fidélisation sont automatisées."
            />
            <p className="text-4xl">En revanche, si vous souhaitez :</p>
            <ul className="text-2xl flex flex-wrap gap-4">
              <li className="bg-lime-50 rounded-full px-4 py-2 text-slate-800 w-fit">Définir une stratégie d'acquisition digitale solide et pérenne</li>
              <li className="bg-lime-50 rounded-full px-4 py-2 text-slate-800 w-fit">Faire x6 sur vos marges grâce à vos actions web</li>
              <li className="bg-lime-50 rounded-full px-4 py-2 text-slate-800 w-fit">Trouver des nouvelles opportunités</li>
              <li className="bg-lime-50 rounded-full px-4 py-2 text-slate-800 w-fit">Gagner du temps et automatiser vos tâches chronophages</li>
              <li className="bg-lime-50 rounded-full px-4 py-2 text-slate-800 w-fit">Fidéliser vos clients et développer votre notoriété</li>
              <li className="bg-lime-50 rounded-full px-4 py-2 text-slate-800 w-fit">Avoir une roadmap clair et un tableau de pilotage complet</li>
            </ul>
            <p className="text-4xl">Nous avons les moyens et l'expertise de vous aider !</p>
          </div>
        </div>
        <Prestations />
        <div className="px-32 py-32 text-white bg-slate-950 flex justify-center">
          <div className="flex flex-col gap-4 justify-center max-w-5xl w-full">
            <h2 className="text-5xl">Comment nous le faisons</h2>
            <div>
              <Psynyou />
            </div>
          </div>
        </div>
    </>
  )
}
