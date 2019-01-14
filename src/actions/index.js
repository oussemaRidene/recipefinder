export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPES = 'FAVORITE_RECIPES';

export function setRecepies(items){
  return {
    type: SET_RECIPES,
    items
  }
}
export function favoriteRecepie(recipe){
  return {
    type: FAVORITE_RECIPES,
    recipe
  }
}
