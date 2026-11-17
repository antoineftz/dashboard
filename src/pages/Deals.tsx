import "./deals.css";

export default function Deals() {


   return (
  
    <div className="containerdeal">
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Stage</th>
                    <th scope="col">Status</th>
                    <th scope="col">Label</th>
                    <th scope="col">Value</th>
                    <th scope="col">Probability</th>
                    <th scope="col">Products counts</th>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>4999</td>
                        <td>Reddit deal</td>
                        <td>Mia Davis</td>
                        <td>Closed Won</td>
                        <td>won</td>
                        <td>New Business</td>
                        <td>946.0K</td>
                        <td>100.00%</td>
                        <td>2</td>

                    </tr>

                    <tr>
                        <td>4817</td>
                        <td>Couple.io deal</td>
                        <td>Hiroshi Tanaka</td>
                        <td>Lead In</td>
                        <td>open</td>
                        <td>Partnership</td>
                        <td>368.5K</td>
                        <td>50.00%</td>
                        <td>6</td>

                    </tr>

                    <tr>
                        <td>4274</td>
                        <td>Dell deal</td>
                        <td>John Smith</td>
                        <td>Interview</td>
                        <td>open</td>
                        <td>Upsell</td>
                        <td>368.0K</td>
                        <td>30.00%</td>
                        <td>7</td>
                    </tr>

                    <tr>
                        <td>5380</td>
                        <td>Uber deal</td>
                        <td>Sophia Liu</td>
                        <td>Lead In</td>
                        <td>open</td>
                        <td>Remarketing</td>
                        <td>363.0K</td>
                        <td>50.00%</td>
                        <td>2</td>


                    </tr>

                    <tr>
                        <td>5377</td>
                        <td>Facebook deal</td>
                        <td>Jon Smith</td>
                        <td>Contact made</td>
                        <td>open</td>
                        <td>Remarketing</td>
                        <td>354.5K</td>
                        <td>50.00%</td>
                        <td>7</td>

                    </tr>

                    <tr>
                        <td>3288</td>
                        <td>Paypal deal</td>
                        <td>Zara Khan</td>
                        <td>Lead In</td>
                        <td>open</td>
                        <td>New Business</td>
                        <td>330.5K</td>
                        <td>50.00%</td>
                        <td>2</td>

                    </tr>

                </tbody>

            </table>
        
        </div>
    </div>
   );
   
  
}

