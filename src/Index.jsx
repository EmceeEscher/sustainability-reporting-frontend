import React from 'react';
import ActionCard from './ActionCard/ActionCard.jsx';
import AjaxService from './ajax-service/AjaxService.jsx';

class Index extends React.Component {
  constructor(){
    super();
    this.state = {
      ajaxService: new AjaxService()
    };
  }

  render() {
    return (
      <div>
        <ActionCard ajaxService={this.state.ajaxService}/>
      </div>
    );
  }
}

export default Index;