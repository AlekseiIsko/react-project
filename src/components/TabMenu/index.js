import React, { useContext } from "react";
import {TabsContext} from '../../App';

const tabMenuList = [
  "Regularly Cleaning",
  "Deeper Cleaning",
  "Office Cleaning",
  "Windows Cleaning",
];

const TabMenu = () => {
  const {activeTab, setActiveTab} = useContext(TabsContext);

  const onMenuItemClick = (item) => {
    if(item !== activeTab) {
      setActiveTab(item);
    }
  };

  return (
    <div className="tab-menu">
      <div className="container">
        <ul>
          {tabMenuList.map((text, key) => (
            <li
              key={key.toString()}
              className={key === activeTab ? "active" : ""}
              onClick={() => onMenuItemClick(key)}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabMenu;
