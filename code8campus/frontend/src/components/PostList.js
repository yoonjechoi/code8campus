import React, {Component} from 'react';
import './PostList.scss';

class PostList extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div className="my-div">
          Hello
        </div>

        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        <button type="button" className="btn btn-link">Link</button>

      </div>

    );
  }
}

export default PostList;
