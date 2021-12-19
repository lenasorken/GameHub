console.log('it works!')

$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var validation = $('.status')
        validation.empty()
    

        if(email.length >= 5 && email.includes('@') && email.includes('.')) {
            validation.append('<div>Your e-mail is valid!</div>')
        } else {
         event.preventDefault()
        validation.append('<div>Your e-mail is not valid!</div>')
        }

        if(subject.length >= 2) {
        validation.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
        validation.append('<div>Subject is not valid</div>')
        }

        if (message.length >= 10) {
        validation.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
        validation.append('<div>Message is not valid</div>')
        }




    })
 })

