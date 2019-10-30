exports.onClientEntry = () => {
  require('./src/css/style.css')
};

exports.onInitialClientRender = () => {
  window.addEventListener('popstate', () => {
      let href = window.location.href
      window.location.href = href
    }
  )
}

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
  }) => {
    //const currentPosition = getSavedScrollPosition({ pathname: `/resource-library` })
    //window.scrollTo('searchbox')
    // element which needs to be scrolled to
    var element = document.querySelector("#searchbox");

    // scroll to element
    element.scrollIntoView();
    return false
}