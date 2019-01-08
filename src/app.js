import ReactDom from 'react-dom';
import AppComp from './appComponent';

import './reset.scss';
import './styles.scss';

class Wrapper extends Component {

  render() {

    return (
      <AppComp />
    )
  }
};

ReactDom.render( <Wrapper/>, document.getElementById('app') );