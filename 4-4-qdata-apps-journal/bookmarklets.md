# Bookmarklets

## Code

``` JavaScript
// ^
javascript:window.scrollTo(0,0);

//>
javascript:(function()%7B var e,s%3B IB%3D-1%3B function isDigit(c) %7B return ("0" <%3D c %26%26 c <%3D "9") %7D L %3D location.href%3B LL %3D L.length%3B for (e%3DLL-1%3B e>%3D0%3B --e) if (isDigit(L.charAt(e))) %7B for(s%3De-1%3B s>%3D0%3B --s) if (!isDigit(L.charAt(s))) break%3B break%3B %7D %2B%2Bs%3B if (e<0) return%3B oldNum %3D L.substring(s,e%2B1)%3B newNum %3D "" %2B (parseInt(oldNum,10) %2B IB)%3B while (newNum.length < oldNum.length) newNum %3D "0" %2B newNum%3B location.href %3D L.substring(0,s) %2B newNum %2B L.slice(e%2B1)%3B %7D)()%3B


javascript:alert(document.links[0].href)


```

## Concept

* Do things while visiting or "inside" a web page
* No need to open new tab
* No need to leave current view or tab

## Reference

https://en.wikipedia.org/wiki/Bookmarklet

## Lessons learned

* Rename .js file to .html and it just runs
* Markdown may contain bookmarklets when included as HTML anchor items
* Arrow functions are OK in a bookmarklet
* You cannot use window.open to fetch a web page and then apply new CSS to the freshly loaded pages
* It's a CORS thing

## Wish list

* How to launch a bookmarklet using the keyboard?

## Links of Interest

### Bookmarklet Portals

* https://caiorss.github.io/bookmarklets
* https://gist.github.com/TheFrostlixen/9e5c66dc8916e95e6065
* http://tantek.com/favelets/ \< many
* https://www.reddit.com/r/bookmarklets/comments/i79xp/what_are_your_favorite_bookmarklets_xpost/ \< many
* https://www.labnol.org/internet/guide-to-useful-bookmarklets/7931/
* http://www.norcimo.com/fun/mozilla/mozbook.shtml
* http://jkirchartz.com/demos/bookmarklets.html
* https://github.com/marcobiedermann/awesome-bookmarklets
* http://defunkt.io/
* https://en.wikipedia.org/wiki/Bookmarklet
* http://zz85.github.io/zz85-bookmarklets/
* https://github.com/zz85/zz85-bookmarklets

### Change bookmark favicon

* https://beebom.com/how-change-bookmark-icons-chrome/
* https://superuser.com/questions/1053584/is-there-a-way-to-customise-bookmark-icons-in-chrome
* https://www.minterest.com/how-to-change-chrome-bookmark-icon/

### CORS

* https://developer.chrome.com/extensions/contentSecurityPolicy#relaxing

### Bookmarks

Chrome Bookmarks Recovery Tool

* C:\\Users%username%\\AppData\\Local\\Google\\Chrome\\User Data into File Explorer.
* In search bar, type Bookmarks, you will see a list of files named Bookmarks and/or Bookmarks.bak.

Firefox

* %APPDATA%\\Mozilla\\Firefox\\Profiles\\
* Export as JSON
