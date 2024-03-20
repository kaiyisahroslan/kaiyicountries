/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

export function Dropdown() {
  return (
    <div className="group relative cursor-pointer py-3">
      <details className="dropdown">
        <summary className="m-1 btn">Filter By Region</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Region 1</a>
          </li>
          <li>
            <a>Region 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
}
export default Dropdown;
