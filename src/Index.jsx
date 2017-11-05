import React from 'react';
import ActionCard from './ActionCard/ActionCard.jsx';
import AjaxService from './ajax-service/AjaxService.jsx';
import MainActionPanel from './MainActionPanel/MainActionPanel.jsx';

class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            ajaxService: new AjaxService(),
            actions: {}
        };
        this.getActions();
    }

    getActions() {
        this.state.ajaxService.getAllActions().then(response => this.setState({actions: response.data}));
    }

    render() {
        if(this.state.actions.length > 0){
            return (
                <div>
                  <MainActionPanel actions={this.state.actions} ajaxService={this.state.ajaxService}/>
                </div>
            );
        }
        return (
            <div/>
        );
    }
}

export default Index;
