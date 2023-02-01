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

// export const fetchSelectedCategory = async () => {
//     const { data } = await axios.get(
//         'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
//     );

//     return data.meals;
// };

// export const fetchSelectedArea = async () => {
//     const { data } = await axios.get(
//         'www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
//     );

//     return data.meals;
// };

// Diese Funktion sendet eine Anfrage und gibt ein Array von Objekten zurück
// (jedes Objekt enthält nur den Namen der Essenskategorie)
export const fetchMealSorts = async () => {
    const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );

    return data.meals;
};

// the flags Array

export const flags = [
    {
        country: 'American',
        flag: 'https://flagpedia.net/data/flags/normal/us.png',
    },
    {
        country: 'British',
        flag: 'https://flagpedia.net/data/flags/normal/gb.png',
    },
    {
        country: 'Canadian',
        flag: 'https://flagpedia.net/data/flags/normal/ca.png',
    },
    {
        country: 'Chinese',
        flag: 'https://flagpedia.net/data/flags/normal/cn.png',
    },
    {
        country: 'Croatian',
        flag: 'https://flagpedia.net/data/flags/normal/hr.png',
    },
    {
        country: 'Dutch',
        flag: 'https://flagpedia.net/data/flags/normal/nl.png',
    },
    {
        country: 'Egyptian',
        flag: 'https://flagpedia.net/data/flags/normal/eg.png',
    },
    {
        country: 'French',
        flag: 'https://flagpedia.net/data/flags/normal/fr.png',
    },
    {
        country: 'Greek',
        flag: 'https://flagpedia.net/data/flags/normal/gr.png',
    },
    {
        country: 'Indian',
        flag: 'https://flagpedia.net/data/flags/normal/in.png',
    },
    {
        country: 'Irish',
        flag: 'https://flagpedia.net/data/flags/normal/ie.png',
    },
    {
        country: 'Italian',
        flag: 'https://flagpedia.net/data/flags/normal/it.png',
    },
    {
        country: 'Jamaican',
        flag: 'https://flagpedia.net/data/flags/normal/jm.png',
    },
    {
        country: 'Japanese',
        flag: 'https://flagpedia.net/data/flags/normal/jp.png',
    },
    {
        country: 'Kenyan',
        flag: 'https://flagpedia.net/data/flags/normal/ke.png',
    },
    {
        country: 'Malaysian',
        flag: 'https://flagpedia.net/data/flags/normal/my.png',
    },
    {
        country: 'Mexican',
        flag: 'https://flagpedia.net/data/flags/normal/mx.png',
    },
    {
        country: 'Moroccan',
        flag: 'https://flagpedia.net/data/flags/normal/ma.png',
    },
    {
        country: 'Polish',
        flag: 'https://flagpedia.net/data/flags/normal/pl.png',
    },
    {
        country: 'Portuguese',
        flag: 'https://flagpedia.net/data/flags/normal/pt.png',
    },
    {
        country: 'Russian',
        flag: 'https://flagpedia.net/data/flags/normal/ru.png',
    },
    {
        country: 'Spanish',
        flag: 'https://flagpedia.net/data/flags/normal/es.png',
    },
    { country: 'Thai', flag: 'https://flagpedia.net/data/flags/normal/th.png' },
    {
        country: 'Tunisian',
        flag: 'https://flagpedia.net/data/flags/normal/tn.png',
    },
    {
        country: 'Turkish',
        flag: 'https://flagpedia.net/data/flags/normal/tr.png',
    },
    {
        country: 'Unknown',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png',
    },
    {
        country: 'Vietnamese',
        flag: 'https://flagpedia.net/data/flags/normal/vn.png',
    },
];
