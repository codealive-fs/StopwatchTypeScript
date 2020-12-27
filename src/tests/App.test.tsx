import React from 'react';
import { shallow } from 'enzyme';
// import App from '../components/App';
import Main from "../Components/Main/Main"

describe('Main', () => {

  let container : any
  beforeEach(() => (container = shallow(<Main />)))

  // 1st test  

  it("should render a <div/>",()=>{
    expect(container.find("div").length).toEqual(2)
  })

it("should render the Main Component", () => {
    expect(container.containsMatchingElement(<Main />)).toEqual(false)
  })

});
