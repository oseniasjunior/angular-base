import {Component, OnInit} from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {DepartmentService} from '../services/department.service';
import {Department} from '../models/department';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {MatCard, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    DatePipe,
    MatCardModule
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'created_at'];
  dataSource: Department[] = [];

  constructor(private departmentService: DepartmentService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.departmentService.getAll().subscribe(response => {
      this.dataSource = response;
    });
  }

  goDepartmentItem() {
    this.router.navigate(['department/new']).then();
  }

}
