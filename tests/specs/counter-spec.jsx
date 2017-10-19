import {shallow, mount, debug} from 'enzyme';
import makeRender from '../utils/make-render';
import Counter from '../../src/counter';

describe('Counter', () => {
  const defaultProps = {};
  const render = makeRender(Counter, defaultProps);

  it('should render without errors', () => {
    var wrapper = shallow(render());

    expect(wrapper.exists()).toEqual(true);
  });

  it('should increment when clicked', () => {
    var wrapper = mount(render());
    var counterButton = wrapper.find('.-button');
    counterButton.simulate('click');

    expect(counterButton.text()).toEqual('Count: 1');
  });
});
