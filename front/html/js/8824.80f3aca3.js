"use strict";(self["webpackChunks006"]=self["webpackChunks006"]||[]).push([[8824,6413],{8824:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑招领")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"物品名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入物品名称..."},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"捡到时间",prop:"time"}},[t("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",clearable:"",placeholder:e.form.time},on:{"on-change":e.changeDate}})],1),t("FormItem",{attrs:{label:"捡到地点",prop:"address"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入物品捡到地点..."},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),t("FormItem",{attrs:{label:"所属类型",prop:"type"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("Option",{attrs:{value:"物品类型1"}},[e._v("物品类型1")]),t("Option",{attrs:{value:"物品类型2"}},[e._v("物品类型2")]),t("Option",{attrs:{value:"物品类型3"}},[e._v("物品类型3")])],1)],1),t("FormItem",{attrs:{label:"相关描述",prop:"content"}},[t("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"请输入物品相关描述...",clearable:""},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("FormItem",{attrs:{label:"暂存地点",prop:"pushAddress"}},[t("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"请输入物品暂存地点...",clearable:""},model:{value:e.form.pushAddress,callback:function(t){e.$set(e.form,"pushAddress",t)},expression:"form.pushAddress"}})],1),t("FormItem",{attrs:{label:"物品图片",prop:"image"}},[t("upload-pic-input",{staticStyle:{width:"570px"},attrs:{placeholder:"请上传物品图片..."},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},r=[],l=a(257),i=a(6413);const o={name:"edit",components:{uploadPicInput:i["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{title:"",time:"",address:"",type:"",content:"",pushAddress:"",image:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.$m)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=o;var c=a(1001),d=(0,c.Z)(n,s,r,!1,null,null,null);const u=d.exports},6413:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{display:"flex"}},[t("Input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:e.placeholder,size:e.size,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,icon:"md-eye"},on:{"on-change":e.handleChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},[t("Poptip",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{slot:"append",transfer:"",trigger:"hover",title:"图片预览",placement:"right",width:"350"},slot:"append"},[t("Button",{attrs:{type:"primary",icon:"md-eye"}}),t("div",{attrs:{slot:"content"},slot:"content"},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{width:"100%",margin:"0 auto",display:"block",cursor:"zoom-in"},attrs:{src:e.currentValue},on:{click:e.viewImage}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.currentValue,expression:"!currentValue"}]},[e._v("无效的图片链接")]),t("a",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{"margin-top":"5px","text-align":"right",display:"block"},on:{click:e.viewImage}},[e._v("查看大图")])])],1)],1),t("Upload",{attrs:{action:e.uploadFileUrl,headers:e.accessToken,"on-success":e.handleSuccess,"on-error":e.handleError,format:e.format,accept:e.accept,"max-size":1024*e.maxSize,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.beforeUpload,"show-upload-list":!1}},[t("Button",{attrs:{loading:e.loading,size:e.size,disabled:e.disabled,icon:e.icon}},[e._v("上传图片")])],1)],1)])},r=[],l=a(1949),i=a.n(l),o=a(7877);const n={name:"uploadPicInput",props:{value:String,size:String,placeholder:{type:String,default:"可输入图片链接"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:Number,icon:{type:String,default:"ios-cloud-upload-outline"},maxSize:{type:Number,default:5},accept:{type:String,default:".jpg, .jpeg, .png, .gif"}},computed:{format(){if(this.accept){let e=[];return this.accept.split(",").forEach((t=>{e.push(t.replace(".","").replace(" ",""))})),e}return[]}},data(){return{accessToken:{},currentValue:this.value,loading:!1,uploadFileUrl:o.cT}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},viewImage(){let e=new Image;e.src=this.currentValue;let t=new(i())(e,{hidden:function(){t.destroy()}});t.show()},handleFormatError(e){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+e.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(e){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+e.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(e,t){this.loading=!1,e.success?(this.currentValue=e.result,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(e.message)},handleError(e,t,a){this.loading=!1,this.$Message.error(e.toString())},handleChange(e){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)}},mounted(){this.init()}},c=n;var d=a(1001),u=(0,d.Z)(c,s,r,!1,null,null,null);const m=u.exports},257:(e,t,a)=>{a.d(t,{$B:()=>l,$m:()=>o,Hv:()=>r,fI:()=>n,vG:()=>i});var s=a(7184);const r=e=>(0,s.A_)("/draw/getByPage",e),l=e=>(0,s.A_)("/draw/getByPage2",e),i=e=>(0,s.j0)("/draw/insert",e),o=e=>(0,s.j0)("/draw/update",e),n=e=>(0,s.j0)("/draw/delByIds",e)}}]);