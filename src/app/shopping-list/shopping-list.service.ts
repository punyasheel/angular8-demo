import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Sugar', 10),
        new Ingredient('Milk poweder', 1)
      ];

    getIngredients() {
        // Slice is added to make a copy and return it and not make just a reference to recipes list 
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // We converted the ingredients array to list to pass in one go and thus reducing number of emits
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}