const URL = 'https://fakestoreapi.com/products';

export const getFilteredProducts = async (limit) => {
    let newUrl = URL + '';
    if (limit && limit !== 'all') {

        newUrl += `?limit=${limit}`
    }
    const response = await fetch(newUrl);
    const data = await response.json();
    return data;
}
