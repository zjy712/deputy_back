
<template>
    <div>
     <div class="one">   
    <Select v-model="model1" style="width:100px;">
        <Option v-for="item in  columns1" 
        :value="item.label" 
        :key="item.key">{{ item.label}}</Option>
    </Select>&emsp;&emsp;
    <Input v-model="value" placeholder="Enter something..." style="width: 150px"></Input>&emsp;
    <Button class="two" type="ghost" shape="circle" icon="ios-search"  @click="search(model1,value,data6,rowClassName,columns1)" >Search</Button>
   </div><br>
    
    <Table border :columns="columns1" :data="data6" :rowClassName="rowClassName"></Table>

    <div class="dialog">
        
        <el-dialog title="" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.mail" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="form.addres" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="信誉" :label-width="formLabelWidth">
                <el-input v-model="form.credit" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button  type="primary" @click="affirm">确 定</el-button>
        </div>

        </el-dialog>

    </div>
    
</div>
</template>
<script>
    export default {
        data () {

            return {
                
                columns1: [
                    {
                        title: '用户名',
                        key: 'name',
                        label: '用户名',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        
                        title: '邮箱',
                        key: 'mail',
                        label: '邮箱',
                    },
                    {
                        title: '电话',
                        key: 'phone',
                        label: '电话',
                    },
                    {
                        label: '地址',
                        title:'地址',
                        key: 'addres',
                    },
                    {
                        label: '信誉',
                        title:'信誉',
                        key: 'credit'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],


                dialogFormVisible: false,
                form: {
                    name: '',
                    mail: '',
                    phone: '',
                    credit: '',
                    addres: '',
                },

                a:'',
                b: '',
                c: '',
                formLabelWidth: '80px',
                data6: [
                    {
                        name: 'John Brown',
                        mail: 18,
                        phone:1234,
                        credit:5,
                        addres: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        mail: 24,
                        phone:1234,
                        credit:5,
                        addres: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        mail: 30,
                        phone:1234,
                        credit:5,
                        addres: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        mail: 26,
                        phone:1234,
                        credit:5,
                        addres: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            edit (index) {
                this.dialogFormVisible = true;
                this.form.name = this.data6[index].name;
                this.form.mail= this.data6[index].mail;
                this.form.phone = this.data6[index].phone;
                this.form.addres = this.data6[index].addres;
                this.form.credit = this.data6[index].credit;
                

                /*this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>mail：${this.data6[index].mail}<br>Address：${this.data6[index].address}`
                })
                */
           },
            remove (index) {
                this.data6.splice(index, 1);
            },
            affirm(){
                this.data6[index].name = this.form.name;
                this.dialogFormVisible = false;
            },
            rowClassName(row,index){
                if(index===1){
                    return 'demo-table-info-row';
                }
                return '';
            },
            search(model1,value,data6,rowClassName,columns1){
                console.log(model1+value);
                console.log(data6);
                console.log(rowClassName);
                console.log(columns1);
                
            },
        }
    }
</script>
<style>
.one Button{
    width:100px;
}

</style>