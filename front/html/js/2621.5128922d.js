"use strict";(self["webpackChunks006"]=self["webpackChunks006"]||[]).push([[2621],{2621:(t,e,s)=>{s.r(e),s.d(e,{default:()=>v});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("Card",[e("Row",{staticClass:"operation"},[e("Button",{attrs:{type:"primary",icon:"md-add",ghost:"",shape:"circle",size:"small",disabled:!t.$route.meta.permTypes.includes("add")},on:{click:t.add}},[t._v("添加")]),e("Button",{attrs:{icon:"md-trash",type:"error",ghost:"",shape:"circle",size:"small",disabled:!t.$route.meta.permTypes.includes("delete")},on:{click:t.delAll}},[t._v("删除")]),e("Button",{attrs:{icon:"md-refresh",type:"info",ghost:"",shape:"circle",size:"small"},on:{click:t.getParentList}},[t._v("刷新")]),e("Button",{attrs:{type:"success",icon:"md-paper-plane",ghost:"",shape:"circle",size:"small"},on:{click:t.excelData}},[t._v("导出用户")]),e("i-switch",{staticStyle:{"margin-left":"5px"},attrs:{size:"large"},model:{value:t.strict,callback:function(e){t.strict=e},expression:"strict"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("级联")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("单选")])])],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"8"}},[e("Alert",{directives:[{name:"show",rawName:"v-show",value:t.form.id,expression:"form.id"}],attrs:{"show-icon":"",type:"success"}},[t._v(" 当前选择 "),e("span",{staticClass:"select-title"},[t._v(t._s(t.editTitle))]),e("a",{staticClass:"select-clear",on:{click:t.cancelEdit}},[t._v(" 取消选择")])]),e("Input",{attrs:{suffix:"ios-search",placeholder:"输入部门名搜索",clearable:""},on:{"on-change":t.search},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),e("div",{staticClass:"tree-bar",style:{maxHeight:t.maxHeight}},[e("Tree",{ref:"tree",attrs:{data:t.data,"load-data":t.loadData,"show-checkbox":"","check-strictly":!t.strict},on:{"on-check-change":t.changeSelect,"on-select-change":t.selectTree}}),t.loading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1),e("Col",{attrs:{span:"16"}},[e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate}},[e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"上级部门",prop:"parentTitle"}},[e("div",{staticStyle:{display:"flex"}},[e("Input",{staticStyle:{"margin-right":"10px"},attrs:{readonly:""},model:{value:t.form.parentTitle,callback:function(e){t.$set(t.form,"parentTitle",e)},expression:"form.parentTitle"}}),e("Poptip",{attrs:{transfer:"",trigger:"click",placement:"right-start",title:"选择上级部门",width:"250"}},[e("Button",{attrs:{icon:"md-list"}},[t._v("选择部门")]),e("div",{staticStyle:{position:"relative","min-height":"5vh"},attrs:{slot:"content"},slot:"content"},[e("Tree",{attrs:{data:t.dataEdit,"load-data":t.loadData},on:{"on-select-change":t.selectTreeEdit}}),t.loadingEdit?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)])],1),e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"部门名称",prop:"title"}},[e("Input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"部门领导",prop:"mainHeader"}},[e("Select",{attrs:{loading:t.userLoading,"not-found-text":"该部门暂无用户数据",multiple:"",filterable:"",placeholder:"选择部门领导"},model:{value:t.form.mainHeader,callback:function(e){t.$set(t.form,"mainHeader",e)},expression:"form.mainHeader"}},t._l(t.users,(function(s){return e("Option",{key:s.id,attrs:{value:s.id,label:s.nickname}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(s.nickname))]),e("span",{staticStyle:{color:"#ccc"}},[t._v(t._s(s.username))])])})),1)],1)],1),e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"部门组长",prop:"viceHeader"}},[e("Select",{attrs:{loading:t.userLoading,"not-found-text":"该部门暂无用户数据",multiple:"",filterable:"",placeholder:"选择部门组长"},model:{value:t.form.viceHeader,callback:function(e){t.$set(t.form,"viceHeader",e)},expression:"form.viceHeader"}},t._l(t.users,(function(s){return e("Option",{key:s.id,attrs:{value:s.id,label:s.nickname}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(s.nickname))]),e("span",{staticStyle:{color:"#ccc"}},[t._v(t._s(s.username))])])})),1)],1)],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[e("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[e("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.form.sortOrder,callback:function(e){t.$set(t.form,"sortOrder",e)},expression:"form.sortOrder"}})],1)],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"是否启用",prop:"status"}},[e("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1)],1),e("Col",{attrs:{span:"8"}},[e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"success",ghost:"",shape:"circle",icon:"ios-create-outline",size:"small",disabled:!t.$route.meta.permTypes.includes("edit")},on:{click:t.submitEdit}},[t._v("保存")])],1)],1)],1)],1)],1)],1)],1),e("Divider",{attrs:{dashed:""}},[t._v("部门下用户列表")]),e("Card",[e("Row",[e("Table",{ref:"table",attrs:{loading:t.userLoading,border:"",columns:t.userColumns,data:t.userData,sortable:"custom","row-class-name":t.rowClassName},on:{"on-sort-change":t.changeSort,"on-selection-change":t.changeSelect,"on-row-click":t.rowClick}})],1),e("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[e("Page",{attrs:{current:t.searchForm.pageNumber,total:t.userTotal,"page-size":t.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1),e("Modal",{attrs:{title:t.modalTitle,"mask-closable":!1,width:500,"on-text":"提交"},on:{"on-ok":t.submitAdd},model:{value:t.addOrEditDepartmentModal,callback:function(e){t.addOrEditDepartmentModal=e},expression:"addOrEditDepartmentModal"}},[e("Form",{ref:"formAdd",attrs:{model:t.formAdd,"label-width":85,rules:t.formValidate}},[e("Row",{directives:[{name:"show",rawName:"v-show",value:t.showParent,expression:"showParent"}],attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("FormItem",{attrs:{label:"上级部门："}},[t._v(t._s(t.form.title))])],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("FormItem",{attrs:{label:"部门名称",prop:"title"}},[e("Input",{model:{value:t.formAdd.title,callback:function(e){t.$set(t.formAdd,"title",e)},expression:"formAdd.title"}})],1)],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[e("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[e("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.formAdd.sortOrder,callback:function(e){t.$set(t.formAdd,"sortOrder",e)},expression:"formAdd.sortOrder"}})],1)],1)],1),e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"是否启用",prop:"status"}},[e("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:t.formAdd.status,callback:function(e){t.$set(t.formAdd,"status",e)},expression:"formAdd.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1)],1)],1)],1)],1)],1)},r=[],i=s(7184);const l=t=>(0,i.A_)("/department/getByParentId",t),o=t=>(0,i.j0)("/department/add",t),n=t=>(0,i.j0)("/department/edit",t),d=t=>(0,i.j0)("/department/delByIds",t),c=t=>(0,i.A_)("/department/search",t),m=t=>(0,i.A_)("/user/getByDepartmentId",t),h=t=>(0,i.A_)("/myUser/getByPage",t),u={name:"department-manage",data(){return{userLoading:!0,searchForm:{pageNumber:1,pageSize:10,sort:"createTime",order:"desc",departmentId:""},userData:[],userTotal:0,selectList:[],selectCount:0,selectRow:{},loading:!0,maxHeight:"500px",strict:!0,userLoading:!1,loadingEdit:!0,addOrEditDepartmentModal:!1,selectList:[],selectCount:0,showParent:!1,modalTitle:"",editTitle:"",searchKey:"",form:{id:"",title:"",parentId:"",parentTitle:"",sortOrder:0,status:0},formAdd:{},formValidate:{title:[{required:!0,message:"名称不能为空",trigger:"blur"}],sortOrder:[{required:!0,type:"number",message:"排序值不能为空",trigger:"blur"}]},submitLoading:!1,data:[],dataEdit:[],users:[],userColumns:[{type:"selection",width:60,align:"center",fixed:"left"},{type:"index",width:60,align:"center",fixed:"left"},{title:"用户名",key:"nickname",minWidth:125,sortable:!0,fixed:"left"},{title:"登录账号",key:"username",minWidth:125,sortable:!0},{title:"头像",key:"avatar",width:80,align:"center",render:(t,e)=>t("Avatar",{props:{src:e.row.avatar}})},{title:"所属部门",key:"departmentTitle",minWidth:120},{title:"手机",key:"mobile",minWidth:125,sortable:!0},{title:"邮箱",key:"email",minWidth:180,sortable:!0},{title:"性别",key:"sex",width:70,align:"center"},{title:"类型",key:"type",align:"center",width:100,render:(t,e)=>1==e.row.type?t("div",[t("Tag",{props:{color:"magenta",size:"medium"}},"管理员")]):t("div",[t("Tag",{props:{color:"blue",size:"default"}},"用户")])},{title:"状态",key:"status",align:"center",width:110,render:(t,e)=>t("div",[t("Tag",{props:{color:0==e.row.status?"green":"red",size:"medium"}},0==e.row.status?"启用":"禁用")])}]}},methods:{init(){this.getParentList(),this.getParentListEdit(),this.getUserDataList()},getUserDataList(){var t=this;t.userLoading=!0,h(t.searchForm).then((e=>{t.userLoading=!1,e.success&&(t.userData=e.result.records,t.userTotal=e.result.total)}))},getParentList(){this.loading=!0,l().then((t=>{this.loading=!1,t.success&&(t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[],t._loading=!1)})),this.data=t.result)}))},getParentListEdit(){this.loadingEdit=!0,l().then((t=>{if(this.loadingEdit=!1,t.success){t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[])}));let e={id:"0",title:"一级部门"};t.result.unshift(e),this.dataEdit=t.result}}))},loadData(t,e){l({parentId:t.id}).then((t=>{t.success&&(t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[],t._loading=!1)})),e(t.result))}))},search(){this.searchKey?(this.loading=!0,c({title:this.searchKey}).then((t=>{this.loading=!1,t.success&&(this.data=t.result)}))):this.getParentList()},excelData(){this.$refs.table.exportCsv({filename:"部门用户导出结果"})},selectTree(t){if(t.length>0){for(let a in t[0])null==t[0][a]&&(t[0][a]="");let e=JSON.stringify(t[0]),s=JSON.parse(e);this.editTitle=s.title,this.userLoading=!0,m({departmentId:s.id}).then((t=>{this.userLoading=!1,t.success&&(this.users=t.result,this.form=s)})),this.searchForm.departmentId=t[0].id,this.getUserDataList()}else this.cancelEdit(),this.searchForm.departmentId="",this.getUserDataList()},cancelEdit(){let t=this.$refs.tree.getSelectedNodes()[0];t&&(t.selected=!1),this.$refs.form.resetFields(),delete this.form.id,this.editTitle=""},selectTreeEdit(t){if(t.length>0){for(let a in t[0])null==t[0][a]&&(t[0][a]="");let e=JSON.stringify(t[0]),s=JSON.parse(e);this.form.parentId=s.id,this.form.parentTitle=s.title}},handleReset(){this.$refs.form.resetFields(),this.form.status=0},showSelect(t){this.selectList=t,this.selectCount=t.length},clearSelectAll(){this.$refs.table.selectAll(!1)},submitEdit(){this.$refs.form.validate((t=>{if(t){if(!this.form.id)return void this.$Message.warning("请先点击选择要修改的部门");this.submitLoading=!0,n(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("编辑成功"),this.init(),this.addOrEditDepartmentModal=!1)}))}}))},submitAdd(){this.$refs.formAdd.validate((t=>{t&&(this.submitLoading=!0,o(this.formAdd).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("添加成功"),this.init(),this.addOrEditDepartmentModal=!1)})))}))},tableAdd(t){this.form=t,this.add()},add(){""!=this.form.id&&null!=this.form.id?(this.modalTitle="添加子部门",this.showParent=!0,this.formAdd={parentId:this.form.id,sortOrder:0,status:0},this.addOrEditDepartmentModal=!0):this.addRoot()},addRoot(){this.modalTitle="添加一级部门",this.showParent=!1,this.formAdd={parentId:0,sortOrder:0,status:0},this.addOrEditDepartmentModal=!0},changeSelect(t){this.selectCount=t.length,this.selectList=t},remove(t){this.selectCount=1,this.selectList.push(t),this.delAll()},delAll(){this.selectCount<=0?this.$Message.warning("您还未勾选要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的部门?",loading:!0,onOk:()=>{let t="";this.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),d({ids:t}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("删除成功"),this.selectList=[],this.selectCount=0,this.cancelEdit(),this.init())}))}})},rowClick(t,e){this.selectRow=t},rowClassName(t,e){return t.id==this.selectRow.id?"rowClassNameColor":""}},mounted(){let t=document.documentElement.clientHeight;this.maxHeight=Number(t-287)+"px",this.init()}},p=u;var g=s(1001),f=(0,g.Z)(p,a,r,!1,null,null,null);const v=f.exports}}]);