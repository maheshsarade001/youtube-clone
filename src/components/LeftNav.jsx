import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

import LeftNavMenuItem from "../components/LeftNavMenuItem";

const LeftNav = () => {
  const { selectedCategories, setSelectedCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategories(name);
      case "home":
        return setSelectedCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-60 overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 -translate-x-[60] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex flex-col px-5">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategories === item.name ? "bg-white/15" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/20" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/20" />
        <div className="text-white/50 text-xs"> Clone by M</div>
      </div>
    </div>
  );
};

export default LeftNav;
