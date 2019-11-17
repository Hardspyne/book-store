import ReactDOM from 'react-dom';
import React from 'react';
import App from "./components/app";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import BookStoreService from "./services/bookstore-service";
import {BookStoreServiceProvider} from "./components/bookstore-service-context";
import store from "./store";


const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}> {/*redux хранилище*/}
        <ErrorBoundary> {/*Обработка ошибок*/}
            <BookStoreServiceProvider value={bookStoreService}> {/*добавление сервиса в контекст*/}
                <BrowserRouter> {/*доступ к роутингу*/}
                    <App/>
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));