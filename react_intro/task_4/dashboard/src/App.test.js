import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("App renders without any errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("verify that App renders a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-header")).toHaveLength(1);
  });

  it("verify that App renders a div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });

  it("verify that App renders a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-footer")).toHaveLength(1);
  });
});