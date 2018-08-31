import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onEditRecipe() {
    if (!this.authService.isAuthenticated()) {
      alert("Please login to continue!");
    }
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredietsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    if (this.authService.isAuthenticated()) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
    }
    else {        
      alert("Please login to continue!");
    }
  }
}
