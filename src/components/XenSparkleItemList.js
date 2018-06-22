import React, {Component} from 'react';

export default class XenSparkleItemList extends Component {
  renderItems() {
    return (this.props.items.map(item => (
      <li key={item.itemLevel + item.name} className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-0">{item.name}</h5>
          <small>Item Level: {item.itemLevel}</small>
        </div>
      </li>
    )));
  }
  
  render() {
    return (
      <ul className="list-group">
        {this.renderItems()}
      </ul>
    );
  }
}
