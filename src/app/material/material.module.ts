import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  exports: [
    MatListModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
