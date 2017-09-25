import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes =[
    {path: '', redirectTo: 'search', pathMatch:'full'},
    {path:  'search', component:SearchComponent},
    {path: 'movie/:id', component:DisplayComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
