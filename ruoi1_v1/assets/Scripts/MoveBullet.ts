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
    Cavas: Node = null;
    @property
    bulletTime: number = 100;
    @property
    BulletSpeed:number =1000;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    start () {

    }
    update(dt) {
        this.bulletTime -=3.5;
<<<<<<< HEAD

        this.node.setPosition(this.node.position.x-=Math.cos(5)*dt*this.BulletSpeed,this.node.position.y -=Math.sin(5)*this.BulletSpeed*dt);

        this.node.setPosition(this.node.position.x,this.node.position.y += this.BulletSpeed*dt);

=======
        this.node.setPosition(this.node.position.x,this.node.position.y += this.BulletSpeed*dt);
>>>>>>> 38382b420f12a3a1a6da0d320a9ed9f8bde97c9a
        if(this.bulletTime==0){
            this.node.destroy();
        //this.node.position.y = this.node.position.y + 5;
        }
       }
    // update (dt) {}
}
