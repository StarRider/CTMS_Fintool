import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit 
{
categories:String[];
category:String;
modes:String[]=["Cheque","Cash","Online","Ewallets","UPI"];
modeOfPayment:String;
errorMessage:String;
entryForm:FormGroup;
rangerList:any;

constructor(private formBuilder:FormBuilder,private entryService:EntryService) { }

  ngOnInit() { 
    this.entryForm = this.formBuilder.group
    (
      {
        financeCategory : ["", Validators.required],
        type:["",Validators.required],
        amount:["",Validators.required],
        date:["",Validators.required],
        mode:["",Validators.required]
      }
    );

  }
view()
{
  this.errorMessage=null;
  this.rangerList=null;

  this.entryService.book(this.entryForm.value)
                          .subscribe((response) => {
                            console.log(response);
                            this.rangerList = response;},
                                     (response) => {
                                      console.log(response); 
                                      this.errorMessage = response.error.message}
                                    );

}
initializeIncomeCategories(){
  var incomeCategories: String[];
  incomeCategories=["Choose a Category","Tithe","Offerings","Grant","Sales","Funds"]
  this.categories=incomeCategories
  console.log(this.entryForm.controls)
}
initializeExpenditureCategories(){
  var expenditureCategories: String[];
  expenditureCategories=["Choose a Category","Miscellaneous","Lendings","Tax","Loans","Gifts","Mission Supports",""]
  this.categories=expenditureCategories
}

}