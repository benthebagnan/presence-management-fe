import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [  
    UserFormComponent
  ],
  imports: [ CommonModule, UserRoutingModule ],
  providers: [],
})

export class UserModule {}
