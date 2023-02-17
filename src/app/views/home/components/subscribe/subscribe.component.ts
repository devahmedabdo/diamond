import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  subscribeForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    policyAgreement: [false, [Validators.required, Validators.requiredTrue]],
  });
  invalidSubscribe: boolean = false;
  log(x: any) {
    if (x.invalid) {
      this.invalidSubscribe = true;
    } else {
      console.log(x);
    }
  }
  ngOnInit(): void {
    console.log(this.subscribeForm);
  }
}
