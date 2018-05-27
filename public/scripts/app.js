console.log('app-js is running');

/** @jsx React.DOM */
var template = React.createElement(
    "h1",
    {id: "something"},
    "teste"
);
var approot = document.getElementById('app');
ReactDOM.render(template, approot);