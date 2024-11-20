import {HeaderSection} from "./components/HeaderSection/HeaderSection";
import {FormActionsControl} from "./components/FormActionsControl/FormActionsControl";
import {SearchAndEmployeeContainer} from "./components/SearchAndEmployeeContainer/SearchAndEmployeeContainer";
import classes from"./components/MainContainer/MainContainer.module.css";

export const App= ()=> {
  return (
    <div className={classes.mainContainer}>
        <HeaderSection/>
        <SearchAndEmployeeContainer />
        <FormActionsControl />
    </div>
  );
};

