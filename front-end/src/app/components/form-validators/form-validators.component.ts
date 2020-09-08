import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css'],
})
export class FormValidatorsComponent implements OnInit {
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
