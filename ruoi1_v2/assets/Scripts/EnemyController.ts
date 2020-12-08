import Bad from "./Bad";


const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyController extends cc.Component {

 
    @property(cc.Node)
    listEnemy1:cc.Node=null;
    @property(cc.Node)
    listEnemy2:cc.Node=null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    decreaseEnemyList1(){
        //kiêm tra
        if(this.listEnemy1.childrenCount<=0){
            for(var i=0;i<this.listEnemy2.childrenCount;i++){
                var e= this.listEnemy2.children[i];
                e.getComponent(Bad).die();
            }
        }
    }
    // update (dt) {}
}
