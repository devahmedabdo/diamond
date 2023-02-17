import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.scss'],
})
export class UserLogComponent implements OnInit {
  constructor(private auth: AuthService, private fb: FormBuilder) {}
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  login(data: any) {
    this.auth.loging(data).subscribe({
      next: (token: any) => {
        localStorage.setItem('token', token);
      },
      error: (err) => {
        this.changeLoginStatus(true);
      },
    });
  }
  loginInvalid: boolean = false;
  changeLoginStatus(status: boolean) {
    this.loginInvalid = status;
  }
  ngOnInit(): void {}
}
