import React from 'react';
import ActionCard from './ActionCard/ActionCard.jsx';
import AjaxService from './ajax-service/AjaxService.jsx';

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
                  <ActionCard actionData={this.state.actions[0]} ajaxService={this.state.ajaxService}/>
                </div>
            );
        }
        return (
            <div/>
        );
    }
}

export default Index;