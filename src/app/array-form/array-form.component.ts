import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';


@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })
  }

  get formPhones(){
    return this.myForm.get('phones') as FormArray;
  }

  addPhone(){
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });

    this.formPhones.push(phone);
  }

  deletePhone(i: number){
    this.formPhones.removeAt(i);
  }

}
