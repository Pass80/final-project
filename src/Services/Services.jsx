import axios from 'axios';

export const fetchCategories = async () => {
    const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php?c=list'
    );

    return data.categories;
};
export const fetchAreas = async () => {
    const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );

    return data.meals;
};
export const fetchIngredients = async () => {
    const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );

    return data.meals;
};

export const fetchSelectedCategory = async () => {
    const { data } = await axios.get(
        'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    );

    return data.meals;
};

export const fetchSelectedArea = async () => {
    const { data } = await axios.get(
        'www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
    );

    return data.meals;
};

export const fetchMealSorts = async () => {
    const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );

    return data.meals;
};
