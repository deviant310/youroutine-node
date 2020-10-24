import React from 'react';

import Sidebar from 'components/sidebar';
import Main from 'components/main';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col flex-grow-0">
            <Sidebar/>
          </div>
          <div className="col">
            <Main/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;