<template>
    <section class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="5"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="5"><div class="data_list"><span class="data_num">23</span> API请求量</div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">23</span> 新增用户</div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">23</span> 新增订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">32</span> 新增管理员</div></el-col>
			</el-row>
            <el-row :gutter="20">
                <el-col :span="5"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="5">
                    <div class="data_list">
                        <span class="data_num">23<span class="wan" v-if="allApiCount > 10000">万</span>
                        </span> API请求量
                    </div>
                </el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">2</span> 注册用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">22</span> 订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">22</span> 管理员</div></el-col>
            </el-row>
		</section>
</template>
<script>
  
</script>
<style>
.data_section{
		padding: 20px;
		margin-bottom: 40px;
        }

		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
	
         .data_lis{
            text-align: center;
			font-size: 83px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
        }
        .data_num{
            font-size: 24px;
                padding: 0 10px;
               
        }
        .head{
                border-radius: 6px;
                font-size: 24px;
                padding: 0 10px;
                color: #fff;
            }
    
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
 
</style>