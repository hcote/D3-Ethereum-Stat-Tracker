$( document ).ready(function() {
    console.log( "jQuery is linked" );

$('input').on('click', function() {
  console.log(this.value);

    $.ajax({
       method: 'GET',
       url: `https://api.blockcypher.com/v1/btc/main/blocks/${this.value}?txstart=1&limit=1`,
       success: handleSuccess,
       error: handleError
     });
   })

     function handleSuccess(json) {
       console.log(json.hash);
       console.log(json.height);
       var id = `${json.height}`;
       $(`#${id}`).append(`<p>${json.hash}</p>`)
       // $('this').append(`
       //     <h2>Block Head</h2>
       //     <p>Timestamp: <span class="data"> ${json.time}</span></p>
       //     <p>Height: <span class="data"> ${json.height}</span></p>
       //     <p>Nonce: <span class="data"> ${json.nonce}</span></p>
       //     <p>Merkle Root: <span class="data"> ${json.mrkl_root}</span></p>
       //     <p>Previous Block Hash: <span class="data"> ${json.block}</span></p>
       //     <p>This Block Hash: <span class="data"> ${json.hash}</span></p>
       //     <hr>
       //     <p class="tx_ids_head">TX IDs:</p>
       //        <p>${json.txids[0]}</p>
       //        <p>${json.txids[1]}</p>
       //       <br>
       // `)
        };

    //
    //
    //   }
    //  //   json.articles.map(function(data, i) {
    //  //     console.log(json);
    //  //     $('.big_div').append(`
    //  //       <a href="${data.url}" target="_blank" class="news_anchor_tags">
    //  //       <img src="${data.urlToImage}" alt="Image for ${data.title}" class="news_image">
    //  //       <h1 class="newsHeadline">${data.title}</h1>
    //  //       <p>${data.description}</p>
    //  //       <p class="article_footer">${data.publishedAt}</p>
    //  //       </a>
    //  //       <hr />
    //  //       <br>
    //  //       `)
    //  // })
    // }
    //
    // function handleSuccessAgain(json) {
    //   console.log(json);
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
    // }
    //
     function handleError(err) {
       alert('Hourly limit of 200 requests reached. Wait and try again later')
       console.log(err);
     }
    //
    //

})
