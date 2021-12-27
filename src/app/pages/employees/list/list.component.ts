import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  fakeData = [
    {
      name: 'Albert',
      lastName: 'Santiago',
      email: 'yo@gmail.com',
      startDate: '01/10/2021',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.router.navigate(['edit'], { state: { value: item } });
  }
  onGoToSee(item: any): void {
    this.router.navigate(['details'], { state: { value: item } });
  }
  onGoToDelete(item: any): void {
    alert('Deleted');
  }
}
