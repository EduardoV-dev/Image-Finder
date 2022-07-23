import Spinner from '.';

export default {
    title: 'UI/Spinner',
    component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Loading = Template.bind({});
Loading.args = {
    loaded: false,
};

export const Loaded = Template.bind({});
Loaded.args = {
    loaded: true,
};
