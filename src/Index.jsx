import React from 'react';
import AjaxService from './ajax-service/AjaxService.jsx';
import ActionPanel from './ActionPanel/ActionPanel.jsx';

class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            ajaxService: new AjaxService(),
            actions: [],
            importantActionIds: [],
            userId: 1 //TODO: don't hardcode this
        };
        this.getActions();
        this.getImportantActions();

        this.getImportantActions = this.getImportantActions.bind(this);
        this.renderMainActions = this.renderMainActions.bind(this);
        this.renderImportantActions = this.renderImportantActions.bind(this);
        this.updateImportantActions = this.updateImportantActions.bind(this);
    }

    getActions() {
        this.state.ajaxService.getAllActions().then(response => {
            let actions = response.data;
            for (let i = 0; i < actions.length; i++) {
                actions[i].isImportant = false;
            }
            this.setState({actions: actions});
        });
    }

    getImportantActions() {
        this.state.ajaxService.getImportantActionsForUser(this.state.userId).then(response => {
            if (!response.error) {
                let newActions = this.state.actions.slice();
                for (let i = 0; i < newActions.length; i++) {
                    let action = newActions[i];
                    if (response.data.includes(action.actionId)) {
                        action.isImportant = true;
                    } else {
                        action.isImportant = false;
                    }
                }
                this.setState({
                    actions: newActions,
                    importantActionIds: response.data
                });
            }
        });
    }

    // updateStatus must be one of "POST" or "DELETE"
    updateImportantActions(actionId, updateMethod) {
        this.state.ajaxService.updateImportantActionForUser(this.state.userId, actionId, updateMethod).then(
            () => this.getImportantActions()
        );
    }

    renderImportantActions () {
        if (this.state.importantActionIds.length > 0) {
            return (
                <div>
                    <ActionPanel
                        actions={this.state.actions.filter(action => this.state.importantActionIds.includes(action.actionId))}
                        ajaxService={this.state.ajaxService}
                        isImpActionPanel={true}
                        updateImportantActions={this.updateImportantActions}
                    />
                </div>
            )
        }
        return null;
    }

    renderMainActions () {
        if(this.state.actions.length > 0){
            return (
                <div>
                    <ActionPanel
                        actions={this.state.actions}
                        ajaxService={this.state.ajaxService}
                        isImpActionPanel={false}
                        updateImportantActions={this.updateImportantActions}
                    />
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                {this.renderImportantActions()}
                {this.renderMainActions()}
            </div>
        );
    }
}

export default Index;
