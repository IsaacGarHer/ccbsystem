import React from 'react'
import './index.scss'

import NotificationContext from './Context'

import whiteCross from '../../../resources/icons/white-cross.svg'
import tick from '../../../resources/icons/tick.svg'

export default props => (
    <NotificationContext.Consumer>
        { context => (
            <div className = { `notification ${ context.type ? 'good' : 'bad' } ${ context.active ? 'see-ntf' : 'didnt-see-ntf'}` }>
                <div className = {`decoration ${ context.type ? 'goodD' : 'badD' }`} />
                <div className = "timer">
                    <div className = {`circle-bar-progress ${ context.activeProgress ? "active-progress" : "not-active" }`}/>
                    <img 
                        src = { context.type ? tick : whiteCross } 
                        alt = { context.type ? "correcto" : "error" }
                        className = "img-ntf" />
                </div>
                <span className = "text-advice">{ context.textAdvice ? context.textAdvice : 'Not Found' }</span>
            </div>
        ) }
    </NotificationContext.Consumer>
)