import {ChatPage} from "./ChatPage";
import {shallow} from "enzyme";
import React from "react";

describe('ChatPage', () => {
  it('should render list of chat messags', () => {
    const props = {"messages": [{"text": "Hello"}], "loadMessages": () => {} };
    const wrapper = shallow(<ChatPage {...props}/>);

    expect(wrapper.find('#messages').length).toBe(1);
  });
});
