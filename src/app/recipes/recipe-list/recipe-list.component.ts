import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeThatWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Gulab Jamun', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png'),
    new Recipe('Gulab Jamun 1', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png'),
    new Recipe('Gulab Jamun 2', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png'),
    new Recipe('Gulab Jamun 3', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png'),
    new Recipe('Gulab Jamun 4', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeThatWasSelected.emit(recipe);
  }
}
