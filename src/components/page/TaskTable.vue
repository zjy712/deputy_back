
<template>
    <div>
      <div class="one">   
    <Select v-model="model1" style="width:100px;">
        <Option v-for="item in options" 
        :value="item.label" 
        :key="item.key">{{ item.label}}</Option>
    </Select>&emsp;&emsp;
    <Input v-model="value" placeholder="Enter something..." style="width: 150px"></Input>&emsp;
    <Button class="two" type="ghost" shape="circle" icon="ios-search" @click="search()">Search</Button>
   </div><br>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="发起人">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="承接人">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="发起时间">
            <span>{{ props.row.spo_time }}</span>
          </el-form-item>
          <el-form-item label="承接时间">
            <span>{{ props.row.rec_time}}</span>
          </el-form-item>
          <el-form-item label="任务分类">
            <span>{{ props.row.classify }}</span>
          </el-form-item>
          <el-form-item label="发起地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="任务描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单号"
      prop="id">
    </el-table-column>
    <el-table-column
      label="任务名称"
      prop="tit">
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="sta">
    </el-table-column>
  </el-table>
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        options: [{
          value:'选项1',
          label:'订单号'
        },{
            value:'选项2',
            label:'任务名称',
        },{
            value:'选项3',
            label:'订单状态'
        },{
          value: '选项3',
          label: '发起人'
        }, {
          value: '选项4',
          label: '承接人'
        }, {
          value: '选项5',
          label: '发起时间'
        }, {
          value: '选项6',
          label: '承接时间'
        }, {
          value: '选项7',
          label: '任务分类'
        },{
            value: '选项8',
            label:'任务描述',
        }],
        tableData5: [{
          id: '12987122',
          name: '任务一',
          spo_time:'22点18分',
          tit:'任务名称',
          rec_time:'22点19分',
          classify: '122',
          sta:'完成',
          desc: '任务描述',
          address: '地址',
          shop: '123',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '任务一',
          tit:'任务名称',
          spo_time:'22点18分',
          rec_time:'22点19分',
          classify: '12',
          sta:'未完成',
          desc: '完成',
          address: '2',
          shop: '13',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '任务一',
          tit:'任务名称',
          spo_time:'22点18分',
          rec_time:'22点19分',
          classify: 'shit',
          desc: '完成',
          sta:'未完成',
          address: '232',
          shop: '12',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '任务一',
          tit:'任务名称',
          spo_time:'22点18分',
          rec_time:'22点19分',
          sta:'未完成',
          classify: '23e',
          desc: '完成',
          address: '2e',
          shop: '2s',
          shopId: '10333'
        }]
      }
    },
    methods: {
        search() {
            
        }
    }
  }
</script>
<style>
.one Button{
    width:100px;
}
</style>