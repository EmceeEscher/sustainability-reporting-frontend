import React from 'react';
import PropTypes from 'prop-types';
import './ActionCard.less';
import arrow from '../Resources/triangle.png';
import downArrow from '../Resources/down-triangle.png';
import MetricPanel from '../MetricPanel/MetricPanel.jsx';

class ActionCard extends React.Component {
    constructor(){
        super();
        this.state = {
            expanded: false,
            metricInfo: null
        };

        this.toggleExpand = this.toggleExpand.bind(this);
        this.renderMetricPanels = this.renderMetricPanels.bind(this);
    }

    toggleExpand(){
        this.setState({expanded: !this.state.expanded},
            () => {
                if(this.state.metricInfo === null){
                    this.props.ajaxService.getMetricForAction(this.props.actionData.actionId).then(
                        response => this.setState({metricInfo: response.data}));
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
                {this.renderMetricPanels()}
            </div>
        );
    }

    renderMetricPanels () {
        let metricPanels = null;
        if (this.state.metricInfo !== null) {
            metricPanels = this.state.metricInfo.map(metric =>
                <MetricPanel key={metric.metricId} metricInfo={metric} ajaxService={this.props.ajaxService}/>);
        }
        return metricPanels;
    }
}

ActionCard.propTypes = {
    actionData: PropTypes.object.isRequired,
    ajaxService: PropTypes.object.isRequired
};

export default ActionCard;
