import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err = false;
  registerFormGroup: FormGroup;
// using FormBUilder to create reactive form
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
     // username: '',
      username: ['', [ Validators.required, Validators.minLength(3)]],
      passwords: this.fb.group({
        password: [''],
        confirmPassword: ''
      }, {validator: [this.validatePassword]})
      // passwordGroup: this.fb.group({
      //   password: '',
      //   confirm_password: ''
      // }, {validator: this.passwordValidator})
    });
  }

  validatePassword(password: FormGroup): null | {} {
    // es6 destructure
    const {password: p, confirmPassword: cp} = password.value;
    return p === cp ? null : {passwordsNotMatch: 'Password has to match!'};
  }
  register() {
    console.log(this.registerFormGroup);
  }
  onSubmit() {
    if (this.registerFormGroup.valid) {
      const {username, passwordGroup, passwordGroup: {password}} = this.registerFormGroup.value;
      this.authService.register({username, password})
        .subscribe(res => {
          if (res.success) {
            this.router.navigate(['/users/login']);
          } else {
            // show error text.
          }
        }, (err) => { // error handling
          this.err = true;
        });
    } else {
      return false;
    }
  }

  // passwordValidator({value}: FormGroup) {
  //   const {password, confirm_password} = value;
  //   return password === confirm_password ? null : {passwordGroup: 'Passwords don\'t match!'};
  // }

}
