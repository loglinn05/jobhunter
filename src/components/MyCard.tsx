import { Card } from "primereact/card";

interface MyCardProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  children: React.ReactNode;
}

const MyCard = ({
  title,
  subtitle = "",
  bgColor = "bg-amber-100",
  children,
}: MyCardProps) => {
  const pt = {
    root: {
      className: `rounded-lg ${bgColor}`,
    },
    body: {
      className: `bg-transparent px-5 [&_*]:text-orange-800 rounded-lg h-full flex flex-col`,
    },
    content: {
      className: "inline-flex flex-col grow shrink-0",
    },
    title: {
      className: `mt-3`,
    },
    subTitle: {
      className: `!text-yellow-700`,
    },
  };
  return (
    <>
      <Card title={title} subTitle={subtitle} pt={pt}>
        {children}
      </Card>
    </>
  );
};

export default MyCard;
