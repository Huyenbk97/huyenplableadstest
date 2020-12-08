// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PopupWindow extends cc.Component {
 static Instance: PopupWindow = null;
    // LIFE-CYCLE CALLBACKS:
    @property(cc.Node)
    popup:cc.Node=null;
    onLoad () {
     console.log(
         "popup"
     );
       this.popup.active=true;
    }

    start () {
    
    }
     show_Window(){
 console.log(
         "popup");
      
      this.node.opacity=0;
      this.node.scale=0.2;
      cc.tween(this.node).to(0.5,{scale:1,opacity:255},{easing: "quartInOut"}).start();
     }

    // update (dt) {}
}
