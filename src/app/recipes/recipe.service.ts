import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe(
            'Egg with meat', 
            'What else you want to say? Best protien combination.',
            'http://saltandwind.com/media/_versions/recipes/150316_mashed-potato-pancakes-recipe_v_medium.jpg',
             [
                 new Ingredient('Egg',2),
                 new Ingredient('Meat',1)
             ]),
        new Recipe(
            'Inside Out French Toast Sandwich', 
            'Best breakfast recipe which is easy and fast to cook',
            'http://www.landomoms.com/wp-content/uploads/2014/12/Simple-Breakfast-Sandwich-Recipes21.jpeg',
            [
                new Ingredient('Bread',2),
                new Ingredient('Peanut Butter',1)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredietsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}