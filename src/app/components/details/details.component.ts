import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/shared/services/question.service';
import { CheckListService } from 'src/app/core/services/check-list/check-list.service';
import { QuestionBase } from 'src/app/shared/forms/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  dir = "rtl";
  keys1 = [];
  keys2 = [];
   keys3 = [];
  //keys4 = [];

  checkListValues;

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private checkListService: CheckListService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      console.log(param)
      this.checkListService.getCheckListByID(param.id).subscribe(checklist => {
        this.checkListValues = checklist;
        console.log('Checklist: ', this.checkListValues);
        // console.log('engin :',checklist['vehicule'].engin)
        if (checklist) {
          switch (checklist['vehicule'].engin) {
            case 'GrueMobile': this.getQuestionForAttelage(checklist); break;
            case 'Nacelle': this.getQuestionForAttelage(checklist); break;
            case 'Camion': this.getQuestionForAttelage(checklist); break;
            default: /*this.getQuestionForEngins(checklist);*/ break;
          }
        }
      })
    });

  }

  getQuestionForAttelage(checklist) {
    console.log('engin :',checklist['vehicule'].engin)
    this.questionService.getQuestionsForAttelages(checklist['vehicule'].engin).then(res => {
      this.questions = res;
      console.log('Res: ', res);
      let controle1 = 'مراقبة الحالة العامة للسائق';
      let controle2 = 'مراقبة حالة المعدات';
      let controle3 = 'مراقبة الحالة العامة للعربة';
      //let controle4 = 'مراقبة الحالة العامة للعربة';

      res.forEach(element => {
        if (element.key === controle1) {
          console.log(checklist['catchAll'][controle1]);
          this.keys1 = this.arrayToJson(element['options'], checklist['catchAll']['checklistConducteur']);
          console.log('Keys 1: ', this.keys1);
          this.questions[0]['options'] = this.keys1;
        }
        if (element.key === controle2) {
          console.log(checklist['catchAll'][controle2]);
          this.keys2 = this.arrayToJson(element['options'], checklist['catchAll']['checklistEquipement']);
          console.log('Keys 2: ', this.keys2);
          this.questions[1]['options'] = this.keys2;
        }
        if (element.key === controle3) {
          console.log(checklist['catchAll'][controle3]);
          this.keys3 = this.arrayToJson(element['options'], checklist['catchAll']['checklistAttelage']);
          console.log('Keys 3: ', this.keys3);
          this.questions[2]['options'] = this.keys3;
        }
        // if (element.key === controle4) {
        //   console.log(checklist['catchAll'][controle4]);
        //   this.keys4 = this.arrayToJson(element['options'], checklist['catchAll']['checklistAttelage']);
        //   console.log('Keys 4: ', this.keys4);
        //   this.questions[3]['options'] = this.keys4;
        // }
        console.log('Question ', this.questions);
      });
    });
  }

  getQuestionForEngins(checklist) {
    this.questionService.getQuestionsFromAPI(checklist['vehicule'].engin).then(res => {
      this.questions = res;
      console.log('Res: ', res);
      let controle1 = 'مراقبة عينية للحالة العامة للعربة الرافعة';
      let controle2 = 'مراقبة عمل الآلية';
      // let controle3 = 'مراقبة مكان التدخل';

      res.forEach(element => {
        if (element.key === controle1) {
          console.log(checklist['catchAll'][controle1]);
          this.keys1 = this.arrayToJson(element['options'], checklist['catchAll'][controle1]);
          console.log('Keys 1: ', this.keys1);
          this.questions[0]['options'] = this.keys1;
        }
        if (element.key === controle2) {
          console.log(checklist['catchAll'][controle2]);
          this.keys2 = this.arrayToJson(element['options'], checklist['catchAll'][controle2]);
          console.log('Keys 2: ', this.keys2);
          this.questions[1]['options'] = this.keys2;
        }
        // if (element.key === controle3) {
        //   console.log(checklist['catchAll'][controle3]);
        //   this.keys3 = this.arrayToJson(element['options'], checklist['catchAll'][controle3]);
        //   console.log('Keys 3: ', this.keys3);
        //   this.questions[2]['options'] = this.keys3;
        // }
        console.log('Question ', this.questions);
      });
    });
  }
  
  arrayToJson(options: any = [], values: any = []): any[] {
    let index = 0;
    let keys = [];
    options.forEach(elt => {
      let js = {key: elt.key, value: values[index]};
      keys.push(js);
      index++;
    });
    return keys;
  }
}
