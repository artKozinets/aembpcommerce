import{jsx as r,jsxs as N}from"@dropins/tools/preact-jsx-runtime.js";import{k as V,n as j,o as S,U as K}from"../chunks/getCart.graphql.js";import"@dropins/tools/event-bus.js";import{a as $}from"../chunks/getCustomer.js";import{p as w}from"../chunks/placeOrder.js";import{C as f,B as H,L as q,c as z,P as G,a as J,S as Q}from"../chunks/ShippingMethods.js";import"@dropins/tools/preact-hooks.js";import{Slot as v,classes as a}from"@dropins/tools/lib.js";import{IllustratedMessage as R,Icon as W,Button as X}from"@dropins/tools/components.js";import{B as Y}from"../chunks/BillToShippingAddress.js";import{O as Z,S as D}from"../chunks/OutOfStock.js";import{useText as k}from"@dropins/tools/i18n.js";import{useState as u,useCallback as rr}from"@dropins/tools/preact-compat.js";import{E as er}from"../chunks/EmptyCart.js";import"@dropins/tools/signals.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/setShippingMethods.js";import"../chunks/setBillingAddress.js";import"../chunks/ErrorBanner.js";import"../chunks/MergedCartBanner.js";const yr="OUT_OF_STOCK",_r=({className:s,slots:e,routeHome:i,onCartProductsUpdate:c,onCheckoutDataUpdate:n,preselectedCartData:t,onSignInClick:C,onSignOutClick:m,...O})=>{const E=V.authenticated,[M,y]=u(!1),[p,h]=u(""),_=p!=="",[P,b]=u(),{data:d,pending:T}=j.value,{data:l,pending:x}=S.value,B=T&&E&&!l,F=k({CheckoutUnexpectedError:"Checkout.ServerError.unexpected"}),L=rr(async()=>{d&&(await w(),y(!0))},[d]),A=o=>{b(o?()=>o:void 0)},U=async()=>{h(""),d&&$()},g=o=>{const I=o instanceof TypeError||o instanceof K?F.CheckoutUnexpectedError:o.message;h(I)};return M?null:_?r(tr,{errorMessage:p,onClick:U}):r(f,{className:s,isLoading:B||x,...O,children:r(f.Main,{blocks:{cartSummaryList:r(v,{name:"CartSummaryList",slot:e==null?void 0:e.CartSummaryList}),orderSummary:r(v,{name:"OrderSummary",slot:e==null?void 0:e.OrderSummary}),outOfStock:r(Z,{routeCart:i,onCartProductsUpdate:c}),emptyCart:r(er,{routeHome:i}),billingAddress:r(H,{}),billToShippingAddress:r(Y,{hideOnVirtualCart:!0},`bill-to-shipping-address${l?"-customer":""}`),login:r(q,{onSignInClick:C,onSignOutClick:()=>{m==null||m(),S.value.pending=!0}}),paymentMethods:r(z,{onPlaceOrder:A,handleServerError:g,paymentMethodsSlot:e==null?void 0:e.PaymentMethods}),placeOrder:r(G,{onClick:P??L,handleServerError:g}),shippingAddress:r(J,{hideOnVirtualCart:!0,onCheckoutDataUpdate:n,preselectedFields:t==null?void 0:t.address}),shippingMethods:r(Q,{name:"shipping-methods",hideOnVirtualCart:!0,onCheckoutDataUpdate:n,preSelectedMethod:t==null?void 0:t.shippingMethod,shippingMethodsSlot:e==null?void 0:e.ShippingMethods})}})})},tr=({className:s,errorMessage:e,contactSupport:i,...c})=>{const{onClick:n}=c,t=k({Title:"Checkout.ServerError.title",Message:"Checkout.ServerError.message",ContactSupport:"Checkout.ServerError.contactSupport",Button:"Checkout.ServerError.button"});return r(R,{"aria-invalid":"true","aria-describedby":"checkout-server-error__message","aria-live":"polite",className:a(["checkout-server-error",s]),"data-testid":"checkout-server-error",heading:e??t.Title,message:N("p",{id:a(["checkout-server-error__message"]),children:[t.Message,r("br",{}),r("span",{children:i??t.ContactSupport})]}),icon:r(W,{className:a(["checkout-server-error__icon"]),source:D}),action:r(X,{className:a(["checkout-server-error__button"]),onClick:n,children:t.Button})})};export{_r as Checkout,yr as OUT_OF_STOCK,_r as default};