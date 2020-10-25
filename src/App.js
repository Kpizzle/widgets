import React from 'react'
import Accordion from './components/Accordion'      


const items = [
    {
        title: 'What is React',
        content: 'JS Framework'
    },
    {
        title: 'Why use React',
        content: 'Quick to learn and reap the benefits'
    },
    {
        title: 'How do use react',
        content: 'You build components'
    }
]

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}
