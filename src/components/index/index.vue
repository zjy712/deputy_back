<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-left{
        min-height: 800px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-left-main{
        padding: 20px;
    
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 12px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        font-size:15px;
        float: right;
        margin-right: 50px;
    }
    .layout-ceiling-main a{
        margin-right:30px;
        color: #9ba7b5;
    }
    
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">ID</a> |
                <a href="#">退出</a>
            </div>
        </div>
        
        <div class="layout-left">
            <Row>
                <Col span="5">                
                    <Menu active-name="1-2" width="auto" :open-names="['1']">
                        <router-link to="/home">
                        <Submenu name="0">
                            <template slot="title">
                                <Icon type="ios-home"></Icon>
                                  首 页
                            </template>          
                        </Submenu>
                        </router-link>

                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                数据管理
                            </template>
                            <router-link to="/home/usershow">
                                <MenuItem name="1-1">用户数据</MenuItem>
                            </router-link>
                            <router-link to="/home/taskshow">
                                <MenuItem name="1-2">任务数据</MenuItem>
                            </router-link>
                          
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                添加数据
                            </template>
                            <router-link to="/home/adduser">
                            <MenuItem name="2-1">添加用户</MenuItem></router-link>
                            <router-link to="/home/addadmin">
                            <MenuItem name="2-2">添加管理员</MenuItem></router-link>
                        </Submenu>
                        
                    </Menu>
                </Col>
                <Col span="19">

                    <div class="layout-left-main">
                     <router-view></router-view>    
                     
                    </div>
                </Col>
            </Row>

        </div>
        <div class="layout-copy">
           2018 &copy; JianYuZhu
      </div>
    </div>
</template>
<script>
     export default {
        data () {
            
        }
    }

</script>
<style>
MenuItem{
     text-decoration:none;
       color:#0000FF;
}
</style>