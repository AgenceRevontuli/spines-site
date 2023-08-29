type Props = {
    visible: string
}

export default function Strategy({
    visible
}: Props) {
    console.log(visible)
  return (
    <div className={`bg-slate-100 p-16 rounded text-slate-950 opacity-90 ${visible != "strategy" ? "hidden" : ""}`}>
        <h4 className="text-xl mb-4">Nous établissons la stratégie idéale pour votre marché</h4>
        <hr className="py-4" />
        <div className="flex gap-8 flex-col">
            <div>
                <h5 className="text-xl mb-2">Audit et Kickoff</h5>
                <p>Nous travaillons avec vous pour faire un état des lieux de votre Marketing digitale.</p>
                <p>Nous définissons ensemble des objectifs réalistes et ambitieux pour votre projet.</p>
                <p>On vous livre une roadmap avec les leviers d'acquisition et les data à atteindre.</p>
            </div>
            <div>
                <h5 className="text-xl mb-2">Consulting</h5>
                <p>Un expert étudie votre dossier et vous conseille sur l'évolution de votre stratégie et les pivots à réaliser pour continuer à optimiser les performances.</p>
            </div>
        </div>
        <div className="mt-8 p-4 bg-slate-950 w-fit text-white text-center rounded">
            <button>Démarrez votre stratégie web maintenant !</button>
        </div>
    </div>
  )
}
