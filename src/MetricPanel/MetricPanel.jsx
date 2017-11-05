import React from 'react';
import PropTypes from 'prop-types';
import './MetricPanel.less';

class MetricPanel extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className='-MetricPanel'>
                <div className='-topBar'>
                    <div className='-title'>
                        {this.props.metricInfo.title}
                    </div>
                    {this.renderValue()}
                </div>
                <div className='-body'>
                    {'Description: ' + this.props.metricInfo.description}
                </div>
            </div>
        );
    }

    renderValue () {
        let text = this.props.metricInfo.textValue;

        if (this.props.metricInfo.value !== 'None') {
            text = this.props.metricInfo.value + ' ' + text;
        }

        return (
            <div className='-value'>
                {text}
            </div>
        );
    }
}

MetricPanel.propTypes = {
    metricInfo: PropTypes.object.isRequired,
    ajaxService: PropTypes.object.isRequired
};

export default MetricPanel;
