class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,140);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,170);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,240);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,270);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(100,340);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,370);
        this.button3.style('background', 'lightgrey');

        this.reset = createButton("Reset")
    this.reset.position(900,450);
    this.reset.style('background', 'white'); 
    }

    resetButton(){
    this.reset.mousePressed(() => {
        window.location.reload();
      });
  
}

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
          
                this.button3.hide();
                this.access3.hide();

                // this.button3.hide;
                // this.access3.hide;

                // this.hide();
                // this.hide();

                // this.button3.hidden();
                // this.access3.hidden();
                
                score++;
            }
        });
    }
}