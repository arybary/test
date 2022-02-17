import React from "react";
import moment from "moment";

const TableRow = ({ time_ago, title, domain, url }) => {
  const proverkaElem = (el) => (!el ? "empty" : el);

  return (
    <a href={url} className="news">
      <div className="news__time">{proverkaElem(time_ago)}</div>
      <div className="news__title">{proverkaElem(title)}</div>
      <div className="news__domain">{proverkaElem(domain)}</div>
    </a>
  );
};

export default TableRow;
