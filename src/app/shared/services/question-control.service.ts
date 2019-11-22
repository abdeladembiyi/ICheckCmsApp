import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { QuestionBase } from '../forms/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};
    // console.log('QuestionControlService: ', questions);
    // console.log('Question', questions);
    questions.forEach(question => {
      // console.log('QuestionType: ', question.controlType);
      if (question.controlType === 'checkbox') {
        // tslint:disable-next-line:no-string-literal
        group[question.key] = this.buildCheckBoxArray(question['options']);
      } else {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
      }
    });
    return new FormGroup(group);
  }

  buildCheckBoxArray(itemsArr): any {
    const arr = itemsArr.map(item => {
      // console.log('Item CheckBox: ', item);
      return new FormControl(item.value);
    });
    return new FormArray(arr);
   }
}
