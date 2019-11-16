const booksLoaded = (newBookList) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBookList
    }
};

export {
    booksLoaded
};