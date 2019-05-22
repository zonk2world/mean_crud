import { Component, OnInit } from '@angular/core';
import Person from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-get',
  templateUrl: './person-get.component.html',
  styleUrls: ['./person-get.component.css']
})

export class PersonGetComponent implements OnInit {

  persones: Person[];

  constructor(private ps: PersonService) {
   }

  ngOnInit() {
    this.updateView()
  }

  updateView() {
    this.ps
      .getPersones()
      .subscribe((data: Person[]) => {
        this.persones = data;
        console.log('updated')
    });
  }

  deletePerson(id) {
    this.ps.deletePerson(id).subscribe(res => {
      this.updateView()
      // console.log('Deleted');
    });
  }

}
