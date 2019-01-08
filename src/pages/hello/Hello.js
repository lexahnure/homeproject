import PropTypes from 'prop-types';
import './hello.scss';
import { getInfo } from '../../services';

class Hello extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    info: PropTypes.object,
  }
  
  static defaultProps = {
    info: {}
  }

  render() {
    const {
      user = {},
      info
    } = this.props;

    return (
      <div className="helloBoard">
        <h2>Hello, {user.firstName}</h2>
        {
          info &&
          <React.Fragment>
            <p>You have {info.categories} categories ({info.publishedCategories} published)</p>
            <p>You have {info.products} products</p>
            <a href="/">Go to categories</a>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default Hello;
