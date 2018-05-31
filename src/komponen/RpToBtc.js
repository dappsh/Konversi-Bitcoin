
import React, { Component } from 'react';
import axios from 'axios';
class RpToBtc extends Component {
    constructor() {
      super();
      this.state = {
        userinput: '',
        konversiBitcoin: 'Silahkan Input Nominal Bitcoin',
        konversiRupiah: 'Silahkan Input Nominal Rupiah',
  
  
  
      }
    }
    
    konversiRupiah(rupiah) {

        var url = 'https://blockchain.info/tobtc?currency=USD&value=' + (rupiah / 14000)
        axios.get(url)
          .then((coba) => {
            console.log(coba.data);
            this.setState({
    
              konversiRupiah: 'Rp. ' + rupiah + ' = BTC ' + coba.data
    
            })
          })
    
      }

    render() {
     
        return (
            <center>
            <h2>Konversi Rupiah ke Bitcoin </h2>
            <h4>Kurs 1 USD = 14.000 IDR</h4>
            <input type="number" placeholder="Input nilai Rupiah" onChange={(nilai) => this.setState({ userinput: nilai.target.value }, this.konversiRupiah(nilai.target.value))} />
            <h4>{this.state.konversiRupiah}</h4>
          </center>
        )
    }
}
export default RpToBtc;