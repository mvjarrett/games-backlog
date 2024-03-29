import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  serverUrl = environment.serverUrl;
  signupForm = new UntypedFormGroup({
    username: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', Validators.required),
  });

  constructor(
    private http: HttpClient,
    private route: Router,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {}
  onFormSubmit(): void {
    if (this.signupForm.valid) {
      const userData = {
        username: this.signupForm.controls['username'].value,
        password: this.signupForm.controls['password'].value,
      };
      this.http
        .post(this.serverUrl + '/users/register', userData)
        .subscribe((newUser: any) => {
          if (newUser.exist) {
            this.snackBarService.openSnackBar(
              'User already exists, please log in.',
              'Close',
              4000
            );
          } else {
            this.route.navigate(['/login']).then((navigated: boolean) => {
              if (navigated) {
                this.snackBarService.openSnackBar(
                  'User registered, please log in.',
                  'Close',
                  4000
                );
              }
            });
          }
        });
    } else {
      this.snackBarService.openSnackBar(
        'Fields cannot be empty!',
        'Close',
        4000
      );
    }
  }
}
