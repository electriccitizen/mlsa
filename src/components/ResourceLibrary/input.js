import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { SearchIcon, Form, Input } from "./styles"

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      type="text"
      placeholder="Enter keywords to find resources"
      aria-label="Enter keywords"
      onChange={e => refine(e.target.value)}
      {...rest}
      className="ais-SearchBox-input"
    />
  </Form>
))