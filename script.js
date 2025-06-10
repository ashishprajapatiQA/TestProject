var uzeraq = []; function uzera(method, args) { (!!uzeraMethods && uzeraMethods[method]) ? uzeraMethods[method](args) : uzeraq.push({ method: method, args: args }); } (function (u, z, e, r, a) { if (u["a_id"]) { return; } u["a_id"] = a; u["dm"] = u.location.hostname; u[r] = u[r] || []; u[e] = {}; var s = z.createElement("script"); s.async = true; s.src = "https://assets.uzera.com/wrapper.js?v=" + Date.now(); var t = z.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t); })(window, document, "uzeraMethods", "uzeraDL", "3FM2HG7WTT")
//var uzeraq = []; function uzera(method, args) { (!!uzeraMethods && uzeraMethods[method]) ? uzeraMethods[method](args) : uzeraq.push({ method: method, args: args }); } (function (u, z, e, r, a) { if (u["a_id"]) { return; } u["a_id"] = a; u["dm"] = u.location.hostname; u[r] = u[r] || []; u[e] = {}; var s = z.createElement("script"); s.async = true; s.src = "https://assets.gainserv.in/wrapper.dev.js?v=" + Date.now(); var t = z.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t); })(window, document, "uzeraMethods", "uzeraDL", "KBJ297EHVL")
if(window.location.href.includes('about.html')) {
 userlove("track", {
   event: "About custom click", // Replace with your custom event name
   data: {
        },
 });
 console.log('about event trigger')
}
