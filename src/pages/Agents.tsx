import "./agents.css";
import Charthoriz from "../components/Localchart";

export default function Agents() {
  return (
  <>
  
    <div className="containerag">
        <div className= "table-wrapper">
            <table>
            
             <thead>
             <tr>
      <th scope="col">Owner</th>
      <th scope="col">Closed amount</th>
      <th scope="col">Deals</th>
      <th scope="col">Open deals</th>
      <th scope="col">Lost deals</th>
      <th scope="col">Won deals</th>
      <th scope="col">Win rate</th>
      <th scope="col">Avg days to close</th>
      <th scope="col">Avg open deal age</th>
      </tr>
            </thead>

            <tbody>
            <tr>
            <td>Catherine Dereve</td>
            <td>974.7K</td>
            <td>148</td>
            <td>115</td>
            <td>30</td>
            <td>3</td>
            <td>9.09%</td>
            <td>63.45</td>
            <td>206.85</td>

            </tr>

            <tr>
            <td>Zara Khan</td>
            <td>615.3K</td>
            <td>156</td>
            <td>113</td>
            <td>33</td>
            <td>10</td>
            <td>23.26%</td>
            <td>62.14</td>
            <td>193.42</td>

            </tr>

            <tr>
            <td>Sebastian Muller</td>
            <td>495.8K</td>
            <td>128</td>
            <td>93</td>
            <td>30</td>
            <td>5</td>
            <td>14.29%</td>
            <td>59.26</td>
            <td>199.46</td>

            </tr>

            <tr>

            <td>Emily Johnson</td>
            <td>469.1K</td>
            <td>117</td>
            <td>92</td>
            <td>22</td>
            <td>3</td>
            <td>12.00%</td>
            <td>60.96</td>
            <td>203.55</td>

            </tr>

             <tr>

            <td>Emma Chen</td>
            <td>438.4K</td>
            <td>121</td>
            <td>91</td>
            <td>26</td>
            <td>4</td>
            <td>13.33%</td>
            <td>61.40</td>
            <td>199.79</td>

            </tr>

             <tr>

            <td>Isabella Rossi</td>
            <td>330.3K</td>
            <td>130</td>
            <td>100</td>
            <td>24</td>
            <td>6</td>
            <td>20.00%</td>
            <td>68.00</td>
            <td>204.14</td>

            </tr>

            <tr>

            <td>Oliver Kim</td>
            <td>321.1K</td>
            <td>142</td>
            <td>108</td>
            <td>28</td>
            <td>6</td>
            <td>17.65%</td>
            <td>57.00</td>
            <td>217.11</td>

            </tr>

             <tr>

            <td>Daniel Garcia</td>
            <td>276.0K</td>
            <td>126</td>
            <td>83</td>
            <td>36</td>
            <td>7</td>
            <td>16.28%</td>
            <td>58.67</td>
            <td>195.31</td>

            </tr>

             <tr>

            <td>Amelia Wilson</td>
            <td>233.8K</td>
            <td>141</td>
            <td>99</td>
            <td>35</td>
            <td>7</td>
            <td>16.67%</td>
            <td>60.36</td>
            <td>197.62</td>

            </tr>

              <tr>

            <td>Clint East</td>
            <td>217.8K</td>
            <td>111</td>
            <td>87</td>
            <td>19</td>
            <td>5</td>
            <td>20.83%</td>
            <td>60.04</td>
            <td>195.67</td>

            </tr>

            </tbody>
            </table>
        </div>
    </div>

     <div className="containerag">
        
       <div className="chart-wrapper">
       
       <Charthoriz/>
       </div>
    
    </div>
 </>
  
);

}