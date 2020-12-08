// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameUIcontroller extends cc.Component {
  static Instance: GameUIcontroller=null;
    @property(cc.Node)
    revicePopup:cc.Node=null;



    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        GameUIcontroller.Instance = this;
    }

    start () {
    
    }
  
  showBanner() {
    cc.find("Canvas/Ship").active = false;
    cc.find("Canvas/Node3").active = false;
        if (window.matchMedia("(orientation: portrait)").matches) {
            console.log("màn hình dọc");
            //this.node = cc.find("Canvas/playfreebutton");
                  
          this.revicePopup.setScale(2, 2);
          this.revicePopup.active = true;
          this.revicePopup.opacity=0;
          //console.log(this.node); 
          cc.audioEngine.pauseMusic();
          cc.audioEngine.pauseAllEffects();
    
          
            //this.revicePopup.scale = 0.2;
          
         // cc.tween(this.revicePopup).to(0.5,{scale:2,opacity:255},{easing: "quartInOut"}).start();
          
           }
           
           if (window.matchMedia("(orientation: landscape)").matches) {
              console.log("màn hình ngang");
             cc.audioEngine.pauseMusic();
             this.revicePopup.active = true;
               this.revicePopup.opacity=0;
               //this.revicePopup.scale=0.2;
               cc.audioEngine.pauseAllEffects();
               this.revicePopup.setScale(0.7,0.7);
              this.revicePopup.active = true;
           
              cc.tween(this.revicePopup).to(0.5,{scale:0.9,opacity:255},{easing: "quartInOut"}).start();
           }
      
       console.log("SHOW");
 
    }
    hideBanner(){
        this.revicePopup.active=false;
    }
    update (dt) {}
}
