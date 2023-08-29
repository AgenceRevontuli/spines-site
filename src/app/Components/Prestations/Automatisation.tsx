type Props = {
    visible: string
}

export default function Automatisation({
    visible
}: Props) {
  return (
    <div className={`bg-slate-100 p-16 rounded text-slate-950 opacity-90 ${visible != "processus" ? "hidden" : ""}`}>
        <h4 className="text-xl mb-4">Automatiser vos tâches chronophages</h4>
        <p className="mb-4">Épargner entre 5 et 10h de travail hébdomadaire grâce à nos scénario d'automatisation. Le meilleur moyen de développer votre entreprise tout en soignant l'expérience de vos clients.</p>
        <hr className="py-4" />
        <div className="flex gap-8 flex-col">
            <div>
                <h5 className="text-xl mb-2">Automatisation & Scénario</h5>
                <p>Marre de passer votre temps à gérer des relances clients ? </p>
                <p>Ou de louper des opportunités à cause d'un temps de traitement de vos mails trop long ? </p>
                <p>Automatiser vos processus commerciaux avec votre CRM. Nous auditons tous vos processus pour mettre en place des solutions digitales adaptées à vos besoins et vos équipe. Trouvez la solution idéale grâce à notre expérience de l'automatisation digitale.</p>
            </div>
            <div>
                <h5 className="text-xl mb-2">Emailing et Fidélisation</h5>
                <p>Fidéliser un client est 6x moins cher que de transformer un prospect. Nous mettons en place des boucles automatisés pour fidéliser vos clients :</p>
                <ul>
                    <li>Demande d'avis et de contenu généré par vos clients</li>
                    <li>Relance de paniers abandonnés ou de proposition commerciale</li>
                    <li>Newsletter et création d'un lien de notoriété</li>
                </ul>
            </div>
            <div>
                <h5 className="text-xl mb-2">Création de CRM personalisé</h5>
                <p>Les offres de CRM sont trop coûteuses ou peu adaptées à vos besoins ? Nous développons pour vous un outil de CRM personalisé sur-mesure.</p>
            </div>
        </div>
        <div className="mt-8 p-4 bg-slate-950 w-fit text-white text-center rounded">
            <button>Automatisez vos processus !</button>
        </div>
    </div>
  )
}
