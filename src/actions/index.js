const booksLoaded = (newBookList) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBookList
    }
};


const booksLoading = () => {
    return {
        type: 'BOOKS_LOADING',

    }
};

export {
    booksLoaded, booksLoading
};