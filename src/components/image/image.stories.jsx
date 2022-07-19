import Image from '.';

export default {
    title: 'UI/Image',
    component: Image,
    args: {
        alt: 'Kitten',
        className: '',
        src: 'https://placekitten.com/150',
        style: {},

        onLoad: () => {},
    },
};

const Template = (args) => <Image {...args} />;

export const WithSpinner = Template.bind({});
WithSpinner.args = {
    noSpinner: false,
};

export const WithoutSpinner = Template.bind({});
WithoutSpinner.args = {
    noSpinner: true,
};
