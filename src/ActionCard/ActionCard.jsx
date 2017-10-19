import React from 'react';
import './ActionCard.less';

class ActionCard extends React.Component {
    constructor(){
        super();
        this.state = {
            expanded: false
        };
    }

    render () {
        return (
            <div className='-actionCard'>
                ActionTitle
            </div>
        );
    }
}

export default ActionCard;