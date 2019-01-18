import PropTypes from 'prop-types';
import './hello.scss';

class Hello extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  
  // static defaultProps = {
  //   info: {}
  // }

  render() {
    const {
      user = {}
    } = this.props;

    return (
      <div className="helloBoard">
        <h2>Hello, {user.firstName || "incognito"}</h2>
      </div>
    );
  }
}

export default Hello;
