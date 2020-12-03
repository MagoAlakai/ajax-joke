$(function(){

    $('#ajax').on('click', function(e){
        e.preventDefault();

        $.ajax({
            url:'http://api.icndb.com/jokes/random',
            type:'get',
            dataType:'json',
            success: function(data){
                $('#titulo').removeClass('d-none');
                $('#showChiste').removeClass('d-none');
                let chiste = $('#chiste').html(data.value.joke);
                chiste.animate({
                            marginLeft:'70px',
                            fontSize: '50px',
                            height:'auto',
                            }, 'slow');
      
            },
            error: function(xhr, status, error){
                console.log(xhr);
                console.log(status);
                console.log(error);
            },
        });
    })

})