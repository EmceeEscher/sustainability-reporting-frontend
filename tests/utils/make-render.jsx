import React from 'react';
import objectAssign from 'object-assign';

var makeRender = function (componentType, defaultProps) {
  return function (optionalProps) {
    var renderedProps = objectAssign({}, defaultProps, optionalProps);
    return React.createElement(componentType, renderedProps);
  };
};

module.exports = makeRender;