import React from 'react';
import './test2.css';
import go from 'gojs';
// import jry from "./jry.png";

const $$ = go.GraphObject.make;

class Test2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"I AM THE NO.2"
        }
        this.makeGo = this.makeGo.bind(this);
        
    }


    makeGo(){
        console.log(this)
        const myDiagram = $$(go.Diagram,'go_one',
            {
                initialContentAlignment: go.Spot.Center, // 居中显示Diagram内容
                "undoManager.isEnabled": true // 打开Ctrl-Z撤销和Ctrl-Y重做功能
            }
        )
        const myModel = $$(go.Model);
        // 在model的数据中, 每个节点数据的值都是由一个JS对象来表示:
        myModel.nodeDataArray = [
          { key: "波风鸣人", name:"Natuto", sex:"male", source: require("../image/naruto.png")},
          { key: "自来也", name:"JIRAIYA", sex:"male", source: require("../image/jry.png")},
          { key: "卡卡西", name:"Hatake Kakashi", sex:"male", source: require("../image/kks.png")},
          { key: "四代目", name:"Yondaime", sex:"male", source: require("../image/Yondaime.png")},
          { key: "鼬神", name:"Uchiha Itachi", sex:"male", source: require("../image/Itachi.png")}
        ];
        myDiagram.model = myModel;


        //模板样式
        myDiagram.nodeTemplate =
            $$(go.Node, "Vertical", // 第2个参数是Panel的类型。（译者注：比如横向排列还是纵向排列）
                /* Node参数配置 */
                { // Node.location 定位的基准点设置在每个节点的中心处
                  locationSpot: go.Spot.Center
                },
                // 例如 Node.location的参数值绑在 Node.data.loc
                new go.Binding("location", "loc"),

                /* 在节点中添加 GraphObjects */
                // 这个Shape将垂直放在TextBlock上
                // $$(go.Shape,
                //     "RoundedRectangle", // 这个参数可以指定一个预定义的图形（圆角矩形）。
                //     { /* 为Shape设置配置项 */ },
                //     // 例如Shape的Shape.figure参数值绑定在Node.data.fig
                //     new go.Binding("figure", "fig")
                // ),
                $$(go.Picture,
                    // Pictures 应该指定宽高.
                    // 当没有图片时显示红色的背景
                    // 或者当图片为透明的时候也是.
                    { margin: 10, width: 100, height: 100, background: "yellow" },
                    // Picture.source参数值与模型数据中的"source"字段绑定
                    new go.Binding("source","source")
                ),

                $$(go.TextBlock,
                    // 把TextBlock.text 绑在 Node.data.key上, 与myModel.nodeDataArray 这个数组的值绑定在一起;
                    new go.Binding("text", "name")
                )
            );


    }




    render() {
        return (
            <div style = {{ 'fontSize': '0.2rem' }}>
                <h1>{this.state.title}</h1>
                <div className = "mybox">
                    <h4>my first goJS is GOOD!</h4>
                    <div id="go_one">
                        
                    </div>
                </div>
            </div>
        );
    }

    //组件渲染之后调用，只调用一次。
    componentDidMount(){
        this.makeGo()
    }
}
export default Test2;