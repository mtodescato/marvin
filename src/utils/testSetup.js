import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { use, Assertion } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import toJson from 'enzyme-to-json';
import jsdom from 'jsdom';
import isGeneratorFunction from 'is-generator-function';

// configure fake DOM for test suite
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

// configure chai with enzyme
use(chaiEnzyme());
const { expect, assert } = chai;
configure({ adapter: new Adapter() });
// add 'end' chaining helper for determinate generator's end
// eslint-disable-next-line func-names
chai.Assertion.addProperty('end', function () {
  // eslint-disable-next-line no-underscore-dangle
  const obj = this._obj;
  Assertion(isGeneratorFunction(obj));

  // second, our type check
  const end = obj.next();
  this.assert(
    end.value === undefined && end.done === true,
    'expected #{this} end in this iteration',
    'expected #{this} not end in this iteration',
  );
});

// define test enviroments as global var
global.expect = expect;
global.assert = assert;
global.chai = chai;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.toJson = toJson;

// export enzyme/chai test enviroments
export { expect, assert, chai, shallow, mount, render, toJson };
