(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0edc62d2"],{"2e40":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roleitem"},[r("el-form-item",{attrs:{label:"权限",prop:"type"}},[r("el-checkbox-group",{attrs:{size:"small"},on:{change:e.setReturnVal},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[e._l(e.roles,function(e){return r("el-checkbox",{key:e.key,attrs:{value:e.id,label:e.value,name:"type"}})}),r("el-checkbox",{attrs:{label:"管理员",name:"type"}}),r("el-checkbox",{attrs:{label:"人员管理",name:"type"}}),r("el-checkbox",{attrs:{label:"权限管理",name:"type"}}),r("el-checkbox",{attrs:{label:"菜单管理",name:"type"}})],2)],1)],1)},s=[],l=r("b775"),o=r("0bfb"),i={name:"roleitem",props:{param:""},data:function(){return{role:[],roles:[]}},created:function(){var e=this;this.param&&(this.role=JSON.parse(this.param)),l["a"].get(o["a"].server+"/api/bind/getlist").then(function(t){e.roles=t.d})},methods:{setReturnVal:function(){var e="";0!==this.role.length&&(e=JSON.stringify(this.role)),this.$emit("setRole",e)}},watch:{param:function(e){e&&(this.role=JSON.parse(e))}}},n=i,u=r("2877"),c=Object(u["a"])(n,a,s,!1,null,null,null);c.options.__file="RoleItem.vue";t["a"]=c.exports},"6c6f":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addressitem"},[r("el-form-item",{attrs:{label:"区域",prop:"address"}},[r("el-select",{attrs:{placeholder:"请选择区域",clearable:"",size:"small"},on:{change:e.setReturnVal},model:{value:e.param,callback:function(t){e.param=t},expression:"param"}},[r("el-option",{attrs:{label:"请选择",value:""}}),e._l(e.citys,function(e){return r("el-option",{key:e.key,attrs:{value:e.key,label:e.text}})}),r("el-option",{attrs:{label:"成都市",value:"chengdu"}}),r("el-option",{attrs:{label:"郫县",value:"pixian"}})],2)],1)],1)},s=[],l=r("b775"),o=r("0bfb"),i={name:"addressitem",props:{param:""},data:function(){return{citys:[]}},created:function(){var e=this;l["a"].get(o["a"].server+"/api/bind/getlist").then(function(t){e.citys=t.d})},methods:{setReturnVal:function(){this.$emit("setAddress",this.param)}},watch:{param:function(e){this.address=e}}},n=i,u=r("2877"),c=Object(u["a"])(n,a,s,!1,null,null,null);c.options.__file="AddressItem.vue";t["a"]=c.exports},9504:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"operationedit"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"90px","label-position":"right"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"账号",prop:"account"}},[r("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.account,callback:function(t){e.$set(e.ruleForm,"account",t)},expression:"ruleForm.account"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"年龄",prop:"age"}},[r("el-input",{attrs:{type:"number",size:"small"},model:{value:e.ruleForm.age,callback:function(t){e.$set(e.ruleForm,"age",e._n(t))},expression:"ruleForm.age"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[e.hackReset?r("addressitem",{attrs:{param:e.ruleForm.address},on:{setAddress:e.setAddress}}):e._e()],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"创建时间",prop:"createDate",required:""}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",size:"small"},model:{value:e.ruleForm.createDate,callback:function(t){e.$set(e.ruleForm,"createDate",t)},expression:"ruleForm.createDate"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"是否有效",prop:"status"}},[r("el-switch",{attrs:{size:"small"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[e.hackReset?r("roleitem",{attrs:{param:e.ruleForm.type},on:{setRole:e.setRole}}):e._e()],1)],1)],1),r("div",{staticClass:"operation"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.onSubmitForm("ruleForm")}}},[e._v("提交")]),r("el-button",{attrs:{type:"info"},on:{click:function(t){t.stopPropagation(),e.onCancel(1)}}},[e._v("取消")])],1)],1)},s=[],l=(r("551c"),r("8a81"),r("b775")),o=r("0bfb"),i=r("6c6f"),n=r("2e40"),u=(r("c797"),{name:"useredit",components:{addressitem:i["a"],roleitem:n["a"]},props:{param:""},data:function(){var e=function(e,t,r){if(!t&&0!=t)return r(new Error("年龄不能为空"));r()};return{dialogFormVisible:!0,hackReset:!0,ruleForm:{id:"",name:"",account:"",age:0,address:"",createDate:"",status:!0,type:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:5,max:20,message:"长度在 5 到 20 个字符",trigger:"blur"}],age:[{validator:e,trigger:"blur"}],address:[{required:!0,message:"请选择区域",trigger:"change"}],createDate:[{required:!0,message:"请选择日期",trigger:"blur"}],type:[{required:!0,message:"请至少选择一个权限",trigger:"change"}]}}},created:function(){this.param&&(this.ruleForm.id=this.param,this.getUserModel())},methods:{getUserModel:function(){var e=this;l["a"].get(o["a"].server+"/api/user/getmodel",{params:{id:this.ruleForm.id}}).then(function(t){e.ruleForm=t.d})},setAddress:function(e){this.ruleForm.address=e},setRole:function(e){this.ruleForm.type=e,this.$refs["ruleForm"].validateField("type")},onSubmitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({showClose:!0,message:"验证未通过",type:"warning"}),!1;t.ruleForm.types=JSON.stringify(t.ruleForm.type),l["a"].post(o["a"].server+"/api/user/operation",t.ruleForm).then(function(e){0===e.c?(t.$message({showClose:!0,message:"操作成功",type:"success"}),t.onCancel(2)):t.$message({showClose:!0,message:"操作失败",type:"error"})})})},setReload:function(){var e=this;this.hackReset=!1,this.$nextTick(function(){return e.hackReset=!0})},OnResetForm:function(e){this.setReload(),this.$refs[e].resetFields()},onCancel:function(e){this.$emit("setEditUserDialog",e)}},watch:{id:function(e){this.ruleForm.id=e,this.getUserModel()}}}),c=u,m=r("2877"),p=Object(m["a"])(c,a,s,!1,null,null,null);p.options.__file="Edit.vue";t["default"]=p.exports},c797:function(e,t,r){}}]);
//# sourceMappingURL=chunk-0edc62d2.21616979.js.map