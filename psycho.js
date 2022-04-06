
// checks URL to load right info on card
$(document).ready(function() {
    if(window.location.href.indexOf("/about")>-1) {
        $("#business-card").removeClass();
        $('#first-name').text('Patrick');
        $('#last-name').text('Bateman');
        $('#phone-number').text('212 555 6342');
        $('#bottom-info').html('358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534');
        $('#murders-and-executions').text('Murders And Executions');
        $("#business-card").addClass("patrick-card");
    } else if(window.location.href.indexOf("/input")>-1) {
        $("#business-card").removeClass();
        $('#first-name').text('David');
        $('#last-name').text('Van Patten');
        $('#phone-number').text('212 555 6342');
        $('#bottom-info').html('358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534');
        $('#murders-and-executions').text('Mergers And Acquisitions');
        $("#business-card").addClass("van-patten-card");
    } else if(window.location.href.indexOf("/output")>-1) {
        $("#business-card").removeClass();
        $('#first-name').text('Timothy');
        $('#last-name').text('Bryce');
        $('#phone-number').text('212 555 6342');
        $('#bottom-info').html('358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534');
        $('#murders-and-executions').text('Mergers And Acquisitions');
        $("#business-card").addClass("bryce-card");
    } else if(window.location.href.indexOf("/contact")>-1) {
        $("#business-card").removeClass();
        $('#first-name').text('Paul');
        $('#last-name').text('Allen');
        $('#phone-number').text('212.555.6342');
        $('#bottom-info').html('358 Exchange Place New York, N.Y. 10099<br/>FAX 212 555 6390 TELEX 10 4534');
        $('#murders-and-executions').text('Mergers And Acquisitions');
        $("#business-card").addClass("allen-card");
    } else if(window.location.href.indexOf("/resume")>-1) {
        $("#business-card").removeClass();
        $('#first-name').text('Ingwon');
        $('#last-name').text('Chae');
        $('#phone-number').text('617 758 9124');
        $('#title').text('CEO');
        $('#bottom-info').html('224 Wythe Ave Brooklyn, N.Y. 11249 EMAIL ingwon@gmail.com');
        $('#company').text('Chae & Chae');
        $('#murders-and-executions').text('Mergers And Acquisitions');
        $("#business-card").addClass("patrick-card");
    }
});


// can rotate card with below function

function rotate(event) {
	var x = event.clientX;
	var w = window.innerWidth;
	var midpoint = w / 2;
	var pos = x - midpoint;
	var val = (pos / midpoint) * 20;
	var card = document.getElementById("business-card");
	card.style.transform = "perspective(550px) rotateY(" + val + "deg) rotateY(" + val + "deg)";
}

/*document.addEventListener("mousemove", function (event)
{
	rotate (event)
}, false);*/


