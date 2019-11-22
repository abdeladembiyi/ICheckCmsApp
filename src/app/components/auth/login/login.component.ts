import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormErrorStateMatcher } from 'src/app/core/handlers/form-error-state-matcher';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Icons } from 'src/app/shared/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username = '';
  password = '';
  matcher = new FormErrorStateMatcher();
  isLoadingResults = false;
  message = '';
  iCheckLogo = Icons.iCheckLogo;

  /*, @Inject(LOCALE_ID) public locale: string*/

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // console.log('Locale: ', this.locale);
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required/*, Validators.minLength(6)*/]],
      password: [null, [Validators.required/*, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$')*/]]
    });
  }

  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(res => {
        console.log('Login: ', res);
        if (res.message) {
          this.message = res.message;
        }
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('site', res.site);
          if (res.role) {
            localStorage.setItem('role', res.role);
            if (res.role === 'admin' ) {
              this.router.navigate(['admin']);
            } else {
              this.router.navigate(['engins']);
            }
          }
        }
      }, err => console.log('Error: ', err));
  }
}
