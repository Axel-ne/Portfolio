import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-sectionn',
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-sectionn.html',
  styleUrl: './contact-sectionn.scss',
})
export class ContactSectionn {

  contactForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    message: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit() {
    this.contactForm.reset();
  }
}