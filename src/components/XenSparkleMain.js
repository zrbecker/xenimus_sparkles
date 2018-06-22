import React, {Component} from 'react';

import XenSparkleFilterContainer from '../containers/XenSparkleFilterContainer';
import XenSparkleItemList from './XenSparkleItemList';

export default class XenSparkleMain extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1 className="display-4">Xenimus Sparkle Calculator</h1>
          <p className="lead">
            Test out sparkle settings, so you don't miss out on anything!
          </p>
        </div>
        <XenSparkleFilterContainer />
        <hr />
        <div className="row mt-n3">
          <div className="col-md mt-4">
            <h4 className="text-center">Sparkle</h4>
            <XenSparkleItemList items={this.props.sparkleItems} />
          </div>
          <div className="col-md mt-4">
            <h4 className="text-center">No Sparkle</h4>
            <XenSparkleItemList items={this.props.noSparkleItems} />
          </div>
        </div>
      </div>
    );
  }
}
