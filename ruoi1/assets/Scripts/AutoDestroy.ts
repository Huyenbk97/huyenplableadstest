// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoDestroy extends cc.Component {

  onEnable(){
    this.bazier();
  }

  onLoad() { this.bazier();}
  bazier(){
    var ctx = this.node.getComponent(cc.Graphics);
    
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    //ctx.stroke();
  }
    start () {

    }

    // update (dt) {}
}
