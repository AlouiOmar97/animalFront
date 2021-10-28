import { Component, OnInit } from '@angular/core';
import { AnimalProductService } from '../service/animal-product.service';

@Component({
  selector: 'app-animal-product',
  templateUrl: './animal-product.component.html',
  styleUrls: ['./animal-product.component.css']
})
export class AnimalProductComponent implements OnInit {

 
  animalProductList: any | undefined;
  animalProductListLength :any | undefined;
  
  


  constructor(private animalProductService: AnimalProductService ) { }

  ngOnInit(): void {

    this.animalProductService.getAnimalProducts().subscribe(
      data =>{
        this.animalProductList = data;
        this.animalProductListLength=this.animalProductList.length;
        console.log(this.animalProductList);
        console.log(this.animalProductList.length);
        
      }
    );
  
  }

}
