import classes from "./FormActionsControl.module.css";

export const FormActionsControl = () =>{
    return (
      <footer className={classes.footer}>
        <button className={classes.btn}>Cancel</button>
        <button className={`${classes.btn} ${classes.active}`}>SAVE</button>
      </footer>
    );
};
