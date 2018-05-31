
import React, { Component } from 'react';
import axios from 'axios';

class TabelBTC extends Component {
    constructor() {
        super();
        this.state = {
            userinput: '',
            konversiBitcoin: 'Silahkan Input Nominal Bitcoin',
            konversiRupiah: 'Silahkan Input Nominal Rupiah',
        }
    }

    konversiBitcoin(bitC) {

        var url = 'https://blockchain.info/tobtc?currency=USD&value=' + (105564771*(bitC*7540))
        // MENCARI NILAI TUKAR KE RUPIAH DENGAN CARA 
        // 14.000 / USERINPUT (CONTOH: 0.00013266) = 105.564.771
        // HASIL DIRUPIAHKAN : 105.564.771 / 14.000 (DOLAR) = 7.540
        // MAKA VALUE UNTUK BITCOIN KE RUPIAH ADALAH (105564771*(NILAI USER INPUT *7540))
        axios.get(url)
            .then((cobaBtc) => {
                console.log(cobaBtc.data);
                this.setState({

                    konversiBitcoin: bitC + ' BTC = Rp. ' + cobaBtc.data

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
                    <h2>Konversi Bitcoin ke Rupiah </h2>
                    <h4>Kurs 1 USD = 14.000 IDR</h4>
                    <input type="number" placeholder="Input nilai BTC" onChange={(nilai) => this.setState({ userinput: nilai.target.value }, this.konversiBitcoin(nilai.target.value))} />
                    <h4>{this.state.konversiBitcoin}</h4>
                </center>
            </div>
        )
    }
}
export default TabelBTC;