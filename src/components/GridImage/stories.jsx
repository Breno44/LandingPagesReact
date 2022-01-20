import { GridImage } from ".";

import mock from "./mock";

export default {
  title: "GridImage",
  component: GridImage,
  args: {
    children: "GridImage",
  },
  argTypes: {
    children: { type: "string" },
  },
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
