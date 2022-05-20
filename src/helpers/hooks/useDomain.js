import { useEffect, useState } from "react";

const useDomain = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://it-host.herokuapp.com/domainData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useDomain;
