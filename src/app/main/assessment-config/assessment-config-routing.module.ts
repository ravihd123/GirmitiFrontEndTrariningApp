import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { TestConfigComponent } from './assessment-config.component';

const routes: Routes = [{ path: '', component: TestConfigComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule,
    ReactiveFormsModule]
})
export class TestConfigRoutingModule { }
