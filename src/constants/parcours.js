export const Parcours = {
  Chance: {
    1: {
      title: "Pactole",
      content:
        "Un événement inattendu ou un coup de chance vous a permis d'obtenir 1d10 x 100 couronnes.",
    },
    2: {
      title: "Enseignement",
      content:
        "Un professeur vous a dispensé des leçons. Gagnez +1 dans une competence d'intelligence ou obtenez une nouvelle compétence d'intelligence avec un bonus de +2",
    },
    3: {
      title: "Faveur d'un noble",
      content: "Un noble vous doit une faveur pour une raison quelconque",
    },
    4: {
      title: "Maitres d'armes",
      content:
        "Vous vous etes entrainé avec un soldat. Gagnez +1 dans une comp. de combat ou obtenez une nouvelle comp. de combat avec bonus de +2",
    },
    5: {
      title: "Faveur d'un sorceleur",
      content: "Vous avez un jour rencontré un sorceleur qui vous doit aujourd'hui une faveur",
    },
    6: {
      title: "Entente avec des bandits",
      content:
        "Vous avez fréquenté une bande de brigands. Vous pouvez leur demander une faveur 1x/mois",
    },
    7: {
      title: "Dressage d'animal sauvage",
      content:
        "Vous avez apprivoisé un animal sauvage lors d'un periple. Lancez 1D10, 1-7: chien sauvage (p310) 8-10: loup (p286)",
    },
    8: {
      title: "Faveur d'un mage",
      content: "Un mage vous doit une faveur depuis que vous l'avez aidé",
    },
    9: {
      title: "Bénin par un prêtre",
      content:
        "Vous avez reçu un symbole sacré. Vous pouvez le montrer aux gens de la même religion pour bénéficier d'un bonus de +2 en charisme",
    },
    10: {
      title: "Adoubé",
      content:
        "Vous avez été adoubé dans un royaume quelconque pour vous recompenser d'un acte de bravoure. Vous bénéficiez de +2 en reputation et etes reconnu comme chevalier dans le royaume en question",
    },
  },
  BadLuck: {
    1: { title: "Dettes", content: "Vous etes endetté à hauteur de 1D10 x 100 couronnes" },
    2: {
      title: "Emprisonnement",
      content:
        "Vous avez été emprisonné pendant 1D10 mois pour un crime ou de fausses accusations.",
    },
    3: {
      title: "Addiction",
      content:
        "Vous avez succombé a une addition (de votre choix). Voir encart sur les addictions pour les rėgles",
    },
    4: {
      title: "Mort d'un ami, amant ou parent",
      content:
        "Lancez 1D10, 1-5: Mort par accident, 6-8: Tué par des monstres, 9-10: Assassiné par des bandits",
    },
    5: {
      title: "Fausse accusation",
      content:
        "Lancez 1D10, 1-3: Accusé de vol, 4-5: Lacheté ou traitrise, 6-8: Meutre, 9: Viol, 10: Pratiques magiques illégales",
    },
    6: {
      title: "Recherché par les autorités",
      content:
        "Lancez 1D10, 1-3: Des gardes veulent votre peau, 4-6: Une petite ville vous recherche, 7-8: Recherché par une grande ville, 9-10: Un Royaume entier est a vos trousses",
    },
    7: {
      title: "Trahison",
      content:
        "Lancez 1D10, 1-3: Vous avez été victime d'un chantage, 4-7: on a révélé un de vos secrets, 8-10: Une personne très proche vous a trahi",
    },
    8: {
      title: "Accident",
      content:
        "Lancez 1D10, 1-4: Vous avez été defiguré, changez votre statut en craint. 5-6, vous avez mis 1D10 mois a vous rétablir, 7-8: 1D10 mois ont disparus de votre mémoire. 9-10: Vous souffrez de cauchemars horribles",
    },
    9: {
      title: "Handicap mental ou physique",
      content:
        "Lancez 1D10, 1-3: Vous avez été empoisonné, perdez 5PS permanent. 4-7: Vous souffrez de crise d'angoisse et devez réaliser des jets de sauvegardes dans les situations stressantes. 8-10: Vous souffrez de psychose et entendez des voix (controlés par le MJ). Votre comportement peut soudain devenir violent, irrationnel ou dépréssif",
    },
    10: {
      title: "Maudit",
      content: "Vous avez été frappé par une malédiction. Voyez la section Malédictions (p230)",
    },
  },
  Friends: {
    statut: {
      1: "Chasseur de prime",
      2: "Mage",
      3: "Mentor ou professeur",
      4: "Ami d'enfance",
      5: "Artisan",
      6: "Un/e vieil/le ennemi/e",
      7: "Duc/Duchesse",
      8: "Prêtre/prêtresse",
      9: "Soldat",
      10: "Barde",
    },
    closeTo: {
      1: "Connaissances",
      2: "Connaissances",
      3: "Connaissances",
      4: "Connaissances",
      5: "Amis",
      6: "Amis",
      7: "Amis proches",
      8: "Amis proches",
      9: "Inséparable",
      10: "A la vie, a la mort",
    },
  },
  Ennemies: {
    statut: {
      1: "Ancien ami",
      2: "Ancien amant",
      3: "Parent",
      4: "Ennemi d'enfance",
      5: "Membre d'une secte",
      6: "Barde",
      7: "Soldat",
      8: "Bandit",
      9: "Duc/Duchesse",
      10: "Mage",
    },
    dueTo: {
      1: "Agression",
      2: "A causé la perte d'un être cher",
      3: "Responsable d'un humiliation terrible",
      4: "Responsable d'une malédiction",
      5: "Accusé de pratiques magiques illégales",
      6: "S'est vue repousser ses avances",
      7: "A infligé une horrible blessure",
      8: "Chantage",
      9: "Se/vos plans ont ete contrecarrés",
      10: "Responsable d'une attaque de monstre",
    },
    influence: {
      1: "Politique",
      2: "Culturel",
      3: "Physique",
      4: "Magique",
    },
    state: {
      1: "Lui ou vous avez oublié cet épisode",
      2: "Lui ou vous avez oublié cet episode",
      3: "Lui ou vous prevoyez un mauvais coup",
      4: "Lui ou vous prevoyez un mauvais coup",
      5: "Lui ou vous attaquerez en cas de rencontre",
      6: "Lui ou vous attaquerez en cas de rencontre",
      7: "Lui ou vous vous mettez en chasse pour obtenir réparation",
      8: "Lui ou vous vous mettez en chasse pour obtenir réparation",
      9: "Lui ou vous voulez la tête de votre ennemi",
      10: "Lui ou vous voulez la tête de votre ennemi",
    },
  },
  RelationShip: {
    romanticTragedy: {
      1: "Votre amant a ete capturé par des bandits il y a quelques temps. Il est toujours prisonnier",
      2: "Un jour votre amant a disparu dans des circonstances mystérieuses. Vous ne savez pas où il est parti.",
      3: "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'avait pas commis.",
      4: "Une puissante malédiction vous a enleve votre amant",
      5: "Quelque chose s'est passé entre vous, vous avez ete forcé de le tuer",
      6: "Votre amant s'est suicidé. Vous ne connaissez pas forcément la raison de son geste.",
      7: "Votre bien-aimé s'est fait capturer par un noble qui en a fait son amant",
      8: "Un rival s'est interposé et a gagné l'affection de votre amant",
      9: "Des monstres ont tué votre amant. C'etait un accident ou un plan soigneusement huilé. ",
      10: "Votre amant est un mage, sorceleur ou un monstre intelligent. Votre relation est condamné d'avance...",
    },
    complicatedTragedy: {
      1: "La famille et les amis de votre amant vous haissent et desapprouvent votre relation",
      2: "Votre amant se prostiture pour gagner sa vie et refuse d'abandonner son travail.",
      3: "Votre amant souffre d'une malédiction mineure qui lui cause d'horribles cauchemars ou des crises de paranoia.",
      4: "Votre amant couche a droite et a gauche, et bien que vous l'ayez decouvert, il refuse d'arreter",
      5: "Votre amant éprouve une jalousie maladive et ne supporte pas de vous savoir en compagnie de rivaux potentiels.",
      6: "Vous vous battez sans cesse et rien ne peut vous arreter. Vos disputes se terminent toujours par des hurlements.",
      7: "Vous etes des rivaux sur le plan professionnel. Vous ne cessez de vous voler des clients mutuellement.",
      8: "L'un de vous est un humain, l'autre est un non-humain, ce qui vous complique la vie",
      9: "Votre amant est déjà marié. Il veut ou ne veut pas quitter son conjoint.",
      10: "Votre famille ou vos amis detestent votre amant et desapprouvent votre relation.",
    },
  },
};
