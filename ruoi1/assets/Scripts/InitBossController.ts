

const {ccclass, property} = cc._decorator;

@ccclass
export default class InitBossController extends cc.Component {

    static Instance:InitBossController=null;
    
    @property(cc.Prefab)
    bossPrefab:cc.Node=null;

    onLoad () {

        InitBossController.Instance=this;
    
    }

    start () {

    }

    InitPrefab(){
        var boss = cc.instantiate(this.bossPrefab);
        boss.setPosition (cc.v2(0,0));
    }
    // update (dt) {}
}
