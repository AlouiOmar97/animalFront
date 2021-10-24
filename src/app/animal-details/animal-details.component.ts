import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalProductService } from '../service/animal-product.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animalProductDetails: any | undefined;

  constructor(private route: ActivatedRoute,private animalProductService: AnimalProductService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    console.log(productId);
    this.animalProductService.getAnimalProductDetails(productId).subscribe(
      data =>{
        this.animalProductDetails = data;
        console.log(this.animalProductDetails);
       
        
      }
    );

    
  }

}
