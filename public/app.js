$( document ).ready(function() {
    console.log( "jQuery is linked" );

$('.expand_block').on('click', function() {
  console.log(this.value);

    $.ajax({
       method: 'GET',
       url: `https://api.blockcypher.com/v1/btc/main/blocks/${this.name}?txstart=1&limit=1`,
       success: handleSuccess,
       error: handleError
     });
   })

     function handleSuccess(json) {
       console.log(json.hash);
       console.log(json.height);
       var id = `${json.height}`;
       $(`#${id}`).addClass('focused_block');
       $(`#${id}`).removeClass('unfocused_block');
       $(`.${id}`).addClass('hide');
       $('.collapse_block').removeClass('hide');
       $(`#${id}`).append(`
           <h2>Block Head</h2>
           <p>Timestamp: <span class="data"> ${json.time}</span></p>
           <p>Height: <span class="data"> ${json.height}</span></p>
           <p>Nonce: <span class="data"> ${json.nonce}</span></p>
           <p>Merkle Root: <span class="data"> ${json.mrkl_root}</span></p>
           <p>Previous Block Hash: <span class="data"> ${json.prev_block}</span></p>
           <p>This Block Hash: <span class="data"> ${json.hash}</span></p>
           <hr>
           <p class="tx_ids_head">TX IDs:</p>
              <p>${json.txids[0]}</p>
              <p>${json.txids[1]}</p>
             <br>
             `)
           };

     function handleError(err) {
       alert('Hourly limit of 200 requests reached. Wait and try again later')
       console.log(err);
     }

     $('.collapse_block').on('click', function() {
       console.log(this.parent);
       $(this).parent().addClass('unfocused_block');
       $(this).parent().removeClass('focused_block');
       $(this).parent().html('');
       $(this).closest('input').removeClass('hide');
     })

})
