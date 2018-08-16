// @flow
import React from 'react';
import { render } from 'react-dom';
import Presentation from './Presentation';

const htmlRoot = document.getElementById(process.env.REACT_ROOT);
render(<Presentation />, htmlRoot);
