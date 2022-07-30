import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, CardHeader } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FilterList from '@material-ui/icons/FilterList';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../style.css'
export default function HeaderComponent(props) {

    const languages = [
        { title: "English" },
        { title: "Hindi" },
        { title: "Kannada" },
        { title: "Telugu" }
    ]
    const [nameValue, setNameValue] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [langValue, setLangValue] = React.useState('');
    const handleNameSearch = (e) => {
        setNameValue(e.target.value)
        props.onNameSearch(e.target.value)
    }
    const handleGenreSearch = (e) => {
        setGenre(e.target.value)
        props.onGenreSearch(e.target.value)
    }
    const handleFilter=(value)=>{
        setLangValue(value)
        props.onFilter(value)
    }
    return (
        <div>

            <Paper component="form" className='formDiv' >


                <div className='filter-icon'>
                    <FilterList />
                    <p><b>Filter</b></p>
                </div>

                <div className='fieldDiv'>
                    <Autocomplete
                        id="combo-box-demo"
                        options={languages}
                        className="inputField"
                        value={langValue}
                        onChange={(e,value)=>handleFilter(value)}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} label="Select Language" />}
                    />
                    
                </div>
                <div className='searchFiled float-right'>
                    <InputBase
                        // className={classes.input}
                        value={nameValue}
                        onChange={handleNameSearch}
                        placeholder="Search By Name"
                    />
                    <IconButton disabled aria-label="search">
                        <SearchIcon disabled />
                    </IconButton>
                    
                </div>
                <div className='searchFiled'>
                    <InputBase
                        // className={classes.input}
                        value={genre}
                        onChange={handleGenreSearch}
                        placeholder="Search By Genre"
                    />
                    <IconButton disabled aria-label="search">
                        <SearchIcon disabled />
                    </IconButton>
                    
                </div>

                <Button variant="contained" onClick={props.openModel} color="secondary">Add Movie</Button>

            </Paper>

        </div>
    )
}
