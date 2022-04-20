import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  exports: [
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
