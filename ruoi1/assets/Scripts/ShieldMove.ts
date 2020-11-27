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

   
    @property
    BulletSpeed:number =10;
     timeToLive=700;
     timeAlive=0;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    update (dt) {
        if (!cc.isValid(this.node)) return
        this.timeAlive += dt * 10
        if (this.timeAlive >= this.timeToLive) this.node.destroy()
    
        this.node.setPosition(this.node.position.x,this.node.position.y-= this.BulletSpeed*dt );
        console.log("chay duoc")
       }
}
