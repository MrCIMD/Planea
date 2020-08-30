import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../services/validators.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public pass1hide = true;
  public pass2hide = true;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private router: Router
  ) {
    this.build_form();
  }

  ngOnInit(): void {}

  private build_form(): void {
    this.form = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.maxLength(255),
            Validators.minLength(5),
          ],
        ],
        email: [
          '',
          [Validators.required, Validators.email, Validators.maxLength(255)],
        ],
        password: ['', [Validators.required, Validators.maxLength(255)]],
        password_confirmation: [
          '',
          [Validators.required, Validators.maxLength(255)],
        ],
      },
      {
        validators: this.validatorsService.confirmation(
          'password',
          'password_confirmation'
        ),
      }
    );
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/dashboard']);
  }
}
