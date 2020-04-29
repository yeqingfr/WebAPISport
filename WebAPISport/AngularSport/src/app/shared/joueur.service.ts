import { Injectable } from '@angular/core';
import { Joueur } from './joueur.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  formData: Joueur;
  list : Joueur[];
 

  readonly rootURL="https://localhost:44341/api"

  constructor(private http : HttpClient) { }


  refreshList(){
    this.http.get(this.rootURL+'/Joueur')
    .toPromise().then(res => this.list = res as Joueur[]);
  }

  postJoueur(formData:Joueur) { 
    return this.http.post(this.rootURL+'/Joueur',formData);
  }

  putJoueur(formData : Joueur){
    return this.http.put(this.rootURL+'/Joueur/'+formData.JoueurID,formData);
     
   }

   deleteJoueur(id : number){
    return this.http.delete(this.rootURL+'/Joueur/'+id);
   }

}
