import { PersonService } from './../service/person.service';
import { Person } from './../model/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person[] = [];
  formPerson: Person = {
    id: "",
    fullname: "",
    birth: ""
  };
  title: string = this.formPerson.id != "" ? 'Editar' : 'Registrar';

  constructor(private savePerson: PersonService) { }

  ngOnInit(): void {
    this.allPerson();
  }

  allPerson() {
    this.savePerson.listPerson().subscribe(res => {
      this.person = res;
    })
  }

  createPerson() {
    this.savePerson.savePerson(this.formPerson)
      .subscribe(() => {
        alert(` la Persona ${this.title} con exito`)
        this.formPerson.id = "";
        location.reload();
      })
  }

  public editPerson(persona: Person) {
    this.formPerson = persona;
  }

  public deletePerson(idPerson: number | string): any {
    this.savePerson.deletePerson(idPerson).subscribe((res) => {
      location.reload();
    });
  }

}
