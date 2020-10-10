

import titles from "../content_data/titles"

// updates state for context switching and renders.  See useState in app.js

function updateState (title, artistsPage, appContext) {

    const [context, setContext] = appContext

    if (title === 'home') {
        title = titles[0].titleName
        artistsPage = false
    }
    setContext({title: title, artistsPage: artistsPage})
    return [context.title, context.artistsPage]
}

export default updateState