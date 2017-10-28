import React from 'react';
import PropTypes from 'prop-types';
import './MetricPanel.less';

class MetricPanel extends React.Component {
    constructor(){
        super();
    }

    render() {

    }
}

MetricPanel.propTypes = {
    metricInfo: PropTypes.object.isRequred,
    ajaxService: PropTypes.object.isRequred
};

export default MetricPanel;