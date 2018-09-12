import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shopService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = parseInt(params.id, 10);
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  toShoppingList() {
    this.shopService.addIngredients(this.recipe.ingredients);
  }

}
