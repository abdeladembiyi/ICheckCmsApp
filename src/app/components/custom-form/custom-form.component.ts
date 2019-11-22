import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'src/app/shared/services/question.service';
import { Icons } from 'src/app/shared/icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
  providers: [QuestionService]
})
export class CustomFormComponent implements OnInit {

  // AppComponent
  @Input() engin = '';
  questions: any[];

  constructor(private service: QuestionService,private router: Router) {
    // this.questions = service.getQuestions();
    // service.getQuestions();
  }
  logoutIcon = Icons.logoutIcon;


  async ngOnInit() {
    // await this.service.getQuestionsFromAPI().then(responses => console.log('Attelage OnInit: ', responses));
    await this.service.getQuestionsFromAPI(this.engin).then(async qsc => {
      console.log('CustomForm: ', qsc[0]);
      this.questions = qsc;
    });
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    this.router.navigate(['login']);
  }

}
