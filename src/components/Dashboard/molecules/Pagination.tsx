import { ReactComponent as ArrowLeft } from "../../../assets/VectorArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/VectorArrowRight.svg";
import { useState } from "react";

type PaginationProps = {
  dataPerPage: number;
  totalData: number;
  paginate: (num: number) => number;
};
const Pagination = ({ dataPerPage, totalData, paginate }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination_panel">
      <div>
        <p>Showing</p>{" "}
        <select>
          {pageNumbers.map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>{" "}
        out of {pageNumbers.length}
      </div>
      <span>
        <ArrowLeft />

        <ul>
          {pageNumbers.map((number) => (
            <li
              onClick={() => {
                paginate(number);
              }}
              key={number}
            >
              {number}
            </li>
          ))}
        </ul>

        <ArrowRight />
      </span>
    </div>
  );
};

export default Pagination;
