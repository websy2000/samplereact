

export const fetchAllProducts = async() => {
    try{

        const results = await fetch(`https://fakestoreapi.com/products`, {
            method: 'GET'
        });

        const data = await results.json();
        return data;

    }catch(error){
        console.log(error)
    }
}

export const getProductById = async(productId) => {
    try{

        const results = await fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: 'GET'
        });

        const data = await results.json();
        return data;

    }catch(error){
        console.log(error)
    }
}