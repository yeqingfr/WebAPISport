import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { EquipesComponent } from './equipes/equipes.component';
import { EquipeComponent } from './equipes/equipe/equipe.component';
import { EquipeListComponent } from './equipes/equipe-list/equipe-list.component';
import { EquipeService } from './shared/equipe.service';
import { JoueurComponent } from './equipes/joueur/joueur.component';
import { JoueurListComponent } from './equipes/joueur-list/joueur-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipesComponent,
    EquipeComponent,
    EquipeListComponent,
    JoueurComponent,
    JoueurListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
 
  ],
  providers: [EquipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
