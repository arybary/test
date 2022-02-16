import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { connect } from "react-redux";
import { getNewsData, sortNewsData } from "../table.actions";
import { newsSelector, newsSelectorSortName } from "../table.selectors";
import InfiniteScroll from "react-infinite-scroll-component";

const TableNews = ({ getNewsData, sortNewsData, news, sortOn }) => {
  const [list, setList] = useState({ nameList: "news", numPage: 1 });
  const { nameList, numPage } = list;
  useEffect(() => {
    setTimeout(() => {
      getNewsData(nameList, numPage);
    }, 2000);
  }, [list]);

  console.log(nameList);
  let sortText = "⇓ ⇑ - ";
  const toggleSort = (e) => {
    sortNewsData(e.target.textContent);
  };
  const updateList = (e) => {
    return setList({ nameList: e.target.textContent, numPage: 1 });
  };

  return (
    <div>
      <div className="header">
        <span>HAKER NEWS</span>
        <div className="newList" onClick={updateList}>
          <span>news</span>
          <span>ask</span>
          <span>jobs</span>
          <span>show</span>
          <span>newest</span>
        </div>
        <div className="title" onClick={toggleSort}>
          <div className="title__time">time</div>
          <div className="title__title">title</div>
          <div className="title__domain">domain</div>
        </div>
        <span>{sortText + sortOn}</span>
      </div>
      <InfiniteScroll
        dataLength={news.length}
        next={() => setList({ ...list, numPage: numPage + 1 })}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {news.map((el) => {
          return <TableRow key={el.id * Math.random()} {...el} />;
        })}
      </InfiniteScroll>
    </div>
  );
};
const mapDispatch = {
  getNewsData: getNewsData,
  sortNewsData: sortNewsData,
};
const mapState = (state) => {
  return {
    news: newsSelector(state),
    sortOn: newsSelectorSortName(state),
  };
};
const connector = connect(mapState, mapDispatch);
export default connector(TableNews);
