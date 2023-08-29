type Props = {
    visible: string
}

export default function IA({
    visible
}: Props) {
  return (
    <div className={`bg-slate-100 p-16 rounded text-slate-950 opacity-90 ${visible != "ia" ? "hidden" : ""}`}>
        <h4 className="text-xl mb-4">Utilisez la puissance de l'IA dans votre quotidien</h4>
        <p className="mb-4">L'intélligence artificielle bouscule tous les codes et les habitudes du monde professionnel. Si vous ne l'intégrz pas encore, vous pouvez être sûr de passer à côté de la nouvelle révolution numérique.</p>
        <hr className="py-4" />
        <div className="flex gap-8 flex-col">
            <div>
                <h5 className="text-xl mb-2">Intégration de l'IA dans vos processus</h5>
                <p>Installation de l'API OpenAI pour vos tâches quotidienne.</p>
                <p>Entraînement de models sur votre activité.</p>
                <p>Réalisation de chatbot conversationnel.</p>
                <p>Model analytics de document.</p>
            </div>
        </div>
        <div className="mt-8 p-4 bg-slate-950 w-fit text-white text-center rounded">
            <button>Intégrer l'IA dans votre entreprise !</button>
        </div>
    </div>
  )
}
