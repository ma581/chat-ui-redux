import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.</p>
        <hr className="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <Link className="btn btn-primary btn-lg" to="/chat" role="button">Learn more</Link>
      </div>);
  }
}


export default HomePage;
