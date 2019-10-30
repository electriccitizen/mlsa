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
      var element = document.querySelector("#searchbox");
      element.scrollIntoView()
      return false
    }
}