import './App.css';
import Footer from './components/basic/Footer';
import Header from './components/basic/Header';
import Condition from './components/Condition';
import Status from './components/Status';

function App() {
  const stats =[
    {
      stat : "Active",
      number : "10",
    }, 
    {
      stat : "Inactive",
      number :4,
    },
    {
      stat : "InShop",
      number : 22,
    }
  ]

  const conditions =[
    {
      condition : "Good",
      percent : 58 ,
      number : 50,
    }, 
    {
      condition : "Satisfactory",
      percent : 27 ,
      number :14,
    },
    {
      condition : "Critical",
      percent : 15,
      number : 7,
    }
  ]
  
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container1">
          <div className="head2">
            <h2>Vehicle Status</h2>
            <a href="#" className="details">Details  &gt;</a>
        </div>
        {stats.map((s,i) => <Status key={i} stat={s.stat} n={s.number} />)}
        </div>
        <div className="container2">
          <h2>Vehicles Conditions</h2>
          <div className="all_cond">
          {conditions.map((cond, i) => <Condition key={i} condition={cond.condition} percent={cond.percent} num={cond.number} />)}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
