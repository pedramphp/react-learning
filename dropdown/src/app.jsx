var React = require('react');
var Dropdown = require('./dropdown');

var options = {
    title: 'Choose a dessert', // what should show up in the dropdown.
    items: [
        'Apple Pie',
        'Coconut Create Pie',
        'Peach Cobbler'

    ]
};

//React, please render this class
var element = React.createElement(Dropdown, options);

//React
React.render(element, document.querySelector(".container"));
