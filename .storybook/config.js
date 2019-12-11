import { configure } from '@storybook/react';

configure(require.context('../frontend', true, /\.stories\.tsx$/), module);
