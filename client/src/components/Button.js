import React, { Component } from "react";
import axios from 'axios'

const baseUrl = "http://127.0.0.1:5000"

class Button extends Component{
    state = {
        newGarbage: {
        selectedFile: null,
        getCurrentPosition : null
        }
    }

    filesSelectedHandler = event =>{
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        console.log(fd)
        this.getGeolocation()
        axios.post((`${baseUrl}/garbage`, {'image': fd, 'date': new Date().toISOString(), 'geolocation' : navigator.geolocation.getCurrentPosition}))
            .then(res => {
                console.log(res)
            })
            console.log(this.state.selectedFile)
    }

    // ConvertLatLongToAdress = () => {
    //     Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
    //         response => {
    //           const address = response.results[0].formatted_address;
    //           console.log(address);
    //         },
    //         error => {
    //           console.error(error);
    //         }
    //       );
    // }

    // fileUploadHandler = () => {
    //     const fd = new FormData();
    //     fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    //     console.log(fd)
    //     this.getGeolocation()
    //     axios.post((`${baseUrl}/garbage`, fd))
    //         .then(res => {
    //             console.log(res)
    //         })
    //         console.log(this.state.selectedFile)
        
    // }

    getGeolocation= () => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position);
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }

    render(){
        return (
            <div className = "App">
                <input type="file" onChange={this.filesSelectedHandler}></input>
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}

export default Button