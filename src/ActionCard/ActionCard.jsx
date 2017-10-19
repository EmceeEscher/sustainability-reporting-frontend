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

    getActions() {
        this.props.ajaxService.getAllActions();
    }

    render () {
        this.getActions();
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