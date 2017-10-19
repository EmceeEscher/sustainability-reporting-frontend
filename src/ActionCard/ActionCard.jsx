import React from 'react';
import PropTypes from 'prop-types';
import './ActionCard.less';

class ActionCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
            actionData: {}
        };
        this.getActions();
    }

    getActions() {
        this.props.ajaxService.getAllActions().then(data => this.setState({actionData: data}));
    }

    render () {
        console.log("testActionData: ");
        console.log(this.state.actionData);
        return (
            <div className='-actionCard'>
                ActionTitle
            </div>
        );
    }
}



ActionCard.propTypes = {
    ajaxService: PropTypes.object.isRequired
};

export default ActionCard;