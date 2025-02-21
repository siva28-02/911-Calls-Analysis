import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-callsperemergency',
  templateUrl: './callsperemergency.component.html',
  styleUrls: ['./callsperemergency.component.scss']
})
export class CallsperemergencyComponent implements OnInit {

  @Output() callsperemergencyrdisplay = new EventEmitter<any>();
  @Input() callsperemergencydisplay!:any;
  CallData:any[]=[];
  states:any[]=[];
  years:any[]=[];
  selectedState:string="";
  selectedYear:any;

  constructor( private globalService:GlobalserviceService) { }

  ngOnInit() {
    this.getyearsandstates();
  }

  Close()
  {
    this.callsperemergencyrdisplay.emit(false);
  }

  getyearsandstates()
  {
    this.globalService.getyearsandstates().subscribe((response:any)=>{
      console.log(response);
      if(response)
        {
          (response.years).forEach((year:number)=>{
            this.years.push({"year":year,"value":year})
          });
          (response.states).forEach((state:string)=>{
            this.states.push({"state":state,"value":state})
          });
        }

    })
  }


  getcalldata()
  {
    this.globalService.getCallsPerEmergency(this.selectedYear,this.selectedState).subscribe((response:any)=>{
      console.log(response)
      if(response)
        this.CallData=response.result;
    })
  }


}
