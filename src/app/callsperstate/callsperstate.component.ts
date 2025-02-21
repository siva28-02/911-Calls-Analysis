import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-callsperstate',
  templateUrl: './callsperstate.component.html',
  styleUrls: ['./callsperstate.component.scss']
})
export class CallsperstateComponent implements OnInit {
  @Output() rdisplay = new EventEmitter<any>();
  @Input() display!:any;
  CallData:any[]=[];


  constructor( private globalService:GlobalserviceService) { }

  ngOnInit(): void {
    this.getcalldata();
  }

  Close()
  {
    this.rdisplay.emit(false);
  }

  getcalldata()
  {
    this.globalService.getCallsPerState().subscribe((response:any)=>{
      console.log(response)
      if(response)
        this.CallData=response.result;
    })
  }
}
