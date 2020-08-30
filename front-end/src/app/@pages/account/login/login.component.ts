import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public pass1hide = true;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.build_form();
  }

  ngOnInit(): void {}

  private build_form(): void {
    this.form = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
      ],
      password: ['', [Validators.required, Validators.maxLength(255)]],
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/dashboard']);
  }
}
