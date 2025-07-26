import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './views/custom-layout/custom-layout.component';

const routes: Routes = [
    {
        path: '',
        component: CustomLayoutComponent,
        children: [
            // {
            //     path: 'agendamentos',
            //     loadChildren: () =>
            //         import('./views/pages/agendamentos/agendamentos.module').then(
            //             (m) => m.AgendamentosModule
            //         )
            // }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
