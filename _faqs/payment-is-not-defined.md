---
title: PAYMENT is not defined | strapi-email-designer
---

 Isso provavelmente está acontecendo porque o lodash template não tá se entendendo muito bem com a tag `h3`.
 <br /> Para resolver, na parte do Total, basta substituir por isso:

 ```html
<p style="color: white">Total: <%= payment.total %></p>
```
