import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
    controlType = 'checkbox';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        // tslint:disable-next-line:no-string-literal
        this.options = options['options'] || [];
    }
}
