import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  })

export class CheckoutComponent implements OnInit {
  

  qty = this.route.snapshot.paramMap.get('id');
  loading = false;

  form = {
    quantity: this.route.snapshot.paramMap.get('id'),
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal_code: '',
    price: 0,
    product: 'Detonic'
  };

  price = 0;
  total = 0;


  items = [
    {
      qty: '1',
      price: 4900,
      total: 4900
    },
    {
      qty: '3',
      price: 2997,
      total: 8990
    },
    {
      qty: '5',
      price: 2798,
      total: 13990
    }
  ];

  constructor(private route: ActivatedRoute, private checkoutService: CheckoutService, private router: Router) { }


  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') == '1') {
      this.price = 4900;
      this.total = 4900;
    } else if (this.route.snapshot.paramMap.get('id') == '3') {
      this.price = 2997;
      this.total = 8990;
    } else if (this.route.snapshot.paramMap.get('id') == '5') {
      this.price = 2798;
      this.total = 13990;
    } else {
      this.price = 4900;
      this.total = 4900;
    }
  }
  onSelectionChange(event: any) {
    console.log(event.target.value);
    this.items.forEach(element => {
      if (this.form.quantity === element.qty) {
        this.price = element.price;
        this.total = element.total;
      }
    });
  }
  navigateToRoute() {
    this.router.navigate(['/success']);
  }
  toggleLoading(){
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
    console.log(this.loading);
    

  }

  checkout() {
<<<<<<< HEAD
    if (this.loading) {
      return;
    }
      this.toggleLoading()
      this.checkoutService.checkout(this.form).subscribe((res) => {
      console.log("🚀 ~ file: checkout.component.ts:69 ~ CheckoutComponent ~ this.checkoutService.checkout ~ res", res)
      this.navigateToRoute()
      
=======
    this.form.price = this.price;
    this.checkoutService.checkout(this.form).subscribe((res) => {

>>>>>>> 1debb18c7816fb4dc360b26b3ab97fe13001f019
    });
  }
}
