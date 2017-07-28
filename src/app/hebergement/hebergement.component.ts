import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class HebergementComponent implements OnInit {
    
    gites = [{
        name: "Gîte Les Pignets",
        image: "les_pignets.jpg",
//        adress: "21 rue de l'église 67220 Albe",
//        phone: "03 88 57 75 94",
//        mail: "alfred@les-pignets.info",
        web: "http://ferien-im-elsass.de/"
    }, {
        name: 'Gîte de Madame Marthe Vonderscher'
    }, {
        name: "Gîte Rural n°2120"
    }, {
        name: "Gîte Chez Jérémie et Mary"
    }, {
        name: "Gîte Le Sorbier"
    }, {
        name: "Gîte Les Cerisiers"
    }, {
        name: "Gîte Les Châtaigniers"
    }, {
        name: "Gîte Petit châlet dans la prairie"
    }, {
        name: "Gîte Alisier"
    }, {
        name: "Gîte Chalet Aubépine"
    }, {
        name: "Gîte Le Hochwald"
    }, {
        name: "Gîte Prunelle"
    }, {
        name: "Gîte de Madame Christianne Stauffer"
    }, {
        name: "Gîte de Monsieur Jean Biehler"
    }, {
        name: "Gîte de Monsieur Robert Hollecker"
    }, {
        name: "Gîte de Madame Sonja Geiger"
    }, {
        name: "Gîte de Madame Yvon Nevejans"
    }, {
        name: "Le Chalet de Juliette"
    }, {
        name: "Gîte Le Chalet"
    }, {
        name: "La Fermette"
    }, {
        name: "Le corps de ferme"
    }, {
        name: "Gîte Les buissonniers"
    }, {
        name: "Gîte sous les frênes"
    }, {
        name: "Gîte Les myrtilles"
    }, {
        name: "Gîte Monsieur Beyer"
    }, {
        name: "Gîte Au grenier à Kougelhopfs"
    }, {
        name: "Gîte M. et Mme Wirth"
    }, {
        name: "Gîte Chez Guy et Martine"
    }, {
        name: "Gîte La cigogne en voyage"
    }, {
        name: "Gîte Aux volets bleus"
    }, {
        name: "Gîte Au cerisier"
    }, {
        name: "Gîte La tulipe"
    }, {
        name: "Gîte Le magnolia"
    }, {
        name: "Gîte de Madame Heidi Meyer"
    }, {
        name: "Gîte Ferme du manou"
    }, {
        name: "Gîte La goutte"
    }, {
        name: "Gîte Les hortensias"
    }, {
        name: "Gîte Lavigne"
    }, {
        name: "Gîte Sauloch Kastele"
    }, {
        name: "Gîte Les mines"
    }, {
        name: "Gîte de Monsieur Fernand Schultz"
    }, {
        name: "Gîte Au cadran solaire"
    }, {
        name: "Gîte La contrie"
    }, {
        name: "Gîte Au fil de l'eau"
    }, {
        name: "Gîte de Madame Yvonne Meyer"
    }]

  constructor() {
  }

  ngOnInit() {
  }

}
