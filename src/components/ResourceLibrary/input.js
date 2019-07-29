import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

export default connectSearchBox(({ refine, ...rest }) => (
  <form>
    <input
      type="text"
      placeholder="Search"
      aria-label="Enter keywords"
      onChange={e => refine(e.target.value)}
      {...rest}
      className="ais-SearchBox-input"
    />
  </form>
))