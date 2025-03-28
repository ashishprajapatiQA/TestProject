 var userloveq = []; function userlove(method, args) { (!!userloveMethods && userloveMethods[method]) ? userloveMethods[method](args) : userloveq.push({ method: method, args: args }); } (function (l, o, v, e) { if (l["a_id"]) { return; } l["a_id"] = e; l["dm"] = l.location.hostname; l[v] = l[v] || []; l[o] = {}; var s = document.createElement("script"); s.async = true; s.src = "https://assets.userlove.net/wrapper.net.js?v=" + Date.now(); var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t); })(window, "userloveMethods", "userloveDL", "BSGL9WR6TH")
if(window.location.href.includes('about.html')) {
 userlove("track", {
   event: "About click", // Replace with your custom event name
   data: {
    console.log('about event trigger')
    },
 });
}
