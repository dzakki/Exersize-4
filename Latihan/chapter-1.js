//$('body').text('hello?'); // sama dengan document.querySelector('h1')
$('img').attr('src','jquery.jpg') // berkomunikasi dengan atribut html
$('#notification').html('<div class="alert">Hold on! <b>an error</b> has occured!</p>') // sama dengan fungis innerHTML
$('.container').append("<p>What's the difference between <i>.append()</i> and .html()?</p>")//membuat anak pada class container.// membuat dari urutan terakhir
$('.container').prepend("<p>What's the difference between <i>.prepend()</i> and .html()?</p>")// membuat pada urutan pertama
$('.boxes:first').css({
    backgroundColor: 'blue',
    color: 'white',
    width: '200px',
    height: '200px'
}); //multiple css
$('.boxes:eq(1)').css('color','green') 
$('.boxes:eq(2)').css('color','blue')
$('.boxes:last').css('color','red')
