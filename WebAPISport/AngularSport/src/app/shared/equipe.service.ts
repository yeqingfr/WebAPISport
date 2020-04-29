import { Injectable } from '@angular/core';
import { Equipe } from './equipe.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  formData: Equipe;
  list : Equipe[];
 

  readonly rootURL="https://localhost:44341/api"

  constructor(private http : HttpClient) { }


  refreshList(){
    this.http.get(this.rootURL+'/Equipe')
    .toPromise().then(res => this.list = res as Equipe[]);
  }

  postEquipe(formData:Equipe) { 
    return this.http.post(this.rootURL+'/Equipe',formData);
  }

  putEquipe(formData : Equipe){
    return this.http.put(this.rootURL+'/Equipe/'+formData.EquipeID,formData);
     
   }

   deleteEquipe(id : number){
    return this.http.delete(this.rootURL+'/Equipe/'+id);
   }

}
