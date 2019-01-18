import Navigation from '../navigation';
import { logout } from '../../services';
import './header.scss';

const Header = ({ user, onLogout, history }) => {
  const onLogoutHandler = (event) => {
    event.preventDefault();
    logout().then(() => {
      onLogout();
      history.push('/home');
    });
  };

  return (
    <header className="header">
      <strong className="logo">
        <a href="/"><img src="images/cat_logo.jpg"></img></a>
      </strong>
      <Navigation list={['Home', 'Tasklist', 'Contacts']} />
      <div className="user-box">
        {
          user
            ? (
              <span>
                <span>{user.firstName}</span>
                <button type="button" onClick={onLogoutHandler}>Logout</button>
              </span>
            )
            : (
              <Navigation list={['Login', 'User']} />
            )
        }
      </div>
    </header>
  );
};

export default Header;
