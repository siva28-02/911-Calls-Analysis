import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-callspermonth',
  templateUrl: './callspermonth.component.html',
  styleUrls: ['./callspermonth.component.scss']
})
export class CallspermonthComponent implements OnInit {
  @Output() callspermonthrdisplay = new EventEmitter<any>();
  @Input() callspermonthdisplay!:any;
  CallData:any[]=[];
  states:any[]=[];
  years:any[]=[];
  selectedState:string="";
  selectedYear:any;

  constructor( private globalService:GlobalserviceService) { }

  ngOnInit(): void {
    this.getyearsandstates();
  }

  Close()
  {
    this.callspermonthrdisplay.emit(false);
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
    this.globalService.getCallsPerMonth(this.selectedYear,this.selectedState).subscribe((response:any)=>{
      console.log(response)
      if(response)
        this.CallData=response.result;
    })
  }

}
