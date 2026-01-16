import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { FormControl, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats,]);
            setInputValue('');
        }

    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <FormControl sx={{ width: '25ch' }}>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </FormControl>
        </Box>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
