import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-list-writble-form',
  templateUrl: './list-writble-form.component.html',
  styleUrls: ['./list-writble-form.component.css']
})
export class ListWritbleFormComponent implements OnInit {
  dynamicGroup: FormGroup;
  selectedData: any[] = [];
  data: any;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.dynamicGroup = new FormGroup({
      dynamicFormArray: new FormArray([])
    });
    this.data = [
      {
        seq: 1,
        id: 1,
        text: 'what ur ??',
        options: [
          'yes', 'no', 'n/a'
        ],
        select: 'radio',
        selectedValues: {
          value: 'yes',
          remarks: 'asdfasfd'
        }
      },
      {
        seq: 2,
        id: 2,
        required: true,
        text: 'what am i ??',
        options: [
          'yes', 'no', 'n/a'
        ],
        select: 'checkbox',
        selectedValues: {
          value: 'yes',
          remarks: 'asdfasfd'
        }
      },
      {
        seq: 3,
        id: 3,
        text: 'who r u ??',
        options: [
          'yes', 'no', 'n/a'
        ],
        select: 'radio',
        selectedValues: {
          value: 'n/a',
          remarks: 'checkasfd'
        }
      },
      {
        seq: 4,
        id: 4,
        text: 'who r u ??',
        options: [
          'yes', 'no', 'n/a'
        ],
        select: 'radio',
      }
  ];

    this.createDynamicFormGroup();
    this.setValues();
  }

  getFormArray(): FormArray {
    return <FormArray>(this.dynamicGroup.get('dynamicFormArray'));
  }

  createDynamicFormGroup(): void {
    const list =  <FormArray>(this.dynamicGroup.get('dynamicFormArray'));
    this.data.forEach(element => {
      const group: FormGroup = this.getFormGroup(element.id);
      list.controls.push(group);
    });
  }

  setValues(): void {
    const control: any = this.dynamicGroup.get('dynamicFormArray');
    control.controls = [];
    this.data.forEach(details => control.controls.push(this.mapFormArray(details)));
  }

  mapFormArray(data: any): any {
    if (data.selectedValues) {
      return this.getFormGroup(data.id, data.selectedValues.value, data.selectedValues.remarks)
    } else {
      return this.getFormGroup(data.id);
    }
  }

  getFormGroup(id: any, value: any = '', remark: any = ''): FormGroup {
    const group = new FormGroup({
      id: new FormControl(id, Validators.required),
      value: new FormControl(value, Validators.required),
      remarks: new FormControl(remark)
    });
    return group;
  }

  save(): void {
    console.log(this.dynamicGroup);
    console.log(this.dynamicGroup.value);
    console.log(this.getFormArray().getRawValue());
  }

}
