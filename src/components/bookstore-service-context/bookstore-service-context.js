import React from 'react';

/*
Контекст, который передает данные всем компонентам, используя ContextApi React
 */

const {Provider:BookStoreServiceProvider, Consumer:BookStoreServiceConsumer}= React.createContext();

export {
    BookStoreServiceConsumer,
    BookStoreServiceProvider
}
