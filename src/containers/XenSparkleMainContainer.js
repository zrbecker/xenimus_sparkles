import XenSparkleMain from '../components/XenSparkleMain';
import { connect } from 'react-redux';

const mapStateToProps = ({sparkleItems, noSparkleItems}) => {
  return {sparkleItems, noSparkleItems};
}

export default connect(mapStateToProps)(XenSparkleMain);
