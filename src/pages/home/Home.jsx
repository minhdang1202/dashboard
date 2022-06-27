import React from "react";
import FeaturedInfo from "../../components/FeaturedInfo";
import { userData } from "../../components/data";
import Chart from "../../components/Chart";
import "./home.css";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
