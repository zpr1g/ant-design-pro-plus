(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"38mm":function(e,t,a){"use strict";a.r(t);a("I1Ti");var r=a("r3a+"),l=a("BG4o"),n=a.n(l),i=(a("JrgL"),a("3wpp")),o=(a("lwKJ"),a("/Vs6")),s=(a("W3ek"),a("3N2t")),c=(a("4Axb"),a("/Vp4")),d=a("zAuD"),u=a.n(d),m=(a("pOT0"),a("/3qE")),p=(a("VHrr"),a("icTy")),f=a("43Yg"),g=a.n(f),y=a("/tCh"),b=a.n(y),h=a("scpF"),v=a.n(h),P=a("O/V9"),w=a.n(P),I=a("8aBX"),E=a.n(I),V=a("i9FB"),C=a.n(V),k=a("LneV"),x=a("94jW"),N=(a("aMK7"),a("NgbC")),_=a("rXjv"),q=a.n(_),R=a("xNuS"),L=a("3Yf3"),S=a.n(L),j=function(e){var t=e.record,a=e.actions,r=e.recordSelection,l=e.checkable,n=r.selectedRowKeys,i=r.onSelectChange;return C.a.createElement(N["default"],{hoverable:!0,className:S.a.card,actions:a,cover:C.a.createElement("div",{className:S.a.cardCover,style:{backgroundImage:"url(https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"}}),onClick:function(){l&&(n.includes(t.id)?i(n.filter(function(e){return e!==t.id})):i([].concat(q()(n),[t.id])))}},C.a.createElement(N["default"].Meta,{avatar:C.a.createElement(p["a"],{className:S.a.avatar,src:t.avatar}),title:C.a.createElement("a",null,t.name),description:C.a.createElement(R["a"],{lines:2},"\u6635\u79f0\uff1a",t.nickname,"\uff0c \u751f\u65e5: ",t.birthday,"\u3002",C.a.createElement("br",null),"\u7279\u957f\uff1a",t.speciality,"\uff0c \u7231\u597d\uff1a",t.habit,"\u3002")}))},A=a("V9R/"),M=(a("jTdf"),a("2snb"));function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return[{type:"custom",field:"organ_id",formItemProps:{label:"\u6240\u5c5e\u56e2\u4f53"},fieldProps:{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6240\u5c5e\u56e2\u4f53"}],initialValue:e.organ_id},component:C.a.createElement(M["a"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u6240\u5c5e\u56e2\u4f53",disabled:"update"===t})},{type:"date",field:"date",formItemProps:{label:"\u65e5\u671f"},fieldProps:{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u65e5\u671f\uff01"}],initialValue:e.date}},{type:"datetime",field:"datetime",formItemProps:{label:"\u65e5\u671f\u65f6\u95f4"},fieldProps:{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u65e5\u671f\u65f6\u95f4\uff01"}],initialValue:e.datetime}},{type:"number",field:"number",formItemProps:{label:"\u6570\u5b57"},fieldProps:{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6570\u5b57\uff01"}],initialValue:e.number}},{type:"select",field:"select",formItemProps:{label:"\u9009\u62e9"},fieldProps:{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u9009\u62e9\uff01"}],initialValue:e.select},componentProps:{options:[{text:"\u94f6\u6cb3",value:"yh"}]}},{type:"textarea",field:"textarea",formItemProps:{label:"\u6587\u672c\u6846"},fieldProps:{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6587\u672c\u6846\uff01"}],initialValue:e.textarea},componentProps:{autosize:{minRows:2,maxRows:6}}},{type:"password",field:"password",formItemProps:{label:"\u5bc6\u7801"},fieldProps:{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"}],initialValue:e.password}},{type:"picture",field:"picture",formItemProps:{label:"\u56fe\u7247"},fieldProps:{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u56fe\u7247\uff01"}],initialValue:e.picture}},{type:"switch",field:"switch",formItemProps:{label:"\u5f00\u5173"},fieldProps:{initialValue:e.switch}},{type:"slider",field:"slider",formItemProps:{label:"\u6ed1\u52a8\u8f93\u5165\u6761"},fieldProps:{initialValue:e.slider}},{type:"datetime-range",field:"period",formItemProps:{label:"\u6709\u6548\u671f"},fieldProps:{initialValue:e.period}},{type:"file-dragger",field:"file",formItemProps:{label:"\u6587\u4ef6"},fieldProps:{initialValue:e.file}},{type:"default/string",field:"name",formItemProps:{label:"\u59d3\u540d"},fieldProps:{initialValue:e.name}}]}var W,B,J,K=a("UVjl"),z=a.n(K),F=(W=Object(k["connect"])(function(e){var t=e[A["modelName"]],a=e.loading;return{data:t.data,detail:t.detail,fetchLoading:a.effects["".concat(A["modelName"],"/fetch")],detailLoading:a.effects["".concat(A["modelName"],"/detail")],createLoading:a.effects["".concat(A["modelName"],"/create")],updateLoading:a.effects["".concat(A["modelName"],"/update")],deleteLoading:a.effects["".concat(A["modelName"],"/delete")]}}),W((J=function(e){function t(){var e,a;g()(this,t);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return a=v()(this,(e=w()(t)).call.apply(e,[this].concat(l))),a.state={customModelVisible:!1,selectedRows:[]},a.queryArgsConfig=[{type:"string",field:"name",formItemProps:{label:"\u59d3\u540d"}},{type:"string",field:"nickname",formItemProps:{label:"\u6635\u79f0"}},{type:"string",field:"habit",formItemProps:{label:"\u7231\u597d"}}],a.columns=[{title:"\u516c\u5f0f\u7167",dataIndex:"avatar",render:function(e){return C.a.createElement("div",{className:z.a.avatarWrapper},C.a.createElement(p["a"],{src:e,size:"large"}))}},{title:"\u59d3\u540d",dataIndex:"name",render:function(e,t){return C.a.createElement("a",{href:t.profile,target:"_blank",rel:"noreferrer noopener"},e)}},{title:"\u6635\u79f0",dataIndex:"nickname"},{title:"\u751f\u65e5",dataIndex:"birthday"},{title:"\u7279\u957f",dataIndex:"speciality"},{title:"\u7231\u597d",dataIndex:"habit"}],a}return E()(t,e),b()(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.customModelVisible,r=t.selectedRows,l={extraActions:[{key:13,title:"\u5916\u52a1",handleClick:function(e){return m["default"].info("\u8c03\u7528 ".concat(e.name," \u7684\u5916\u52a1\u4e8b\u4ef6"))}},{key:14,title:"\u517c\u804c",handleClick:function(e){return m["default"].info("\u8c03\u7528 ".concat(e.name," \u7684\u517c\u804c\u4e8b\u4ef6"))}},{key:15,title:"\u5f39\u51fa\u5b50\u7ec4\u4ef6",handleClick:function(){return e.setState({customModelVisible:!0})}}],confirmKeys:[[4,function(e){return"\u786e\u5b9a\u67e5\u770b ".concat(e.name," \u7684\u8be6\u60c5\u5417\uff1f")}],[12,function(){return"\u786e\u5b9a\u5220\u9664\u5417\uff1f"}],[13,function(e){return"\u786e\u5b9a\u8ba9 ".concat(e.name," \u51fa\u5916\u52a1\u5417\uff1f")}],14]};return C.a.createElement(x["Curd"],u()({modelName:A["modelName"]},this.props),C.a.createElement(x["Curd"].QueryPanel,{queryArgsConfig:this.queryArgsConfig}),C.a.createElement(x["Curd"].CurdList,u()({renderItem:j,actionsConfig:l,setFormItemsConfig:T,popupType:"modal",popupProps:{modalConfig:{width:800},cols:2},operators:[C.a.createElement(O,{key:"more",selectedRows:r})],selectedRows:r,onSelectRow:function(t){return e.setState({selectedRows:t})}},this.props)),C.a.createElement(Y,{title:"\u5f39\u51fa\u5b50\u7ec4\u4ef6",visible:a,onCancel:function(){return e.setState({customModelVisible:!1})},okButtonProps:{style:{display:"none"}}}))}}]),t}(V["PureComponent"]),B=J))||B);t["default"]=F;function O(e){var t=e.__curd__;if(!t)return null;var a=t.state.selectedRows,r=C.a.createElement(c["default"],null,C.a.createElement(c["default"].Item,{key:"remove"},"\u5220\u9664"),C.a.createElement(c["default"].Item,{key:"approval"},"\u6279\u91cf\u5ba1\u6279"));return a.length>0&&C.a.createElement("span",null,C.a.createElement(s["default"],null,"\u6279\u91cf\u64cd\u4f5c"),C.a.createElement(i["default"],{overlay:r},C.a.createElement(s["default"],null,"\u66f4\u591a\u64cd\u4f5c ",C.a.createElement(o["default"],{type:"down"}))))}function Y(e){var t=e.__curd__,a=n()(e,["__curd__"]);return t?C.a.createElement(r["default"],a,C.a.createElement(s["default"],{onClick:function(){t.handleSearch(),a.onCancel()}},"\u91cd\u65b0\u641c\u7d22")):null}},"3Yf3":function(e,t,a){e.exports={cardCover:"antd-pro-pages-enhance-curd-custom-page-custom-card-index-cardCover",avatar:"antd-pro-pages-enhance-curd-custom-page-custom-card-index-avatar"}},UVjl:function(e,t,a){e.exports={avatarWrapper:"antd-pro-pages-enhance-curd-custom-page-index-avatarWrapper"}}}]);