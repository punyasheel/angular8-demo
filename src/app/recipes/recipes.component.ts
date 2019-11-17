import { Component, OnInit } from '@angular/core';

import { RecipeServcie } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServcie]
})

export class RecipesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
