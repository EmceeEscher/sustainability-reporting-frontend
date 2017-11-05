import React from 'react';
import PropTypes from 'prop-types';
import './MainActionPanel.less';
import ActionCard from '../ActionCard/ActionCard.jsx';

class MainActionPanel extends React.Component {
    constructor () {
        super();

        this.renderActions = this.renderActions.bind(this);
    }

    render(){
        return (
            <div className='-MainActionPanel'>
                {this.renderActions()}
            </div>
        );
    }

    renderActions() {
        debugger;
        return this.props.actions.map(action =>
            <ActionCard actionData={action} ajaxService={this.props.ajaxService}/>
        );
    }
}

MainActionPanel.propTypes = {
    actions: PropTypes.array.isRequired,
    ajaxService: PropTypes.object.isRequired
};

export default MainActionPanel;
