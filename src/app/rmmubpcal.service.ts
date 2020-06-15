import { Injectable, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


const URL="/sap/rmmValue";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
     'Access-Control-Allow-Origin': '*',
     'Cache-control': 'no-cache',
      'Expires': '0',
      'Pragma': 'no-cache'

  })
};

@Injectable({
  providedIn: 'root'
})
export class RmmubpcalService {

  @Input() form1:FormGroup;
  public loanData:any = "";
  constructor(private http: HttpClient) { }

  postMethod(formObj){
    return this.http.post(URL, formObj, httpOptions);
  }
}
