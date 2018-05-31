import React, { Component } from 'react';
import axios from 'axios';
import Header from './komponen/Header'
import TabelBTC from './komponen/TabelBTC'
import RpToBtc from './komponen/RpToBtc'
import BtcToRp from './komponen/BtcToRp'

class App extends Component {

  render() {
    return (


      <div>

        <Header />

        <div class="tab-content">
          <div id="btc" class="tab-pane fade in active">
            <TabelBTC />
          </div>

          <div id="konvBtc" class="tab-pane fade">
            <RpToBtc />
          </div>

          <div id="konvRp" class="tab-pane fade">
            <BtcToRp />
          </div>


        </div>
      </div>



    )
  }
}
export default App;