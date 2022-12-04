import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultant-form',
  templateUrl: './consultant-form.component.html',
  styleUrls: ['./consultant-form.component.css'],
})
export class ConsultantFormComponent implements OnInit {
  personalDetails!: FormGroup;
  skills!: FormGroup;
  experience!: FormGroup;
  payment!: FormGroup;
  personal_step = false;
  skills_step = false;
  experienceField_step = false;
  paymentField_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      BOD: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
    });

    this.skills = this.formBuilder.group({
      frontend: ['', Validators.required],
      backend: ['', Validators.required],
      frameworks: ['', Validators.required],
    });

    this.experience = this.formBuilder.group({
      years: ['', Validators.required],
      // university: ['', Validators.required],
      // total_marks: ['', Validators.required],
    });

    this.payment = this.formBuilder.group({
      iban: ['', Validators.required],
      bic: ['', Validators.required],
      institute: ['', Validators.required],
      accountOwner: ['', Validators.required],
      transactionDate: ['', Validators.required],
    });
  }

  get personal() {
    return this.personalDetails.controls;
  }

  get skillsField() {
    return this.skills.controls;
  }

  get experienceField() {
    return this.experience.controls;
  }

  get paymentField() {
    return this.payment.controls;
  }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return;
      }
      this.step++;
    } else if (this.step == 2) {
      this.skills_step = true;
      if (this.skills.invalid) {
        return;
      }
      this.step++;
    } else if (this.step == 3) {
      this.experienceField_step = true;
      if (this.experience.invalid) {
        return;
      }
      this.step++;
    }
  }

  previous() {
    this.step--;

    if (this.step == 1) {
      this.skills_step = false;
    }
    if (this.step == 2) {
      this.experienceField_step = false;
    }
    if (this.step == 3) {
      this.paymentField_step = false;
    }
  }

  submit() {
    if (this.step == 4) {
      this.paymentField_step = true;
      if (this.payment.invalid) {
        return;
      }
      alert('fertig!!');
    }
  }
}
