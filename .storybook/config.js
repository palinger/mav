import { configure, addDecorator } from '@kadira/storybook';
import muiDecorator from '../stories/muiDecorator';

addDecorator(muiDecorator);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
