(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(21),i=n.n(r),s=(n(28),n(29),n(9)),o=n(4),l=(n(11),n(16),n(12)),j=n(0);var u=function(){var e=localStorage.getItem("username");return e?Object(j.jsx)("div",{className:"header-conteiner",children:Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)(s.b,{to:"/",children:"L\xe6se"}),Object(j.jsx)(l.a,{})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)(s.b,{to:"/create",children:"Criar"}),Object(j.jsx)(s.b,{children:e})]})]})}):Object(j.jsx)("div",{className:"header-conteiner",children:Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)(s.b,{to:"/",children:"L\xe6se"}),Object(j.jsx)(l.a,{})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)(s.b,{to:"/login",children:"Entrar"}),Object(j.jsx)(s.b,{to:"/sigup",children:"Cadastrar-se"})]})]})})},d=n(3);var b=function(e){return Object(j.jsxs)(s.b,{to:"/post/".concat(e.id),className:"card-conteiner",children:[Object(j.jsx)("div",{id:"title-card",children:e.title}),Object(j.jsx)("div",{id:"author-card",children:e.author})]})};var h=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1];return Object(a.useEffect)((function(){fetch("https://laese-api-com.umbler.net/api/listAllPosts",{method:"GET"}).then((function(e){return e.json()})).then((function(e){"error"===e.status?o(e.error):c(e)}))}),[]),Object(j.jsxs)("div",{className:"publi-conteiner",children:[n.map((function(e){return Object(j.jsx)(b,{id:e._id,title:e.title,author:e.authorName},e._id)})),Object(j.jsx)("div",{className:"msg-error",children:s})]})};var m=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"home-content",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"home-logo",children:[Object(j.jsx)(l.a,{}),Object(j.jsx)("div",{children:"L\xe6se"})]}),Object(j.jsx)("div",{children:"Uma plataforma para publicar seus artigos, tutoriais, conte\xfados e ainda monetizar."})]})}),Object(j.jsx)(h,{})]})};var O=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)(""),u=Object(d.a)(l,2),b=u[0],h=u[1];return Object(j.jsxs)("div",{className:"conteiner",children:[Object(j.jsx)("div",{id:"title",children:"Login"}),Object(j.jsxs)("div",{className:"input",children:["Email: ",Object(j.jsx)("input",{onChange:function(e){return c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"input",children:["Senha:",Object(j.jsx)("input",{type:"password",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsx)("button",{onClick:function(){var e={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:n,password:s})};fetch("https://laese-api-com.umbler.net/api/login",e).then((function(e){return e.json()})).then((function(e){"error"===e.status?h(e.error):(localStorage.setItem("token",e.token),localStorage.setItem("username",e.username),window.location="/plataform/")}))},className:"btn-entry",children:"Entrar"}),Object(j.jsx)("div",{className:"msg-error",children:b})]})};var p=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)(""),u=Object(d.a)(l,2),b=u[0],h=u[1],m=Object(a.useState)(""),O=Object(d.a)(m,2),p=O[0],x=O[1],f=Object(a.useState)(""),v=Object(d.a)(f,2),g=v[0],N=v[1];return Object(j.jsxs)("div",{className:"conteiner",children:[Object(j.jsx)("div",{id:"title",children:"Cadastrar-se"}),Object(j.jsxs)("div",{className:"input",children:["Nome: ",Object(j.jsx)("input",{onChange:function(e){return c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"input",children:["Usuario: ",Object(j.jsx)("input",{onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"input",children:["Email: ",Object(j.jsx)("input",{onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)("div",{className:"input",children:["Senha: ",Object(j.jsx)("input",{type:"password",onChange:function(e){return x(e.target.value)}})]}),Object(j.jsx)("button",{onClick:function(){n<3&&N("Nome muito curto. M\xednimo 3 caracteres."),s<4&&N("Nome de usu\xe1rio muito curto. M\xednimo 4 caracteres."),p<6&&N("Senha muito curta. M\xednimo 6 caracteres.");var e={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:n,username:s,email:b,password:p})};fetch("https://laese-api-com.umbler.net/api/register",e).then((function(e){return e.json()})).then((function(e){"error"===e.status?N(e.error):(localStorage.setItem("token",e.token),localStorage.setItem("username",e.username),window.location="/plataform/#/chekedEmail")}))},className:"btn-entry",children:"Entrar"}),Object(j.jsx)("div",{className:"msg-error",children:g})]})},x=Math.floor(9990001*Math.random())+1e4,f=localStorage.getItem("token"),v={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({code:x,token:f})};var g=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1];return Object(a.useEffect)((function(){fetch("https://laese-api-com.umbler.net/api/sendEmailVerify",v).then((function(e){return e.json()})).then((function(e){"error"===e.status&&("invalid token"===e.error?window.location="/plataform/#/login":o(e.error))}))}),[]),Object(j.jsxs)("div",{className:"conteiner",children:[Object(j.jsx)("div",{id:"title",children:"Verifique seu Email"}),Object(j.jsx)("div",{children:"Enviamos um email com um codigo, digite aqui embaixo."}),Object(j.jsx)("input",{onChange:function(e){return c(e.target.value)},className:"input"}),Object(j.jsx)("button",{onClick:function(){Number(n)===x?(console.log("ok"+n+x),fetch("https://laese-api-com.umbler.net/api/checkUserEmail",v).then((function(e){return e.json()})).then((function(e){"error"===e.status?"invalid token"===e.error?window.location="/plataform/#/login":o(e.error):window.location="/plataform/#/"}))):o("Codigo invalido")},className:"btn-entry",children:"Verificar"}),Object(j.jsx)("div",{className:"msg-error",children:s})]})},N=n(23);var S=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)(""),b=Object(d.a)(l,2),h=b[0],m=b[1];return Object(j.jsxs)("div",{className:"create-page",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"create-area",children:[Object(j.jsxs)("div",{className:"input",onChange:function(e){return c(e.target.value)},children:["T\xedtulo: ",Object(j.jsx)("input",{})]}),Object(j.jsxs)("div",{id:"editor",children:[Object(j.jsx)(N.a,{apiKey:"i16cx9ndubdl8r7a5fela0gklwy83ce6kivvsm7r9pt4qfsc",init:{height:400,automatic_uploads:!0,plugins:["image code advlist autolink lists link imagetools image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |                           alignleft aligncenter alignright alignjustify |                           bullist numlist outdent indent | removeformat | help "},onEditorChange:function(e,t){o(e)}}),Object(j.jsx)("button",{onClick:function(){if(""===n)return m("O post precisa de um t\xedtulo.");if(""===s)return m("O post precisa de um texto");var e=localStorage.getItem("token"),t={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({token:e,title:n,text:s})};fetch("https://laese-api-com.umbler.net/api/create",t).then((function(e){return e.json()})).then((function(e){console.log(e),"ok"===e.status?window.location="/":"invalid token"===e.error?window.location="plataform/#/login":m(e.error)}))},className:"btn-entry",children:"Criar Post"}),Object(j.jsx)("div",{className:"msg-error",children:h})]})]})]})};var k=function(e){var t=e.match,n=Object(a.useState)(),c=Object(d.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),o=Object(d.a)(s,2),l=o[0],b=o[1],h=t.params.id,m={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({idPost:h})};return Object(a.useEffect)((function(){fetch("https://laese-api-com.umbler.net/api/getPost",m).then((function(e){return e.json()})).then((function(e){"error"===e.status?b(e.error):i(e.file)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"render-post",dangerouslySetInnerHTML:{__html:r}}),";",Object(j.jsx)("div",{className:"msg-error",children:l})]})};var y=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(j.jsx)(o.a,{exact:!0,path:"/login",component:O}),Object(j.jsx)(o.a,{exact:!0,path:"/sigup",component:p}),Object(j.jsx)(o.a,{exact:!0,path:"/chekedEmail",component:g}),Object(j.jsx)(o.a,{exact:!0,path:"/create",component:S}),Object(j.jsx)(o.a,{exact:!0,path:"/post/:id",component:k})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),C()}},[[35,1,2]]]);
//# sourceMappingURL=main.cab8f6cc.chunk.js.map