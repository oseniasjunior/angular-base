import {Component, OnInit} from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DepartmentService} from '../../services/department.service';
import {Department} from '../../models/department';
import {MatCard, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-department-item',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './department-item.component.html',
  styleUrl: './department-item.component.css'
})
export class DepartmentItemComponent implements OnInit {
  formGroup: FormGroup;
  department: Department = new Department();

  constructor(private router: Router,
              private departmentService: DepartmentService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  goDepartmentList() {
    this.router.navigate(['/department']).then();
  }

  save() {
    let formData = this.formGroup.getRawValue();
    Object.assign(this.department, formData);
    this.departmentService.save(this.department).subscribe(() => {
      this.router.navigate(['/department']).then();
    });
  }

}
