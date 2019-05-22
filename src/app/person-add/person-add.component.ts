import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})

export class PersonAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private ps: PersonService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      email: ['', Validators.required ]
    });
  }

  addPerson(first_name, last_name, email) {
    this.ps.addPerson(first_name, last_name, email)
      .subscribe((res) => {
        this.router.navigate(['person'])
      })
  }

  goBack() {
    this.router.navigate(['person']);
  }

  ngOnInit() {

  }
}
