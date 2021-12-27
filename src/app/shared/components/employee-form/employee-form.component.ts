import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../header/models/employee.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee;
  employeeForm!: FormGroup;
  private isEmail =
    '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}';

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { value: Employee };
    this.employee = state.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.employeeForm.patchValue(this.employee!);
    }
  }

  onSave(): void {
    console.log('Saved', this.employeeForm.value);
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
    });
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }
}
