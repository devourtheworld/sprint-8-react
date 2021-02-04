import React from 'react';
import './index.css';
export default class App extends React.Component{
    state = {
        appData: 'React Marathon'
    };
    onDivClick = () => {
        this.setState(prev => {
            return {
                appData: prev.someData.toLowerCase()
            };
        });
    };
    render () {
        return <div onClick={this.onDivClick}>{this.appData}</div>;
    }
}