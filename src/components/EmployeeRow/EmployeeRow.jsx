import classes from "./EmployeeRow.module.css"; // Import the CSS module

export const EmployeeRow = ({ isActive, memberName, isCheckedCircle }) => {
  return (
    <li className={`${classes.teamMember} ${isActive ? classes.active : ""}`}>
      <p>
        <span className={classes.memberIcon}>
          <i className="fa fa-user" />
        </span>
        <span>{memberName}</span>
      </p>
      <p className={classes.circleContainer}>
        <i
          className={`${isCheckedCircle ? "far fa-check-circle" : "far fa-circle"}`}
        />
      </p>
    </li>
  );
};
