import { EmployeeRow } from "../EmployeeRow/EmployeeRow";
import "./EmployeeList.module.css";

const TEAM_MEMBERS_NAMES = [
  {
    isActive: false,
    memberName: "Carolein Bloeme",
    isCheckedCircle: false,
  },
  {
    isActive: true,
    memberName: "Sun Jun",
    isCheckedCircle: true,
  },
  {
    isActive: false,
    memberName: "Song Bao",
    isCheckedCircle: false,
  },
  {
    isActive: true,
    memberName: "Olivia Arribas",
    isCheckedCircle: true,
  },
  {
    isActive: false,
    memberName: "Bonginkosi Mdladlana",
    isCheckedCircle: false,
  },
  {
    isActive: true,
    memberName: "Arina Belomestnykh",
    isCheckedCircle: true,
  },
  {
    isActive: true,
    memberName: "Jacqueline Likoki",
    isCheckedCircle: true,
  },
];
export const EmployeeList = () => {
  return (
    <div className="teams">
      <ul>
        {TEAM_MEMBERS_NAMES.map((employee, index) => (
          <EmployeeRow
            key={index}
            isActive={employee.isActive}
            memberName={employee.memberName}
            isCheckedCircle={employee.isCheckedCircle}
          />
        ))}
      </ul>
    </div>
  );
};
