class Home{
    constructor(){


    }

    display(){
        var title = createElement("h1");
        title.position(displayWidth/2 - 245, displayHeight/2 );
        title.html("BOOST YOUR CONCENTRATION");
      
        var appImg = createElement("img");
        appImg.position(displayWidth/2 - 300, displayHeight/2 - 300);
        appImg.elt.src = "logo.png";
      
        var button = createButton("Next");
        button.position(displayWidth - 300, displayHeight - 300);

        button.mousePressed(function(){
          title.hide();
          appImg.hide();
          button.hide();

          appInfo = new AppInfo();
          appInfo.display();

        });

    }

}