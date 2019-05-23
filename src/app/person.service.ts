import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  uri = 'http://83.166.242.254:4000/person';

  constructor( private http: HttpClient ) { }

  addPerson(first_name, last_name, email) {
    const obj = {
      first_name: first_name,
      last_name: last_name,
      email: email
    };

    return this
          .http
          .post(`${this.uri}/add`, obj);
  }

  getPersones() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editPerson(id) {
    return this
           .http
           .get(`${this.uri}/edit/${id}`);
  }

  updatePerson(first_name, last_name, email, id) {
    const obj = {
        first_name: first_name,
        last_name: last_name,
        email: email
    };

    return this
      .http
      .post(`${this.uri}/update/${id}`, obj);
  }

  deletePerson(id) {
    return this
           .http
           .get(`${this.uri}/delete/${id}`);
  }

}
