import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EquipeService } from 'src/app/shared/equipe.service';
import { NgForm } from '@angular/forms';
import { JoueurService } from 'src/app/shared/joueur.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {

  constructor(public service:JoueurService,public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
     if (form != null)
      form.resetForm();
    this.service.formData = {
      JoueurID: 99999,
      EquipeID: 99999,
      Nom: '',
      Prenom: '',
      DateNaissance:'',
      Sexe: '',
      Numero:null     
    }
  }


  
  onSubmit(form:NgForm){
    if (form.value.JoueurID == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);

  }

  insertRecord(form: NgForm) {
    this.service.postJoueur(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Management Joeur');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putJoueur(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Management Equipe');
      this.resetForm(form);
      this.service.refreshList();
    });

  }
}
