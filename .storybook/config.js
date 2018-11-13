import { configure } from '@storybook/react';

const componentsList = [
  'Form',
];

function loadStories() {
  componentsList.forEach(componentName => require(`../src/components/${componentName}/story.js`))
}

configure(loadStories, module);