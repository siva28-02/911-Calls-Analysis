import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  baseAPI:string="https://911backend2.azurewebsites.net/";

  constructor(private http:HttpClient) { }

  getCallsPerState()
  {
    return this.http.get(this.baseAPI+"callsperstate");
  }

  getCallsPerYear()
  {
    return this.http.get(this.baseAPI+"callsperyear");
  }

  getCallsPerMonth(year:string,state:string)
  {
    return this.http.get(this.baseAPI+"callspermonth/"+year+"/"+state);
  }

  getCallsPerEmergency(year:string,state:string)
  {
    return this.http.get(this.baseAPI+"callsfortypeofemergency/"+year+"/"+state);
  }

  getCallsPerSources(year:string,state:string)
  {
    return this.http.get(this.baseAPI+"callsources/"+year+"/"+state);
  }

  getyearsandstates()
  {
    return this.http.get(this.baseAPI+"uniqueyearstate");
  }
}
