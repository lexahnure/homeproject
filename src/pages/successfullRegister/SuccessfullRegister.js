const SuccessfullRegister = ({ history }) => (
  <div className="card successReg">
    <h3>You have been successfuly registered</h3>
    <p>You may get back to Main page or Login to be able edit your own products and categories</p>
    <div className="button-group">
      <button type="button" className="accent" onClick={history.push('/')}>Go to Main</button>
      <button type="button" onClick={history.push('/login')}>Login</button>
    </div>
  </div>
);

export default SuccessfullRegister;
