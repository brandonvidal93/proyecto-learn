import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { CardUserComponent } from './components/directivas/card-user/card-user.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListadoUsuariosComponent } from './components/directivas/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './components/directivas/usuario/usuario.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
    DirectivasComponent,
    CardUserComponent,
    InicioComponent,
    PageNotFoundComponent,
    ListadoUsuariosComponent,
    UsuarioComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
