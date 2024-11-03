import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-shared-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule ],
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.css']
})
export class SharedFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit' | 'read' | 'list' = 'create';
  @Input() entityName = 'Entity';
  @Input() fields: { name: string; label: string; type: string }[] = [];
  formGroup: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group(
      this.fields.reduce((group, field) => ({ ...group, [field.name]: [''] }), {})
    );
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

}
