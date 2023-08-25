import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';

import { createSvgIcon } from '@mui/material/utils';
export default function ToDoForm({ addToDo }) {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(text)
        setText('')
    }
    return (
        <ListItem>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Add Todo" variant="outlined"
                    onChange={handleChange} value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="create todo"
                                    edge="end"
                                    type='submit'
                                >
                                    <CreateIcon />
                                </IconButton>

                            </InputAdornment>),

                    }} />
            </form>
        </ListItem>
    )
}