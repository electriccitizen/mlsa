require('./src/css/style.css')
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
  const currentPosition = getSavedScrollPosition({ pathname: `/resource-library` })
  //const queriedPosition = getSavedScrollPosition({ pathname: `/resource-library` })
  window.scrollTo(...(currentPosition || currentPosition))
  return false
}