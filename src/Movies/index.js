import React, { Component } from 'react'
import HeaderComponent from './components/HeaderComponent'
import TableComponent from './components/TableComponent'
import AddModel from './components/AddModel'
import './style.css'
export default class index extends Component {
    state = {
        //default Records
        rows: [
            { favt: 'off', name: "The Loin", des: "Its an English Movie", cast: "Loin", simMovies: "King Kong", genre: "Drama", language: "English" },
            { favt: 'off', name: "PK", des: "Its an Hindi Movie", cast: "Amir Khan", simMovies: "ABC", genre: "Drama", language: "Hindi" },
            { favt: 'off', name: "KGF", des: "Its an Kannada Movie", cast: "Yash", simMovies: "Ugram", genre: "Action", language: "Kannada" },
            { favt: 'off', name: "RRR", des: "Its an Telugu Movie", cast: "NTR,Ram Charan", simMovies: "Bhahubali", genre: "Action", language: "Telugu" }
        ],

        //used to handle updating data on search and filter
        tableData: [
            { favt: 'off', name: "The Loin", des: "Its an English Movie", cast: "Loin", simMovies: "King Kong", genre: "Drama", language: "English" },
            { favt: 'off', name: "PK", des: "Its an Hindi Movie", cast: "Amir Khan", simMovies: "ABC", genre: "Drama", language: "Hindi" },
            { favt: 'off', name: "KGF", des: "Its an Kannada Movie", cast: "Yash", simMovies: "Ugram", genre: "Action", language: "Kannada" },
            { favt: 'off', name: "RRR", des: "Its an Telugu Movie", cast: "NTR,Ram Charan", simMovies: "Bhahubali", genre: "Action", language: "Telugu" }
        ],
        isOpen: false
    }

    //This function for Star icon toggle i.e Add to Favourite
    handleInputChange = (e, index) => {
        const { rows } = this.state
        const { name, value } = e.target;
        var list = [...rows];
        list[index][name] = value;
        this.setState({ rows: list });
    };

    //This function to handle Search by Name 
    onNameSearch = (name) => {
        const { rows } = this.state
        var list = []
        list = rows.filter((item) => item.name.toLowerCase() === name.toLowerCase())
        if (list.length)
            this.setState({ tableData: list })
        else
            this.setState({ tableData: rows })
    }

    //This function to handle Search by Genre
    onGenreSearch = (genre) => {
        const { rows } = this.state
        var list = []
        list = rows.filter((item) => item.genre.toLowerCase() === genre.toLowerCase())
        if (list.length)
            this.setState({ tableData: list })
        else
            this.setState({ tableData: rows })
    }

    //This function to handle Filter by Language
    onFilter = (lang) => {
        const { rows } = this.state
        if (lang) {
            var list = []
            list = rows.filter((item) => item.language.includes(lang.title))
            if (list.length)
                this.setState({ tableData: list })
            else
                this.setState({ tableData: rows })
        }
        else {
            this.setState({ tableData: rows })
        }

    }

    //Function to get updated data
    getData = () => {
        const { rows, tableData } = this.state
        var list = [...tableData]
        return list
    }

    //To open Add model
    openModel = () => {
        this.setState({ isOpen: true })
    }

    //To close Add model
    closeModel = () => {
        this.setState({ isOpen: false })
    }

    //To Add new movie record
    onSubmit = (data) => {
        this.setState({ rows: [...this.state.rows, data] })
        this.setState({ tableData: [...this.state.tableData, data] })
        this.closeModel()
    }
    render() {
        const { rows, tableData, isOpen } = this.state
        return (
            <div className='container'>
                <h2><b>Movies</b></h2>

                {/* Header component with search fields and filter */}
                <HeaderComponent rows={rows} onNameSearch={this.onNameSearch} onGenreSearch={this.onGenreSearch} openModel={this.openModel} onFilter={this.onFilter} />
                
                {/* Table Component */}
                <TableComponent rows={this.getData()} handleInputChange={this.handleInputChange} />

                {/* Model Component */}
                {
                    isOpen &&
                    <AddModel open={isOpen} handleClose={this.closeModel} onSubmit={this.onSubmit} />
                }

            </div>
        )
    }
}
