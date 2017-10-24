import React from 'react';
import PropTypes from 'prop-types';
import './ActionCard.less';

class ActionCard extends React.Component {
    constructor(){
        super();
        this.state = {
            expanded: false
        };
    }

    render () {
        console.log("testActionData: ");
        console.log(this.props.actionData);
        return (
            <div className='-actionCard'>
                <div className='-title'>
                    {this.props.actionData.title}
                </div>
                <div>{"Description: " + this.props.actionData.description}</div>
            </div>
        );
    }
}

ActionCard.propTypes = {
    actionData: PropTypes.object.isRequired
};

export default ActionCard;