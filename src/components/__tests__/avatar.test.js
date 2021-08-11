import { render } from "@testing-library/react";
import Avatar from "../Avatar";

describe("Avatar Component", () => {
  it("render image", () => {
    const { getByTestId } = render(<Avatar />);

    const image = getByTestId("image");
    expect(image).toBeTruthy();
  });

  it("image - has src", () => {
    const { getByTestId } = render(<Avatar src="/viktor.jpeg" />);

    const image = getByTestId("image");
    expect(image).toHaveAttribute("src", "/viktor.jpeg");
  });

  it("render isOnline indicator", () => {
    const { getByTestId } = render(<Avatar />);

    const dot = getByTestId("isOnline");
    expect(dot).toBeTruthy();
  });

  it("is Online - green", () => {
    const { getByTestId } = render(<Avatar active={true} />);
    const color = "green";

    const dot = getByTestId("isOnline");
    expect(dot).toHaveStyle(`background: ${color}`);
  });

  it("is Offline - grey", () => {
    const { getByTestId } = render(<Avatar active={false} />);
    const color = "grey";

    const dot = getByTestId("isOnline");
    expect(dot).toHaveStyle(`background: ${color}`);
  });
});
