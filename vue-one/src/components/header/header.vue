<template>
  <div class="header" v-if="datas">
    <div class="info">
      <div class="pic">

      </div>
      <div class="right">
        <div class="one">
          <span></span>
          <span>{{datas.name}}</span>
        </div>
        <div class="two">
          <span>{{datas.description}}</span>/
          <span>{{datas.deliveryTime}}分钟</span>
        </div>
        <div class="three">
          <span></span>
          <span>{{datas.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="message">
      <span>12像素</span>
      <span>
          粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商
        </span>
    </div>
    <div class="btn" v-on:click="change">
      <span>5个</span>
      <i></i>
    </div>
    <div class="bg"></div>
    <div class="mask" v-show="isShow">

    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      change(){
        this.isShow = !this.isShow;
      },
    },
    computer:{

    },
    beforeCreate(){
      console.log("组件刚被创建");
    },
    created(){
      this.$http.get("/api/seller")
        .then(function(response){
          return response.json()
        }).then(function(response){
        if(response.success === 1){
          this.datas = response.data;
        }
      })
    },
    //静态属性
    data(){
      return {
        datas:"",
        isShow: false
      }
    },
    //计算属性
    computed:{

    }
  }
</script>

<style>
  .header{
    font-size: 0;
    position: relative;
    background-color:rgba(7,17,27,0.5);
  }
  .pic{
    display: inline-block;
    width:64px;
    height:64px;
    margin:24px 16px 18px 24px;
    background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg") 0 0 no-repeat;
    border-radius: 4px;
    background-size: cover;
  }
  .right{
    display: inline-block;
    margin:26px 0 0 0;
    vertical-align: top;
  }
  .right .one{
    font-size:16px;
    color:#fff;
    font-weight: bold;
    line-height: 16px;
  }
  .right .one span{
    display: inline-block;
    vertical-align: top;
  }
  .right .one span:first-child{
    background: url("../../../resource/img/brand@2x.png");
    width:30px;
    height:16px;
    background-size: 30px 16px;
  }
  .right .one span:last-child{
    vertical-align: top;
  }
  .right .two{
    font-size: 12px;
    color: #fff;
    line-height: 12px;
    font-weight: 100;
    margin-top: 8px;
  }
  .right .three{
    font-size: 10px;
    color:rgb(255,255,255);
    font-weight: 100;
    line-height: 14px;
    margin-top: 10px;
  }
  .right .three span{
    display: inline-block;
    vertical-align:top;
  }
  .right .three span:first-child{
    background: url("../../../resource/img/decrease_1@2x.png");
    width:14px;
    height:14px;
    background-size: 14px 14px;
  }

  .message{
    height:28px;
    line-height: 28px;
    background-color: rgba(7,17,27,0.2);
  }
  .message span:first-child{
    display: inline-block;
    vertical-align: top;
    background: url("../../../resource/img/bulletin@2x.png");
    width:30px;
    height:16px;
    background-size: 30px 16px;
    margin: 6px 4px 0 12px;
  }
  .message span:last-child{
    display: inline-block;
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width:80%;
    color:#fff;
  }
  .bg{
    position: absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background-image:url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
    z-index: -1;
  }
  .btn{
    position: absolute;
    width:24px;
    line-height: 24px;
    padding:0 8px;
    border-radius: 50%;
    color:#fff;
    right:12px;
    bottom: 38px;
    font-size:10px;
    background-color:rgba(0,0,0,0.2)
  }
  .btn i{

  }
</style>
