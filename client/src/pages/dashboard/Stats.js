import { useEffect } from "react";
import {
  StatsContainer,
  Loading,
  ChartsContainer,
} from "../../components/index";
import { useAppContext } from "../../context/appContext";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  console.log(monthlyApplications);
  useEffect(() => {
    showStats();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 1 && <ChartsContainer />}
    </>
  );
};
export default Stats;
