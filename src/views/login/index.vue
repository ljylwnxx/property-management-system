<template>
  <div class="login">
    <div class="login-con">
      <ul class="menu-tab">
        <li
          v-for="item in MenuData"
          :class="{ current: item.current }"
          :key="item.type"
          @click="MenuClick(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <!-- 表单部分 -->
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <label>邮箱</label>
          <el-input
            v-model="ruleForm.username"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="password">
          <label>密码</label>
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
            minlength="6"
            maxlength="15"
          />
        </el-form-item>
        <el-form-item prop="passwords"  v-show="model==='register'">
          <label>重复密码</label>
          <el-input
          v-model.number="ruleForm.passwords"
          type="password"
          minlength="6"
          maxlength="15"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn block" @click="submitForm(ruleFormRef)"
            >{{model==="login" ? "登录" : "注册"}}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { ref } from "vue";
import type { FormInstance } from "element-plus";

const MenuData = reactive([
  { txt: "登录", current: true, type: "login" },
  { txt: "注册", current: false, type: "register" },
]);


let model = ref("login")

let MenuClick = (e: any) => {
  MenuData.forEach((el) => {
    el.current = false;
  });
  e.current = true;

  // 修改保存点击的状态
  model.value = e.type
};
// 表单
const ruleFormRef = ref<FormInstance>();

const checkUser = (rule: any, value: any, callback: any) => {
   let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
   if (!value) {
    return callback(new Error("邮箱不能为空！"));
  }else if(!reg.test(value)){
    return callback(new Error("邮箱格式不正确！"));
  }else{
    callback()
  }
}


const validatePass = (rule: any, value: any, callback: any) => {
  let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,15}$/
  if (value === "") {
    callback(new Error("密码不能为空"));
  } else if(!reg.test(value)){
    callback(new Error("密码格式错误必须6-15位的字母+数字"));
  } else {
    callback();
  }
};


const validatePass2 = (rule: any, value: any, callback: any) => {
  if(model.value === 'login') {
    callback()
  }
  if (value === "") {
    callback(new Error("重复密码不能为空"));
  } else if (value !== ruleForm.password) {
    callback(new Error("两次密码必须相同"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  username: '',
  password: '',
  passwords: ""
});

const rules = reactive({
  password: [{ validator: validatePass, trigger: "blur" }],
  passwords: [{ validator: validatePass2, trigger: "blur" }],
  username: [{ validator: checkUser, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
.login {
  background-color: #000066;
  height: 100%;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
.demo-ruleForm {
  width: 30%;
  margin: 50px auto;
  label {
    display: block;
    margin-bottom: 3px;
    font-style: 14px;
    color: #fff;
  }
  .block{
    display: block;
    width: 100%;
  }
  .login-btn{
  margin-top: 20px;
}
}

</style>