import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeServcie } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServcie]
})

export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private recipeService: RecipeServcie) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
