import React from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.less';

class SectionTabBar extends React.Component {
    constructor () {
        super();

        this.renderTabs = this.renderTabs.bind(this);
        this.dontRenderPanels = this.dontRenderPanels.bind(this);
    }

    renderTabs () {
        return this.props.tabs.map(tab => <Tab onClick={() => this.props.updateTheme(tab)} key={tab}>{tab}</Tab>);
    }

    dontRenderPanels () {
        //These empty panels are necessary to make the react-tabs components work, but I don't actually want to display anything
        return this.props.tabs.map(tab => <TabPanel key={tab}/>);
    }

    render () {
        return (
            <Tabs>
                <TabList>
                    {this.renderTabs()}
                </TabList>

                {this.dontRenderPanels()}
            </Tabs>
        );
    }
};

SectionTabBar.propTypes = {
    tabs: PropTypes.array.isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default SectionTabBar;