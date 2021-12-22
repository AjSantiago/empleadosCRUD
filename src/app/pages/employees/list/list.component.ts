import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
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
