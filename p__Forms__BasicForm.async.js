(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"2AEw":function(e,a,t){"use strict";t.r(a);t("aMK7");var l,r,m,s,n=t("NgbC"),o=(t("W3ek"),t("3N2t")),i=(t("R2Cc"),t("m1U6")),c=(t("5f78"),t("WQWD")),d=(t("Dc3K"),t("wt4a")),p=(t("lwKJ"),t("/Vs6")),u=t("zAuD"),f=t.n(u),g=t("43Yg"),b=t.n(g),E=t("/tCh"),h=t.n(E),M=t("scpF"),F=t.n(M),v=t("O/V9"),y=t.n(v),w=t("8aBX"),O=t.n(w),j=(t("RNnK"),t("Rt+G")),q=(t("lbuK"),t("ggth")),C=(t("EW7T"),t("cbyi")),R=(t("oZIX"),t("s6TS")),k=t("i9FB"),x=t.n(k),N=t("LneV"),A=t("figi"),T=t("zHco"),U=t("Zpge"),D=t.n(U),K=R["default"].Item,S=C["default"].Option,V=q["default"].RangePicker,B=j["default"].TextArea,W=(l=Object(N["connect"])(function(e){var a=e.loading;return{submitting:a.effects["form/submitRegularForm"]}}),r=R["default"].create(),l(m=r((s=function(e){function a(){var e,t;b()(this,a);for(var l=arguments.length,r=new Array(l),m=0;m<l;m++)r[m]=arguments[m];return t=F()(this,(e=y()(a)).call.apply(e,[this].concat(r))),t.handleSubmit=function(e){var a=t.props,l=a.dispatch,r=a.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,a){e||l({type:"form/submitRegularForm",payload:a})})},t}return O()(a,e),h()(a,[{key:"render",value:function(){var e=this.props.submitting,a=this.props.form,t=a.getFieldDecorator,l=a.getFieldValue,r={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},m={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return x.a.createElement(T["a"],{title:x.a.createElement(A["FormattedMessage"],{id:"app.forms.basic.title"}),content:x.a.createElement(A["FormattedMessage"],{id:"app.forms.basic.description"})},x.a.createElement(n["default"],{bordered:!1},x.a.createElement(R["default"],{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},x.a.createElement(K,f()({},r,{label:x.a.createElement(A["FormattedMessage"],{id:"form.title.label"})}),t("title",{rules:[{required:!0,message:Object(A["formatMessage"])({id:"validation.title.required"})}]})(x.a.createElement(j["default"],{placeholder:Object(A["formatMessage"])({id:"form.title.placeholder"})}))),x.a.createElement(K,f()({},r,{label:x.a.createElement(A["FormattedMessage"],{id:"form.date.label"})}),t("date",{rules:[{required:!0,message:Object(A["formatMessage"])({id:"validation.date.required"})}]})(x.a.createElement(V,{style:{width:"100%"},placeholder:[Object(A["formatMessage"])({id:"form.date.placeholder.start"}),Object(A["formatMessage"])({id:"form.date.placeholder.end"})]}))),x.a.createElement(K,f()({},r,{label:x.a.createElement(A["FormattedMessage"],{id:"form.goal.label"})}),t("goal",{rules:[{required:!0,message:Object(A["formatMessage"])({id:"validation.goal.required"})}]})(x.a.createElement(B,{style:{minHeight:32},placeholder:Object(A["formatMessage"])({id:"form.goal.placeholder"}),rows:4}))),x.a.createElement(K,f()({},r,{label:x.a.createElement(A["FormattedMessage"],{id:"form.standard.label"})}),t("standard",{rules:[{required:!0,message:Object(A["formatMessage"])({id:"validation.standard.required"})}]})(x.a.createElement(B,{style:{minHeight:32},placeholder:Object(A["formatMessage"])({id:"form.standard.placeholder"}),rows:4}))),x.a.createElement(K,f()({},r,{label:x.a.createElement("span",null,x.a.createElement(A["FormattedMessage"],{id:"form.client.label"}),x.a.createElement("em",{className:D.a.optional},x.a.createElement(A["FormattedMessage"],{id:"form.optional"}),x.a.createElement(d["a"],{title:x.a.createElement(A["FormattedMessage"],{id:"form.client.label.tooltip"})},x.a.createElement(p["default"],{type:"info-circle-o",style:{marginRight:4}}))))}),t("client")(x.a.createElement(j["default"],{placeholder:Object(A["formatMessage"])({id:"form.client.placeholder"})}))),x.a.createElement(K,f()({},r,{label:x.a.createElement("span",null,x.a.createElement(A["FormattedMessage"],{id:"form.invites.label"}),x.a.createElement("em",{className:D.a.optional},x.a.createElement(A["FormattedMessage"],{id:"form.optional"})))}),t("invites")(x.a.createElement(j["default"],{placeholder:Object(A["formatMessage"])({id:"form.invites.placeholder"})}))),x.a.createElement(K,f()({},r,{label:x.a.createElement("span",null,x.a.createElement(A["FormattedMessage"],{id:"form.weight.label"}),x.a.createElement("em",{className:D.a.optional},x.a.createElement(A["FormattedMessage"],{id:"form.optional"})))}),t("weight")(x.a.createElement(c["default"],{placeholder:Object(A["formatMessage"])({id:"form.weight.placeholder"}),min:0,max:100})),x.a.createElement("span",{className:"ant-form-text"},"%")),x.a.createElement(K,f()({},r,{label:x.a.createElement(A["FormattedMessage"],{id:"form.public.label"}),help:x.a.createElement(A["FormattedMessage"],{id:"form.public.label.help"})}),x.a.createElement("div",null,t("public",{initialValue:"1"})(x.a.createElement(i["default"].Group,null,x.a.createElement(i["default"],{value:"1"},x.a.createElement(A["FormattedMessage"],{id:"form.public.radio.public"})),x.a.createElement(i["default"],{value:"2"},x.a.createElement(A["FormattedMessage"],{id:"form.public.radio.partially-public"})),x.a.createElement(i["default"],{value:"3"},x.a.createElement(A["FormattedMessage"],{id:"form.public.radio.private"})))),x.a.createElement(K,{style:{marginBottom:0}},t("publicUsers")(x.a.createElement(C["default"],{mode:"multiple",placeholder:Object(A["formatMessage"])({id:"form.publicUsers.placeholder"}),style:{margin:"8px 0",display:"2"===l("public")?"block":"none"}},x.a.createElement(S,{value:"1"},x.a.createElement(A["FormattedMessage"],{id:"form.publicUsers.option.A"})),x.a.createElement(S,{value:"2"},x.a.createElement(A["FormattedMessage"],{id:"form.publicUsers.option.B"})),x.a.createElement(S,{value:"3"},x.a.createElement(A["FormattedMessage"],{id:"form.publicUsers.option.C"}))))))),x.a.createElement(K,f()({},m,{style:{marginTop:32}}),x.a.createElement(o["default"],{type:"primary",htmlType:"submit",loading:e},x.a.createElement(A["FormattedMessage"],{id:"form.submit"})),x.a.createElement(o["default"],{style:{marginLeft:8}},x.a.createElement(A["FormattedMessage"],{id:"form.save"}))))))}}]),a}(k["PureComponent"]),m=s))||m)||m);a["default"]=W}}]);