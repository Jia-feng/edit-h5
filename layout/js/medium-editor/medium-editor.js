"classList" in document.createElement("_") || ! function (e) {
    "use strict";
    if ("Element" in e) {
      var t = "classList",
        n = "prototype",
        i = e.Element[n],
        o = Object,
        s = String[n].trim || function () {
          return this.replace(/^\s+|\s+$/g, "")
        },
        r = Array[n].indexOf || function (e) {
          for (var t = 0, n = this.length; t < n; t++)
            if (t in this && this[t] === e) return t;
          return -1
        },
        a = function (e, t) {
          this.name = e, this.code = DOMException[e], this.message = t
        },
        l = function (e, t) {
          if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
          if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
          return r.call(e, t)
        },
        c = function (e) {
          for (var t = s.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, o = n.length; i < o; i++) this.push(n[i]);
          this._updateClassName = function () {
            e.setAttribute("class", this.toString())
          }
        },
        u = c[n] = [],
        d = function () {
          return new c(this)
        };
      if (a[n] = Error[n], u.item = function (e) {
          return this[e] || null
        }, u.contains = function (e) {
          return e += "", l(this, e) !== -1
        }, u.add = function () {
          var e, t = arguments,
            n = 0,
            i = t.length,
            o = !1;
          do e = t[n] + "", l(this, e) === -1 && (this.push(e), o = !0); while (++n < i);
          o && this._updateClassName()
        }, u.remove = function () {
          var e, t, n = arguments,
            i = 0,
            o = n.length,
            s = !1;
          do
            for (e = n[i] + "", t = l(this, e); t !== -1;) this.splice(t, 1), s = !0, t = l(this, e); while (++i < o);
          s && this._updateClassName()
        }, u.toggle = function (e, t) {
          e += "";
          var n = this.contains(e),
            i = n ? t !== !0 && "remove" : t !== !1 && "add";
          return i && this[i](e), t === !0 || t === !1 ? t : !n
        }, u.toString = function () {
          return this.join(" ")
        }, o.defineProperty) {
        var h = {
          get: d,
          enumerable: !0,
          configurable: !0
        };
        try {
          o.defineProperty(i, t, h)
        } catch (e) {
          e.number === -2146823252 && (h.enumerable = !1, o.defineProperty(i, t, h))
        }
      } else o[n].__defineGetter__ && i.__defineGetter__(t, d)
    }
  }(self),
  function (e) {
    "use strict";
    if (e.URL = e.URL || e.webkitURL, e.Blob && e.URL) try {
      return void new Blob
    } catch (e) {}
    var t = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || function (e) {
      var t = function (e) {
          return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]
        },
        n = function () {
          this.data = []
        },
        i = function (e, t, n) {
          this.data = e, this.size = e.length, this.type = t, this.encoding = n
        },
        o = n.prototype,
        s = i.prototype,
        r = e.FileReaderSync,
        a = function (e) {
          this.code = this[this.name = e]
        },
        l = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
        c = l.length,
        u = e.URL || e.webkitURL || e,
        d = u.createObjectURL,
        h = u.revokeObjectURL,
        m = u,
        f = e.btoa,
        p = e.atob,
        g = e.ArrayBuffer,
        b = e.Uint8Array,
        v = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
      for (i.fake = s.fake = !0; c--;) a.prototype[l[c]] = c + 1;
      return u.createObjectURL || (m = e.URL = function (e) {
        var t, n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
        return n.href = e, "origin" in n || ("data:" === n.protocol.toLowerCase() ? n.origin = null : (t = e.match(v), n.origin = t && t[1])), n
      }), m.createObjectURL = function (e) {
        var t, n = e.type;
        return null === n && (n = "application/octet-stream"), e instanceof i ? (t = "data:" + n, "base64" === e.encoding ? t + ";base64," + e.data : "URI" === e.encoding ? t + "," + decodeURIComponent(e.data) : f ? t + ";base64," + f(e.data) : t + "," + encodeURIComponent(e.data)) : d ? d.call(u, e) : void 0
      }, m.revokeObjectURL = function (e) {
        "data:" !== e.substring(0, 5) && h && h.call(u, e)
      }, o.append = function (e) {
        var n = this.data;
        if (b && (e instanceof g || e instanceof b)) {
          for (var o = "", s = new b(e), l = 0, c = s.length; l < c; l++) o += String.fromCharCode(s[l]);
          n.push(o)
        } else if ("Blob" === t(e) || "File" === t(e)) {
          if (!r) throw new a("NOT_READABLE_ERR");
          var u = new r;
          n.push(u.readAsBinaryString(e))
        } else e instanceof i ? "base64" === e.encoding && p ? n.push(p(e.data)) : "URI" === e.encoding ? n.push(decodeURIComponent(e.data)) : "raw" === e.encoding && n.push(e.data) : ("string" != typeof e && (e += ""), n.push(unescape(encodeURIComponent(e))))
      }, o.getBlob = function (e) {
        return arguments.length || (e = null), new i(this.data.join(""), e, "raw")
      }, o.toString = function () {
        return "[object BlobBuilder]"
      }, s.slice = function (e, t, n) {
        var o = arguments.length;
        return o < 3 && (n = null), new i(this.data.slice(e, o > 1 ? t : this.data.length), n, this.encoding)
      }, s.toString = function () {
        return "[object Blob]"
      }, s.close = function () {
        this.size = 0, delete this.data
      }, n
    }(e);
    e.Blob = function (e, n) {
      var i = n ? n.type || "" : "",
        o = new t;
      if (e)
        for (var s = 0, r = e.length; s < r; s++) Uint8Array && e[s] instanceof Uint8Array ? o.append(e[s].buffer) : o.append(e[s]);
      var a = o.getBlob(i);
      return !a.slice && a.webkitSlice && (a.slice = a.webkitSlice), a
    };
    var n = Object.getPrototypeOf || function (e) {
      return e.__proto__
    };
    e.Blob.prototype = n(new e.Blob)
  }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content || this),
  function (e, t) {
    "use strict";
    "object" == typeof module ? module.exports = t : "function" == typeof define && define.amd ? define(function () {
      return t
    }) : e.MediumEditor = t
  }(this, function () {
    "use strict";

    function e(e, t) {
      return this.init(e, t)
    }
    return e.extensions = {},
      function (t) {
        function n(e, t) {
          var n, i = Array.prototype.slice.call(arguments, 2);
          t = t || {};
          for (var o = 0; o < i.length; o++) {
            var s = i[o];
            if (s)
              for (n in s) s.hasOwnProperty(n) && "undefined" != typeof s[n] && (e || t.hasOwnProperty(n) === !1) && (t[n] = s[n])
          }
          return t
        }
        var i = !1;
        try {
          var o = document.createElement("div"),
            s = document.createTextNode(" ");
          o.appendChild(s), i = o.contains(s)
        } catch (e) {}
        var r = {
          isIE: "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),
          isEdge: null !== /Edge\/\d+/.exec(navigator.userAgent),
          isFF: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
          isMac: t.navigator.platform.toUpperCase().indexOf("MAC") >= 0,
          keyCode: {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            DELETE: 46,
            K: 75,
            M: 77
          },
          isMetaCtrlKey: function (e) {
            return !!(r.isMac && e.metaKey || !r.isMac && e.ctrlKey)
          },
          isKey: function (e, t) {
            var n = r.getKeyCode(e);
            return !1 === Array.isArray(t) ? n === t : -1 !== t.indexOf(n)
          },
          getKeyCode: function (e) {
            var t = e.which;
            return null === t && (t = null !== e.charCode ? e.charCode : e.keyCode), t
          },
          blockContainerElementNames: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "ul", "li", "ol", "address", "article", "aside", "audio", "canvas", "dd", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "header", "hgroup", "main", "nav", "noscript", "output", "section", "video", "table", "thead", "tbody", "tfoot", "tr", "th", "td"],
          emptyElementNames: ["br", "col", "colgroup", "hr", "img", "input", "source", "wbr"],
          extend: function () {
            var e = [!0].concat(Array.prototype.slice.call(arguments));
            return n.apply(this, e)
          },
          defaults: function () {
            var e = [!1].concat(Array.prototype.slice.call(arguments));
            return n.apply(this, e)
          },
          createLink: function (e, t, n, i) {
            var o = e.createElement("a");
            return r.moveTextRangeIntoElement(t[0], t[t.length - 1], o), o.setAttribute("href", n), o.setAttribute("data-control", "btn-link"), i && o.setAttribute("target", i), o
          },
          findOrCreateMatchingTextNodes: function (e, t, n) {
            for (var i = e.createTreeWalker(t, NodeFilter.SHOW_ALL, null, !1), o = [], s = 0, a = !1, l = null, c = null; null !== (l = i.nextNode());)
              if (!(l.nodeType > 3))
                if (3 === l.nodeType) {
                  if (!a && n.start < s + l.nodeValue.length && (a = !0, c = r.splitStartNodeIfNeeded(l, n.start, s)), a && r.splitEndNodeIfNeeded(l, c, n.end, s), a && s === n.end) break;
                  if (a && s > n.end + 1) throw new Error("PerformLinking overshot the target!");
                  a && o.push(c || l), s += l.nodeValue.length, null !== c && (s += c.nodeValue.length, i.nextNode()), c = null
                } else "img" === l.tagName.toLowerCase() && (!a && n.start <= s && (a = !0), a && o.push(l));
            return o
          },
          splitStartNodeIfNeeded: function (e, t, n) {
            return t !== n ? e.splitText(t - n) : null
          },
          splitEndNodeIfNeeded: function (e, t, n, i) {
            var o, s;
            o = i + (t || e).nodeValue.length + (t ? e.nodeValue.length : 0) - 1, s = (t || e).nodeValue.length - (o + 1 - n), o >= n && i !== o && 0 !== s && (t || e).splitText(s)
          },
          splitByBlockElements: function (t) {
            if (3 !== t.nodeType && 1 !== t.nodeType) return [];
            var n = [],
              i = e.util.blockContainerElementNames.join(",");
            if (3 === t.nodeType || 0 === t.querySelectorAll(i).length) return [t];
            for (var o = 0; o < t.childNodes.length; o++) {
              var s = t.childNodes[o];
              if (3 === s.nodeType) n.push(s);
              else if (1 === s.nodeType) {
                var r = s.querySelectorAll(i);
                0 === r.length ? n.push(s) : n = n.concat(e.util.splitByBlockElements(s))
              }
            }
            return n
          },
          findAdjacentTextNodeWithContent: function (e, t, n) {
            var i, o = !1,
              s = n.createNodeIterator(e, NodeFilter.SHOW_TEXT, null, !1);
            for (i = s.nextNode(); i;) {
              if (i === t) o = !0;
              else if (o && 3 === i.nodeType && i.nodeValue && i.nodeValue.trim().length > 0) break;
              i = s.nextNode()
            }
            return i
          },
          findPreviousSibling: function (e) {
            if (!e || r.isMediumEditorElement(e)) return !1;
            for (var t = e.previousSibling; !t && !r.isMediumEditorElement(e.parentNode);) e = e.parentNode, t = e.previousSibling;
            return t
          },
          isDescendant: function (e, t, n) {
            if (!e || !t) return !1;
            if (e === t) return !!n;
            if (1 !== e.nodeType) return !1;
            if (i || 3 !== t.nodeType) return e.contains(t);
            for (var o = t.parentNode; null !== o;) {
              if (o === e) return !0;
              o = o.parentNode
            }
            return !1
          },
          isElement: function (e) {
            return !(!e || 1 !== e.nodeType)
          },
          throttle: function (e, t) {
            var n, i, o, s = 50,
              r = null,
              a = 0,
              l = function () {
                a = Date.now(), r = null, o = e.apply(n, i), r || (n = i = null)
              };
            return t || 0 === t || (t = s),
              function () {
                var s = Date.now(),
                  c = t - (s - a);
                return n = this, i = arguments, c <= 0 || c > t ? (r && (clearTimeout(r), r = null), a = s, o = e.apply(n, i), r || (n = i = null)) : r || (r = setTimeout(l, c)), o
              }
          },
          traverseUp: function (e, t) {
            if (!e) return !1;
            do {
              if (1 === e.nodeType) {
                if (t(e)) return e;
                if (r.isMediumEditorElement(e)) return !1
              }
              e = e.parentNode
            } while (e);
            return !1
          },
          htmlEntities: function (e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
          },
          insertHTMLCommand: function (t, n) {
            var i, o, s, a, l, c, u, d = !1,
              h = ["insertHTML", !1, n];
            if (!e.util.isEdge && t.queryCommandSupported("insertHTML")) try {
              return t.execCommand.apply(t, h)
            } catch (e) {}
            if (i = t.getSelection(), i.rangeCount) {
              if (o = i.getRangeAt(0), u = o.commonAncestorContainer, r.isMediumEditorElement(u) && !u.firstChild) o.selectNode(u.appendChild(t.createTextNode("")));
              else if (3 === u.nodeType && 0 === o.startOffset && o.endOffset === u.nodeValue.length || 3 !== u.nodeType && u.innerHTML === o.toString()) {
                for (; !r.isMediumEditorElement(u) && u.parentNode && 1 === u.parentNode.childNodes.length && !r.isMediumEditorElement(u.parentNode);) u = u.parentNode;
                o.selectNode(u)
              }
              for (o.deleteContents(), s = t.createElement("div"), s.innerHTML = n, a = t.createDocumentFragment(); s.firstChild;) l = s.firstChild, c = a.appendChild(l);
              o.insertNode(a), c && (o = o.cloneRange(), o.setStartAfter(c), o.collapse(!0), i.removeAllRanges(), i.addRange(o)), d = !0
            }
            return t.execCommand.callListeners && t.execCommand.callListeners(h, d), d
          },
          execFormatBlock: function (t, n) {
            var i, o = r.getTopBlockContainer(e.selection.getSelectionStart(t));
            if ("blockquote" === n) {
              if (o && (i = Array.prototype.slice.call(o.childNodes), i.some(function (e) {
                  return r.isBlockContainer(e)
                }))) return t.execCommand("outdent", !1, null);
              if (r.isIE) return t.execCommand("indent", !1, n)
            }
            if (o && n === o.nodeName.toLowerCase() && (n = "p"), r.isIE && (n = "<" + n + ">"), o && "blockquote" === o.nodeName.toLowerCase()) {
              if (r.isIE && "<p>" === n) return t.execCommand("outdent", !1, n);
              if ((r.isFF || r.isEdge) && "p" === n) return i = Array.prototype.slice.call(o.childNodes), i.some(function (e) {
                return !r.isBlockContainer(e)
              }) && t.execCommand("formatBlock", !1, n), t.execCommand("outdent", !1, n)
            }
            return t.execCommand("formatBlock", !1, n)
          },
          setTargetBlank: function (e, t) {
            var n, i = t || !1;
            if ("a" === e.nodeName.toLowerCase()) e.target = "_blank", e.setAttribute("data-control", "btn-link");
            else
              for (e = e.getElementsByTagName("a"), n = 0; n < e.length; n += 1) !1 !== i && i !== e[n].attributes.href.value || (e[n].target = "_blank", e[n].setAttribute("data-control", "btn-link"))
          },
          removeTargetBlank: function (e, t) {
            var n;
            if ("a" === e.nodeName.toLowerCase()) e.removeAttribute("target");
            else
              for (e = e.getElementsByTagName("a"), n = 0; n < e.length; n += 1) t === e[n].attributes.href.value && e[n].removeAttribute("target")
          },
          addClassToAnchors: function (e, t) {
            var n, i, o = t.split(" ");
            if ("a" === e.nodeName.toLowerCase())
              for (i = 0; i < o.length; i += 1) e.classList.add(o[i]);
            else
              for (e = e.getElementsByTagName("a"), n = 0; n < e.length; n += 1)
                for (i = 0; i < o.length; i += 1) e[n].classList.add(o[i])
          },
          isListItem: function (e) {
            if (!e) return !1;
            if ("li" === e.nodeName.toLowerCase()) return !0;
            for (var t = e.parentNode, n = t.nodeName.toLowerCase();
              "li" === n || !r.isBlockContainer(t) && "div" !== n;) {
              if ("li" === n) return !0;
              if (t = t.parentNode, !t) return !1;
              n = t.nodeName.toLowerCase()
            }
            return !1
          },
          cleanListDOM: function (t, n) {
            if ("li" === n.nodeName.toLowerCase()) {
              var i = n.parentElement;
              "p" === i.parentElement.nodeName.toLowerCase() && (r.unwrap(i.parentElement, t), e.selection.moveCursor(t, n.firstChild, n.firstChild.textContent.length))
            }
          },
          splitOffDOMTree: function (e, t, n) {
            for (var i = t, o = null, s = !n; i !== e;) {
              var r, a = i.parentNode,
                l = a.cloneNode(!1),
                c = s ? i : a.firstChild;
              for (o && (s ? l.appendChild(o) : r = o), o = l; c;) {
                var u = c.nextSibling;
                c === i ? (c.hasChildNodes() ? c = c.cloneNode(!1) : c.parentNode.removeChild(c), c.textContent && o.appendChild(c), c = s ? u : null) : (c.parentNode.removeChild(c), (c.hasChildNodes() || c.textContent) && o.appendChild(c), c = u)
              }
              r && o.appendChild(r), i = a
            }
            return o
          },
          moveTextRangeIntoElement: function (e, t, n) {
            if (!e || !t) return !1;
            var i = r.findCommonRoot(e, t);
            if (!i) return !1;
            if (t === e) {
              var o = e.parentNode,
                s = e.nextSibling;
              return o.removeChild(e), n.appendChild(e), s ? o.insertBefore(n, s) : o.appendChild(n), n.hasChildNodes()
            }
            for (var a, l, c, u = [], d = 0; d < i.childNodes.length; d++)
              if (c = i.childNodes[d], a) {
                if (r.isDescendant(c, t, !0)) {
                  l = c;
                  break
                }
                u.push(c)
              } else r.isDescendant(c, e, !0) && (a = c);
            var h = l.nextSibling,
              m = i.ownerDocument.createDocumentFragment();
            return a === e ? (a.parentNode.removeChild(a), m.appendChild(a)) : m.appendChild(r.splitOffDOMTree(a, e)), u.forEach(function (e) {
              e.parentNode.removeChild(e), m.appendChild(e)
            }), l === t ? (l.parentNode.removeChild(l), m.appendChild(l)) : m.appendChild(r.splitOffDOMTree(l, t, !0)), n.appendChild(m), l.parentNode === i ? i.insertBefore(n, l) : h ? i.insertBefore(n, h) : i.appendChild(n), n.hasChildNodes()
          },
          depthOfNode: function (e) {
            for (var t = 0, n = e; null !== n.parentNode;) n = n.parentNode, t++;
            return t
          },
          findCommonRoot: function (e, t) {
            for (var n = r.depthOfNode(e), i = r.depthOfNode(t), o = e, s = t; n !== i;) n > i ? (o = o.parentNode, n -= 1) : (s = s.parentNode, i -= 1);
            for (; o !== s;) o = o.parentNode, s = s.parentNode;
            return o
          },
          isElementAtBeginningOfBlock: function (e) {
            for (var t, n; !r.isBlockContainer(e) && !r.isMediumEditorElement(e);) {
              for (n = e; n = n.previousSibling;)
                if (t = 3 === n.nodeType ? n.nodeValue : n.textContent, t.length > 0) return !1;
              e = e.parentNode
            }
            return !0
          },
          isMediumEditorElement: function (e) {
            return e && e.getAttribute && !!e.getAttribute("data-medium-editor-element")
          },
          getContainerEditorElement: function (e) {
            return r.traverseUp(e, function (e) {
              return r.isMediumEditorElement(e)
            })
          },
          isBlockContainer: function (e) {
            return e && 3 !== e.nodeType && r.blockContainerElementNames.indexOf(e.nodeName.toLowerCase()) !== -1
          },
          getClosestBlockContainer: function (e) {
            return r.traverseUp(e, function (e) {
              return r.isBlockContainer(e) || r.isMediumEditorElement(e)
            })
          },
          getTopBlockContainer: function (e) {
            var t = !!r.isBlockContainer(e) && e;
            return r.traverseUp(e, function (e) {
              return r.isBlockContainer(e) && (t = e), !(t || !r.isMediumEditorElement(e)) && (t = e, !0)
            }), t
          },
          getFirstSelectableLeafNode: function (e) {
            for (; e && e.firstChild;) e = e.firstChild;
            if (e = r.traverseUp(e, function (e) {
                return r.emptyElementNames.indexOf(e.nodeName.toLowerCase()) === -1
              }), "table" === e.nodeName.toLowerCase()) {
              var t = e.querySelector("th, td");
              t && (e = t)
            }
            return e
          },
          getFirstTextNode: function (e) {
            return r.warn("getFirstTextNode is deprecated and will be removed in version 6.0.0"), r._getFirstTextNode(e)
          },
          _getFirstTextNode: function (e) {
            if (3 === e.nodeType) return e;
            for (var t = 0; t < e.childNodes.length; t++) {
              var n = r._getFirstTextNode(e.childNodes[t]);
              if (null !== n) return n
            }
            return null
          },
          ensureUrlHasProtocol: function (e) {
            return e.indexOf("://") === -1 ? "http://" + e : e
          },
          warn: function () {
            void 0 !== t.console && "function" == typeof t.console.warn && t.console.warn.apply(t.console, arguments)
          },
          deprecated: function (e, t, n) {
            var i = e + " is deprecated, please use " + t + " instead.";
            n && (i += " Will be removed in " + n), r.warn(i)
          },
          deprecatedMethod: function (e, t, n, i) {
            r.deprecated(e, t, i), "function" == typeof this[t] && this[t].apply(this, n)
          },
          cleanupAttrs: function (e, t) {
            t.forEach(function (t) {
              e.removeAttribute(t)
            })
          },
          cleanupTags: function (e, t) {
            t.forEach(function (t) {
              e.nodeName.toLowerCase() === t && e.parentNode.removeChild(e)
            })
          },
          getClosestTag: function (e, t) {
            return r.traverseUp(e, function (e) {
              return e.nodeName.toLowerCase() === t.toLowerCase()
            })
          },
          unwrap: function (e, t) {
            for (var n = t.createDocumentFragment(), i = Array.prototype.slice.call(e.childNodes), o = 0; o < i.length; o++) n.appendChild(i[o]);
            n.childNodes.length ? e.parentNode.replaceChild(n, e) : e.parentNode.removeChild(e)
          }
        };
        e.util = r
      }(window),
      function () {
        var t = function (t) {
          e.util.extend(this, t)
        };
        t.extend = function (t) {
          var n, i = this;
          n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return i.apply(this, arguments)
          }, e.util.extend(n, i);
          var o = function () {
            this.constructor = n
          };
          return o.prototype = i.prototype, n.prototype = new o, t && e.util.extend(n.prototype, t), n
        }, t.prototype = {
          init: function () {},
          base: void 0,
          name: void 0,
          checkState: void 0,
          destroy: void 0,
          queryCommandState: void 0,
          isActive: void 0,
          isAlreadyApplied: void 0,
          setActive: void 0,
          setInactive: void 0,
          window: void 0,
          document: void 0,
          getEditorElements: function () {
            return this.base.elements
          },
          getEditorId: function () {
            return this.base.id
          },
          getEditorOption: function (e) {
            return this.base.options[e]
          }
        }, ["execAction", "on", "off", "subscribe", "trigger"].forEach(function (e) {
          t.prototype[e] = function () {
            return this.base[e].apply(this.base, arguments)
          }
        }), e.Extension = t
      }(),
      function () {
        function t(t) {
          return e.util.isBlockContainer(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
        var n = {
          findMatchingSelectionParent: function (t, n) {
            var i, o, s = n.getSelection();
            return 0 !== s.rangeCount && (i = s.getRangeAt(0), o = i.commonAncestorContainer, e.util.traverseUp(o, t))
          },
          getSelectionElement: function (t) {
            return this.findMatchingSelectionParent(function (t) {
              return e.util.isMediumEditorElement(t)
            }, t)
          },
          exportSelection: function (e, t) {
            if (!e) return null;
            var n = null,
              i = t.getSelection();
            if (i.rangeCount > 0) {
              var o, s = i.getRangeAt(0),
                r = s.cloneRange();
              r.selectNodeContents(e), r.setEnd(s.startContainer, s.startOffset), o = r.toString().length, n = {
                start: o,
                end: o + s.toString().length
              }, this.doesRangeStartWithImages(s, t) && (n.startsWithImage = !0);
              var a = this.getTrailingImageCount(e, n, s.endContainer, s.endOffset);
              if (a && (n.trailingImageCount = a), 0 !== o) {
                var l = this.getIndexRelativeToAdjacentEmptyBlocks(t, e, s.startContainer, s.startOffset);
                l !== -1 && (n.emptyBlocksIndex = l)
              }
            }
            return n
          },
          importSelection: function (e, t, n, i) {
            if (e && t) {
              var o = n.createRange();
              o.setStart(t, 0), o.collapse(!0);
              var s, r = t,
                a = [],
                l = 0,
                c = !1,
                u = !1,
                d = 0,
                h = !1,
                m = !1,
                f = null;
              for ((i || e.startsWithImage || "undefined" != typeof e.emptyBlocksIndex) && (m = !0); !h && r;)
                if (r.nodeType > 3) r = a.pop();
                else {
                  if (3 !== r.nodeType || u) {
                    if (e.trailingImageCount && u && ("img" === r.nodeName.toLowerCase() && d++, d === e.trailingImageCount)) {
                      for (var p = 0; r.parentNode.childNodes[p] !== r;) p++;
                      o.setEnd(r.parentNode, p + 1), h = !0
                    }
                    if (!h && 1 === r.nodeType)
                      for (var g = r.childNodes.length - 1; g >= 0;) a.push(r.childNodes[g]), g -= 1
                  } else s = l + r.length, !c && e.start >= l && e.start <= s && (m || e.start < s ? (o.setStart(r, e.start - l), c = !0) : f = r), c && e.end >= l && e.end <= s && (e.trailingImageCount ? u = !0 : (o.setEnd(r, e.end - l), h = !0)), l = s;
                  h || (r = a.pop())
                }!c && f && (o.setStart(f, f.length), o.setEnd(f, f.length)), "undefined" != typeof e.emptyBlocksIndex && (o = this.importSelectionMoveCursorPastBlocks(n, t, e.emptyBlocksIndex, o)), i && (o = this.importSelectionMoveCursorPastAnchor(e, o));
              var b = n.getSelection();
              b.removeAllRanges(), b.addRange(o)
            }
          },
          importSelectionMoveCursorPastAnchor: function (t, n) {
            var i = function (e) {
              return "a" === e.nodeName.toLowerCase()
            };
            if (t.start === t.end && 3 === n.startContainer.nodeType && n.startOffset === n.startContainer.nodeValue.length && e.util.traverseUp(n.startContainer, i)) {
              for (var o = n.startContainer, s = n.startContainer.parentNode; null !== s && "a" !== s.nodeName.toLowerCase();) s.childNodes[s.childNodes.length - 1] !== o ? s = null : (o = s, s = s.parentNode);
              if (null !== s && "a" === s.nodeName.toLowerCase()) {
                for (var r = null, a = 0; null === r && a < s.parentNode.childNodes.length; a++) s.parentNode.childNodes[a] === s && (r = a);
                n.setStart(s.parentNode, r + 1), n.collapse(!0)
              }
            }
            return n
          },
          importSelectionMoveCursorPastBlocks: function (n, i, o, s) {
            var r, a, l = n.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, t, !1),
              c = s.startContainer,
              u = 0;
            for (o = o || 1, r = 3 === c.nodeType && e.util.isBlockContainer(c.previousSibling) ? c.previousSibling : e.util.getClosestBlockContainer(c); l.nextNode();)
              if (a) {
                if (a = l.currentNode, u++, u === o) break;
                if (a.textContent.length > 0) break
              } else r === l.currentNode && (a = l.currentNode);
            return a || (a = r), s.setStart(e.util.getFirstSelectableLeafNode(a), 0), s
          },
          getIndexRelativeToAdjacentEmptyBlocks: function (n, i, o, s) {
            if (o.textContent.length > 0 && s > 0) return -1;
            var r = o;
            if (3 !== r.nodeType && (r = o.childNodes[s]), r) {
              if (!e.util.isElementAtBeginningOfBlock(r)) return -1;
              var a = e.util.findPreviousSibling(r);
              if (!a) return -1;
              if (a.nodeValue) return -1
            }
            for (var l = e.util.getClosestBlockContainer(o), c = n.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, t, !1), u = 0; c.nextNode();) {
              var d = "" === c.currentNode.textContent;
              if ((d || u > 0) && (u += 1), c.currentNode === l) return u;
              d || (u = 0)
            }
            return u
          },
          doesRangeStartWithImages: function (e, t) {
            if (0 !== e.startOffset || 1 !== e.startContainer.nodeType) return !1;
            if ("img" === e.startContainer.nodeName.toLowerCase()) return !0;
            var n = e.startContainer.querySelector("img");
            if (!n) return !1;
            for (var i = t.createTreeWalker(e.startContainer, NodeFilter.SHOW_ALL, null, !1); i.nextNode();) {
              var o = i.currentNode;
              if (o === n) break;
              if (o.nodeValue) return !1
            }
            return !0
          },
          getTrailingImageCount: function (e, t, n, i) {
            if (0 === i || 1 !== n.nodeType) return 0;
            if ("img" !== n.nodeName.toLowerCase() && !n.querySelector("img")) return 0;
            for (var o = n.childNodes[i - 1]; o.hasChildNodes();) o = o.lastChild;
            for (var s, r = e, a = [], l = 0, c = !1, u = !1, d = !1, h = 0; !d && r;)
              if (r.nodeType > 3) r = a.pop();
              else {
                if (3 !== r.nodeType || u) {
                  if ("img" === r.nodeName.toLowerCase() && h++, r === o) d = !0;
                  else if (1 === r.nodeType)
                    for (var m = r.childNodes.length - 1; m >= 0;) a.push(r.childNodes[m]), m -= 1
                } else h = 0, s = l + r.length, !c && t.start >= l && t.start <= s && (c = !0), c && t.end >= l && t.end <= s && (u = !0), l = s;
                d || (r = a.pop())
              }
            return h
          },
          selectionContainsContent: function (e) {
            var t = e.getSelection();
            if (!t || t.isCollapsed || !t.rangeCount) return !1;
            if ("" !== t.toString().trim()) return !0;
            var n = this.getSelectedParentElement(t.getRangeAt(0));
            return !(!n || !("img" === n.nodeName.toLowerCase() || 1 === n.nodeType && n.querySelector("img")))
          },
          selectionInContentEditableFalse: function (e) {
            var t, n = this.findMatchingSelectionParent(function (e) {
              var n = e && e.getAttribute("contenteditable");
              return "true" === n && (t = !0), "#text" !== e.nodeName && "false" === n
            }, e);
            return !t && n
          },
          getSelectionHtml: function (e) {
            var t, n, i, o = "",
              s = e.getSelection();
            if (s.rangeCount) {
              for (i = e.createElement("div"), t = 0, n = s.rangeCount; t < n; t += 1) i.appendChild(s.getRangeAt(t).cloneContents());
              o = i.innerHTML
            }
            return o
          },
          getCaretOffsets: function (e, t) {
            var n, i;
            return t || (t = window.getSelection().getRangeAt(0)), n = t.cloneRange(), i = t.cloneRange(), n.selectNodeContents(e), n.setEnd(t.endContainer, t.endOffset), i.selectNodeContents(e), i.setStart(t.endContainer, t.endOffset), {
              left: n.toString().length,
              right: i.toString().length
            }
          },
          rangeSelectsSingleNode: function (e) {
            var t = e.startContainer;
            return t === e.endContainer && t.hasChildNodes() && e.endOffset === e.startOffset + 1
          },
          getSelectedParentElement: function (e) {
            return e ? this.rangeSelectsSingleNode(e) && 3 !== e.startContainer.childNodes[e.startOffset].nodeType ? e.startContainer.childNodes[e.startOffset] : 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer : null
          },
          getSelectedElements: function (e) {
            var t, n, i, o = e.getSelection();
            if (!o.rangeCount || o.isCollapsed || !o.getRangeAt(0).commonAncestorContainer) return [];
            if (t = o.getRangeAt(0), 3 === t.commonAncestorContainer.nodeType) {
              for (n = [], i = t.commonAncestorContainer; i.parentNode && 1 === i.parentNode.childNodes.length;) n.push(i.parentNode), i = i.parentNode;
              return n
            }
            return [].filter.call(t.commonAncestorContainer.getElementsByTagName("*"), function (e) {
              return "function" != typeof o.containsNode || o.containsNode(e, !0)
            })
          },
          selectNode: function (e, t) {
            var n = t.createRange(),
              i = t.getSelection();
            n.selectNodeContents(e), i.removeAllRanges(), i.addRange(n)
          },
          select: function (e, t, n, i, o) {
            e.getSelection().removeAllRanges();
            var s = e.createRange();
            return s.setStart(t, n), i ? s.setEnd(i, o) : s.collapse(!0), e.getSelection().addRange(s), s
          },
          clearSelection: function (e, t) {
            t ? e.getSelection().collapseToStart() : e.getSelection().collapseToEnd()
          },
          moveCursor: function (e, t, n) {
            this.select(e, t, n)
          },
          getSelectionRange: function (e) {
            var t = e.getSelection();
            return 0 === t.rangeCount ? null : t.getRangeAt(0)
          },
          getSelectionStart: function (e) {
            var t = e.getSelection().anchorNode,
              n = t && 3 === t.nodeType ? t.parentNode : t;
            return n
          }
        };
        e.selection = n
      }(),
      function () {
        var t = function (e) {
          this.base = e, this.options = this.base.options, this.events = [], this.disabledEvents = {}, this.customEvents = {}, this.listeners = {}
        };
        t.prototype = {
          InputEventOnContenteditableSupported: !e.util.isIE && !e.util.isEdge,
          attachDOMEvent: function (t, n, i, o) {
            t = e.util.isElement(t) || [window, document].indexOf(t) > -1 ? [t] : t, Array.prototype.forEach.call(t, function (e) {
              e.addEventListener(n, i, o), this.events.push([e, n, i, o])
            }.bind(this))
          },
          detachDOMEvent: function (t, n, i, o) {
            var s, r;
            t = e.util.isElement(t) || [window, document].indexOf(t) > -1 ? [t] : t, Array.prototype.forEach.call(t, function (e) {
              s = this.indexOfListener(e, n, i, o), s !== -1 && (r = this.events.splice(s, 1)[0], r[0].removeEventListener(r[1], r[2], r[3]))
            }.bind(this))
          },
          indexOfListener: function (e, t, n, i) {
            var o, s, r;
            for (o = 0, s = this.events.length; o < s; o += 1)
              if (r = this.events[o], r[0] === e && r[1] === t && r[2] === n && r[3] === i) return o;
            return -1
          },
          detachAllDOMEvents: function () {
            for (var e = this.events.pop(); e;) e[0].removeEventListener(e[1], e[2], e[3]), e = this.events.pop()
          },
          enableCustomEvent: function (e) {
            void 0 !== this.disabledEvents[e] && delete this.disabledEvents[e]
          },
          disableCustomEvent: function (e) {
            this.disabledEvents[e] = !0
          },
          attachCustomEvent: function (e, t) {
            this.setupListener(e), this.customEvents[e] || (this.customEvents[e] = []), this.customEvents[e].push(t)
          },
          detachCustomEvent: function (e, t) {
            var n = this.indexOfCustomListener(e, t);
            n !== -1 && this.customEvents[e].splice(n, 1)
          },
          indexOfCustomListener: function (e, t) {
            return this.customEvents[e] && this.customEvents[e].length ? this.customEvents[e].indexOf(t) : -1
          },
          detachAllCustomEvents: function () {
            this.customEvents = {}
          },
          triggerCustomEvent: function (e, t, n) {
            this.customEvents[e] && !this.disabledEvents[e] && this.customEvents[e].forEach(function (e) {
              e(t, n)
            })
          },
          destroy: function () {
            this.detachAllDOMEvents(), this.detachAllCustomEvents(), this.detachExecCommand(), this.base.elements && this.base.elements.forEach(function (e) {
              e.removeAttribute("data-medium-focused")
            })
          },
          attachToExecCommand: function () {
            this.execCommandListener || (this.execCommandListener = function (e) {
              this.handleDocumentExecCommand(e)
            }.bind(this), this.wrapExecCommand(), this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener))
          },
          detachExecCommand: function () {
            var e = this.options.ownerDocument;
            if (this.execCommandListener && e.execCommand.listeners) {
              var t = e.execCommand.listeners.indexOf(this.execCommandListener);
              t !== -1 && e.execCommand.listeners.splice(t, 1), e.execCommand.listeners.length || this.unwrapExecCommand()
            }
          },
          wrapExecCommand: function () {
            var e = this.options.ownerDocument;
            if (!e.execCommand.listeners) {
              var t = function (t, n) {
                  e.execCommand.listeners && e.execCommand.listeners.forEach(function (e) {
                    e({
                      command: t[0],
                      value: t[2],
                      args: t,
                      result: n
                    })
                  })
                },
                n = function () {
                  var n = e.execCommand.orig.apply(this, arguments);
                  if (!e.execCommand.listeners) return n;
                  var i = Array.prototype.slice.call(arguments);
                  return t(i, n), n
                };
              n.orig = e.execCommand, n.listeners = [], n.callListeners = t, e.execCommand = n
            }
          },
          unwrapExecCommand: function () {
            var e = this.options.ownerDocument;
            e.execCommand.orig && (e.execCommand = e.execCommand.orig)
          },
          setupListener: function (e) {
            if (!this.listeners[e]) {
              switch (e) {
                case "externalInteraction":
                  this.attachDOMEvent(this.options.ownerDocument.body, "mousedown", this.handleBodyMousedown.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, "click", this.handleBodyClick.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, "focus", this.handleBodyFocus.bind(this), !0);
                  break;
                case "blur":
                  this.setupListener("externalInteraction");
                  break;
                case "focus":
                  this.setupListener("externalInteraction");
                  break;
                case "editableInput":
                  this.contentCache = [], this.base.elements.forEach(function (e) {
                    this.contentCache[e.getAttribute("medium-editor-index")] = e.innerHTML, this.InputEventOnContenteditableSupported && this.attachDOMEvent(e, "input", this.handleInput.bind(this))
                  }.bind(this)), this.InputEventOnContenteditableSupported || (this.setupListener("editableKeypress"), this.keypressUpdateInput = !0, this.attachDOMEvent(document, "selectionchange", this.handleDocumentSelectionChange.bind(this)), this.attachToExecCommand());
                  break;
                case "editableClick":
                  this.attachToEachElement("click", this.handleClick);
                  break;
                case "editableBlur":
                  this.attachToEachElement("blur", this.handleBlur);
                  break;
                case "editableKeypress":
                  this.attachToEachElement("keypress", this.handleKeypress);
                  break;
                case "editableKeyup":
                  this.attachToEachElement("keyup", this.handleKeyup);
                  break;
                case "editableKeydown":
                  this.attachToEachElement("keydown", this.handleKeydown);
                  break;
                case "editableKeydownSpace":
                  this.setupListener("editableKeydown");
                  break;
                case "editableKeydownEnter":
                  this.setupListener("editableKeydown");
                  break;
                case "editableKeydownTab":
                  this.setupListener("editableKeydown");
                  break;
                case "editableKeydownDelete":
                  this.setupListener("editableKeydown");
                  break;
                case "editableMouseover":
                  this.attachToEachElement("mouseover", this.handleMouseover);
                  break;
                case "editableDrag":
                  this.attachToEachElement("dragover", this.handleDragging), this.attachToEachElement("dragleave", this.handleDragging);
                  break;
                case "editableDrop":
                  this.attachToEachElement("drop", this.handleDrop);
                  break;
                case "editablePaste":
                  this.attachToEachElement("paste", this.handlePaste)
              }
              this.listeners[e] = !0
            }
          },
          attachToEachElement: function (e, t) {
            this.base.elements.forEach(function (n) {
              this.attachDOMEvent(n, e, t.bind(this))
            }, this)
          },
          focusElement: function (e) {
            e.focus(), this.updateFocus(e, {
              target: e,
              type: "focus"
            })
          },
          updateFocus: function (t, n) {
            var i, o = this.base.getExtensionByName("toolbar"),
              s = o ? o.getToolbarElement() : null,
              r = this.base.getExtensionByName("anchor-preview"),
              a = r && r.getPreviewElement ? r.getPreviewElement() : null,
              l = this.base.getFocusedElement();
            l && "click" === n.type && this.lastMousedownTarget && (e.util.isDescendant(l, this.lastMousedownTarget, !0) || e.util.isDescendant(s, this.lastMousedownTarget, !0) || e.util.isDescendant(a, this.lastMousedownTarget, !0)) && (i = l), i || this.base.elements.some(function (n) {
              return !i && e.util.isDescendant(n, t, !0) && (i = n), !!i
            }, this);
            var c = !e.util.isDescendant(l, t, !0) && !e.util.isDescendant(s, t, !0) && !e.util.isDescendant(a, t, !0);
            i !== l && (l && c && (l.removeAttribute("data-medium-focused"), this.triggerCustomEvent("blur", n, l)), i && (i.setAttribute("data-medium-focused", !0), this.triggerCustomEvent("focus", n, i))), c && this.triggerCustomEvent("externalInteraction", n)
          },
          updateInput: function (e, t) {
            if (this.contentCache) {
              var n = e.getAttribute("medium-editor-index"),
                i = e.innerHTML;
              i !== this.contentCache[n] && this.triggerCustomEvent("editableInput", t, e), this.contentCache[n] = i
            }
          },
          handleDocumentSelectionChange: function (t) {
            if (t.currentTarget && t.currentTarget.activeElement) {
              var n, i = t.currentTarget.activeElement;
              this.base.elements.some(function (t) {
                return !!e.util.isDescendant(t, i, !0) && (n = t, !0)
              }, this), n && this.updateInput(n, {
                target: i,
                currentTarget: n
              })
            }
          },
          handleDocumentExecCommand: function () {
            var e = this.base.getFocusedElement();
            e && this.updateInput(e, {
              target: e,
              currentTarget: e
            })
          },
          handleBodyClick: function (e) {
            this.updateFocus(e.target, e)
          },
          handleBodyFocus: function (e) {
            this.updateFocus(e.target, e)
          },
          handleBodyMousedown: function (e) {
            this.lastMousedownTarget = e.target
          },
          handleInput: function (e) {
            this.updateInput(e.currentTarget, e)
          },
          handleClick: function (e) {
            this.triggerCustomEvent("editableClick", e, e.currentTarget)
          },
          handleBlur: function (e) {
            this.triggerCustomEvent("editableBlur", e, e.currentTarget)
          },
          handleKeypress: function (e) {
            if (this.triggerCustomEvent("editableKeypress", e, e.currentTarget), this.keypressUpdateInput) {
              var t = {
                target: e.target,
                currentTarget: e.currentTarget
              };
              setTimeout(function () {
                this.updateInput(t.currentTarget, t)
              }.bind(this), 0)
            }
          },
          handleKeyup: function (e) {
            this.triggerCustomEvent("editableKeyup", e, e.currentTarget)
          },
          handleMouseover: function (e) {
            this.triggerCustomEvent("editableMouseover", e, e.currentTarget)
          },
          handleDragging: function (e) {
            this.triggerCustomEvent("editableDrag", e, e.currentTarget)
          },
          handleDrop: function (e) {
            this.triggerCustomEvent("editableDrop", e, e.currentTarget)
          },
          handlePaste: function (e) {
            this.triggerCustomEvent("editablePaste", e, e.currentTarget)
          },
          handleKeydown: function (t) {
            return this.triggerCustomEvent("editableKeydown", t, t.currentTarget), e.util.isKey(t, e.util.keyCode.SPACE) ? this.triggerCustomEvent("editableKeydownSpace", t, t.currentTarget) : e.util.isKey(t, e.util.keyCode.ENTER) || t.ctrlKey && e.util.isKey(t, e.util.keyCode.M) ? this.triggerCustomEvent("editableKeydownEnter", t, t.currentTarget) : e.util.isKey(t, e.util.keyCode.TAB) ? this.triggerCustomEvent("editableKeydownTab", t, t.currentTarget) : e.util.isKey(t, [e.util.keyCode.DELETE, e.util.keyCode.BACKSPACE]) ? this.triggerCustomEvent("editableKeydownDelete", t, t.currentTarget) : void 0;
          }
        }, e.Events = t
      }(),
      function () {
        var t = e.Extension.extend({
          action: void 0,
          aria: void 0,
          tagNames: void 0,
          style: void 0,
          useQueryState: void 0,
          contentDefault: void 0,
          contentFA: void 0,
          classList: void 0,
          attrs: void 0,
          constructor: function (n) {
            t.isBuiltInButton(n) ? e.Extension.call(this, this.defaults[n]) : e.Extension.call(this, n)
          },
          init: function () {
            e.Extension.prototype.init.apply(this, arguments), this.button = this.createButton(), this.on(this.button, "click", this.handleClick.bind(this))
          },
          getButton: function () {
            return this.button
          },
          getAction: function () {
            return "function" == typeof this.action ? this.action(this.base.options) : this.action
          },
          getAria: function () {
            return "function" == typeof this.aria ? this.aria(this.base.options) : this.aria
          },
          getTagNames: function () {
            return "function" == typeof this.tagNames ? this.tagNames(this.base.options) : this.tagNames
          },
          createButton: function () {
            var e = this.document.createElement("button"),
              t = this.contentDefault,
              n = this.getAria(),
              i = this.getEditorOption("buttonLabels");
            return e.classList.add("medium-editor-action"), e.classList.add("medium-editor-action-" + this.name), this.classList && this.classList.forEach(function (t) {
              e.classList.add(t)
            }), e.setAttribute("data-action", this.getAction()), n && (e.setAttribute("title", n), e.setAttribute("aria-label", n)), this.attrs && Object.keys(this.attrs).forEach(function (t) {
              e.setAttribute(t, this.attrs[t])
            }, this), "fontawesome" === i && this.contentFA && (t = this.contentFA), e.innerHTML = t, e
          },
          handleClick: function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = this.getAction();
            t && this.execAction(t)
          },
          isActive: function () {
            return this.button.classList.contains(this.getEditorOption("activeButtonClass"))
          },
          setInactive: function () {
            this.button.classList.remove(this.getEditorOption("activeButtonClass")), delete this.knownState
          },
          setActive: function () {
            this.button.classList.add(this.getEditorOption("activeButtonClass")), delete this.knownState
          },
          queryCommandState: function () {
            var e = null;
            return this.useQueryState && (e = this.base.queryCommandState(this.getAction())), e
          },
          isAlreadyApplied: function (e) {
            var t, n, i = !1,
              o = this.getTagNames();
            return this.knownState === !1 || this.knownState === !0 ? this.knownState : (o && o.length > 0 && (i = o.indexOf(e.nodeName.toLowerCase()) !== -1), !i && this.style && (t = this.style.value.split("|"), n = this.window.getComputedStyle(e, null).getPropertyValue(this.style.prop), t.forEach(function (e) {
              this.knownState || (i = n.indexOf(e) !== -1, (i || "text-decoration" !== this.style.prop) && (this.knownState = i))
            }, this)), i)
          }
        });
        t.isBuiltInButton = function (t) {
          return "string" == typeof t && e.extensions.button.prototype.defaults.hasOwnProperty(t)
        }, e.extensions.button = t
      }(),
      function () {
        e.extensions.button.prototype.defaults = {
          bold: {
            name: "bold",
            action: "bold",
            aria: "bold",
            tagNames: ["b", "strong"],
            style: {
              prop: "font-weight",
              value: "700|bold"
            },
            useQueryState: !0,
            contentDefault: "<b>B</b>",
            contentFA: '<i class="fa fa-bold"></i>'
          },
          italic: {
            name: "italic",
            action: "italic",
            aria: "italic",
            tagNames: ["i", "em"],
            style: {
              prop: "font-style",
              value: "italic"
            },
            useQueryState: !0,
            contentDefault: "<b><i>I</i></b>",
            contentFA: '<i class="fa fa-italic"></i>'
          },
          underline: {
            name: "underline",
            action: "underline",
            aria: "underline",
            tagNames: ["u"],
            style: {
              prop: "text-decoration",
              value: "underline"
            },
            useQueryState: !0,
            contentDefault: "<b><u>U</u></b>",
            contentFA: '<i class="fa fa-underline"></i>'
          },
          strikethrough: {
            name: "strikethrough",
            action: "strikethrough",
            aria: "strike through",
            tagNames: ["strike"],
            style: {
              prop: "text-decoration",
              value: "line-through"
            },
            useQueryState: !0,
            contentDefault: "<s>A</s>",
            contentFA: '<i class="fa fa-strikethrough"></i>'
          },
          superscript: {
            name: "superscript",
            action: "superscript",
            aria: "superscript",
            tagNames: ["sup"],
            contentDefault: "<b>x<sup>1</sup></b>",
            contentFA: '<i class="fa fa-superscript"></i>'
          },
          subscript: {
            name: "subscript",
            action: "subscript",
            aria: "subscript",
            tagNames: ["sub"],
            contentDefault: "<b>x<sub>1</sub></b>",
            contentFA: '<i class="fa fa-subscript"></i>'
          },
          image: {
            name: "image",
            action: "image",
            aria: "image",
            tagNames: ["img"],
            contentDefault: "<b>image</b>",
            contentFA: '<i class="fa fa-picture-o"></i>'
          },
          orderedlist: {
            name: "orderedlist",
            action: "insertorderedlist",
            aria: "ordered list",
            tagNames: ["ol"],
            useQueryState: !0,
            contentDefault: "<b>1.</b>",
            contentFA: '<i class="fa fa-list-ol"></i>'
          },
          unorderedlist: {
            name: "unorderedlist",
            action: "insertunorderedlist",
            aria: "unordered list",
            tagNames: ["ul"],
            useQueryState: !0,
            contentDefault: "<b>&bull;</b>",
            contentFA: '<i class="fa fa-list-ul"></i>'
          },
          indent: {
            name: "indent",
            action: "indent",
            aria: "indent",
            tagNames: [],
            contentDefault: "<b>&rarr;</b>",
            contentFA: '<i class="fa fa-indent"></i>'
          },
          outdent: {
            name: "outdent",
            action: "outdent",
            aria: "outdent",
            tagNames: [],
            contentDefault: "<b>&larr;</b>",
            contentFA: '<i class="fa fa-outdent"></i>'
          },
          justifyCenter: {
            name: "justifyCenter",
            action: "justifyCenter",
            aria: "center justify",
            tagNames: [],
            style: {
              prop: "text-align",
              value: "center"
            },
            contentDefault: "<b>C</b>",
            contentFA: '<i class="fa fa-align-center"></i>'
          },
          justifyFull: {
            name: "justifyFull",
            action: "justifyFull",
            aria: "full justify",
            tagNames: [],
            style: {
              prop: "text-align",
              value: "justify"
            },
            contentDefault: "<b>J</b>",
            contentFA: '<i class="fa fa-align-justify"></i>'
          },
          justifyLeft: {
            name: "justifyLeft",
            action: "justifyLeft",
            aria: "left justify",
            tagNames: [],
            style: {
              prop: "text-align",
              value: "left"
            },
            contentDefault: "<b>L</b>",
            contentFA: '<i class="fa fa-align-left"></i>'
          },
          justifyRight: {
            name: "justifyRight",
            action: "justifyRight",
            aria: "right justify",
            tagNames: [],
            style: {
              prop: "text-align",
              value: "right"
            },
            contentDefault: "<b>R</b>",
            contentFA: '<i class="fa fa-align-right"></i>'
          },
          removeFormat: {
            name: "removeFormat",
            aria: "remove formatting",
            action: "removeFormat",
            contentDefault: "<b>X</b>",
            contentFA: '<i class="fa fa-eraser"></i>'
          },
          quote: {
            name: "quote",
            action: "append-blockquote",
            aria: "blockquote",
            tagNames: ["blockquote"],
            contentDefault: "<b>&ldquo;</b>",
            contentFA: '<i class="fa fa-quote-right"></i>'
          },
          pre: {
            name: "pre",
            action: "append-pre",
            aria: "preformatted text",
            tagNames: ["pre"],
            contentDefault: "<b>0101</b>",
            contentFA: '<i class="fa fa-code fa-lg"></i>'
          },
          h1: {
            name: "h1",
            action: "append-h1",
            aria: "header type one",
            tagNames: ["h1"],
            contentDefault: "<b>H1</b>",
            contentFA: '<i class="fa fa-header"><sup>1</sup>'
          },
          h2: {
            name: "h2",
            action: "append-h2",
            aria: "header type two",
            tagNames: ["h2"],
            contentDefault: "<b>H2</b>",
            contentFA: '<i class="fa fa-header"><sup>2</sup>'
          },
          h3: {
            name: "h3",
            action: "append-h3",
            aria: "header type three",
            tagNames: ["h3"],
            contentDefault: "<b>H3</b>",
            contentFA: '<i class="fa fa-header"><sup>3</sup>'
          },
          h4: {
            name: "h4",
            action: "append-h4",
            aria: "header type four",
            tagNames: ["h4"],
            contentDefault: "<b>H4</b>",
            contentFA: '<i class="fa fa-header"><sup>4</sup>'
          },
          h5: {
            name: "h5",
            action: "append-h5",
            aria: "header type five",
            tagNames: ["h5"],
            contentDefault: "<b>H5</b>",
            contentFA: '<i class="fa fa-header"><sup>5</sup>'
          },
          h6: {
            name: "h6",
            action: "append-h6",
            aria: "header type six",
            tagNames: ["h6"],
            contentDefault: "<b>H6</b>",
            contentFA: '<i class="fa fa-header"><sup>6</sup>'
          }
        }
      }(),
      function () {
        var t = e.extensions.button.extend({
          init: function () {
            e.extensions.button.prototype.init.apply(this, arguments)
          },
          formSaveLabel: "&#10003;",
          formCloseLabel: "&times;",
          activeClass: "medium-editor-toolbar-form-active",
          hasForm: !0,
          getForm: function () {},
          isDisplayed: function () {
            return !!this.hasForm && this.getForm().classList.contains(this.activeClass)
          },
          showForm: function () {
            this.hasForm && this.getForm().classList.add(this.activeClass)
          },
          hideForm: function () {
            this.hasForm && this.getForm().classList.remove(this.activeClass)
          },
          showToolbarDefaultActions: function () {
            var e = this.base.getExtensionByName("toolbar");
            e && e.showToolbarDefaultActions()
          },
          hideToolbarDefaultActions: function () {
            var e = this.base.getExtensionByName("toolbar");
            e && e.hideToolbarDefaultActions()
          },
          setToolbarPosition: function () {
            var e = this.base.getExtensionByName("toolbar");
            e && e.setToolbarPosition()
          }
        });
        e.extensions.form = t
      }(),
      function () {
        var t = e.extensions.form.extend({
          customClassOption: null,
          customClassOptionText: "Button",
          linkValidation: !1,
          placeholderText: "Paste or type a link",
          targetCheckbox: !1,
          targetCheckboxText: "Open in new window",
          name: "anchor",
          action: "createLink",
          aria: "link",
          tagNames: ["a"],
          contentDefault: "<b>#</b>",
          contentFA: '<i class="fa fa-link"></i>',
          init: function () {
            e.extensions.form.prototype.init.apply(this, arguments), this.subscribe("editableKeydown", this.handleKeydown.bind(this))
          },
          handleClick: function (t) {
            t.preventDefault(), t.stopPropagation();
            var n = e.selection.getSelectionRange(this.document);
            return "a" === n.startContainer.nodeName.toLowerCase() || "a" === n.endContainer.nodeName.toLowerCase() || e.util.getClosestTag(e.selection.getSelectedParentElement(n), "a") ? this.execAction("unlink") : (this.isDisplayed() || this.showForm(), !1)
          },
          handleKeydown: function (t) {
            e.util.isKey(t, e.util.keyCode.K) && e.util.isMetaCtrlKey(t) && !t.shiftKey && this.handleClick(t)
          },
          getForm: function () {
            return this.form || (this.form = this.createForm()), this.form
          },
          getTemplate: function () {
            var e = ['<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'];
            return e.push('<a href="#" class="medium-editor-toolbar-save">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : this.formSaveLabel, "</a>"), e.push('<a href="#" class="medium-editor-toolbar-close">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : this.formCloseLabel, "</a>"), this.targetCheckbox && e.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-target">', "<label>", this.targetCheckboxText, "</label>", "</div>"), this.customClassOption && e.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-button">', "<label>", this.customClassOptionText, "</label>", "</div>"), e.join("")
          },
          isDisplayed: function () {
            return e.extensions.form.prototype.isDisplayed.apply(this)
          },
          hideForm: function () {
            e.extensions.form.prototype.hideForm.apply(this), this.getInput().value = ""
          },
          showForm: function (t) {
            var n = this.getInput(),
              i = this.getAnchorTargetCheckbox(),
              o = this.getAnchorButtonCheckbox();
            if (t = t || {
                url: ""
              }, "string" == typeof t && (t = {
                url: t
              }), this.base.saveSelection(), this.hideToolbarDefaultActions(), e.extensions.form.prototype.showForm.apply(this), this.setToolbarPosition(), n.value = t.url, n.focus(), i && (i.checked = "_blank" === t.target), o) {
              var s = t.buttonClass ? t.buttonClass.split(" ") : [];
              o.checked = s.indexOf(this.customClassOption) !== -1
            }
          },
          destroy: function () {
            return !!this.form && (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form)
          },
          getFormOpts: function () {
            var e = this.getAnchorTargetCheckbox(),
              t = this.getAnchorButtonCheckbox(),
              n = {
                url: this.getInput().value.trim()
              };
            return this.linkValidation && (n.url = this.checkLinkFormat(n.url)), n.target = "_self", e && e.checked && (n.target = "_blank"), t && t.checked && (n.buttonClass = this.customClassOption), n
          },
          doFormSave: function () {
            var e = this.getFormOpts();
            this.completeFormSave(e)
          },
          completeFormSave: function (e) {
            this.base.restoreSelection(), this.execAction(this.action, e), this.base.checkSelection()
          },
          checkLinkFormat: function (e) {
            var t = /^([a-z]+:)?\/\/|^(mailto|tel|maps):/i,
              n = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/;
            return n.test(e) ? "tel:" + e : (t.test(e) ? "" : "http://") + encodeURI(e)
          },
          doFormCancel: function () {
            this.base.restoreSelection(), this.base.checkSelection()
          },
          attachFormEvents: function (e) {
            var t = e.querySelector(".medium-editor-toolbar-close"),
              n = e.querySelector(".medium-editor-toolbar-save"),
              i = e.querySelector(".medium-editor-toolbar-input");
            this.on(e, "click", this.handleFormClick.bind(this)), this.on(i, "keyup", this.handleTextboxKeyup.bind(this)), this.on(t, "click", this.handleCloseClick.bind(this)), this.on(n, "click", this.handleSaveClick.bind(this), !0)
          },
          createForm: function () {
            var e = this.document,
              t = e.createElement("div");
            return t.className = "medium-editor-toolbar-form", t.id = "medium-editor-toolbar-form-anchor-" + this.getEditorId(), t.innerHTML = this.getTemplate(), this.attachFormEvents(t), t
          },
          getInput: function () {
            return this.getForm().querySelector("input.medium-editor-toolbar-input")
          },
          getAnchorTargetCheckbox: function () {
            return this.getForm().querySelector(".medium-editor-toolbar-anchor-target")
          },
          getAnchorButtonCheckbox: function () {
            return this.getForm().querySelector(".medium-editor-toolbar-anchor-button")
          },
          handleTextboxKeyup: function (t) {
            return t.keyCode === e.util.keyCode.ENTER ? (t.preventDefault(), void this.doFormSave()) : void(t.keyCode === e.util.keyCode.ESCAPE && (t.preventDefault(), this.doFormCancel()))
          },
          handleFormClick: function (e) {
            e.stopPropagation()
          },
          handleSaveClick: function (e) {
            e.preventDefault(), this.doFormSave()
          },
          handleCloseClick: function (e) {
            e.preventDefault(), this.doFormCancel()
          }
        });
        e.extensions.anchor = t
      }(),
      function () {
        var t = e.Extension.extend({
          name: "anchor-preview",
          hideDelay: 500,
          previewValueSelector: "a",
          showWhenToolbarIsVisible: !1,
          init: function () {
            this.anchorPreview = this.createPreview(), this.getEditorOption("elementsContainer").appendChild(this.anchorPreview), this.attachToEditables()
          },
          getPreviewElement: function () {
            return this.anchorPreview
          },
          createPreview: function () {
            var e = this.document.createElement("div");
            return e.id = "medium-editor-anchor-preview-" + this.getEditorId(), e.className = "medium-editor-anchor-preview", e.innerHTML = this.getTemplate(), this.on(e, "click", this.handleClick.bind(this)), e
          },
          getTemplate: function () {
            return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>'
          },
          destroy: function () {
            this.anchorPreview && (this.anchorPreview.parentNode && this.anchorPreview.parentNode.removeChild(this.anchorPreview), delete this.anchorPreview)
          },
          hidePreview: function () {
            this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"), this.activeAnchor = null
          },
          showPreview: function (e) {
            return !(!this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") && !e.getAttribute("data-disable-preview")) || (this.previewValueSelector && (this.anchorPreview.querySelector(this.previewValueSelector).textContent = e.attributes.href.value, this.anchorPreview.querySelector(this.previewValueSelector).href = e.attributes.href.value), this.anchorPreview.classList.add("medium-toolbar-arrow-over"), this.anchorPreview.classList.remove("medium-toolbar-arrow-under"), this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || this.anchorPreview.classList.add("medium-editor-anchor-preview-active"), this.activeAnchor = e, this.positionPreview(), this.attachPreviewHandlers(), this)
          },
          positionPreview: function (e) {
            e = e || this.activeAnchor;
            var t, n, i = this.anchorPreview.offsetHeight,
              o = e.getBoundingClientRect(),
              s = (o.left + o.right) / 2,
              r = this.diffLeft,
              a = this.diffTop;
            t = this.anchorPreview.offsetWidth / 2;
            var l = this.base.getExtensionByName("toolbar");
            l && (r = l.diffLeft, a = l.diffTop), n = r - t, this.anchorPreview.style.top = Math.round(i + o.bottom - a + this.window.pageYOffset - this.anchorPreview.offsetHeight) + "px", this.anchorPreview.style.right = "initial", s < t ? (this.anchorPreview.style.left = n + t + "px", this.anchorPreview.style.right = "initial") : this.window.innerWidth - s < t ? (this.anchorPreview.style.left = "auto", this.anchorPreview.style.right = 0) : (this.anchorPreview.style.left = n + s + "px", this.anchorPreview.style.right = "initial")
          },
          attachToEditables: function () {
            this.subscribe("editableMouseover", this.handleEditableMouseover.bind(this)), this.subscribe("positionedToolbar", this.handlePositionedToolbar.bind(this))
          },
          handlePositionedToolbar: function () {
            this.showWhenToolbarIsVisible || this.hidePreview()
          },
          handleClick: function (e) {
            var t = this.base.getExtensionByName("anchor"),
              n = this.activeAnchor;
            t && n && (e.preventDefault(), this.base.selectElement(this.activeAnchor), this.base.delay(function () {
              if (n) {
                var e = {
                  url: n.attributes.href.value,
                  target: n.getAttribute("target"),
                  buttonClass: n.getAttribute("class")
                };
                t.showForm(e), n = null
              }
            }.bind(this))), this.hidePreview()
          },
          handleAnchorMouseout: function () {
            this.anchorToPreview = null, this.off(this.activeAnchor, "mouseout", this.instanceHandleAnchorMouseout), this.instanceHandleAnchorMouseout = null
          },
          handleEditableMouseover: function (t) {
            var n = e.util.getClosestTag(t.target, "a");
            if (!1 !== n) {
              if (!/href=["']\S+["']/.test(n.outerHTML) || /href=["']#\S+["']/.test(n.outerHTML)) return !0;
              var i = this.base.getExtensionByName("toolbar");
              if (!this.showWhenToolbarIsVisible && i && i.isDisplayed && i.isDisplayed()) return !0;
              this.activeAnchor && this.activeAnchor !== n && this.detachPreviewHandlers(), this.anchorToPreview = n, this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this), this.on(this.anchorToPreview, "mouseout", this.instanceHandleAnchorMouseout), this.base.delay(function () {
                this.anchorToPreview && this.showPreview(this.anchorToPreview)
              }.bind(this))
            }
          },
          handlePreviewMouseover: function () {
            this.lastOver = (new Date).getTime(), this.hovering = !0
          },
          handlePreviewMouseout: function (e) {
            e.relatedTarget && /anchor-preview/.test(e.relatedTarget.className) || (this.hovering = !1)
          },
          updatePreview: function () {
            if (this.hovering) return !0;
            var e = (new Date).getTime() - this.lastOver;
            e > this.hideDelay && this.detachPreviewHandlers()
          },
          detachPreviewHandlers: function () {
            clearInterval(this.intervalTimer), this.instanceHandlePreviewMouseover && (this.off(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.off(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.activeAnchor && (this.off(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.off(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout))), this.hidePreview(), this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null
          },
          attachPreviewHandlers: function () {
            this.lastOver = (new Date).getTime(), this.hovering = !0, this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this), this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this), this.intervalTimer = setInterval(this.updatePreview.bind(this), 200), this.on(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.on(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.on(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.on(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout)
          }
        });
        e.extensions.anchorPreview = t
      }(),
      function () {
        function t(t) {
          return !e.util.getClosestTag(t, "a")
        }
        var n, i, o, s;
        n = [" ", "\t", "\n", "\r", " ", " ", " ", " ", " ", "\u2028", "\u2029"], i = "com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw", o = "(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](" + i + ")\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?«»“”‘’])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(" + i + "))", s = new RegExp("^(" + i + ")$", "i");
        var r = e.Extension.extend({
          init: function () {
            e.Extension.prototype.init.apply(this, arguments), this.disableEventHandling = !1, this.subscribe("editableKeypress", this.onKeypress.bind(this)), this.subscribe("editableBlur", this.onBlur.bind(this)), this.document.execCommand("AutoUrlDetect", !1, !1)
          },
          isLastInstance: function () {
            for (var e = 0, t = 0; t < this.window._mediumEditors.length; t++) {
              var n = this.window._mediumEditors[t];
              null !== n && void 0 !== n.getExtensionByName("autoLink") && e++
            }
            return 1 === e
          },
          destroy: function () {
            this.document.queryCommandSupported("AutoUrlDetect") && this.isLastInstance() && this.document.execCommand("AutoUrlDetect", !1, !0)
          },
          onBlur: function (e, t) {
            this.performLinking(t)
          },
          onKeypress: function (t) {
            this.disableEventHandling || e.util.isKey(t, [e.util.keyCode.SPACE, e.util.keyCode.ENTER]) && (clearTimeout(this.performLinkingTimeout), this.performLinkingTimeout = setTimeout(function () {
              try {
                var e = this.base.exportSelection();
                this.performLinking(t.target) && this.base.importSelection(e, !0)
              } catch (e) {
                window.console && window.console.error("Failed to perform linking", e), this.disableEventHandling = !0
              }
            }.bind(this), 0))
          },
          performLinking: function (t) {
            var n = e.util.splitByBlockElements(t),
              i = !1;
            0 === n.length && (n = [t]);
            for (var o = 0; o < n.length; o++) i = this.removeObsoleteAutoLinkSpans(n[o]) || i, i = this.performLinkingWithinElement(n[o]) || i;
            return this.base.events.updateInput(t, {
              target: t,
              currentTarget: t
            }), i
          },
          removeObsoleteAutoLinkSpans: function (n) {
            if (!n || 3 === n.nodeType) return !1;
            for (var i = n.querySelectorAll('span[data-auto-link="true"]'), o = !1, s = 0; s < i.length; s++) {
              var r = i[s].textContent;
              if (r.indexOf("://") === -1 && (r = e.util.ensureUrlHasProtocol(r)), i[s].getAttribute("data-href") !== r && t(i[s])) {
                o = !0;
                var a = r.replace(/\s+$/, "");
                if (i[s].getAttribute("data-href") === a) {
                  var l = r.length - a.length,
                    c = e.util.splitOffDOMTree(i[s], this.splitTextBeforeEnd(i[s], l));
                  i[s].parentNode.insertBefore(c, i[s].nextSibling)
                } else e.util.unwrap(i[s], this.document)
              }
            }
            return o
          },
          splitTextBeforeEnd: function (e, t) {
            for (var n = this.document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1), i = !0; i;) i = null !== n.lastChild();
            for (var o, s, r; t > 0 && null !== r;) o = n.currentNode, s = o.nodeValue, s.length > t ? (r = o.splitText(s.length - t), t = 0) : (r = n.previousNode(), t -= s.length);
            return r
          },
          performLinkingWithinElement: function (t) {
            for (var n = this.findLinkableText(t), i = !1, o = 0; o < n.length; o++) {
              var s = e.util.findOrCreateMatchingTextNodes(this.document, t, n[o]);
              this.shouldNotLink(s) || this.createAutoLink(s, n[o].href)
            }
            return i
          },
          shouldNotLink: function (t) {
            for (var n = !1, i = 0; i < t.length && n === !1; i++) n = !!e.util.traverseUp(t[i], function (e) {
              return "a" === e.nodeName.toLowerCase() || e.getAttribute && "true" === e.getAttribute("data-auto-link")
            });
            return n
          },
          findLinkableText: function (e) {
            for (var t = new RegExp(o, "gi"), i = e.textContent, r = null, a = []; null !== (r = t.exec(i));) {
              var l = !0,
                c = r.index + r[0].length;
              l = !(0 !== r.index && n.indexOf(i[r.index - 1]) === -1 || c !== i.length && n.indexOf(i[c]) === -1), l = l && (r[0].indexOf("/") !== -1 || s.test(r[0].split(".").pop().split("?").shift())), l && a.push({
                href: r[0],
                start: r.index,
                end: c
              })
            }
            return a
          },
          createAutoLink: function (t, n) {
            n = e.util.ensureUrlHasProtocol(n);
            var i = e.util.createLink(this.document, t, n, this.getEditorOption("targetBlank") ? "_blank" : null),
              o = this.document.createElement("span");
            for (o.setAttribute("data-auto-link", "true"), o.setAttribute("data-href", n), i.insertBefore(o, i.firstChild); i.childNodes.length > 1;) o.appendChild(i.childNodes[1])
          }
        });
        e.extensions.autoLink = r
      }(),
      function () {
        function t(t) {
          var i = e.util.getContainerEditorElement(t),
            o = Array.prototype.slice.call(i.parentElement.querySelectorAll("." + n));
          o.forEach(function (e) {
            e.classList.remove(n)
          })
        }
        var n = "medium-editor-dragover",
          i = e.Extension.extend({
            name: "fileDragging",
            allowedTypes: ["image"],
            init: function () {
              e.Extension.prototype.init.apply(this, arguments), this.subscribe("editableDrag", this.handleDrag.bind(this)), this.subscribe("editableDrop", this.handleDrop.bind(this))
            },
            handleDrag: function (e) {
              e.preventDefault(), e.dataTransfer.dropEffect = "copy";
              var i = e.target.classList ? e.target : e.target.parentElement;
              t(i), "dragover" === e.type && i.classList.add(n)
            },
            handleDrop: function (e) {
              e.preventDefault(), e.stopPropagation(), this.base.selectElement(e.target);
              var n = this.base.exportSelection();
              n.start = n.end, this.base.importSelection(n), e.dataTransfer.files && Array.prototype.slice.call(e.dataTransfer.files).forEach(function (e) {
                this.isAllowedFile(e) && e.type.match("image") && this.insertImageFile(e)
              }, this), t(e.target)
            },
            isAllowedFile: function (e) {
              return this.allowedTypes.some(function (t) {
                return !!e.type.match(t)
              })
            },
            insertImageFile: function (t) {
              if ("function" == typeof FileReader) {
                var n = new FileReader;
                n.readAsDataURL(t), n.addEventListener("load", function (t) {
                  var n = this.document.createElement("img");
                  n.src = t.target.result, e.util.insertHTMLCommand(this.document, n.outerHTML)
                }.bind(this))
              }
            }
          });
        e.extensions.fileDragging = i
      }(),
      function () {
        var t = e.Extension.extend({
          name: "keyboard-commands",
          commands: [{
            command: "bold",
            key: "B",
            meta: !0,
            shift: !1,
            alt: !1
          }, {
            command: "italic",
            key: "I",
            meta: !0,
            shift: !1,
            alt: !1
          }, {
            command: "underline",
            key: "U",
            meta: !0,
            shift: !1,
            alt: !1
          }],
          init: function () {
            e.Extension.prototype.init.apply(this, arguments), this.subscribe("editableKeydown", this.handleKeydown.bind(this)), this.keys = {}, this.commands.forEach(function (e) {
              var t = e.key.charCodeAt(0);
              this.keys[t] || (this.keys[t] = []), this.keys[t].push(e)
            }, this)
          },
          handleKeydown: function (t) {
            var n = e.util.getKeyCode(t);
            if (this.keys[n]) {
              var i = e.util.isMetaCtrlKey(t),
                o = !!t.shiftKey,
                s = !!t.altKey;
              this.keys[n].forEach(function (e) {
                e.meta !== i || e.shift !== o || e.alt !== s && void 0 !== e.alt || (t.preventDefault(), t.stopPropagation(), "function" == typeof e.command ? e.command.apply(this) : !1 !== e.command && this.execAction(e.command))
              }, this)
            }
          }
        });
        e.extensions.keyboardCommands = t
      }(),
      function () {
        var t = e.extensions.form.extend({
          name: "fontname",
          action: "fontName",
          aria: "change font name",
          contentDefault: "&#xB1;",
          contentFA: '<i class="fa fa-font"></i>',
          fonts: ["", "Arial", "Verdana", "Times New Roman"],
          init: function () {
            e.extensions.form.prototype.init.apply(this, arguments)
          },
          handleClick: function (e) {
            if (e.preventDefault(), e.stopPropagation(), !this.isDisplayed()) {
              var t = this.document.queryCommandValue("fontName") + "";
              this.showForm(t)
            }
            return !1
          },
          getForm: function () {
            return this.form || (this.form = this.createForm()), this.form
          },
          isDisplayed: function () {
            return "block" === this.getForm().style.display
          },
          hideForm: function () {
            this.getForm().style.display = "none", this.getSelect().value = ""
          },
          showForm: function (e) {
            var t = this.getSelect();
            this.base.saveSelection(), this.hideToolbarDefaultActions(), this.getForm().style.display = "block", this.setToolbarPosition(), t.value = e || "", t.focus()
          },
          destroy: function () {
            return !!this.form && (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form)
          },
          doFormSave: function () {
            this.base.restoreSelection(), this.base.checkSelection()
          },
          doFormCancel: function () {
            this.base.restoreSelection(), this.clearFontName(), this.base.checkSelection()
          },
          createForm: function () {
            var e, t = this.document,
              n = t.createElement("div"),
              i = t.createElement("select"),
              o = t.createElement("a"),
              s = t.createElement("a");
            n.className = "medium-editor-toolbar-form", n.id = "medium-editor-toolbar-form-fontname-" + this.getEditorId(), this.on(n, "click", this.handleFormClick.bind(this));
            for (var r = 0; r < this.fonts.length; r++) e = t.createElement("option"), e.innerHTML = this.fonts[r], e.value = this.fonts[r], i.appendChild(e);
            return i.className = "medium-editor-toolbar-select", n.appendChild(i), this.on(i, "change", this.handleFontChange.bind(this)), s.setAttribute("href", "#"), s.className = "medium-editor-toobar-save", s.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;", n.appendChild(s), this.on(s, "click", this.handleSaveClick.bind(this), !0), o.setAttribute("href", "#"), o.className = "medium-editor-toobar-close", o.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;", n.appendChild(o), this.on(o, "click", this.handleCloseClick.bind(this)), n
          },
          getSelect: function () {
            return this.getForm().querySelector("select.medium-editor-toolbar-select")
          },
          clearFontName: function () {
            e.selection.getSelectedElements(this.document).forEach(function (e) {
              "font" === e.nodeName.toLowerCase() && e.hasAttribute("face") && e.removeAttribute("face")
            })
          },
          handleFontChange: function () {
            var e = this.getSelect().value;
            "" === e ? this.clearFontName() : this.execAction("fontName", {
              name: e
            })
          },
          handleFormClick: function (e) {
            e.stopPropagation()
          },
          handleSaveClick: function (e) {
            e.preventDefault(), this.doFormSave()
          },
          handleCloseClick: function (e) {
            e.preventDefault(), this.doFormCancel()
          }
        });
        e.extensions.fontName = t
      }(),
      function () {
        var t = e.extensions.form.extend({
          name: "fontsize",
          action: "fontSize",
          aria: "increase/decrease font size",
          contentDefault: "&#xB1;",
          contentFA: '<i class="fa fa-text-height"></i>',
          init: function () {
            e.extensions.form.prototype.init.apply(this, arguments)
          },
          handleClick: function (e) {
            if (e.preventDefault(), e.stopPropagation(), !this.isDisplayed()) {
              var t = this.document.queryCommandValue("fontSize") + "";
              this.showForm(t)
            }
            return !1
          },
          getForm: function () {
            return this.form || (this.form = this.createForm()), this.form
          },
          isDisplayed: function () {
            return "block" === this.getForm().style.display
          },
          hideForm: function () {
            this.getForm().style.display = "none", this.getInput().value = ""
          },
          showForm: function (e) {
            var t = this.getInput();
            this.base.saveSelection(), this.hideToolbarDefaultActions(), this.getForm().style.display = "block", this.setToolbarPosition(), t.value = e || "", t.focus()
          },
          destroy: function () {
            return !!this.form && (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form)
          },
          doFormSave: function () {
            this.base.restoreSelection(), this.base.checkSelection()
          },
          doFormCancel: function () {
            this.base.restoreSelection(), this.clearFontSize(), this.base.checkSelection()
          },
          createForm: function () {
            var e = this.document,
              t = e.createElement("div"),
              n = e.createElement("input"),
              i = e.createElement("a"),
              o = e.createElement("a");
            return t.className = "medium-editor-toolbar-form", t.id = "medium-editor-toolbar-form-fontsize-" + this.getEditorId(), this.on(t, "click", this.handleFormClick.bind(this)), n.setAttribute("type", "range"), n.setAttribute("min", "1"), n.setAttribute("max", "7"), n.className = "medium-editor-toolbar-input", t.appendChild(n), this.on(n, "change", this.handleSliderChange.bind(this)), o.setAttribute("href", "#"), o.className = "medium-editor-toobar-save", o.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;", t.appendChild(o), this.on(o, "click", this.handleSaveClick.bind(this), !0), i.setAttribute("href", "#"), i.className = "medium-editor-toobar-close", i.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;", t.appendChild(i), this.on(i, "click", this.handleCloseClick.bind(this)), t
          },
          getInput: function () {
            return this.getForm().querySelector("input.medium-editor-toolbar-input")
          },
          clearFontSize: function () {
            e.selection.getSelectedElements(this.document).forEach(function (e) {
              "font" === e.nodeName.toLowerCase() && e.hasAttribute("size") && e.removeAttribute("size")
            })
          },
          handleSliderChange: function () {
            var e = this.getInput().value;
            "4" === e ? this.clearFontSize() : this.execAction("fontSize", {
              size: e
            })
          },
          handleFormClick: function (e) {
            e.stopPropagation()
          },
          handleSaveClick: function (e) {
            e.preventDefault(), this.doFormSave()
          },
          handleCloseClick: function (e) {
            e.preventDefault(), this.doFormCancel()
          }
        });
        e.extensions.fontSize = t
      }(),
      function () {
        function t() {
          return [[new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ""], [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ""], [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), " "], [new RegExp(/<br class="Apple-interchange-newline">/g), "<br>"], [new RegExp(/<span[^>]*(font-style:italic;font-weight:bold|font-weight:bold;font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'], [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'], [new RegExp(/<span[^>]*font-weight:bold[^>]*>/gi), '<span class="replace-with bold">'], [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), "<$1$2>"], [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'], [new RegExp(/<\/p>\n+/gi), "</p>"], [new RegExp(/\n+<p/gi), "<p"], [new RegExp(/<\/?o:[a-z]*>/gi), ""], ["<!--EndFragment-->", ""], ["<!--StartFragment-->", ""]]
        }
        var n = e.Extension.extend({
          forcePlainText: !0,
          cleanPastedHTML: !1,
          preCleanReplacements: [],
          cleanReplacements: [],
          cleanAttrs: ["class", "style", "dir"],
          cleanTags: ["meta"],
          init: function () {
            e.Extension.prototype.init.apply(this, arguments), (this.forcePlainText || this.cleanPastedHTML) && this.subscribe("editablePaste", this.handlePaste.bind(this))
          },
          handlePaste: function (t, n) {
            var i, o, s, r, a = "",
              l = "text/html",
              c = "text/plain";
            if (this.window.clipboardData && void 0 === t.clipboardData && (t.clipboardData = this.window.clipboardData, l = "Text", c = "Text"), t.clipboardData && t.clipboardData.getData && !t.defaultPrevented) {
              if (t.preventDefault(), s = t.clipboardData.getData(l), r = t.clipboardData.getData(c), this.cleanPastedHTML && s) return this.cleanPaste(s);
              if (this.getEditorOption("disableReturn") || n.getAttribute("data-disable-return")) a = e.util.htmlEntities(r);
              else if (i = r.split(/[\r\n]+/g),
                i.length > 1)
                for (o = 0; o < i.length; o += 1) "" !== i[o] && (a += "<p>" + e.util.htmlEntities(i[o]) + "</p>");
              else a = e.util.htmlEntities(i[0]);
              e.util.insertHTMLCommand(this.document, a)
            }
          },
          cleanPaste: function (e) {
            var n, i, o, s, r = /<p|<br|<div/.test(e),
              a = [].concat(this.preCleanReplacements || [], t(), this.cleanReplacements || []);
            for (n = 0; n < a.length; n += 1) e = e.replace(a[n][0], a[n][1]);
            if (!r) return this.pasteHTML(e);
            for (o = this.document.createElement("div"), o.innerHTML = "<p>" + e.split("<br><br>").join("</p><p>") + "</p>", i = o.querySelectorAll("a,p,div,br"), n = 0; n < i.length; n += 1) switch (s = i[n], s.innerHTML = s.innerHTML.replace(/\n/gi, " "), s.nodeName.toLowerCase()) {
              case "p":
              case "div":
                this.filterCommonBlocks(s);
                break;
              case "br":
                this.filterLineBreak(s)
            }
            this.pasteHTML(o.innerHTML)
          },
          pasteHTML: function (t, n) {
            n = e.util.defaults({}, n, {
              cleanAttrs: this.cleanAttrs,
              cleanTags: this.cleanTags
            });
            var i, o, s, r, a = this.document.createDocumentFragment();
            for (a.appendChild(this.document.createElement("body")), r = a.querySelector("body"), r.innerHTML = t, this.cleanupSpans(r), i = r.querySelectorAll("*"), s = 0; s < i.length; s += 1) o = i[s], "a" === o.nodeName.toLowerCase() && this.getEditorOption("targetBlank") && e.util.setTargetBlank(o), e.util.cleanupAttrs(o, n.cleanAttrs), e.util.cleanupTags(o, n.cleanTags);
            e.util.insertHTMLCommand(this.document, r.innerHTML.replace(/&nbsp;/g, " "))
          },
          isCommonBlock: function (e) {
            return e && ("p" === e.nodeName.toLowerCase() || "div" === e.nodeName.toLowerCase())
          },
          filterCommonBlocks: function (e) {
            /^\s*$/.test(e.textContent) && e.parentNode && e.parentNode.removeChild(e)
          },
          filterLineBreak: function (e) {
            this.isCommonBlock(e.previousElementSibling) ? this.removeWithParent(e) : !this.isCommonBlock(e.parentNode) || e.parentNode.firstChild !== e && e.parentNode.lastChild !== e ? e.parentNode && 1 === e.parentNode.childElementCount && "" === e.parentNode.textContent && this.removeWithParent(e) : this.removeWithParent(e)
          },
          removeWithParent: function (e) {
            e && e.parentNode && (e.parentNode.parentNode && 1 === e.parentNode.childElementCount ? e.parentNode.parentNode.removeChild(e.parentNode) : e.parentNode.removeChild(e))
          },
          cleanupSpans: function (t) {
            var n, i, o, s = t.querySelectorAll(".replace-with"),
              r = function (e) {
                return e && "#text" !== e.nodeName && "false" === e.getAttribute("contenteditable")
              };
            for (n = 0; n < s.length; n += 1) i = s[n], o = this.document.createElement(i.classList.contains("bold") ? "b" : "i"), i.classList.contains("bold") && i.classList.contains("italic") ? o.innerHTML = "<i>" + i.innerHTML + "</i>" : o.innerHTML = i.innerHTML, i.parentNode.replaceChild(o, i);
            for (s = t.querySelectorAll("span"), n = 0; n < s.length; n += 1) {
              if (i = s[n], e.util.traverseUp(i, r)) return !1;
              e.util.unwrap(i, this.document)
            }
          }
        });
        e.extensions.paste = n
      }(),
      function () {
        var t = e.Extension.extend({
          name: "placeholder",
          text: "Type your text",
          hideOnClick: !0,
          init: function () {
            e.Extension.prototype.init.apply(this, arguments), this.initPlaceholders(), this.attachEventHandlers()
          },
          initPlaceholders: function () {
            this.getEditorElements().forEach(function (e) {
              e.getAttribute("data-placeholder") || e.setAttribute("data-placeholder", this.text), this.updatePlaceholder(e)
            }, this)
          },
          destroy: function () {
            this.getEditorElements().forEach(function (e) {
              e.getAttribute("data-placeholder") === this.text && e.removeAttribute("data-placeholder")
            }, this)
          },
          showPlaceholder: function (e) {
            e && e.classList.add("medium-editor-placeholder")
          },
          hidePlaceholder: function (e) {
            e && e.classList.remove("medium-editor-placeholder")
          },
          updatePlaceholder: function (e, t) {
            return e.querySelector("img, blockquote, ul, ol") || "" !== e.textContent.replace(/^\s+|\s+$/g, "") ? this.hidePlaceholder(e) : void(t || this.showPlaceholder(e))
          },
          attachEventHandlers: function () {
            this.hideOnClick && this.subscribe("focus", this.handleFocus.bind(this)), this.subscribe("editableInput", this.handleInput.bind(this)), this.subscribe("blur", this.handleBlur.bind(this))
          },
          handleInput: function (e, t) {
            var n = this.hideOnClick && t === this.base.getFocusedElement();
            this.updatePlaceholder(t, n)
          },
          handleFocus: function (e, t) {
            this.hidePlaceholder(t)
          },
          handleBlur: function (e, t) {
            this.updatePlaceholder(t)
          }
        });
        e.extensions.placeholder = t
      }(),
      function () {
        var t = e.Extension.extend({
          name: "toolbar",
          align: "center",
          allowMultiParagraphSelection: !0,
          buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"],
          diffLeft: 0,
          diffTop: -10,
          firstButtonClass: "medium-editor-button-first",
          lastButtonClass: "medium-editor-button-last",
          standardizeSelectionStart: !1,
          static: !1,
          sticky: !1,
          stickyTopOffset: 0,
          updateOnEmptySelection: !1,
          relativeContainer: null,
          init: function () {
            e.Extension.prototype.init.apply(this, arguments), this.initThrottledMethods(), this.relativeContainer ? this.relativeContainer.appendChild(this.getToolbarElement()) : this.getEditorOption("elementsContainer").appendChild(this.getToolbarElement())
          },
          forEachExtension: function (e, t) {
            return this.base.extensions.forEach(function (n) {
              if (n !== this) return e.apply(t || this, arguments)
            }, this)
          },
          createToolbar: function () {
            var e = this.document.createElement("div");
            return e.id = "medium-editor-toolbar-" + this.getEditorId(), e.className = "medium-editor-toolbar", this.static ? e.className += " static-toolbar" : this.relativeContainer ? e.className += " medium-editor-relative-toolbar" : e.className += " medium-editor-stalker-toolbar", e.appendChild(this.createToolbarButtons()), this.forEachExtension(function (t) {
              t.hasForm && e.appendChild(t.getForm())
            }), this.attachEventHandlers(), e
          },
          createToolbarButtons: function () {
            var t, n, i, o, s, r, a = this.document.createElement("ul");
            return a.id = "medium-editor-toolbar-actions" + this.getEditorId(), a.className = "medium-editor-toolbar-actions", a.style.display = "block", this.buttons.forEach(function (i) {
              "string" == typeof i ? (s = i, r = null) : (s = i.name, r = i), o = this.base.addBuiltInExtension(s, r), o && "function" == typeof o.getButton && (n = o.getButton(this.base), t = this.document.createElement("li"), e.util.isElement(n) ? t.appendChild(n) : t.innerHTML = n, a.appendChild(t))
            }, this), i = a.querySelectorAll("button"), i.length > 0 && (i[0].classList.add(this.firstButtonClass), i[i.length - 1].classList.add(this.lastButtonClass)), a
          },
          destroy: function () {
            this.toolbar && (this.toolbar.parentNode && this.toolbar.parentNode.removeChild(this.toolbar), delete this.toolbar)
          },
          getToolbarElement: function () {
            return this.toolbar || (this.toolbar = this.createToolbar()), this.toolbar
          },
          getToolbarActionsElement: function () {
            return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions")
          },
          initThrottledMethods: function () {
            this.throttledPositionToolbar = e.util.throttle(function () {
              this.base.isActive && this.positionToolbarIfShown()
            }.bind(this))
          },
          attachEventHandlers: function () {
            this.subscribe("blur", this.handleBlur.bind(this)), this.subscribe("focus", this.handleFocus.bind(this)), this.subscribe("editableClick", this.handleEditableClick.bind(this)), this.subscribe("editableKeyup", this.handleEditableKeyup.bind(this)), this.on(this.document.documentElement, "mouseup", this.handleDocumentMouseup.bind(this)), this.static && this.sticky && this.on(this.window, "scroll", this.handleWindowScroll.bind(this), !0), this.on(this.window, "resize", this.handleWindowResize.bind(this))
          },
          handleWindowScroll: function () {
            this.positionToolbarIfShown()
          },
          handleWindowResize: function () {
            this.throttledPositionToolbar()
          },
          handleDocumentMouseup: function (t) {
            return !(t && t.target && e.util.isDescendant(this.getToolbarElement(), t.target)) && void this.checkState()
          },
          handleEditableClick: function () {
            setTimeout(function () {
              this.checkState()
            }.bind(this), 0)
          },
          handleEditableKeyup: function () {
            this.checkState()
          },
          handleBlur: function () {
            clearTimeout(this.hideTimeout), clearTimeout(this.delayShowTimeout), this.hideTimeout = setTimeout(function () {
              this.hideToolbar()
            }.bind(this), 1)
          },
          handleFocus: function () {
            this.checkState()
          },
          isDisplayed: function () {
            return this.getToolbarElement().classList.contains("medium-editor-toolbar-active")
          },
          showToolbar: function () {
            clearTimeout(this.hideTimeout), this.isDisplayed() || (this.getToolbarElement().classList.add("medium-editor-toolbar-active"), this.trigger("showToolbar", {}, this.base.getFocusedElement()))
          },
          hideToolbar: function () {
            this.isDisplayed() && (this.getToolbarElement().classList.remove("medium-editor-toolbar-active"), this.trigger("hideToolbar", {}, this.base.getFocusedElement()))
          },
          isToolbarDefaultActionsDisplayed: function () {
            return "block" === this.getToolbarActionsElement().style.display
          },
          hideToolbarDefaultActions: function () {
            this.isToolbarDefaultActionsDisplayed() && (this.getToolbarActionsElement().style.display = "none")
          },
          showToolbarDefaultActions: function () {
            this.hideExtensionForms(), this.isToolbarDefaultActionsDisplayed() || (this.getToolbarActionsElement().style.display = "block"), this.delayShowTimeout = this.base.delay(function () {
              this.showToolbar()
            }.bind(this))
          },
          hideExtensionForms: function () {
            this.forEachExtension(function (e) {
              e.hasForm && e.isDisplayed() && e.hideForm()
            })
          },
          multipleBlockElementsSelected: function () {
            var t = /<[^\/>][^>]*><\/[^>]+>/gim,
              n = new RegExp("<(" + e.util.blockContainerElementNames.join("|") + ")[^>]*>", "g"),
              i = e.selection.getSelectionHtml(this.document).replace(t, ""),
              o = i.match(n);
            return !!o && o.length > 1
          },
          modifySelection: function () {
            var t = this.window.getSelection(),
              n = t.getRangeAt(0);
            if (this.standardizeSelectionStart && n.startContainer.nodeValue && n.startOffset === n.startContainer.nodeValue.length) {
              var i = e.util.findAdjacentTextNodeWithContent(e.selection.getSelectionElement(this.window), n.startContainer, this.document);
              if (i) {
                for (var o = 0; 0 === i.nodeValue.substr(o, 1).trim().length;) o += 1;
                n = e.selection.select(this.document, i, o, n.endContainer, n.endOffset)
              }
            }
          },
          checkState: function () {
            if (!this.base.preventSelectionUpdates) {
              if (!this.base.getFocusedElement() || e.selection.selectionInContentEditableFalse(this.window)) return this.hideToolbar();
              var t = e.selection.getSelectionElement(this.window);
              return !t || this.getEditorElements().indexOf(t) === -1 || t.getAttribute("data-disable-toolbar") ? this.hideToolbar() : this.updateOnEmptySelection && this.static ? this.showAndUpdateToolbar() : !e.selection.selectionContainsContent(this.document) || this.allowMultiParagraphSelection === !1 && this.multipleBlockElementsSelected() ? this.hideToolbar() : void this.showAndUpdateToolbar()
            }
          },
          showAndUpdateToolbar: function () {
            this.modifySelection(), this.setToolbarButtonStates(), this.trigger("positionToolbar", {}, this.base.getFocusedElement()), this.showToolbarDefaultActions(), this.setToolbarPosition()
          },
          setToolbarButtonStates: function () {
            this.forEachExtension(function (e) {
              "function" == typeof e.isActive && "function" == typeof e.setInactive && e.setInactive()
            }), this.checkActiveButtons()
          },
          checkActiveButtons: function () {
            var t, n = [],
              i = null,
              o = e.selection.getSelectionRange(this.document),
              s = function (e) {
                "function" == typeof e.checkState ? e.checkState(t) : "function" == typeof e.isActive && "function" == typeof e.isAlreadyApplied && "function" == typeof e.setActive && !e.isActive() && e.isAlreadyApplied(t) && e.setActive()
              };
            if (o && (this.forEachExtension(function (e) {
                return "function" == typeof e.queryCommandState && (i = e.queryCommandState(), null !== i) ? void(i && "function" == typeof e.setActive && e.setActive()) : void n.push(e)
              }), t = e.selection.getSelectedParentElement(o), this.getEditorElements().some(function (n) {
                return e.util.isDescendant(n, t, !0)
              })))
              for (; t && (n.forEach(s), !e.util.isMediumEditorElement(t));) t = t.parentNode
          },
          positionToolbarIfShown: function () {
            this.isDisplayed() && this.setToolbarPosition()
          },
          setToolbarPosition: function () {
            var e = this.base.getFocusedElement(),
              t = this.window.getSelection();
            return e ? void(!this.static && t.isCollapsed || (this.showToolbar(), this.relativeContainer || (this.static ? this.positionStaticToolbar(e) : this.positionToolbar(t)), this.trigger("positionedToolbar", {}, this.base.getFocusedElement()))) : this
          },
          positionStaticToolbar: function (e) {
            this.getToolbarElement().style.left = "0";
            var t, n = this.document.documentElement && this.document.documentElement.scrollTop || this.document.body.scrollTop,
              i = this.window.innerWidth,
              o = this.getToolbarElement(),
              s = e.getBoundingClientRect(),
              r = s.top + n,
              a = s.left + s.width / 2,
              l = o.offsetHeight,
              c = o.offsetWidth,
              u = c / 2;
            switch (this.sticky ? n > r + e.offsetHeight - l - this.stickyTopOffset ? (o.style.top = r + e.offsetHeight - l + "px", o.classList.remove("medium-editor-sticky-toolbar")) : n > r - l - this.stickyTopOffset ? (o.classList.add("medium-editor-sticky-toolbar"), o.style.top = this.stickyTopOffset + "px") : (o.classList.remove("medium-editor-sticky-toolbar"), o.style.top = r - l + "px") : o.style.top = r - l + "px", this.align) {
              case "left":
                t = s.left;
                break;
              case "right":
                t = s.right - c;
                break;
              case "center":
                t = a - u
            }
            t < 0 ? t = 0 : t + c > i && (t = i - Math.ceil(c) - 1), o.style.left = t + "px"
          },
          positionToolbar: function (e) {
            this.getToolbarElement().style.left = "0", this.getToolbarElement().style.right = "initial";
            var t = e.getRangeAt(0),
              n = t.getBoundingClientRect();
            (!n || 0 === n.height && 0 === n.width && t.startContainer === t.endContainer) && (n = 1 === t.startContainer.nodeType && t.startContainer.querySelector("img") ? t.startContainer.querySelector("img").getBoundingClientRect() : t.startContainer.getBoundingClientRect());
            var i = this.window.innerWidth,
              o = (n.left + n.right) / 2,
              s = this.getToolbarElement(),
              r = s.offsetHeight,
              a = s.offsetWidth,
              l = a / 2,
              c = 50,
              u = this.diffLeft - l;
            n.top < c ? (s.classList.add("medium-toolbar-arrow-over"), s.classList.remove("medium-toolbar-arrow-under"), s.style.top = c + n.bottom - this.diffTop + this.window.pageYOffset - r + "px") : (s.classList.add("medium-toolbar-arrow-under"), s.classList.remove("medium-toolbar-arrow-over"), s.style.top = n.top + this.diffTop + this.window.pageYOffset - r + "px"), o < l ? (s.style.left = u + l + "px", s.style.right = "initial") : i - o < l ? (s.style.left = "auto", s.style.right = 0) : (s.style.left = u + o + "px", s.style.right = "initial")
          }
        });
        e.extensions.toolbar = t
      }(),
      function () {
        var t = e.Extension.extend({
          init: function () {
            e.Extension.prototype.init.apply(this, arguments), this.subscribe("editableDrag", this.handleDrag.bind(this)), this.subscribe("editableDrop", this.handleDrop.bind(this))
          },
          handleDrag: function (e) {
            var t = "medium-editor-dragover";
            e.preventDefault(), e.dataTransfer.dropEffect = "copy", "dragover" === e.type ? e.target.classList.add(t) : "dragleave" === e.type && e.target.classList.remove(t)
          },
          handleDrop: function (t) {
            var n, i = "medium-editor-dragover";
            t.preventDefault(), t.stopPropagation(), t.dataTransfer.files && (n = Array.prototype.slice.call(t.dataTransfer.files, 0), n.some(function (t) {
              if (t.type.match("image")) {
                var n, i;
                n = new FileReader, n.readAsDataURL(t), i = "medium-img-" + +new Date, e.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + i + '" />'), n.onload = function () {
                  var e = this.document.getElementById(i);
                  e && (e.removeAttribute("id"), e.removeAttribute("class"), e.src = n.result)
                }.bind(this)
              }
            }.bind(this))), t.target.classList.remove(i)
          }
        });
        e.extensions.imageDragging = t
      }(),
      function () {
        function t(t) {
          var n = e.selection.getSelectionStart(this.options.ownerDocument),
            i = n.textContent,
            o = e.selection.getCaretOffsets(n);
          (void 0 === i[o.left - 1] || "" === i[o.left - 1].trim() || void 0 !== i[o.left] && "" === i[o.left].trim()) && t.preventDefault()
        }

        function n(t, n) {
          if (this.options.disableReturn || n.getAttribute("data-disable-return")) t.preventDefault();
          else if (this.options.disableDoubleReturn || n.getAttribute("data-disable-double-return")) {
            var i = e.selection.getSelectionStart(this.options.ownerDocument);
            (i && "" === i.textContent.trim() && "li" !== i.nodeName.toLowerCase() || i.previousElementSibling && "br" !== i.previousElementSibling.nodeName.toLowerCase() && "" === i.previousElementSibling.textContent.trim()) && t.preventDefault()
          }
        }

        function i(t) {
          var n = e.selection.getSelectionStart(this.options.ownerDocument),
            i = n && n.nodeName.toLowerCase();
          "pre" === i && (t.preventDefault(), e.util.insertHTMLCommand(this.options.ownerDocument, "    ")), e.util.isListItem(n) && (t.preventDefault(), t.shiftKey ? this.options.ownerDocument.execCommand("outdent", !1, null) : this.options.ownerDocument.execCommand("indent", !1, null))
        }

        function o(t) {
          var n, i = e.selection.getSelectionStart(this.options.ownerDocument),
            o = i.nodeName.toLowerCase(),
            s = /^(\s+|<br\/?>)?$/i,
            r = /h\d/i;
          e.util.isKey(t, [e.util.keyCode.BACKSPACE, e.util.keyCode.ENTER]) && i.previousElementSibling && r.test(o) && 0 === e.selection.getCaretOffsets(i).left ? e.util.isKey(t, e.util.keyCode.BACKSPACE) && s.test(i.previousElementSibling.innerHTML) ? (i.previousElementSibling.parentNode.removeChild(i.previousElementSibling), t.preventDefault()) : !this.options.disableDoubleReturn && e.util.isKey(t, e.util.keyCode.ENTER) && (n = this.options.ownerDocument.createElement("p"), n.innerHTML = "<br>", i.previousElementSibling.parentNode.insertBefore(n, i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.DELETE) && i.nextElementSibling && i.previousElementSibling && !r.test(o) && s.test(i.innerHTML) && r.test(i.nextElementSibling.nodeName.toLowerCase()) ? (e.selection.moveCursor(this.options.ownerDocument, i.nextElementSibling), i.previousElementSibling.parentNode.removeChild(i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && "li" === o && s.test(i.innerHTML) && !i.previousElementSibling && !i.parentElement.previousElementSibling && i.nextElementSibling && "li" === i.nextElementSibling.nodeName.toLowerCase() ? (n = this.options.ownerDocument.createElement("p"), n.innerHTML = "<br>", i.parentElement.parentElement.insertBefore(n, i.parentElement), e.selection.moveCursor(this.options.ownerDocument, n), i.parentElement.removeChild(i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && e.util.getClosestTag(i, "blockquote") !== !1 && 0 === e.selection.getCaretOffsets(i).left && (t.preventDefault(), e.util.execFormatBlock(this.options.ownerDocument, "p"))
        }

        function s(t) {
          var n, i = e.selection.getSelectionStart(this.options.ownerDocument);
          i && (e.util.isMediumEditorElement(i) && 0 === i.children.length && !e.util.isBlockContainer(i) && this.options.ownerDocument.execCommand("formatBlock", !1, "p"), !e.util.isKey(t, e.util.keyCode.ENTER) || e.util.isListItem(i) || e.util.isBlockContainer(i) || (n = i.nodeName.toLowerCase(), "a" === n ? this.options.ownerDocument.execCommand("unlink", !1, null) : t.shiftKey || t.ctrlKey || this.options.ownerDocument.execCommand("formatBlock", !1, "p")))
        }

        function r(e) {
          e._mediumEditors || (e._mediumEditors = [null]), this.id || (this.id = e._mediumEditors.length), e._mediumEditors[this.id] = this
        }

        function a(e) {
          e._mediumEditors && e._mediumEditors[this.id] && (e._mediumEditors[this.id] = null)
        }

        function l(t) {
          t || (t = []), "string" == typeof t && (t = this.options.ownerDocument.querySelectorAll(t)), e.util.isElement(t) && (t = [t]);
          var n = Array.prototype.slice.apply(t);
          this.elements = [], n.forEach(function (e, t) {
            "textarea" === e.nodeName.toLowerCase() ? this.elements.push(v.call(this, e, t)) : this.elements.push(e)
          }, this)
        }

        function c(e, t) {
          return Object.keys(t).forEach(function (n) {
            void 0 === e[n] && (e[n] = t[n])
          }), e
        }

        function u(e, t, n) {
          var i = {
            window: n.options.contentWindow,
            document: n.options.ownerDocument,
            base: n
          };
          return e = c(e, i), "function" == typeof e.init && e.init(), e.name || (e.name = t), e
        }

        function d() {
          return !this.elements.every(function (e) {
            return !!e.getAttribute("data-disable-toolbar")
          }) && this.options.toolbar !== !1
        }

        function h() {
          return !!d.call(this) && this.options.anchorPreview !== !1
        }

        function m() {
          return this.options.placeholder !== !1
        }

        function f() {
          return this.options.autoLink !== !1
        }

        function p() {
          return this.options.imageDragging !== !1
        }

        function g() {
          return this.options.keyboardCommands !== !1
        }

        function b() {
          return !this.options.extensions.imageDragging
        }

        function v(e, t) {
          for (var n = this.options.ownerDocument.createElement("div"), i = Date.now(), o = "medium-editor-" + i + "-" + t, s = e.attributes; this.options.ownerDocument.getElementById(o);) i++, o = "medium-editor-" + i + "-" + t;
          n.className = e.className, n.id = o, n.innerHTML = e.value, e.setAttribute("medium-editor-textarea-id", o);
          for (var r = 0, a = s.length; r < a; r++) n.hasAttribute(s[r].nodeName) || n.setAttribute(s[r].nodeName, s[r].nodeValue);
          return e.classList.add("medium-editor-hidden"), e.parentNode.insertBefore(n, e), n
        }

        function C() {
          var e = !1;
          this.elements.forEach(function (t, n) {
            this.options.disableEditing || t.getAttribute("data-disable-editing") || (t.setAttribute("contentEditable", !0), t.setAttribute("spellcheck", this.options.spellcheck)), t.setAttribute("data-medium-editor-element", !0), t.setAttribute("role", "textbox"), t.setAttribute("aria-multiline", !0), t.setAttribute("medium-editor-index", n), t.hasAttribute("medium-editor-textarea-id") && (e = !0)
          }, this), e && this.subscribe("editableInput", function (e, t) {
            var n = t.parentNode.querySelector('textarea[medium-editor-textarea-id="' + t.getAttribute("medium-editor-textarea-id") + '"]');
            n && (n.value = this.serialize()[t.id].value)
          }.bind(this))
        }

        function y() {
          var e;
          if (this.subscribe("editableKeydownTab", i.bind(this)), this.subscribe("editableKeydownDelete", o.bind(this)), this.subscribe("editableKeydownEnter", o.bind(this)), this.options.disableExtraSpaces && this.subscribe("editableKeydownSpace", t.bind(this)), this.options.disableReturn || this.options.disableDoubleReturn) this.subscribe("editableKeydownEnter", n.bind(this));
          else
            for (e = 0; e < this.elements.length; e += 1)
              if (this.elements[e].getAttribute("data-disable-return") || this.elements[e].getAttribute("data-disable-double-return")) {
                this.subscribe("editableKeydownEnter", n.bind(this));
                break
              }
          this.options.disableReturn || this.elements.forEach(function (e) {
            e.getAttribute("data-disable-return") || this.on(e, "keyup", s.bind(this))
          }, this)
        }

        function E() {
          if (this.extensions = [], Object.keys(this.options.extensions).forEach(function (e) {
              "toolbar" !== e && this.options.extensions[e] && this.extensions.push(u(this.options.extensions[e], e, this))
            }, this), b.call(this)) {
            var t = this.options.fileDragging;
            t || (t = {}, p.call(this) || (t.allowedTypes = [])), this.addBuiltInExtension("fileDragging", t)
          }
          var n = {
            paste: !0,
            "anchor-preview": h.call(this),
            autoLink: f.call(this),
            keyboardCommands: g.call(this),
            placeholder: m.call(this)
          };
          Object.keys(n).forEach(function (e) {
            n[e] && this.addBuiltInExtension(e)
          }, this);
          var i = this.options.extensions.toolbar;
          if (!i && d.call(this)) {
            var o = e.util.extend({}, this.options.toolbar, {
              allowMultiParagraphSelection: this.options.allowMultiParagraphSelection
            });
            i = new e.extensions.toolbar(o)
          }
          i && this.extensions.push(u(i, "toolbar", this))
        }

        function w(t, n) {
          var i = [["allowMultiParagraphSelection", "toolbar.allowMultiParagraphSelection"]];
          return n && i.forEach(function (t) {
            n.hasOwnProperty(t[0]) && void 0 !== n[t[0]] && e.util.deprecated(t[0], t[1], "v6.0.0")
          }), e.util.defaults({}, n, t)
        }

        function x(t, n) {
          var i, o = /^append-(.+)$/gi,
            s = /justify([A-Za-z]*)$/g;
          if (i = o.exec(t)) return e.util.execFormatBlock(this.options.ownerDocument, i[1]);
          if ("fontSize" === t) return this.options.ownerDocument.execCommand("fontSize", !1, n.size);
          if ("fontName" === t) return this.options.ownerDocument.execCommand("fontName", !1, n.name);
          if ("createLink" === t) return this.createLink(n);
          if ("image" === t) {
            var r = this.options.contentWindow.getSelection().toString().trim();
            return this.options.ownerDocument.execCommand("insertImage", !1, r)
          }
          if (s.exec(t)) {
            var a = this.options.ownerDocument.execCommand(t, !1, null),
              l = e.selection.getSelectedParentElement(e.selection.getSelectionRange(this.options.ownerDocument));
            return l && T.call(this, e.util.getTopBlockContainer(l)), a
          }
          return this.options.ownerDocument.execCommand(t, !1, null)
        }

        function T(t) {
          if (t) {
            var n, i = Array.prototype.slice.call(t.childNodes).filter(function (e) {
              var t = "div" === e.nodeName.toLowerCase();
              return t && !n && (n = e.style.textAlign), t
            });
            i.length && (this.saveSelection(), i.forEach(function (t) {
              if (t.style.textAlign === n) {
                var i = t.lastChild;
                if (i) {
                  e.util.unwrap(t, this.options.ownerDocument);
                  var o = this.options.ownerDocument.createElement("BR");
                  i.parentNode.insertBefore(o, i.nextSibling)
                }
              }
            }, this), t.style.textAlign = n, this.restoreSelection())
          }
        }
        e.prototype = {
          init: function (e, t) {
            return this.options = w.call(this, this.defaults, t), this.origElements = e, this.options.elementsContainer || (this.options.elementsContainer = this.options.ownerDocument.body), this.setup()
          },
          setup: function () {
            this.isActive || (l.call(this, this.origElements), 0 !== this.elements.length && (this.isActive = !0, r.call(this, this.options.contentWindow), this.events = new e.Events(this), C.call(this), E.call(this), y.call(this)))
          },
          destroy: function () {
            this.isActive && (this.isActive = !1, this.extensions.forEach(function (e) {
              "function" == typeof e.destroy && e.destroy()
            }, this), this.events.destroy(), this.elements.forEach(function (e) {
              if (this.options.spellcheck && (e.innerHTML = e.innerHTML), e.removeAttribute("contentEditable"), e.removeAttribute("spellcheck"), e.removeAttribute("data-medium-editor-element"), e.removeAttribute("role"), e.removeAttribute("aria-multiline"), e.removeAttribute("medium-editor-index"), e.hasAttribute("medium-editor-textarea-id")) {
                var t = e.parentNode.querySelector('textarea[medium-editor-textarea-id="' + e.getAttribute("medium-editor-textarea-id") + '"]');
                t && t.classList.remove("medium-editor-hidden"), e.parentNode && e.parentNode.removeChild(e)
              }
            }, this), this.elements = [], a.call(this, this.options.contentWindow))
          },
          on: function (e, t, n, i) {
            return this.events.attachDOMEvent(e, t, n, i), this
          },
          off: function (e, t, n, i) {
            return this.events.detachDOMEvent(e, t, n, i), this
          },
          subscribe: function (e, t) {
            return this.events.attachCustomEvent(e, t), this
          },
          unsubscribe: function (e, t) {
            return this.events.detachCustomEvent(e, t), this
          },
          trigger: function (e, t, n) {
            return this.events.triggerCustomEvent(e, t, n), this
          },
          delay: function (e) {
            var t = this;
            return setTimeout(function () {
              t.isActive && e()
            }, this.options.delay)
          },
          serialize: function () {
            var e, t, n = {};
            for (e = 0; e < this.elements.length; e += 1) t = "" !== this.elements[e].id ? this.elements[e].id : "element-" + e, n[t] = {
              value: this.elements[e].innerHTML.trim()
            };
            return n
          },
          getExtensionByName: function (e) {
            var t;
            return this.extensions && this.extensions.length && this.extensions.some(function (n) {
              return n.name === e && (t = n, !0)
            }), t
          },
          addBuiltInExtension: function (t, n) {
            var i, o = this.getExtensionByName(t);
            if (o) return o;
            switch (t) {
              case "anchor":
                i = e.util.extend({}, this.options.anchor, n), o = new e.extensions.anchor(i);
                break;
              case "anchor-preview":
                o = new e.extensions.anchorPreview(this.options.anchorPreview);
                break;
              case "autoLink":
                o = new e.extensions.autoLink;
                break;
              case "fileDragging":
                o = new e.extensions.fileDragging(n);
                break;
              case "fontname":
                o = new e.extensions.fontName(this.options.fontName);
                break;
              case "fontsize":
                o = new e.extensions.fontSize(n);
                break;
              case "keyboardCommands":
                o = new e.extensions.keyboardCommands(this.options.keyboardCommands);
                break;
              case "paste":
                o = new e.extensions.paste(this.options.paste);
                break;
              case "placeholder":
                o = new e.extensions.placeholder(this.options.placeholder);
                break;
              default:
                e.extensions.button.isBuiltInButton(t) && (n ? (i = e.util.defaults({}, n, e.extensions.button.prototype.defaults[t]), o = new e.extensions.button(i)) : o = new e.extensions.button(t))
            }
            return o && this.extensions.push(u(o, t, this)), o
          },
          stopSelectionUpdates: function () {
            this.preventSelectionUpdates = !0
          },
          startSelectionUpdates: function () {
            this.preventSelectionUpdates = !1
          },
          checkSelection: function () {
            var e = this.getExtensionByName("toolbar");
            return e && e.checkState(), this
          },
          queryCommandState: function (e) {
            var t, n = /^full-(.+)$/gi,
              i = null;
            t = n.exec(e), t && (e = t[1]);
            try {
              i = this.options.ownerDocument.queryCommandState(e)
            } catch (e) {
              i = null
            }
            return i
          },
          execAction: function (t, n) {
            var i, o, s = /^full-(.+)$/gi;
             if(t == 'removeFormat'){
                var aa =  this.events.base.exportSelection();
                var ogiThis = this.elements[aa.editableElementIndex];
                   ogiThis.style.lineHeight = '';
                if(ogiThis.children.length > 0){
                   for(var i= 0;i<ogiThis.children.length;i++){
                      ogiThis.children[i].style.lineHeight = '';
                   }
                }
             };
            return i = s.exec(t), i ? (this.saveSelection(), this.selectAllContents(), o = x.call(this, i[1], n), this.restoreSelection()) : o = x.call(this, t, n), "insertunorderedlist" !== t && "insertorderedlist" !== t || e.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement()), this.checkSelection(), o
          },
          getSelectedParentElement: function (t) {
            return void 0 === t && (t = this.options.contentWindow.getSelection().getRangeAt(0)), e.selection.getSelectedParentElement(t)
          },
          selectAllContents: function () {
            var t = e.selection.getSelectionElement(this.options.contentWindow);
            if (t) {
              for (; 1 === t.children.length;) t = t.children[0];
              this.selectElement(t)
            }
          },
          selectElement: function (t) {
            e.selection.selectNode(t, this.options.ownerDocument);
            var n = e.selection.getSelectionElement(this.options.contentWindow);
            n && this.events.focusElement(n)
          },
          getFocusedElement: function () {
            var e;
            return this.elements.some(function (t) {
              return !e && t.getAttribute("data-medium-focused") && (e = t), !!e
            }, this), e
          },
          exportSelection: function () {
            var t = e.selection.getSelectionElement(this.options.contentWindow),
              n = this.elements.indexOf(t),
              i = null;
            return n >= 0 && (i = e.selection.exportSelection(t, this.options.ownerDocument)), null !== i && 0 !== n && (i.editableElementIndex = n), i
          },
          saveSelection: function () {
            this.selectionState = this.exportSelection()
          },
          importSelection: function (t, n) {
            if (t) {
              var i = this.elements[t.editableElementIndex || 0];
              e.selection.importSelection(t, i, this.options.ownerDocument, n)
            }
          },
          restoreSelection: function () {
            this.importSelection(this.selectionState)
          },
          createLink: function (t) {
            var n = e.selection.getSelectionElement(this.options.contentWindow),
              i = {};
            if (this.elements.indexOf(n) !== -1) {
              try {
                if (this.events.disableCustomEvent("editableInput"), t.url && t.url.trim().length > 0) {
                  var o = this.options.contentWindow.getSelection();
                  if (o) {
                    var s, r, a, l, c = o.getRangeAt(0),
                      u = c.commonAncestorContainer;
                    if (3 === c.endContainer.nodeType && 3 !== c.startContainer.nodeType && 0 === c.startOffset && c.startContainer.firstChild === c.endContainer && (u = c.endContainer), r = e.util.getClosestBlockContainer(c.startContainer), a = e.util.getClosestBlockContainer(c.endContainer), 3 !== u.nodeType && 0 !== u.textContent.length && r === a) {
                      var d = r || n,
                        h = this.options.ownerDocument.createDocumentFragment();
                      this.execAction("unlink"), s = this.exportSelection(), h.appendChild(d.cloneNode(!0)), n === d ? e.selection.select(this.options.ownerDocument, d.firstChild, 0, d.lastChild, 3 === d.lastChild.nodeType ? d.lastChild.nodeValue.length : d.lastChild.childNodes.length) : e.selection.select(this.options.ownerDocument, d, 0, d, d.childNodes.length);
                      var m = this.exportSelection();
                      l = e.util.findOrCreateMatchingTextNodes(this.options.ownerDocument, h, {
                        start: s.start - m.start,
                        end: s.end - m.start,
                        editableElementIndex: s.editableElementIndex
                      }), 0 === l.length && (h = this.options.ownerDocument.createDocumentFragment(), h.appendChild(u.cloneNode(!0)), l = [h.firstChild.firstChild, h.firstChild.lastChild]), e.util.createLink(this.options.ownerDocument, l, t.url.trim());
                      var f = (h.firstChild.innerHTML.match(/^\s+/) || [""])[0].length;
                      e.util.insertHTMLCommand(this.options.ownerDocument, h.firstChild.innerHTML.replace(/^\s+/, "")), s.start -= f, s.end -= f, this.importSelection(s)
                    } else this.options.ownerDocument.execCommand("createLink", !1, t.url);
                    this.options.targetBlank || "_blank" === t.target ? e.util.setTargetBlank(e.selection.getSelectionStart(this.options.ownerDocument), t.url) : e.util.removeTargetBlank(e.selection.getSelectionStart(this.options.ownerDocument), t.url), t.buttonClass && e.util.addClassToAnchors(e.selection.getSelectionStart(this.options.ownerDocument), t.buttonClass)
                  }
                }
                if (this.options.targetBlank || "_blank" === t.target || t.buttonClass) {
                  i = this.options.ownerDocument.createEvent("HTMLEvents"), i.initEvent("input", !0, !0, this.options.contentWindow);
                  for (var p = 0; p < this.elements.length; p += 1) this.elements[p].dispatchEvent(i)
                }
              } finally {
                this.events.enableCustomEvent("editableInput")
              }
              this.events.triggerCustomEvent("editableInput", i, n)
            }
          },
          cleanPaste: function (e) {
            this.getExtensionByName("paste").cleanPaste(e)
          },
          pasteHTML: function (e, t) {
            this.getExtensionByName("paste").pasteHTML(e, t)
          },
          setContent: function (e, t) {
            if (t = t || 0, this.elements[t]) {
              var n = this.elements[t];
              n.innerHTML = e, this.events.updateInput(n, {
                target: n,
                currentTarget: n
              })
            }
          }
        }
      }(),
      function () {
        e.prototype.defaults = {
          activeButtonClass: "medium-editor-button-active",
          buttonLabels: !1,
          delay: 0,
          disableReturn: !1,
          disableDoubleReturn: !1,
          disableExtraSpaces: !1,
          disableEditing: !1,
          autoLink: !1,
          elementsContainer: !1,
          contentWindow: window,
          ownerDocument: document,
          targetBlank: !1,
          extensions: {},
          spellcheck: !0
        }
      }(), e.parseVersionString = function (e) {
        var t = e.split("-"),
          n = t[0].split("."),
          i = t.length > 1 ? t[1] : "";
        return {
          major: parseInt(n[0], 10),
          minor: parseInt(n[1], 10),
          revision: parseInt(n[2], 10),
          preRelease: i,
          toString: function () {
            return [n[0], n[1], n[2]].join(".") + (i ? "-" + i : "")
          }
        }
      }, e.version = e.parseVersionString.call(this, {
        version: "5.16.1"
      }.version), e
  }());
