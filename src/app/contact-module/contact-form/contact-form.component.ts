import {Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ContactModel} from "./contact-model";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  @Input() contact : ContactModel;
  contactForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildContactForm();
  }

  buildContactForm(){
    this.contactForm = this.fb.group({
        firstname : [''],
        lastname : [''],
        email : ['', Validators.required],
        message : ['', Validators.required],
    });
  }

  submitContact(){
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  ngOnInit() {
  }

}
