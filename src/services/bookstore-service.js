export default class BookStoreService {

    getBooks() {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (Math.random() > 0.9) {
                    reject(new Error('unrecognized error'))
                }
                resolve(BookStoreService.getData())
            }, 700);
        })
    }

    static getData() {
        return [
            {
                id: 1,
                author: 'Kyle Simpson',
                title: 'You Don\'t Know JS: Up & Going',
                price: 9.39,
                bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41WdbPkuINL._SX331_BO1,204,203,200_.jpg'
            },
            {
                id: 2,
                author: 'David Flanagan',
                title: 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
                price: 33.99,
                bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51lu4ArIFYL._SX379_BO1,204,203,200_.jpg'
            }];
    }
}