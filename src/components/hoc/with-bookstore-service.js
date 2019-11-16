import React from 'react';
import {BookStoreServiceConsumer} from '../bookstore-service-context';

const WithBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookStoreService) => {
                        return (<Wrapped {...props} bookStoreService={bookStoreService}/>)
                    }
                }

            </BookStoreServiceConsumer>
        );
    };
};

export default WithBookstoreService;