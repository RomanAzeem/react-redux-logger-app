import React from 'react';

const Searchbar = () => {
  return (
    <nav style={styles} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
const styles = {
  marginBottom: '30px',
};

export default Searchbar;
