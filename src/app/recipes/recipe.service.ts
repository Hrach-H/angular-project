import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Tasty Homemade Pizza!',
      'https://www.tasteofhome.com/wp-content/uploads/2018/04/exps376_DOAD1630301D07.jpg',
      [new Ingredient('Pepperoni', 10), new Ingredient('Cheese', 1)]
    ),
    new Recipe(
      'Burger',
      'Basic Burger!',
      'https://images.media-allrecipes.com/userphotos/560x315/2294328.jpg',
      [new Ingredient('Egg', 1), new Ingredient('Beef', 1)]
    )
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
