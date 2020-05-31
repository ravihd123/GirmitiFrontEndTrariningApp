import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestConfigRoutingModule } from './assessment-config-routing.module';
import { TestConfigComponent } from './assessment-config.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TestConfigComponent],
  imports: [
    CommonModule,
    TestConfigRoutingModule,
    MaterialModule,
    SharedModule,
    MatFormFieldModule,
    HttpClientModule
  ]
})
export class TestConfigModule { }
