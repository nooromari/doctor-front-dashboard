import './App.css';
import Footer from './components/basic/Footer';
import Header from './components/basic/Header';
import Condition from './components/Condition';
import LineChart from './components/LineChart';
import Status from './components/Status';
import { fetchData } from './data';
import { useEffect, useState } from 'react';
import { consumption, fuel_cost, avg_cons } from './data';

function App() {

  const [stats, setSata] = useState({
    Active: 0,
    Inactive: 0,
    InShop: 0,
  })

  const [conditions, setCond] = useState([
    {
      condition: "Good",
      percent: 0,
      number: 0,
    },
    {
      condition: "Satisfactory",
      percent: 0,
      number: 0,
    },
    {
      condition: "Critical",
      percent: 0,
      number: 0,
    }
  ])

  function setStatData(active, inactive, inShop) {
    setSata({
      Active: active.length,
      Inactive: inactive.length,
      InShop: inShop.length,
    })
  }

  function setCondData(conditions, good, satisfactory, critical){
    setCond([
      {
        condition: "Good",
        percent: good.length/conditions.length*100,
        number: good.length,
      },
      {
        condition: "Critical",
        percent: critical.length/conditions.length*100,
        number: critical.length,
      },
      {
        condition: "Satisfactory",
        percent: satisfactory.length/conditions.length*100,
        number: satisfactory.length,
      },
    ])
  }

  async function getData() {
    let active = await fetchData('status/Active')
    let inactive = await fetchData('status/Inactive')
    let inShop = await fetchData('status/InShop')
    setStatData(active, inactive, inShop)
  }
  
  async function getCond(){
    let conditions = await fetchData('conditions/')
    let good = await fetchData('conditions/Good/')
    let satisfactory = await fetchData('conditions/Satisfactory')
    let critical = await fetchData('conditions/Critical/')
    setCondData(conditions, good, satisfactory, critical)
  }

  useEffect(()=> getCond(), [])
  useEffect(() => getData(), [])


  return (
    <div className="App">
      <Header />
      <main>
        <div className="container1">
          <div className="head2">
            <h2>Vehicle Status</h2>
            <a href="." className="details">Details  &gt;</a>
          </div>
          {Object.keys(stats).map((s, i) => <Status key={i} stat={s} n={stats[s]} />)}
        </div>
        <div className="container2">
          <h2>Vehicles Conditions</h2>
          <div className="all_cond">
            {conditions.map((cond, i) => <Condition key={i} condition={cond.condition} percent={cond.percent} num={cond.number} />)}
          </div>
        </div>
        <div className="container3">
          <div className="fuel_cost">
          <h2>Fuel Cost</h2>
          <p>Average Fuel Consumption</p>
          <p className="v_nums">{avg_cons}<span>L/100km</span></p>
          <p>Fuel Cost</p>
          <p className="v_nums"><span>$</span>{fuel_cost}</p>
          </div>
          <LineChart consumption={consumption} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
