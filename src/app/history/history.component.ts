import { Component, OnInit } from '@angular/core';
import { PayService } from '../service/pay.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyList: any | undefined;
  role:any | undefined;
 constructor(private payService:PayService) { }

 ngOnInit() {
   this.role=""
   console.log('historyyyyyyy')
  
   this.payService.getAll().subscribe((data)=>{
     console.log(data)
     this.historyList=data;
   })
 }

 delete(id:any){
   console.log("hey "+id);
   
   this.payService.delete(id).subscribe(()=>{
     this.payService.getAll().subscribe((data)=>{
       console.log(data)
       this.historyList=data;
     })
   })
   
 }

}
