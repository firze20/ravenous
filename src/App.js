import "./components/styles";
// Sub Components

import { BusinessList, SearchBarComponent } from "./components";

function App() {
  return (
    <div>
      <SearchBarComponent />
      <BusinessList />
    </div>
  );
}

export default App;
