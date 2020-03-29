import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {

  title = 'A Definitive List of authors';
  authors;
  isActive = false;
  constructor(service: AuthorsService){     //decouples service from component. allows for testing without http service
      this.authors = service.getAuthors();
  }
  getTitle (){
      return this.title;
  }
  onSave ($event) {
    console.log("button clicked", $event)
  }

  ngOnInit() {
  }

}
