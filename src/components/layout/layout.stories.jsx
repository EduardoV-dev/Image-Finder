import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-react-router-v6';

import Layout from '.';
import store from '@store/store';

export default {
    title: 'Layout/App',
    component: Layout,

    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: '/',
            searchParams: { query: '' },
        },
    },
    args: {
        children: <div style={{ minHeight: '250vh' }}>Layout Children</div>,
        className: '',
        bgColor: 'dark',
        searchInputType: 'not-animated',
    },
    argTypes: {
        bgColor: {
            control: {
                type: 'select',
                options: ['dark', 'sky-blue'],
            },
        },
        searchInputType: {
            control: {
                type: 'select',
                options: ['animated-on-scroll', 'not-animated'],
            },
        },
    },
};

const Template = (args) => (
    <Provider {...{ store }}>
        <Layout {...args} />
    </Provider>
);

export const DarkHeader = Template.bind({});

export const SkyBlueHeader = Template.bind({});
SkyBlueHeader.args = {
    bgColor: 'sky-blue',
};

export const AnimatedHeaderSearchInput = Template.bind({});
AnimatedHeaderSearchInput.args = {
    searchInputType: 'animated-on-scroll',
};
