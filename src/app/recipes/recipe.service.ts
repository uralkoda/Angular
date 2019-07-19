import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('a test recipe6', 'this is a test1 desc', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d'),
        new Recipe('a test recipe4', 'this is a test2 desc', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d'),
        new Recipe('a test recipe2', 'this is a test3 desc', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}