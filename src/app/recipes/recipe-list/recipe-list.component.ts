import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Gulab Jamun', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png'),
    new Recipe('Gulab Jamun', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png'),
    new Recipe('Gulab Jamun', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png'),
    new Recipe('Gulab Jamun', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png'),
    new Recipe('Gulab Jamun', 'A milk-solid-based sweet from the India.', 'https://indiangoodfood.com/wp-content/uploads/2019/06/vlcsnap-2019-06-25-13h16m41s253.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
