import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  desc1 = `\tServes as subject matter expert, possessing in-depth knowledge of Biometric Processing.\n
  \tParticipates as needed in all phases of software development with emphasis on the planning, analysis, testing, integration, documentation, and presentation phases. \n
  \tDirects and controls activities for a client, having overall responsibility for financial management , methods, and staffing to ensure that technical requirements are met. \n
  \tInteractions involve client negotiations and interfacing with senior management. \n
  \tDecision-making and domain knowledge may have a critical impact on overall project implementation. \n
  \tMay supervise others. \n
  \tProvides technical/management leadership on major tasks or technology assignments. Establishes goals and plans that meet project objectives . `
  qual1 = `\tMaster’s Degree in a related field – Science, CS, Biometric Systems\n
  \t10 years of related experience\n
  \tHas Biometric Processing domain and expert technical knowledge. `
  benefits1 = `\tFlexible Work Hours \n
  \tPart Time \n
  \tWork From Home`;
  email!: FormControl;
  firstName!: FormControl;
  lastName!: FormControl;
  position!: FormControl;
  phoneNumber!: FormControl;
  file!: FormControl;
  applyForm!: FormGroup;
  category: any;
  categoryList = [
    {name: 'Management', value: 'Management'},
    {name: 'Marketing', value: 'Marketing'},
    {name: 'Technical Review', value: 'Tech Review'},
    {name: 'Subject Matter Expert', value: 'Subject Matter Expert'},
    {name: 'Non-Tech Review', value: 'Non-Tech Review'},
    {name: 'Senior Manager', value: 'Senior Manager'},
    {name: 'Other', value: 'Other'},
  ];
  type: any;
  typeList = [
    {name: 'Full Time', value: true},
    {name: 'Part Time', value: false},
  ];
  count = 0;
  testimonial = [
    {name: 'Juhi Srivastava', rating: 5, content: `Great place to work!
    Always encouraging and supportive team members.
    Happy, friendly and professional working environment.
    Lot of learning opportunities and wide scope of handling diverse projects.`},
    {name: 'Archana Bharadwaj', rating: 5, content: 'Great and very supportive team to work with. Happy to be a part of LCT👍'},
    {name: 'Ayush Gupta', rating: 5, content: 'Friendly environment, Good to work'}
];
  products: any = [
    {
     position: 'Subject Matter Expert',
     posted: '23rd Dec, 2023',
     description: this.desc1,
     fullTime: false,
     workFromHome: true,
     qualification: this.qual1,
     benefits: this.benefits1,
     collapse: false
    },
    {
      position: 'Senior Manager',
      posted: '1st Jan, 2024',
      description: '\t-',
      fullTime: true,
      workFromHome: true,
      qualification: '\t-',
      benefits: this.benefits1,
      collapse: false
     }
    
  ];
  visible = false;
  uploadedFiles: any[] = [];
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.phoneNumber = new FormControl('', [Validators.required]);
    this.position = new FormControl('', [Validators.required]);
    this.file = new FormControl('', [])
    this.applyForm = new FormGroup({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      position: this.position,
      file: this.file
    });
  }
  

  filterByCategory(dv: any) {
    dv.filter(this.category, 'contains')
  }

  clearFilter(dv: any) {
    dv.filter('');
    this.category = null;
  }

  changeTestimonialForward() {
    if (this.count === 2) {
      this.count = 0;
    } else {
      this.count +=1
    }    
  }

  changeTestimonialReverse() {
    if (this.count === 0) {
      this.count = 2;
    } else {
      this.count -=1;
    }
  }

  setPosition(position: string) {
    this.applyForm.controls['position'].setValue(position);
    this.visible = true
  }

  clearForm() {
    this.applyForm.reset();
  }

  submitForm() {
    console.log(this.applyForm)
  }
}
