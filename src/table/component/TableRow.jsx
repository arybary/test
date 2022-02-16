import React from "react";
import moment from "moment";

const TableRow = ({ time, title, domain, url }) => {
  const proverkaElem = (el) => (!el ? "empty" : el);

  return (
    <a href={url} className="news">
      <div className="news__time">{moment(new Date(time)).format('MMMM Do YYYY, h:mm:ss a')}</div>
      <div className="news__title">{proverkaElem(title)}</div>
      <div className="news__domain">{proverkaElem(domain)}</div>
    </a>
  );
};

export default TableRow;
