import { Component, OnInit } from '@angular/core';
import { Animal } from '../entities/Animal';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  AnimalList: any | undefined;
  
  


  constructor(private httpClient: HttpClientService ) { }

  ngOnInit(): void {

  
  }

}
