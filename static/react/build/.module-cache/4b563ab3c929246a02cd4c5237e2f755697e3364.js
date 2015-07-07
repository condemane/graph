var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",
    getInitialState: function() {
        return {
            filterText: ''
        };
    },

    handleUserInput: function(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },

    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(SearchBar, {
                    filterText: this.state.filterText}
                )
            )
        );
    }
});


var SearchBar = React.createClass({displayName: "SearchBar",
    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value,
            this.refs.inStockOnlyInput.getDOMNode().checked
        );
    },
    render: function() {
        return (
            React.createElement("form", null, 
                React.createElement("input", {
                    type: "text", 
                    placeholder: "Search...", 
                    value: this.props.filterText, 
                    ref: "filterTextInput", 
                    onChange: this.handleChange}
                ), 
                React.createElement("p", null, 
                    React.createElement("input", {
                        type: "checkbox", 
                        checked: this.props.inStockOnly, 
                        ref: "inStockOnlyInput", 
                        onChange: this.handleChange}
                    ), 
                    ' ', 
                    "Only show products in stock"
                )
            )
        );
    }
});

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
React.render(React.createElement(FilterableProductTable, {products: PRODUCTS}), document.getElementById('forceFilter'));

