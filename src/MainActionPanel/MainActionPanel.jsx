import React from 'react';
import PropTypes from 'prop-types';
import './MainActionPanel.less';
import ActionCard from '../ActionCard/ActionCard.jsx';
import SectionTabBar from '../SectionTabBar/SectionTabBar.jsx';

class MainActionPanel extends React.Component {
    constructor (props) {
        super(props);

        let themes = [];

        for (let i = 0, len = props.actions.length; i < len; i++) {
            let currTheme = props.actions[i].theme;
            if (!themes.includes(currTheme)) {
                themes.push(currTheme);
            }
        }

        this.state = {
            themes: themes,
            currentTheme: themes.length > 0 ? themes[0] : ""
        };

        this.renderActions = this.renderActions.bind(this);
        this.updateCurrentTheme = this.updateCurrentTheme.bind(this);
    }

    updateCurrentTheme (newTheme) {
        this.setState({currentTheme: newTheme});
    }

    render(){
        return (
            <div className='-MainActionPanel'>
                <SectionTabBar tabs={this.state.themes} updateTheme={this.updateCurrentTheme}/>
                {this.renderActions()}
            </div>
        );
    }

    renderActions() {
        let currThemeActions = this.props.actions.filter(action => action.theme === this.state.currentTheme);
        return currThemeActions.map(action =>
            <ActionCard actionData={action} ajaxService={this.props.ajaxService} key={action.actionId}/>
        );
    }
}

MainActionPanel.propTypes = {
    actions: PropTypes.array.isRequired,
    ajaxService: PropTypes.object.isRequired
};

export default MainActionPanel;
