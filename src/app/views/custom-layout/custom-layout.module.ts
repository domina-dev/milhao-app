import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutComponent } from './custom-layout.component';
import { ToolbarModule } from 'src/app/core/lib/components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    CustomLayoutComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule
  ]
})
export class CustomLayoutModule { }
