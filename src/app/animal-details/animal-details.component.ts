import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalProductService } from '../service/animal-product.service';
import { PayService } from '../service/pay.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animalProductDetails: any | undefined;

  constructor(private route: ActivatedRoute,private animalProductService: AnimalProductService,private payService: PayService) { }

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

  pay(productPrice:any){
    console.log(productPrice);
    let body={price:productPrice,title:this.animalProductDetails.title,description:this.animalProductDetails.description,user:1};
    this.payService.pay(body).subscribe( data =>{
      console.log(data);
      console.log(data.forwardLink);
      window.location.href=data.forwardLink;
      
      
    })

  }

}
