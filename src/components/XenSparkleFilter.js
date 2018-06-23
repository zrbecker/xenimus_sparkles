import React, {Component} from 'react';

export default class XenSparkleFilter extends Component {
  componentDidMount() {
    this.updateFilter();
  }

  componentDidUpdate() {
    this.updateFilter();
  }

  updateFilter() {
    const {itemLevel, alwaysInclude, alwaysExclude} = this.props;
    const alwaysIncludeList = alwaysInclude !== '' ?
      alwaysInclude.split(',').filter(phrase => phrase !== '') :
      [];
    const alwaysExcludeList = alwaysExclude !== '' ?
      alwaysExclude.split(',').filter(phrase => phrase !== '') :
      [];
    this.props.updateFilter({
      itemLevel: Number(itemLevel),
      alwaysInclude: alwaysIncludeList,
      alwaysExclude: alwaysExcludeList,
    });
  }

  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-md-2">
            <label htmlFor="itemLevel">Item Level</label>
            <input
              type="number"
              className="form-control"
              id="itemLevel"
              placeholder="Item Level"
              autoComplete="off"
              value={this.props.itemLevel}
              onChange={e => this.props.changeItemLevel(e.target.value)}
            />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="alwaysInclude">Always Include</label>
            <input
              type="text"
              className="form-control"
              id="alwaysInclude"
              placeholder="Always Include"
              autoComplete="off"
              value={this.props.alwaysInclude}
              onChange={e => this.props.changeAlwaysInclude(e.target.value)}
            />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="alwaysExclude">Always Exclude</label>
            <input
              type="text"
              className="form-control"
              id="alwaysExclude"
              placeholder="Always Exclude"
              autoComplete="off"
              value={this.props.alwaysExclude}
              onChange={e => this.props.changeAlwaysExclude(e.target.value)}
            />
          </div>
        </div>
      </form>
    );
  }
}
