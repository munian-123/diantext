<template>
    <div class="login">
        <div class="login-content">

            <div class="login-item login-box">
                <el-icon><Shop /></el-icon>
                <p>软件平台</p>
            </div>

            <div class="login-item login-box">
                <el-icon><ChromeFilled /></el-icon>
                <p>软件平台</p>
            </div>

            <!-- 登录表单 -->
            <div class="login-form login-box login-item">
                <h1 @click="gou">登录</h1>
                 <div class="denglu">
                    <div class="denglus">
                        <img src="../../assets/img/卡通v.webp" alt="">

                         <p class="login-den">
                        <el-form
                          ref="ruleFormRef"
                          :model="ruleForm"
                          :rules="rules"
                          label-width="120px"
                          class="demo-ruleForm"
                        >
                        <el-form-item label="用户名：" prop="user">
                            <el-input v-model="ruleForm.user" />
                        </el-form-item>
                        <el-form-item label="密码：" prop="password">
                            <el-input type="password" v-model="ruleForm.password" />
                            </el-form-item>
                            <el-form-item>

                        <el-button type="danger" @click="submitForm(ruleFormRef)">
                            登录
                          </el-button>
                        </el-form-item>

                      </el-form>
                      <span class="spans" @click="spanss">X</span>
                      </p>

                    </div> 
                     
                 </div>
                <!-- <p class="login-title" style="color: blue; text-align: center;">人工智能监控系统</p>
                          <el-form
                          ref="ruleFormRef"
                          :model="ruleForm"
                          :rules="rules"
                          label-width="120px"
                          class="demo-ruleForm"
                        >
                        <el-form-item label="用户名：" prop="user">
                            <el-input v-model="ruleForm.user" />
                        </el-form-item>
                        <el-form-item label="密码：" prop="password">
                            <el-input type="password" v-model="ruleForm.password" />
                            </el-form-item>
                            <el-form-item>

                        <el-button type="danger" @click="submitForm(ruleFormRef)">
                            登录
                          </el-button>
                        </el-form-item>

                      </el-form> -->
            </div>

            <div class="login-item login-box">
                <el-icon><ElemeFilled /></el-icon>
                <p>软件平台</p>
            </div>

            <div class="login-item login-box">
                <el-icon><SwitchFilled /></el-icon>
                <p>软件平台</p>
            </div>

        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import axios from '../../api/index'
import {
    Shop,
    ChromeFilled,
    SwitchFilled,
    ElemeFilled
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import {reactive,ref} from 'vue'
const ruleFormRef=ref()
   const ruleForm=reactive({
    name:'admin123',
    password:"admin123"
   })
   //密码校验
   const rules = reactive({ 
  user: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 15, message: '长度为3-5位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 15, message: '长度为6-15位', trigger: 'blur' },
  ],
   })
   const router=useRouter()  //实例化
   //触发登录  数据提交
   function submitForm (formEl){
    // 校验
    formEl.validate(async valid=>{
        if(valid){
            ElMessage('登录成功')
             //发送请求
             let res=await axios.post('/api/login',ruleForm);
             console.log(res);
             //跳转首页
             router.push('/index')
        }else{
            ElMessage('登录失败')
        }
    })
    
   }
   
   const gou=()=>{
    let denglu=document.querySelector('.denglu')
    console.log(denglu);
    denglu.style.display='block'
   }
   const spanss=()=>{
    let denglu=document.querySelector('.denglu')
    let spans=document.querySelector('.spans')
    console.log(spans);
    denglu.style.display='none'
   }
</script>
<style>
/* 登录页面 */
.denglu{
    display: none;
    position: absolute;
    width: 1000px;
    height: 500px;
    background-color: rgb(57, 143, 164);
    /* opacity: 0.6; */
    z-index: 1000;
    /* display: flex; */
}

.denglus{
    display: flex;
    /* justify-content:space-between;;
    align-items: center; */
}
img{
    width: 500px;
    height: 500px;
}
.login-den{
 margin-top: 200px;
}
 .spans{
    position: absolute;
    top: 10px;
    left: 950px;
    font-size: 30px;
}
*{
    /* position: relative; */
    box-sizing: border-box;
}
.login-content{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform-style: preserve-3d;
    
}
.login-box{
    position: relative;
    transform: 5s;
}
.login-content:hover > :not(:hover){
    margin: 0 -20px;
    filter: drop-shadow(0 0 25px #a13b3b) drop-shadow(0 0 45rgb(183, 37, 37)000);
    transform: perspective(1500px) rotateY(45deg) scale(0);
}
.login-content .login-box:hover ~ .login-box{
    transform: perspective(1500px) rotateY(-45deg) scale(0);
}
.login-content .login-box:hover{
    transform: perspective(1000px) rotateY(0) scale(1.5);
    z-index: 100;
}
</style>