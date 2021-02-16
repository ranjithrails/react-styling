import './App.css';
import Alert from '../Inline/Inline';
import Style from '../StyleSheets/Styles';
import CssModule from '../CssModule/CssModule';

function App() {
  return (
    <div className="wrapper">
      <Alert />
      <Style />
      <CssModule />
      <p className="HeaderParagraph">Weather Forecast</p>

    </div>
  );
}

export default App;
