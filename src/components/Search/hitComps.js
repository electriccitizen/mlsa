import React, { Fragment } from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"


export const ResourceHit = clickHandler => ({ hit }) => (
  <div>
    <a href="/" onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </a>
    <Snippet attribute="description.value" hit={hit} tagName="mark" />
    <div>{hit.uri}</div>
  </div>
)

// export const PostHit = clickHandler => ({ hit }) => (
//   <div>
//     <Link to={`/blog` + hit.slug} onClick={clickHandler}>
//       <h4>
//         <Highlight attribute="title" hit={hit} tagName="mark" />
//       </h4>
//     </Link>
//     <div>
//       <Calendar size="1em" />
//       &nbsp;
//       <Highlight attribute="date" hit={hit} tagName="mark" />
//       &emsp;
//       <Tags size="1em" />
//       &nbsp;
//       {hit.tags.map((tag, index) => (
//         <Fragment key={tag}>
//           {index > 0 && `, `}
//           {tag}
//         </Fragment>
//       ))}
//     </div>
//     <Snippet attribute="excerpt" hit={hit} tagName="mark" />
//   </div>
// )