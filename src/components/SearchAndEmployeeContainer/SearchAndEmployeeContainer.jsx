import {SearchField} from "../SearchField/SearchField";
import {EmployeeList} from "../EmployeeList/EmployeeList";
import classes from "./SearchAndEmployeeContainer.module.css";

export const SearchAndEmployeeContainer = () => {
    return (
      <section className={classes.searchAndEmployeeContainerClass}>
        <SearchField/>
        <EmployeeList/>
      </section>
    );
};
