import axios from 'axios'

const CARDS_URL = 'http://localhost:8080/cards';
const CATEGORIES_URL = 'http://localhost:8080/categories'

export const getCards = async() => {
    const cards = await axios.get(`${CARDS_URL}`).catch((e) => {
        console.error(e);
    })
    return cards.data != null ? cards.data : null;
}

export const getCategories = async() => {
    const categories = await axios.get(`${CATEGORIES_URL}`).catch((e) => {
        console.error(e);
    })
    return categories.data;
}