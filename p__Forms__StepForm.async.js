(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"7GcH":function(e,t,a){e.exports={stepForm:"antd-pro-pages-forms-step-form-style-stepForm",stepFormText:"antd-pro-pages-forms-step-form-style-stepFormText",result:"antd-pro-pages-forms-step-form-style-result",desc:"antd-pro-pages-forms-step-form-style-desc",information:"antd-pro-pages-forms-step-form-style-information",label:"antd-pro-pages-forms-step-form-style-label",money:"antd-pro-pages-forms-step-form-style-money",uppercase:"antd-pro-pages-forms-step-form-style-uppercase"}},szkQ:function(e,t,a){"use strict";a.r(t);a("aMK7");var l,r,n,s,m,c,o,u,p,i,f=a("NgbC"),d=a("43Yg"),E=a.n(d),y=a("/tCh"),b=a.n(y),h=a("scpF"),g=a.n(h),v=a("O/V9"),x=a.n(v),C=a("8aBX"),N=a.n(C),F=(a("zyem"),a("ZvyF")),w=a("i9FB"),k=a.n(w),A=a("LneV"),I=a("zHco"),S=(a("7UZi"),a("WlXf")),q=(a("W3ek"),a("3N2t")),T=(a("RNnK"),a("Rt+G")),V=a("zAuD"),O=a.n(V),z=(a("oZIX"),a("s6TS")),D=(a("EW7T"),a("cbyi")),j=a("7GcH"),L=a.n(j),Z=D["default"].Option,B={labelCol:{span:5},wrapperCol:{span:19}},G=(l=Object(A["connect"])(function(e){var t=e.form;return{data:t.step}}),r=z["default"].create(),l(n=r(n=function(e){function t(){return E()(this,t),g()(this,x()(t).apply(this,arguments))}return N()(t,e),b()(t,[{key:"render",value:function(){var e=this.props,t=e.form,a=e.dispatch,l=e.data,r=t.getFieldDecorator,n=t.validateFields,s=function(){n(function(e,t){!e&&a&&(a({type:"form/saveStepFormData",payload:t}),a({type:"form/saveCurrentStep",payload:"confirm"}))})};return k.a.createElement(w["Fragment"],null,k.a.createElement(z["default"],{layout:"horizontal",className:L.a.stepForm,hideRequiredMark:!0},k.a.createElement(z["default"].Item,O()({},B,{label:"\u4ed8\u6b3e\u8d26\u6237"}),r("payAccount",{initialValue:l.payAccount,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed8\u6b3e\u8d26\u6237"}]})(k.a.createElement(D["default"],{placeholder:"test@example.com"},k.a.createElement(Z,{value:"ant-design@alipay.com"},"ant-design@alipay.com")))),k.a.createElement(z["default"].Item,O()({},B,{label:"\u6536\u6b3e\u8d26\u6237"}),k.a.createElement(T["default"].Group,{compact:!0},k.a.createElement(D["default"],{defaultValue:"alipay",style:{width:100}},k.a.createElement(Z,{value:"alipay"},"\u652f\u4ed8\u5b9d"),k.a.createElement(Z,{value:"bank"},"\u94f6\u884c\u8d26\u6237")),r("receiverAccount",{initialValue:l.receiverAccount,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u8d26\u6237"},{type:"email",message:"\u8d26\u6237\u540d\u5e94\u4e3a\u90ae\u7bb1\u683c\u5f0f"}]})(k.a.createElement(T["default"],{style:{width:"calc(100% - 100px)"},placeholder:"test@example.com"})))),k.a.createElement(z["default"].Item,O()({},B,{label:"\u6536\u6b3e\u4eba\u59d3\u540d"}),r("receiverName",{initialValue:l.receiverName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}]})(k.a.createElement(T["default"],{placeholder:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}))),k.a.createElement(z["default"].Item,O()({},B,{label:"\u8f6c\u8d26\u91d1\u989d"}),r("amount",{initialValue:l.amount,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8f6c\u8d26\u91d1\u989d"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8bf7\u8f93\u5165\u5408\u6cd5\u91d1\u989d\u6570\u5b57"}]})(k.a.createElement(T["default"],{prefix:"\uffe5",placeholder:"\u8bf7\u8f93\u5165\u91d1\u989d"}))),k.a.createElement(z["default"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:B.wrapperCol.span,offset:B.labelCol.span}},label:""},k.a.createElement(q["default"],{type:"primary",onClick:s},"\u4e0b\u4e00\u6b65"))),k.a.createElement(S["default"],{style:{margin:"40px 0 24px"}}),k.a.createElement("div",{className:L.a.desc},k.a.createElement("h3",null,"\u8bf4\u660e"),k.a.createElement("h4",null,"\u8f6c\u8d26\u5230\u652f\u4ed8\u5b9d\u8d26\u6237"),k.a.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002"),k.a.createElement("h4",null,"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"),k.a.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002")))}}]),t}(k.a.PureComponent))||n)||n),H=G,P=(a("5b8L"),a("8XQD")),X=a("mK77"),K=a.n(X),M=a("AoqS"),R=a.n(M),W=a("+n12"),J={labelCol:{span:5},wrapperCol:{span:19}},Q=(s=Object(A["connect"])(function(e){var t=e.form,a=e.loading;return{submitting:a.effects["form/submitStepForm"],data:t.step}}),m=z["default"].create(),s(c=m(c=function(e){function t(){return E()(this,t),g()(this,x()(t).apply(this,arguments))}return N()(t,e),b()(t,[{key:"render",value:function(){var e=this.props,t=e.form,a=e.data,l=e.dispatch,r=e.submitting,n=t.getFieldDecorator,s=t.validateFields,m=function(){R.a.push("/form/step-form/info")},c=function(e){e.preventDefault(),s(function(e,t){e||l({type:"form/submitStepForm",payload:K()({},a,t)})})};return k.a.createElement(z["default"],{layout:"horizontal",className:L.a.stepForm},k.a.createElement(P["default"],{closable:!0,showIcon:!0,message:"\u786e\u8ba4\u8f6c\u8d26\u540e\uff0c\u8d44\u91d1\u5c06\u76f4\u63a5\u6253\u5165\u5bf9\u65b9\u8d26\u6237\uff0c\u65e0\u6cd5\u9000\u56de\u3002",style:{marginBottom:24}}),k.a.createElement(z["default"].Item,O()({},J,{className:L.a.stepFormText,label:"\u4ed8\u6b3e\u8d26\u6237"}),a.payAccount),k.a.createElement(z["default"].Item,O()({},J,{className:L.a.stepFormText,label:"\u6536\u6b3e\u8d26\u6237"}),a.receiverAccount),k.a.createElement(z["default"].Item,O()({},J,{className:L.a.stepFormText,label:"\u6536\u6b3e\u4eba\u59d3\u540d"}),a.receiverName),k.a.createElement(z["default"].Item,O()({},J,{className:L.a.stepFormText,label:"\u8f6c\u8d26\u91d1\u989d"}),k.a.createElement("span",{className:L.a.money},a.amount),k.a.createElement("span",{className:L.a.uppercase},"\uff08",Object(W["a"])(a.amount),"\uff09")),k.a.createElement(S["default"],{style:{margin:"24px 0"}}),k.a.createElement(z["default"].Item,O()({},J,{label:"\u652f\u4ed8\u5bc6\u7801",required:!1}),n("password",{initialValue:"123456",rules:[{required:!0,message:"\u9700\u8981\u652f\u4ed8\u5bc6\u7801\u624d\u80fd\u8fdb\u884c\u652f\u4ed8"}]})(k.a.createElement(T["default"],{type:"password",autoComplete:"off",style:{width:"80%"}}))),k.a.createElement(z["default"].Item,{style:{marginBottom:8},wrapperCol:{xs:{span:24,offset:0},sm:{span:J.wrapperCol.span,offset:J.labelCol.span}},label:""},k.a.createElement(q["default"],{type:"primary",onClick:c,loading:r},"\u63d0\u4ea4"),k.a.createElement(q["default"],{onClick:m,style:{marginLeft:8}},"\u4e0a\u4e00\u6b65")))}}]),t}(k.a.PureComponent))||c)||c),U=Q,Y=(a("1Lxf"),a("Ua38")),$=(a("vZHA"),a("AMvt")),_=a("ALo4"),ee=(o=Object(A["connect"])(function(e){var t=e.form;return{data:t.step}}),o(u=function(e){function t(){return E()(this,t),g()(this,x()(t).apply(this,arguments))}return N()(t,e),b()(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.dispatch,l=function(){a&&a({type:"form/saveCurrentStep",payload:"info"})},r=k.a.createElement("div",{className:L.a.information},k.a.createElement(Y["default"],null,k.a.createElement($["default"],{xs:24,sm:8,className:L.a.label},"\u4ed8\u6b3e\u8d26\u6237\uff1a"),k.a.createElement($["default"],{xs:24,sm:16},t.payAccount)),k.a.createElement(Y["default"],null,k.a.createElement($["default"],{xs:24,sm:8,className:L.a.label},"\u6536\u6b3e\u8d26\u6237\uff1a"),k.a.createElement($["default"],{xs:24,sm:16},t.receiverAccount)),k.a.createElement(Y["default"],null,k.a.createElement($["default"],{xs:24,sm:8,className:L.a.label},"\u6536\u6b3e\u4eba\u59d3\u540d\uff1a"),k.a.createElement($["default"],{xs:24,sm:16},t.receiverName)),k.a.createElement(Y["default"],null,k.a.createElement($["default"],{xs:24,sm:8,className:L.a.label},"\u8f6c\u8d26\u91d1\u989d\uff1a"),k.a.createElement($["default"],{xs:24,sm:16},k.a.createElement("span",{className:L.a.money},t.amount)," \u5143"))),n=k.a.createElement(w["Fragment"],null,k.a.createElement(q["default"],{type:"primary",onClick:l},"\u518d\u8f6c\u4e00\u7b14"),k.a.createElement(q["default"],null,"\u67e5\u770b\u8d26\u5355"));return k.a.createElement(_["a"],{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u9884\u8ba1\u4e24\u5c0f\u65f6\u5185\u5230\u8d26",extra:r,actions:n,className:L.a.result})}}]),t}(k.a.PureComponent))||u),te=ee,ae=a("Zpge"),le=a.n(ae),re=F["a"].Step,ne=(p=Object(A["connect"])(function(e){var t=e.form;return{current:t.current}}),p(i=function(e){function t(){return E()(this,t),g()(this,x()(t).apply(this,arguments))}return N()(t,e),b()(t,[{key:"getCurrentStep",value:function(){var e=this.props.current;switch(e){case"info":return 0;case"confirm":return 1;case"result":return 2;default:return 0}}},{key:"render",value:function(){var e,t=this.getCurrentStep();return e=1===t?k.a.createElement(U,null):2===t?k.a.createElement(te,null):k.a.createElement(H,null),k.a.createElement(I["a"],{content:"\u5c06\u4e00\u4e2a\u5197\u957f\u6216\u7528\u6237\u4e0d\u719f\u6089\u7684\u8868\u5355\u4efb\u52a1\u5206\u6210\u591a\u4e2a\u6b65\u9aa4\uff0c\u6307\u5bfc\u7528\u6237\u5b8c\u6210\u3002"},k.a.createElement(f["default"],{bordered:!1},k.a.createElement(w["Fragment"],null,k.a.createElement(F["a"],{current:t,className:le.a.steps},k.a.createElement(re,{title:"\u586b\u5199\u8f6c\u8d26\u4fe1\u606f"}),k.a.createElement(re,{title:"\u786e\u8ba4\u8f6c\u8d26\u4fe1\u606f"}),k.a.createElement(re,{title:"\u5b8c\u6210"})),e)))}}]),t}(w["PureComponent"]))||i);t["default"]=ne}}]);