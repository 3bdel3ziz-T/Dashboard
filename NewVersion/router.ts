const Router = {
  init: () => {
    Array.from(document.querySelectorAll('a'))
      .forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault()
          const url = window.location.hostname;
          console.log(url,link.getAttribute('href'),link)
          history.pushState(null, '', `${link.getAttribute('href')}`)
          Router.handleLocation()
        })
    })
    window.addEventListener('hashchange', Router.handleLocation)
    Router.handleLocation()
  },
  handleLocation: () => {
    const path = window.location.hash.slice(1) || '/'
  }
}
Router.init()