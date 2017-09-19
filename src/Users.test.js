import React from 'react';
import ReactDOM from 'react-dom';
import Users from './users';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<Users />, div);
  // expect(1).toBe(1);
  it('should find a result via fetch', () => {
    return fetch('http://localhost:3000/')
        .then(() => {
          const div = document.createElement('div');
          ReactDOM.render(<Users />, div);
        })
        .catch((err) => console.log('Error!!!!' + err));
  });
});
