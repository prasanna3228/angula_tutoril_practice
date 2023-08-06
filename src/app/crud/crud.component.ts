import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  genderList = ['Male', 'Female', 'Others'];

  formData = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    dob: new FormControl(''),
    place: new FormControl(''),
    mobilenumber: new FormControl(''),
    gender: new FormControl(''),
  });

  listOfDate: any[] = [];
  indexselectedToEdit: any;
  isedit = false;

  OnCancel() {
    this.formData.reset();
  }

  OnSubmit() {
    console.log('submitted data ');
    console.log('Form data', this.formData.value);
    this.listOfDate.push(this.formData.value);
    this.formData.reset();
  }

  onEdit(index: any) {
    this.isedit = true;
    this.formData.patchValue(this.listOfDate[index]);
    // const formControl = this.formData.controls[index];
    // this.formData.patchValue(formControl.value);
    this.indexselectedToEdit = index;
  }

  onSave() {
    this.listOfDate.splice(this.indexselectedToEdit, 1);
    this.listOfDate.push(this.formData.value);
  }

  onDelete(index: any) {
    this.listOfDate.splice(index, 1);
  }
}
