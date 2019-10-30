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
    if (location.pathname === '/resource-library' && location.search) {
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