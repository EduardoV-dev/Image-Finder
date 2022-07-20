import Card from '.';

export default {
    title: 'UI/Card',
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: <h1 className="text-white">Hello World</h1>,
    className: '',
    style: {},
};
