import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email!: FormControl;
  firstName!: FormControl;
  lastName!: FormControl;
  message!: FormControl;
  phoneNumber!: FormControl;
  enquireForm!: FormGroup;

  constructor(public router: Router) { 

  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.phoneNumber = new FormControl('', [Validators.required]);
    this.message = new FormControl('', [Validators.required]);
    this.enquireForm = new FormGroup({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      message: this.message,
    });
  }

  submitForm() {
    
  }
}
