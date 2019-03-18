$('#btn').on('click', function(e){
    $('#input').attr('value','ini adalah fungsi click');
    $('div:first').append('<button id="test">btn test</button>');
    $('#test').css('display','blok')
});

$('body').on('click', '#test', function () {
    alert('klick bro')
})
$('#boxes-btn').css({
    marginTop: '10px',
    padding: '20px',
    height: '200px',
    width: '250px'
})
$('.show').on('click', function() {
    $('p').show("slow");
})
$('.hide').on('click', function() {
    $('p').hide("slow");
})
$('.toggle').on('click', function() {
    $('p').toggle("slow");
})