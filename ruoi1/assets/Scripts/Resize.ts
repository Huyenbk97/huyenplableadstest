// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
@property
width: number=100;
@property
height: number=100;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var screen = cc.find("Canvas");
        this.node.setContentSize(screen.getContentSize().width * this.width / 100, screen.getContentSize().height * this.height / 100)  
    }

    start () {

    }

    // update (dt) {}
}
