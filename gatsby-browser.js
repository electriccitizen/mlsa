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

    if (location.pathname === '/resource-library'
        && location.search
        && (location.search.indexOf('refinementList') !== -1
        || location.search.indexOf('page') !== -1)
    )
    {
      const id = 'searchbox';
      const yOffset = -40;
      const element = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      return false
    }

    if (location.pathname === '/find-help' && (location.hash !== '#step-1' && location.hash !== '#results')) {
      let element = document.querySelector("#stepper");
      element.scrollIntoView({behavior: "smooth"})
      return false
    }
}