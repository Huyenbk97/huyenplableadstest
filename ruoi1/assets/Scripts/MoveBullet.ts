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
    bulletTime: number = 500;
    @property
    BulletSpeed:number =800;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}
    start () {

    }
    update(dt) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.BulletSpeed = 1200;
            this.node.setScale(1.5, 1.5);
            this.bulletTime -= 1;
            this.node.setPosition(this.node.position.x,this.node.position.y += this.BulletSpeed*dt);
            console.log(this.node.name);
            if(this.bulletTime==0){
                this.node.destroy();
            //this.node.position.y = this.node.position.y + 5;
                console.log(this.node.parent.getContentSize().height);
         
           }
        }
            if (window.matchMedia("(orientation: landscape)").matches) {
                this.BulletSpeed = 800;
                this.node.setScale(1.2, 1.2);
            this.bulletTime -= 1;
            this.node.setPosition(this.node.position.x,this.node.position.y += this.BulletSpeed*dt);
            console.log(this.node.name);
            if(this.bulletTime==0){
                this.node.destroy();
            //this.node.position.y = this.node.position.y + 5;
                console.log(this.node.parent.getContentSize().height);
           }
      }
     
            
     
       }
    // update (dt) {}
}
