import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core'

const {Storage} = Plugins;
const STORAGE_key = "formulaire"
@Injectable({
  providedIn: 'root'
})
export class GestconcertService {



private formulaireTab = [];

public input = {
nom: null,
genre: null,
salle: null,
ville: null,
note: null,
date: null,
commentaire: null,



}

  constructor() { }

public async getConcert(){
  const data : any = await Storage.get({key:STORAGE_key})
  this.formulaireTab = JSON.parse(data.value) || [];
  return this.formulaireTab;
}

public getConcertData(){
  return{
    nom: this.input.nom,
    genre: this.input.genre,
    salle: this.input.salle,
    ville: this.input.ville,
    note: this.input.note,
    date: this.input.date,
    commentaire: this.input.commentaire
  }
}

public async addConcert(data){
  this.formulaireTab.push(data) 
  this.input.nom = null;
  this.input.genre= null;
  this.input.salle= null;
  this.input.ville= null;
  this.input.note= null;
  this.input.date= null;
  this.input.commentaire= null;
  this.persist();
 

}

private async persist() {
 
  await Storage.set({
    key: STORAGE_key,
    value: JSON.stringify(this.formulaireTab)
  });

}

public validateInput(){
  return this.input.nom && this.input.genre && this.input.salle && this.input.ville && this.input.note && this.input.commentaire
}

public deletConcert(pos){
  this.formulaireTab.splice(pos,1);
  this.persist();
}


}