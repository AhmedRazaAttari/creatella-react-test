import React, { Component } from 'react';
import { ProductGrid, Header } from '../component/ProductGrid';
import Loading from '../assets/images/loading.gif';

export default class Products extends Component {

    constructor() {
        super();

        this.state = {
            isloading: true
        }
    }

    async componentDidMount() {
        await fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then((response) => {
                this.setState({ Products: response, isloading: false })
                // console.log(response)
            })

        await fetch("https://picsum.photos/320/200?image="+Math.floor(Math.random()*1000))
            .then(res2 => res2.json())
            .then(response2 => console.log(response2))
    }

    filter(e) {
        var index = e.nativeEvent.target.selectedIndex;
        var tryed = e.nativeEvent.target[index].text
        console.log("hello", tryed)

        if (tryed === "Select") {

        }
        else if (tryed === "Price") {
            this.setState({ isloading: true, Products: null })
            fetch("http://localhost:3000/products?_sort=price")
                .then(res => res.json())
                .then((response) => {
                    console.log(response)
                    this.setState({
                        Products: response,
                        isloading: false
                    })
                })
        }
        else if (tryed === "Size") {
            this.setState({ isloading: true, Products: null })
            fetch("http://localhost:3000/products?_sort=size")
                .then(res => res.json())
                .then((response) => {
                    console.log(response)
                    this.setState({
                        Products: response,
                        isloading: false
                    })
                })
        }
        else if (tryed === "id") {
            this.setState({ isloading: true, Products: null })
            fetch("http://localhost:3000/products?_sort=id")
                .then(res => res.json())
                .then((response) => {
                    console.log(response)
                    this.setState({
                        Products: response,
                        isloading: false
                    })
                })
        }
    }

    render() {
        return <div>
            <Header clicked={(e) => this.filter(e)} />
            <div style={{ padding: 20, width: "90%" }}>
                <p style={{ fontSize: 26 }}>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>
                <p>But first, a word from our sponsors:</p>
                <img class="ad" src={"https://picsum.photos/320/200?image="+Math.floor(Math.random()*1000)} />
                <img class="ad" src={"https://picsum.photos/320/200?image="+Math.floor(Math.random()*1000)} />
            </div>
            <div style={{ padding: 20 }}>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    {!this.state.isloading && this.state.Products.map((items, index) => {
                        var num = items.price * 0.0060;
                        var price = num.toFixed(2);
                        return <ProductGrid face={items.face} size={items.size} price={price} FaceSize={items.size} PastDate={items.date} key={index} />
                    })}
                </div>
                {this.state.isloading && <img src={Loading} style={{ position: "absolute", left: "30%", top: "30%" }} />}
            </div>
        </div>
    }
}