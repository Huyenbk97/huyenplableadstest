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
       console.log("SHOW");
        cc.audioEngine.pauseMusic();
    cc.audioEngine.pauseAllEffects();
        this.revicePopup.active = true;
        this.revicePopup.opacity=0;
        this.revicePopup.scale=0.2;
        cc.tween(this.revicePopup).to(0.5,{scale:1,opacity:255},{easing: "quartInOut"}).start();
    }
    hideBanner(){
        this.revicePopup.active=false;
    }
    // update (dt) {}
}
