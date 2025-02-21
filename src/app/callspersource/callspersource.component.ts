import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-callspersource',
  templateUrl: './callspersource.component.html',
  styleUrls: ['./callspersource.component.scss']
})
export class CallspersourceComponent implements OnInit {

  @Output() callspersourcesrdisplay = new EventEmitter<any>();
  @Input() callspersourcesdisplay!:any;
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
    this.callspersourcesrdisplay.emit(false);
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
    this.globalService.getCallsPerSources(this.selectedYear,this.selectedState).subscribe((response:any)=>{
      console.log(response)
      if(response)
        this.CallData=response.result;
    })
  }

}
