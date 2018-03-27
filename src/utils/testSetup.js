import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { use } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import toJson from 'enzyme-to-json';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

use(chaiEnzyme());
configure({ adapter: new Adapter() });
const { expect } = chai;

// define test enviroments as global var
global.expect = expect;
global.chai = chai;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.toJson = toJson;
global.document = document;
global.window = document.defaultView;

// export enzyme/chai test enviroments
export { expect, chai, shallow, mount, render, toJson };
