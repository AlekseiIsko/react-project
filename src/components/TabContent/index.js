import React, {useContext} from "react";
import {TabsContext} from '../../Home';
import tabContent from '../../tab-content.json';

import man from '../../img/man.svg';
import sofa from '../../img/sofa.svg';
import girlbluejeans from '../../img/girlbluejeans.svg';
import wachesthings from '../../img/wachesthings.svg';

const imageArr = [man, sofa, girlbluejeans, wachesthings];

const TabContent = () => {
  const {activeTab} = useContext(TabsContext);

  return (
    <div className="tab-content">
      <div className="container">
        <div className="tab-item">
          <div>
            <img src={imageArr[activeTab]} alt="Cleaner man" />
          </div>
          <div>
            <h1>{tabContent[activeTab].title}</h1>
            <h4>{tabContent[activeTab]['after-title']}</h4>
            <p>{tabContent[activeTab].description}</p>
            <button type="button" className="btn check-available">
              Check availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
