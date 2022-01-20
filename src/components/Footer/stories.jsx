import { Footer } from ".";
export default {
  title: "Footer",
  component: Footer,
  args: {
    children: "Footer",
  },
  argTypes: {
    children: { type: "string" },
    html: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
