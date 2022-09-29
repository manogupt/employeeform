import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl,FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  title = 'EmployeePayroll';
  constructor(private router:Router) {  }

  session:any=[]

  emppayrollForm = new FormGroup({
    fullName : new FormControl(''),
    ProfileImage : new FormControl (''),
    Gender : new FormControl(''),
    Department : new FormControl(''),
    ChooseYourSalary : new FormControl(''),
    StartDate : new FormControl(''),
    Notes : new FormControl(''),
  })

  Gender="";
  department="";
  
  saveData(){
    let data = this.emppayrollForm.value;
  
    localStorage.setItem('token', JSON.stringify(data));
    this.ngOnInit();
  }
  
  ngOnInit(){
    let data: any = localStorage.getItem('token');
    this.session.push(JSON.parse(data));
   }
  
  removedata(){
    localStorage.clear();
    this.ngOnInit();
  }
  Dashboard(){
    this.router.navigate(['/dashboard'])
  }
  }
  