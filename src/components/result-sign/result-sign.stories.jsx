import { ReactComponent as NoResults } from '@assets/svg/results-not-found.svg';
import ResultSign from '.';

export default {
    title: 'UI/ResultSign',
    component: ResultSign,
};

const Template = (args) => <ResultSign {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: 'Basic Result Sign Message',
    illustration: <NoResults />,
};
