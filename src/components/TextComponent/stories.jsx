import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Consectetur soluta repudiandae beatae dignissimos quaerat, 
      ipsum iste modi non deleniti praesentium corporis provident recusandae mollitia. 
      Facere eius cumque ipsam debitis alias.`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
