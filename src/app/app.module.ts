import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { GlobalserviceService } from './globalservice.service';
import { HomeComponent } from './home/home.component';
import { ChipModule } from 'primeng/chip';
import { CallsperstateComponent } from './callsperstate/callsperstate.component';
import { CallsperyearComponent } from './callsperyear/callsperyear.component';
import { CallspermonthComponent } from './callspermonth/callspermonth.component';
import { CallsperemergencyComponent } from './callsperemergency/callsperemergency.component';
import { CallspersourceComponent } from './callspersource/callspersource.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallsperstateComponent,
    CallsperyearComponent,
    CallspermonthComponent,
    CallsperemergencyComponent,
    CallspersourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ChipModule,
    DialogModule
  ],
  providers: [GlobalserviceService],
  bootstrap: [AppComponent],
  exports:[CallsperemergencyComponent,CallspermonthComponent,CallspersourceComponent,
    CallsperstateComponent,CallsperyearComponent]
})
export class AppModule { }
