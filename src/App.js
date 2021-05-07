import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Users from './components/Users'
const options = [
    {
        label: 'The Colour Red',
        value: 'red',
    },
    {
        label: 'The Colour Green',
        value: 'green',
    },
    {
        label: 'The Colour Blue',
        value: 'blue',
    },
]

const items = [
    { title: 'What is react', content: 'A JS front end frame work' },
    { title: 'Should you use it?', content: 'Yes, it is good for quick interfaces' }
]

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />
    }
}
const showSearch = () => {
    if (window.Location.pathname === '/search') {
        return <Search />
    }
}
const showDropdown = () => {
    if (window.Location.pathname === '/dropdown') {
        return <Dropdown />
    }
}
const showTranslate = () => {
    if (window.Location.pathname === '/translate') {
        return <Translate />
    }
}

export default () => {
    return (
        <div>
            {showAccordion()}
        </div>
    )
}
