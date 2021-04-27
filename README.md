# Disqus CDN Web Component

## WHAT IS THIS?🤔

Used in conjunction with the [Disqus Mobile Template](https://github.com/disqus/DISQUS-API-Recipes/tree/master/mobile/js) deployed to [Netlify](https://github.com/nassimspace/disquscdn.netlify.app).

The idea is to insert the web component ```<disqus-cdn></disqus-cdn>``` onto your page, pass in the Disqus Parameters through some pre-defined attributes (see below) to have Disqus render your thread!

---
### HOW TO USE:

1. Load the script

```html
<script src="js/disqus-cdn.js"></script>
```
2. in your HTML markup, insert the following tag:

```html
<disqus-cdn url="https://example.com/supadupapost" title="HelloSupaPeeps" shortname="test" id="9876">
</disqus-cdn>
``` 

The Component's attributes correspond to the following Disqus config variables ([refer to this documentation for more info](https://help.disqus.com/en/articles/1717084-javascript-configuration-variables)): 

***"url"*** =  ***"this.page.url"*** <br/>
***"title"*** =  ***"this.page.title"*** <br/>
***"shortname"*** =  ***"Your Disqus Shortname"*** <br/>
***"id"*** =  ***"this.page.identifier"*** <br/>

---

### Bonus
I usually like to *'freeze'* ('**Object.freeze()**') my components so I added the ***deepFreeze*** function from [30SecsOfCode.org](https://www.30secondsofcode.org/js/s/deep-freeze) .

If you wish to remove this, you can simply replace the following portion 
```js
// optional
const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};
const frozenComponent = deepFreeze(DisqusCommentsComponent);
customElements.define("disqus-cdn", frozenComponent);
```

with the following:

```js
customElements.define("disqus-cdn", DisqusCommentsComponent);
```

(When using VanillaJS components, you would usually load the ***deepFreeze*** Function separately / globally (so it can be used with any of your components). 

I don't usually include it within the component itself, I just added that in to showcase a neat trick with components!

---

### NOTE: 

"**url**" and "**id**" attributes should be unique and mirrored (1 *url* assigned to 1 *id*).
If you use an *id* for a *url*, don't reuse the same *id* for another *url* and vice-versa, or else, 
it might create [identifier conflicts](https://help.disqus.com/en/articles/1717138-why-are-the-same-comments-showing-up-on-multiple-pages).

---

### LICENSE

M.I.T