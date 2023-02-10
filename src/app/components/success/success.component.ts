import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  
  order = {
    order_no: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    price: "",
    notes: null,
    postal_code: null,
    city: "",
  }
  constructor(private route: ActivatedRoute, private api:ApiService ){ }
  ngOnInit() {
    this.api.successData(this.id)
    .subscribe((res)=>{
      this.order=res
      console.log(this.order);
      
    })
  }

}
