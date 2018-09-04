import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  defaultAmount = 1;
  @Output() ingredientToAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement): void {
    if (name.value && parseInt(amount.value, 10) >= 0) {
      this.ingredientToAdd.emit( new Ingredient(name.value, parseInt(amount.value, 10)) );
    }
  }

}
