import React from 'react';
import ReactDOM from 'react-dom';

import CommentsApp from './containers/app.js';
import { createStore } from 'redux';
import comments from './reducers';

const initialState = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [
  {
    id: 1,
    text: 'Вчера ели равиоли с каноли и торчелини с могерини. На троих заплатили всего 3 евро.' +
      ' Порции – огромные! И это в центре Рима. А шеф-повар нам с собой еще бутылку Дон Пиреньйон дал. '+
      'Бесплатно. Как же я рада, что свалила из Рашки.',
    author: 'Клавдия Челентано',
    date: '08-11-2019'
  },
  {
    id: 2,
    text: 'Вообще-то, чтоб вы знали: анчоусы НЕЛЬЗЯ!!! заменить килькой. Будучи родственниками анчоусу, '+
      'всякие привычные нам селедки и кильки имеют СОВЕРШЕННО ИНОЙ ВКУС, и никакой заменой друг другу не '+
      'являются. Поэтому все, что вы пишете — это ПРОФОНАЦИЯ!',
    author: 'Вероника Рамзи',
    date: '08-11-2019'
  },
  {
    id: 3,
    text: 'Каперсы.',
    author: 'Вася Пупкин',
    date: '08-11-2019'
  },
  {
    id: 4,
    text: 'Что «каперсы»?',
    author: 'Вероника Рамзи',
    date: '08-11-2019'
  },
  {
    id: 5,
    text: 'Я каперсы ел. Не анчоусы.',
    author: 'Вася Пупкин',
    date: '08-11-2019'
  },
  {
    id: 6,
    text: 'Ой, да жрите вы, что хотите! Хамить-то зачем? Вам пытаются объяснить, но вы, похоже, '+
    'считаете себя самым умным. Отписываюсь.',
    author: 'Вероника Рамзи',
    date: '08-11-2019'
  }
];

const store = createStore(comments, initialState);

store.subscribe(()=>{
  localStorage.setItem('comments', JSON.stringify(store.getState()))
});

ReactDOM.render(
  <CommentsApp store={store} />,
  document.querySelector('#comments')
);
