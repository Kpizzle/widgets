import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Users from './components/Users'
import Route from './components/Route'
import Header from './components/Header'
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
    {
        title: 'Should you use it?',
        content: 'Yes, it is good for quick interfaces',
    },
]

export default () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a colour"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}
