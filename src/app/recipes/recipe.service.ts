import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeServcie {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Gulab Jamun',
            'A milk-solid-based sweet from the India.',
            'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png',
            [
                new Ingredient('Milk', 5),
                new Ingredient('Sugar', 2),
                new Ingredient('Almonds', 20)
            ]
        ),
        new Recipe(
            'Rasgulla',
            'An Indian syrupy dessert',
            'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/rasgulla-recipe.jpg',
            [
                new Ingredient('Sugar', 3),
                new Ingredient('Paneer', 4),
                new Ingredient('Saffron', 20)
            ]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        // Slice is added to make a copy and return it and not make just a reference to recipes list 
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}