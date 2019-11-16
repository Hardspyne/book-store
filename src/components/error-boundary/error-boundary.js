import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

/*
 Класс отвечающий за обработку ошибок
 */
export default class ErrorBoundary extends Component {


    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo);
        this.setState({hasError: true});
    }

    render() {
        const {hasError} = this.state;
        if (hasError) {
            return <ErrorIndicator/>;
        }

        return this.props.children;
    }
}
