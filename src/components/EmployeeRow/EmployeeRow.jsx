import "./EmployeeRow.module.css";

export const EmployeeRow = ({ isActive, memberName, isCheckedCircle }) => {
    return (
      <li className={`team-member ${isActive ? "active" : ""}`}>
        <p>
          <span className="member-icon">
            <i className="fa fa-user" />
          </span>
          <span>{memberName}</span>
        </p>
        <p className="circle-container">
          <i
            className={`${
              isCheckedCircle ? "far fa-check-circle" : "far fa-circle"
            }`}
          />
        </p>
      </li>
    );
};
