import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  callsperstate:boolean=false;
  callsperyear:boolean=false;
  callspermonth:boolean=false;
  callsperemergency:boolean=false;
  callspersources:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  displayCallsperstate()
  {
    this.callsperstate=true;
  }

  displayCallsperyear()
  {
    this.callsperyear=true;
  }

  displayCallsPerMonth()
  {
    this.callspermonth=true;
  }

  displayCallsPerEmergency()
  {
    this.callsperemergency=true;
  }

  displayCallsPerSources()
  {
    this.callspersources=true;
  }

  closeDialog(event:any)
  {
    this.callsperstate=event
  }

  closeCallsPerYear(event:any)
  {
    this.callsperyear=event;
  }

  closeCallsPerMonth(event:any)
  {
    this.callspermonth=event;
  }

  closeCallsPerEmergency(event:any)
  {
    this.callsperemergency=event
  }

  closeCallsPerSources(event:any)
  {
    this.callspersources=event;
  }
}
