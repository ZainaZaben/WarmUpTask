import classes from "./SearchField.module.css";

export const SearchField = () =>{
    return (
      <div className={classes.search}>
        <p>
          <i className="fa fa-search" />
        </p>
        <p>Find members</p>
      </div>
    );
};
