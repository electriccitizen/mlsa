import React from 'react';
import ResourceLibrary from "../ResourceLibrary/ResourceLibrary";
import HomeResources from "../Block/homeResources";

const searchIndices = [
  { name: `Resources`, title: `Resources`, hitComp: `ResourceHit` },
]

const ReactComponent = (props) => {
  return (
    <div>
      {String(props.content) === '284' ? <ResourceLibrary collapse indices={searchIndices} />
      : String(props.content) === '285' ? 'placeholder for help guide'
      : String(props.content) === '286' ? <HomeResources />
      : 'Sorry, there is no valid component matching your selection.'
    	}
    </div>
  )
};

export default ReactComponent;