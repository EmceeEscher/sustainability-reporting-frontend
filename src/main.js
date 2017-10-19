import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index.jsx';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Index),
    document.getElementById('mount')
  );
});