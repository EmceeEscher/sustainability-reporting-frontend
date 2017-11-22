import React from 'react';
import ActionCard from './ActionCard/ActionCard.jsx';
import AjaxService from './ajax-service/AjaxService.jsx';
import ActionPanel from './ActionPanel/ActionPanel.jsx';

class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            ajaxService: new AjaxService(),
            actions: [],
            importantActions: []
        };
        this.getActions();
        this.getImportantActions();

        this.renderImportantActions = this.renderImportantActions.bind(this);
        this.markImportantActions = this.markImportantActions.bind(this);
    }

    getActions() {
        this.state.ajaxService.getAllActions().then(response => this.setState({actions: response.data}));
    }

    getImportantActions() {
        //TODO: don't hardcode the userID in the getImportantActionsForUser call
        this.state.ajaxService.getImportantActionsForUser(1).then(response => {
            if (!response.error) {
                this.setState({importantActions: response.data}, this.markImportantActions());
            }
        });
    }

    markImportantActions () {
        for (let i = 0, len = this.state.actions.length; i < len; i++) {
            let action = this.state.actions[i];
            let index = this.state.importantActions.indexOf(action);
            if (index !== -1) {
                action.isImportant = true;
            } else {
                action.isImportant = false;
            }
        }
    }

    renderImportantActions () {
        if (this.state.importantActions.length > 0) {
            return (
                <div>
                    <ActionPanel
                        actions={this.state.importantActions}
                        ajaxService={this.state.ajaxService}
                        isImpActionPanel={true}
                    />
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
                  <ActionPanel
                      actions={this.state.actions}
                      ajaxService={this.state.ajaxService}
                      isImpActionPanel={false}
                  />
                </div>
            );
        }
        return (
            <div/>
        );
    }
}

export default Index;
