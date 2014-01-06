$(function() {

var animatePath = function(canvas, duration) {

	if (!duration) duration=500;
	var prevX=0, prevY=0, ptX=5; ptY=0, stroke="white", isFlip=false;
	$('#panel').animate({'to':1}, {
									'duration': duration,
									'step'	  : function(pos, fx) {
										isFlip=!isFlip;
										var pathString = "M "+prevX+" "+ prevY+" L "+ptX+" "+ptY;
										console.log(pathString);
										canvas.path(pathString).attr({"stroke":stroke, 
																	"stroke-width": 4});
										prevX=ptX; prevY=ptY;
										ptX+=5; prevY+=0; 
										if (isFlip) stroke="none";
										else stroke="white";

									}
								});


};

var canvas = Raphael('panel', 300,75); 
$('#ahmed').click(function(){animatePath(canvas, 1000)});
});
