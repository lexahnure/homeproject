import ReactDom from 'react-dom';

import Main from './components/main';

import './reset.scss';
import './styles.scss';

class Wrapper extends Component {

  render() {

    return (
      <Main className="main">
      </Main>
    )
  }
};

ReactDom.render( <Wrapper/>, document.getElementById('app') );