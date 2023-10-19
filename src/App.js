import logo from './logo.svg';
import './App.css';
import {markerAlgorithm, exportMarkerData, presentationScheduler}  from"./utils/algorithms";
var presSched = [];
var allocatedProjects;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={markerAlgorithm}>
        Allocate Markers
        </button>
        <button type="button" onClick={exportMarkerData}>
        Export Markers
        </button>
        <button type="button" onClick={presentationScheduler}>
        Allocate Presentation
        </button>
        <button type="button" onClick={exportPresentationData}>
        Export Presentation Data
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </header>
      
    </div>
  );
}

/*const exportMarkerData = (async () => {
  const rawResponse = await fetch('http://localhost:8080/api/academic', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Academics)
  });
  const content = await rawResponse.json();

  console.log(content);
})();
*/

const button = document.getElementById('post-btn');

export default App;

if (button){
button.addEventListener('click', async _ => {/*
  try {     
    const response = await fetch('http://localhost:8080/api/academic', {
      method: 'post',
      body: JSON.stringify(Supervisors)     
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});*/
})}

const exportPresentationData = () => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(presSched)
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "data.json";
  link.click();
  console.log(presSched);
  console.log(allocatedProjects);
};
