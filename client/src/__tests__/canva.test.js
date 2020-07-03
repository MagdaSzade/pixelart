const { default: Canva } = require("../components/Canva");

import React from 'react';
//import { create } from 'react-test-render';

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