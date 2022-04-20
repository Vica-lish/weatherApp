import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { MdSearch } from "react-icons/md";

import './form.css';
import { favoritesAction } from '../../store/favorites'

const Form = ({ submitSearch }) => {

    const [location, setLocation] = useState('Tel Aviv');
    const dispatch = useDispatch();

    const addOrRemoveBtn = (location) => {
        dispatch(favoritesAction.favBtn(location))
    }

    const onSubmit = e => {
        e.preventDefault();
        if (!location ||
            location === '') return;
        submitSearch(location);
        addOrRemoveBtn(location);
        // return location
    }



    return (
        <form onSubmit={onSubmit} className='search-container'>
            <MdSearch onClick={onSubmit} size={25} className='search-icon' />
            <input
                onChange={e => {
                    let value = e.target.value
                    value = value.replace(/[^A-Za-z\s]/ig, '')
                    setLocation(value)
                }}
                pattern='[A-Za-z]'
                value={location}
                type='text'
                className='search-bar'
                placeholder='Search for location'
                required
            />
        </form>
    )
}
Form.propTypes = {
    submitSearch: PropTypes.func.isRequired
}

export default Form;