// import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../shared/services/auth.service';
// import {Router} from '@angular/router';
// import {Location} from '@angular/common';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//
//   constructor(
//     private auth: AuthService,
//     private location: Location,
//     private router: Router
//   ) { }
//
//   ngOnInit() {
//
//   }
//   submit(f) {
//     console.log(f.value);
//     this.auth.login(f.value)
//       .subscribe(
//         next: value => {
//           if (value.success) {
//             // this auth.user = {username: blah}
//             this.auth.user = value.user;
//             this.router.navigate().catch();
//           }
//         },
//         error: err => console.log(err)
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err = false;
  fbSub;

  constructor(
    private as: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  // onSubmit(value) {
  //   this.as.login(value as User)
  //     .subscribe(res => {
  //       if (res.success) {
  //         this.router.navigate(['/products']);
  //       } else {
  //         this.err = true;
  //       }
  //     });
  // }

  onRegister() {
    this.router.navigate(['/users/register']);
  }

  updateErr() {
    if (this.err) {
      this.err = false;
    }
  }

}

