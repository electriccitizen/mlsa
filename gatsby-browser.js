const foo = require('./src/css/style.css')
exports.onInitialClientRender = () => {
  window.addEventListener('popstate', () =>
    window.location.href = window.location.href
  )
}

exports.shouldUpdateScroll = ({
                                routerProps: { location },
                                getSavedScrollPosition,
                              }) => {
  const currentPosition = getSavedScrollPosition({ pathname: `/resource-library` })
  console.log('position')
  console.log(currentPosition)
  const queriedPosition = getSavedScrollPosition({ pathname: `/resource-library` })
  window.scrollTo(...(currentPosition || currentPosition))
  return false
}