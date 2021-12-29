import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  employees$ = this.employeesSvc.employees;

  constructor(private router: Router, private employeesSvc: EmployeesService) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.router.navigate(['edit'], { state: { value: item } });
  }
  onGoToSee(item: any): void {
    this.router.navigate(['details'], { state: { value: item } });
  }
  async onGoToDelete(empId?: string): Promise<void> {
    try {
      await this.employeesSvc.onDeleteEmployee(empId!);
      alert('Deleted');
    } catch (error) {
      console.log(error);
    }
  }
}
