type Props = {
    visible: string
}

export default function Acquisition({
    visible
}: Props) {
  return (
    <div className={`bg-slate-100 p-16 rounded text-slate-950 opacity-90 ${visible != "acquisition" ? "hidden" : ""}`}>
        <h4 className="text-xl mb-4">Nous mettons en oeuvre votre stratégie d'acquisition</h4>
        <hr className="py-4" />
        <div className="flex gap-8 flex-col">
            <div>
                <h5 className="text-xl mb-2">Google Ads</h5>
                <p>Paramétrage de compte et des objectifs</p>
                <p>Paramétrage des campagnes search, PerfMax, YouTube, notoriété</p>
                <p>Pilotage et optimisation des performances</p>
                <p>Rédaction des scripts</p>
                <p>Développement de landing pages</p>
                <p>Rédaction des annonces</p>
                <p>Mise en place des suivis de conversion hors connexion avec le CRM (Gclid)</p>
                <p>Bilan bi-hebdomadaire sur les résultats</p>
            </div>
            <div>
                <h5 className="text-xl mb-2">Facebook Ads</h5>
                <p>Paramétrage de compte, des audiences et des objectifs</p>
                <p>Paramétrage des campagnes et des Adsets</p>
                <p>Pilotage et optimisation des performances</p>
                <p>Mise en place des suivis de conversion server side</p>
                <p>Validation de marque et de nom de domaine</p>
                <p>Bilan bi-hebdomadaire sur les résultats</p>
            </div>
            <div>
                <h5 className="text-xl mb-2">Référencement naturel - SEO</h5>
                <p>Optimisation techniques des sites web</p>
                <p>Gestion du calendrier éditorial</p>
                <p>Études des mots clés et leur opportunités</p>
                <p>Rédaction d'articles optimisés pour le SEO</p>
                <p>Gestion du sitemap</p>
                <p>Gestion des contenu et des mise à jour de l'algorithme Google</p>
                <p>Optimisation du mapping et des pages orphelines</p>
                <p>Bilan bi-hebdomadaire sur les résultats</p>
            </div>
        </div>
        <div className="mt-8 p-4 bg-slate-950 w-fit text-white text-center rounded">
            <button>Lancer votre Acquisition maintenant !</button>
        </div>
    </div>
  )
}
