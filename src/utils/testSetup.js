/*
 * file: testSetup.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: setup test suite with mocha, enzyme and chai
 * * have also mocks and stubs function for test
 * changes:
 * * Matteo Todescato   | 2018/04/11 | file creation
 * * Denis Mazzucato    | 2018/04/12 | add assert chai utils
 */

import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { use } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import toJson from 'enzyme-to-json';
import jsdom from 'jsdom';

// configure fake DOM for test suite
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

// configure chai with enzyme
use(chaiEnzyme());
configure({ adapter: new Adapter() });
const { expect, assert } = chai;

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
