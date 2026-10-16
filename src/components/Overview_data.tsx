// Fetch data for the first panel of the Overview page

import {useEffect } from "react";

export default function Overview_data({ dataloaded }: { dataloaded: any })
{
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/antoineftz/dashboarddata/main/numberoverv.json")
      .then(res => res.json())
      .then(dataloaded)
      .catch(console.error);
  }, [dataloaded]);

  return null; 
}
