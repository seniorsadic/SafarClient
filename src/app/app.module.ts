import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {ContactsService} from '../services/contacts.service';
import {FormsModule} from '@angular/forms';
import { NewPersonneComponent } from './new-personne/new-personne.component';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';
import { AgencesComponent } from './agences/agences.component';
import { NewAgenceComponent } from './agences/new-agence/new-agence.component';
import { EditAgenceComponent } from './agences/edit-agence/edit-agence.component';
import {AgenceService} from "../services/agence.service";
import { ProduitsComponent } from './produits/produits.component';
import { NewComponent } from './produits/new/new.component';
import { CategoriesComponent } from './produits/categories/categories.component';
import { VillesComponent } from './villes/villes.component';
import { EditVilleComponent } from './villes/edit-ville/edit-ville.component';
import { NewVilleComponent } from './villes/new-ville/new-ville.component';
import {VilleService} from "../services/ville.service";
import { NewCategorieComponent } from './produits/categories/new-categorie/new-categorie.component';
import { EditCategorieComponent } from './produits/categories/edit-categorie/edit-categorie.component';
import { EditProduitComponent } from './produits/edit-produit/edit-produit.component';
import {ProduitService} from "../services/produit.service";
import { ReportingComponent } from './reporting/reporting.component';
import {ChartsModule} from "ng2-charts";
import { FileUploadModule } from 'ng2-file-upload';
import { DepotComponent } from './reporting/depot/depot.component';
import { RapportComponent } from './reporting/rapport/rapport.component';
import { VenteComponent } from './vente/vente.component';
import { OtasComponent } from './otas/otas.component';
import { EditOtaComponent } from './otas/edit-ota/edit-ota.component';
import { NewOtaComponent } from './otas/new-ota/new-ota.component';
import {OtaService} from "../services/ota.service";
import { ProductsListComponent } from './vente/products-list/products-list.component';
import { ProductsRowComponent } from './vente/products-row/products-row.component';
import { ProductsImageComponent } from './vente/products-image/products-image.component';
import { ProductsPriceComponent } from './vente/products-price/products-price.component';
import { ProductsDepartmentComponent } from './vente/products-department/products-department.component';
import {VenteService} from "../services/vente.service";
<<<<<<< HEAD
import {AsyncLocalStorageModule} from "angular-async-local-storage";
=======
import {Ng2SmartTableModule} from "ng2-smart-table";
import {AngularFontAwesomeModule} from "angular-font-awesome";
>>>>>>> 973a849a06ad8b839ce0e6b036adaf6c69b506cb

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'personne', component: PersonnesComponent},
  { path: 'new-personne', component: NewPersonneComponent},
  { path: 'edit-personne/:id', component: EditPersonneComponent},
  { path: 'edit-agence/:id', component: EditAgenceComponent},
  { path: 'new-agence', component: NewAgenceComponent},
  { path: 'agence', component: AgencesComponent},
  { path: 'ville', component: VillesComponent},
  { path: 'new-ville', component: NewVilleComponent},
  { path: 'edit-ville/:id', component: EditVilleComponent},
  { path: 'categorie', component: CategoriesComponent},
  { path: 'new-categorie', component: NewCategorieComponent},
  { path: 'edit-categorie/:id', component: EditCategorieComponent},
  { path: 'produit', component: ProduitsComponent},
  { path: 'new-produit', component: NewComponent},
  { path: 'edit-produit/:id', component: EditProduitComponent},
  { path: 'reporting', component: ReportingComponent},
  { path: 'depot', component: DepotComponent},
  { path: 'rapport', component: RapportComponent},
  { path: 'ota', component: OtasComponent},
  { path: 'edit-ota/:id', component: EditOtaComponent},
  { path: 'new-ota', component: NewOtaComponent},
  { path: 'vente', component: VenteComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
  ];


@NgModule({
  /*imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],*/
  declarations: [
    AppComponent,
    PersonnesComponent,
    AboutComponent,
    NewPersonneComponent,
    EditPersonneComponent,
    AgencesComponent,
    NewAgenceComponent,
    EditAgenceComponent,
    ProduitsComponent,
    NewComponent,
    CategoriesComponent,
    VillesComponent,
    EditVilleComponent,
    NewVilleComponent,
    NewCategorieComponent,
    EditCategorieComponent,
    EditProduitComponent,
    ReportingComponent,
    DepotComponent,
    RapportComponent,
    VenteComponent,
    OtasComponent,
    EditOtaComponent,
    NewOtaComponent,
    ProductsListComponent,
    ProductsRowComponent,
    ProductsImageComponent,
    ProductsPriceComponent,
    ProductsDepartmentComponent,
<<<<<<< HEAD
    AsyncLocalStorageModule
=======


>>>>>>> 973a849a06ad8b839ce0e6b036adaf6c69b506cb
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule, ChartsModule,FileUploadModule,Ng2SmartTableModule, AngularFontAwesomeModule
  ],
  providers: [ContactsService,AgenceService,VilleService,ProduitService,OtaService,VenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
