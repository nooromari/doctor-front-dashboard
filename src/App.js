import './App.css';
import Footer from './components/basic/Footer';
import Header from './components/basic/Header';
import Condition from './components/Condition';
import LineChart from './components/LineChart';
import Status from './components/Status';

function App() {
  const stats = [
    {
      stat: "Active",
      number: "10",
    },
    {
      stat: "Inactive",
      number: 4,
    },
    {
      stat: "InShop",
      number: 22,
    }
  ]

  const conditions = [
    {
      condition: "Good",
      percent: 58,
      number: 50,
    },
    {
      condition: "Satisfactory",
      percent: 27,
      number: 14,
    },
    {
      condition: "Critical",
      percent: 15,
      number: 7,
    }
  ]

  const avg_cons = 28.6;
  const fuel_cost = 70.000;

  const consumption =
  {
    per_month: {
      Jan: 130000,
      Feb: 60000,
      Mar: 120000,
      Apr: 80000,
      May: 99000,
      Jun: 60000,
    },
    per_week: {
      Week1: 25000,
      Week2: 20000,
      Week3: 10000,
      Week4: 16000,
    },
    per_day:
    {
      Sun: 1000,
      Mon: 500,
      Tus: 800,
      Wed: 900,
      Thu: 1500,
      Fri: 700,
      Sat: 1000
    }

  }


  return (
    <div className="App">
      <Header />
      <main>
        <div className="container1">
          <div className="head2">
            <h2>Vehicle Status</h2>
            <a href="#" className="details">Details  &gt;</a>
          </div>
          {stats.map((s, i) => <Status key={i} stat={s.stat} n={s.number} />)}
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
