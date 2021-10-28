import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-adetail',
  templateUrl: './animal-adetail.component.html',
  styleUrls: ['./animal-adetail.component.css']
})
export class AnimalADetailComponent implements OnInit {
  animalProductList: any | undefined;
  animalProductListLength :any | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
