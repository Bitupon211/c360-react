import logo from './logo.svg';
import './App.css';

import '@salesforce-ux/c360-styling-hooks/dist/hooks.custom-props.css';
import c360Button from '@salesforce-ux/c360-button/dist/button';
window.customElements.define('c360-button', c360Button);

function App() {
  
  return (
    <div className="app">
      <h1 className="title">Testing C360 Design System's Component</h1>
      
      <c360-button>
        Button
      </c360-button>
    </div>
  );
}

export default App;
