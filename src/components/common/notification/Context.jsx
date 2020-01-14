import React from 'react'

const NotificationContext = React.createContext( )

export const notify = Component => props => (
    <NotificationContext.Consumer>
        { context => <Component {...props} Notification = { context }/> }
    </NotificationContext.Consumer>
)

export default NotificationContext