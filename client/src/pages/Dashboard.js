import React from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    const response = await fetch("/api/v1/home");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
