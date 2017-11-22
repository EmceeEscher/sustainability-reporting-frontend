import React from 'react';
import ActionCard from './ActionCard/ActionCard.jsx';
import AjaxService from './ajax-service/AjaxService.jsx';
import MainActionPanel from './MainActionPanel/MainActionPanel.jsx';

class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            ajaxService: new AjaxService(),
            actions: {},
            importantActions: {}
        };
        this.getActions();
        this.getImportantActions();

        this.renderImportantActions = this.renderImportantActions.bind(this);
    }

    getActions() {
        this.state.ajaxService.getAllActions().then(response => this.setState({actions: response.data}));
    }

    getImportantActions() {
        //TODO: don't hardcode the userID in the getImportantActionsForUser call
        this.state.ajaxService.getImportantActionsForUser(1).then(response => {
            if (!response.error) {
                this.setState({importantActions: response.data});
            }
        });
    }

    renderImportantActions () {
        if (this.state.importantActions.length > 0) {
            return (
                <div>
                    <MainActionPanel actions={this.state.importantActions} ajaxService={this.state.ajaxService}/>
                </div>
            )
        }
        return null;
    }

    render() {
        if(this.state.actions.length > 0){
            return (
                <div>
                  {this.renderImportantActions()}
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
