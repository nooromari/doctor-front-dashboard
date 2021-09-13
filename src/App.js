import './App.css';
import Footer from './components/basic/Footer';
import Header from './components/basic/Header';
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
