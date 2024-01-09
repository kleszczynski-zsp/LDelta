import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-delta',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './delta.component.html',
  styleUrl: './delta.component.css'
})
export class DeltaComponent {
  deltaForm: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.deltaForm = this.buildDeltaForm();
  }
  
  buildDeltaForm(){
    return this.formBuilder.group({
      a:'0',
      b:'0',
      c:'0'
    });
  }
}
