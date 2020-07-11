import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Canva from '../components/Canva';
import Pixel from '../components/Pixel';

test('fill colors array at the beginning', () => {
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = Enzyme.shallow(<Canva height='5' width='5'/>);
    expect(wrapper.state('pixels').length).toBe(25);
});

test('render pixels in given amount', () => {
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = Enzyme.mount(<Canva height='11' width='10'/>);
    expect(wrapper.find(Pixel).length).toBe(110);
});

test('createKey', () => {
    const canva = new Canva();
    expect(canva.createKey(4, 5)).toBe("0405");
    expect(canva.createKey(0, 0)).toBe("0000");
    expect(canva.createKey(15, 20)).toBe("1520"); 
});

test('indexOfPixel 10x10', () => {
    const props = {
        height: 10,
        width: 10
    }
    const canva = new Canva(props);
    expect(canva.indexOfPixel("0000")).toBe(0);
    expect(canva.indexOfPixel("0404")).toBe(44);
    expect(canva.indexOfPixel("0909")).toBe(99);
});

test('indexOfPixel 5x5', () => {
    const props = {
        height: 5,
        width: 5
    }
    const canva = new Canva(props);
    expect(canva.indexOfPixel("0404")).toBe(24);
    expect(canva.indexOfPixel("0203")).toBe(13);
});

test('indexOfPixel 2x9', () => {
    const props = {
        height: 2,
        width: 9
    }
    const canva = new Canva(props);
    expect(canva.indexOfPixel("0101")).toBe(10);
    expect(canva.indexOfPixel("0103")).toBe(12);
});

test('indexToKey width 11', () => {
    const props = {
        height: 11,
        width: 10
    }
    const canva = new Canva(props);
    expect(canva.indexToKey(10)).toBe("0100");
    expect(canva.indexToKey(99)).toBe("0909");
    expect(canva.indexToKey(109)).toBe("1009");
})