(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{160:function(e,t){},170:function(e,t){},218:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(45),s=n.n(r),o=n(36),i=n(7),l=n(8),d=n.n(l),u=n(234),j=n(238),b=Object({NODE_ENV:"production",PUBLIC_URL:"/dacade-near-marketplace-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"dacadecontract1.k1ryl.testnet";var x=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:b,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:b,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},p=n(57),h=n(67),O=x("testnet");function m(){return(m=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.connect)(Object.assign({deps:{keyStore:new p.keyStores.BrowserLocalStorageKeyStore}},O));case 2:t=e.sent,window.walletConnection=new p.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new p.Contract(window.walletConnection.account(),O.contractName,{viewMethods:["getProduct","getProducts"],changeMethods:["buyProduct","setProduct"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){window.walletConnection.requestSignIn(O.contractName)}function v(){window.walletConnection.signOut(),window.location.reload()}var y=n(236),N=n(231),C=n(241),k=n(1),S=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(y.a,{children:[Object(k.jsx)(y.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(k.jsxs)(k.Fragment,{children:[n," ",Object(k.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(k.jsx)(N.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(k.jsxs)(y.a.Menu,{className:"shadow-lg border-0",children:[Object(k.jsx)(y.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(k.jsxs)(C.a,{direction:"horizontal",gap:2,children:[Object(k.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(k.jsx)("span",{className:"font-monospace",children:t})]})}),Object(k.jsx)(y.a.Divider,{}),Object(k.jsxs)(y.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(k.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},P=n(59),I=(n(217),function(){return Object(k.jsx)(P.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),F=function(e){var t=e.text;return Object(k.jsxs)("div",{children:[Object(k.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(k.jsx)("span",{className:"text-secondary mx-1",children:t})]})},T=function(e){var t=e.text;return Object(k.jsxs)("div",{children:[Object(k.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(k.jsx)("span",{className:"text-secondary mx-1",children:t})]})},E={text:""};F.defaultProps=E,T.defaultProps=E;var U=n(2),A=n(144),L=n(235),_=n(237),B=n(146),R=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),d=l[0],u=l[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),x=b[0],p=b[1],h=Object(c.useState)(""),O=Object(i.a)(h,2),m=O[0],f=O[1],g=Object(c.useState)(0),w=Object(i.a)(g,2),v=w[0],y=w[1],N=Object(c.useState)(!1),C=Object(i.a)(N,2),S=C[0],P=C[1],I=function(){return P(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(A.a,{onClick:function(){return P(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(k.jsx)("i",{class:"bi bi-plus"})}),Object(k.jsxs)(L.a,{show:S,onHide:I,centered:!0,children:[Object(k.jsx)(L.a.Header,{closeButton:!0,children:Object(k.jsx)(L.a.Title,{children:"New Product"})}),Object(k.jsx)(_.a,{children:Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(B.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(k.jsx)(_.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of product"})}),Object(k.jsx)(B.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(k.jsx)(_.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){u(e.target.value)}})}),Object(k.jsx)(B.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(k.jsx)(_.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){p(e.target.value)}})}),Object(k.jsx)(B.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(k.jsx)(_.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(k.jsx)(B.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(k.jsx)(_.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)}})})]})}),Object(k.jsxs)(L.a.Footer,{children:[Object(k.jsx)(A.a,{variant:"outline-secondary",onClick:I,children:"Close"}),Object(k.jsx)(A.a,{variant:"dark",disabled:!(r&&d&&x&&m&&v),onClick:function(){t({name:r,image:d,description:x,location:m,price:v}),I()},children:"Save product"})]})]})]})},D=n(145),H=n(240),W=n(232),M=function(e){var t=e.product,n=e.buy,c=t.id,a=t.price,r=t.name,s=t.description,o=t.sold,i=t.location,l=t.image,d=t.owner;return Object(k.jsx)(D.a,{children:Object(k.jsxs)(H.a,{className:" h-100",children:[Object(k.jsx)(H.a.Header,{children:Object(k.jsxs)(C.a,{direction:"horizontal",gap:2,children:[Object(k.jsx)("span",{className:"font-monospace text-secondary",children:d}),Object(k.jsxs)(W.a,{bg:"secondary",className:"ms-auto",children:[o," Sold"]})]})}),Object(k.jsx)("div",{className:" ratio ratio-4x3",children:Object(k.jsx)("img",{src:l,alt:r,style:{objectFit:"cover"}})}),Object(k.jsxs)(H.a.Body,{className:"d-flex  flex-column text-center",children:[Object(k.jsx)(H.a.Title,{children:r}),Object(k.jsx)(H.a.Text,{className:"flex-grow-1 ",children:s}),Object(k.jsx)(H.a.Text,{className:"text-secondary",children:Object(k.jsx)("span",{children:i})}),Object(k.jsxs)(A.a,{variant:"outline-dark",onClick:function(){n(c,a)},className:"w-100 py-3",children:["Buy for ",p.utils.format.formatNearAmount(a)," NEAR"]})]})]})},c)},K=function(){return Object(k.jsx)("div",{className:"d-flex justify-content-center",children:Object(k.jsx)(N.a,{animation:"border",role:"status",className:"opacity-25",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},z=n(233),J=n(239),q=1e14;function V(e){return G.apply(this,arguments)}function G(){return(G=Object(o.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyProduct({productId:n},q,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),l=s[0],u=s[1],j=Object(c.useCallback)(Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.t0=a,e.next=5,window.contract.getProducts();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),b=function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{u(!0),(n=t,n.id=Object(J.a)(),n.price=Object(h.parseNearAmount)(n.price+""),window.contract.setProduct({product:n})).then((function(e){j()})),Object(P.b)(Object(k.jsx)(F,{text:"Product added successfully."}))}catch(c){console.log({error:c}),Object(P.b)(Object(k.jsx)(T,{text:"Failed to create a product."}))}finally{u(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V({id:t,price:n}).then((function(e){return j()}));case 3:Object(P.b)(Object(k.jsx)(F,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(P.b)(Object(k.jsx)(T,{text:"Failed to purchase product."}));case 9:return e.prev=9,u(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(k.jsx)(k.Fragment,{children:l?Object(k.jsx)(K,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(k.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(k.jsx)(R,{save:b})]}),Object(k.jsx)(z.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(k.jsx)(M,{product:Object(U.a)({},e),buy:x})}))})]})})},X=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(k.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(k.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(k.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(k.jsx)("img",{src:c,alt:""})}),Object(k.jsx)("h1",{children:t}),Object(k.jsx)("p",{children:"Please connect your wallet to continue."}),Object(k.jsx)(A.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(k.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};X.defaultProps={name:""};var Y=X,Z=n.p+"static/media/sandwich.3520c3ca.jpg",$=(n(218),function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(o.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,f();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(I,{}),e.accountId?Object(k.jsxs)(u.a,{fluid:"md",children:[Object(k.jsx)(j.a,{className:"justify-content-end pt-3 pb-5",children:Object(k.jsx)(j.a.Item,{children:Object(k.jsx)(S,{address:e.accountId,amount:a,symbol:"NEAR",destroy:v})})}),Object(k.jsx)("main",{children:Object(k.jsx)(Q,{})})]}):Object(k.jsx)(Y,{name:"Street Food",login:w,coverImg:Z})]})}),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(224),n(221),n(222);window.nearInitPromise=function(){return m.apply(this,arguments)}().then((function(){s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)($,{})}),document.getElementById("root"))})).catch(console.error),ee()}},[[223,1,2]]]);
//# sourceMappingURL=main.9fb98281.chunk.js.map