import Salespip from "../components/Salespipeline";
import Overview_data from "../components/Overview_data";
import { useState} from "react";
import Deallossre from "../components/Dealloss";
import Linechwon from "../components/Wondeal";
import Linechdeal from "../components/Dealsproje";

export default function Overview() {
     const [data, setData] = useState<any[]>([]);
  return (
    <div className="wrapper">
      <Overview_data dataloaded= {setData} />

      <div className="one">
      
      <div className="container-stats">
        <div className="sales">Total sales <p> {data[0]?.value}</p></div>
        <div className="wondeals">Won Deals <p> {data[1]?.value}</p></div>
        <div className="winrate">Win Rate <p> {data[2]?.value}</p></div>  
        <div className="avgdays">Avg days to close <p> {data[3]?.value}</p></div>
        </div>

        <div className="container-stats">
	        <div className="pipeline">Pipeline value <p> {data[4]?.value}</p></div>
            <div className="opendeals">Open deals <p> {data[5]?.value}</p></div>
            <div className="weightedv">Weighted value <p> {data[6]?.value}</p></div>
            <div className="avgopen">Avg open deal <p> {data[7]?.value}</p></div>
        </div>
      
      </div>
      
       <div className="two">
      
        <Salespip/>
          
        </div>
       <div className="three">Report date</div>
       <div className="four">
         
         <Linechwon/>
       </div>
       <div className="five">

         <Deallossre/>
       </div>
       <div className="six">

         <Linechdeal/>
       </div>
    </div>
  );
}
