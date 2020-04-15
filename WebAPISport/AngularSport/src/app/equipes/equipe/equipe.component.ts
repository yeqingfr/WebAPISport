import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/equipe.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  constructor(public service:EquipeService,public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  // equipeForm: FormGroup;
  // listSports:Array<Object>  = [
  //   { id: 0, name: "Hockey" },
  //   { id: 1, name: "Baseball" },
  //   { id: 2, name: "Basketball" },
  //   { id: 3, name: "Football" },
  // ];

  //  selectedSport=this.listSports[0];

  //  registrationForm = this.fb.group({
  //   sportName: ['', [Validators.required]]
  // })

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

  // changeSport(e) {
  //   console.log(e.value)
  //   this.sportName.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }
  
  // get sportName(){return this.registrationForm.get('sportName');}
}
