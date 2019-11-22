import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from 'src/app/shared/forms/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss'],
})
export class DynamicFormQuestionComponent implements OnInit {

  dir = 'rtl';
  constructor() {}

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  ngOnInit() {
    // console.log('DynamicFormQuestionComponent: ', this.question);
    // console.log('Form: ', this.form);
  }
}
