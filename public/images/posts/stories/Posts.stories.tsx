import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Posts, PostsProps } from '../Posts';

export default {
  title: 'Components/Posts',
  component: Posts,
} as Meta;

const Template: Story<PostsProps> = (args) => <Posts {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Posts',
};