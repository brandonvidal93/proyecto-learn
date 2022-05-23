import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ListadoUsuariosComponent } from './components/directivas/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './components/directivas/usuario/usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path          : '',
    redirectTo    : '/inicio',
    pathMatch     : 'full'
  },
  {
    path          : 'inicio',
    component     : InicioComponent
  },
  {
    path          : 'directivas',
    component     : DirectivasComponent,
    children      : [
      {
        path      : '',
        component : ListadoUsuariosComponent
      },
      {
        path      : 'usuario/:id',
        component : UsuarioComponent
      }
    ]
  },
  {
    path          : '**',
    component     : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
