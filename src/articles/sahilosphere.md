---
layout: article.njk
title: sahilosphere
date: 2026-09-26
tag: Opinion
excerpt: no expert
permalink: "no link "
---
hiii iam a good andabaosa vhhhiuheg . ug8lu z89gW uAb final testing ka waqt hai. Aapka poora backend aur login setup complete ho gaya hai! 🎉

Bas ye aakhri steps follow karo:

1. 1-2 minute ruko: Taaki Vercel aapke naye `config.yml` wale changes ko website par update kar de.
2. Admin panel kholo: Apne browser mein ek naya tab kholo aur apni site ka admin URL dalo:`[https://cuvolti.vercel.app/admin/](https://cuvolti.vercel.app/admin/)`
3. Login karo: Page load hone par aapko "Login with GitHub" ka button dikhega. Us par click karo.
4. Authorize karo: GitHub aapse permission mangega (wohi Cuvolti OAuth app jo aapne banaya tha), usko 'Authorize' kar do.

Jaise hi aap authorize karoge, aapke samne Decap CMS ka dashboard khul jayega.

Pehla article publish karke dekho:Wahan "New Article" par click karo. Ek test title aur thoda sa content likho, aur upar "Publish" daba do.Publish dabate hi CMS automatically aapke GitHub mein file bana dega aur Vercel usko aapki website par live kar dega.

Ek baar login karke check karo aur batao dashboard theek se khula ya koi Agar aapne sab check kar liya hai aur exact wahi URL dala hai, fir bhi ye error aa raha hai, toh iska matlab hai kahin na kahin koi aisi choti si cheez chhoot rahi hai jo aankhon se nahi dikh rahi (jaise koi hidden space, HTTP/HTTPS ka farq, ya last mein `/`).

Kyunki computer in mamlon mein bahut strict hota hai, hum isko pakadne ke liye 2 asaan kaam karte hain:

1. Apne GitHub OAuth App ki settings wale page ka ek screenshot bhej dijiye (jisme 'Homepage URL' aur 'Authorization callback URL' dikh raha ho). Main khud ek baar dhyan se check kar lunga ki GitHub kahan atak raha hai.
2. Kabhi-kabhi browser purani galat link ko 'yaad' rakhta hai (cache). Ek baar apne browser mein Incognito tab (ya Private window) kholiye, wahan `[https://cuvolti.vercel.app/admin/](https://cuvolti.vercel.app/admin/)` kholiye, aur wahan se login karke dekhiye.
