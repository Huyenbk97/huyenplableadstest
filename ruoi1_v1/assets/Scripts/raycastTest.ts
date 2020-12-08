// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:
    @property(cc.Node)
    rayCast: cc.Node = null;
    onLoad() {
        var ctx =node.getComponent(cc.Graphics);
      ctx.circle(200, 200, 200);
//ctx.stroke();
    }

    start () {

    }

    // update (dt) {}
}
