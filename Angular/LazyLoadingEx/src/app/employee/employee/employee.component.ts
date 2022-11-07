import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [] as IEmployee[];

  constructor() { }

  ngOnInit(): void {
    this.employees=[
      { empNumber: 101, empName: 'sathesh', empSalary:65000, empAddress:'hyderabad'},
      { empNumber: 102, empName: 'satya', empSalary:55000, empAddress:'hyderabad'},
      { empNumber: 103, empName: 'rajesh', empSalary:75000 },
     // { empNumber: 104, empName: 'venky', empSalary:60000, empAddress:'hyderabad'},
     // { empNumber: 105, empName: 'rama', empSalary:67000 }
    ];
  }

}
