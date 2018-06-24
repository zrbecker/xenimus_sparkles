import XenSparkleFilter from '../components/XenSparkleFilter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  changeItemLevel,
  changeAlwaysInclude,
  changeAlwaysExclude,
} from '../actions/filterFormActions'
import { updateFilter } from '../actions/filterUpdateFilter'

const mapStateToProps = ({filterForm}) => {
  return {...filterForm}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeItemLevel,
    changeAlwaysInclude,
    changeAlwaysExclude,
    updateFilter,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(XenSparkleFilter)
