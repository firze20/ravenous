import "./components/styles";
import "./App.css";
// Sub Components

import { BusinessList, SearchBarComponent, Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <SearchBarComponent />
      <BusinessList />
    </div>
  );
}

export default App;
