import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import SwitchBox from './components/switch-box'

jQuery(function() {
  ReactDOM.render(
    <SwitchBox />,
    document.getElementById('switch-box')
  );
})
