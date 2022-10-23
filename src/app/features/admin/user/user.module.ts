import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [  
    UserFormComponent
  ],
  imports: [ CommonModule, UserRoutingModule, ],
  providers: [],
})

export class UserModule {}
