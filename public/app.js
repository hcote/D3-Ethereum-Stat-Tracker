$( document ).ready(function() {
    console.log( "jQuery is linked" );

$('.expand_block').on('click', function() {
  console.log(this.value);

    $.ajax({
       method: 'GET',
       url: `https://api.blockcypher.com/v1/btc/main/blocks/${this.name}?txstart=1&limit=10`,
       success: handleSuccess,
       error: handleError
     });
   })

     function handleSuccess(json) {
       console.log(json);
       console.log(json.txids);
       var id = `${json.height}`;
       $(`#${id}`).addClass('focused_block');
       $(`#${id}`).removeClass('unfocused_block');
       $(`.${id}`).addClass('hide');
       $('.collapse_block').removeClass('hide');
       $(`#${id}`).append(`
         <section class="tx_data">
           <h2>Block Head</h2>
           <p>Timestamp: <span class="data"> ${json.time}</span></p>
           <p>Height: <span class="data"> ${json.height}</span></p>
           <p>Nonce: <span class="data"> ${json.nonce}</span></p>
           <p>Merkle Root: <span class="data"> ${json.mrkl_root}</span></p>
           <p>Previous Block Hash: <span class="data"> ${json.prev_block}</span></p>
           <p>This Block Hash: <span class="data"> ${json.hash}</span></p>
           <hr>
           <p class="tx_ids_head">TX IDs:</p>
              <p><span class="data">${json.txids[0]}</span></p>
              <p><span class="data">${json.txids[1]}</span></p>
              <p><span class="data">${json.txids[2]}</span></p>
              <p><span class="data">${json.txids[3]}</span></p>
              <p><span class="data">${json.txids[4]}</span></p>
             <br>
            </section>
             `)
           };

     function handleError(err) {
       alert('Hourly limit of 200 requests reached. Try again at the top of the hour')
       console.log(err);
     }

     $('.collapse_block').on('click', function() {
       console.log(this);
       $(this).parent().addClass('unfocused_block');
       $(this).parent().removeClass('focused_block');
       $(this).siblings().removeClass('hide');
       $(this).addClass('hide');
       $(this).siblings().html('');
     })

})
