/* eslint-disable jsx-a11y/anchor-is-valid */
export const TabNav = ({ tabs, selectIndex, selectTab }) => {
  const itemClick = (event, index) => {
    event.preventDefault();
    selectTab(index);
  };

  return (
    <nav className="nav-tab">
      <ul>
        {
          tabs.map((tab, index) => (
            <li
              key={index}
              className={selectIndex === index ? 'active' : ''}
            >
              <a
                href="#"
                onClick={event => itemClick(event, index)}
              >
                {tab}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
