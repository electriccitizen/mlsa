exports.onClientEntry = () => {
  require('./src/css/style.css')
};

exports.onRouteUpdate = ({ location }) => {
  // hack to handle back button page refresuh
  if (location.pathname === '/resource-library') {
    window.addEventListener('popstate', () => {
      window.location.reload(true);
      }
    )
  }
}

exports.shouldUpdateScroll = ({
                                routerProps: { location },
                              }) => {
    console.log(location)
  console.log(location.search.indexOf('refinementList'))

    if (location.pathname === '/resource-library' && location.search && (location.search.indexOf('refinementList') !== -1)) {
      let element = document.querySelector("#searchbox");
      element.scrollIntoView()
      return false
    }
    if (location.pathname === '/find-help' && location.hash !== '#step-1') {
      let element = document.querySelector("#stepper");
      element.scrollIntoView()
      return false
    }
}