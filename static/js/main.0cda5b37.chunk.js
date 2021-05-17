(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{112:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(94),s=a.n(c),o=(a(112),a(15)),i=a.n(o),d=a(20),u=a(4),l=a(5),p=a(7),j=a(6),h=a(269),b=a(266),f=a(9),v=a.p+"static/media/covid.4bf201db.jpg",x=a(264),O=a(268),m=a(265),g=a(272),y=a(267),C=a(95),w=a.n(C),S=a(3),D=Object(x.a)({header:{background:"#F5F5F5",padding:10}}),k=function(e){var t=e.cardtitle,a=e.value,n=e.desc,r=e.lastUpdate,c=D();return Object(S.jsxs)(m.a,{component:g.a,style:{margin:20,borderBottom:"10px solid red"},children:[Object(S.jsx)(h.a,{className:c.header,children:Object(S.jsx)(b.a,{variant:"h5",color:"textSecondary",children:t})}),Object(S.jsxs)(y.a,{children:[Object(S.jsx)(b.a,{variant:"h5",children:Object(S.jsx)(w.a,{start:0,end:a,duration:2,separator:","})}),Object(S.jsx)(b.a,{children:n}),Object(S.jsx)(b.a,{children:new Date(r).toDateString()})]})]})},N=Object(x.a)({container:{fontSize:"3vw",color:"Red",alignItems:"center",display:"flex"},component:{margin:"50px 0",flexDirection:"column",display:"flex",alignItems:"center"}}),U=function(e){var t=e.data,a=t.confirmed,n=t.deaths,r=t.recovered,c=t.lastUpdate,s=N();return a?Object(S.jsxs)(h.a,{className:s.component,children:[Object(S.jsx)(b.a,{className:s.container,variant:"h4",gutterBottom:!0,children:"World Wide (C\ud83d\ude08VID-19) Cases Dashboard"}),Object(S.jsxs)(m.a,{container:!0,spacing:3,justify:"center",children:[Object(S.jsx)(k,{cardtitle:"Infected",value:a.value,desc:"Number of Infected Cases of Covid-19",lastUpdate:c}),Object(S.jsx)(k,{cardtitle:"Recoverd",value:r.value,desc:"Number of Recoverd from Covid-19",lastUpdate:c}),Object(S.jsx)(k,{cardtitle:"Deaths",value:n.value,desc:"Number of Deaths Caused by Covid-19",lastUpdate:c})]})]}):Object(S.jsx)(O.a,{color:"secondary"})},F=a(63),I=a.n(F),R="https://covid19.mathdro.id/api",z=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n,r,c,s,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=R,t&&(a="".concat(R,"/countries/").concat(t)),e.prev=2,e.next=5,I.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,s=r.deaths,o=r.recovered,d=r.lastUpdate,e.abrupt("return",{confirmed:c,deaths:s,recovered:o,lastUpdate:d});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(R,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(103),T=a(270),L=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(B.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(b.a,{style:{marginBottom:20,fontSize:"3vw"},variant:"h4",color:"textSecondary",children:"Reported Cases or Deaths by countries or Territoty"}),Object(S.jsxs)(T.a,{onChange:function(e){return t(e.target.value)},children:[Object(S.jsx)("option",{value:"",children:" Worldwide"}),c.map((function(e,t){return Object(S.jsx)("option",{value:e,children:e},t)}))]})]})},P=a(102),E=Object(x.a)({container:{width:"75%",marginTop:20}}),V=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=E();return Object(S.jsx)(h.a,{className:c.container,children:a?Object(S.jsx)(P.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"Peoples",data:[a.value,n.value,r.value],backgroundColor:["rgba(255,0,0, 0.6)","rgba(0, 180, 0, 0.6)","rgba(118, 118, 118, 1)"]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in country"}}}):""})},W=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(a);case 2:n=t.sent,e.setState({data:n,country:a}),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:t=e.sent,this.setState({data:t}),console.log(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return Object(S.jsxs)(h.a,{className:this.props.classes.container,children:[Object(S.jsx)(h.a,{className:this.props.classes.header,children:"COVID-19 CORONAVIRUS UPDATES"}),Object(S.jsxs)(b.a,{className:this.props.classes.lastupdate,children:["Last Updated: ",e.lastUpdate&&new Date(e.lastUpdate).toLocaleDateString()]}),Object(S.jsx)("img",{style:{width:350},src:v,alt:"covid19"}),Object(S.jsx)(b.a,{className:this.props.classes.devloper,children:"Developed by Akash Soni"}),Object(S.jsx)(U,{data:e}),Object(S.jsx)(L,{handleCountryChange:this.handleCountryChange}),Object(S.jsx)(V,{data:e})]})}}]),a}(n.Component),J=Object(f.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},header:{background:"#F5F5F5",width:400,textAlign:"center",fontSize:20,padding:10,color:"#777"},lastupdate:{color:"#777",fontSize:18},devloper:{color:"#888",fontSize:18,fontStyle:"oblique"}})(W),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,274)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(J,{})}),document.getElementById("root")),M()}},[[248,1,2]]]);
//# sourceMappingURL=main.0cda5b37.chunk.js.map