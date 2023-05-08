
import './App.css'
import Card from './components/Card'
import ShowHide from './components/ShowHide';
import vehicles from './data/vehicles'

function App() {

  const vehicleList=vehicles.map(function(vehicle){

    return <Card title={vehicle.name} description={vehicle.description}/>
  });
 

  return (
    <div className='App'>
      <h1>Hola react</h1>
      <div className='container'>



        {vehicleList}
        
       
       
        <ShowHide/>
      </div>
    
     
    </div>
    
  
  )
}

export default App
