import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  employee: any = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { value: null };
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

  onDelete(): void {
    alert('Deleted');
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }
}
