import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  
]

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
