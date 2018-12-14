import React from 'react';

class Item extends React.Component{

    getItems(){
        return this.props.items.map( (item, index) => {
            return (<li key={index}>{item}</li>);
        });
    }

    render(){
        return (
            <ul className="item-list">
                {this.getItems()}
            </ul>
        );
    }
}

export default Item;