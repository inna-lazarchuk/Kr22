import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {filter, find, map, Subscription, tap} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {findUp} from "@angular/cli/src/utilities/find-up";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private products: ProductType[] = [];
  product: ProductType;
  subscriptionProducts: Subscription | null = null;
  subscriptionParams: Subscription | null = null;
  private id: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
    this.subscriptionProducts = this.productsService.getProducts()
      .subscribe({
        next: products => {
          this.subscriptionParams = this.activatedRoute.params
            .subscribe({
              next: (params: Params) => {
                const prod = products.find(product => {
                  product.id = params['id'];
                  return product;
                })
                if (prod) {
                  this.product = prod;
                }
              },
              error: (error) => {
                console.log(error)
              }
            })
        },
        error: (error) => {
          console.log(error);
        }
      })

  }

  ngOnDestroy() {
    this.subscriptionParams?.unsubscribe();
    this.subscriptionProducts?.unsubscribe();
  }
}
