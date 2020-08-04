class Symptoms{
    constructor(){


    }
    
    display(){
        var title = createElement("h1");
        title.position(displayWidth-950, displayHeight-700);
        title.html("Symptoms of lack in Concentration:");

        var text1 = createElement("h3");
        text1.position(displayWidth/2 - 550, displayHeight/2 -200);
        text1.html("• We think one, but do another one.");

        var text2 = createElement("h3");
        text2.position(displayWidth/2 - 550, displayHeight/2 -180);
        text2.html("• The inability of remembering things that occurred short time ago.");

        var text3 = createElement("h3");
        text3.position(displayWidth/2 - 550,  displayHeight/2 -160);
        text3.html("• While doing a work, thinking about past failures or success.");

        var text4 = createElement("h3");
        text4.position(displayWidth/2 - 550, displayHeight/2 -140);
        text4.html("• Lack of confidence and planning.");

        var text5 = createElement("h3");
        text5.position(displayWidth/2 - 550, displayHeight/2 -120);
        text5.html("• Lack of time management.");

        var text6 = createElement("h3");
        text6.position(displayWidth/2 - 550, displayHeight/2 -100);
        text6.html("• Always thinking about competitors. ");

        var text7 = createElement("h3");
        text7.position(displayWidth/2 - 550, displayHeight/2 -80);
        text7.html("• Negative thoughts.");

        var text8 = createElement("h3");
        text8.position(displayWidth/2 - 550, displayHeight/2 -60);
        text8.html("• Thinking about different personal problems while doing some work.");
        
        if(frameCount === 0){
            var button = createButton("Next");
            button.position(displayWidth - 300, displayHeight - 200); 

            button.mousePressed(function(){
                title.hide();
                text1.hide();
                text2.hide();
                text3.hide();
                text4.hide();
                text5.hide();
                text6.hide();
                text7.hide();
                text8.hide();
                button.hide();

                tips = new Tips();
                tips.display();

            });

      }  
        
    }

}
