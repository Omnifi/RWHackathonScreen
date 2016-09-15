$(function() {

    var api = 'https://rwhackathonbasketcase.herokuapp.com/api/notifications/',
        player_id = '1234'

    function pollApi() {
        $.ajax({
            method: "GET",
            url: api + player_id
        }).done(function(result) {
            console.log(result);
            $('#log').text(result);
        });
    }

    //nick made me do it
    setTimeout(pollApi, 5000)

    pollApi();
})
