// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
   @property(cc.Node)
   initBulletPosition:cc.Node=null;
   touches: cc.Vec2[] = []
    // LIFE-CYCLE CALLBACKS:
     spawn(even){
        this.node.destroy();
     }
     onLoad () {
       var node = cc.find('Canvas/Ship');
       console.log(node)
     node.on(cc.Node.EventType.TOUCH_START, this.spawn, this); 
         
     }

    start () {

    }

    // update (dt) {}
}
