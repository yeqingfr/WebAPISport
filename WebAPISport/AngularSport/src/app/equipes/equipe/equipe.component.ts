import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/equipe.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JoueurService } from 'src/app/shared/joueur.service';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  constructor(public service:EquipeService,public toastr: ToastrService,public service2: JoueurService) { }

  ngOnInit(): void {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
     if (form != null)
      form.resetForm();
    this.service.formData = {
      EquipeID: 99999,
      Nom: '',
      Ville: '',
      Sport: ''
      
    }
  }

  onSubmit(form:NgForm){
    if (form.value.EquipeID == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);

  }

  insertRecord(form: NgForm) {
    this.service.postEquipe(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Management Equipe');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEquipe(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Management Equipe');
      this.resetForm(form);
      this.service.refreshList();
    });

  }


}
