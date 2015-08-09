var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {

    thumbnailData:[{
        title: 'Show Cources',
        number: 120,
        header: 'Learn React',
        description: 'React is a fantastic new libarary to make fast dynamic pages',
        imageUrl: 'http://formatjs.io/img/react.svg'
    },{
        title: 'Show Cources',
        number: 25,
        header: 'Learn Gulp',
        description: 'Gulp will improve your development workflow',
        imageUrl: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/75971.jmzDf.90c44df7-1c42-4f1e-afcf-54debeba00fd.png'
    }]
};

//React, please render this class
var element = React.createElement(ThumbnailList, options);

//React
React.render(element, document.querySelector(".container"));
