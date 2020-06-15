import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RmmubpcalService } from 'src/app/rmmubpcal.service';

@Component({
  selector: 'app-calculatermm',
  templateUrl: './calculatermm.component.html',
  styleUrls: ['./calculatermm.component.css']
})
export class CalculatermmComponent implements OnInit {

  public form1: FormGroup;
  public form2: FormGroup;
  public Values: any = new Map([
    ['1-OLD-75DAY-GURANTOR',1],
    ['2-ACTUAL-PRIN-BALANCE',2],
    ['1-OLD-75DAY-CASH',3],

  ]);
  public Flags: any = new Map([
    ['Y-Active', 'Y'],
    ['N-Inactive', 'N']
  ]);
  public Status: any = new Map([
    ['1-Active', 1],
    ['2-Delinquent', 2],
    ['3-Foreclosure', 3],
    
  ]);

  public loanData:any ="";

  constructor(private fb: FormBuilder, private fb1: FormBuilder, private _rmmubpcal: RmmubpcalService) { }

  ngOnInit() {
    this.form1 = this.fb.group({
      groupPoolPercent:[""],
      fmPartPercent: ["1"],
      uPBInvestorPriorAmt: [""],
      mortgageUPBPriorAmt: [""],
      mortgageUPBAmt: [""],
      monthlyPIPaymtAmt: [""],
      couponRate: [""],
      poolTerm: [""],
      securityProdCode: [""],
      maturityDate: [""],
      noteMaturityDate: [""],
      principalAmmortizationCode: [""],
      activeInactiveEditCode: [""],
      negativeAmortizationAdjAmt: [""],
      interestPaidToDate:[""],
      actualUpbAdjustmentAmt: [""],
      loanStatusCode:[""]


    });

    this.form2 = this.fb1.group({
      rmm: [""],
      upb: [""]
    });
  }

  submit(){
    this._rmmubpcal.postMethod(this.form1.value).subscribe(data =>
      {
        this.loanData = data;
      })
  }


}
