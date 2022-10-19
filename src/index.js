/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

import addScore from './modules/addScore.js';

const submit = document.getElementById('submit');

submit.addEventListener('click', addScore);
