<template>
  <div id="app">
   <div class="wrap-banner">
      <div class="main-title">
        <h2>
          DEPUY
        </h2>
        <p class="subtitle">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <FormItem prop="user">
                            <Input type="text" long v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem></br>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                    </Form>
            <Button type="success"  @click="handleSubmit('formInline')">确认提交</Button><br><br>
        </p>

      </div>
      <vue-particles
       bgcolor="#000000"
        color="#909399"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1.5"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div> 
  </div>
 </template>
 <style>
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    background: #34393f;
  }

  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  

  
   #particles-js {
    background-color: #EBEEF5;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .wrap-banner {
    position: relative;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    color:red;
    justify-content: center;
  }

  .main-section {
    max-width: 650px;
    margin: auto;
    padding: 0 1rem;
  }

  .main-title {
    color: red;
    z-index: 999;
  }
.subtitle {
    position: relative;
    bottom:80px;
    }
    h2 {
      position: relative;
      bottom:150px;
      font-size: 7rem;
      font-family: 'Teko', sans-serif;
      text-shadow: 8px 8px #000000;
      text-transform: uppercase;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 3rem;
      }
    }
  Input,Button{
    width:30%;
  }
</style>

<script>
    export default {
        
        data () {
            return {
                button1:'',
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                        this.$router.push({ path:'/home',})
                    } else {
                        this.$Message.error('验证失败!');
                    }
                })
               }
      }

}
</script>
