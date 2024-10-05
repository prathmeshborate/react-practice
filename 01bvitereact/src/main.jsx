import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | Chai</h1>
        </div>
    )
}

/*
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}
*/

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click this secondary',
    anotherUser
)

const anotherElement = (
    <a href='https://google.com' target='_blank'>Click the custom react</a>
)

createRoot(document.getElementById('root')).render(
    reactElement
)
