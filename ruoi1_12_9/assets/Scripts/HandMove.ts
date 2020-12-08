
const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {
@property
duration:number =1;
@property
moveAmountX:number =0;
@property
moveAmountY:number =20;
moveHand:cc.ActionInterval;
setMoveHand(){
    var moveLeft=cc.moveBy(this.duration,cc.v2(-this.moveAmountX,-this.moveAmountY));
    var moveRight=cc.moveBy(this.duration,cc.v2(this.moveAmountX,this.moveAmountY));
    return cc.repeatForever(cc.sequence(moveLeft,moveRight));
}
     onLoad () {
     this.moveHand=this.setMoveHand();
     this.node.runAction(this.moveHand);
     cc.find("Cannon 01/Barrel/SFX", this.node);
     }

    start () {

    }
}
