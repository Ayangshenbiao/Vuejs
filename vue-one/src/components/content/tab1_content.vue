<template>
    <div id="content" v-if="datas">
      <div class="left">
        <ul>
          <li v-for="item in datas">
            <span><i class="ico1" v-if=""></i>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="tab1_right">
        <p class="title">{{datas[0].name}}</p>
        <ul>
          <li>
            <img v-bind:src=datas[0].foods[0].image class="foods_img">
            <div class="tab1_list">
              <p class="food_name">{{datas[0].foods[0].name}}</p>
              <p class="food_sellCount">月售{{datas[0].foods[0].sellCount}}份</p>
              <p class="food_rating">好评率{{datas[0].foods[0].rating}}%</p>
              <p class="food_price">￥{{datas[0].foods[0].price}}</p>
              <div class="icon-add_circle"></div>
            </div>
          </li>
          <li>{{datas[0].foods[1].name}}</li>
          <li>{{datas[0].foods[2].name}}</li>
          <li>{{datas[0].foods[3].name}}</li>
        </ul>
        <p class="title">{{datas[1].name}}</p>
        <ul>
          <li>{{datas[1].foods[0].name}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default{
    methods:{
      //函数
    },
    computer:{
      //引用引入
    },
    beforeCreate(){
      console.log("组件刚被创建")
    },
    created(){
      this.$http.get("/api/goods")
        .then(function(response){
          return response.json()
        }).then(function(response){
        if(response.success === 1){
          this.datas = response.data;
        }
      })
    },
    data(){
      return {
        datas:"",
        i_show:""
      }
    }
  }
</script>

<style>
  #content{
    display: flex;
    width:100%;
    height:auto;
  }
  .left{
    width: 80px;
    background-color: #f3f5f7;
  }
  .left ul{
    width: 56px;
    margin:0 auto;
    list-style: none;
    padding: 0;
  }
  .left ul li{
    width:56px;
    height:54px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    line-height: 14px;
    font-size: 12px;
    color: rgb(20,20,20);
    display: flex;
    align-items:center;
  }

  .left ul li .ico1{
    display: inline-block;
    width: 12px;
    height:12px;
    background: url("../../../resource/img/special_3@2x.png");
    background-size: 12px 12px;
  }
  .tab1_right{
    flex: 1;
  }
  .tab1_right ul li{
    margin:0 18px 0 18px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    overflow: hidden;
  }
  .tab1_right .title{
    height:26px;
    background-color: #f3f5f7;
    border-left: 2px solid #d9dde1;
    line-height: 26px;
    font-size: 12px;
    color:rgb(147,153,159);
    text-indent: 14px;
  }
  .tab1_right .foods_img{
    float: left;
    width:57px;
    height:57px;
    margin:18px 20px 0 18px;
  }
  .tab1_right .tab1_list{
    float:left;
  }
  .tab1_right .tab1_list p{
    font-size: 14px;
    line-height: 14px;
    color:rgb(7,17,27);
  }


</style>
