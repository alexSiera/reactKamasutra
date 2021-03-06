import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, onDialogChange, onChange, onDialogTextAreaSubmit } from './Redux/store';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        onChange={onChange}
        onDialogChange={onDialogChange}
        onDialogTextAreaSubmit={onDialogTextAreaSubmit}
      />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};
