import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  defaultAmount = 1;

  constructor(private shopService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement): void {
    if (name.value && parseInt(amount.value, 10) >= 0) {
      this.shopService.addIngredient( new Ingredient(name.value, parseInt(amount.value, 10)) );
    }
  }

}
