$( document ).ready(function() {
    console.log( "jQuery is linked" );


    var bcAPI = 'http://localhost:3000/lasthash'

    $.ajax({
       method: 'GET',
       url: bcAPI,
       success: handleSuccess,
       error: handleError
     });

     function handleSuccess(json) {
       console.log(json);
       $.ajax({
          method: 'GET',
          url: `https://blockchain.info/rawblock/${json}&cors=true`,
          success: handleSuccessAgain,
          error: handleError
        });
    }

    function handleSuccessAgain(data) {
      console.log(data);
    //   for (i=0; i < 7; i++) {
    //  $.ajax({
    //     method: 'GET',
    //     url: `https://api.blockcypher.com/v1/btc/main/blocks/${json.prev_block}`,
    //     success: function(i) {
    //       $('.big_div').append(`<p>${i.mrkl_root}`)
    //     },
    //     error: handleError
    //   });
    // }
    }

     function handleError(err) {
       console.log(err);
     }



})
