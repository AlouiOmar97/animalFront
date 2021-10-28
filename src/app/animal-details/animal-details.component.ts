import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalProductService } from '../service/animal-product.service';
import { PayService } from '../service/pay.service';
import { ReviewService } from './../service/review.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animalProductDetails: any | undefined;
  reviewList: any | undefined;
  name="";
  email="";
  content="";
  rating="";
  prodId:any| undefined;


  constructor(private route: ActivatedRoute,private animalProductService: AnimalProductService,private payService: PayService,private reviewService:ReviewService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.prodId=productId;
    console.log(productId);
    this.animalProductService.getAnimalProductDetails(productId).subscribe(
      data =>{
        this.animalProductDetails = data;
        console.log(this.animalProductDetails);
       
        
      }
    );

    this.reviewService.getProductReviews(productId).subscribe(data=>{
      this.reviewList=data;
      console.log(data);
      
    })
  }

  pay(productPrice:any){
    console.log(productPrice);
    let body={price:productPrice,product_id:this.prodId,description:this.animalProductDetails.description,user:1};
    console.log(body);
    
    this.payService.pay(body).subscribe( data =>{
      console.log(data);
      console.log(data.forwardLink);
      window.location.href=data.forwardLink;
      
      
    })

  }

  submitReview(){
    console.log("clicked");
    
    //console.log(this.name+this.email+this.content+this.rating);
    let review={name:this.name,email:this.email,content:this.content,rating:this.rating,idp:this.prodId};
    console.log(review);
    if(this.rating!=null && this.name!=null && this.email!=null && this.content!=null){
      this.reviewService.addReview(review).subscribe(data=>{
        console.log("adding");
        console.log(data);
        this.name="";
        this.email="";
        this.content="";
        this.rating="";
        this.reviewService.getProductReviews(this.prodId).subscribe(data=>{
          this.reviewList=data;
          console.log(data);
          
        })
        
      })
    }
    
    
  }

}
