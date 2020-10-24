import React from 'react';

class Sidebar extends React.PureComponent {
  render(){
    return (
      <div className="sidebar py-4">
        <div className="menu py-2">
          <div className="menu-item active"><i className="fal fa-sticky-note" /><span className="mr-2"></span>Заметки</div>
          <div className="menu-item menu-item--sub"><i className="fal fa-list-ul"></i><span className="mr-2"></span>Категории</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;