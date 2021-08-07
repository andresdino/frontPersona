import {Injectable} from '@angular/core';
import { url} from '../config/server';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  urlPerson = `${url}/personaprueba`

  constructor(private http: HttpClient) {
  }

  public listPerson(): Observable<Person[]> {
    console.log(this.urlPerson)
    return this.http.get<Person[]>(this.urlPerson);
  }

  public savePerson(persona: Person): Observable<Person> {
    return this.http.post<Person>(this.urlPerson, persona);
  }

  public deletePerson(idUsuario: number | string | undefined): Observable<any> {
    return this.http.delete(`${this.urlPerson}/${idUsuario}`);
  }
}
