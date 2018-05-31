
import React, { Component } from 'react';
import axios from 'axios';
class TabelBTC extends Component {

    constructor() {
        super();
        this.state = {
            // dataApi:[]
            // datajson:[]
        }
    }

    componentDidMount() {
        var url = 'https://blockchain.info/ticker'
        axios.get(url)
            .then((coba) => {
                console.log(coba.data.USD);
                this.setState({
                    jualUSD: coba.data.USD.sell,
                    beliUSD: coba.data.USD.buy,
                    jualAUD: coba.data.AUD.sell,
                    beliAUD: coba.data.AUD.buy,
                    jualEUR: coba.data.EUR.sell,
                    beliEUR: coba.data.EUR.buy,
                    jualGBP: coba.data.GBP.sell,
                    beliGBP: coba.data.GBP.buy,
                    jualJPY: coba.data.GBP.sell,
                    beliJPY: coba.data.GBP.buy,
                })

            })

    }

    render() {
        var gaya = {
            border: '1px solid black', borderCollapse: 'collapse', padding: '12px'
        }

        return (

            <div>
                <center>
                    <h1>Harga Bitcoin Hari Ini</h1>
                    <br/>
                    <table style={gaya}>
                        <tr>
                            <th style={gaya}>Mata Uang</th>
                            <th style={gaya}>Harga Beli Bitcoin</th>
                            <th style={gaya}>Harga Jual Bitcoin</th>
                        </tr>
                        <tr>
                            <td style={gaya}><b>Dollar Australia</b></td>
                            <td style={gaya}>{this.state.beliAUD}</td>
                            <td style={gaya}>{this.state.jualAUD}</td>
                        </tr>
                        <tr>
                            <td style={gaya}><b>Euro Eropa</b></td>
                            <td style={gaya}>{this.state.beliEUR}</td>
                            <td style={gaya}>{this.state.jualEUR}</td>
                        </tr>
                        <tr>
                            <td style={gaya}><b>Pondsterling Inggris</b></td>
                            <td style={gaya}>{this.state.beliGBP}</td>
                            <td style={gaya}>{this.state.jualGBP}</td>
                        </tr>
                        <tr>
                            <td style={gaya}><b>Yen Jepang</b></td>
                            <td style={gaya}>{this.state.beliJPY}</td>
                            <td style={gaya}>{this.state.jualJPY}</td>
                        </tr>
                        <tr>
                            <td style={gaya}><b>Dollar America</b></td>
                            <td style={gaya}>{this.state.beliUSD}</td>
                            <td style={gaya}>{this.state.jualUSD}</td>
                        </tr>
                    </table>
                </center>
            </div>
        )
    }
}
export default TabelBTC;