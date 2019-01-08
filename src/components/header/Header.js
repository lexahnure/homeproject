import Navigation from '../navigation';
import './header.scss';

const Header = ({ user, info }) => (
  <header className="header">
    <strong className="logo">
      <a href="/"><img src="images/cat_logo.jpg"></img></a>
    </strong>
    <Navigation list={['Home', 'Categories', 'Contacts']} />
    <div className="user-box">
        {
          user
            ? (
              <span>
                {user.firstName}
                {info && `(${info.categories}/${info.products})`}
              </span>
            )
            : (
              <span>
                <a href="/signin">SignIn</a>
                <a href="/signup">SignUp</a>
              </span>
            )
        }
    </div>
  </header>
);

export default Header;
