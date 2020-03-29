import React, { Component } from 'react';
import '../App.css';

class ProductGrid extends Component {
    render() {
        var PastDate = new Date(this.props.PastDate);
        var getDate = PastDate.getDate()
        var getMonth = PastDate.getMonth() + 1
        var getYear = PastDate.getFullYear()
        var dateNow = new Date();
        var seconds = Math.floor((dateNow - (PastDate)) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        return <div className="Product_div_style">
            <div className="MainContent">
                <h3 style={{ fontSize: this.props.FaceSize }}>{this.props.face}</h3>
                <div style={{ height: 80, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
                    <h4>Size</h4>
                    <p>{this.props.size}</p>
                </div>
                <div style={{ height: 80, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
                    <h4>Price</h4>
                    <p>{"$" + this.props.price}</p>
                </div>
            </div>
            <div style={{ alignSelf: "flex-end", margin: 10, marginTop: 5 }}>
                {days !== 0 && days <= 6 && <p>{days + " " + "days ago"}</p>}
                {days === 0 && hours !== 0 && <p>{hours + " " + "hours ago"}</p>}
                {days >= 7 && <p>{getMonth + "/" + getDate + "/" + getYear}</p>}
                {days === 0 && hours === 0 && minutes !== 0 && <p>{minutes + " " + "min ago"}</p>}
                {days === 0 && hours === 0 && minutes === 0 && seconds !== 0 && <p>{seconds + " " + "sec ago"}</p>}
            </div>
        </div>
    }
}

class Header extends Component {
    render() {
        return <div className="header">
            <h1>Products Grid</h1>
            <select id="Filter" onChange={this.props.clicked}>
                <option value="select" >Select</option>
                <option value="Price" >Price</option>
                <option value="Size" >Size</option>
                <option value="id">id</option>
            </select>
        </div>
    }
}

class Ads extends Component{

    async componentDidMount(){
       var random = Math.floor(Math.random()*1000)
       
    }
    
    render(){
        return <p>Ads</p>
    }
}


export {
    ProductGrid,
    Header,
    Ads
}