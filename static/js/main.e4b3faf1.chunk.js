(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),s=t.n(r),c=(t(14),t(1)),o=t(2),i=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.role,l.a.createElement("br",null),e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.png",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,"+91-9566781083",l.a.createElement("br",null),e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))})))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))})))))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map((function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),alt:"pic",className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))}))))))}}]),a}(n.Component),f=(n.Component,t(6)),b=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).submitForm=t.submitForm.bind(Object(f.a)(t)),t.state={status:""},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.status;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{class:"main-content"},l.a.createElement("div",null,l.a.createElement("h2",null,"Contact Me")),l.a.createElement("br",null),l.a.createElement("div",{class:"content-body"},l.a.createElement("form",{onSubmit:this.submitForm,method:"POST",action:"https://formspree.io/mjvoyegg"},l.a.createElement("input",{type:"email",name:"email",placeholder:"Your email",required:!0}),l.a.createElement("textarea",{name:"message",placeholder:"Your message",required:!0}),"SUCCESS"===e?l.a.createElement("p",{class:"text"},"Thanks!"):l.a.createElement("button",null,"Submit"),"ERROR"===e&&l.a.createElement("p",{class:"text"},"Ooops! There was an error.")))))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),l=new XMLHttpRequest;l.open(t.method,t.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},l.send(n)}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"}))),l.a.createElement("p",null,"Ashfaaq IIM")))}}]),a}(n.Component),g={imagebaseurl:"https://iimashfaaq.github.io/",name:"Ashfaaq IIM",role:"CS Student | Autodidact",linkedinId:"",roleDescription:"Self-driven and motivated Software student adept at developing and implementing new software platforms. Possessing great analytical skills, ability to work in team environments and strong attention to detail.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/ashfaaq-i-i-m-b40a60136/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/iimashfaaq",className:"fa fa-github"}],aboutme:"I am currently a 3rd year student at PSG College of Technology and pursuing my Masters in Software systems. I have chosen an industry where I can help improve the world for our future generation and make ours a little bit more fun. Fluent with programming languages such as C++, C#, Python, ReactJs and Java. Comfortable with web development.",address:"India",website:"https://iimashfaaq.github.io",education:[{UniversityName:"PSG College of Technology",specialization:"MSc Software Systems",MonthOfPassing:"May",YearOfPassing:"2022",Achievements:"CGPA: 8.3"}],skillsDescription:"",skills:[{skillname:"Java"},{skillname:"C"},{skillname:"Reactjs"}],portfolio:[{name:"HACK[IN]",description:"An international level symposium event created on ReactJs for the UI and NodeJs as backend API calls. Players data was stored using MongoDB hosted with the help of aws servers. All commits were made on GitLab platform.",imgurl:"../public/images/portfolio/console.jpg"},{name:"P2P Group Chat",description:"A python based group chat that implements a centralized  group chat system. The chat system, designed using the Tkinter package, allows chat between peers through a central host.",imgurl:"../public/images/portfolio/coffee.jpg"},{name:"WannaFry",description:"An implementation of a Ransomware developed in Python with an intention to understand how a Ransomware attack is deployed. This ransomware encrypts the target directories entirely and the encryption of files is done with the PyCrypto module.",imgurl:"images/portfolio/project2.png"},{name:"RC-Boat",description:"a remote controlled boat compatible with any bluetooth enabled device. This DIY project used an Arduino board as its heart and a motor driver which controlled the back propellers of the boat.",imgurl:"images/portfolio/phone.jpg"}]},w=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:g}),l.a.createElement(d,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(b,{resumeData:g}),l.a.createElement(v,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e4b3faf1.chunk.js.map