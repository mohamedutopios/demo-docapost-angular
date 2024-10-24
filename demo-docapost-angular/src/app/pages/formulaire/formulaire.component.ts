import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleService } from '../../utils/services/title.service';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css',
})
export class FormulaireComponent {
  name = 'Angular';

  onTemplateSubmit() {
    console.log('onTemplateSubmit', this.user);
  }

  user: any = {
    email: '',
    password: '',
    address: '',
    city: '',
  };

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private titleService: TitleService) {
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
      address: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Formulaire');
  }

  onReactiveSubmit() {
    console.log('onReactiveSubmit', this.reactiveForm.value)
  }

}
