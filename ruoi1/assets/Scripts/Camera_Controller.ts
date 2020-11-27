// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Camera_Controller extends cc.Component {
    static instance: Camera_Controller=null;
    @property(cc.Node)
    shipMove: cc.Node=null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    update(){
        var target_position=this.shipMove.getPosition();
        var curren_position=this.node.getPosition();
        curren_position.lerp(target_position,0.1,curren_position);
        this.node.setPosition(curren_position);
    // update (dt) {}
}
}
