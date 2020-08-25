import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'
import {IconContext} from "react-icons"
export default class SearchInput extends Component {
    render() {
        return (
            <IconContext.Provider value={{ style: {fontSize: '1.5em', color: '#ccc'} }}>
                <div>
                    <div className="flex-field">
                        <FaSearch></FaSearch>
                        <input type="text" placeholder="Type to search... "></input>
                    </div>
                </div>
            </IconContext.Provider>
        )
    }
}
