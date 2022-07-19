import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-react-router-v6';

import Layout from '.';
import store from '@redux/store';

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
        children: <div style={{ minHeight: '400vh' }}>Layout Children</div>,
        className: '',
    },
};

const Template = (args) => (
    <Provider {...{ store }}>
        <Layout {...args} />
    </Provider>
);

export const DarkHeader = Template.bind({});
DarkHeader.args = {
    bgColor: 'dark',
};

export const SkyBlueHeader = Template.bind({});
SkyBlueHeader.args = {
    bgColor: 'sky-blue',
};
