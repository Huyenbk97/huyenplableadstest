// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    action: cc.ActionInterval;
    @property(cc.Prefab)
    YellowBullet:cc.Prefab=null;
    @property
    ShootFrequency:number=3.0;
    @property
    Animation_Node:cc.Animation;
    @property
    duration:number = 0.5;
    @property
    moveAmountX:number = 0.01;
    @property
    moveAmountY:number =0.01;
    moveEnemy:cc.ActionInterval;
    @property
    enemyLife:number = 100;
    @property({
        type:cc.AudioClip
    })
    explosion = null;
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        var anim = this.getComponent(cc.Animation);
        // // 
        // var animState1 = anim.play('enemy');
        // // var animState1 = anim1.play('enemy2');
        // animState1.wrapMode = cc.WrapMode.Loop;
        // // animState1.wrapMode = cc.WrapMode.Loop; 

        var manager= cc.director.getCollisionManager();
        manager.enabled=true;

    }
    onCollisionEnter(other,self){
        
     }
    start () {

    }

     update (dt) {}
}
