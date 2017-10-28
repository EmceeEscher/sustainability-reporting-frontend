import React from 'react';
import PropTypes from 'prop-types';
import './ActionCard.less';
import arrow from '../Resources/triangle.png';
import downArrow from '../Resources/down-triangle.png';

class ActionCard extends React.Component {
    constructor(){
        super();
        this.state = {
            expanded: false,
            metricInfo: null
        };

        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand(){
        this.setState({expanded: !this.state.expanded},
            () => {
                if(this.state.metricInfo === null){
                    this.props.ajaxService.getMetricForAction(this.props.actionData.actionId).then(
                        response => this.setState({metricInfo: response.data[0]}));
                }
            });
    }

    render () {
        console.log("testActionData: ");
        console.log(this.props.actionData);
        console.log("metricInfo: ");
        console.log(this.state.metricInfo);

        if (!this.state.expanded) {
            return(
                <div className='-actionCard'>
                    <img className='-toggleArrow' src={arrow} alt='expand' onClick={this.toggleExpand}/>
                    <div className='-title'>
                        {this.props.actionData.title}
                    </div>
                </div>
            );
        }

        return (
            <div className='-actionCard'>
                <img className='-toggleArrow' src={downArrow} alt='expand' onClick={this.toggleExpand}/>
                <div className='-title'>
                    {this.props.actionData.title}
                </div>
                <div>{"Description: " + this.props.actionData.description}</div>
            </div>
        );
    }
}

ActionCard.propTypes = {
    actionData: PropTypes.object.isRequired,
    ajaxService: PropTypes.object.isRequired
};

export default ActionCard;