import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/equipe.service';
import { Equipe } from 'src/app/shared/equipe.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {

  constructor(public service: EquipeService, public toastr:ToastrService) {}

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(equi: Equipe) {
    this.service.formData = Object.assign({}, equi);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEquipe(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Management Equipe');
      });
    }
  }

}
