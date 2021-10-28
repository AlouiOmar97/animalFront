import { Component, OnInit } from '@angular/core';
import { AnimalAService } from './../service/animal-a.service';

@Component({
  selector: 'app-animal-a',
  templateUrl: './animal-a.component.html',
  styleUrls: ['./animal-a.component.css']
})
export class AnimalAComponent implements OnInit {
  animalList: any | undefined;
  
  filtredAnimal: any | undefined;
  
private _listfilter:string='';
get listfilter():string {
  return this._listfilter;
}
set listfilter( filter:string){
  this._listfilter=filter;
  this.filtredAnimal=this.listfilter?this.performfilter(this.listfilter):this.animalList;
}
  
 
performfilter(filterBy:string):any[] {
  filterBy=filterBy.toLocaleLowerCase();
return this.animalList.filter((Animal:any)=>
     Animal.nom.toLocaleLowerCase().indexOf(filterBy)!==-1 || Animal.couleur.toLocaleLowerCase().indexOf(filterBy)!==-1 || Animal.genre.toLocaleLowerCase().indexOf(filterBy)!==-1 || Animal.price.toLocaleLowerCase().indexOf(filterBy)!==-1
)
}



  constructor(private animalAService: AnimalAService) { }

  ngOnInit(): void {
    
    this.animalAService.getAnimalA().subscribe(
      data =>{
        this.animalList = data;
      //this.animalProductListLength=this.animalProductList.length;
        console.log(this.animalList);
      //  console.log(this.animalProductList.length);
 this.filtredAnimal= data;
      }
    );
  }

}
