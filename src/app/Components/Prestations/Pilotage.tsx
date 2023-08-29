type Props = {
    visible: string
}

export default function Pilotage({
    visible
}: Props) {
  return (
    <div className={`bg-slate-100 p-16 rounded text-slate-950 opacity-90 ${visible != "data" ? "hidden" : ""}`}>
        <h4 className="text-xl mb-4">Suivre vos actions sur le web avec précision</h4>
        <hr className="py-4" />
        <div className="flex gap-8 flex-col">
            <div>
                <h5 className="text-xl mb-2">Paramétrage Google Analytics 4</h5>
                <p>On installe et on paramétre Google Analytics 4 sur vos sites internet pour permettre un suivi complet et précis de vos KPI marketing.</p>
                <p>Paramétrage des évènements personalisés et des conversions micro et macro.</p>
                <p>Installation de BigQuery pour des analyses avancées.</p>
                <p>Formation à la lecture des données dans Google Analytics.</p>
            </div>
            <div>
                <h5 className="text-xl mb-2">Plan de taggage de vos conversions</h5>
                <p>Installation et paramétrage de Google Tag Manager</p>
                <p>Mise en place d'évenements de conversion</p>
                <p>Intégration du consent mode et du respect RGPD pour la gestion des cookies</p>
                <p>Codage de script personnalisé pour des évenements à envoyé sur Google Analytics 4</p>
            </div>
            <div>
                <h5 className="text-xl mb-2">Tableau de bord personalisé</h5>
                <p>Création d'un tableau de bord interactif personalisé selon les objectifs sur Google Search Console</p>
                <p>Paramétrage de funnel de conversion</p>
                <p>Consulting et suivi des données avec un expert de l'acquisition</p>
            </div>
        </div>
        <div className="mt-8 p-4 bg-slate-950 w-fit text-white text-center rounded">
            <button>Commencez à suivre vos data !</button>
        </div>
    </div>
  )
}
