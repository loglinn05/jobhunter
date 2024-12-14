import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Icon from "../../assets/images/icon.svg";

interface ItemInterface {
  label: string;
  icon: string;
  command: () => void;
  items?: ItemInterface[];
}

const MyNavbar = () => {
  const navigate = useNavigate();

  const items: ItemInterface[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Jobs",
      icon: "pi pi-star",
      command: () => {
        navigate("/jobs");
      },
    },
    {
      label: "Add Job",
      icon: "pi pi-plus",
      command: () => {
        navigate("/add-job");
      },
    },
  ];

  const pt = {
    root: {
      className:
        "sticky top-0 left-0 right-0 z-[2000] rounded-none border-0 bg-orange-200",
    },
    menu: {
      className: "bg-orange-200 ms-auto",
    },
    content: {
      className:
        "rounded-3xl bg-transparent hover:!bg-orange-600 [&_*]:!text-orange-800 [&_*]:hover:!text-white transition-all duration-500 [&_*]:transition-all [&_*]:duration-500",
    },
    button: {
      className: "ms-auto",
    },
  };

  const start: JSX.Element = (
    <>
      <Link className="flex flex-shrink-0 items-center" to="/">
        <img className="h-10 w-auto" src={Icon} alt="Job Hunter" />
        <span className="hidden md:block text-2xl font-bold ml-7">
          Job Hunter
        </span>
      </Link>
    </>
  );

  return <Menubar model={items} start={start} pt={pt} />;
};

export default MyNavbar;
