import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})

export class PersonEditComponent implements OnInit {

  angForm: FormGroup;
  person: any = {};

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private ps: PersonService,
    private fb: FormBuilder
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


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editPerson(params['id']).subscribe(res => {
        this.person = res;
      });
    });
  }

  updatePerson(first_name, last_name, email) {
    this.route.params.subscribe(params => {
      this.ps.updatePerson(first_name, last_name, email, params['id'])
        .subscribe((res) => {
          this.router.navigate(['person'])
        })
    });
  }

  goBack() {
    this.router.navigate(['person']);
  }
}
