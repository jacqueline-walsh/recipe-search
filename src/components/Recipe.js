import './Recipe.css';

function Recipe({title, calories, image, ingredients}) {
    return (
        <div className="recipe-card">
            <h1>{title}</h1>
            <ul>
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p className="calories">Calories: {Math.round(calories)}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe
