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
                ActionTitle
            </div>
        );
    }
}

ActionCard.propTypes = {
    actionData: PropTypes.object.isRequired
};

export default ActionCard;