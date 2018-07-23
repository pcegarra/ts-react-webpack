import './index.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import createHashHistory from 'history/createHashHistory'
import { syncHistoryWithStore } from 'mobx-react-router'
import { Router } from 'react-router-dom'

import AppRouter from './router'
import * as store from './store'

const hashHistory = createHashHistory()
const history = syncHistoryWithStore(hashHistory, store.routingStore)

configure({ enforceActions: true })

const render = Component => {
    ReactDOM.render(
        <Provider {...store}>
            <AppContainer>
                <Router history={history}>
                    <Component />
                </Router>
            </AppContainer>
        </Provider>,
        document.getElementById('app') as HTMLElement
    )
}

render(AppRouter)
