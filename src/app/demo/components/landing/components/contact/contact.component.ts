import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  providers: [MessageService],
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
  disableForm = false;
  constructor(public router: Router, private customerService: CustomerService, private messageService: MessageService) { 

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
    this.disableForm = true;
    const data = {
      email: this.enquireForm.controls['email'].value ,
      message:this.enquireForm.controls['message'].value,
      lastName: this.enquireForm.controls['lastName'].value,
      firstName:this.enquireForm.controls['firstName'].value,
      phoneNumber:this.enquireForm.controls['phoneNumber'].value
    }
    this.customerService.postCustomer(data)
    .then(() => {
      this.clearForm();
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Details Recorded Successfully', life: 3000 });
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Unable to record details at the moment. Please try later.', life: 3000 });
    }).finally(() => {
      this.disableForm = false;
    })
  }

  scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
      }, wait)
    }
  }

  clearForm() {
    this.enquireForm.reset();
  }
}
