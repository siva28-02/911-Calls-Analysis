import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallsperstateComponent } from './callsperstate/callsperstate.component';
import { CallspermonthComponent } from './callspermonth/callspermonth.component';
import { CallsperyearComponent } from './callsperyear/callsperyear.component';
import { CallsperemergencyComponent } from './callsperemergency/callsperemergency.component';
import { CallspersourceComponent } from './callspersource/callspersource.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "callsperstate",
    component: CallsperstateComponent
  },
  {
    path: "callspermonth",
    component: CallspermonthComponent
  },
  {
    path: "callsperyear",
    component: CallsperyearComponent
  },
  {
    path: "callsperemergency",
    component: CallsperemergencyComponent
  },
  {
    path: "callspersource",
    component: CallspersourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
