  
const updaterecipe = (recipe) => {
    return {
        type: 'UPDATE',
        payload: recipe
    };
};

export default updaterecipe;