import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CngComponent } from './cng/cng/cng.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'Create-new-gallery', component:CngComponent}
  // {path:'Create-new-gallery', component:ArtCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
