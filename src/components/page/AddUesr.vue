<template>

    <div class="main">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="ID" prop="name">
            <Input v-model="formValidate.name" placeholder="输名字"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <Input v-model="formValidate.mail" placeholder="输入 e-mail"></Input>
        </FormItem>
        <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="formValidate.passwd"></Input>
        </FormItem>
        <FormItem label="密码" prop="passwdCheck">
            <Input type="password" v-model="formValidate.passwdCheck"></Input>
        </FormItem>
        <FormItem label="电话号码" prop="phone">
            <Input type="text" v-model="formValidate.phone" number></Input>
        </FormItem>
        <el-rate
            v-model="value3"
            show-text>信誉等级
        </el-rate><br>
        <Button type="primary" @click="handleSubmit('formValidate')">确认</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        
    </Form>
    </div>
</template>
<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formValidate.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formValidate.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('不能为空'));
                } else if (value !== this.formValidate.passwd) {
                    callback(new Error('两次不一样，从新输入!'));
                } else {
                    callback();
                }
            };
            const validatePhone = (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error('不能为空'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('非数字'));
                    } else {
                        
                            callback();
                        
                    }
                }, 1000);
            };
            
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    passwd: '',
                    passwdCheck: '',
                    phone:'',
                  
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '不能为空', trigger: 'blur' },
                        { type: 'email', message: '打错了，傻逼', trigger: 'blur' }
                    ],
                    phone:[
                      { validator: validatePhone, trigger: 'blur' }
                    ],
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    
                }
            }
        },
        methods: {
           handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style>
.main{
    width:500px;
}
Button{
    width:15%;
}
</style>