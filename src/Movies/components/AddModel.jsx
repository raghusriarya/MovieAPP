import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddModel(props) {
    const languages = [
        { title: "English" },
        { title: "Hindi" },
        { title: "Kannada" },
        { title: "Telugu" }
    ]
    const [name, setName] = React.useState('');
    const [des, setDes] = React.useState('');
    const [cast, setCast] = React.useState('');
    const [simMovies, setSimMovies] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [language, setLanguage] = React.useState('');
    const handleSubmit = () => {
        var data = { favt: 'off', name: name, des: des, cast: cast, simMovies: simMovies, genre: genre, language: language.title }
        props.onSubmit(data)
    }
    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth="xs"
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Add Movie Details"}</DialogTitle>
                <DialogContent>
                    <TextField value={name} onChange={(e) => setName(e.target.value)} style={{ margin: "10px" }} label="Enter Name" />
                    <TextField value={des} onChange={(e) => setDes(e.target.value)} style={{ margin: "10px" }} label="Enter Description" />
                    <TextField value={cast} onChange={(e) => setCast(e.target.value)} style={{ margin: "10px" }} label="Enter Cast" />
                    <TextField value={simMovies} onChange={(e) => setSimMovies(e.target.value)} style={{ margin: "10px" }} label="Enter Similer Movies" />
                    <TextField value={genre} onChange={(e) => setGenre(e.target.value)} style={{ margin: "10px" }} label="Enter Genre" />
                    <Autocomplete
                        options={languages}
                        style={{ width: "85%" }}
                        onChange={(e, value) => setLanguage(value)}
                        className="inputField"
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} label="Select Language" />}
                    />
                </DialogContent>
                <DialogActions >
                    <Button onClick={props.handleClose} variant="contained" color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
