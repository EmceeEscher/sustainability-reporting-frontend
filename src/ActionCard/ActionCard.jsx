import React from 'react';
import PropTypes from 'prop-types';
import './ActionCard.less';
import arrow from '../Resources/triangle.png';
import downArrow from '../Resources/down-triangle.png';
import emptyStar from '../Resources/empty-star.png';
import fullStar from '../Resources/filled-star.png';
import MetricPanel from '../MetricPanel/MetricPanel.jsx';

class ActionCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
            metricInfo: null,
            starIcon: props.isImportant ? fullStar : emptyStar
        };

        this.toggleExpand = this.toggleExpand.bind(this);
        this.renderMetricPanels = this.renderMetricPanels.bind(this);
        this.toggleImportant = this.toggleImportant.bind(this);
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

    toggleImportant () {
        if(this.state.starIcon === emptyStar) {
            this.setState({starIcon: fullStar});
            this.props.updateImportantActions(this.props.actionData.actionId, "POST");
        } else {
            this.setState({starIcon: emptyStar});
            this.props.updateImportantActions(this.props.actionData.actionId, "DELETE");
        }
    }

    render () {
        if (!this.state.expanded) {
            return(
                <div className='-actionCard'>
                    <img className='-toggleArrow' src={arrow} alt='expand' onClick={this.toggleExpand}/>
                    <img className='-star' src={this.state.starIcon} onClick={this.toggleImportant}/>
                    <div className='-title'>
                        {this.props.actionData.title}
                    </div>
                </div>
            );
        }

        return (
            <div className='-actionCard'>
                <img className='-toggleArrow' src={downArrow} alt='expand' onClick={this.toggleExpand}/>
                <img className='-star' src={this.state.starIcon} onClick={this.toggleImportant}/>
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
    ajaxService: PropTypes.object.isRequired,
    isImportant: PropTypes.bool.isRequired,
    updateImportantActions: PropTypes.func.isRequired
};

export default ActionCard;
