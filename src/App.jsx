import {HeaderSection} from "./components/HeaderSection/HeaderSection";
import {FormActionsControl} from "./components/FormActionsControl/FormActionsControl";
import {SearchAndEmployeeContainer} from "./components/SearchAndEmployeeContainer/SearchAndEmployeeContainer";

export const App= ()=> {
  return (
    <div className="main-container">
        <HeaderSection/>
        <SearchAndEmployeeContainer />
        <FormActionsControl />
    </div>
  );
};

