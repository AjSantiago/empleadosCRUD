import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Employee } from '../../shared/components/header/models/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees!: Observable<Employee[]>;
  private employeesCollection!: AngularFirestoreCollection<Employee>;

  constructor(private readonly afs: AngularFirestore) {
    this.employeesCollection = afs.collection<Employee>('employees');
    this.getEmployee();
  }

  onDeleteEmployee(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.employeesCollection.doc(empId).delete();
        resolve(result);
      } catch (e) {
        console.error(e);
      }
    });
  }

  onSaveEmployee(employee: Employee, empId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...employee };
        const result = await this.employeesCollection.doc(id).set(data);
        resolve(result);
      } catch (e) {
        console.error(e);
      }
    });
  }

  private getEmployee(): void {
    this.employees = this.employeesCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Employee))
      );
  }
}
