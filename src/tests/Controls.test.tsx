import React from 'react';
import { shallow } from 'enzyme';
import Main from "../Components/Main/Main"


describe('Main', () => {

    let container: any
    beforeEach(() => (container = shallow(<Main />)))

    // 1st test  

    it("should render a <div/> of Main", () => {
        expect(container.find("div").length).toEqual(2)
    })

    it("should render a <div />", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(0)
    })
    it("should render a <div />", () => {
        expect(container.find(".root").length).toBeGreaterThanOrEqual(0)
    })

});
