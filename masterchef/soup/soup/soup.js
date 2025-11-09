function showRecipe(id) {
    const recipeContent = document.getElementById(`${id}-recipe`);
    if (recipeContent.style.display === 'none' || recipeContent.style.display === '') {
        recipeContent.style.display = 'block';
    } else {
        recipeContent.style.display = 'none';
    }
}
