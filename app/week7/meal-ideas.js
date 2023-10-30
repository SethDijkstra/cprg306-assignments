import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
};

const fetchMealDetails = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const loadMealIdeas = async () => {
        setSelectedMeal(null); // Reset the selected meal when changing ingredients.
        const cleanedIngredient = ingredient.split(',')[0].trim().replace(/[^a-zA-Z\s]/g, ''); // Clean up the item name.
        const fetchedMeals = await fetchMealIdeas(cleanedIngredient);
        setMeals(fetchedMeals || []);
    };

    const handleMealClick = async (mealId) => {
        const mealDetails = await fetchMealDetails(mealId);
        setSelectedMeal(mealDetails);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-white">Meal Ideas for {ingredient}</h2>
            {meals.length === 0 ? (
                <p className="text-white">No recipes available for {ingredient}.</p>
            ) : (
                <ul>
                    {meals.map(meal => (
                        <div key={meal.idMeal}>
                            <li 
                                onClick={() => handleMealClick(meal.idMeal)}
                                style={{
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dotted',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    color: 'white'
                                }}
                            >
                                {meal.strMeal}
                            </li>
                            {selectedMeal && meal.idMeal === selectedMeal.idMeal && (
                                <div style={{
                                    border: '1px solid gray',
                                    padding: '10px',
                                    marginTop: '5px',
                                    borderRadius: '5px',
                                    backgroundColor: 'white',
                                    color: 'black'
                                }}>
                                    <h4>Ingredients:</h4>
                                    <ul>
                                        {[...Array(20)].map((_, i) => {
                                            const ingredient = selectedMeal[`strIngredient${i + 1}`];
                                            const measure = selectedMeal[`strMeasure${i + 1}`];
                                            if (ingredient) {
                                                return <li key={i}>{ingredient} - {measure}</li>;
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MealIdeas;