import {SearchField} from "../SearchField/SearchField";
import {EmployeeList} from "../EmployeeList/EmployeeList";
import "./SearchAndEmployeeContainer";

export const SearchAndEmployeeContainer = () => {
    return (
      <section className="search-and-employee-container">
        <SearchField/>
        <EmployeeList/>
      </section>
    );
};
