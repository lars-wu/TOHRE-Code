import{_ as d,r as o,o as s,c as a,a as e,d as i,b as t,e as h}from"./app-7b909174.js";const r={},c={id:"🚑-medic",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#🚑-medic","aria-hidden":"true"},"#",-1),p=e("font",{color:"#00ff97"},[i("🚑 "),e("b",null,"Medic")],-1),f=h('<hr><p>The Medic can place a shield on the target by pressing the Kill button. The Medic can only give one shield for the whole game. When the Medic dies, the target&#39;s shield will be removed. The Medic can also see if someone is trying to break the target&#39;s shield.<br> Depending on the host&#39;s settings, the Medic or the target can see if the player has a shield (shown as a<font size="5em" color="#00ff97">「⬤」</font>next to the name).</p><ul><li>Max <ul><li>Set the Maximum amount of Medics that can be in a match</li></ul></li><li>Who can see the shield <ul><li>Nothing - No one can see the shield</li><li>Medic+Shielded - The Medic AND the Shielded player can see the shield</li><li>Medic - Only the Medic can see the shield</li><li>Shielded - Only the Shielded player can see the shield</li></ul></li><li>Shield deactivates when the Medic dies <ul><li><font color="green">ON</font>: the Shield will disappear when the Medic dies<ul><li>Shield deactivation is visible <ul><li><font color="green">ON</font>: the Shield will show that it disappeared<ul><li>Immediately - the Shield will disappear immediately when the Medic dies</li><li>After Meeting - the Shield will disappear after the next Meeting</li><li><font color="red">OFF</font> - the Shield will disappear without showing that it disappeared</li></ul></li></ul></li></ul></li><li><font color="red">OFF</font>: the Shield will remain even after the Medic dies</li></ul></li><li>On kill attempt, reset murderer&#39;s cooldown to <ul><li>Set the kill cooldown after the shield is attempted to be broken</li></ul></li><li>Guessing ignores Medic Shield <ul><li><font color="green">ON</font>: Shield will be ignored when someone tries to guess the Shielded player</li><li><font color="red">OFF</font>: Shield will protect the Shielded player from being guessed</li></ul></li></ul>',3),m={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"Did You Know?",-1),g={href:"https://github.com/KARPED1EM",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/Tommy-XL",target:"_blank",rel:"noopener noreferrer"};function M(b,S){const n=o("Badge"),l=o("ExternalLinkIcon");return s(),a("div",null,[e("h1",c,[u,i(),p,i(),t(n,{text:"Support",type:"tip",vertical:"middle"})]),f,e("div",m,[_,e("p",null,[i("Medic was reworked as of Canary Build 1 (2.5.1_1), previously it was based on "),e("a",g,[i("KARPED1EM"),t(l)]),i("'s code, but now it's based on Town of Us Reactivated")])]),e("blockquote",null,[e("p",null,[i("From: Town of Us Reactivated & Coding: "),e("a",w,[i("Tommy-XL"),t(l)])])])])}const v=d(r,[["render",M],["__file","Medic.html.vue"]]);export{v as default};
