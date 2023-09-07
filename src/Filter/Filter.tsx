import { ChangeEvent, useState } from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Menu,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography
} from '@mui/material';


interface FilterProps {
    filter: string,
    setFilter: any
}


const filters = [
    'All',
    'Completed',
    'Pending',
    'Before due',
    'After due'
];


const Filter = (props: FilterProps) => {
    return (
        <Box sx={{
            alignSelf: 'flex-end',
            marginRight: '1rem'
        }}>
            <Typography component='span' sx={{marginRight: '1rem'}}>
                Display
            </Typography>
            <Select
                sx={{
                    width: 150,
                    textAlign: 'center'
                }}
                labelId='filter-label'
                value={props.filter}
                onChange={(e: SelectChangeEvent) => props.setFilter(e.target.value)}
            >
                {filters.map((filterName: string) => (
                    <MenuItem value={filterName}>{filterName}</MenuItem>
                ))}
            </Select>
        </Box>
    );
}


export default Filter;