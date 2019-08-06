import React from "react"
import { connectSearchBox } from "react-instantsearch-dom";
import SearchIcon from '../../images/search-toggle.svg';

export default connectSearchBox(({ refine, ...rest }) => (
  <form className="relative m-auto max-w-xs mb-4 lg:mb-12">
    <label className="visually-hidden" htmlFor="searchbox">Search</label>
    <input
      type="text"
      id="searchbox"
      placeholder="Search"
      aria-label="Searchbox"
      onChange={e => refine(e.target.value)}
      {...rest}
      className="border border-grey-dark w-full font-header pl-2 pr-8 py-3half leading-none mb-2"
    />
    <SearchIcon className="resource-search-icon" />
  </form>
))