import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-callsperyear',
  templateUrl: './callsperyear.component.html',
  styleUrls: ['./callsperyear.component.scss']
})
export class CallsperyearComponent implements OnInit {
  @Output() callsperyearrdisplay = new EventEmitter<any>();
  @Input() callsperyeardisplay!:any;
  CallData:any[]=[];


  constructor( private globalService:GlobalserviceService) { }

  ngOnInit(): void {
    this.getcalldata();
  }

  Close()
  {
    this.callsperyearrdisplay.emit(false);
  }

  getcalldata()
  {
    this.globalService.getCallsPerYear().subscribe((response:any)=>{
      console.log(response)
      if(response)
        this.CallData=response.result;
    })
  }
}
