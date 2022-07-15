import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {message: 'Hi, how are you?', likesCount: 15},
  {message: 'It is my first post', likesCount: 20},
]

const dialogsData = [
  { user: 'Dymich', id: 1 },
  { user: 'Aleksey', id: 2 },
  { user: 'Valentina', id: 3 },
  { user: 'Georg', id: 4 },
  { user: 'Viktor', id: 5 },
  { user: 'Sveta', id: 6 },
];

const messagesData = [
  { message: 'Hi', likeCount: 10 },
  { message: 'How are you', likeCount: 5 },
  { message: 'Oh yeah!', likeCount: 10 },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
