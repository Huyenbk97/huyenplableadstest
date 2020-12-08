// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BossMove extends cc.Component {
    static instance: BossMove = null;
    // LIFE-CYCLE CALLBACKS:
@property
duration:number =1;
@property
moveAmountX:number =0;
@property
moveAmountY:number =20;
moveHand:cc.ActionInterval;
setMoveHand(){
   
    var moveRight= cc.moveBy(2, 200, 0);
    this.node.runAction(moveRight);
}
     onLoad () {
    var moveRight= cc.moveBy(2, 0, -200);
    this.node.runAction(moveRight);
     }

    start () {

    }

    // update (dt) {}
}
