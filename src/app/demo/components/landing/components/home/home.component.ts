import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Output() submitOutput = new EventEmitter();
  selectedState: any = null;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];
  items = [{ label: 'Briefing', icon: 'pi pi-user'}, { label: 'Analysis' , icon: 'pi pi-bolt'}, { label: 'Design' , icon: 'pi pi-palette'}, { label: 'Development' , icon: 'pi pi-desktop'}, { label: 'Review', icon: 'pi pi-file-o'}, { label: 'Delivery', icon: 'pi pi-briefcase' }];
  dropdownItems = [
      { name: 'Option 1', code: 'Option 1' },
      { name: 'Option 2', code: 'Option 2' },
      { name: 'Option 3', code: 'Option 3' }
  ];
  products = [
    {name: 'Create End to End', name2: 'Learning Solutions', company: 'Peak Interactive', content: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'},
    {name: 'Adapting Seamlessly', name2: 'To your Process and Systems', company: 'Peak Interactive', content: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'},
    {name: 'Provide Solutions', name2: 'For your Unique Training', company: 'Peak Interactive', content: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'},
    {name: 'Ensuring', name2: 'Competitive Pricing for all your needs', company: 'Peak Interactive', content: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'}
];
  constructor(public router: Router) { }
 
  

}
