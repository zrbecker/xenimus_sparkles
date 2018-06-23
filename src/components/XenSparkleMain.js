import React, { Component } from 'react';

import XenSparkleFilterContainer from '../containers/XenSparkleFilterContainer';
import XenSparkleItemList from './XenSparkleItemList';

export default class XenSparkleMain extends Component {
  render() {
    return (
      <div className="xenspark-root">
        <div className="jumbotron text-center xenspark-title mb-0">
          <h1 className="display-4">Xenimus Sparkles Calculator</h1>
          <p className="lead">
            Test out sparkle settings, so you don't miss out on anything!
          </p>
        </div>
        <div className="container xenspark-body">
          <XenSparkleFilterContainer />
          <hr />
          <div className="row">
            <div className="col-md mb-3">
              <h4 className="text-center mb-3">Sparkle</h4>
              <XenSparkleItemList items={this.props.sparkleItems} />
            </div>
            <div className="col-md mb-3">
              <h4 className="text-center mb-3">No Sparkle</h4>
              <XenSparkleItemList items={this.props.noSparkleItems} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
