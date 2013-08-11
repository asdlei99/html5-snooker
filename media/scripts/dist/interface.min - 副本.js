(function(A, w) {
	function ma() {
		if (!c.isReady) {
			try {
				s.documentElement.doScroll("left")
			} catch(a) {
				setTimeout(ma, 1);
				return
			}
			c.ready()
		}
	};
	function Qa(a, b) {
		b.src ? c.ajax({
			url: b.src,
			async: false,
			dataType: "script"
		}) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
		b.parentNode && b.parentNode.removeChild(b)
	};
	function X(a, b, d, f, e, j) {
		var i = a.length;
		if (typeof b === "object") {
			for (var o in b) {
				X(a, o, b[o], f, e, d)
			}
			return a
		}
		if (d !== w) {
			f = !j && f && c.isFunction(d);
			for (o = 0; o < i; o++) {
				e(a[o], b, f ? d.call(a[o], o, e(a[o], b)) : d, j)
			}
			return a
		}
		return i ? e(a[0], b) : w
	};
	function J() {
		return (new Date).getTime()
	};
	function Y() {
		return false
	};
	function Z() {
		return true
	};
	function na(a, b, d) {
		d[0].type = a;
		return c.event.handle.apply(b, d)
	};
	function oa(a) {
		var b, d = [],
		f = [],
		e = arguments,
		j,
		i,
		o,
		k,
		n,
		r;
		i = c.data(this, "events");
		if (! (a.liveFired === this || !i || !i.live || a.button && a.type === "click")) {
			a.liveFired = this;
			var u = i.live.slice(0);
			for (k = 0; k < u.length; k++) {
				i = u[k];
				i.origType.replace(O, "") === a.type ? f.push(i.selector) : u.splice(k--, 1)
			}
			j = c(a.target).closest(f, a.currentTarget);
			n = 0;
			for (r = j.length; n < r; n++) {
				for (k = 0; k < u.length; k++) {
					i = u[k];
					if (j[n].selector === i.selector) {
						o = j[n].elem;
						f = null;
						if (i.preType === "mouseenter" || i.preType === "mouseleave") {
							f = c(a.relatedTarget).closest(i.selector)[0]
						}
						if (!f || f !== o) {
							d.push({
								elem: o,
								handleObj: i
							})
						}
					}
				}
			}
			n = 0;
			for (r = d.length; n < r; n++) {
				j = d[n];
				a.currentTarget = j.elem;
				a.data = j.handleObj.data;
				a.handleObj = j.handleObj;
				if (j.handleObj.origHandler.apply(j.elem, e) === false) {
					b = false;
					break
				}
			}
			return b
		}
	};
	function pa(a, b) {
		return "live." + (a && a !== "*" ? a + ".": "") + b.replace(/\./g, "`").replace(/ /g, "&")
	};
	function qa(a) {
		return ! a || !a.parentNode || a.parentNode.nodeType === 11
	};
	function ra(a, b) {
		var d = 0;
		b.each(function() {
			if (this.nodeName === (a[d] && a[d].nodeName)) {
				var f = c.data(a[d++]),
				e = c.data(this, f);
				if (f = f && f.events) {
					delete e.handle;
					e.events = {};
					for (var j in f) {
						for (var i in f[j]) {
							c.event.add(this, j, f[j][i], f[j][i].data)
						}
					}
				}
			}
		})
	};
	function sa(a, b, d) {
		var f, e, j;
		b = b && b[0] ? b[0].ownerDocument || b[0] : s;
		if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === s && !ta.test(a[0]) && (c.support.checkClone || !ua.test(a[0]))) {
			e = true;
			if (j = c.fragments[a[0]]) {
				if (j !== 1) {
					f = j
				}
			}
		}
		if (!f) {
			f = b.createDocumentFragment();
			c.clean(a, b, f, d)
		}
		if (e) {
			c.fragments[a[0]] = j ? f: 1
		}
		return {
			fragment: f,
			cacheable: e
		}
	};
	function K(a, b) {
		var d = {};
		c.each(va.concat.apply([], va.slice(0, b)),
		function() {
			d[this] = a
		});
		return d
	};
	function wa(a) {
		return "scrollTo" in a && a.document ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: false
	};
	var c = function(a, b) {
		return new c.fn.init(a, b)
	},
	Ra = A.jQuery,
	Sa = A.$,
	s = A.document,
	T,
	Ta = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
	Ua = /^.[^:#\[\.,]*$/,
	Va = /\S/,
	Wa = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
	Xa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
	P = navigator.userAgent,
	xa = false,
	Q = [],
	L,
	$ = Object.prototype.toString,
	aa = Object.prototype.hasOwnProperty,
	ba = Array.prototype.push,
	R = Array.prototype.slice,
	ya = Array.prototype.indexOf;
	c.fn = c.prototype = {
		init: function(a, b) {
			var d, f;
			if (!a) {
				return this
			}
			if (a.nodeType) {
				this.context = this[0] = a;
				this.length = 1;
				return this
			}
			if (a === "body" && !b) {
				this.context = s;
				this[0] = s.body;
				this.selector = "body";
				this.length = 1;
				return this
			}
			if (typeof a === "string") {
				if ((d = Ta.exec(a)) && (d[1] || !b)) {
					if (d[1]) {
						f = b ? b.ownerDocument || b: s;
						if (a = Xa.exec(a)) {
							if (c.isPlainObject(b)) {
								a = [s.createElement(a[1])];
								c.fn.attr.call(a, b, true)
							} else {
								a = [f.createElement(a[1])]
							}
						} else {
							a = sa([d[1]], [f]);
							a = (a.cacheable ? a.fragment.cloneNode(true) : a.fragment).childNodes
						}
						return c.merge(this, a)
					} else {
						if (b = s.getElementById(d[2])) {
							if (b.id !== d[2]) {
								return T.find(a)
							}
							this.length = 1;
							this[0] = b
						}
						this.context = s;
						this.selector = a;
						return this
					}
				} else {
					if (!b && /^\w+$/.test(a)) {
						this.selector = a;
						this.context = s;
						a = s.getElementsByTagName(a);
						return c.merge(this, a)
					} else {
						return ! b || b.jquery ? (b || T).find(a) : c(b).find(a)
					}
				}
			} else {
				if (c.isFunction(a)) {
					return T.ready(a)
				}
			}
			if (a.selector !== w) {
				this.selector = a.selector;
				this.context = a.context
			}
			return c.makeArray(a, this)
		},
		selector: "",
		jquery: "1.4.2",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return R.call(this, 0)
		},
		get: function(a) {
			return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
		},
		pushStack: function(a, b, d) {
			var f = c();
			c.isArray(a) ? ba.apply(f, a) : c.merge(f, a);
			f.prevObject = this;
			f.context = this.context;
			if (b === "find") {
				f.selector = this.selector + (this.selector ? " ": "") + d
			} else {
				if (b) {
					f.selector = this.selector + "." + b + "(" + d + ")"
				}
			}
			return f
		},
		each: function(a, b) {
			return c.each(this, a, b)
		},
		ready: function(a) {
			c.bindReady();
			if (c.isReady) {
				a.call(s, c)
			} else {
				Q && Q.push(a)
			}
			return this
		},
		eq: function(a) {
			return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq( - 1)
		},
		slice: function() {
			return this.pushStack(R.apply(this, arguments), "slice", R.call(arguments).join(","))
		},
		map: function(a) {
			return this.pushStack(c.map(this,
			function(b, d) {
				return a.call(b, d, b)
			}))
		},
		end: function() {
			return this.prevObject || c(null)
		},
		push: ba,
		sort: [].sort,
		splice: [].splice
	};
	c.fn.init.prototype = c.fn;
	c.extend = c.fn.extend = function() {
		var a = arguments[0] || {},
		b = 1,
		d = arguments.length,
		f = false,
		e,
		j,
		i,
		o;
		if (typeof a === "boolean") {
			f = a;
			a = arguments[1] || {};
			b = 2
		}
		if (typeof a !== "object" && !c.isFunction(a)) {
			a = {}
		}
		if (d === b) {
			a = this; --b
		}
		for (; b < d; b++) {
			if ((e = arguments[b]) != null) {
				for (j in e) {
					i = a[j];
					o = e[j];
					if (a !== o) {
						if (f && o && (c.isPlainObject(o) || c.isArray(o))) {
							i = i && (c.isPlainObject(i) || c.isArray(i)) ? i: c.isArray(o) ? [] : {};
							a[j] = c.extend(f, i, o)
						} else {
							if (o !== w) {
								a[j] = o
							}
						}
					}
				}
			}
		}
		return a
	};
	c.extend({
		noConflict: function(a) {
			A.$ = Sa;
			if (a) {
				A.jQuery = Ra
			}
			return c
		},
		isReady: false,
		ready: function() {
			if (!c.isReady) {
				if (!s.body) {
					return setTimeout(c.ready, 13)
				}
				c.isReady = true;
				if (Q) {
					for (var a, b = 0; a = Q[b++];) {
						a.call(s, c)
					}
					Q = null
				}
				c.fn.triggerHandler && c(s).triggerHandler("ready")
			}
		},
		bindReady: function() {
			if (!xa) {
				xa = true;
				if (s.readyState === "complete") {
					return c.ready()
				}
				if (s.addEventListener) {
					s.addEventListener("DOMContentLoaded", L, false);
					A.addEventListener("load", c.ready, false)
				} else {
					if (s.attachEvent) {
						s.attachEvent("onreadystatechange", L);
						A.attachEvent("onload", c.ready);
						var a = false;
						try {
							a = A.frameElement == null
						} catch(b) {}
						s.documentElement.doScroll && a && ma()
					}
				}
			}
		},
		isFunction: function(a) {
			return $.call(a) === "[object Function]"
		},
		isArray: function(a) {
			return $.call(a) === "[object Array]"
		},
		isPlainObject: function(a) {
			if (!a || $.call(a) !== "[object Object]" || a.nodeType || a.setInterval) {
				return false
			}
			if (a.constructor && !aa.call(a, "constructor") && !aa.call(a.constructor.prototype, "isPrototypeOf")) {
				return false
			}
			var b;
			for (b in a) {}
			return b === w || aa.call(a, b)
		},
		isEmptyObject: function(a) {
			for (var b in a) {
				return false
			}
			return true
		},
		error: function(a) {
			throw a
		},
		parseJSON: function(a) {
			if (typeof a !== "string" || !a) {
				return null
			}
			a = c.trim(a);
			if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
				return A.JSON && A.JSON.parse ? A.JSON.parse(a) : (new Function("return " + a))()
			} else {
				c.error("Invalid JSON: " + a)
			}
		},
		noop: function() {},
		globalEval: function(a) {
			if (a && Va.test(a)) {
				var b = s.getElementsByTagName("head")[0] || s.documentElement,
				d = s.createElement("script");
				d.type = "text/javascript";
				if (c.support.scriptEval) {
					d.appendChild(s.createTextNode(a))
				} else {
					d.text = a
				}
				b.insertBefore(d, b.firstChild);
				b.removeChild(d)
			}
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
		},
		each: function(a, b, d) {
			var f, e = 0,
			j = a.length,
			i = j === w || c.isFunction(a);
			if (d) {
				if (i) {
					for (f in a) {
						if (b.apply(a[f], d) === false) {
							break
						}
					}
				} else {
					for (; e < j;) {
						if (b.apply(a[e++], d) === false) {
							break
						}
					}
				}
			} else {
				if (i) {
					for (f in a) {
						if (b.call(a[f], f, a[f]) === false) {
							break
						}
					}
				} else {
					for (d = a[0]; e < j && b.call(d, e, d) !== false; d = a[++e]) {}
				}
			}
			return a
		},
		trim: function(a) {
			return (a || "").replace(Wa, "")
		},
		makeArray: function(a, b) {
			b = b || [];
			if (a != null) {
				a.length == null || typeof a === "string" || c.isFunction(a) || typeof a !== "function" && a.setInterval ? ba.call(b, a) : c.merge(b, a)
			}
			return b
		},
		inArray: function(a, b) {
			if (b.indexOf) {
				return b.indexOf(a)
			}
			for (var d = 0,
			f = b.length; d < f; d++) {
				if (b[d] === a) {
					return d
				}
			}
			return - 1
		},
		merge: function(a, b) {
			var d = a.length,
			f = 0;
			if (typeof b.length === "number") {
				for (var e = b.length; f < e; f++) {
					a[d++] = b[f]
				}
			} else {
				for (; b[f] !== w;) {
					a[d++] = b[f++]
				}
			}
			a.length = d;
			return a
		},
		grep: function(a, b, d) {
			for (var f = [], e = 0, j = a.length; e < j; e++) { ! d !== !b(a[e], e) && f.push(a[e])
			}
			return f
		},
		map: function(a, b, d) {
			for (var f = [], e, j = 0, i = a.length; j < i; j++) {
				e = b(a[j], j, d);
				if (e != null) {
					f[f.length] = e
				}
			}
			return f.concat.apply([], f)
		},
		guid: 1,
		proxy: function(a, b, d) {
			if (arguments.length === 2) {
				if (typeof b === "string") {
					d = a;
					a = d[b];
					b = w
				} else {
					if (b && !c.isFunction(b)) {
						d = b;
						b = w
					}
				}
			}
			if (!b && a) {
				b = function() {
					return a.apply(d || this, arguments)
				}
			}
			if (a) {
				b.guid = a.guid = a.guid || b.guid || c.guid++
			}
			return b
		},
		uaMatch: function(a) {
			a = a.toLowerCase();
			a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || !/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
			return {
				browser: a[1] || "",
				version: a[2] || "0"
			}
		},
		browser: {}
	});
	P = c.uaMatch(P);
	if (P.browser) {
		c.browser[P.browser] = true;
		c.browser.version = P.version
	}
	if (c.browser.webkit) {
		c.browser.safari = true
	}
	if (ya) {
		c.inArray = function(a, b) {
			return ya.call(b, a)
		}
	}
	T = c(s);
	if (s.addEventListener) {
		L = function() {
			s.removeEventListener("DOMContentLoaded", L, false);
			c.ready()
		}
	} else {
		if (s.attachEvent) {
			L = function() {
				if (s.readyState === "complete") {
					s.detachEvent("onreadystatechange", L);
					c.ready()
				}
			}
		}
	} (function() {
		c.support = {};
		var a = s.documentElement,
		b = s.createElement("script"),
		d = s.createElement("div"),
		f = "script" + J();
		d.style.display = "none";
		d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		var e = d.getElementsByTagName("*"),
		j = d.getElementsByTagName("a")[0];
		if (! (!e || !e.length || !j)) {
			c.support = {
				leadingWhitespace: d.firstChild.nodeType === 3,
				tbody: !d.getElementsByTagName("tbody").length,
				htmlSerialize: !!d.getElementsByTagName("link").length,
				style: /red/.test(j.getAttribute("style")),
				hrefNormalized: j.getAttribute("href") === "/a",
				opacity: /^0.55$/.test(j.style.opacity),
				cssFloat: !!j.style.cssFloat,
				checkOn: d.getElementsByTagName("input")[0].value === "on",
				optSelected: s.createElement("select").appendChild(s.createElement("option")).selected,
				parentNode: d.removeChild(d.appendChild(s.createElement("div"))).parentNode === null,
				deleteExpando: true,
				checkClone: false,
				scriptEval: false,
				noCloneEvent: true,
				boxModel: null
			};
			b.type = "text/javascript";
			try {
				b.appendChild(s.createTextNode("window." + f + "=1;"))
			} catch(i) {}
			a.insertBefore(b, a.firstChild);
			if (A[f]) {
				c.support.scriptEval = true;
				delete A[f]
			}
			try {
				delete b.test
			} catch(o) {
				c.support.deleteExpando = false
			}
			a.removeChild(b);
			if (d.attachEvent && d.fireEvent) {
				d.attachEvent("onclick",
				function k() {
					c.support.noCloneEvent = false;
					d.detachEvent("onclick", k)
				});
				d.cloneNode(true).fireEvent("onclick")
			}
			d = s.createElement("div");
			d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
			a = s.createDocumentFragment();
			a.appendChild(d.firstChild);
			c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
			c(function() {
				var k = s.createElement("div");
				k.style.width = k.style.paddingLeft = "1px";
				s.body.appendChild(k);
				c.boxModel = c.support.boxModel = k.offsetWidth === 2;
				s.body.removeChild(k).style.display = "none"
			});
			a = function(k) {
				var n = s.createElement("div");
				k = "on" + k;
				var r = k in n;
				if (!r) {
					n.setAttribute(k, "return;");
					r = typeof n[k] === "function"
				}
				return r
			};
			c.support.submitBubbles = a("submit");
			c.support.changeBubbles = a("change");
			a = b = d = e = j = null
		}
	})();
	c.props = {
		"for": "htmlFor",
		"class": "className",
		readonly: "readOnly",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		rowspan: "rowSpan",
		colspan: "colSpan",
		tabindex: "tabIndex",
		usemap: "useMap",
		frameborder: "frameBorder"
	};
	var G = "jQuery" + J(),
	Ya = 0,
	za = {};
	c.extend({
		cache: {},
		expando: G,
		noData: {
			embed: true,
			object: true,
			applet: true
		},
		data: function(a, b, d) {
			if (! (a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
				a = a == A ? za: a;
				var f = a[G],
				e = c.cache;
				if (!f && typeof b === "string" && d === w) {
					return null
				}
				f || (f = ++Ya);
				if (typeof b === "object") {
					a[G] = f;
					e[f] = c.extend(true, {},
					b)
				} else {
					if (!e[f]) {
						a[G] = f;
						e[f] = {}
					}
				}
				a = e[f];
				if (d !== w) {
					a[b] = d
				}
				return typeof b === "string" ? a[b] : a
			}
		},
		removeData: function(a, b) {
			if (! (a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
				a = a == A ? za: a;
				var d = a[G],
				f = c.cache,
				e = f[d];
				if (b) {
					if (e) {
						delete e[b];
						c.isEmptyObject(e) && c.removeData(a)
					}
				} else {
					if (c.support.deleteExpando) {
						delete a[c.expando]
					} else {
						a.removeAttribute && a.removeAttribute(c.expando)
					}
					delete f[d]
				}
			}
		}
	});
	c.fn.extend({
		data: function(a, b) {
			if (typeof a === "undefined" && this.length) {
				return c.data(this[0])
			} else {
				if (typeof a === "object") {
					return this.each(function() {
						c.data(this, a)
					})
				}
			}
			var d = a.split(".");
			d[1] = d[1] ? "." + d[1] : "";
			if (b === w) {
				var f = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
				if (f === w && this.length) {
					f = c.data(this[0], a)
				}
				return f === w && d[1] ? this.data(d[0]) : f
			} else {
				return this.trigger("setData" + d[1] + "!", [d[0], b]).each(function() {
					c.data(this, a, b)
				})
			}
		},
		removeData: function(a) {
			return this.each(function() {
				c.removeData(this, a)
			})
		}
	});
	c.extend({
		queue: function(a, b, d) {
			if (a) {
				b = (b || "fx") + "queue";
				var f = c.data(a, b);
				if (!d) {
					return f || []
				}
				if (!f || c.isArray(d)) {
					f = c.data(a, b, c.makeArray(d))
				} else {
					f.push(d)
				}
				return f
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var d = c.queue(a, b),
			f = d.shift();
			if (f === "inprogress") {
				f = d.shift()
			}
			if (f) {
				b === "fx" && d.unshift("inprogress");
				f.call(a,
				function() {
					c.dequeue(a, b)
				})
			}
		}
	});
	c.fn.extend({
		queue: function(a, b) {
			if (typeof a !== "string") {
				b = a;
				a = "fx"
			}
			if (b === w) {
				return c.queue(this[0], a)
			}
			return this.each(function() {
				var d = c.queue(this, a, b);
				a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				c.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = c.fx ? c.fx.speeds[a] || a: a;
			b = b || "fx";
			return this.queue(b,
			function() {
				var d = this;
				setTimeout(function() {
					c.dequeue(d, b)
				},
				a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		}
	});
	var Aa = /[\n\t]/g,
	ca = /\s+/,
	Za = /\r/g,
	$a = /href|src|style/,
	ab = /(button|input)/i,
	bb = /(button|input|object|select|textarea)/i,
	cb = /^(a|area)$/i,
	Ba = /radio|checkbox/;
	c.fn.extend({
		attr: function(a, b) {
			return X(this, a, b, true, c.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				c.attr(this, a, "");
				this.nodeType === 1 && this.removeAttribute(a)
			})
		},
		addClass: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(n) {
					var r = c(this);
					r.addClass(a.call(this, n, r.attr("class")))
				})
			}
			if (a && typeof a === "string") {
				for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
					var e = this[d];
					if (e.nodeType === 1) {
						if (e.className) {
							for (var j = " " + e.className + " ",
							i = e.className,
							o = 0,
							k = b.length; o < k; o++) {
								if (j.indexOf(" " + b[o] + " ") < 0) {
									i += " " + b[o]
								}
							}
							e.className = c.trim(i)
						} else {
							e.className = a
						}
					}
				}
			}
			return this
		},
		removeClass: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(k) {
					var n = c(this);
					n.removeClass(a.call(this, k, n.attr("class")))
				})
			}
			if (a && typeof a === "string" || a === w) {
				for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
					var e = this[d];
					if (e.nodeType === 1 && e.className) {
						if (a) {
							for (var j = (" " + e.className + " ").replace(Aa, " "), i = 0, o = b.length; i < o; i++) {
								j = j.replace(" " + b[i] + " ", " ")
							}
							e.className = c.trim(j)
						} else {
							e.className = ""
						}
					}
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var d = typeof a,
			f = typeof b === "boolean";
			if (c.isFunction(a)) {
				return this.each(function(e) {
					var j = c(this);
					j.toggleClass(a.call(this, e, j.attr("class"), b), b)
				})
			}
			return this.each(function() {
				if (d === "string") {
					for (var e, j = 0,
					i = c(this), o = b, k = a.split(ca); e = k[j++];) {
						o = f ? o: !i.hasClass(e);
						i[o ? "addClass": "removeClass"](e)
					}
				} else {
					if (d === "undefined" || d === "boolean") {
						this.className && c.data(this, "__className__", this.className);
						this.className = this.className || a === false ? "": c.data(this, "__className__") || ""
					}
				}
			})
		},
		hasClass: function(a) {
			a = " " + a + " ";
			for (var b = 0,
			d = this.length; b < d; b++) {
				if ((" " + this[b].className + " ").replace(Aa, " ").indexOf(a) > -1) {
					return true
				}
			}
			return false
		},
		val: function(a) {
			if (a === w) {
				var b = this[0];
				if (b) {
					if (c.nodeName(b, "option")) {
						return (b.attributes.value || {}).specified ? b.value: b.text
					}
					if (c.nodeName(b, "select")) {
						var d = b.selectedIndex,
						f = [],
						e = b.options;
						b = b.type === "select-one";
						if (d < 0) {
							return null
						}
						var j = b ? d: 0;
						for (d = b ? d + 1 : e.length; j < d; j++) {
							var i = e[j];
							if (i.selected) {
								a = c(i).val();
								if (b) {
									return a
								}
								f.push(a)
							}
						}
						return f
					}
					if (Ba.test(b.type) && !c.support.checkOn) {
						return b.getAttribute("value") === null ? "on": b.value
					}
					return (b.value || "").replace(Za, "")
				}
				return w
			}
			var o = c.isFunction(a);
			return this.each(function(k) {
				var n = c(this),
				r = a;
				if (this.nodeType === 1) {
					if (o) {
						r = a.call(this, k, n.val())
					}
					if (typeof r === "number") {
						r += ""
					}
					if (c.isArray(r) && Ba.test(this.type)) {
						this.checked = c.inArray(n.val(), r) >= 0
					} else {
						if (c.nodeName(this, "select")) {
							var u = c.makeArray(r);
							c("option", this).each(function() {
								this.selected = c.inArray(c(this).val(), u) >= 0
							});
							if (!u.length) {
								this.selectedIndex = -1
							}
						} else {
							this.value = r
						}
					}
				}
			})
		}
	});
	c.extend({
		attrFn: {
			val: true,
			css: true,
			html: true,
			text: true,
			data: true,
			width: true,
			height: true,
			offset: true
		},
		attr: function(a, b, d, f) {
			if (!a || a.nodeType === 3 || a.nodeType === 8) {
				return w
			}
			if (f && b in c.attrFn) {
				return c(a)[b](d)
			}
			f = a.nodeType !== 1 || !c.isXMLDoc(a);
			var e = d !== w;
			b = f && c.props[b] || b;
			if (a.nodeType === 1) {
				var j = $a.test(b);
				if (b in a && f && !j) {
					if (e) {
						b === "type" && ab.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
						a[b] = d
					}
					if (c.nodeName(a, "form") && a.getAttributeNode(b)) {
						return a.getAttributeNode(b).nodeValue
					}
					if (b === "tabIndex") {
						return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value: bb.test(a.nodeName) || cb.test(a.nodeName) && a.href ? 0 : w
					}
					return a[b]
				}
				if (!c.support.style && f && b === "style") {
					if (e) {
						a.style.cssText = "" + d
					}
					return a.style.cssText
				}
				e && a.setAttribute(b, "" + d);
				a = !c.support.hrefNormalized && f && j ? a.getAttribute(b, 2) : a.getAttribute(b);
				return a === null ? w: a
			}
			return c.style(a, b, d)
		}
	});
	var O = /\.(.*)$/,
	db = function(a) {
		return a.replace(/[^\w\s\.\|`]/g,
		function(b) {
			return "\\" + b
		})
	};
	c.event = {
		add: function(a, b, d, f) {
			if (! (a.nodeType === 3 || a.nodeType === 8)) {
				if (a.setInterval && a !== A && !a.frameElement) {
					a = A
				}
				var e, j;
				if (d.handler) {
					e = d;
					d = e.handler
				}
				if (!d.guid) {
					d.guid = c.guid++
				}
				if (j = c.data(a)) {
					var i = j.events = j.events || {},
					o = j.handle;
					if (!o) {
						j.handle = o = function() {
							return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(o.elem, arguments) : w
						}
					}
					o.elem = a;
					b = b.split(" ");
					for (var k, n = 0,
					r; k = b[n++];) {
						j = e ? c.extend({},
						e) : {
							handler: d,
							data: f
						};
						if (k.indexOf(".") > -1) {
							r = k.split(".");
							k = r.shift();
							j.namespace = r.slice(0).sort().join(".")
						} else {
							r = [];
							j.namespace = ""
						}
						j.type = k;
						j.guid = d.guid;
						var u = i[k],
						z = c.event.special[k] || {};
						if (!u) {
							u = i[k] = [];
							if (!z.setup || z.setup.call(a, f, r, o) === false) {
								if (a.addEventListener) {
									a.addEventListener(k, o, false)
								} else {
									a.attachEvent && a.attachEvent("on" + k, o)
								}
							}
						}
						if (z.add) {
							z.add.call(a, j);
							if (!j.handler.guid) {
								j.handler.guid = d.guid
							}
						}
						u.push(j);
						c.event.global[k] = true
					}
					a = null
				}
			}
		},
		global: {},
		remove: function(a, b, d, f) {
			if (! (a.nodeType === 3 || a.nodeType === 8)) {
				var e, j = 0,
				i, o, k, n, r, u, z = c.data(a),
				C = z && z.events;
				if (z && C) {
					if (b && b.type) {
						d = b.handler;
						b = b.type
					}
					if (!b || typeof b === "string" && b.charAt(0) === ".") {
						b = b || "";
						for (e in C) {
							c.event.remove(a, e + b)
						}
					} else {
						for (b = b.split(" "); e = b[j++];) {
							n = e;
							i = e.indexOf(".") < 0;
							o = [];
							if (!i) {
								o = e.split(".");
								e = o.shift();
								k = new RegExp("(^|\\.)" + c.map(o.slice(0).sort(), db).join("\\.(?:.*\\.)?") + "(\\.|$)")
							}
							if (r = C[e]) {
								if (d) {
									n = c.event.special[e] || {};
									for (B = f || 0; B < r.length; B++) {
										u = r[B];
										if (d.guid === u.guid) {
											if (i || k.test(u.namespace)) {
												f == null && r.splice(B--, 1);
												n.remove && n.remove.call(a, u)
											}
											if (f != null) {
												break
											}
										}
									}
									if (r.length === 0 || f != null && r.length === 1) {
										if (!n.teardown || n.teardown.call(a, o) === false) {
											Ca(a, e, z.handle)
										}
										delete C[e]
									}
								} else {
									for (var B = 0; B < r.length; B++) {
										u = r[B];
										if (i || k.test(u.namespace)) {
											c.event.remove(a, n, u.handler, B);
											r.splice(B--, 1)
										}
									}
								}
							}
						}
						if (c.isEmptyObject(C)) {
							if (b = z.handle) {
								b.elem = null
							}
							delete z.events;
							delete z.handle;
							c.isEmptyObject(z) && c.removeData(a)
						}
					}
				}
			}
		},
		trigger: function(a, b, d, f) {
			var e = a.type || a;
			if (!f) {
				a = typeof a === "object" ? a[G] ? a: c.extend(c.Event(e), a) : c.Event(e);
				if (e.indexOf("!") >= 0) {
					a.type = e = e.slice(0, -1);
					a.exclusive = true
				}
				if (!d) {
					a.stopPropagation();
					c.event.global[e] && c.each(c.cache,
					function() {
						this.events && this.events[e] && c.event.trigger(a, b, this.handle.elem)
					})
				}
				if (!d || d.nodeType === 3 || d.nodeType === 8) {
					return w
				}
				a.result = w;
				a.target = d;
				b = c.makeArray(b);
				b.unshift(a)
			}
			a.currentTarget = d; (f = c.data(d, "handle")) && f.apply(d, b);
			f = d.parentNode || d.ownerDocument;
			try {
				if (! (d && d.nodeName && c.noData[d.nodeName.toLowerCase()])) {
					if (d["on" + e] && d["on" + e].apply(d, b) === false) {
						a.result = false
					}
				}
			} catch(j) {}
			if (!a.isPropagationStopped() && f) {
				c.event.trigger(a, b, f, true)
			} else {
				if (!a.isDefaultPrevented()) {
					f = a.target;
					var i, o = c.nodeName(f, "a") && e === "click",
					k = c.event.special[e] || {};
					if ((!k._default || k._default.call(d, a) === false) && !o && !(f && f.nodeName && c.noData[f.nodeName.toLowerCase()])) {
						try {
							if (f[e]) {
								if (i = f["on" + e]) {
									f["on" + e] = null
								}
								c.event.triggered = true;
								f[e]()
							}
						} catch(n) {}
						if (i) {
							f["on" + e] = i
						}
						c.event.triggered = false
					}
				}
			}
		},
		handle: function(a) {
			var b, d, f, e;
			a = arguments[0] = c.event.fix(a || A.event);
			a.currentTarget = this;
			b = a.type.indexOf(".") < 0 && !a.exclusive;
			if (!b) {
				d = a.type.split(".");
				a.type = d.shift();
				f = new RegExp("(^|\\.)" + d.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
			}
			e = c.data(this, "events");
			d = e[a.type];
			if (e && d) {
				d = d.slice(0);
				e = 0;
				for (var j = d.length; e < j; e++) {
					var i = d[e];
					if (b || f.test(i.namespace)) {
						a.handler = i.handler;
						a.data = i.data;
						a.handleObj = i;
						i = i.handler.apply(this, arguments);
						if (i !== w) {
							a.result = i;
							if (i === false) {
								a.preventDefault();
								a.stopPropagation()
							}
						}
						if (a.isImmediatePropagationStopped()) {
							break
						}
					}
				}
			}
			return a.result
		},
		props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
		fix: function(a) {
			if (a[G]) {
				return a
			}
			var b = a;
			a = c.Event(b);
			for (var d = this.props.length,
			f; d;) {
				f = this.props[--d];
				a[f] = b[f]
			}
			if (!a.target) {
				a.target = a.srcElement || s
			}
			if (a.target.nodeType === 3) {
				a.target = a.target.parentNode
			}
			if (!a.relatedTarget && a.fromElement) {
				a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement
			}
			if (a.pageX == null && a.clientX != null) {
				b = s.documentElement;
				d = s.body;
				a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0);
				a.pageY = a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0)
			}
			if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode: a.keyCode)) {
				a.which = a.charCode || a.keyCode
			}
			if (!a.metaKey && a.ctrlKey) {
				a.metaKey = a.ctrlKey
			}
			if (!a.which && a.button !== w) {
				a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
			}
			return a
		},
		guid: 100000000,
		proxy: c.proxy,
		special: {
			ready: {
				setup: c.bindReady,
				teardown: c.noop
			},
			live: {
				add: function(a) {
					c.event.add(this, a.origType, c.extend({},
					a, {
						handler: oa
					}))
				},
				remove: function(a) {
					var b = true,
					d = a.origType.replace(O, "");
					c.each(c.data(this, "events").live || [],
					function() {
						if (d === this.origType.replace(O, "")) {
							return b = false
						}
					});
					b && c.event.remove(this, a.origType, oa)
				}
			},
			beforeunload: {
				setup: function(a, b, d) {
					if (this.setInterval) {
						this.onbeforeunload = d
					}
					return false
				},
				teardown: function(a, b) {
					if (this.onbeforeunload === b) {
						this.onbeforeunload = null
					}
				}
			}
		}
	};
	var Ca = s.removeEventListener ?
	function(a, b, d) {
		a.removeEventListener(b, d, false)
	}: function(a, b, d) {
		a.detachEvent("on" + b, d)
	};
	c.Event = function(a) {
		if (!this.preventDefault) {
			return new c.Event(a)
		}
		if (a && a.type) {
			this.originalEvent = a;
			this.type = a.type
		} else {
			this.type = a
		}
		this.timeStamp = J();
		this[G] = true
	};
	c.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = Z;
			var a = this.originalEvent;
			if (a) {
				a.preventDefault && a.preventDefault();
				a.returnValue = false
			}
		},
		stopPropagation: function() {
			this.isPropagationStopped = Z;
			var a = this.originalEvent;
			if (a) {
				a.stopPropagation && a.stopPropagation();
				a.cancelBubble = true
			}
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = Z;
			this.stopPropagation()
		},
		isDefaultPrevented: Y,
		isPropagationStopped: Y,
		isImmediatePropagationStopped: Y
	};
	var Da = function(a) {
		var b = a.relatedTarget;
		try {
			for (; b && b !== this;) {
				b = b.parentNode
			}
			if (b !== this) {
				a.type = a.data;
				c.event.handle.apply(this, arguments)
			}
		} catch(d) {}
	},
	Ea = function(a) {
		a.type = a.data;
		c.event.handle.apply(this, arguments)
	};
	c.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	},
	function(a, b) {
		c.event.special[a] = {
			setup: function(d) {
				c.event.add(this, b, d && d.selector ? Ea: Da, a)
			},
			teardown: function(d) {
				c.event.remove(this, b, d && d.selector ? Ea: Da)
			}
		}
	});
	if (!c.support.submitBubbles) {
		c.event.special.submit = {
			setup: function() {
				if (this.nodeName.toLowerCase() !== "form") {
					c.event.add(this, "click.specialSubmit",
					function(a) {
						var b = a.target,
						d = b.type;
						if ((d === "submit" || d === "image") && c(b).closest("form").length) {
							return na("submit", this, arguments)
						}
					});
					c.event.add(this, "keypress.specialSubmit",
					function(a) {
						var b = a.target,
						d = b.type;
						if ((d === "text" || d === "password") && c(b).closest("form").length && a.keyCode === 13) {
							return na("submit", this, arguments)
						}
					})
				} else {
					return false
				}
			},
			teardown: function() {
				c.event.remove(this, ".specialSubmit")
			}
		}
	}
	if (!c.support.changeBubbles) {
		var da = /textarea|input|select/i,
		ea, Fa = function(a) {
			var b = a.type,
			d = a.value;
			if (b === "radio" || b === "checkbox") {
				d = a.checked
			} else {
				if (b === "select-multiple") {
					d = a.selectedIndex > -1 ? c.map(a.options,
					function(f) {
						return f.selected
					}).join("-") : ""
				} else {
					if (a.nodeName.toLowerCase() === "select") {
						d = a.selectedIndex
					}
				}
			}
			return d
		},
		fa = function(a, b) {
			var d = a.target,
			f, e;
			if (! (!da.test(d.nodeName) || d.readOnly)) {
				f = c.data(d, "_change_data");
				e = Fa(d);
				if (a.type !== "focusout" || d.type !== "radio") {
					c.data(d, "_change_data", e)
				}
				if (! (f === w || e === f)) {
					if (f != null || e) {
						a.type = "change";
						return c.event.trigger(a, b, d)
					}
				}
			}
		};
		c.event.special.change = {
			filters: {
				focusout: fa,
				click: function(a) {
					var b = a.target,
					d = b.type;
					if (d === "radio" || d === "checkbox" || b.nodeName.toLowerCase() === "select") {
						return fa.call(this, a)
					}
				},
				keydown: function(a) {
					var b = a.target,
					d = b.type;
					if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (d === "checkbox" || d === "radio") || d === "select-multiple") {
						return fa.call(this, a)
					}
				},
				beforeactivate: function(a) {
					a = a.target;
					c.data(a, "_change_data", Fa(a))
				}
			},
			setup: function() {
				if (this.type === "file") {
					return false
				}
				for (var a in ea) {
					c.event.add(this, a + ".specialChange", ea[a])
				}
				return da.test(this.nodeName)
			},
			teardown: function() {
				c.event.remove(this, ".specialChange");
				return da.test(this.nodeName)
			}
		};
		ea = c.event.special.change.filters
	}
	s.addEventListener && c.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(a, b) {
		function d(f) {
			f = c.event.fix(f);
			f.type = b;
			return c.event.handle.call(this, f)
		};
		c.event.special[b] = {
			setup: function() {
				this.addEventListener(a, d, true)
			},
			teardown: function() {
				this.removeEventListener(a, d, true)
			}
		}
	});
	c.each(["bind", "one"],
	function(a, b) {
		c.fn[b] = function(d, f, e) {
			if (typeof d === "object") {
				for (var j in d) {
					this[b](j, f, d[j], e)
				}
				return this
			}
			if (c.isFunction(f)) {
				e = f;
				f = w
			}
			var i = b === "one" ? c.proxy(e,
			function(k) {
				c(this).unbind(k, i);
				return e.apply(this, arguments)
			}) : e;
			if (d === "unload" && b !== "one") {
				this.one(d, f, e)
			} else {
				j = 0;
				for (var o = this.length; j < o; j++) {
					c.event.add(this[j], d, i, f)
				}
			}
			return this
		}
	});
	c.fn.extend({
		unbind: function(a, b) {
			if (typeof a === "object" && !a.preventDefault) {
				for (var d in a) {
					this.unbind(d, a[d])
				}
			} else {
				d = 0;
				for (var f = this.length; d < f; d++) {
					c.event.remove(this[d], a, b)
				}
			}
			return this
		},
		delegate: function(a, b, d, f) {
			return this.live(b, d, f, a)
		},
		undelegate: function(a, b, d) {
			return arguments.length === 0 ? this.unbind("live") : this.die(b, null, d, a)
		},
		trigger: function(a, b) {
			return this.each(function() {
				c.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) {
				a = c.Event(a);
				a.preventDefault();
				a.stopPropagation();
				c.event.trigger(a, b, this[0]);
				return a.result
			}
		},
		toggle: function(a) {
			for (var b = arguments,
			d = 1; d < b.length;) {
				c.proxy(a, b[d++])
			}
			return this.click(c.proxy(a,
			function(f) {
				var e = (c.data(this, "lastToggle" + a.guid) || 0) % d;
				c.data(this, "lastToggle" + a.guid, e + 1);
				f.preventDefault();
				return b[e].apply(this, arguments) || false
			}))
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var Ga = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	c.each(["live", "die"],
	function(a, b) {
		c.fn[b] = function(d, f, e, j) {
			var i, o = 0,
			k, n, r = j || this.selector,
			u = j ? this: c(this.context);
			if (c.isFunction(f)) {
				e = f;
				f = w
			}
			for (d = (d || "").split(" "); (i = d[o++]) != null;) {
				j = O.exec(i);
				k = "";
				if (j) {
					k = j[0];
					i = i.replace(O, "")
				}
				if (i === "hover") {
					d.push("mouseenter" + k, "mouseleave" + k)
				} else {
					n = i;
					if (i === "focus" || i === "blur") {
						d.push(Ga[i] + k);
						i += k
					} else {
						i = (Ga[i] || i) + k
					}
					b === "live" ? u.each(function() {
						c.event.add(this, pa(i, r), {
							data: f,
							selector: r,
							handler: e,
							origType: i,
							origHandler: e,
							preType: n
						})
					}) : u.unbind(pa(i, r), e)
				}
			}
			return this
		}
	});
	c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
	function(a, b) {
		c.fn[b] = function(d) {
			return d ? this.bind(b, d) : this.trigger(b)
		};
		if (c.attrFn) {
			c.attrFn[b] = true
		}
	});
	A.attachEvent && !A.addEventListener && A.attachEvent("onunload",
	function() {
		for (var a in c.cache) {
			if (c.cache[a].handle) {
				try {
					c.event.remove(c.cache[a].handle.elem)
				} catch(b) {}
			}
		}
	}); (function() {
		function a(g) {
			for (var h = "",
			l, m = 0; g[m]; m++) {
				l = g[m];
				if (l.nodeType === 3 || l.nodeType === 4) {
					h += l.nodeValue
				} else {
					if (l.nodeType !== 8) {
						h += a(l.childNodes)
					}
				}
			}
			return h
		};
		function b(g, h, l, m, q, p) {
			q = 0;
			for (var v = m.length; q < v; q++) {
				var t = m[q];
				if (t) {
					t = t[g];
					for (var y = false; t;) {
						if (t.sizcache === l) {
							y = m[t.sizset];
							break
						}
						if (t.nodeType === 1 && !p) {
							t.sizcache = l;
							t.sizset = q
						}
						if (t.nodeName.toLowerCase() === h) {
							y = t;
							break
						}
						t = t[g]
					}
					m[q] = y
				}
			}
		};
		function d(g, h, l, m, q, p) {
			q = 0;
			for (var v = m.length; q < v; q++) {
				var t = m[q];
				if (t) {
					t = t[g];
					for (var y = false; t;) {
						if (t.sizcache === l) {
							y = m[t.sizset];
							break
						}
						if (t.nodeType === 1) {
							if (!p) {
								t.sizcache = l;
								t.sizset = q
							}
							if (typeof h !== "string") {
								if (t === h) {
									y = true;
									break
								}
							} else {
								if (k.filter(h, [t]).length > 0) {
									y = t;
									break
								}
							}
						}
						t = t[g]
					}
					m[q] = y
				}
			}
		};
		var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
		e = 0,
		j = Object.prototype.toString,
		i = false,
		o = true; [0, 0].sort(function() {
			o = false;
			return 0
		});
		var k = function(g, h, l, m) {
			l = l || [];
			var q = h = h || s;
			if (h.nodeType !== 1 && h.nodeType !== 9) {
				return []
			}
			if (!g || typeof g !== "string") {
				return l
			}
			for (var p = [], v, t, y, S, H = true, M = x(h), I = g; (f.exec(""), v = f.exec(I)) !== null;) {
				I = v[3];
				p.push(v[1]);
				if (v[2]) {
					S = v[3];
					break
				}
			}
			if (p.length > 1 && r.exec(g)) {
				if (p.length === 2 && n.relative[p[0]]) {
					t = ga(p[0] + p[1], h)
				} else {
					for (t = n.relative[p[0]] ? [h] : k(p.shift(), h); p.length;) {
						g = p.shift();
						if (n.relative[g]) {
							g += p.shift()
						}
						t = ga(g, t)
					}
				}
			} else {
				if (!m && p.length > 1 && h.nodeType === 9 && !M && n.match.ID.test(p[0]) && !n.match.ID.test(p[p.length - 1])) {
					v = k.find(p.shift(), h, M);
					h = v.expr ? k.filter(v.expr, v.set)[0] : v.set[0]
				}
				if (h) {
					v = m ? {
						expr: p.pop(),
						set: z(m)
					}: k.find(p.pop(), p.length === 1 && (p[0] === "~" || p[0] === "+") && h.parentNode ? h.parentNode: h, M);
					t = v.expr ? k.filter(v.expr, v.set) : v.set;
					if (p.length > 0) {
						y = z(t)
					} else {
						H = false
					}
					for (; p.length;) {
						var D = p.pop();
						v = D;
						if (n.relative[D]) {
							v = p.pop()
						} else {
							D = ""
						}
						if (v == null) {
							v = h
						}
						n.relative[D](y, v, M)
					}
				} else {
					y = []
				}
			}
			y || (y = t);
			y || k.error(D || g);
			if (j.call(y) === "[object Array]") {
				if (H) {
					if (h && h.nodeType === 1) {
						for (g = 0; y[g] != null; g++) {
							if (y[g] && (y[g] === true || y[g].nodeType === 1 && E(h, y[g]))) {
								l.push(t[g])
							}
						}
					} else {
						for (g = 0; y[g] != null; g++) {
							y[g] && y[g].nodeType === 1 && l.push(t[g])
						}
					}
				} else {
					l.push.apply(l, y)
				}
			} else {
				z(y, l)
			}
			if (S) {
				k(S, q, l, m);
				k.uniqueSort(l)
			}
			return l
		};
		k.uniqueSort = function(g) {
			if (B) {
				i = o;
				g.sort(B);
				if (i) {
					for (var h = 1; h < g.length; h++) {
						g[h] === g[h - 1] && g.splice(h--, 1)
					}
				}
			}
			return g
		};
		k.matches = function(g, h) {
			return k(g, null, null, h)
		};
		k.find = function(g, h, l) {
			var m, q;
			if (!g) {
				return []
			}
			for (var p = 0,
			v = n.order.length; p < v; p++) {
				var t = n.order[p];
				if (q = n.leftMatch[t].exec(g)) {
					var y = q[1];
					q.splice(1, 1);
					if (y.substr(y.length - 1) !== "\\") {
						q[1] = (q[1] || "").replace(/\\/g, "");
						m = n.find[t](q, h, l);
						if (m != null) {
							g = g.replace(n.match[t], "");
							break
						}
					}
				}
			}
			m || (m = h.getElementsByTagName("*"));
			return {
				set: m,
				expr: g
			}
		};
		k.filter = function(g, h, l, m) {
			for (var q = g,
			p = [], v = h, t, y, S = h && h[0] && x(h[0]); g && h.length;) {
				for (var H in n.filter) {
					if ((t = n.leftMatch[H].exec(g)) != null && t[2]) {
						var M = n.filter[H],
						I,
						D;
						D = t[1];
						y = false;
						t.splice(1, 1);
						if (D.substr(D.length - 1) !== "\\") {
							if (v === p) {
								p = []
							}
							if (n.preFilter[H]) {
								if (t = n.preFilter[H](t, v, l, p, m, S)) {
									if (t === true) {
										continue
									}
								} else {
									y = I = true
								}
							}
							if (t) {
								for (var U = 0; (D = v[U]) != null; U++) {
									if (D) {
										I = M(D, t, U, v);
										var Ha = m ^ !!I;
										if (l && I != null) {
											if (Ha) {
												y = true
											} else {
												v[U] = false
											}
										} else {
											if (Ha) {
												p.push(D);
												y = true
											}
										}
									}
								}
							}
							if (I !== w) {
								l || (v = p);
								g = g.replace(n.match[H], "");
								if (!y) {
									return []
								}
								break
							}
						}
					}
				}
				if (g === q) {
					if (y == null) {
						k.error(g)
					} else {
						break
					}
				}
				q = g
			}
			return v
		};
		k.error = function(g) {
			throw "Syntax error, unrecognized expression: " + g
		};
		var n = k.selectors = {
			order: ["ID", "NAME", "TAG"],
			match: {
				ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
				CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
				NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
				ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
				TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
				CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
				POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
				PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch: {},
			attrMap: {
				"class": "className",
				"for": "htmlFor"
			},
			attrHandle: {
				href: function(g) {
					return g.getAttribute("href")
				}
			},
			relative: {
				"+": function(g, h) {
					var l = typeof h === "string",
					m = l && !/\W/.test(h);
					l = l && !m;
					if (m) {
						h = h.toLowerCase()
					}
					m = 0;
					for (var q = g.length,
					p; m < q; m++) {
						if (p = g[m]) {
							for (; (p = p.previousSibling) && p.nodeType !== 1;) {}
							g[m] = l || p && p.nodeName.toLowerCase() === h ? p || false: p === h
						}
					}
					l && k.filter(h, g, true)
				},
				">": function(g, h) {
					var l = typeof h === "string";
					if (l && !/\W/.test(h)) {
						h = h.toLowerCase();
						for (var m = 0,
						q = g.length; m < q; m++) {
							var p = g[m];
							if (p) {
								l = p.parentNode;
								g[m] = l.nodeName.toLowerCase() === h ? l: false
							}
						}
					} else {
						m = 0;
						for (q = g.length; m < q; m++) {
							if (p = g[m]) {
								g[m] = l ? p.parentNode: p.parentNode === h
							}
						}
						l && k.filter(h, g, true)
					}
				},
				"": function(g, h, l) {
					var m = e++,
					q = d;
					if (typeof h === "string" && !/\W/.test(h)) {
						var p = h = h.toLowerCase();
						q = b
					}
					q("parentNode", h, m, g, p, l)
				},
				"~": function(g, h, l) {
					var m = e++,
					q = d;
					if (typeof h === "string" && !/\W/.test(h)) {
						var p = h = h.toLowerCase();
						q = b
					}
					q("previousSibling", h, m, g, p, l)
				}
			},
			find: {
				ID: function(g, h, l) {
					if (typeof h.getElementById !== "undefined" && !l) {
						return (g = h.getElementById(g[1])) ? [g] : []
					}
				},
				NAME: function(g, h) {
					if (typeof h.getElementsByName !== "undefined") {
						var l = [];
						h = h.getElementsByName(g[1]);
						for (var m = 0,
						q = h.length; m < q; m++) {
							h[m].getAttribute("name") === g[1] && l.push(h[m])
						}
						return l.length === 0 ? null: l
					}
				},
				TAG: function(g, h) {
					return h.getElementsByTagName(g[1])
				}
			},
			preFilter: {
				CLASS: function(g, h, l, m, q, p) {
					g = " " + g[1].replace(/\\/g, "") + " ";
					if (p) {
						return g
					}
					p = 0;
					for (var v; (v = h[p]) != null; p++) {
						if (v) {
							if (q ^ (v.className && (" " + v.className + " ").replace(/[\t\n]/g, " ").indexOf(g) >= 0)) {
								l || m.push(v)
							} else {
								if (l) {
									h[p] = false
								}
							}
						}
					}
					return false
				},
				ID: function(g) {
					return g[1].replace(/\\/g, "")
				},
				TAG: function(g) {
					return g[1].toLowerCase()
				},
				CHILD: function(g) {
					if (g[1] === "nth") {
						var h = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2] === "even" && "2n" || g[2] === "odd" && "2n+1" || !/\D/.test(g[2]) && "0n+" + g[2] || g[2]);
						g[2] = h[1] + (h[2] || 1) - 0;
						g[3] = h[3] - 0
					}
					g[0] = e++;
					return g
				},
				ATTR: function(g, h, l, m, q, p) {
					h = g[1].replace(/\\/g, "");
					if (!p && n.attrMap[h]) {
						g[1] = n.attrMap[h]
					}
					if (g[2] === "~=") {
						g[4] = " " + g[4] + " "
					}
					return g
				},
				PSEUDO: function(g, h, l, m, q) {
					if (g[1] === "not") {
						if ((f.exec(g[3]) || "").length > 1 || /^\w/.test(g[3])) {
							g[3] = k(g[3], null, null, h)
						} else {
							g = k.filter(g[3], h, l, true ^ q);
							l || m.push.apply(m, g);
							return false
						}
					} else {
						if (n.match.POS.test(g[0]) || n.match.CHILD.test(g[0])) {
							return true
						}
					}
					return g
				},
				POS: function(g) {
					g.unshift(true);
					return g
				}
			},
			filters: {
				enabled: function(g) {
					return g.disabled === false && g.type !== "hidden"
				},
				disabled: function(g) {
					return g.disabled === true
				},
				checked: function(g) {
					return g.checked === true
				},
				selected: function(g) {
					return g.selected === true
				},
				parent: function(g) {
					return !! g.firstChild
				},
				empty: function(g) {
					return ! g.firstChild
				},
				has: function(g, h, l) {
					return !! k(l[3], g).length
				},
				header: function(g) {
					return /h\d/i.test(g.nodeName)
				},
				text: function(g) {
					return "text" === g.type
				},
				radio: function(g) {
					return "radio" === g.type
				},
				checkbox: function(g) {
					return "checkbox" === g.type
				},
				file: function(g) {
					return "file" === g.type
				},
				password: function(g) {
					return "password" === g.type
				},
				submit: function(g) {
					return "submit" === g.type
				},
				image: function(g) {
					return "image" === g.type
				},
				reset: function(g) {
					return "reset" === g.type
				},
				button: function(g) {
					return "button" === g.type || g.nodeName.toLowerCase() === "button"
				},
				input: function(g) {
					return /input|select|textarea|button/i.test(g.nodeName)
				}
			},
			setFilters: {
				first: function(g, h) {
					return h === 0
				},
				last: function(g, h, l, m) {
					return h === m.length - 1
				},
				even: function(g, h) {
					return h % 2 === 0
				},
				odd: function(g, h) {
					return h % 2 === 1
				},
				lt: function(g, h, l) {
					return h < l[3] - 0
				},
				gt: function(g, h, l) {
					return h > l[3] - 0
				},
				nth: function(g, h, l) {
					return l[3] - 0 === h
				},
				eq: function(g, h, l) {
					return l[3] - 0 === h
				}
			},
			filter: {
				PSEUDO: function(g, h, l, m) {
					var q = h[1],
					p = n.filters[q];
					if (p) {
						return p(g, l, h, m)
					} else {
						if (q === "contains") {
							return (g.textContent || g.innerText || a([g]) || "").indexOf(h[3]) >= 0
						} else {
							if (q === "not") {
								h = h[3];
								l = 0;
								for (m = h.length; l < m; l++) {
									if (h[l] === g) {
										return false
									}
								}
								return true
							} else {
								k.error("Syntax error, unrecognized expression: " + q)
							}
						}
					}
				},
				CHILD: function(g, h) {
					var l = h[1],
					m = g;
					switch (l) {
					case "only":
					case "first":
						for (; m = m.previousSibling;) {
							if (m.nodeType === 1) {
								return false
							}
						}
						if (l === "first") {
							return true
						}
						m = g;
					case "last":
						for (; m = m.nextSibling;) {
							if (m.nodeType === 1) {
								return false
							}
						}
						return true;
					case "nth":
						l = h[2];
						var q = h[3];
						if (l === 1 && q === 0) {
							return true
						}
						h = h[0];
						var p = g.parentNode;
						if (p && (p.sizcache !== h || !g.nodeIndex)) {
							var v = 0;
							for (m = p.firstChild; m; m = m.nextSibling) {
								if (m.nodeType === 1) {
									m.nodeIndex = ++v
								}
							}
							p.sizcache = h
						}
						g = g.nodeIndex - q;
						return l === 0 ? g === 0 : g % l === 0 && g / l >= 0
					}
				},
				ID: function(g, h) {
					return g.nodeType === 1 && g.getAttribute("id") === h
				},
				TAG: function(g, h) {
					return h === "*" && g.nodeType === 1 || g.nodeName.toLowerCase() === h
				},
				CLASS: function(g, h) {
					return (" " + (g.className || g.getAttribute("class")) + " ").indexOf(h) > -1
				},
				ATTR: function(g, h) {
					var l = h[1];
					g = n.attrHandle[l] ? n.attrHandle[l](g) : g[l] != null ? g[l] : g.getAttribute(l);
					l = g + "";
					var m = h[2];
					h = h[4];
					return g == null ? m === "!=": m === "=" ? l === h: m === "*=" ? l.indexOf(h) >= 0 : m === "~=" ? (" " + l + " ").indexOf(h) >= 0 : !h ? l && g !== false: m === "!=" ? l !== h: m === "^=" ? l.indexOf(h) === 0 : m === "$=" ? l.substr(l.length - h.length) === h: m === "|=" ? l === h || l.substr(0, h.length + 1) === h + "-": false
				},
				POS: function(g, h, l, m) {
					var q = n.setFilters[h[2]];
					if (q) {
						return q(g, l, h, m)
					}
				}
			}
		},
		r = n.match.POS;
		for (var u in n.match) {
			n.match[u] = new RegExp(n.match[u].source + /(?![^\[]*\])(?![^\(]*\))/.source);
			n.leftMatch[u] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[u].source.replace(/\\(\d+)/g,
			function(g, h) {
				return "\\" + (h - 0 + 1)
			}))
		}
		var z = function(g, h) {
			g = Array.prototype.slice.call(g, 0);
			if (h) {
				h.push.apply(h, g);
				return h
			}
			return g
		};
		try {
			Array.prototype.slice.call(s.documentElement.childNodes, 0)
		} catch(C) {
			z = function(g, h) {
				h = h || [];
				if (j.call(g) === "[object Array]") {
					Array.prototype.push.apply(h, g)
				} else {
					if (typeof g.length === "number") {
						for (var l = 0,
						m = g.length; l < m; l++) {
							h.push(g[l])
						}
					} else {
						for (l = 0; g[l]; l++) {
							h.push(g[l])
						}
					}
				}
				return h
			}
		}
		var B;
		if (s.documentElement.compareDocumentPosition) {
			B = function(g, h) {
				if (!g.compareDocumentPosition || !h.compareDocumentPosition) {
					if (g == h) {
						i = true
					}
					return g.compareDocumentPosition ? -1 : 1
				}
				g = g.compareDocumentPosition(h) & 4 ? -1 : g === h ? 0 : 1;
				if (g === 0) {
					i = true
				}
				return g
			}
		} else {
			if ("sourceIndex" in s.documentElement) {
				B = function(g, h) {
					if (!g.sourceIndex || !h.sourceIndex) {
						if (g == h) {
							i = true
						}
						return g.sourceIndex ? -1 : 1
					}
					g = g.sourceIndex - h.sourceIndex;
					if (g === 0) {
						i = true
					}
					return g
				}
			} else {
				if (s.createRange) {
					B = function(g, h) {
						if (!g.ownerDocument || !h.ownerDocument) {
							if (g == h) {
								i = true
							}
							return g.ownerDocument ? -1 : 1
						}
						var l = g.ownerDocument.createRange(),
						m = h.ownerDocument.createRange();
						l.setStart(g, 0);
						l.setEnd(g, 0);
						m.setStart(h, 0);
						m.setEnd(h, 0);
						g = l.compareBoundaryPoints(Range.START_TO_END, m);
						if (g === 0) {
							i = true
						}
						return g
					}
				}
			}
		} (function() {
			var g = s.createElement("div"),
			h = "script" + (new Date).getTime();
			g.innerHTML = "<a name='" + h + "'/>";
			var l = s.documentElement;
			l.insertBefore(g, l.firstChild);
			if (s.getElementById(h)) {
				n.find.ID = function(m, q, p) {
					if (typeof q.getElementById !== "undefined" && !p) {
						return (q = q.getElementById(m[1])) ? q.id === m[1] || typeof q.getAttributeNode !== "undefined" && q.getAttributeNode("id").nodeValue === m[1] ? [q] : w: []
					}
				};
				n.filter.ID = function(m, q) {
					var p = typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id");
					return m.nodeType === 1 && p && p.nodeValue === q
				}
			}
			l.removeChild(g);
			l = g = null
		})(); (function() {
			var g = s.createElement("div");
			g.appendChild(s.createComment(""));
			if (g.getElementsByTagName("*").length > 0) {
				n.find.TAG = function(h, l) {
					l = l.getElementsByTagName(h[1]);
					if (h[1] === "*") {
						h = [];
						for (var m = 0; l[m]; m++) {
							l[m].nodeType === 1 && h.push(l[m])
						}
						l = h
					}
					return l
				}
			}
			g.innerHTML = "<a href='#'></a>";
			if (g.firstChild && typeof g.firstChild.getAttribute !== "undefined" && g.firstChild.getAttribute("href") !== "#") {
				n.attrHandle.href = function(h) {
					return h.getAttribute("href", 2)
				}
			}
			g = null
		})();
		s.querySelectorAll &&
		function() {
			var g = k,
			h = s.createElement("div");
			h.innerHTML = "<p class='TEST'></p>";
			if (! (h.querySelectorAll && h.querySelectorAll(".TEST").length === 0)) {
				k = function(m, q, p, v) {
					q = q || s;
					if (!v && q.nodeType === 9 && !x(q)) {
						try {
							return z(q.querySelectorAll(m), p)
						} catch(t) {}
					}
					return g(m, q, p, v)
				};
				for (var l in g) {
					k[l] = g[l]
				}
				h = null
			}
		} (); (function() {
			var g = s.createElement("div");
			g.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (! (!g.getElementsByClassName || g.getElementsByClassName("e").length === 0)) {
				g.lastChild.className = "e";
				if (g.getElementsByClassName("e").length !== 1) {
					n.order.splice(1, 0, "CLASS");
					n.find.CLASS = function(h, l, m) {
						if (typeof l.getElementsByClassName !== "undefined" && !m) {
							return l.getElementsByClassName(h[1])
						}
					};
					g = null
				}
			}
		})();
		var E = s.compareDocumentPosition ?
		function(g, h) {
			return !! (g.compareDocumentPosition(h) & 16)
		}: function(g, h) {
			return g !== h && (g.contains ? g.contains(h) : true)
		},
		x = function(g) {
			return (g = (g ? g.ownerDocument || g: 0).documentElement) ? g.nodeName !== "HTML": false
		},
		ga = function(g, h) {
			var l = [],
			m = "",
			q;
			for (h = h.nodeType ? [h] : h; q = n.match.PSEUDO.exec(g);) {
				m += q[0];
				g = g.replace(n.match.PSEUDO, "")
			}
			g = n.relative[g] ? g + "*": g;
			q = 0;
			for (var p = h.length; q < p; q++) {
				k(g, h[q], l)
			}
			return k.filter(m, l)
		};
		c.find = k;
		c.expr = k.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = k.uniqueSort;
		c.text = a;
		c.isXMLDoc = x;
		c.contains = E
	})();
	var eb = /Until$/,
	fb = /^(?:parents|prevUntil|prevAll)/,
	gb = /,/;
	R = Array.prototype.slice;
	var Ia = function(a, b, d) {
		if (c.isFunction(b)) {
			return c.grep(a,
			function(e, j) {
				return !! b.call(e, j, e) === d
			})
		} else {
			if (b.nodeType) {
				return c.grep(a,
				function(e) {
					return e === b === d
				})
			} else {
				if (typeof b === "string") {
					var f = c.grep(a,
					function(e) {
						return e.nodeType === 1
					});
					if (Ua.test(b)) {
						return c.filter(b, f, !d)
					} else {
						b = c.filter(b, f)
					}
				}
			}
		}
		return c.grep(a,
		function(e) {
			return c.inArray(e, b) >= 0 === d
		})
	};
	c.fn.extend({
		find: function(a) {
			for (var b = this.pushStack("", "find", a), d = 0, f = 0, e = this.length; f < e; f++) {
				d = b.length;
				c.find(a, this[f], b);
				if (f > 0) {
					for (var j = d; j < b.length; j++) {
						for (var i = 0; i < d; i++) {
							if (b[i] === b[j]) {
								b.splice(j--, 1);
								break
							}
						}
					}
				}
			}
			return b
		},
		has: function(a) {
			var b = c(a);
			return this.filter(function() {
				for (var d = 0,
				f = b.length; d < f; d++) {
					if (c.contains(this, b[d])) {
						return true
					}
				}
			})
		},
		not: function(a) {
			return this.pushStack(Ia(this, a, false), "not", a)
		},
		filter: function(a) {
			return this.pushStack(Ia(this, a, true), "filter", a)
		},
		is: function(a) {
			return !! a && c.filter(a, this).length > 0
		},
		closest: function(a, b) {
			if (c.isArray(a)) {
				var d = [],
				f = this[0],
				e,
				j = {},
				i;
				if (f && a.length) {
					e = 0;
					for (var o = a.length; e < o; e++) {
						i = a[e];
						j[i] || (j[i] = c.expr.match.POS.test(i) ? c(i, b || this.context) : i)
					}
					for (; f && f.ownerDocument && f !== b;) {
						for (i in j) {
							e = j[i];
							if (e.jquery ? e.index(f) > -1 : c(f).is(e)) {
								d.push({
									selector: i,
									elem: f
								});
								delete j[i]
							}
						}
						f = f.parentNode
					}
				}
				return d
			}
			var k = c.expr.match.POS.test(a) ? c(a, b || this.context) : null;
			return this.map(function(n, r) {
				for (; r && r.ownerDocument && r !== b;) {
					if (k ? k.index(r) > -1 : c(r).is(a)) {
						return r
					}
					r = r.parentNode
				}
				return null
			})
		},
		index: function(a) {
			if (!a || typeof a === "string") {
				return c.inArray(this[0], a ? c(a) : this.parent().children())
			}
			return c.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			a = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a);
			b = c.merge(this.get(), a);
			return this.pushStack(qa(a[0]) || qa(b[0]) ? b: c.unique(b))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	});
	c.each({
		parent: function(a) {
			return (a = a.parentNode) && a.nodeType !== 11 ? a: null
		},
		parents: function(a) {
			return c.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, d) {
			return c.dir(a, "parentNode", d)
		},
		next: function(a) {
			return c.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return c.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return c.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return c.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, d) {
			return c.dir(a, "nextSibling", d)
		},
		prevUntil: function(a, b, d) {
			return c.dir(a, "previousSibling", d)
		},
		siblings: function(a) {
			return c.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return c.sibling(a.firstChild)
		},
		contents: function(a) {
			return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: c.makeArray(a.childNodes)
		}
	},
	function(a, b) {
		c.fn[a] = function(d, f) {
			var e = c.map(this, b, d);
			eb.test(a) || (f = d);
			if (f && typeof f === "string") {
				e = c.filter(f, e)
			}
			e = this.length > 1 ? c.unique(e) : e;
			if ((this.length > 1 || gb.test(f)) && fb.test(a)) {
				e = e.reverse()
			}
			return this.pushStack(e, a, R.call(arguments).join(","))
		}
	});
	c.extend({
		filter: function(a, b, d) {
			if (d) {
				a = ":not(" + a + ")"
			}
			return c.find.matches(a, b)
		},
		dir: function(a, b, d) {
			var f = [];
			for (a = a[b]; a && a.nodeType !== 9 && (d === w || a.nodeType !== 1 || !c(a).is(d));) {
				a.nodeType === 1 && f.push(a);
				a = a[b]
			}
			return f
		},
		nth: function(a, b, d) {
			b = b || 1;
			for (var f = 0; a; a = a[d]) {
				if (a.nodeType === 1 && ++f === b) {
					break
				}
			}
			return a
		},
		sibling: function(a, b) {
			for (var d = []; a; a = a.nextSibling) {
				a.nodeType === 1 && a !== b && d.push(a)
			}
			return d
		}
	});
	var Ja = / jQuery\d+="(?:\d+|null)"/g,
	V = /^\s+/,
	Ka = /(<([\w:]+)[^>]*?)\/>/g,
	hb = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
	La = /<([\w:]+)/,
	ib = /<tbody/i,
	jb = /<|&#?\w+;/,
	ta = /<script|<object|<embed|<option|<style/i,
	ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
	Ma = function(a, b, d) {
		return hb.test(d) ? a: b + "></" + d + ">"
	},
	F = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area: [1, "<map>", "</map>"],
		_default: [0, "", ""]
	};
	F.optgroup = F.option;
	F.tbody = F.tfoot = F.colgroup = F.caption = F.thead;
	F.th = F.td;
	if (!c.support.htmlSerialize) {
		F._default = [1, "div<div>", "</div>"]
	}
	c.fn.extend({
		text: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(b) {
					var d = c(this);
					d.text(a.call(this, b, d.text()))
				})
			}
			if (typeof a !== "object" && a !== w) {
				return this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(a))
			}
			return c.text(this)
		},
		wrapAll: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(d) {
					c(this).wrapAll(a.call(this, d))
				})
			}
			if (this[0]) {
				var b = c(a, this[0].ownerDocument).eq(0).clone(true);
				this[0].parentNode && b.insertBefore(this[0]);
				b.map(function() {
					for (var d = this; d.firstChild && d.firstChild.nodeType === 1;) {
						d = d.firstChild
					}
					return d
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(b) {
					c(this).wrapInner(a.call(this, b))
				})
			}
			return this.each(function() {
				var b = c(this),
				d = b.contents();
				d.length ? d.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			return this.each(function() {
				c(this).wrapAll(a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, true,
			function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, true,
			function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) {
				return this.domManip(arguments, false,
				function(b) {
					this.parentNode.insertBefore(b, this)
				})
			} else {
				if (arguments.length) {
					var a = c(arguments[0]);
					a.push.apply(a, this.toArray());
					return this.pushStack(a, "before", arguments)
				}
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) {
				return this.domManip(arguments, false,
				function(b) {
					this.parentNode.insertBefore(b, this.nextSibling)
				})
			} else {
				if (arguments.length) {
					var a = this.pushStack(this, "after", arguments);
					a.push.apply(a, c(arguments[0]).toArray());
					return a
				}
			}
		},
		remove: function(a, b) {
			for (var d = 0,
			f; (f = this[d]) != null; d++) {
				if (!a || c.filter(a, [f]).length) {
					if (!b && f.nodeType === 1) {
						c.cleanData(f.getElementsByTagName("*"));
						c.cleanData([f])
					}
					f.parentNode && f.parentNode.removeChild(f)
				}
			}
			return this
		},
		empty: function() {
			for (var a = 0,
			b; (b = this[a]) != null; a++) {
				for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) {
					b.removeChild(b.firstChild)
				}
			}
			return this
		},
		clone: function(a) {
			var b = this.map(function() {
				if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
					var d = this.outerHTML,
					f = this.ownerDocument;
					if (!d) {
						d = f.createElement("div");
						d.appendChild(this.cloneNode(true));
						d = d.innerHTML
					}
					return c.clean([d.replace(Ja, "").replace(/=([^="'>\s]+\/)>/g, "=\"$1\">").replace(V, "")], f)[0]
				} else {
					return this.cloneNode(true)
				}
			});
			if (a === true) {
				ra(this, b);
				ra(this.find("*"), b.find("*"))
			}
			return b
		},
		html: function(a) {
			if (a === w) {
				return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Ja, "") : null
			} else {
				if (typeof a === "string" && !ta.test(a) && (c.support.leadingWhitespace || !V.test(a)) && !F[(La.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Ka, Ma);
					try {
						for (var b = 0,
						d = this.length; b < d; b++) {
							if (this[b].nodeType === 1) {
								c.cleanData(this[b].getElementsByTagName("*"));
								this[b].innerHTML = a
							}
						}
					} catch(f) {
						this.empty().append(a)
					}
				} else {
					c.isFunction(a) ? this.each(function(e) {
						var j = c(this),
						i = j.html();
						j.empty().append(function() {
							return a.call(this, e, i)
						})
					}) : this.empty().append(a)
				}
			}
			return this
		},
		replaceWith: function(a) {
			if (this[0] && this[0].parentNode) {
				if (c.isFunction(a)) {
					return this.each(function(b) {
						var d = c(this),
						f = d.html();
						d.replaceWith(a.call(this, b, f))
					})
				}
				if (typeof a !== "string") {
					a = c(a).detach()
				}
				return this.each(function() {
					var b = this.nextSibling,
					d = this.parentNode;
					c(this).remove();
					b ? c(b).before(a) : c(d).append(a)
				})
			} else {
				return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
			}
		},
		detach: function(a) {
			return this.remove(a, true)
		},
		domManip: function(a, b, d) {
			function f(u) {
				return c.nodeName(u, "table") ? u.getElementsByTagName("tbody")[0] || u.appendChild(u.ownerDocument.createElement("tbody")) : u
			};
			var e, j, i = a[0],
			o = [],
			k;
			if (!c.support.checkClone && arguments.length === 3 && typeof i === "string" && ua.test(i)) {
				return this.each(function() {
					c(this).domManip(a, b, d, true)
				})
			}
			if (c.isFunction(i)) {
				return this.each(function(u) {
					var z = c(this);
					a[0] = i.call(this, u, b ? z.html() : w);
					z.domManip(a, b, d)
				})
			}
			if (this[0]) {
				e = i && i.parentNode;
				e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {
					fragment: e
				}: sa(a, this, o);
				k = e.fragment;
				if (j = k.childNodes.length === 1 ? (k = k.firstChild) : k.firstChild) {
					b = b && c.nodeName(j, "tr");
					for (var n = 0,
					r = this.length; n < r; n++) {
						d.call(b ? f(this[n], j) : this[n], n > 0 || e.cacheable || this.length > 1 ? k.cloneNode(true) : k)
					}
				}
				o.length && c.each(o, Qa)
			}
			return this
		}
	});
	c.fragments = {};
	c.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(a, b) {
		c.fn[a] = function(d) {
			var f = [];
			d = c(d);
			var e = this.length === 1 && this[0].parentNode;
			if (e && e.nodeType === 11 && e.childNodes.length === 1 && d.length === 1) {
				d[b](this[0]);
				return this
			} else {
				e = 0;
				for (var j = d.length; e < j; e++) {
					var i = (e > 0 ? this.clone(true) : this).get();
					c.fn[b].apply(c(d[e]), i);
					f = f.concat(i)
				}
				return this.pushStack(f, a, d.selector)
			}
		}
	});
	c.extend({
		clean: function(a, b, d, f) {
			b = b || s;
			if (typeof b.createElement === "undefined") {
				b = b.ownerDocument || b[0] && b[0].ownerDocument || s
			}
			for (var e = [], j = 0, i; (i = a[j]) != null; j++) {
				if (typeof i === "number") {
					i += ""
				}
				if (i) {
					if (typeof i === "string" && !jb.test(i)) {
						i = b.createTextNode(i)
					} else {
						if (typeof i === "string") {
							i = i.replace(Ka, Ma);
							var o = (La.exec(i) || ["", ""])[1].toLowerCase(),
							k = F[o] || F._default,
							n = k[0],
							r = b.createElement("div");
							for (r.innerHTML = k[1] + i + k[2]; n--;) {
								r = r.lastChild
							}
							if (!c.support.tbody) {
								n = ib.test(i);
								o = o === "table" && !n ? r.firstChild && r.firstChild.childNodes: k[1] === "<table>" && !n ? r.childNodes: [];
								for (k = o.length - 1; k >= 0; --k) {
									c.nodeName(o[k], "tbody") && !o[k].childNodes.length && o[k].parentNode.removeChild(o[k])
								}
							} ! c.support.leadingWhitespace && V.test(i) && r.insertBefore(b.createTextNode(V.exec(i)[0]), r.firstChild);
							i = r.childNodes
						}
					}
					if (i.nodeType) {
						e.push(i)
					} else {
						e = c.merge(e, i)
					}
				}
			}
			if (d) {
				for (j = 0; e[j]; j++) {
					if (f && c.nodeName(e[j], "script") && (!e[j].type || e[j].type.toLowerCase() === "text/javascript")) {
						f.push(e[j].parentNode ? e[j].parentNode.removeChild(e[j]) : e[j])
					} else {
						e[j].nodeType === 1 && e.splice.apply(e, [j + 1, 0].concat(c.makeArray(e[j].getElementsByTagName("script"))));
						d.appendChild(e[j])
					}
				}
			}
			return e
		},
		cleanData: function(a) {
			for (var b, d, f = c.cache,
			e = c.event.special,
			j = c.support.deleteExpando,
			i = 0,
			o; (o = a[i]) != null; i++) {
				if (d = o[c.expando]) {
					b = f[d];
					if (b.events) {
						for (var k in b.events) {
							e[k] ? c.event.remove(o, k) : Ca(o, k, b.handle)
						}
					}
					if (j) {
						delete o[c.expando]
					} else {
						o.removeAttribute && o.removeAttribute(c.expando)
					}
					delete f[d]
				}
			}
		}
	});
	var kb = /z-?index|font-?weight|opacity|zoom|line-?height/i,
	Na = /alpha\([^)]*\)/,
	Oa = /opacity=([^)]*)/,
	ha = /float/i,
	ia = /-([a-z])/ig,
	lb = /([A-Z])/g,
	mb = /^-?\d+(?:px)?$/i,
	nb = /^-?\d/,
	ob = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	pb = ["Left", "Right"],
	qb = ["Top", "Bottom"],
	rb = s.defaultView && s.defaultView.getComputedStyle,
	Pa = c.support.cssFloat ? "cssFloat": "styleFloat",
	ja = function(a, b) {
		return b.toUpperCase()
	};
	c.fn.css = function(a, b) {
		return X(this, a, b, true,
		function(d, f, e) {
			if (e === w) {
				return c.curCSS(d, f)
			}
			if (typeof e === "number" && !kb.test(f)) {
				e += "px"
			}
			c.style(d, f, e)
		})
	};
	c.extend({
		style: function(a, b, d) {
			if (!a || a.nodeType === 3 || a.nodeType === 8) {
				return w
			}
			if ((b === "width" || b === "height") && parseFloat(d) < 0) {
				d = w
			}
			var f = a.style || a,
			e = d !== w;
			if (!c.support.opacity && b === "opacity") {
				if (e) {
					f.zoom = 1;
					b = parseInt(d, 10) + "" === "NaN" ? "": "alpha(opacity=" + d * 100 + ")";
					a = f.filter || c.curCSS(a, "filter") || "";
					f.filter = Na.test(a) ? a.replace(Na, b) : b
				}
				return f.filter && f.filter.indexOf("opacity=") >= 0 ? parseFloat(Oa.exec(f.filter)[1]) / 100 + "": ""
			}
			if (ha.test(b)) {
				b = Pa
			}
			b = b.replace(ia, ja);
			if (e) {
				f[b] = d
			}
			return f[b]
		},
		css: function(a, b, d, f) {
			if (b === "width" || b === "height") {
				var e, j = b === "width" ? pb: qb;
				function i() {
					e = b === "width" ? a.offsetWidth: a.offsetHeight;
					f !== "border" && c.each(j,
					function() {
						f || (e -= parseFloat(c.curCSS(a, "padding" + this, true)) || 0);
						if (f === "margin") {
							e += parseFloat(c.curCSS(a, "margin" + this, true)) || 0
						} else {
							e -= parseFloat(c.curCSS(a, "border" + this + "Width", true)) || 0
						}
					})
				};
				a.offsetWidth !== 0 ? i() : c.swap(a, ob, i);
				return Math.max(0, Math.round(e))
			}
			return c.curCSS(a, b, d)
		},
		curCSS: function(a, b, d) {
			var f, e = a.style;
			if (!c.support.opacity && b === "opacity" && a.currentStyle) {
				f = Oa.test(a.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "": "";
				return f === "" ? "1": f
			}
			if (ha.test(b)) {
				b = Pa
			}
			if (!d && e && e[b]) {
				f = e[b]
			} else {
				if (rb) {
					if (ha.test(b)) {
						b = "float"
					}
					b = b.replace(lb, "-$1").toLowerCase();
					e = a.ownerDocument.defaultView;
					if (!e) {
						return null
					}
					if (a = e.getComputedStyle(a, null)) {
						f = a.getPropertyValue(b)
					}
					if (b === "opacity" && f === "") {
						f = "1"
					}
				} else {
					if (a.currentStyle) {
						d = b.replace(ia, ja);
						f = a.currentStyle[b] || a.currentStyle[d];
						if (!mb.test(f) && nb.test(f)) {
							b = e.left;
							var j = a.runtimeStyle.left;
							a.runtimeStyle.left = a.currentStyle.left;
							e.left = d === "fontSize" ? "1em": f || 0;
							f = e.pixelLeft + "px";
							e.left = b;
							a.runtimeStyle.left = j
						}
					}
				}
			}
			return f
		},
		swap: function(a, b, d) {
			var f = {};
			for (var e in b) {
				f[e] = a.style[e];
				a.style[e] = b[e]
			}
			d.call(a);
			for (e in b) {
				a.style[e] = f[e]
			}
		}
	});
	if (c.expr && c.expr.filters) {
		c.expr.filters.hidden = function(a) {
			var b = a.offsetWidth,
			d = a.offsetHeight,
			f = a.nodeName.toLowerCase() === "tr";
			return b === 0 && d === 0 && !f ? true: b > 0 && d > 0 && !f ? false: c.curCSS(a, "display") === "none"
		};
		c.expr.filters.visible = function(a) {
			return ! c.expr.filters.hidden(a)
		}
	}
	var sb = J(),
	tb = /<script(.|\s)*?\/script>/gi,
	ub = /select|textarea/i,
	vb = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
	N = /=\?(&|$)/,
	ka = /\?/,
	wb = /(\?|&)_=.*?(&|$)/,
	xb = /^(\w+:)?\/\/([^\/?#]+)/,
	yb = /%20/g,
	zb = c.fn.load;
	c.fn.extend({
		load: function(a, b, d) {
			if (typeof a !== "string") {
				return zb.call(this, a)
			} else {
				if (!this.length) {
					return this
				}
			}
			var f = a.indexOf(" ");
			if (f >= 0) {
				var e = a.slice(f, a.length);
				a = a.slice(0, f)
			}
			f = "GET";
			if (b) {
				if (c.isFunction(b)) {
					d = b;
					b = null
				} else {
					if (typeof b === "object") {
						b = c.param(b, c.ajaxSettings.traditional);
						f = "POST"
					}
				}
			}
			var j = this;
			c.ajax({
				url: a,
				type: f,
				dataType: "html",
				data: b,
				complete: function(i, o) {
					if (o === "success" || o === "notmodified") {
						j.html(e ? c("<div />").append(i.responseText.replace(tb, "")).find(e) : i.responseText)
					}
					d && j.each(d, [i.responseText, o, i])
				}
			});
			return this
		},
		serialize: function() {
			return c.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || ub.test(this.nodeName) || vb.test(this.type))
			}).map(function(a, b) {
				a = c(this).val();
				return a == null ? null: c.isArray(a) ? c.map(a,
				function(d) {
					return {
						name: b.name,
						value: d
					}
				}) : {
					name: b.name,
					value: a
				}
			}).get()
		}
	});
	c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
	function(a, b) {
		c.fn[b] = function(d) {
			return this.bind(b, d)
		}
	});
	c.extend({
		get: function(a, b, d, f) {
			if (c.isFunction(b)) {
				f = f || d;
				d = b;
				b = null
			}
			return c.ajax({
				type: "GET",
				url: a,
				data: b,
				success: d,
				dataType: f
			})
		},
		getScript: function(a, b) {
			return c.get(a, null, b, "script")
		},
		getJSON: function(a, b, d) {
			return c.get(a, b, d, "json")
		},
		post: function(a, b, d, f) {
			if (c.isFunction(b)) {
				f = f || d;
				d = b;
				b = {}
			}
			return c.ajax({
				type: "POST",
				url: a,
				data: b,
				success: d,
				dataType: f
			})
		},
		ajaxSetup: function(a) {
			c.extend(c.ajaxSettings, a)
		},
		ajaxSettings: {
			url: location.href,
			global: true,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: true,
			async: true,
			xhr: A.XMLHttpRequest && (A.location.protocol !== "file:" || !A.ActiveXObject) ?
			function() {
				return new A.XMLHttpRequest
			}: function() {
				try {
					return new A.ActiveXObject("Microsoft.XMLHTTP")
				} catch(a) {}
			},
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				script: "text/javascript, application/javascript",
				json: "application/json, text/javascript",
				text: "text/plain",
				_default: "*/*"
			}
		},
		lastModified: {},
		etag: {},
		ajax: function(a) {
			function b() {
				e.success && e.success.call(k, o, i, x);
				e.global && f("ajaxSuccess", [x, e])
			};
			function d() {
				e.complete && e.complete.call(k, x, i);
				e.global && f("ajaxComplete", [x, e]);
				e.global && !--c.active && c.event.trigger("ajaxStop")
			};
			function f(q, p) { (e.context ? c(e.context) : c.event).trigger(q, p)
			};
			var e = c.extend(true, {},
			c.ajaxSettings, a),
			j,
			i,
			o,
			k = a && a.context || e,
			n = e.type.toUpperCase();
			if (e.data && e.processData && typeof e.data !== "string") {
				e.data = c.param(e.data, e.traditional)
			}
			if (e.dataType === "jsonp") {
				if (n === "GET") {
					N.test(e.url) || (e.url += (ka.test(e.url) ? "&": "?") + (e.jsonp || "callback") + "=?")
				} else {
					if (!e.data || !N.test(e.data)) {
						e.data = (e.data ? e.data + "&": "") + (e.jsonp || "callback") + "=?"
					}
				}
				e.dataType = "json"
			}
			if (e.dataType === "json" && (e.data && N.test(e.data) || N.test(e.url))) {
				j = e.jsonpCallback || "jsonp" + sb++;
				if (e.data) {
					e.data = (e.data + "").replace(N, "=" + j + "$1")
				}
				e.url = e.url.replace(N, "=" + j + "$1");
				e.dataType = "script";
				A[j] = A[j] ||
				function(q) {
					o = q;
					b();
					d();
					A[j] = w;
					try {
						delete A[j]
					} catch(p) {}
					z && z.removeChild(C)
				}
			}
			if (e.dataType === "script" && e.cache === null) {
				e.cache = false
			}
			if (e.cache === false && n === "GET") {
				var r = J(),
				u = e.url.replace(wb, "$1_=" + r + "$2");
				e.url = u + (u === e.url ? (ka.test(e.url) ? "&": "?") + "_=" + r: "")
			}
			if (e.data && n === "GET") {
				e.url += (ka.test(e.url) ? "&": "?") + e.data
			}
			e.global && !c.active++&&c.event.trigger("ajaxStart");
			r = (r = xb.exec(e.url)) && (r[1] && r[1] !== location.protocol || r[2] !== location.host);
			if (e.dataType === "script" && n === "GET" && r) {
				var z = s.getElementsByTagName("head")[0] || s.documentElement,
				C = s.createElement("script");
				C.src = e.url;
				if (e.scriptCharset) {
					C.charset = e.scriptCharset
				}
				if (!j) {
					var B = false;
					C.onload = C.onreadystatechange = function() {
						if (!B && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
							B = true;
							b();
							d();
							C.onload = C.onreadystatechange = null;
							z && C.parentNode && z.removeChild(C)
						}
					}
				}
				z.insertBefore(C, z.firstChild);
				return w
			}
			var E = false,
			x = e.xhr();
			if (x) {
				e.username ? x.open(n, e.url, e.async, e.username, e.password) : x.open(n, e.url, e.async);
				try {
					if (e.data || a && a.contentType) {
						x.setRequestHeader("Content-Type", e.contentType)
					}
					if (e.ifModified) {
						c.lastModified[e.url] && x.setRequestHeader("If-Modified-Since", c.lastModified[e.url]);
						c.etag[e.url] && x.setRequestHeader("If-None-Match", c.etag[e.url])
					}
					r || x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					x.setRequestHeader("Accept", e.dataType && e.accepts[e.dataType] ? e.accepts[e.dataType] + ", */*": e.accepts._default)
				} catch(ga) {}
				if (e.beforeSend && e.beforeSend.call(k, x, e) === false) {
					e.global && !--c.active && c.event.trigger("ajaxStop");
					x.abort();
					return false
				}
				e.global && f("ajaxSend", [x, e]);
				var g = x.onreadystatechange = function(q) {
					if (!x || x.readyState === 0 || q === "abort") {
						E || d();
						E = true;
						if (x) {
							x.onreadystatechange = c.noop
						}
					} else {
						if (!E && x && (x.readyState === 4 || q === "timeout")) {
							E = true;
							x.onreadystatechange = c.noop;
							i = q === "timeout" ? "timeout": !c.httpSuccess(x) ? "error": e.ifModified && c.httpNotModified(x, e.url) ? "notmodified": "success";
							var p;
							if (i === "success") {
								try {
									o = c.httpData(x, e.dataType, e)
								} catch(v) {
									i = "parsererror";
									p = v
								}
							}
							if (i === "success" || i === "notmodified") {
								j || b()
							} else {
								c.handleError(e, x, i, p)
							}
							d();
							q === "timeout" && x.abort();
							if (e.async) {
								x = null
							}
						}
					}
				};
				try {
					var h = x.abort;
					x.abort = function() {
						x && h.call(x);
						g("abort")
					}
				} catch(l) {}
				e.async && e.timeout > 0 && setTimeout(function() {
					x && !E && g("timeout")
				},
				e.timeout);
				try {
					x.send(n === "POST" || n === "PUT" || n === "DELETE" ? e.data: null)
				} catch(m) {
					c.handleError(e, x, null, m);
					d()
				}
				e.async || g();
				return x
			}
		},
		handleError: function(a, b, d, f) {
			if (a.error) {
				a.error.call(a.context || a, b, d, f)
			}
			if (a.global) { (a.context ? c(a.context) : c.event).trigger("ajaxError", [b, a, f])
			}
		},
		active: 0,
		httpSuccess: function(a) {
			try {
				return ! a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223 || a.status === 0
			} catch(b) {}
			return false
		},
		httpNotModified: function(a, b) {
			var d = a.getResponseHeader("Last-Modified"),
			f = a.getResponseHeader("Etag");
			if (d) {
				c.lastModified[b] = d
			}
			if (f) {
				c.etag[b] = f
			}
			return a.status === 304 || a.status === 0
		},
		httpData: function(a, b, d) {
			var f = a.getResponseHeader("content-type") || "",
			e = b === "xml" || !b && f.indexOf("xml") >= 0;
			a = e ? a.responseXML: a.responseText;
			e && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
			if (d && d.dataFilter) {
				a = d.dataFilter(a, b)
			}
			if (typeof a === "string") {
				if (b === "json" || !b && f.indexOf("json") >= 0) {
					a = c.parseJSON(a)
				} else {
					if (b === "script" || !b && f.indexOf("javascript") >= 0) {
						c.globalEval(a)
					}
				}
			}
			return a
		},
		param: function(a, b) {
			function d(i, o) {
				if (c.isArray(o)) {
					c.each(o,
					function(k, n) {
						b || /\[\]$/.test(i) ? f(i, n) : d(i + "[" + (typeof n === "object" || c.isArray(n) ? k: "") + "]", n)
					})
				} else { ! b && o != null && typeof o === "object" ? c.each(o,
					function(k, n) {
						d(i + "[" + k + "]", n)
					}) : f(i, o)
				}
			};
			function f(i, o) {
				o = c.isFunction(o) ? o() : o;
				e[e.length] = encodeURIComponent(i) + "=" + encodeURIComponent(o)
			};
			var e = [];
			if (b === w) {
				b = c.ajaxSettings.traditional
			}
			if (c.isArray(a) || a.jquery) {
				c.each(a,
				function() {
					f(this.name, this.value)
				})
			} else {
				for (var j in a) {
					d(j, a[j])
				}
			}
			return e.join("&").replace(yb, "+")
		}
	});
	var la = {},
	Ab = /toggle|show|hide/,
	Bb = /^([+-]=)?([\d+-.]+)(.*)$/,
	W, va = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
	c.fn.extend({
		show: function(a, b) {
			if (a || a === 0) {
				return this.animate(K("show", 3), a, b)
			} else {
				a = 0;
				for (b = this.length; a < b; a++) {
					var d = c.data(this[a], "olddisplay");
					this[a].style.display = d || "";
					if (c.css(this[a], "display") === "none") {
						d = this[a].nodeName;
						var f;
						if (la[d]) {
							f = la[d]
						} else {
							var e = c("<" + d + " />").appendTo("body");
							f = e.css("display");
							if (f === "none") {
								f = "block"
							}
							e.remove();
							la[d] = f
						}
						c.data(this[a], "olddisplay", f)
					}
				}
				a = 0;
				for (b = this.length; a < b; a++) {
					this[a].style.display = c.data(this[a], "olddisplay") || ""
				}
				return this
			}
		},
		hide: function(a, b) {
			if (a || a === 0) {
				return this.animate(K("hide", 3), a, b)
			} else {
				a = 0;
				for (b = this.length; a < b; a++) {
					var d = c.data(this[a], "olddisplay"); ! d && d !== "none" && c.data(this[a], "olddisplay", c.css(this[a], "display"))
				}
				a = 0;
				for (b = this.length; a < b; a++) {
					this[a].style.display = "none"
				}
				return this
			}
		},
		_toggle: c.fn.toggle,
		toggle: function(a, b) {
			var d = typeof a === "boolean";
			if (c.isFunction(a) && c.isFunction(b)) {
				this._toggle.apply(this, arguments)
			} else {
				a == null || d ? this.each(function() {
					var f = d ? a: c(this).is(":hidden");
					c(this)[f ? "show": "hide"]()
				}) : this.animate(K("toggle", 3), a, b)
			}
			return this
		},
		fadeTo: function(a, b, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			},
			a, d)
		},
		animate: function(a, b, d, f) {
			var e = c.speed(b, d, f);
			if (c.isEmptyObject(a)) {
				return this.each(e.complete)
			}
			return this[e.queue === false ? "each": "queue"](function() {
				var j = c.extend({},
				e),
				i,
				o = this.nodeType === 1 && c(this).is(":hidden"),
				k = this;
				for (i in a) {
					var n = i.replace(ia, ja);
					if (i !== n) {
						a[n] = a[i];
						delete a[i];
						i = n
					}
					if (a[i] === "hide" && o || a[i] === "show" && !o) {
						return j.complete.call(this)
					}
					if ((i === "height" || i === "width") && this.style) {
						j.display = c.css(this, "display");
						j.overflow = this.style.overflow
					}
					if (c.isArray(a[i])) { (j.specialEasing = j.specialEasing || {})[i] = a[i][1];
						a[i] = a[i][0]
					}
				}
				if (j.overflow != null) {
					this.style.overflow = "hidden"
				}
				j.curAnim = c.extend({},
				a);
				c.each(a,
				function(r, u) {
					var z = new c.fx(k, j, r);
					if (Ab.test(u)) {
						z[u === "toggle" ? o ? "show": "hide": u](a)
					} else {
						var C = Bb.exec(u),
						B = z.cur(true) || 0;
						if (C) {
							u = parseFloat(C[2]);
							var E = C[3] || "px";
							if (E !== "px") {
								k.style[r] = (u || 1) + E;
								B = (u || 1) / z.cur(true) * B;
								k.style[r] = B + E
							}
							if (C[1]) {
								u = (C[1] === "-=" ? -1 : 1) * u + B
							}
							z.custom(B, u, E)
						} else {
							z.custom(B, u, "")
						}
					}
				});
				return true
			})
		},
		stop: function(a, b) {
			var d = c.timers;
			a && this.queue([]);
			this.each(function() {
				for (var f = d.length - 1; f >= 0; f--) {
					if (d[f].elem === this) {
						b && d[f](true);
						d.splice(f, 1)
					}
				}
			});
			b || this.dequeue();
			return this
		}
	});
	c.each({
		slideDown: K("show", 1),
		slideUp: K("hide", 1),
		slideToggle: K("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		}
	},
	function(a, b) {
		c.fn[a] = function(d, f) {
			return this.animate(b, d, f)
		}
	});
	c.extend({
		speed: function(a, b, d) {
			var f = a && typeof a === "object" ? a: {
				complete: d || !d && b || c.isFunction(a) && a,
				duration: a,
				easing: d && b || b && !c.isFunction(b) && b
			};
			f.duration = c.fx.off ? 0 : typeof f.duration === "number" ? f.duration: c.fx.speeds[f.duration] || c.fx.speeds._default;
			f.old = f.complete;
			f.complete = function() {
				f.queue !== false && c(this).dequeue();
				c.isFunction(f.old) && f.old.call(this)
			};
			return f
		},
		easing: {
			linear: function(a, b, d, f) {
				return d + f * a
			},
			swing: function(a, b, d, f) {
				return ( - Math.cos(a * Math.PI) / 2 + 0.5) * f + d
			}
		},
		timers: [],
		fx: function(a, b, d) {
			this.options = b;
			this.elem = a;
			this.prop = d;
			if (!b.orig) {
				b.orig = {}
			}
		}
	});
	c.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this); (c.fx.step[this.prop] || c.fx.step._default)(this);
			if ((this.prop === "height" || this.prop === "width") && this.elem.style) {
				this.elem.style.display = "block"
			}
		},
		cur: function(a) {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
				return this.elem[this.prop]
			}
			return (a = parseFloat(c.css(this.elem, this.prop, a))) && a > -10000 ? a: parseFloat(c.curCSS(this.elem, this.prop)) || 0
		},
		custom: function(a, b, d) {
			function f(j) {
				return e.step(j)
			};
			this.startTime = J();
			this.start = a;
			this.end = b;
			this.unit = d || this.unit || "px";
			this.now = this.start;
			this.pos = this.state = 0;
			var e = this;
			f.elem = this.elem;
			if (f() && c.timers.push(f) && !W) {
				W = setInterval(c.fx.tick, 13)
			}
		},
		show: function() {
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.show = true;
			this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.hide = true;
			this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b = J(),
			d = true;
			if (a || b >= this.options.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				this.options.curAnim[this.prop] = true;
				for (var f in this.options.curAnim) {
					if (this.options.curAnim[f] !== true) {
						d = false
					}
				}
				if (d) {
					if (this.options.display != null) {
						this.elem.style.overflow = this.options.overflow;
						a = c.data(this.elem, "olddisplay");
						this.elem.style.display = a ? a: this.options.display;
						if (c.css(this.elem, "display") === "none") {
							this.elem.style.display = "block"
						}
					}
					this.options.hide && c(this.elem).hide();
					if (this.options.hide || this.options.show) {
						for (var e in this.options.curAnim) {
							c.style(this.elem, e, this.options.orig[e])
						}
					}
					this.options.complete.call(this.elem)
				}
				return false
			} else {
				e = b - this.startTime;
				this.state = e / this.options.duration;
				a = this.options.easing || (c.easing.swing ? "swing": "linear");
				this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || a](this.state, e, 0, 1, this.options.duration);
				this.now = this.start + (this.end - this.start) * this.pos;
				this.update()
			}
			return true
		}
	};
	c.extend(c.fx, {
		tick: function() {
			for (var a = c.timers,
			b = 0; b < a.length; b++) {
				a[b]() || a.splice(b--, 1)
			}
			a.length || c.fx.stop()
		},
		stop: function() {
			clearInterval(W);
			W = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				c.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				if (a.elem.style && a.elem.style[a.prop] != null) {
					a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit
				} else {
					a.elem[a.prop] = a.now
				}
			}
		}
	});
	if (c.expr && c.expr.filters) {
		c.expr.filters.animated = function(a) {
			return c.grep(c.timers,
			function(b) {
				return a === b.elem
			}).length
		}
	}
	c.fn.offset = "getBoundingClientRect" in s.documentElement ?
	function(a) {
		var b = this[0];
		if (a) {
			return this.each(function(e) {
				c.offset.setOffset(this, a, e)
			})
		}
		if (!b || !b.ownerDocument) {
			return null
		}
		if (b === b.ownerDocument.body) {
			return c.offset.bodyOffset(b)
		}
		var d = b.getBoundingClientRect(),
		f = b.ownerDocument;
		b = f.body;
		f = f.documentElement;
		return {
			top: d.top + (self.pageYOffset || c.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
			left: d.left + (self.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
		}
	}: function(a) {
		var b = this[0];
		if (a) {
			return this.each(function(r) {
				c.offset.setOffset(this, a, r)
			})
		}
		if (!b || !b.ownerDocument) {
			return null
		}
		if (b === b.ownerDocument.body) {
			return c.offset.bodyOffset(b)
		}
		c.offset.initialize();
		var d = b.offsetParent,
		f = b,
		e = b.ownerDocument,
		j, i = e.documentElement,
		o = e.body;
		f = (e = e.defaultView) ? e.getComputedStyle(b, null) : b.currentStyle;
		for (var k = b.offsetTop,
		n = b.offsetLeft; (b = b.parentNode) && b !== o && b !== i;) {
			if (c.offset.supportsFixedPosition && f.position === "fixed") {
				break
			}
			j = e ? e.getComputedStyle(b, null) : b.currentStyle;
			k -= b.scrollTop;
			n -= b.scrollLeft;
			if (b === d) {
				k += b.offsetTop;
				n += b.offsetLeft;
				if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(b.nodeName))) {
					k += parseFloat(j.borderTopWidth) || 0;
					n += parseFloat(j.borderLeftWidth) || 0
				}
				f = d;
				d = b.offsetParent
			}
			if (c.offset.subtractsBorderForOverflowNotVisible && j.overflow !== "visible") {
				k += parseFloat(j.borderTopWidth) || 0;
				n += parseFloat(j.borderLeftWidth) || 0
			}
			f = j
		}
		if (f.position === "relative" || f.position === "static") {
			k += o.offsetTop;
			n += o.offsetLeft
		}
		if (c.offset.supportsFixedPosition && f.position === "fixed") {
			k += Math.max(i.scrollTop, o.scrollTop);
			n += Math.max(i.scrollLeft, o.scrollLeft)
		}
		return {
			top: k,
			left: n
		}
	};
	c.offset = {
		initialize: function() {
			var a = s.body,
			b = s.createElement("div"),
			d,
			f,
			e,
			j = parseFloat(c.curCSS(a, "marginTop", true)) || 0;
			c.extend(b.style, {
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			});
			b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			a.insertBefore(b, a.firstChild);
			d = b.firstChild;
			f = d.firstChild;
			e = d.nextSibling.firstChild.firstChild;
			this.doesNotAddBorder = f.offsetTop !== 5;
			this.doesAddBorderForTableAndCells = e.offsetTop === 5;
			f.style.position = "fixed";
			f.style.top = "20px";
			this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15;
			f.style.position = f.style.top = "";
			d.style.overflow = "hidden";
			d.style.position = "relative";
			this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
			this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== j;
			a.removeChild(b);
			c.offset.initialize = c.noop
		},
		bodyOffset: function(a) {
			var b = a.offsetTop,
			d = a.offsetLeft;
			c.offset.initialize();
			if (c.offset.doesNotIncludeMarginInBodyOffset) {
				b += parseFloat(c.curCSS(a, "marginTop", true)) || 0;
				d += parseFloat(c.curCSS(a, "marginLeft", true)) || 0
			}
			return {
				top: b,
				left: d
			}
		},
		setOffset: function(a, b, d) {
			if (/static/.test(c.curCSS(a, "position"))) {
				a.style.position = "relative"
			}
			var f = c(a),
			e = f.offset(),
			j = parseInt(c.curCSS(a, "top", true), 10) || 0,
			i = parseInt(c.curCSS(a, "left", true), 10) || 0;
			if (c.isFunction(b)) {
				b = b.call(a, d, e)
			}
			d = {
				top: b.top - e.top + j,
				left: b.left - e.left + i
			};
			"using" in b ? b.using.call(a, d) : f.css(d)
		}
	};
	c.fn.extend({
		position: function() {
			if (!this[0]) {
				return null
			}
			var a = this[0],
			b = this.offsetParent(),
			d = this.offset(),
			f = /^body|html$/i.test(b[0].nodeName) ? {
				top: 0,
				left: 0
			}: b.offset();
			d.top -= parseFloat(c.curCSS(a, "marginTop", true)) || 0;
			d.left -= parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
			f.top += parseFloat(c.curCSS(b[0], "borderTopWidth", true)) || 0;
			f.left += parseFloat(c.curCSS(b[0], "borderLeftWidth", true)) || 0;
			return {
				top: d.top - f.top,
				left: d.left - f.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || s.body; a && !/^body|html$/i.test(a.nodeName) && c.css(a, "position") === "static";) {
					a = a.offsetParent
				}
				return a
			})
		}
	});
	c.each(["Left", "Top"],
	function(a, b) {
		var d = "scroll" + b;
		c.fn[d] = function(f) {
			var e = this[0],
			j;
			if (!e) {
				return null
			}
			if (f !== w) {
				return this.each(function() {
					if (j = wa(this)) {
						j.scrollTo(!a ? f: c(j).scrollLeft(), a ? f: c(j).scrollTop())
					} else {
						this[d] = f
					}
				})
			} else {
				return (j = wa(e)) ? "pageXOffset" in j ? j[a ? "pageYOffset": "pageXOffset"] : c.support.boxModel && j.document.documentElement[d] || j.document.body[d] : e[d]
			}
		}
	});
	c.each(["Height", "Width"],
	function(a, b) {
		var d = b.toLowerCase();
		c.fn["inner" + b] = function() {
			return this[0] ? c.css(this[0], d, false, "padding") : null
		};
		c.fn["outer" + b] = function(f) {
			return this[0] ? c.css(this[0], d, false, f ? "margin": "border") : null
		};
		c.fn[d] = function(f) {
			var e = this[0];
			if (!e) {
				return f == null ? null: this
			}
			if (c.isFunction(f)) {
				return this.each(function(j) {
					var i = c(this);
					i[d](f.call(this, j, i[d]()))
				})
			}
			return "scrollTo" in e && e.document ? e.document.compatMode === "CSS1Compat" && e.document.documentElement["client" + b] || e.document.body["client" + b] : e.nodeType === 9 ? Math.max(e.documentElement["client" + b], e.body["scroll" + b], e.documentElement["scroll" + b], e.body["offset" + b], e.documentElement["offset" + b]) : f === w ? c.css(e, d) : this.css(d, typeof f === "string" ? f: f + "px")
		}
	});
	A.jQuery = A.$ = c
})(window);
document.createElement("canvas").getContext || (function() {
	var s = Math,
	j = s.round,
	F = s.sin,
	G = s.cos,
	V = s.abs,
	W = s.sqrt,
	k = 10,
	v = k / 2;
	function X() {
		return this.context_ || (this.context_ = new H(this))
	};
	var L = Array.prototype.slice;
	function Y(b, a) {
		var c = L.call(arguments, 2);
		return function() {
			return b.apply(a, c.concat(L.call(arguments)))
		}
	};
	var M = {
		init: function(b) {
			if (/MSIE/.test(navigator.userAgent) && !window.opera) {
				var a = b || document;
				a.createElement("canvas");
				a.attachEvent("onreadystatechange", Y(this.init_, this, a))
			}
		},
		init_: function(b) {
			b.namespaces.g_vml_ || b.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
			b.namespaces.g_o_ || b.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
			if (!b.styleSheets.ex_canvas_) {
				var a = b.createStyleSheet();
				a.owningElement.id = "ex_canvas_";
				a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"
			}
			var c = b.getElementsByTagName("canvas"),
			d = 0;
			for (; d < c.length; d++) {
				this.initElement(c[d])
			}
		},
		initElement: function(b) {
			if (!b.getContext) {
				b.getContext = X;
				b.innerHTML = "";
				b.attachEvent("onpropertychange", Z);
				b.attachEvent("onresize", $);
				var a = b.attributes;
				if (a.width && a.width.specified) {
					b.style.width = a.width.nodeValue + "px"
				} else {
					b.width = b.clientWidth
				}
				if (a.height && a.height.specified) {
					b.style.height = a.height.nodeValue + "px"
				} else {
					b.height = b.clientHeight
				}
			}
			return b
		}
	};
	function Z(b) {
		var a = b.srcElement;
		switch (b.propertyName) {
		case "width":
			a.style.width = a.attributes.width.nodeValue + "px";
			a.getContext().clearRect();
			break;
		case "height":
			a.style.height = a.attributes.height.nodeValue + "px";
			a.getContext().clearRect();
			break
		}
	};
	function $(b) {
		var a = b.srcElement;
		if (a.firstChild) {
			a.firstChild.style.width = a.clientWidth + "px";
			a.firstChild.style.height = a.clientHeight + "px"
		}
	};
	M.init();
	var N = [],
	B = 0;
	for (; B < 16; B++) {
		var C = 0;
		for (; C < 16; C++) {
			N[B * 16 + C] = B.toString(16) + C.toString(16)
		}
	}
	function I() {
		return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
	};
	function y(b, a) {
		var c = I(),
		d = 0;
		for (; d < 3; d++) {
			var f = 0;
			for (; f < 3; f++) {
				var h = 0,
				g = 0;
				for (; g < 3; g++) {
					h += b[d][g] * a[g][f]
				}
				c[d][f] = h
			}
		}
		return c
	};
	function O(b, a) {
		a.fillStyle = b.fillStyle;
		a.lineCap = b.lineCap;
		a.lineJoin = b.lineJoin;
		a.lineWidth = b.lineWidth;
		a.miterLimit = b.miterLimit;
		a.shadowBlur = b.shadowBlur;
		a.shadowColor = b.shadowColor;
		a.shadowOffsetX = b.shadowOffsetX;
		a.shadowOffsetY = b.shadowOffsetY;
		a.strokeStyle = b.strokeStyle;
		a.globalAlpha = b.globalAlpha;
		a.arcScaleX_ = b.arcScaleX_;
		a.arcScaleY_ = b.arcScaleY_;
		a.lineScale_ = b.lineScale_
	};
	function P(b) {
		var a, c = 1;
		b = String(b);
		if (b.substring(0, 3) == "rgb") {
			var d = b.indexOf("(", 3),
			f = b.indexOf(")", d + 1),
			h = b.substring(d + 1, f).split(",");
			a = "#";
			var g = 0;
			for (; g < 3; g++) {
				a += N[Number(h[g])]
			}
			if (h.length == 4 && b.substr(3, 1) == "a") {
				c = h[3]
			}
		} else {
			a = b
		}
		return {
			color: a,
			alpha: c
		}
	};
	function aa(b) {
		switch (b) {
		case "butt":
			return "flat";
		case "round":
			return "round";
		case "square":
		default:
			return "square"
		}
	};
	function H(b) {
		this.m_ = I();
		this.mStack_ = [];
		this.aStack_ = [];
		this.currentPath_ = [];
		this.fillStyle = this.strokeStyle = "#000";
		this.lineWidth = 1;
		this.lineJoin = "miter";
		this.lineCap = "butt";
		this.miterLimit = k * 1;
		this.globalAlpha = 1;
		this.canvas = b;
		var a = b.ownerDocument.createElement("div");
		a.style.width = b.clientWidth + "px";
		a.style.height = b.clientHeight + "px";
		a.style.overflow = "hidden";
		a.style.position = "absolute";
		b.appendChild(a);
		this.element_ = a;
		this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
	};
	var i = H.prototype;
	i.clearRect = function() {
		this.element_.innerHTML = ""
	};
	i.beginPath = function() {
		this.currentPath_ = []
	};
	i.moveTo = function(b, a) {
		var c = this.getCoords_(b, a);
		this.currentPath_.push({
			type: "moveTo",
			x: c.x,
			y: c.y
		});
		this.currentX_ = c.x;
		this.currentY_ = c.y
	};
	i.lineTo = function(b, a) {
		var c = this.getCoords_(b, a);
		this.currentPath_.push({
			type: "lineTo",
			x: c.x,
			y: c.y
		});
		this.currentX_ = c.x;
		this.currentY_ = c.y
	};
	i.bezierCurveTo = function(b, a, c, d, f, h) {
		var g = this.getCoords_(f, h),
		l = this.getCoords_(b, a),
		e = this.getCoords_(c, d);
		Q(this, l, e, g)
	};
	function Q(b, a, c, d) {
		b.currentPath_.push({
			type: "bezierCurveTo",
			cp1x: a.x,
			cp1y: a.y,
			cp2x: c.x,
			cp2y: c.y,
			x: d.x,
			y: d.y
		});
		b.currentX_ = d.x;
		b.currentY_ = d.y
	};
	i.quadraticCurveTo = function(b, a, c, d) {
		var f = this.getCoords_(b, a),
		h = this.getCoords_(c, d),
		g = {
			x: this.currentX_ + 0.6666666666666666 * (f.x - this.currentX_),
			y: this.currentY_ + 0.6666666666666666 * (f.y - this.currentY_)
		};
		Q(this, g, {
			x: g.x + (h.x - this.currentX_) / 3,
			y: g.y + (h.y - this.currentY_) / 3
		},
		h)
	};
	i.arc = function(b, a, c, d, f, h) {
		c *= k;
		var g = h ? "at": "wa",
		l = b + G(d) * c - v,
		e = a + F(d) * c - v,
		m = b + G(f) * c - v,
		r = a + F(f) * c - v;
		if (l == m && !h) {
			l += 0.125
		}
		var n = this.getCoords_(b, a),
		o = this.getCoords_(l, e),
		q = this.getCoords_(m, r);
		this.currentPath_.push({
			type: g,
			x: n.x,
			y: n.y,
			radius: c,
			xStart: o.x,
			yStart: o.y,
			xEnd: q.x,
			yEnd: q.y
		})
	};
	i.rect = function(b, a, c, d) {
		this.moveTo(b, a);
		this.lineTo(b + c, a);
		this.lineTo(b + c, a + d);
		this.lineTo(b, a + d);
		this.closePath()
	};
	i.strokeRect = function(b, a, c, d) {
		var f = this.currentPath_;
		this.beginPath();
		this.moveTo(b, a);
		this.lineTo(b + c, a);
		this.lineTo(b + c, a + d);
		this.lineTo(b, a + d);
		this.closePath();
		this.stroke();
		this.currentPath_ = f
	};
	i.fillRect = function(b, a, c, d) {
		var f = this.currentPath_;
		this.beginPath();
		this.moveTo(b, a);
		this.lineTo(b + c, a);
		this.lineTo(b + c, a + d);
		this.lineTo(b, a + d);
		this.closePath();
		this.fill();
		this.currentPath_ = f
	};
	i.createLinearGradient = function(b, a, c, d) {
		var f = new D("gradient");
		f.x0_ = b;
		f.y0_ = a;
		f.x1_ = c;
		f.y1_ = d;
		return f
	};
	i.createRadialGradient = function(b, a, c, d, f, h) {
		var g = new D("gradientradial");
		g.x0_ = b;
		g.y0_ = a;
		g.r0_ = c;
		g.x1_ = d;
		g.y1_ = f;
		g.r1_ = h;
		return g
	};
	i.drawImage = function(b) {
		var a, c, d, f, h, g, l, e, m = b.runtimeStyle.width,
		r = b.runtimeStyle.height;
		b.runtimeStyle.width = "auto";
		b.runtimeStyle.height = "auto";
		var n = b.width,
		o = b.height;
		b.runtimeStyle.width = m;
		b.runtimeStyle.height = r;
		if (arguments.length == 3) {
			a = arguments[1];
			c = arguments[2];
			h = g = 0;
			l = d = n;
			e = f = o
		} else {
			if (arguments.length == 5) {
				a = arguments[1];
				c = arguments[2];
				d = arguments[3];
				f = arguments[4];
				h = g = 0;
				l = n;
				e = o
			} else {
				if (arguments.length == 9) {
					h = arguments[1];
					g = arguments[2];
					l = arguments[3];
					e = arguments[4];
					a = arguments[5];
					c = arguments[6];
					d = arguments[7];
					f = arguments[8]
				} else {
					throw Error("Invalid number of arguments")
				}
			}
		}
		var q = this.getCoords_(a, c),
		t = [];
		t.push(" <g_vml_:group", " coordsize=\"", k * 10, ",", k * 10, "\"", " coordorigin=\"0,0\"", " style=\"width:", 10, "px;height:", 10, "px;position:absolute;");
		if (this.m_[0][0] != 1 || this.m_[0][1]) {
			var E = [];
			E.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", j(q.x / k), ",", "Dy=", j(q.y / k), "");
			var p = q,
			z = this.getCoords_(a + d, c),
			w = this.getCoords_(a, c + f),
			x = this.getCoords_(a + d, c + f);
			p.x = s.max(p.x, z.x, w.x, x.x);
			p.y = s.max(p.y, z.y, w.y, x.y);
			t.push("padding:0 ", j(p.x / k), "px ", j(p.y / k), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", E.join(""), ", sizingmethod='clip');")
		} else {
			t.push("top:", j(q.y / k), "px;left:", j(q.x / k), "px;")
		}
		t.push(" \">", "<g_vml_:image src=\"", b.src, "\"", " style=\"width:", k * d, "px;", " height:", k * f, "px;\"", " cropleft=\"", h / n, "\"", " croptop=\"", g / o, "\"", " cropright=\"", (n - h - l) / n, "\"", " cropbottom=\"", (o - g - e) / o, "\"", " />", "</g_vml_:group>");
		this.element_.insertAdjacentHTML("BeforeEnd", t.join(""))
	};
	i.stroke = function(b) {
		var a = [],
		c = P(b ? this.fillStyle: this.strokeStyle),
		d = c.color,
		f = c.alpha * this.globalAlpha;
		a.push("<g_vml_:shape", " filled=\"", !!b, "\"", " style=\"position:absolute;width:", 10, "px;height:", 10, "px;\"", " coordorigin=\"0 0\" coordsize=\"", k * 10, " ", k * 10, "\"", " stroked=\"", !b, "\"", " path=\"");
		var h = {
			x: null,
			y: null
		},
		g = {
			x: null,
			y: null
		},
		l = 0;
		for (; l < this.currentPath_.length; l++) {
			var e = this.currentPath_[l];
			switch (e.type) {
			case "moveTo":
				a.push(" m ", j(e.x), ",", j(e.y));
				break;
			case "lineTo":
				a.push(" l ", j(e.x), ",", j(e.y));
				break;
			case "close":
				a.push(" x ");
				e = null;
				break;
			case "bezierCurveTo":
				a.push(" c ", j(e.cp1x), ",", j(e.cp1y), ",", j(e.cp2x), ",", j(e.cp2y), ",", j(e.x), ",", j(e.y));
				break;
			case "at":
			case "wa":
				a.push(" ", e.type, " ", j(e.x - this.arcScaleX_ * e.radius), ",", j(e.y - this.arcScaleY_ * e.radius), " ", j(e.x + this.arcScaleX_ * e.radius), ",", j(e.y + this.arcScaleY_ * e.radius), " ", j(e.xStart), ",", j(e.yStart), " ", j(e.xEnd), ",", j(e.yEnd));
				break
			}
			if (e) {
				if (h.x == null || e.x < h.x) {
					h.x = e.x
				}
				if (g.x == null || e.x > g.x) {
					g.x = e.x
				}
				if (h.y == null || e.y < h.y) {
					h.y = e.y
				}
				if (g.y == null || e.y > g.y) {
					g.y = e.y
				}
			}
		}
		a.push(" \">");
		if (b) {
			if (typeof this.fillStyle == "object") {
				var m = this.fillStyle,
				r = 0,
				n = {
					x: 0,
					y: 0
				},
				o = 0,
				q = 1;
				if (m.type_ == "gradient") {
					var t = m.x1_ / this.arcScaleX_,
					E = m.y1_ / this.arcScaleY_,
					p = this.getCoords_(m.x0_ / this.arcScaleX_, m.y0_ / this.arcScaleY_),
					z = this.getCoords_(t, E);
					r = Math.atan2(z.x - p.x, z.y - p.y) * 180 / Math.PI;
					if (r < 0) {
						r += 360
					}
					if (r < 0.000001) {
						r = 0
					}
				} else {
					var p = this.getCoords_(m.x0_, m.y0_),
					w = g.x - h.x,
					x = g.y - h.y;
					n = {
						x: (p.x - h.x) / w,
						y: (p.y - h.y) / x
					};
					w /= this.arcScaleX_ * k;
					x /= this.arcScaleY_ * k;
					var R = s.max(w, x);
					o = 2 * m.r0_ / R;
					q = 2 * m.r1_ / R - o
				}
				var u = m.colors_;
				u.sort(function(ba, ca) {
					return ba.offset - ca.offset
				});
				var J = u.length,
				da = u[0].color,
				ea = u[J - 1].color,
				fa = u[0].alpha * this.globalAlpha,
				ga = u[J - 1].alpha * this.globalAlpha,
				S = [],
				l = 0;
				for (; l < J; l++) {
					var T = u[l];
					S.push(T.offset * q + o + " " + T.color)
				}
				a.push("<g_vml_:fill type=\"", m.type_, "\"", " method=\"none\" focus=\"100%\"", " color=\"", da, "\"", " color2=\"", ea, "\"", " colors=\"", S.join(","), "\"", " opacity=\"", ga, "\"", " g_o_:opacity2=\"", fa, "\"", " angle=\"", r, "\"", " focusposition=\"", n.x, ",", n.y, "\" />")
			} else {
				a.push("<g_vml_:fill color=\"", d, "\" opacity=\"", f, "\" />")
			}
		} else {
			var K = this.lineScale_ * this.lineWidth;
			if (K < 1) {
				f *= K
			}
			a.push("<g_vml_:stroke", " opacity=\"", f, "\"", " joinstyle=\"", this.lineJoin, "\"", " miterlimit=\"", this.miterLimit, "\"", " endcap=\"", aa(this.lineCap), "\"", " weight=\"", K, "px\"", " color=\"", d, "\" />")
		}
		a.push("</g_vml_:shape>");
		this.element_.insertAdjacentHTML("beforeEnd", a.join(""))
	};
	i.fill = function() {
		this.stroke(true)
	};
	i.closePath = function() {
		this.currentPath_.push({
			type: "close"
		})
	};
	i.getCoords_ = function(b, a) {
		var c = this.m_;
		return {
			x: k * (b * c[0][0] + a * c[1][0] + c[2][0]) - v,
			y: k * (b * c[0][1] + a * c[1][1] + c[2][1]) - v
		}
	};
	i.save = function() {
		var b = {};
		O(this, b);
		this.aStack_.push(b);
		this.mStack_.push(this.m_);
		this.m_ = y(I(), this.m_)
	};
	i.restore = function() {
		O(this.aStack_.pop(), this);
		this.m_ = this.mStack_.pop()
	};
	function ha(b) {
		var a = 0;
		for (; a < 3; a++) {
			var c = 0;
			for (; c < 2; c++) {
				if (!isFinite(b[a][c]) || isNaN(b[a][c])) {
					return false
				}
			}
		}
		return true
	};
	function A(b, a, c) {
		if ( !! ha(a)) {
			b.m_ = a;
			if (c) {
				b.lineScale_ = W(V(a[0][0] * a[1][1] - a[0][1] * a[1][0]))
			}
		}
	};
	i.translate = function(b, a) {
		A(this, y([[1, 0, 0], [0, 1, 0], [b, a, 1]], this.m_), false)
	};
	i.rotate = function(b) {
		var a = G(b),
		c = F(b);
		A(this, y([[a, c, 0], [ - c, a, 0], [0, 0, 1]], this.m_), false)
	};
	i.scale = function(b, a) {
		this.arcScaleX_ *= b;
		this.arcScaleY_ *= a;
		A(this, y([[b, 0, 0], [0, a, 0], [0, 0, 1]], this.m_), true)
	};
	i.transform = function(b, a, c, d, f, h) {
		A(this, y([[b, a, 0], [c, d, 0], [f, h, 1]], this.m_), true)
	};
	i.setTransform = function(b, a, c, d, f, h) {
		A(this, [[b, a, 0], [c, d, 0], [f, h, 1]], true)
	};
	i.clip = function() {};
	i.arcTo = function() {};
	i.createPattern = function() {
		return new U
	};
	function D(b) {
		this.type_ = b;
		this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
		this.colors_ = []
	};
	D.prototype.addColorStop = function(b, a) {
		a = P(a);
		this.colors_.push({
			offset: b,
			color: a.color,
			alpha: a.alpha
		})
	};
	function U() {};
	G_vmlCanvasManager = M;
	CanvasRenderingContext2D = H;
	CanvasGradient = D;
	CanvasPattern = U
})();
if (!document.createElement("canvas").getContext) { (function() {
		var m = Math;
		var mr = m.round;
		var ms = m.sin;
		var mc = m.cos;
		var _1 = m.abs;
		var _2 = m.sqrt;
		var Z = 10;
		var Z2 = Z / 2;
		function _3() {
			return this.context_ || (this.context_ = new _4(this))
		};
		var _5 = Array.prototype.slice;
		function _6(f, _7, _8) {
			var a = _5.call(arguments, 2);
			return function() {
				return f.apply(_7, a.concat(_5.call(arguments)))
			}
		};
		var _9 = {
			init: function(_a) {
				if (/MSIE/.test(navigator.userAgent) && !window.opera) {
					var _b = _a || document;
					_b.createElement("canvas");
					_b.attachEvent("onreadystatechange", _6(this.init_, this, _b))
				}
			},
			init_: function(_c) {
				if (!_c.namespaces["g_vml_"]) {
					_c.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML")
				}
				if (!_c.namespaces["g_o_"]) {
					_c.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML")
				}
				if (!_c.styleSheets["ex_canvas_"]) {
					var ss = _c.createStyleSheet();
					ss.owningElement.id = "ex_canvas_";
					ss.cssText = "canvas{display:inline-block;overflow:hidden;" + "text-align:left;width:300px;height:150px}" + "g_vml_\\:*{behavior:url(#default#VML)}" + "g_o_\\:*{behavior:url(#default#VML)}"
				}
				var _d = _c.getElementsByTagName("canvas");
				for (var i = 0; i < _d.length; i++) {
					this.initElement(_d[i])
				}
			},
			initElement: function(el) {
				if (!el.getContext) {
					el.getContext = _3;
					el.innerHTML = "";
					el.attachEvent("onpropertychange", _e);
					el.attachEvent("onresize", _f);
					var _10 = el.attributes;
					if (_10.width && _10.width.specified) {
						el.style.width = _10.width.nodeValue + "px"
					} else {
						el.width = el.clientWidth
					}
					if (_10.height && _10.height.specified) {
						el.style.height = _10.height.nodeValue + "px"
					} else {
						el.height = el.clientHeight
					}
				}
				return el
			}
		};
		function _e(e) {
			var el = e.srcElement;
			switch (e.propertyName) {
			case "width":
				el.style.width = el.attributes.width.nodeValue + "px";
				el.getContext().clearRect();
				break;
			case "height":
				el.style.height = el.attributes.height.nodeValue + "px";
				el.getContext().clearRect();
				break
			}
		};
		function _f(e) {
			var el = e.srcElement;
			if (el.firstChild) {
				el.firstChild.style.width = el.clientWidth + "px";
				el.firstChild.style.height = el.clientHeight + "px"
			}
		};
		_9.init();
		var _11 = [];
		for (var i = 0; i < 16; i++) {
			for (var j = 0; j < 16; j++) {
				_11[i * 16 + j] = i.toString(16) + j.toString(16)
			}
		}
		function _12() {
			return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
		};
		function _13(m1, m2) {
			var _14 = _12();
			for (var x = 0; x < 3; x++) {
				for (var y = 0; y < 3; y++) {
					var sum = 0;
					for (var z = 0; z < 3; z++) {
						sum += m1[x][z] * m2[z][y]
					}
					_14[x][y] = sum
				}
			}
			return _14
		};
		function _15(o1, o2) {
			o2.fillStyle = o1.fillStyle;
			o2.lineCap = o1.lineCap;
			o2.lineJoin = o1.lineJoin;
			o2.lineWidth = o1.lineWidth;
			o2.miterLimit = o1.miterLimit;
			o2.shadowBlur = o1.shadowBlur;
			o2.shadowColor = o1.shadowColor;
			o2.shadowOffsetX = o1.shadowOffsetX;
			o2.shadowOffsetY = o1.shadowOffsetY;
			o2.strokeStyle = o1.strokeStyle;
			o2.globalAlpha = o1.globalAlpha;
			o2.arcScaleX_ = o1.arcScaleX_;
			o2.arcScaleY_ = o1.arcScaleY_;
			o2.lineScale_ = o1.lineScale_
		};
		function _16(_17) {
			var str, _18 = 1;
			_17 = String(_17);
			if (_17.substring(0, 3) == "rgb") {
				var _19 = _17.indexOf("(", 3);
				var end = _17.indexOf(")", _19 + 1);
				var _1a = _17.substring(_19 + 1, end).split(",");
				str = "#";
				for (var i = 0; i < 3; i++) {
					str += _11[Number(_1a[i])]
				}
				if (_1a.length == 4 && _17.substr(3, 1) == "a") {
					_18 = _1a[3]
				}
			} else {
				str = _17
			}
			return {
				color: str,
				alpha: _18
			}
		};
		function _1b(_1c) {
			switch (_1c) {
			case "butt":
				return "flat";
			case "round":
				return "round";
			case "square":
			default:
				return "square"
			}
		};
		function _4(_1d) {
			this.m_ = _12();
			this.mStack_ = [];
			this.aStack_ = [];
			this.currentPath_ = [];
			this.strokeStyle = "#000";
			this.fillStyle = "#000";
			this.lineWidth = 1;
			this.lineJoin = "miter";
			this.lineCap = "butt";
			this.miterLimit = Z * 1;
			this.globalAlpha = 1;
			this.canvas = _1d;
			var el = _1d.ownerDocument.createElement("div");
			el.style.width = _1d.clientWidth + "px";
			el.style.height = _1d.clientHeight + "px";
			el.style.position = "absolute";
			_1d.appendChild(el);
			this.element_ = el;
			this.arcScaleX_ = 1;
			this.arcScaleY_ = 1;
			this.lineScale_ = 1
		};
		var _1e = _4.prototype;
		_1e.clearRect = function() {
			this.element_.innerHTML = ""
		};
		_1e.beginPath = function() {
			this.currentPath_ = []
		};
		_1e.moveTo = function(aX, aY) {
			var p = this.getCoords_(aX, aY);
			this.currentPath_.push({
				type: "moveTo",
				x: p.x,
				y: p.y
			});
			this.currentX_ = p.x;
			this.currentY_ = p.y
		};
		_1e.lineTo = function(aX, aY) {
			var p = this.getCoords_(aX, aY);
			this.currentPath_.push({
				type: "lineTo",
				x: p.x,
				y: p.y
			});
			this.currentX_ = p.x;
			this.currentY_ = p.y
		};
		_1e.bezierCurveTo = function(_1f, _20, _21, _22, aX, aY) {
			var p = this.getCoords_(aX, aY);
			var cp1 = this.getCoords_(_1f, _20);
			var cp2 = this.getCoords_(_21, _22);
			_23(this, cp1, cp2, p)
		};
		function _23(_24, cp1, cp2, p) {
			_24.currentPath_.push({
				type: "bezierCurveTo",
				cp1x: cp1.x,
				cp1y: cp1.y,
				cp2x: cp2.x,
				cp2y: cp2.y,
				x: p.x,
				y: p.y
			});
			_24.currentX_ = p.x;
			_24.currentY_ = p.y
		};
		_1e.quadraticCurveTo = function(_25, _26, aX, aY) {
			var cp = this.getCoords_(_25, _26);
			var p = this.getCoords_(aX, aY);
			var cp1 = {
				x: this.currentX_ + 2 / 3 * (cp.x - this.currentX_),
				y: this.currentY_ + 2 / 3 * (cp.y - this.currentY_)
			};
			var cp2 = {
				x: cp1.x + (p.x - this.currentX_) / 3,
				y: cp1.y + (p.y - this.currentY_) / 3
			};
			_23(this, cp1, cp2, p)
		};
		_1e.arc = function(aX, aY, _27, _28, _29, _2a) {
			_27 *= Z;
			var _2b = _2a ? "at": "wa";
			var _2c = aX + mc(_28) * _27 - Z2;
			var _2d = aY + ms(_28) * _27 - Z2;
			var _2e = aX + mc(_29) * _27 - Z2;
			var _2f = aY + ms(_29) * _27 - Z2;
			if (_2c == _2e && !_2a) {
				_2c += 0.125
			}
			var p = this.getCoords_(aX, aY);
			var _30 = this.getCoords_(_2c, _2d);
			var _31 = this.getCoords_(_2e, _2f);
			this.currentPath_.push({
				type: _2b,
				x: p.x,
				y: p.y,
				radius: _27,
				xStart: _30.x,
				yStart: _30.y,
				xEnd: _31.x,
				yEnd: _31.y
			})
		};
		_1e.rect = function(aX, aY, _32, _33) {
			this.moveTo(aX, aY);
			this.lineTo(aX + _32, aY);
			this.lineTo(aX + _32, aY + _33);
			this.lineTo(aX, aY + _33);
			this.closePath()
		};
		_1e.strokeRect = function(aX, aY, _34, _35) {
			var _36 = this.currentPath_;
			this.beginPath();
			this.moveTo(aX, aY);
			this.lineTo(aX + _34, aY);
			this.lineTo(aX + _34, aY + _35);
			this.lineTo(aX, aY + _35);
			this.closePath();
			this.stroke();
			this.currentPath_ = _36
		};
		_1e.fillRect = function(aX, aY, _37, _38) {
			var _39 = this.currentPath_;
			this.beginPath();
			this.moveTo(aX, aY);
			this.lineTo(aX + _37, aY);
			this.lineTo(aX + _37, aY + _38);
			this.lineTo(aX, aY + _38);
			this.closePath();
			this.fill();
			this.currentPath_ = _39
		};
		_1e.createLinearGradient = function(aX0, aY0, aX1, aY1) {
			var _3a = new _3b("gradient");
			_3a.x0_ = aX0;
			_3a.y0_ = aY0;
			_3a.x1_ = aX1;
			_3a.y1_ = aY1;
			return _3a
		};
		_1e.createRadialGradient = function(aX0, aY0, aR0, aX1, aY1, aR1) {
			var _3c = new _3b("gradientradial");
			_3c.x0_ = aX0;
			_3c.y0_ = aY0;
			_3c.r0_ = aR0;
			_3c.x1_ = aX1;
			_3c.y1_ = aY1;
			_3c.r1_ = aR1;
			return _3c
		};
		_1e.drawImage = function(_3d, _3e) {
			var dx, dy, dw, dh, sx, sy, sw, sh;
			var _3f = _3d.runtimeStyle.width;
			var _40 = _3d.runtimeStyle.height;
			_3d.runtimeStyle.width = "auto";
			_3d.runtimeStyle.height = "auto";
			var w = _3d.width;
			var h = _3d.height;
			_3d.runtimeStyle.width = _3f;
			_3d.runtimeStyle.height = _40;
			if (arguments.length == 3) {
				dx = arguments[1];
				dy = arguments[2];
				sx = sy = 0;
				sw = dw = w;
				sh = dh = h
			} else {
				if (arguments.length == 5) {
					dx = arguments[1];
					dy = arguments[2];
					dw = arguments[3];
					dh = arguments[4];
					sx = sy = 0;
					sw = w;
					sh = h
				} else {
					if (arguments.length == 9) {
						sx = arguments[1];
						sy = arguments[2];
						sw = arguments[3];
						sh = arguments[4];
						dx = arguments[5];
						dy = arguments[6];
						dw = arguments[7];
						dh = arguments[8]
					} else {
						throw Error("Invalid number of arguments")
					}
				}
			}
			var d = this.getCoords_(dx, dy);
			var w2 = sw / 2;
			var h2 = sh / 2;
			var _41 = [];
			var W = 10;
			var H = 10;
			_41.push(" <g_vml_:group", " coordsize=\"", Z * W, ",", Z * H, "\"", " coordorigin=\"0,0\"", " style=\"width:", W, "px;height:", H, "px;position:absolute;");
			if (this.m_[0][0] != 1 || this.m_[0][1]) {
				var _42 = [];
				_42.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", mr(d.x / Z), ",", "Dy=", mr(d.y / Z), "");
				var max = d;
				var c2 = this.getCoords_(dx + dw, dy);
				var c3 = this.getCoords_(dx, dy + dh);
				var c4 = this.getCoords_(dx + dw, dy + dh);
				max.x = m.max(max.x, c2.x, c3.x, c4.x);
				max.y = m.max(max.y, c2.y, c3.y, c4.y);
				_41.push("padding:0 ", mr(max.x / Z), "px ", mr(max.y / Z), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", _42.join(""), ", sizingmethod='clip');")
			} else {
				_41.push("top:", mr(d.y / Z), "px;left:", mr(d.x / Z), "px;")
			}
			_41.push(" \">", "<g_vml_:image src=\"", _3d.src, "\"", " style=\"width:", Z * dw, "px;", " height:", Z * dh, "px;\"", " cropleft=\"", sx / w, "\"", " croptop=\"", sy / h, "\"", " cropright=\"", (w - sx - sw) / w, "\"", " cropbottom=\"", (h - sy - sh) / h, "\"", " />", "</g_vml_:group>");
			this.element_.insertAdjacentHTML("BeforeEnd", _41.join(""))
		};
		_1e.stroke = function(_43) {
			var _44 = [];
			var _45 = false;
			var a = _16(_43 ? this.fillStyle: this.strokeStyle);
			var _46 = a.color;
			var _47 = a.alpha * this.globalAlpha;
			var W = 10;
			var H = 10;
			_44.push("<g_vml_:shape", " filled=\"", !!_43, "\"", " style=\"position:absolute;width:", W, "px;height:", H, "px;\"", " coordorigin=\"0 0\" coordsize=\"", Z * W, " ", Z * H, "\"", " stroked=\"", !_43, "\"", " path=\"");
			var _48 = false;
			var min = {
				x: null,
				y: null
			};
			var max = {
				x: null,
				y: null
			};
			for (var i = 0; i < this.currentPath_.length; i++) {
				var p = this.currentPath_[i];
				var c;
				switch (p.type) {
				case "moveTo":
					c = p;
					_44.push(" m ", mr(p.x), ",", mr(p.y));
					break;
				case "lineTo":
					_44.push(" l ", mr(p.x), ",", mr(p.y));
					break;
				case "close":
					_44.push(" x ");
					p = null;
					break;
				case "bezierCurveTo":
					_44.push(" c ", mr(p.cp1x), ",", mr(p.cp1y), ",", mr(p.cp2x), ",", mr(p.cp2y), ",", mr(p.x), ",", mr(p.y));
					break;
				case "at":
				case "wa":
					_44.push(" ", p.type, " ", mr(p.x - this.arcScaleX_ * p.radius), ",", mr(p.y - this.arcScaleY_ * p.radius), " ", mr(p.x + this.arcScaleX_ * p.radius), ",", mr(p.y + this.arcScaleY_ * p.radius), " ", mr(p.xStart), ",", mr(p.yStart), " ", mr(p.xEnd), ",", mr(p.yEnd));
					break
				}
				if (p) {
					if (min.x == null || p.x < min.x) {
						min.x = p.x
					}
					if (max.x == null || p.x > max.x) {
						max.x = p.x
					}
					if (min.y == null || p.y < min.y) {
						min.y = p.y
					}
					if (max.y == null || p.y > max.y) {
						max.y = p.y
					}
				}
			}
			_44.push(" \">");
			if (!_43) {
				var _49 = this.lineScale_ * this.lineWidth;
				if (_49 < 1) {
					_47 *= _49
				}
				_44.push("<g_vml_:stroke", " opacity=\"", _47, "\"", " joinstyle=\"", this.lineJoin, "\"", " miterlimit=\"", this.miterLimit, "\"", " endcap=\"", _1b(this.lineCap), "\"", " weight=\"", _49, "px\"", " color=\"", _46, "\" />")
			} else {
				if (typeof this.fillStyle == "object") {
					var _4a = this.fillStyle;
					var _4b = 0;
					var _4c = {
						x: 0,
						y: 0
					};
					var _4d = 0;
					var _4e = 1;
					if (_4a.type_ == "gradient") {
						var x0 = _4a.x0_ / this.arcScaleX_;
						var y0 = _4a.y0_ / this.arcScaleY_;
						var x1 = _4a.x1_ / this.arcScaleX_;
						var y1 = _4a.y1_ / this.arcScaleY_;
						var p0 = this.getCoords_(x0, y0);
						var p1 = this.getCoords_(x1, y1);
						var dx = p1.x - p0.x;
						var dy = p1.y - p0.y;
						_4b = Math.atan2(dx, dy) * 180 / Math.PI;
						if (_4b < 0) {
							_4b += 360
						}
						if (_4b < 0.000001) {
							_4b = 0
						}
					} else {
						var p0 = this.getCoords_(_4a.x0_, _4a.y0_);
						var _4f = max.x - min.x;
						var _50 = max.y - min.y;
						_4c = {
							x: (p0.x - min.x) / _4f,
							y: (p0.y - min.y) / _50
						};
						_4f /= this.arcScaleX_ * Z;
						_50 /= this.arcScaleY_ * Z;
						var _51 = m.max(_4f, _50);
						_4d = 2 * _4a.r0_ / _51;
						_4e = 2 * _4a.r1_ / _51 - _4d
					}
					var _52 = _4a.colors_;
					_52.sort(function(cs1, cs2) {
						return cs1.offset - cs2.offset
					});
					var _53 = _52.length;
					var _54 = _52[0].color;
					var _55 = _52[_53 - 1].color;
					var _56 = _52[0].alpha * this.globalAlpha;
					var _57 = _52[_53 - 1].alpha * this.globalAlpha;
					var _58 = [];
					for (var i = 0; i < _53; i++) {
						var _59 = _52[i];
						_58.push(_59.offset * _4e + _4d + " " + _59.color)
					}
					_44.push("<g_vml_:fill type=\"", _4a.type_, "\"", " method=\"none\" focus=\"100%\"", " color=\"", _54, "\"", " color2=\"", _55, "\"", " colors=\"", _58.join(","), "\"", " opacity=\"", _57, "\"", " g_o_:opacity2=\"", _56, "\"", " angle=\"", _4b, "\"", " focusposition=\"", _4c.x, ",", _4c.y, "\" />")
				} else {
					_44.push("<g_vml_:fill color=\"", _46, "\" opacity=\"", _47, "\" />")
				}
			}
			_44.push("</g_vml_:shape>");
			this.element_.insertAdjacentHTML("beforeEnd", _44.join(""))
		};
		_1e.fill = function() {
			this.stroke(true)
		};
		_1e.closePath = function() {
			this.currentPath_.push({
				type: "close"
			})
		};
		_1e.getCoords_ = function(aX, aY) {
			var m = this.m_;
			return {
				x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
				y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
			}
		};
		_1e.save = function() {
			var o = {};
			_15(this, o);
			this.aStack_.push(o);
			this.mStack_.push(this.m_);
			this.m_ = _13(_12(), this.m_)
		};
		_1e.restore = function() {
			_15(this.aStack_.pop(), this);
			this.m_ = this.mStack_.pop()
		};
		function _5a(m) {
			for (var j = 0; j < 3; j++) {
				for (var k = 0; k < 2; k++) {
					if (!isFinite(m[j][k]) || isNaN(m[j][k])) {
						return false
					}
				}
			}
			return true
		};
		function _5b(ctx, m, _5c) {
			if (!_5a(m)) {
				return
			}
			ctx.m_ = m;
			if (_5c) {
				var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
				ctx.lineScale_ = _2(_1(det))
			}
		};
		_1e.translate = function(aX, aY) {
			var m1 = [[1, 0, 0], [0, 1, 0], [aX, aY, 1]];
			_5b(this, _13(m1, this.m_), false)
		};
		_1e.rotate = function(_5d) {
			var c = mc(_5d);
			var s = ms(_5d);
			var m1 = [[c, s, 0], [ - s, c, 0], [0, 0, 1]];
			_5b(this, _13(m1, this.m_), false)
		};
		_1e.scale = function(aX, aY) {
			this.arcScaleX_ *= aX;
			this.arcScaleY_ *= aY;
			var m1 = [[aX, 0, 0], [0, aY, 0], [0, 0, 1]];
			_5b(this, _13(m1, this.m_), true)
		};
		_1e.transform = function(m11, m12, m21, m22, dx, dy) {
			var m1 = [[m11, m12, 0], [m21, m22, 0], [dx, dy, 1]];
			_5b(this, _13(m1, this.m_), true)
		};
		_1e.setTransform = function(m11, m12, m21, m22, dx, dy) {
			var m = [[m11, m12, 0], [m21, m22, 0], [dx, dy, 1]];
			_5b(this, m, true)
		};
		_1e.clip = function() {};
		_1e.arcTo = function() {};
		_1e.createPattern = function() {
			return new _5e
		};
		function _3b(_5f) {
			this.type_ = _5f;
			this.x0_ = 0;
			this.y0_ = 0;
			this.r0_ = 0;
			this.x1_ = 0;
			this.y1_ = 0;
			this.r1_ = 0;
			this.colors_ = []
		};
		_3b.prototype.addColorStop = function(_60, _61) {
			_61 = _16(_61);
			this.colors_.push({
				offset: _60,
				color: _61.color,
				alpha: _61.alpha
			})
		};
		function _5e() {};
		G_vmlCanvasManager = _9;
		CanvasRenderingContext2D = _4;
		CanvasGradient = _3b;
		CanvasPattern = _5e
	})()
}
var hexcase = 0;
var b64pad = "";
function hex_md5(s) {
	return rstr2hex(rstr_md5(str2rstr_utf8(s)))
};
function b64_md5(s) {
	return rstr2b64(rstr_md5(str2rstr_utf8(s)))
};
function any_md5(s, e) {
	return rstr2any(rstr_md5(str2rstr_utf8(s)), e)
};
function hex_hmac_md5(k, d) {
	return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)))
};
function b64_hmac_md5(k, d) {
	return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)))
};
function any_hmac_md5(k, d, e) {
	return rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e)
};
function md5_vm_test() {
	return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72"
};
function rstr_md5(s) {
	return binl2rstr(binl_md5(rstr2binl(s), s.length * 8))
};
function rstr_hmac_md5(key, _62) {
	var _63 = rstr2binl(key);
	if (_63.length > 16) {
		_63 = binl_md5(_63, key.length * 8)
	}
	var _64 = Array(16),
	_65 = Array(16);
	for (var i = 0; i < 16; i++) {
		_64[i] = _63[i] ^ 909522486;
		_65[i] = _63[i] ^ 1549556828
	}
	var _66 = binl_md5(_64.concat(rstr2binl(_62)), 512 + _62.length * 8);
	return binl2rstr(binl_md5(_65.concat(_66), 512 + 128))
};
function rstr2hex(_67) {
	try {
		hexcase
	} catch(e) {
		hexcase = 0
	}
	var _68 = hexcase ? "0123456789ABCDEF": "0123456789abcdef";
	var _69 = "";
	var x;
	for (var i = 0; i < _67.length; i++) {
		x = _67.charCodeAt(i);
		_69 += _68.charAt((x >>> 4) & 15) + _68.charAt(x & 15)
	}
	return _69
};
function rstr2b64(_6a) {
	try {
		b64pad
	} catch(e) {
		b64pad = ""
	}
	var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var _6b = "";
	var len = _6a.length;
	for (var i = 0; i < len; i += 3) {
		var _6c = (_6a.charCodeAt(i) << 16) | (i + 1 < len ? _6a.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? _6a.charCodeAt(i + 2) : 0);
		for (var j = 0; j < 4; j++) {
			if (i * 8 + j * 6 > _6a.length * 8) {
				_6b += b64pad
			} else {
				_6b += tab.charAt((_6c >>> 6 * (3 - j)) & 63)
			}
		}
	}
	return _6b
};
function rstr2any(_6d, _6e) {
	var _6f = _6e.length;
	var i, j, q, x, _70;
	var _71 = Array(Math.ceil(_6d.length / 2));
	for (i = 0; i < _71.length; i++) {
		_71[i] = (_6d.charCodeAt(i * 2) << 8) | _6d.charCodeAt(i * 2 + 1)
	}
	var _72 = Math.ceil(_6d.length * 8 / (Math.log(_6e.length) / Math.log(2)));
	var _73 = Array(_72);
	for (j = 0; j < _72; j++) {
		_70 = Array();
		x = 0;
		for (i = 0; i < _71.length; i++) {
			x = (x << 16) + _71[i];
			q = Math.floor(x / _6f);
			x -= q * _6f;
			if (_70.length > 0 || q > 0) {
				_70[_70.length] = q
			}
		}
		_73[j] = x;
		_71 = _70
	}
	var _74 = "";
	for (i = _73.length - 1; i >= 0; i--) {
		_74 += _6e.charAt(_73[i])
	}
	return _74
};
function str2rstr_utf8(_75) {
	var _76 = "";
	var i = -1;
	var x, y;
	while (++i < _75.length) {
		x = _75.charCodeAt(i);
		y = i + 1 < _75.length ? _75.charCodeAt(i + 1) : 0;
		if (55296 <= x && x <= 56319 && 56320 <= y && y <= 57343) {
			x = 65536 + ((x & 1023) << 10) + (y & 1023);
			i++
		}
		if (x <= 127) {
			_76 += String.fromCharCode(x)
		} else {
			if (x <= 2047) {
				_76 += String.fromCharCode(192 | ((x >>> 6) & 31), 128 | (x & 63))
			} else {
				if (x <= 65535) {
					_76 += String.fromCharCode(224 | ((x >>> 12) & 15), 128 | ((x >>> 6) & 63), 128 | (x & 63))
				} else {
					if (x <= 2097151) {
						_76 += String.fromCharCode(240 | ((x >>> 18) & 7), 128 | ((x >>> 12) & 63), 128 | ((x >>> 6) & 63), 128 | (x & 63))
					}
				}
			}
		}
	}
	return _76
};
function str2rstr_utf16le(_77) {
	var _78 = "";
	for (var i = 0; i < _77.length; i++) {
		_78 += String.fromCharCode(_77.charCodeAt(i) & 255, (_77.charCodeAt(i) >>> 8) & 255)
	}
	return _78
};
function str2rstr_utf16be(_79) {
	var _7a = "";
	for (var i = 0; i < _79.length; i++) {
		_7a += String.fromCharCode((_79.charCodeAt(i) >>> 8) & 255, _79.charCodeAt(i) & 255)
	}
	return _7a
};
function rstr2binl(_7b) {
	var _7c = Array(_7b.length >> 2);
	for (var i = 0; i < _7c.length; i++) {
		_7c[i] = 0
	}
	for (var i = 0; i < _7b.length * 8; i += 8) {
		_7c[i >> 5] |= (_7b.charCodeAt(i / 8) & 255) << (i % 32)
	}
	return _7c
};
function binl2rstr(_7d) {
	var _7e = "";
	for (var i = 0; i < _7d.length * 32; i += 8) {
		_7e += String.fromCharCode((_7d[i >> 5] >>> (i % 32)) & 255)
	}
	return _7e
};
function binl_md5(x, len) {
	x[len >> 5] |= 128 << ((len) % 32);
	x[(((len + 64) >>> 9) << 4) + 14] = len;
	var a = 1732584193;
	var b = -271733879;
	var c = -1732584194;
	var d = 271733878;
	for (var i = 0; i < x.length; i += 16) {
		var _7f = a;
		var _80 = b;
		var _81 = c;
		var _82 = d;
		a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
		d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
		c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
		b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
		a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
		d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
		c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
		b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
		a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
		d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
		c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
		b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
		a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
		d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
		c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
		b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
		a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
		d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
		c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
		b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
		a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
		d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
		c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
		b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
		a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
		d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
		c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
		b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
		a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
		d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
		c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
		b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
		a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
		d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
		c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
		b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
		a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
		d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
		c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
		b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
		a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
		d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
		c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
		b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
		a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
		d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
		c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
		b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
		a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
		d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
		c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
		b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
		a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
		d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
		c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
		b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
		a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
		d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
		c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
		b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
		a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
		d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
		c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
		b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
		a = safe_add(a, _7f);
		b = safe_add(b, _80);
		c = safe_add(c, _81);
		d = safe_add(d, _82)
	}
	return Array(a, b, c, d)
};
function md5_cmn(q, a, b, x, s, t) {
	return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
};
function md5_ff(a, b, c, d, x, s, t) {
	return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t)
};
function md5_gg(a, b, c, d, x, s, t) {
	return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t)
};
function md5_hh(a, b, c, d, x, s, t) {
	return md5_cmn(b ^ c ^ d, a, b, x, s, t)
};
function md5_ii(a, b, c, d, x, s, t) {
	return md5_cmn(c ^ (b | (~d)), a, b, x, s, t)
};
function safe_add(x, y) {
	var lsw = (x & 65535) + (y & 65535);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return (msw << 16) | (lsw & 65535)
};
function bit_rol(num, cnt) {
	return (num << cnt) | (num >>> (32 - cnt))
}; (function(c) {
	var a = ["DOMMouseScroll", "mousewheel"];
	c.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) {
				for (var d = a.length; d;) {
					this.addEventListener(a[--d], b, false)
				}
			} else {
				this.onmousewheel = b
			}
		},
		teardown: function() {
			if (this.removeEventListener) {
				for (var d = a.length; d;) {
					this.removeEventListener(a[--d], b, false)
				}
			} else {
				this.onmousewheel = null
			}
		}
	};
	c.fn.extend({
		mousewheel: function(d) {
			return d ? this.bind("mousewheel", d) : this.trigger("mousewheel")
		},
		unmousewheel: function(d) {
			return this.unbind("mousewheel", d)
		}
	});
	function b(i) {
		var g = i || window.event,
		f = [].slice.call(arguments, 1),
		j = 0,
		h = true,
		e = 0,
		d = 0;
		i = c.event.fix(g);
		i.type = "mousewheel";
		if (i.wheelDelta) {
			j = i.wheelDelta / 120
		}
		if (i.detail) {
			j = -i.detail / 3
		}
		d = j;
		if (g.axis !== undefined && g.axis === g.HORIZONTAL_AXIS) {
			d = 0;
			e = -1 * j
		}
		if (g.wheelDeltaY !== undefined) {
			d = g.wheelDeltaY / 120
		}
		if (g.wheelDeltaX !== undefined) {
			e = -1 * g.wheelDeltaX / 120
		}
		f.unshift(i, j, e, d);
		return c.event.handle.apply(this, f)
	}
})(jQuery);
function supports_local_storage() {
	try {
		return "localStorage" in window && window["localStorage"] !== null
	} catch(e) {
		return false
	}
};
function supports_canvas() {
	return !! document.createElement("canvas").getContext
};
function supports_audio() {
	return !! document.createElement("audio").canPlayType
};
function support_notifications() {
	return window.webkitNotifications
};
$(function() {
	var ua = navigator.userAgent.toString().toLowerCase();
	if (supports_local_storage() && supports_canvas() && !($.browser.opera && parseInt($.browser.version) < 10) && !((ua.indexOf("safari") != -1) && !(ua.indexOf("chrome") != -1))) {
		$("#browser-detect").parent().hide()
	} else {
		return
	}
});
function __0(key) {};
var config = {
	title: "Web Snooker",
	masterserver: "server.php",
	debug: false,
	skin_path: "media/skins/",
	skin: "default",
	sound: "on",
	shadows: "on",
	cue: "on",
	hints: "on",
	player: "Guest",
	scoreboard_pos: "bottom",
	background: "default",
	backgrounds: {
		"default": {
			"default": {
				"color": "#855926",
				"image": "media/images/floor/light-yellow.jpg"
			},
			"blue": {
				"color": "#072c80",
				"image": "media/images/floor/blue.jpg"
			},
			"red": {
				"color": "#480000",
				"image": "media/images/floor/red.jpg"
			},
			"darkred": {
				"color": "#090100",
				"image": "media/images/floor/dark-red.jpg"
			},
			"darkred2": {
				"color": "#480000",
				"image": "media/images/floor/dark-red-2.jpg"
			},
			"black": {
				"color": "#050607",
				"image": "media/images/floor/black.jpg"
			},
			"lightyellow": {
				"color": "#855926",
				"image": "media/images/floor/light-yellow.jpg"
			}
		},
		"satan": {
			"default": {
				"color": "#480000",
				"image": "media/images/floor/dark-red-2.jpg"
			},
			"blue": {
				"color": "#072c80",
				"image": "media/images/floor/blue.jpg"
			},
			"red": {
				"color": "#480000",
				"image": "media/images/floor/red.jpg"
			},
			"darkred": {
				"color": "#090100",
				"image": "media/images/floor/dark-red.jpg"
			},
			"darkred2": {
				"color": "#480000",
				"image": "media/images/floor/dark-red-2.jpg"
			},
			"black": {
				"color": "#050607",
				"image": "media/images/floor/black.jpg"
			},
			"lightyellow": {
				"color": "#855926",
				"image": "media/images/floor/light-yellow.jpg"
			}
		}
	},
	scoreboard_style: ($(window).height() <= 666 ? "compact": "extended"),
	server_name: "Snooker room",
	gamemodes: {
		"snooker": "Full Snooker",
		"short-snooker": "Short Snooker",
		"mini-snooker": "Mini Snooker"
	},
	shottime: {
		"0": "Unlimited",
		"300": "5min",
		"180": "3min",
		"60": "1min",
		"45": "45s",
		"30": "30s",
		"15": "15s"
	}
};
function __0(key) {
	if (supports_local_storage()) {
		value = localStorage.getItem("snooker_" + key);
		if (typeof value != "undefined" && value != null) {
			return value
		}
	}
	return config[key]
};
function __2(key, _83) {
	if (supports_local_storage()) {
		localStorage.setItem("snooker_" + key, _83)
	}
	config[key] = _83
};
if (supports_local_storage()) {
	config.skin = __0("skin");
	config.player = __0("player");
	config.screoboard_pos = __0("scoreboard_pos");
	config.screoboard_style = __0("scoreboard_style");
	config.shadows = __0("shadows");
	config.background = __0("background");
	config.hints = __0("hints");
	config.cue = __0("cue")
}
function Sound() {
	var _84 = 0;
	var _85 = 0;
	var _86 = new Object();
	var _87 = false;
	this.loadSound = function(_88, _89) {
		_86[_88] = $("<audio><source src=\"" + _89 + ".ogg\" type=\"audio/ogg\"><source src=\"" + _89 + ".wav\" type=\"audio/wave\"></audio>")[0]
	};
	this.play = function(_8a) {
		try {
			var snd = _86[_8a];
			if (__0("sound") != "on") {
				return
			}
			if (!$.browser.opera) {
				snd.pause();
				snd.currentTime = 0;
				snd.play()
			}
		} catch(e) {}
	}
};
var network = new
function() {
	this.max_turn_break = 0;
	this.commands = [],
	this.vars = [],
	this.frame_timer_handle = null,
	this.frame_timer = 0,
	this.shot_timer = 0,
	this.received_packets = 0,
	this.sent_packets = 0,
	this.last_ack = 0,
	this.interval = null,
	this.turn = false,
	this.pool = null,
	this.shoot_stack = [],
	this.pause = false,
	this.rules = {
		first_ball: null,
		required_ball: "red",
		last_pot: null,
		potted_balls: [],
		ball_positions: {
			"white": {
				x: 200,
				y: 317
			},
			"yellow": {
				x: 242,
				y: 357
			},
			"brown": {
				x: 242,
				y: 281
			},
			"green": {
				x: 242,
				y: 203
			},
			"blue": {
				x: 519,
				y: 281
			},
			"pink": {
				x: 694,
				y: 281
			},
			"black": {
				x: 870,
				y: 281
			}
		},
		ball_points: {
			"red": 1,
			"yellow": 2,
			"green": 3,
			"brown": 4,
			"blue": 5,
			"pink": 6,
			"black": 7,
			"white": 4
		}
	},
	this.can_shoot_timeout = true,
	this.break_points = 0,
	this.last_required = null,
	this.last_state = [],
	this.base_state = [],
	this.shottime = 60,
	this.frames = 1,
	this.rematch = false,
	this.client_rematch = false,
	this.can_chat = true,
	this.id = null,
	this.client_id = null,
	this.host_id = null,
	this.last_break_id = null,
	this.sound = new Sound();
	this.sound.loadSound("chat", "media/sounds/chat");
	this.set_title = function() {
		var _8b = this;
		if (typeof _8b.vars.practice != "undefined") {
			document.title = config.title + " - Practice"
		} else {
			document.title = config.title + " - " + (_8b.id == _8b.turn ? "[": "") + _8b.get_name(0) + (_8b.id == _8b.turn ? "]": "") + " vs " + (_8b.id != _8b.turn ? "[": "") + _8b.get_name(1) + (_8b.id != _8b.turn ? "]": "")
		}
	},
	this.is_paused = function() {
		var _8c = this;
		return _8c.pause
	};
	this.get_time = function() {
		var _8d = new Date();
		var h = _8d.getHours();
		h = (h < 10 ? "0" + h: h);
		var m = _8d.getMinutes();
		m = (m < 10 ? "0" + m: m);
		var s = _8d.getSeconds();
		s = (s < 10 ? "0" + s: s);
		return "[" + h + ":" + m + ":" + s + "]"
	},
	this.dump = function(arr, _8e) {
		var _8f = "";
		if (!_8e) {
			_8e = 0
		}
		var _90 = "";
		if (typeof(arr) == "object") {
			for (var _91 in arr) {
				var _92 = arr[_91];
				if (typeof(_92) == "object") {
					_8f += _90 + "'" + _91 + "' ...\n";
					_8f += dump(_92, _8e + 1)
				} else {
					_8f += _90 + "'" + _91 + "' => \"" + _92 + "\",\n"
				}
			}
		} else {
			_8f = "===>" + arr + "<===(" + typeof(arr) + ")"
		}
		return _8f
	};
	this.log = function(_93, _94) {
		var _95 = this;
		if (typeof _94 == "undefined") {
			_94 = "info"
		}
		$log = $("#console ul.messages");
		$log.children("li").last().removeClass("last");
		$message = $("<li />").text(_95.get_time() + " " + _93);
		if (_94 != "") {
			$message.addClass(_94)
		}
		$message.addClass("last");
		$log.append($message);
		$("#console ul.messages").scrollTop($("#console ul.messages").attr("scrollHeight"))
	},
	this.popup = function(_96, _97, _98) {
		if (typeof _98 == "undefined") {
			_98 = "game-info"
		}
		if (_98 == "game-info") {
			$("div.game-info").fadeOut(500)
		}
		$popup = $("<div />");
		$popup.addClass(_98);
		if (_98 == "summary") {
			$popup.addClass("black-box")
		}
		$popup.html(_96);
		$popup.hide().fadeIn(1000);
		if (typeof _97 != "undefined" && _97 != null) {
			$popup.animate({
				"opacity": 1
			},
			_97,
			function() {
				$(this).fadeOut(500,
				function() {
					$(this).remove()
				})
			})
		}
		if ($popup.find("button").length == 0) {
			$popup.click(function() {
				$(this).fadeOut(500,
				function() {
					$(this).remove()
				})
			})
		}
		$("#dashboard").parents(".wrapper").after($popup)
	},
	this.init = function() {
		var _99 = this;
		if (typeof _99.vars.id != "undefined") {
			_99.id = _99.vars.id.split("-")[2]
		}
		if (typeof _99.vars.host == "undefined" && typeof _99.vars.practice == "undefined") {
			_99.pause = true;
			_99.pool.listenEvents(false)
		}
		$.ajaxSetup({
			error: function(x, e) {
				if (x.status == 0) {
					network.log("Network connection is off.", "error")
				} else {
					if (x.status == 404) {
						network.log("URL not found.", "error")
					} else {
						if (x.status == 500) {
							network.log("Server failed to response.", "error")
						} else {
							if (e == "parsererror") {
								network.log("Parsing JSON failed.", "error")
							} else {
								if (e == "timeout") {
									network.log("Request timed out.", "error")
								} else {
									network.log(x.responseText, "error")
								}
							}
						}
					}
				}
			}
		});
		_99.reset_score();
		_99.set_name(0, __0("player"), LANG.code);
		if (typeof _99.vars.practice != "undefined" || _99.client_id == null) {
			if (typeof _99.vars.practice != "undefined") {
				_99.id = true
			}
			_99.turn = _99.id;
			_99.setup_gamemode("snooker");
			_99.start_timer();
			_99.shottime = 0;
			_99.set_active_player(false, true)
		}
		if (typeof _99.vars.practice == "undefined") {
			_99.interval = setInterval(function() {
				_99.receive()
			},
			3500);
			_99.log("Waiting for opponent...")
		}
		if (config.debug) {
			_99.setup_gamemode("snooker");
			_99.start_timer()
		}
	},
	this.check_error = function(_9a) {
		var _9b = this;
		if (typeof _9a != "undefined" && typeof _9a.error != "undefined") {
			var _9c = "Error";
			if (_9a.message == "4") {
				_9b.rehost(true)
			}
			if (_9a.message == "1") {
				_9c = "Server timed out.";
				$.ajax({
					url: "dashboard.php",
					cache: false,
					data: {
						"playing": 0
					},
				})
			} else {
				if (_9a.message == "2") {
					_9c = "Server is full."
				} else {
					if (_9a.message == "3") {
						_9c = "Wrong password."
					} else {
						if (_9a.message == "4") {
							if (_9b.client_id != null) {
								var _9d = _9b.get_name(1);
								if (_9d == "") {
									_9d = "Client"
								}
								_9c = _9d + " timed out.";
								$.ajax({
									url: "dashboard.php",
									cache: false,
									data: {
										"playing": 0
									},
								})
							}
						} else {
							if (_9a.message == "5") {
								_9c = "Invalid game key."
							} else {
								_9c = _9a.message
							}
						}
					}
				}
			}
			if (_9a.message != "4") {
				_9b.popup(_9c, null, "server-info");
				_9b.log("Error: " + _9c, "error")
			}
			return true
		}
		return false
	},
	this.disconnect = function(_9e) {
		var _9f = this;
		if (typeof _9f.vars.id != "undefined") {
			if (typeof _9e == "undefined") {
				_9e = true
			}
			clearInterval(_9f.interval);
			if (_9e) {
				_9f.send({
					"event": "disconnect"
				})
			}
		}
	},
	this.ajax = function(_a0, _a1, _a2) {
		var _a3 = this;
		if (typeof _a3.vars.practice == "undefined" || _a0 == "host" || _a0 == "join") {
			$.ajax({
				url: config.masterserver,
				cache: false,
				data: $.extend({
					"query": _a0
				},
				_a1),
				success: function(_a4) {
					if (typeof _a4 == "undefined") {
						network.log("No server response.", "error")
					}
					if (!network.check_error(_a4)) {
						if (typeof _a2 != "undefined") {
							_a2(_a4)
						}
					}
				},
				error: function(x, e) {
					if (x.status == 0) {
						network.log("Network connection is off.", "error")
					} else {
						if (x.status == 404) {
							network.log("URL not found.", "error")
						} else {
							if (x.status == 500) {
								network.log("Server failed to response.", "error")
							} else {
								if (e == "parsererror") {
									network.log("Parsing JSON failed.", "error")
								} else {
									if (e == "timeout") {
										network.log("Request timed out.", "error")
									} else {
										network.log(x.responseText, "error")
									}
								}
							}
						}
					}
				},
				async: true
			})
		}
	},
	this.get = function(_a5, _a6, _a7) {
		var _a8 = this;
		$.get(config.masterserver, $.extend({
			"query": _a5
		},
		_a6),
		function(_a9) {
			if (!_a8.check_error(_a9)) {
				if (typeof _a7 != "undefined") {
					_a7(_a9)
				}
			}
		})
	},
	this.send = function(_aa, _ab) {
		var _ac = this;
		_ac.ajax("send", $.extend({
			"id": _ac.vars.id
		},
		_aa), _ab)
	},
	this.receive = function() {
		var _ad = this;
		if (typeof _ad.vars.practice == "undefined") {
			if (_ad.pool.isFrozen() && _ad.shoot_stack.length > 0) {
				_ad.state_save();
				var _ae = _ad.shoot_stack.pop();
				if (_ae.hash != _ad.gen_hash()) {
					_ad.log(_ad.get_name(1) + " has been desynced! (hash)", "error")
				}
				_ad.pool.listenEvents(false);
				_ad.pool.shoot({
					x: _ae.x,
					y: _ae.y
				});
				_ad.pool.listenEvents(true)
			}
			_ad.ajax("receive", {
				"id": _ad.vars.id,
				"last_ack": _ad.last_ack
			},
			function(_af) {
				if (typeof _af.status == "undefined" || _af.status != 1) {
					_ad.log("Network status update failed.", "error")
				}
				if (typeof _af.received != "undefined" && _af.received == 1) {
					_ad.received_packets++;
					var _b0 = 0;
					for (var i = 0; i < _af.packets.length; i++) {
						var _b1 = _af.packets[i].data;
						if (parseInt(_af.packets[i].time) > _ad.last_ack) {
							if (_b1.event == "init") {
								_ad.pause = true;
								$(".server-info, .game-info, .summary").fadeOut(500);
								_ad.host_id = _b1.host_id;
								_ad.last_break_id = _ad.host_id;
								_ad.shottime = parseInt(_b1.shottime);
								_ad.frames = parseInt(_b1.frames);
								_ad.shot_timer = _ad.shottime;
								_ad.setup_gamemode(_b1.gamemode);
								_ad.set_name(1, _b1.client, _b1.client_lang);
								_ad.client_id = _b1.client_id;
								_ad.popup(_b1.client + " joined the game.", 1000, "server-info");
								notify(_b1.client + " joined the game.");
								_ad.log(_b1.client + " joined the game.");
								_ad.start_timer();
								_ad.set_frames(_ad.frames);
								_ad.calculate_remaining_points();
								_ad.reset_game(true);
								_ad.pause = false
							} else {
								if (_b1.event == "shoot") {
									if (!_ad.own_turn()) {
										if (typeof _b1.x == "string") {
											_b1.x = parseFloat(_b1.x);
											_b1.y = parseFloat(_b1.y)
										}
										if (_ad.pool.isFrozen() && _ad.shoot_stack.length == 0) {
											_ad.state_save();
											if (_b1.hash != _ad.gen_hash()) {
												_ad.log(_ad.get_name(1) + " has been desynced! (hash)", "error")
											}
											_ad.pool.listenEvents(false);
											_ad.pool.shoot({
												x: _b1.x,
												y: _b1.y
											});
											_ad.pool.listenEvents(true);
											_b0++
										} else {
											_ad.shoot_stack.push({
												x: _b1.x,
												y: _b1.y,
												hash: _b1.hash
											})
										}
									}
								} else {
									if (_b1.event == "replay") {
										if (!_ad.own_turn()) {
											_ad.popup(_ad.get_name(1) + " decided that you repeat your shot.", 3000);
											_ad.log(_ad.get_name(1) + " decided that you repeat your shot.");
											notify(_ad.get_name(1) + " decided that you repeat your shot.");
											_ad.state_load()
										}
									} else {
										if (_b1.event == "start") {
											_ad.popup(_ad.get_name(1) + " decided to start his turn.", 3000);
											_ad.log(_ad.get_name(1) + " decided to start his turn.");
											notify(_ad.get_name(1) + " decided to start his turn.")
										} else {
											if (_b1.event == "rematch") {
												if (_ad.rematch) {
													_ad.reset_game()
												} else {
													_ad.client_rematch = true
												}
											} else {
												if (_b1.event == "timeover") {} else {
													if (_b1.event == "chat") {
														_ad.sound.play("chat");
														network.log("[" + network.get_name(1) + "]: " + _b1.message, "chat")
													} else {
														if (_b1.event == "disconnect") {
															var _b2 = _ad.get_name(1) + " left the game.";
															_ad.popup(_b2, null, "server-info");
															_ad.log(_b2, "error");
															_ad.client_id = null;
															_ad.disconnect(false);
															_ad.rehost()
														} else {
															if (_b1.event == "surrender") {
																_ad.end_frame(true, 1)
															} else {
																if (_b1.event == "cuepos") {
																	if (typeof _b1.x == "string") {
																		_b1.x = parseFloat(_b1.x);
																		_b1.y = parseFloat(_b1.y)
																	}
																	_ad.pool.listenEvents(false);
																	_ad.pool.setCuePos({
																		x: _b1.x,
																		y: _b1.y
																	});
																	network.fix();
																	_ad.pool.listenEvents(true)
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
							if (typeof _b1.turn != "undefined" && _b1.turn != null) {
								_ad.turn = _b1.turn;
								_ad.set_active_player((_b1.event == "init"), (_b1.event == "replay"))
							}
						}
					}
					if (_b0 > 1) {
						_ad.log(_ad.get_name(1) + " has been desynced! (shoot > 1)", "error")
					}
					if (_af.packets.length > 0) {
						_ad.last_ack = parseInt(_af.packets[_af.packets.length - 1].time)
					}
				}
			})
		}
	},
	this.reset_score = function() {
		var _b3 = this;
		$("#players .p1 .score").text("0");
		$("#players .p2 .score").text("0");
		_b3.reset_break()
	},
	this.set_active_player = function(_b4, _b5) {
		var _b6 = this;
		if (typeof _b5 == "undefined") {
			_b5 = false
		}
		var _b7 = 0;
		if (_b6.turn == _b6.id) {
			_b7 = 0
		} else {
			_b7 = 1
		}
		if (typeof _b4 == "undefined") {
			_b4 = false
		}
		_b6.shot_timer = _b6.shottime + (_b6.turn != _b6.id ? 2 : 0);
		$("#players > div").removeClass("current");
		$("#players > div").eq(_b7).addClass("current");
		var _b8 = _b6.get_name(_b7) + (_b4 ? " to break.": " 's turn.");
		_b6.set_title();
		if (!_b5) {
			_b6.popup(_b8, 1000);
			notify(_b8);
			_b6.log(_b8)
		}
	},
	this.start_timer = function() {
		var _b9 = this;
		if (_b9.frame_timer_handle != null) {
			clearInterval(_b9.frame_timer_handle)
		}
		_b9.frame_timer_handle = setInterval(function() {
			network.frame_timer += 1;
			var m = parseInt(network.frame_timer / 60);
			var s = network.frame_timer - (m * 60);
			if (m < 10) {
				m = "0" + m
			}
			if (s < 10) {
				s = "0" + s
			}
			$("#frame-time").text("frame time: " + m + ":" + s);
			if (_b9.pool.isFrozen() && _b9.shottime > 0 && $("div.frame-summary").length == 0) {
				if (_b9.shot_timer > 0) {
					_b9.shot_timer -= 1;
					if (_b9.shot_timer == 0) {
						_b9.time_over()
					}
					var _ba = (network.shot_timer - (_b9.turn != _b9.id ? 2 : 0));
					if (_ba < 0 && _b9.turn != _b9.id) {
						_ba = 0
					}
					m = parseInt(_ba / 60);
					s = _ba - (m * 60);
					if (m < 10) {
						m = "0" + m
					}
					if (s < 10) {
						s = "0" + s
					}
					$("#players > div.current div.time-left").text(m + ":" + s)
				}
			}
		},
		1000)
	},
	this.stop_timer = function() {
		var _bb = this;
		clearInterval(_bb.frame_timer_handle)
	},
	this.reset_timer = function() {
		var _bc = this;
		_bc.stop_timer();
		_bc.frame_timer = 0;
		$("#frame-time").text("frame time: 00:00")
	},
	this.set_name = function(_bd, _be, _bf) {
		if (typeof _bf == "undefined") {
			var _bf = "none"
		}
		$("#players .p" + (_bd + 1) + " .name").text(_be);
		$("#players .p" + (_bd + 1) + " > img").remove();
		$("#players .p" + (_bd + 1)).prepend($("<img />").attr("src", "media/images/flags/" + _bf + ".gif").addClass("lang"))
	},
	this.get_name = function(_c0) {
		return $("#players .p" + (_c0 + 1) + " .name").text()
	},
	this.get_break = function() {
		return parseInt($("#current-break").text().split(": ")[1])
	},
	this.reset_break = function() {
		var _c1 = this;
		_c1.max_turn_break = Math.max(_c1.max_turn_break, _c1.get_break());
		$("#current-break").text("break: 0");
		$("#players div.time-left").text("00:00")
	},
	this.add_break = function(_c2) {
		var _c3 = this;
		var _c4 = _c3.get_break();
		$("#current-break").text("break: " + (_c4 + _c2))
	},
	this.set_frames = function(_c5) {
		$("#frame-count strong").text(_c5)
	},
	this.reset_frames = function() {
		var _c6 = this;
		$("#frame-count").html("0(<strong>" + _c6.get_frames() + "</strong>)0")
	},
	this.get_frames = function(_c7) {
		var _c8 = this;
		if (typeof _c7 == "undefined") {
			return _c8.frames
		} else {
			if (_c7 == 0) {
				return parseInt($("#frame-count").text().split("(")[0])
			} else {
				if (_c7 == 1) {
					return parseInt($("#frame-count").text().split(")")[1])
				}
			}
		}
	},
	this.add_frame = function(_c9) {
		var _ca = this;
		if (_c9 == 0) {
			$("#frame-count").html((_ca.get_frames(0) + 1) + "(<strong>" + _ca.get_frames() + "</strong>)" + _ca.get_frames(1))
		} else {
			if (_c9 == 1) {
				$("#frame-count").html(_ca.get_frames(0) + "(<strong>" + _ca.get_frames() + "</strong>)" + (_ca.get_frames(1) + 1))
			}
		}
	},
	this.add_score = function(_cb, _cc, _cd) {
		var _ce = this;
		if (_ce.turn != _ce.id) {
			if (_cb == 0) {
				_cb = 1
			} else {
				_cb = 0
			}
		}
		if (typeof _ce.vars.practice != "undefined" || _ce.client_id == null) {
			if (_cb == 1) {
				_ce.reset_break();
				return
			} else {
				if (_cc == 0) {
					_ce.reset_break()
				}
			}
		}
		if (_cc > 0) {
			if (!_cd) {
				_ce.add_break(_cc)
			}
			if (_cb == 0) {} else {}
			current_score = _ce.get_score(_cb);
			$("#players .p" + (_cb + 1) + " .score").text(current_score + _cc)
		}
	},
	this.get_score = function(_cf) {
		return parseInt($("#players .p" + (_cf + 1) + " .score").text())
	},
	this.own_turn = function() {
		var _d0 = this;
		if (config.debug) {
			return true
		}
		if (_d0.pause) {
			return false
		}
		if ((_d0.turn == _d0.id || typeof _d0.vars.practice != "undefined" || _d0.client_id == null) && _d0.can_shoot_timeout && $("div.game-info").length == 0 && $("div.frame-summary").length == 0) {
			return true
		}
		return false
	},
	this.end_turn = function() {
		var _d1 = this;
		_d1.shot_timer = _d1.shottime + (_d1.turn != _d1.id ? 2 : 0)
	},
	this.end_frame = function(_d2, _d3) {
		var _d4 = this;
		if (typeof _d2 == "undefined") {
			_d2 = false
		}
		var _d5 = "";
		var _d6 = false;
		var _d7 = network.get_score(0);
		var _d8 = network.get_score(1);
		if (_d7 < _d8 || (_d2 && _d3 == 0)) {
			_d5 = "<strong>" + network.get_name(1) + " </strong>wins.";
			network.add_frame(1);
			if (network.get_frames() == 1 || network.get_frames(1) >= parseInt(_d4.get_frames() / 2) + 1) {
				_d6 = true
			}
		} else {
			if (_d7 > _d8 || (_d2 && _d3 == 1)) {
				_d5 = "<strong>You </strong>win.";
				network.add_frame(0);
				if (network.get_frames() == 1 || network.get_frames(0) >= parseInt(_d4.get_frames() / 2) + 1) {
					_d6 = true
				}
			} else {
				_d5 = "It's a <strong>tie</strong>"
			}
		}
		$summary = $("<div class=\"result\">" + (_d2 ? (_d3 == 0 ? "<strong>You</strong>": "<strong>" + network.get_name(1) + "</strong>") + " surrendered the frame.<br>": "") + (_d6 ? "Match": "Frame") + " ended.<br> " + _d5 + "</div>" + "<p class=\"what-next\">What would you like to do next?</p>" + "<div class=\"actions\">" + "<ul>" + "<li><button name=\"disconnect\">Disconnect?</button></li>" + "<li><button name=\"rematch\"><strong>" + (_d6 ? "Rematch": "Next frame") + "?</strong></button></li>" + "</ul>" + "</div>");
		_d4.pool.listenEvents(false);
		$summary.find("button[name=disconnect]").click(function() {
			window.location.href = "index.php";
			return false
		});
		$summary.find("button[name=rematch]").click(function() {
			var _d9 = network.get_score(0);
			var _da = network.get_score(1);
			if (typeof network.vars.practice != "undefined" || network.client_id == null) {
				network.reset_game()
			} else {
				network.call_rematch();
				if (!network.client_rematch) {
					network.popup("Waiting for opponent response...");
					_d4.log("Waiting for opponent response...")
				} else {
					network.reset_game()
				}
			}
			$(this).parents("div.summary").fadeOut(500,
			function() {
				$(this).remove()
			});
			return false
		});
		_d4.popup($summary, null, "summary");
		network.rules.required_ball = "red"
	},
	this.rehost = function(_db) {
		var _dc = this;
		if (typeof _db == "undefined") {
			var _db = false
		}
		if ($(".summary").length == 0) {
			$summary = $("<div class=\"result\"><strong>" + network.get_name(1) + "</strong> " + (_db ? " timed out": " disconnected") + ".<br>Match ended.</div>" + "<p class=\"what-next\">What would you like to do next?</p>" + "<div class=\"actions\">" + "<ul>" + "<li><button name=\"disconnect\">Disconnect?</button></li>" + "<li><button name=\"join\"><strong>Join game</strong></button></li>" + "<li><button name=\"host\"><strong>Host game</strong></button></li>" + "</ul>" + "</div>");
			$summary.find("button[name=disconnect]").click(function() {
				window.location.href = "index.php";
				return false
			});
			$summary.find("button[name=join]").click(function() {
				$("#dashboard").parents(".wrapper").removeClass("closed");
				$(this).parents("div.summary").fadeOut(500,
				function() {
					$(this).remove()
				});
				return false
			});
			$summary.find("button[name=host]").click(function() {
				$("#dashboard").parents(".wrapper").removeClass("closed");
				$("#host-server").parent(".wrapper").removeClass("closed");
				$(this).parents("div.summary").fadeOut(500,
				function() {
					$(this).remove()
				});
				return false
			});
			_dc.popup($summary, null, "summary")
		}
	},
	this.switch_turn = function(_dd, _de) {
		var _df = this;
		if (config.debug || typeof _df.vars.practice != "undefined" || _df.client_id == null) {
			return true
		}
		if (_df.turn == _df.id) {
			_df.turn = _df.client_id
		} else {
			_df.turn = _df.id
		}
		_df.set_active_player(false, (_dd || _de));
		if (_df.turn == _df.id) {
			if (!_dd && !_de) {} else {
				_df.pool.listenEvents(false);
				$choose_turn = $("<div>" + _df.get_name(1) + " fouls. You can choose to start your turn or order him to try again." + "<div class=\"actions\">" + "<ul>" + "<li><button name=\"my_turn\">Start your turn?</button></li>" + "<li><button name=\"opponent_replay\">Order to replay?</button></li>" + "</ul>" + "</div></div>");
				notify(_df.get_name(1) + " fouls. You can choose to start your turn or order him to try again.");
				$choose_turn.find("button[name=my_turn]").click(function() {
					network.start();
					network.pool.listenEvents(true);
					$(this).parents("div.game-info").fadeOut(500,
					function() {
						$(this).remove()
					});
					return false
				});
				$choose_turn.find("button[name=opponent_replay]").click(function() {
					if (!$(this).parents("div.game-info").is(":animated")) {
						network.replay();
						network.state_load();
						network.pool.listenEvents(true);
						$(this).parents("div.game-info").fadeOut(500,
						function() {
							$(this).remove()
						})
					}
					return false
				});
				_df.popup($choose_turn)
			}
		} else {
			if (!_dd && !_de) {} else {
				_df.popup("You foul. Now it's for your opponent do decide if it's his turn or you repeat the same shot.", 3000)
			}
		}
		_df.shot_timer = _df.shottime + (_df.turn != _df.id ? 2 : 0);
		_df.reset_break()
	},
	this.replay = function() {
		var _e0 = this;
		_e0.send({
			"event": "replay",
			"turn": _e0.client_id
		});
		_e0.switch_turn(false, false)
	},
	this.start = function() {
		var _e1 = this;
		_e1.send({
			"event": "start"
		})
	},
	this.time_over = function() {
		var _e2 = this;
		if (_e2.id == _e2.turn) {
			$(".game-info").fadeOut(500);
			_e2.add_score(1, 4, true)
		} else {
			_e2.add_score(0, 4, true)
		}
		_e2.state_save();
		_e2.switch_turn(true, false)
	},
	this.call_rematch = function(_e3) {
		var _e4 = this;
		_e4.rematch = true;
		if (_e4.client_id != null) {
			_e4.send({
				"event": "rematch"
			})
		}
	},
	this.calculate_remaining_points = function() {
		var _e5 = this;
		var _e6 = 0;
		for (var i = 0; i < _e5.pool.getBallCount(); i++) {
			var _e7 = _e5.pool.getBall(i);
			if (_e7.type == "white") {
				continue
			}
			if (_e7.alive) {
				if (_e7.type == "red") {
					_e6 += 8
				} else {
					_e6 += _e5.rules.ball_points[_e7.type]
				}
			}
		}
		$("dt.points-remaining + dd > span").text(_e6)
	},
	this.reset_game = function(_e8) {
		if (typeof _e8 == "undefined") {
			_e8 = false
		}
		$(".game-info, .frame-summary").remove();
		var _e9 = this;
		var _ea = _e9.get_score(0);
		var _eb = _e9.get_score(1);
		var _ec = false;
		if (_ea < _eb) {
			if (network.get_frames() == 1 || network.get_frames(1) >= parseInt(_e9.get_frames() / 2) + 1) {
				_ec = true
			}
		} else {
			if (_ea > _eb) {
				if (network.get_frames() == 1 || network.get_frames(0) >= parseInt(_e9.get_frames() / 2) + 1) {
					_ec = true
				}
			}
		}
		_e9.pool.listenEvents(false);
		_e9.rules.first_ball = null;
		_e9.rules.required_ball = "red";
		_e9.rules.last_pot = null;
		_e9.rules.potted_balls = [];
		_e9.max_turn_break = 0;
		if (!_e8) {
			if (_e9.last_break_id == _e9.id) {
				_e9.turn = _e9.client_id
			} else {
				_e9.turn = _e9.id
			}
			_e9.last_break_id = _e9.turn
		}
		_e9.reset_score();
		_e9.base_state_load();
		_e9.calculate_remaining_points();
		if (!_e8) {
			_e9.set_active_player(true)
		}
		_e9.rematch = false;
		_e9.client_rematch = false;
		_e9.reset_timer();
		_e9.start_timer();
		if (_ec) {
			_e9.reset_frames()
		}
		_e9.pool.listenEvents(true)
	},
	this.shoot = function(x, y) {
		var _ed = this;
		if (_ed.own_turn()) {
			if (_ed.client_id != null) {
				_ed.send({
					"event": "shoot",
					"x": x,
					"y": y,
					"player": _ed.id,
					"hash": _ed.gen_hash()
				});
				_ed.can_shoot_timeout = false;
				setTimeout(function() {
					network.can_shoot_timeout = true
				},
				2100)
			}
		}
	},
	this.fix = function() {
		var _ee = this;
		for (var i = 0; i < _ee.pool.getBallCount(); i++) {
			var pos = _ee.pool.getBall(i).pos;
			_ee.pool.setBall(i, {
				x: parseInt(pos.x),
				y: parseInt(pos.y)
			})
		}
	},
	this.gen_hash = function() {
		var _ef = this;
		var _f0 = "";
		for (var i = 0; i < _ef.pool.getBallCount(); i++) {
			pos = _ef.pool.getBall(i).pos;
			_f0 += hex_md5(_f0 + pos.x);
			_f0 += hex_md5(_f0 + pos.y)
		}
		_f0 = hex_md5(_f0);
		return _f0
	},
	this.state_save = function() {
		var _f1 = this;
		_f1.last_state = [];
		_f1.pool.listenEvents(false);
		for (var i = 0; i < _f1.pool.getBallCount(); i++) {
			ball = _f1.pool.getBall(i);
			_f1.last_state.push({
				x: ball.pos.x,
				y: ball.pos.y,
				alive: ball.alive
			})
		}
		_f1.last_required = _f1.rules.required_ball;
		_f1.pool.listenEvents(true)
	},
	this.state_load = function() {
		var _f2 = this;
		_f2.shot_timer = _f2.shottime + (_f2.turn != _f2.id ? 2 : 0);
		_f2.pool.listenEvents(false);
		for (var i = 0; i < _f2.pool.getBallCount(); i++) {
			var pos = {
				x: _f2.last_state[i].x,
				y: _f2.last_state[i].y
			};
			_f2.pool.setBall(i, pos);
			_f2.pool.setAlive(i, _f2.last_state[i].alive)
		}
		_f2.rules.required_ball = _f2.last_required;
		_f2.pool.isCueSetting = false;
		_f2.pool.listenEvents(true);
		_f2.calculate_remaining_points()
	},
	this.base_state_save = function() {
		var _f3 = this;
		_f3.base_state = [];
		_f3.pool.listenEvents(false);
		for (var i = 0; i < _f3.pool.getBallCount(); i++) {
			ball = _f3.pool.getBall(i);
			_f3.base_state.push({
				x: ball.pos.x,
				y: ball.pos.y,
				alive: ball.alive
			})
		}
		_f3.pool.listenEvents(true)
	},
	this.base_state_load = function() {
		var _f4 = this;
		_f4.pool.listenEvents(false);
		for (var i = 0; i < _f4.pool.getBallCount(); i++) {
			var pos = {
				x: _f4.base_state[i].x,
				y: _f4.base_state[i].y
			};
			_f4.pool.setBall(i, pos);
			_f4.pool.setAlive(i, _f4.base_state[i].alive)
		}
		_f4.pool.listenEvents(true);
		_f4.pool.setAlive(0, false);
		_f4.pool.isCueSetting = true
	},
	this.setup_gamemode = function(_f5) {
		var _f6 = this;
		if (typeof _f5 == "undefined" || _f5 == "") {
			_f5 = "snooker"
		}
		_f6.pool.listenEvents(false);
		_f6.pool.clearBalls();
		var _f7 = 19;
		var _f8 = _f6.pool.getR();
		_f6.pool.addBall(_f6.rules.ball_positions["white"], "white");
		_f6.pool.addBall(_f6.rules.ball_positions["yellow"], "yellow");
		_f6.pool.addBall(_f6.rules.ball_positions["brown"], "brown");
		_f6.pool.addBall(_f6.rules.ball_positions["green"], "green");
		_f6.pool.addBall(_f6.rules.ball_positions["blue"], "blue");
		_f6.pool.addBall(_f6.rules.ball_positions["pink"], "pink");
		_f6.pool.addBall(_f6.rules.ball_positions["black"], "black");
		_f6.pool.addBall({
			x: 716,
			y: 281
		},
		"red");
		_f6.pool.addBall({
			x: 716 + _f7 * 1,
			y: 281 - _f8
		},
		"red");
		_f6.pool.addBall({
			x: 716 + _f7 * 1,
			y: 281 + _f8
		},
		"red");
		if (_f5 == "snooker" || _f5 == "short-snooker") {
			_f6.pool.addBall({
				x: 716 + _f7 * 2,
				y: 281 - _f8 * 2
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 2,
				y: 281
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 2,
				y: 281 + _f8 * 2
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 3,
				y: 281 - _f8 * 1
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 3,
				y: 281 - _f8 * 3
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 3,
				y: 281 + _f8 * 1
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 3,
				y: 281 + _f8 * 3
			},
			"red")
		}
		if (_f5 == "snooker") {
			_f6.pool.addBall({
				x: 716 + _f7 * 4,
				y: 281 - _f8 * 4
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 4,
				y: 281 - _f8 * 2
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 4,
				y: 281
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 4,
				y: 281 + _f8 * 2
			},
			"red");
			_f6.pool.addBall({
				x: 716 + _f7 * 4,
				y: 281 + _f8 * 4
			},
			"red")
		}
		_f6.pool.setAlive(0, false);
		_f6.pool.isCueSetting = true;
		_f6.base_state_save();
		_f6.pool.listenEvents(true)
	},
	this.register_command = function(_f9) {
		var _fa = this;
		_fa.commands.push(_f9)
	},
	this.console = function(_fb) {
		var _fc = this;
		if (_fb.substring(0, 1) == "/") {
			_fc.log(_fb);
			for (var i = 0; i < _fc.commands.length; i++) {
				var _fd = _fb.split(" ");
				_fb = _fd.shift().substring(1);
				if (_fc.commands[i] == _fb) {
					if (_fd.length == 0) {
						eval(_fb + "();")
					} else {
						if (_fd.length == 1) {
							_fd = _fd[0]
						}
						eval(_fb + "(args);")
					}
					return true
				}
			}
			_fc.log("Unknown command: " + _fb.substring(1), "error")
		} else {
			return _fc.say(_fb)
		}
	},
	this.say = function(_fe) {
		var _ff = this;
		if (_ff.can_chat && _fe != "" && typeof _ff.vars.id != "undefined") {
			_ff.log("[" + _ff.get_name(0) + "]: " + _fe, "chat");
			if (_ff.client_id != null) {
				network.send({
					"event": "chat",
					"message": _fe
				})
			}
			_ff.can_chat = false;
			setTimeout(function() {
				network.can_chat = true
			},
			500);
			return true
		}
		return false
	},
	this.surrender = function() {
		var self = this;
		if (typeof self.vars.id != "undefined") {
			if (self.turn == self.id) {
				if (self.client_id != null) {
					network.send({
						"event": "surrender"
					})
				}
				self.end_frame(true, 0)
			}
		}
	},
	this.prepare = function() {
		var self = this;
		this.vars = [];
		if (window.location.href.indexOf("?") != -1) {
			var _100 = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
			for (var i = 0; i < _100.length; i++) {
				hash = _100[i].split("=");
				this.vars.push(hash[0]);
				this.vars[hash[0]] = hash[1]
			}
		}
		self.log("Loading websnooker...")
	}
};
$(window).bind("unload",
function(e) {
	$.ajax({
		url: config.masterserver + "?query=send&id=" + network.vars.id + "&event=disconnect",
		success: function(data) {},
		async: false
	})
});
function __3(pA, pB) {
	var h = pB.x - pA.x;
	var v = pB.y - pA.y;
	return v / h
};
function __4(pA, pB) {
	var h = pB.x - pA.x;
	var v = pB.y - pA.y;
	return h / v
};
function __5(v) {
	return Math.atan2(v.y, v.x) + Math.PI / 2
};
function __6(v) {
	return {
		x: v.x,
		y: v.y
	}
};
function __7(pA, pB) {
	return {
		x: pB.x - pA.x,
		y: pB.y - pA.y
	}
};
function __8(v) {
	var len = __13(v);
	return len == 0 ? {
		x: 0,
		y: 0
	}: __12(v, len)
};
function __9(v1, v2) {
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y
	}
};
function __10(v1, v2) {
	return {
		x: v1.x - v2.x,
		y: v1.y - v2.y
	}
};
function __11(v, mul) {
	return {
		x: v.x * mul,
		y: v.y * mul
	}
};
function __12(v, div) {
	return {
		x: v.x / div,
		y: v.y / div
	}
};
function __13(_101) {
	return Math.sqrt(_101.x * _101.x + _101.y * _101.y)
};
function __14(pA, pB) {
	var _102 = __7(pA, pB);
	return Math.sqrt(_102.x * _102.x + _102.y * _102.y)
};
function __15(line, p) {
	var _103 = __7(line.a, line.b);
	var pVec = __7(line.a, p);
	var _104 = __17(pVec, _103) / __13(_103);
	var rP = undefined;
	if (_104 < 0) {
		rP = line.a
	} else {
		if (_104 > __13(_103)) {
			rP = line.b
		} else {
			var _105 = __8(_103);
			rP = __9(line.a, __11(_105, _104))
		}
	}
	return {
		dist: __14(rP, p),
		normal: __8(__7(p, rP))
	}
};
function __16(line) {
	var xMin = 0,
	xMax = 0,
	yMin = 0,
	yMax = 0;
	if (line.a.x < line.b.x) {
		xMin = line.a.x;
		xMax = line.b.x
	} else {
		xMin = line.b.x;
		xMax = line.a.x
	}
	if (line.a.y < line.b.y) {
		yMin = line.a.y;
		yMax = line.b.y
	} else {
		yMin = line.b.y;
		yMax = line.a.y
	}
	line.min = {
		x: xMin,
		y: yMin
	};
	line.max = {
		x: xMax,
		y: yMax
	};
	return line
};
function __17(vA, vB) {
	return vA.x * vB.x + vA.y * vB.y
};
function __18(vA, vB) {
	return vA.x * vB.y - vA.y * vB.x
};
function __19(pos, r, line) {
	var v = __7(line.b, line.a);
	var _106 = __8(v);
	var _107 = {
		x: -_106.y,
		y: _106.x
	};
	var d = __17(_107, __7(pos, line.b));
	var p = null;
	if (Math.abs(d) < 2 * r) {
		var pA = __9(pos, __11(_107, d));
		var _108 = Math.sqrt(4 * r * r - d * d);
		p = __10(pA, __11(_106, -_108));
		var _109 = __14(p, line.a);
		if (_109 > __13(v) || _109 < 0) {
			p = null
		}
	}
	return p == null ? null: {
		pos: p,
		normal: __8(__7(p, pos))
	}
};
function __20(vec, _10a) {
	var len = __13(vec);
	var a = __8(vec);
	var b = {
		x: Math.cos(_10a) * len,
		y: Math.sin(_10a) * len
	};
	return __11({
		x: a.x * b.x - a.y * b.y,
		y: a.y * b.x + a.x * b.y
	},
	len)
};
function sleep(_10b) {
	var _10c = new Date().getTime();
	for (var i = 0; i < 10000000; i++) {
		if ((new Date().getTime() - _10c) > _10b) {
			break
		}
	}
};
window_active = true;
$(window).focus(function() {
	window_active = true
});
$(window).blur(function() {
	window_active = false
});
function notify_permission() {
	if (support_notifications() && window.webkitNotifications.checkPermission() != 0) {
		window.webkitNotifications.requestPermission()
	}
};
function notify(_10d) {
	if (support_notifications()) {
		if (window.webkitNotifications.checkPermission() == 0) {
			if (!window_active) {}
		}
	}
};
var auto_refresh_timeout = null;
$(function() {
	$("body").css("overflow", "hidden");
	if ($(window).height() <= 666) {
		$("body").css("overflow-y", "scroll")
	}
	$(window).resize(function() {
		if ($(window).height() <= 666) {
			$("body").css("overflow-y", "scroll")
		} else {
			$("body").css("overflow-y", "hidden")
		}
	});
	network.prepare();
	if (__0("player") == "Guest") {
		$("#enter-name").parent(".wrapper").removeClass("closed")
	}
	$(window).keyup(function(e) {
		if ($("#enter-name").is(":visible")) {
			if ($("#enter-name input[name=player]").val() != "") {
				$("#enter-name button[name=save]").removeAttr("disabled")
			} else {
				$("#enter-name button[name=save]").attr("disabled", "disabled")
			}
		}
	});
	$("#enter-name input[name=player]").change(function() {
		if ($(this).val() != "") {
			$(this).parents("#enter-name").find("button[name=save]").removeAttr("disabled")
		} else {
			$(this).parents("#enter-name").find("button[name=save]").attr("disabled", "disabled")
		}
	});
	$("#enter-name button[name=save]").click(function() {
		var _10e = $("#enter-name input[name=player]").val();
		if (_10e != "") {
			__2("player", _10e);
			__2("enter-name", "off");
			$.ajax({
				url: "dashboard.php",
				cache: false,
				data: {
					"nick": _10e
				}
			});
			$("#enter-name").parent().addClass("closed")
		}
		return false
	});
	$("#community-menu ul.categories li a[href=#news]").click(function() {
		$("#news").parent().removeClass("closed");
		return false
	});
	$("#community-menu ul.categories li a[href=#welcome-screen]").click(function() {
		$("#welcome-screen").parent().show();
		return false
	});
	$("#community-menu ul.categories li a[href=#webchat], #irc-webchat .top-panel").click(function() {
		$("#irc-webchat").toggleClass("closed");
		return false
	});
	$("#community-menu ul.categories li a[href=#credits]").click(function() {
		$("#credits").parent(".wrapper").toggleClass("closed");
		return false
	});
	$("a.irc").live("click",
	function() {
		$("#irc-webchat").removeClass("closed");
		return false
	});
	$("#news .top-panel").click(function() {
		$(this).parents(".wrapper").toggleClass("closed");
		__2("news-" + hex_md5($("#news ul li:first time").text()), "off");
		return false
	});
	$("#news button[name=okay]").click(function() {
		$(this).parents(".wrapper").addClass("closed");
		__2("news-" + hex_md5($("#news ul li:first time").text()), "off");
		return false
	});
	$("#credits button[name=okay]").click(function() {
		$(this).parents(".wrapper").addClass("closed");
		return false
	});
	$("div.social iframe").load(function() {
		$(this).parent(".social").width($(this).width() - 5)
	});
	$("button[name=welcome]").click(function() {
		notify_permission();
		$(this).parents(".wrapper").hide();
		_10f();
		$("#settings").parents(".wrapper").removeClass("closed");
		return false
	});
	function _10f() {
		$("#settings input[name=player]").val(__0("player"));
		$("#settings select[name=skin]").val(__0("skin"));
		$("#settings select[name=scoreboard-style]").val(__0("scoreboard_style"));
		$("#settings radio").removeAttr("checked");
		$("#settings input:radio[value=" + __0("scoreboard_pos") + "]").attr("checked", "checked");
		$("#settings input[name=sound]").attr("checked", __0("sound") == "on");
		$("#settings input[name=shadows]").attr("checked", __0("shadows") == "on");
		$("#settings input[name=hints]").attr("checked", __0("hints") == "on");
		$("#settings input[name=cue]").attr("checked", __0("cue") == "on");
		$("#settings select[name=background]").val(__0("background"))
	};
	function _110(init) {
		if (typeof init == "undefined") {
			init = false
		}
		__2("player", $("#settings input[name=player]").val());
		__2("skin", $("#settings select[name=skin]").val());
		__2("scoreboard_pos", $("#settings input:radio[name=scoreboard-position]:checked").val());
		__2("scoreboard_style", $("#settings select[name=scoreboard-style]").val());
		__2("sound", ($("#settings input[name=sound]").attr("checked") ? "on": "off"));
		__2("shadows", ($("#settings input[name=shadows]").attr("checked") ? "on": "off"));
		__2("hints", ($("#settings input[name=hints]").attr("checked") ? "on": "off"));
		__2("background", $("#settings select[name=background]").val());
		__2("cue", ($("#settings input[name=cue]").attr("checked") ? "on": "off"));
		if (!init) {
			$.ajax({
				url: "dashboard.php",
				cache: false,
				data: {
					"nick": __0("player")
				}
			})
		}
		if (typeof globalGame != "undefined") {
			globalGame.shadowsEnable(__0("shadows") == "on");
			globalGame.hintsEnable(__0("hints") == "on")
		}
		$("link.skin").remove();
		$skin = $("<link />").addClass("skin").attr("rel", "stylesheet").attr("type", "text/css").attr("href", config.skin_path + (config.skin != null ? config.skin: "default") + "/stylesheets/" + (config.skin != null ? config.skin: "default") + ".css");
		$("head").append($skin);
		scoreboard_pos = __0("scoreboard_pos");
		$scoreboard = $("#scoreboard").clone();
		$("#scoreboard").remove();
		if (scoreboard_pos == "top") {
			$("#pool").before($scoreboard)
		} else {
			$("#pool").after($scoreboard)
		}
		scoreboard_style = __0("scoreboard_style");
		$("#scoreboard").removeClass("extended").removeClass("compact").removeClass("classic");
		$("#scoreboard").addClass(scoreboard_style);
		$("style.background").remove();
		$("body").css({
			"background-color": config.backgrounds[__0("skin")][__0("background")].color,
			"background-image": "url(" + config.backgrounds[__0("skin")][__0("background")].image + ")"
		})
	};
	_10f();
	_110(true);
	$(window).bind("unload",
	function() {
		$.ajax({
			url: "dashboard.php",
			cache: false,
			data: {
				"unregister": true
			}
		})
	});
	$(window).bind("beforeunload",
	function(e) {
		if (typeof network.vars.id != "undefined") {
			return "Do you really want to leave the game?"
		}
	});
	$("#console .top-panel").click(function() {
		$(this).parent().toggleClass("closed");
		if (!$(this).parent().hasClass("closed")) {
			$("#console ul.messages").scrollTop($("#console ul.messages").attr("scrollHeight"));
			$("input[name=chat]").focus()
		} else {
			$(window).click()
		}
		return false
	});
	$("#dashboard .top-panel").click(function() {
		if (typeof network.vars.practice != "undefined" || typeof network.vars.id != "undefined") {
			$("#dashboard").parents(".wrapper").toggleClass("closed");
			if (!$("#dashboard").parents(".wrapper").hasClass("closed")) {
				_111()
			}
		}
		return false
	});
	$("#rules .top-panel").click(function() {
		$(this).parents(".wrapper").toggleClass("closed");
		return false
	});
	$("#help .top-panel").click(function() {
		$(this).parent("#help").toggleClass("closed")
	});
	$("#settings button[name=cancel]").click(function() {
		$("#settings").parents(".wrapper").addClass("closed");
		return false
	});
	$("#settings button[name=save]").click(function() {
		$("#settings").parents(".wrapper").addClass("closed");
		_110();
		return false
	});
	$("#settings .top-panel").click(function() {
		_10f();
		$(this).parents(".wrapper").toggleClass("closed")
	});
	$("#frame-stats .top-panel").click(function() {
		$("#frame-stats").toggleClass("closed");
		return false
	});
	$("#match-options .top-panel").click(function() {
		$(this).parents(".wrapper").toggleClass("closed")
	});
	$("button[name=surrender]").click(function() {
		$(this).parents(".wrapper").addClass("closed");
		network.surrender();
		return false
	});
	$("#power-meter").height("50%");
	$("#power-bar").click(function(e) {
		$("#power-meter").height($(this).height() - (e.pageY - $(this).offset().top))
	});
	$(window).keyup(function(e) {
		if ($(e.target).is(":not(input, textarea, select, radio)") || $("input[name=chat]")[0] == document.activeElement) {
			if ($("input[name=chat]")[0] != document.activeElement || $("#console").hasClass("closed")) {
				if (e.keyCode == 73) {
					$("#irc-webchat").toggleClass("closed")
				}
				if (e.keyCode == 79) {
					$("#match-options").parents(".wrapper").toggleClass("closed")
				}
				if (e.keyCode == 48) {
					$("#power-meter").height("100%")
				}
				if (e.keyCode == 49) {
					$("#power-meter").height("10%")
				}
				if (e.keyCode == 50) {
					$("#power-meter").height("20%")
				}
				if (e.keyCode == 51) {
					$("#power-meter").height("30%")
				}
				if (e.keyCode == 52) {
					$("#power-meter").height("40%")
				}
				if (e.keyCode == 53) {
					$("#power-meter").height("50%")
				}
				if (e.keyCode == 54) {
					$("#power-meter").height("60%")
				}
				if (e.keyCode == 55) {
					$("#power-meter").height("70%")
				}
				if (e.keyCode == 56) {
					$("#power-meter").height("80%")
				}
				if (e.keyCode == 57) {
					$("#power-meter").height("90%")
				}
				if (e.keyCode == 83) {
					_10f();
					$("#settings").parents(".wrapper").toggleClass("closed")
				}
				if (e.keyCode == 68 || e.keyCode == 27) {
					if (typeof network.vars.practice != "undefined" || typeof network.vars.id != "undefined") {
						$("#dashboard").parents(".wrapper").toggleClass("closed");
						if (!$("#dashboard").parents(".wrapper").hasClass("closed")) {
							_111()
						}
					}
				}
				if (e.keyCode == 70) {
					$("#frame-stats").toggleClass("closed")
				}
				if (e.keyCode == 72) {
					$("#help").toggleClass("closed")
				}
				if (e.keyCode == 82) {
					$("#rules").parents(".wrapper").toggleClass("closed")
				}
			}
			if (e.keyCode == 192) {
				$("#console").toggleClass("closed");
				$("#console ul.messages").scrollTop($("#console ul.messages").attr("scrollHeight"));
				$("input[name=chat]").val("");
				if (!$("#console").hasClass("closed")) {
					$("input[name=chat]").focus()
				}
			}
		}
	});
	$(window).keypress(function(e) {
		if ($(e.target).is(":not(input, textarea, select, radio)") || $("input[name=chat]")[0] == document.activeElement) {
			if ($("input[name=chat]")[0] != document.activeElement || $("#console").hasClass("closed")) {
				if (e.keyCode == 45) {
					$("#power-meter").height($("#power-meter").height() - 5)
				}
				if (e.keyCode == 61) {
					$("#power-meter").height($("#power-meter").height() + 5)
				}
				if ($("#power-meter").height() > $("#power-bar").height()) {
					$("#power-meter").height($("#power-bar").height())
				}
			}
		}
	});
	$(window).mousewheel(function(e, _112) {
		if (_112 > 0) {
			$("#power-meter").height($("#power-meter").height() + 5)
		} else {
			if (_112 < 0) {
				$("#power-meter").height($("#power-meter").height() - 5)
			}
		}
		if ($("#power-meter").height() > $("#power-bar").height()) {
			$("#power-meter").height($("#power-bar").height())
		}
		if ($(e.target).parent().attr("id") != "console") {
			return false
		}
	});
	$("#servers table tr").live("click",
	function() {
		$("#servers table tr").removeClass("selected");
		$(this).addClass("selected");
		$("#servers").data("selected", $(this).attr("id"));
		$("button[name=join]").removeAttr("disabled");
		return false
	});
	function _113(_114) {
		filter = $("input[name=filter]").val();
		$("#servers table tr").removeClass("selected");
		$("button[name=join]").attr("disabled", "disabled");
		if (filter != "") {
			$("#servers table").find("tr").not(":first").filter(":not(:contains(" + filter + "))").hide();
			$("#servers table").find("tr").not(":first").filter(":contains(" + filter + ")").show()
		} else {
			$("#servers table tr").show()
		}
	};
	$("input[name=chat]").keydown(function(e) {
		if (e.keyCode == 13) {
			if (network.console($(this).val())) {
				$(this).val("")
			}
			return false
		}
		if (e.keyCode == 192) {
			return false
		}
		if ($(this).val().length >= 150) {
			return false
		}
	});
	$("input[name=filter]").keyup(function() {
		_113()
	}).change(function() {
		_113()
	});
	$("input[name=filter]").addClass("tip").data("tip", "Filter servers").val("Filter servers");
	$("input[name=filter]").focus(function() {
		if ($(this).val() == $(this).data("tip")) {
			$(this).val("").removeClass("tip")
		}
	});
	$("input[name=filter]").blur(function() {
		if ($(this).val() == "") {
			$(this).val($(this).data("tip")).addClass("tip")
		}
	});
	setInterval(_111, 5000);
	function _111() {
		if (!$("#dashboard").parents(".wrapper").hasClass("closed") || typeof network.vars.practice != "undefined") {
			$.ajax({
				url: "dashboard.php",
				cache: false,
				data: {
					"info": true
				},
				success: function(data) {
					if (data["invited"] != false && 0) {
						data.invited = $.parseJSON(data.invited);
						$invitation_info = $("div.common-popup.invitation div.container p");
						$invitation_info.children("span").eq(0).text(data.invited.nick);
						$invitation_info.children("span").eq(1).text("Game mode: " + config.gamemodes[data.invited.data.gamemode] + ", Frames: " + data.invited.data.frames + ", Shot time: " + config.shottime[data.invited.data.shottime] + ", Password: " + (data.invited.data.password == 1 ? "Yes": "No"));
						$("#servers").data("selected", data.invited.data.server);
						$("#servers").data("password", data.invited.data.password);
						$("div.common-popup.invitation").parent(".wrapper").removeClass("closed")
					}
					$("div.lounge").data("selected", $("div.lounge ul.players li.selected").attr("id"));
					$("div.lounge ul.players li").remove();
					if (typeof data.nicks != "undefined") {
						$.each(data["nicks"],
						function(key, _115) {
							if (!_115.playing) {
								$("div.lounge ul.players").append($("<li />").attr("id", key.replace(".", "-")).append($("<a />").text(_115["nick"])))
							}
						});
						$.each(data["nicks"],
						function(key, _116) {
							if (_116.playing) {
								$("div.lounge ul.players").append($("<li />").addClass("inactive").attr("id", key.replace(".", "-")).append($("<a />").text(_116["nick"])))
							}
						});
						$("div.lounge ul.players li#" + $("div.lounge").data("selected")).addClass("selected")
					}
					var _117 = $("div.lounge ul.players li").length;
					$("div.lounge div.hint span").text((_117 > 0 ? _117: "no") + " players in it")
				}
			})
		}
		if (!$("#dashboard").parents(".wrapper").hasClass("closed")) {
			$("#dashboard button[name=join]").attr("disabled", "disabled");
			if ($("#servers tr.selected").length > 0) {
				$("#dashboard button[name=join]").removeAttr("disabled");
				$("#servers").data("selected", $("#servers tr.selected").attr("id"))
			}
			network.get("servers", {},
			function(data) {
				data = $.parseJSON(data);
				$("#servers p.status").hide();
				$("#servers table tr").not(":first").remove();
				if (typeof data != "undefined" && data["servers"].length > 0) {
					$.each(data["servers"],
					function(i, _118) {
						var _119 = "-";
						if (typeof _118.client_player != "undefined" && _118.client_player != null && _118.client_player != "") {
							_119 = "<img src=\"media/images/flags/" + _118.client_lang + ".gif\" class=\"lang\" />" + _118["client_player"]
						}
						$server = $("<tr />");
						$server.attr("id", _118["server_id"]);
						if (_118["password"] == 1) {
							$server.addClass("password")
						}
						$server.append($("<th />").text(_118["server_name"]));
						$server.append($("<th />").text(_118["password"] == 1 ? "Yes": "No"));
						$server.append($("<th />").text(_118["frames"]));
						$server.append($("<th />").text(config.shottime[_118["shottime"]]));
						$server.append($("<th />").text(config.gamemodes[_118["gamemode"]]));
						$server.append($("<th />").html("<img src=\"media/images/flags/" + _118["host_lang"] + ".gif\" class=\"lang\" />" + _118["host_player"]));
						$server.append($("<th />").html(_119));
						$("#servers table").append($server)
					});
					if (data["servers"].length == 0) {
						$("#servers p.status").show()
					}
					if ($("#servers tr#" + $("#servers").data("selected")).length > 0) {
						$("#servers tr#" + $("#servers").data("selected")).addClass("selected")
					}
				} else {
					$("#servers p.status").show()
				}
				$("#player-count").text(data["count"]["players"] + " players in " + data["count"]["servers"] + " servers")
			})
		}
	};
	$("button[name=refresh]").click(function() {
		_111();
		return false
	});
	$("button[name=host], a.host").click(function() {
		notify_permission();
		$("input[name=server_name]").val(__0("server_name"));
		$("#host-server").parents(".wrapper").removeClass("closed");
		return false
	});
	$("button[name=practice]").click(function() {
		notify_permission();
		window.location.href = "index.php?practice=single";
		return false
	});
	$("#host-server button[name=cancel]").click(function() {
		$(this).parents("#host-server").parent(".wrapper").addClass("closed");
		return false
	});
	$("#host-server button[name=start]").click(function() {
		__2("server_name", $("input[name=server_name]").val());
		network.ajax("host", {
			"server_name": $("input[name=server_name]").val(),
			"name": __0("player"),
			"gamemode": $("select[name=gamemode] option:selected").val(),
			"shottime": $("select[name=shottime] option:selected").val(),
			"password": $("input[name=server_password]").val(),
			"lang": LANG.code,
			"frames": $("select[name=frames] option:selected").val()
		},
		function(data) {
			data = $.parseJSON(data);
			var _11a = $("div.lounge ul.players li.selected").attr("id");
			if (_11a != null) {
				_11a = _11a.replace("-", ".");
				var _11b = data["server"]["id"];
				$.ajax({
					url: "dashboard.php",
					cache: false,
					data: {
						"invite": _11a,
						"server": data["server"]["id"].split("-")[0],
						"gamemode": $("select[name=gamemode] option:selected").val(),
						"shottime": $("select[name=shottime] option:selected").val(),
						"frames": $("select[name=frames] option:selected").val(),
						"password": ($("input[name=server_password]").val() != "" ? 1 : 0)
					},
					success: function(data) {
						window.location.href = "index.php?id=" + _11b + "&host=1"
					}
				})
			} else {
				window.location.href = "index1.php?id=" + data["server"]["id"] + "&host=1"
			}
		});
		return false
	});
	$("#enter-password button[name=cancel]").click(function() {
		$(this).parents("#enter-password").parent(".wrapper").addClass("closed");
		return false
	});
	$("#enter-password button[name=join]").click(function() {
		notify_permission();
		$server = $("#servers table tr.selected");
		if ($server.length > 0) {
			if (typeof network.vars.joingame != "undefined") {
				network.ajax("join", {
					"id": network.vars.joingame,
					"name": __0("player"),
					"password": $("input[name=client_password]").val(),
					"lang": LANG.code
				},
				function(data) {
					window.location.href = "index.php?id=" + data["server"]["id"]
				})
			} else {
				if (typeof network.vars.id == "undefined" || $("#servers").data("selected") != network.vars.id.split("-")[0]) {
					network.ajax("join", {
						"id": $("#servers").data("selected"),
						"name": __0("player"),
						"password": $("input[name=client_password]").val(),
						"lang": LANG.code
					},
					function(data) {
						window.location.href = "index.php?id=" + data["server"]["id"]
					})
				}
			}
		}
		$(this).parents(".wrapper").addClass("closed")
	});
	$("#options button[name=join]").click(function() {
		$server = $("#servers table tr.selected");
		if ($server.length > 0) {
			if ($server.hasClass("password")) {
				$("#enter-password").parents(".wrapper").removeClass("closed")
			} else {
				if (typeof network.vars.id == "undefined" || $("#servers").data("selected") != network.vars.id.split("-")[0]) {
					network.ajax("join", {
						"id": $("#servers").data("selected"),
						"name": __0("player"),
						"lang": LANG.code
					},
					function(data) {
						data = $.parseJSON(data);
						window.location.href = "index1.php?id=" + data["server"]["id"]
					})
				}
			}
		}
		return false
	});
	if (typeof network.vars.joingame != "undefined") {
		if (typeof network.vars.password != "undefined" && network.vars.password == 1) {
			$("#enter-password").parents(".wrapper").removeClass("closed")
		} else {
			network.ajax("join", {
				"id": network.vars.joingame,
				"name": __0("player"),
				"lang": LANG.code
			},
			function(data) {
				window.location.href = "index.php?id=" + data["server"]["id"]
			})
		}
	}
	if (typeof network.vars.practice == "undefined" && typeof network.vars.id == "undefined") {
		var _11c = false;
		$("#loading-screen div.progress-bar").animate({
			"width": "100%"
		},
		1000,
		function() {
			_11c = true;
			$("#loading-screen").fadeOut(500)
		});
		$(window).ready(function() {
			if (_11c) {
				$("#loading-screen").fadeOut(500)
			}
		})
	} else {
		$(window).ready(function() {
			$("#loading-screen div.progress-bar").animate({
				"width": "100%"
			},
			1000,
			function() {
				$(this).parents("#loading-screen").fadeOut(500)
			})
		})
	}
	$("div.lounge ul.players li").live("click",
	function() {
		if (!$(this).hasClass("inactive")) {
			$(this).parent("ul.players").children("li").removeClass("selected");
			$(this).addClass("selected")
		}
		return false
	});
	$("div.lounge").click(function(e) {
		if (!$(e.target).is("a")) {
			$(this).find("li").removeClass("selected")
		}
	});
	if (typeof network.vars.id != "undefined" && typeof network.vars.host != "undefined") {
		$("div.common-popup.practice").parent(".wrapper").removeClass("closed");
		$("div.common-popup.practice button[name=ok]").click(function() {
			$(this).parents("div.common-popup.practice").parent(".wrapper").addClass("closed");
			return false
		})
	}
	$("div.common-popup.invitation button[name=decline]").click(function() {
		$(this).parents("div.common-popup.invitation").parent(".wrapper").addClass("closed");
		return false
	});
	$("div.common-popup.invitation button[name=accept]").click(function() {
		$(this).parents("div.common-popup.invitation").parent(".wrapper").addClass("closed");
		if ($("#servers").data("password") == 1) {
			$("#enter-password").parents(".wrapper").removeClass("closed")
		} else {
			network.ajax("join", {
				"id": $("#servers").data("selected"),
				"name": __0("player"),
				"lang": LANG.code
			},
			function(data) {
				window.location.href = "index.php?id=" + data["server"]["id"]
			})
		}
		return false
	});
	$.ajax({
		url: "dashboard.php",
		cache: false,
		data: {
			"nick": __0("player")
		},
		complete: function() {
			$.ajax({
				url: "dashboard.php",
				cache: false,
				data: {
					"playing": (typeof network.vars.id == "undefined" ? 0 : 1)
				},
				complete: function() {
					_111()
				}
			})
		}
	});
	$log = $("#console ul.messages");
	$log.children("li").last().removeClass("last");
	$message = $("<li />").html("<a href=\"http://webchat.quakenet.org/?channels=websnooker&uio=d4\" class=\"irc\">Come visit WebSnooker IRC Channel: #websnooker @ QuakeNet</a>");
	$message.addClass("last");
	$log.append($message);
	$("#console ul.messages").scrollTop($("#console ul.messages").attr("scrollHeight"))
});