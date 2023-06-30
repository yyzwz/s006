"use strict";(self["webpackChunks006"]=self["webpackChunks006"]||[]).push([[7506,5504,8980,6413],{5504:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("添加寻物")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"物品名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入物品名称..."},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"丢失时间",prop:"time"}},[t("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"请选择丢失时间...",clearable:""},on:{"on-change":e.changeDate}})],1),t("FormItem",{attrs:{label:"丢失地点",prop:"address"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入物品丢失地点..."},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),t("FormItem",{attrs:{label:"所属类型",prop:"type"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择物品所属类型..."},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("Option",{attrs:{value:"物品类型1"}},[e._v("物品类型1")]),t("Option",{attrs:{value:"物品类型2"}},[e._v("物品类型2")]),t("Option",{attrs:{value:"物品类型3"}},[e._v("物品类型3")])],1)],1),t("FormItem",{attrs:{label:"相关描述",prop:"content"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",type:"textarea",rows:4,maxlength:"240",placeholder:"请输入物品相关描述..."},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("FormItem",{attrs:{label:"物品图片",prop:"image"}},[t("upload-pic-input",{staticStyle:{width:"570px"},attrs:{placeholder:"请上传物品图片..."},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},i=[],l=a(3144),r=a(6413);const o={name:"add",components:{uploadPicInput:r["default"]},data(){return{submitLoading:!1,form:{title:"",time:"",address:"",type:"物品类型1",content:"",image:""},formValidate:{}}},methods:{init(){},changeDate(e){this.form.time=e},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.l9)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=o;var c=a(1001),d=(0,c.Z)(n,s,i,!1,null,null,null);const h=d.exports},8980:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑寻物")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"物品名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入物品名称..."},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"丢失时间",prop:"time"}},[t("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",placeholder:e.form.time,clearable:""},on:{"on-change":e.changeDate}})],1),t("FormItem",{attrs:{label:"丢失地点",prop:"address"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入物品丢失地点..."},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),t("FormItem",{attrs:{label:"所属类型",prop:"type"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择物品所属类型..."},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("Option",{attrs:{value:"物品类型1"}},[e._v("物品类型1")]),t("Option",{attrs:{value:"物品类型2"}},[e._v("物品类型2")]),t("Option",{attrs:{value:"物品类型3"}},[e._v("物品类型3")])],1)],1),t("FormItem",{attrs:{label:"相关描述",prop:"content"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",type:"textarea",rows:4,maxlength:"240",placeholder:"请输入物品相关描述..."},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("FormItem",{attrs:{label:"物品图片",prop:"image"}},[t("upload-pic-input",{staticStyle:{width:"570px"},attrs:{placeholder:"请上传物品图片..."},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},i=[],l=a(3144),r=a(6413);const o={name:"edit",components:{uploadPicInput:r["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{title:"",time:"",address:"",type:"",content:"",image:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},changeDate(e){this.form.time=e},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.Nr)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=o;var c=a(1001),d=(0,c.Z)(n,s,i,!1,null,null,null);const h=d.exports},7506:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},["add"==e.currView?t("add",{on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),"edit"==e.currView?t("edit",{attrs:{data:e.formData},on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),t("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==e.currView,expression:"currView=='index'"}]},[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:"",prop:"title"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"物品名称",clearable:""},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1),t("Form-item",{attrs:{label:"",prop:"content"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"相关描述",clearable:""},model:{value:e.searchForm.content,callback:function(t){e.$set(e.searchForm,"content",t)},expression:"searchForm.content"}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:"",disabled:!e.$route.meta.permTypes.includes("add")},on:{click:e.add}},[e._v("添加")]),t("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:"",disabled:!e.$route.meta.permTypes.includes("delete")},on:{click:e.delAll}},[e._v("删除")]),t("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:e.excelData}},[e._v("导出")])],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v(" 使用教程")]),t("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},i=[],l=a(3144),r=a(5504),o=a(8980);const n={name:"single-window",components:{add:r["default"],edit:o["default"]},data(){return{tableHeight:0,selected:["选择","序号","物品名称","丢失时间","丢失地点","所属类型","相关描述","物品图片","创建时间","创建者","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"物品名称",key:"title",minWidth:180,tooltip:!0,sortable:!1},{title:"丢失时间",key:"time",minWidth:180,tooltip:!0,sortable:!1},{title:"丢失地点",key:"address",minWidth:180,tooltip:!0,sortable:!1},{title:"所属类型",key:"type",minWidth:180,tooltip:!0,sortable:!1},{title:"相关描述",key:"content",minWidth:180,tooltip:!0,sortable:!1},{title:"物品图片",key:"image",minWidth:180,tooltip:!0,sortable:!1,render:(e,t)=>void 0==t.row.image||""==t.row.image?e("div",[e("span",{style:{color:"#ff9900"}},"未上传")]):e("img",{attrs:{src:t.row.image},style:{cursor:"zoom-in",width:"60px",margin:"10px 0","object-fit":"contain"},on:{click:()=>{this.showFile(t.row.image)}}})},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:200,fixed:"right",render:(e,t)=>{var a=this;return e("div",[e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",ghost:!0,disabled:!(a.$route.meta.permTypes&&a.$route.meta.permTypes.includes("edit"))},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0,disabled:!(a.$route.meta.permTypes&&a.$route.meta.permTypes.includes("delete"))},on:{click:()=>{this.remove(t.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},submited(){this.currView="index",this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,(0,l.g7)(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},add(){this.currView="add"},edit(e){for(let s in e)null==e[s]&&(e[s]="");let t=JSON.stringify(e),a=JSON.parse(t);this.formData=a,this.currView="edit"},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 ?",loading:!0,onOk:()=>{(0,l.rc)({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,l.rc)({ids:e}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})},showFile(e){window.open(e+"?preview=true")}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var a=this.selected[t],s=0;s<this.columns.length;s++)this.columns[s].title==a&&e.push(this.columns[s]);this.columns=e},watch:{selected:function(e){let t=[];for(var a=0;a<this.mycolumns.length;a++){var s=this.mycolumns[a];(void 0==s.title||e.includes(s.title))&&t.push(s)}this.columns=t}}},c=n;var d=a(1001),h=(0,d.Z)(c,s,i,!1,null,null,null);const m=h.exports},6413:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{display:"flex"}},[t("Input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:e.placeholder,size:e.size,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,icon:"md-eye"},on:{"on-change":e.handleChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},[t("Poptip",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{slot:"append",transfer:"",trigger:"hover",title:"图片预览",placement:"right",width:"350"},slot:"append"},[t("Button",{attrs:{type:"primary",icon:"md-eye"}}),t("div",{attrs:{slot:"content"},slot:"content"},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{width:"100%",margin:"0 auto",display:"block",cursor:"zoom-in"},attrs:{src:e.currentValue},on:{click:e.viewImage}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.currentValue,expression:"!currentValue"}]},[e._v("无效的图片链接")]),t("a",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{"margin-top":"5px","text-align":"right",display:"block"},on:{click:e.viewImage}},[e._v("查看大图")])])],1)],1),t("Upload",{attrs:{action:e.uploadFileUrl,headers:e.accessToken,"on-success":e.handleSuccess,"on-error":e.handleError,format:e.format,accept:e.accept,"max-size":1024*e.maxSize,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.beforeUpload,"show-upload-list":!1}},[t("Button",{attrs:{loading:e.loading,size:e.size,disabled:e.disabled,icon:e.icon}},[e._v("上传图片")])],1)],1)])},i=[],l=a(1949),r=a.n(l),o=a(7877);const n={name:"uploadPicInput",props:{value:String,size:String,placeholder:{type:String,default:"可输入图片链接"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:Number,icon:{type:String,default:"ios-cloud-upload-outline"},maxSize:{type:Number,default:5},accept:{type:String,default:".jpg, .jpeg, .png, .gif"}},computed:{format(){if(this.accept){let e=[];return this.accept.split(",").forEach((t=>{e.push(t.replace(".","").replace(" ",""))})),e}return[]}},data(){return{accessToken:{},currentValue:this.value,loading:!1,uploadFileUrl:o.cT}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},viewImage(){let e=new Image;e.src=this.currentValue;let t=new(r())(e,{hidden:function(){t.destroy()}});t.show()},handleFormatError(e){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+e.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(e){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+e.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(e,t){this.loading=!1,e.success?(this.currentValue=e.result,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(e.message)},handleError(e,t,a){this.loading=!1,this.$Message.error(e.toString())},handleChange(e){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)}},mounted(){this.init()}},c=n;var d=a(1001),h=(0,d.Z)(c,s,i,!1,null,null,null);const m=h.exports},3144:(e,t,a)=>{a.d(t,{Nr:()=>o,_3:()=>i,g7:()=>l,l9:()=>r,rc:()=>n});var s=a(7184);const i=e=>(0,s.A_)("/lookThings/getByPage",e),l=e=>(0,s.A_)("/lookThings/getByPage2",e),r=e=>(0,s.j0)("/lookThings/insert",e),o=e=>(0,s.j0)("/lookThings/update",e),n=e=>(0,s.j0)("/lookThings/delByIds",e)}}]);