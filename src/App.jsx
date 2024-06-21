import { useState } from "react";
import invimg from "../src/assets/investment-calculator-logo.png";
import Userinput from "../src/components/Userinput";
import { calculateInvestmentResults } from "./util/investment";

function App() {  
  const [userData, setUserData] = useState({
    userInput1: '',
    userInput2: '',
    userInput3: '',
    userInput4: '',
    result: []
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  function handleCalculate(userData) {
    const result = calculateInvestmentResults({
      initialInvestment: parseFloat(userData.userInput1),
      annualInvestment: parseFloat(userData.userInput2),
      expectedReturn: parseFloat(userData.userInput3),
      duration: parseInt(userData.userInput4, 10)
    });
    console.log(result);
    return result;
  }
  function commulativeintresting(index,result){
    let cumulativeInterest = 0;
    for (let i = 0; i <= index; i++) {
      cumulativeInterest += result[i].interest;
    }
    return cumulativeInterest.toFixed(2);
  }

  return (
    <div>
      <div id="header">
        <img src={invimg} alt="investment-calculator-logo" />
        <h1>Investment Calculator</h1>
      </div>
      <div>
        <div id="user-input">
          <Userinput value={userData.userInput1} text={"STARTING AMOUNT ($)"} handleChange={changeHandler} name={"userInput1"} />
          <Userinput value={userData.userInput2} text={"ADDITIONAL YEARLY CONTRIBUTION ($)"} handleChange={changeHandler} name={"userInput2"} />
          <Userinput value={userData.userInput3} text={"RATE OF RETURN (%, PER YEAR)"} handleChange={changeHandler} name={"userInput3"} />
          <Userinput value={userData.userInput4} text={"YEARS TO GROW"} handleChange={changeHandler} name={"userInput4"} />
          <button className="center" onClick={() => {
          setUserData({
            userInput1: '',
            userInput2: '',
            userInput3: '',
            userInput4: '',
            result: []          
          })
        }}>reset</button>
        <button onClick={() => {
          const result = handleCalculate(userData);
          setUserData(prevUserData => ({
            ...prevUserData,
            result: result
          }));
        }}>Calculate</button>
        </div>
        
        <div id="result">
          {userData.result.length > 0 && (
            <table>
              <thead>
              <tr>
                <th>Year</th>
                <th>Total Contributions</th>
                <th>Interest</th>
                <th>End of Year Value</th>
                <th>interest sum</th>
                
              </tr>
              </thead>
              
              {userData.result.map((item, index) => (<tbody>
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{item.annualInvestment *(index+1).toFixed(2)}</td>
                  <td>{item.interest.toFixed(2)}</td>
                  <td>{item.valueEndOfYear.toFixed(2)}</td>
                  <td>{commulativeintresting(index,userData.result)}</td>
                  
                </tr>
                </tbody>
              ))}
            </table>

          )}
        </div>
      </div>
    </div>
  );
}

export default App;



// import { useState } from "react";
// import invimg from "../src/assets/investment-calculator-logo.png"
// import Userinput from "../src/components/Userinput"
// import {calculateInvestmentResults} from "./util/investment"


// function App() {  
//   const [userData, setUserData] = useState({
//     userInput1: '',
//     userInput2: '',
//     userInput3: '',
//     userInput4: '',
//     result:[]
//   });

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevUserData) => ({
//       ...prevUserData,
//       [name]: value
//     }));
//   };

//   function handleCalculate(userData) {
//     const result = calculateInvestmentResults({
//       initialInvestment: parseFloat(userData.userInput1),
//       annualInvestment: parseFloat(userData.userInput2),
//       expectedReturn: parseFloat(userData.userInput3),
//       duration: parseInt(userData.userInput4, 10)
//     });
//     console.log(result)
//     setUserData(prevUserData => ({
//       ...prevUserData,
//       result: result
//     }));
//   }
//   return (
//   <div>
//       <div id="header">
//         <img src={invimg} alt="investment-calculator-logo.png" />
//         <h1>Investment Calculator   {userData.result.length}</h1>
//       </div>
//       <div id="bm">
//       <div id="user-input">
//         <Userinput value={userData.userInput1} text={"STARTING AMOUNT ($)"} handleChange={changeHandler} name={"userInput1"}/>
//         <Userinput value={userData.userInput2} text={"ADDITIONAL YEARLY CONTRIBUTION ($)"} handleChange={changeHandler} name={"userInput2"}/>
//         <Userinput value={userData.userInput3} text={"RATE OF RETURN (%, PER YEAR)"} handleChange={changeHandler} name={"userInput3"}/>
//         <Userinput value={userData.userInput4} text={"YEARS TO GROW"} handleChange={changeHandler} name={"userInput4"}/>
//       </div>
//       <button onClick={() => {
//   const result = handleCalculate(userData);
//   setUserData((prevUserData) => ({
//     ...prevUserData,
//     result: result // assuming handleCalculate returns the result string
//   }));
// }}> caluculate</button>

//       </div>
//   </div>
//   )
// }

// export default App
