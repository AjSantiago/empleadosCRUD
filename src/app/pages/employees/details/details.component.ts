import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/components/header/models/employee.interface';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  employee: Employee;

  constructor(private router: Router, private employeesSvc: EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { value: Employee };
    this.employee = state?.value;
  }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined') {
      this.router.navigate(['list']);
    }
  }

  onGoToEdit(): void {
    this.router.navigate(['edit'], { state: { value: this.employee } });
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.employeesSvc.onDeleteEmployee(this.employee.id!);
      alert('Deleted');
      this.onGoBackToList();
    } catch (error) {
      console.log(error);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }
}
