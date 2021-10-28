import { Component, OnInit } from '@angular/core';
import { PlantAService } from './../service/plant-a.service';

@Component({
  selector: 'app-plant-a',
  templateUrl: './plant-a.component.html',
  styleUrls: ['./plant-a.component.css']
})
export class PlantAComponent implements OnInit {
plantList: any | undefined;
  
  filtredPlant: any | undefined;
  
private _listfilter:string='';
get listfilter():string {
  return this._listfilter;
}
set listfilter( filter:string){
  this._listfilter=filter;
  this.filtredPlant=this.listfilter?this.performfilter(this.listfilter):this.plantList;
}
  
 
performfilter(filterBy:string):any[] {
  filterBy=filterBy.toLocaleLowerCase();
return this.plantList.filter((Plant:any)=>
     Plant.nom.toLocaleLowerCase().indexOf(filterBy)!==-1 || Plant.couleur.toLocaleLowerCase().indexOf(filterBy)!==-1 || Plant.genre.toLocaleLowerCase().indexOf(filterBy)!==-1 || Plant.price.toLocaleLowerCase().indexOf(filterBy)!==-1
)
}



  constructor(private plantAService: PlantAService) { }

  ngOnInit(): void {
    
    this.plantAService.getPlanteA().subscribe(
      data =>{
        this.plantList = data;
      //this.plantProductListLength=this.plantProductList.length;
        console.log(this.plantList);
      //  console.log(this.plantProductList.length);
 this.filtredPlant= data;
      }
    );
  }

}
