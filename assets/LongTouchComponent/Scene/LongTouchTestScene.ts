const { ccclass, property } = cc._decorator;

@ccclass
export default class LongTouchTestScene extends cc.Component {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOP 节点 演示部分

    @property({
        type: cc.Node,
        tooltip: "演示节点：上方的长按按钮节点"
    })
    topLongTouchBtnNode: cc.Node = null;

    @property({
        type: cc.Label,
        tooltip: "演示节点：上方的长按回调次数Label"
    })
    topLongTouchCallBackLabel: cc.Label = null;

    /**
     * 播放长按效果
     *
     * @param touchCounter 本次长按触摸次数
     * @param customEventData 在属性检查器中传入进来的 CustomEventData
     */
    playTopBtnTouchAnim() {
        this.topLongTouchBtnNode.runAction(cc.sequence(cc.scaleTo(0.055, 0.92), cc.scaleTo(0.055, 1).easing(cc.easeCircleActionOut())));
    }

    /**
     * 处理长按逻辑
     *
     * @param touchCounter 本次长按触摸次数
     * @param customEventData 在属性检查器中传入进来的 CustomEventData
     */
    handleTopBtnTouchLogic(touchCounter: number, customEventData?: any) {
        this.topLongTouchCallBackLabel.string = `本次长按，回调了 ${touchCounter} 次`;
        console.log(`界面就不演示输出 CustomEventData了`);
        console.log(customEventData);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Middle 节点 演示部分

    @property({
        type: cc.Node,
        tooltip: "演示节点：中间的长按按钮节点"
    })
    middleLongTouchBtnNode: cc.Node = null;

    @property({
        type: cc.Label,
        tooltip: "演示节点：中间的长按累计次数Label"
    })
    middleLongTouchCallBackLabel: cc.Label = null;

    /**
     * 播放长按效果
     *
     * @param touchCounter 本次长按触摸次数
     * @param customEventData 在属性检查器中传入进来的 CustomEventData
     */
    playMiddleBtnTouchAnim() {
        this.middleLongTouchBtnNode.runAction(cc.sequence(cc.scaleTo(0.055, 0.92), cc.scaleTo(0.055, 1).easing(cc.easeCircleActionOut())));
    }

    /**
     * 累计计数
     */
    private counter = 0;

    /**
     * 处理长按逻辑
     *
     * @param touchCounter 本次长按触摸次数
     * @param customEventData 在属性检查器中传入进来的 CustomEventData
     */
    handleMiddleBtnTouchLogic(touchCounter: number, customEventData?: any) {
        // 这里演示效果为：
        //  如果长按回调次数小于等于3次的，那么 累计次数 = 累计次数 + 1
        //  如果长按回调次数大于3次的，那么 累计次数 = 累计次数 + 权重公式后的结果
        if (touchCounter <= 3) {
            this.counter++;
        } else {
            // PS: 实际使用，开发者需要根据自己的期望权重递增公司来编写，这里仅为演示
            this.counter += Math.ceil((touchCounter - 3) * 1.003);
        }
        this.middleLongTouchCallBackLabel.string = `累计计数 ${this.counter} 次`;
    }
}
