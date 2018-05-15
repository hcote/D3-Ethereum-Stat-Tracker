$( document ).ready(function() {
    console.log( "jQuery is linked" );

// start


$('.expand_block').on('click', function() {
  console.log(this.value);

    $.ajax({
       method: 'GET',
       url: `https://api.blockcypher.com/v1/btc/main/blocks/${this.name}?txstart=1&limit=5`,
       success: blockData,
       error: handleError
     });
   })

// end
// start

     function blockData(json) {
       console.log(json);
       console.log(json.txids);
       var id = `${json.height}`;
       $(`#${id}`).addClass('focused_block');
       $(`#${id}`).removeClass('unfocused_block');
       $(`.${id}`).addClass('hide');
       $(`.collapse_block${id}`).removeClass('hide');
       $(`#${id}`).append(`
         <section class="tx_data">
           <h3>Block Head</h3>
           <p class="inline">Timestamp: <span class="data"> ${json.time}</span></p>
           <p class="inline">Height: <span class="data"> ${json.height}</span></p>
           <p class="inline">Nonce: <span class="data"> ${json.nonce}</span></p>
           <p class="inline_block">Version: <span class="data"> ${json.ver}</span></p>
           <p class="inline">Bits: <span class="data"> ${json.bits}</span></p>
           <p>Merkle Root: <span class="data"> ${json.mrkl_root}</span></p>
           <p>This Block Hash: <span class="data"> ${json.hash}</span></p>
           <p>Previous Block Hash: <span class="data"> ${json.prev_block}</span></p>
           <hr>
           <h3>Block Body</h3>
           <h4 class="tx_ids_head">Transaction Hashes (Tx IDs):</h4>
            <input class="tx_input one" type="text" value="${json.txids[0]}"></input>
            <input class="tx_input two" type="text" value="${json.txids[1]}"></input>
            <input class="tx_input three" type="text" value="${json.txids[2]}"></input>
            <input class="tx_input four" type="text" value="${json.txids[3]}"></input>
            <input class="tx_input five" type="text" value="${json.txids[4]}"></input>
             <br>
            </section>
             `);

           };

    // end
    // start

     function handleError(err) {
       alert('Hourly limit of 200 requests reached. Try again at the top of the hour')
       console.log(err);
     }

    // end
    // start

     $('.collapse_block').on('click', function() {
       console.log(this);
       $(this).parent().addClass('unfocused_block');
       $(this).parent().removeClass('focused_block');
       $(this).siblings().removeClass('hide');
       $(this).addClass('hide');
       $(this).siblings().html('');
     })

     // end
     // start

     $('.details').on('click', function() {
       console.log('hello');
       console.log(this.value);
       $.ajax({
          method: 'GET',
          url: `https://blockchain.info/rawtx/b6287895419021a1e4a1e067510971dae1563105075b4f13935b1c5c747eeca8${this.value}`,
          success: txData,
          error: handleError
        });
      })

      function txData(json) {
        console.log(this);
      }

      // end end
})

// <details><summary><span>${json.txids[0]}</span></summary>
// <p>Sending Address: </p>
// <p>Receiving Address: </p>
// <p>Amount BTC: </p>
// </details>
// <details><summary><span>${json.txids[1]}</span></summary>
// <p>Sending Address: </p>
// <p>Receiving Address: </p>
// <p>Amount BTC: </p>
// </details>
// <details><summary><span>${json.txids[2]}</span></summary>
// <p>Sending Address: </p>
// <p>Receiving Address: </p>
// <p>Amount BTC: </p>
// </details>
// <details><summary><span>${json.txids[3]}</span></summary>
// <p>Sending Address: </p>
// <p>Receiving Address: </p>
// <p>Amount BTC: </p>
// </details>
// <details><summary><span>${json.txids[4]}</span></summary>
// <p>Sending Address: </p>
// <p>Receiving Address: </p>
// <p>Amount BTC: </p>
// </details>
