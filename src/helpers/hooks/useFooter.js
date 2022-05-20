import { useEffect, useState } from "react";

const useFooter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://it-host.herokuapp.com/footer")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useFooter;
