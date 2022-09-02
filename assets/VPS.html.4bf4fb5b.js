import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as l,a as n,b as a,e as s,d as i,r as c}from"./app.b9a085a9.js";const r={},d=n("h2",{id:"\u73AF\u5883\u90E8\u7F72",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u73AF\u5883\u90E8\u7F72","aria-hidden":"true"},"#"),s(" \u73AF\u5883\u90E8\u7F72")],-1),p=n("p",null,"\u90E8\u7F72\u5E94\u7528\u524D\uFF0C\u4E3A\u670D\u52A1\u5668\u914D\u7F6E\u597D\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u4EE5\u4FBF\u8282\u7701\u90E8\u7F72\u65F6\u95F4\u3002\u4E3B\u6D41\u7684\u524D\u7AEF\u5305\u7BA1\u7406\u5DE5\u5177\u6709 npm\u3001yarn\u3001pnpm\u3001\u4EE5\u53CA\u56FD\u5185\u7684\u955C\u50CF cnpm\u3001tyarn \u7B49\uFF0C\u8FD9\u4E9B\u5305\u7BA1\u7406\u5668\u90FD\u662F\u57FA\u4E8E nodejs\u3002",-1),u=n("h3",{id:"\u5305\u7BA1\u7406\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5305\u7BA1\u7406\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u5305\u7BA1\u7406\u5B89\u88C5")],-1),m=s("\u901A\u8FC7\u96C6\u6210\u4E86 npm \u7684 "),h={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},v=s("Node.js"),b=s(" \u6765\u5B89\u88C5 npm\uFF0C\u7136\u540E\u6267\u884C npm i \u547D\u4EE4\u5B89\u88C5\u5176\u4ED6\u3002"),_=i(`<p>\u5168\u5C40\u5B89\u88C5 yarn \u662F <code>npm i yarn -g</code>\uFF0Cpnpm \u662F <code>npm i pnpm -g</code>\u3002\u5982\u679C\u4E0D\u60F3\u5168\u5C40\u5B89\u88C5\uFF0C\u5219\u53BB\u9664 <code>-g</code>\u3002</p><h3 id="\u5305\u7BA1\u7406\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5305\u7BA1\u7406\u6E90" aria-hidden="true">#</a> \u5305\u7BA1\u7406\u6E90</h3><p>\u5305\u7BA1\u7406\u6E90\u7684\u4FEE\u6539\u547D\u4EE4\u7C7B\u4F3C\uFF0C\u5C06\u4E0B\u65B9\u7684 npm \u66FF\u6362 yarn \u6216 pnpm \u5373\u53EF\u4FEE\u6539\u5305\u7BA1\u7406\u6E90\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u6E90</span>
<span class="token function">npm</span> config get registry
<span class="token comment">#\u66F4\u6362\u56FD\u5185\u6E90</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
<span class="token comment">#\u6362\u56DE\u9ED8\u8BA4\u6E90</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72\u5305" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5305" aria-hidden="true">#</a> \u90E8\u7F72\u5305</h3><p>npm\u3001yarn \u548C pnpm \u7684\u5305\u5B89\u88C5\u53CA\u7BA1\u7406\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5168\u5C40\u5B89\u88C5</span>
<span class="token function">npm</span> i \u5305 <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> global <span class="token function">add</span> \u5305
<span class="token function">pnpm</span> <span class="token function">add</span> \u5305 <span class="token parameter variable">-g</span>

<span class="token comment">#\u79FB\u9664\u5168\u5C40\u5305</span>
<span class="token function">pnpm</span> remove \u5305 <span class="token parameter variable">--global</span>
<span class="token comment">#\u66F4\u65B0\u5168\u5C40\u5305</span>
<span class="token function">pnpm</span> upgrade \u5305 <span class="token parameter variable">--global</span>

<span class="token comment">#\u5347\u7EA7\u5F53\u524D\u76EE\u5F55\u7684\u4F9D\u8D56\u4EE5\u786E\u4FDD\u4F60\u7684\u9879\u76EE\u53EA\u5305\u542B\u5355\u4E2A\u7248\u672C\u7684\u76F8\u5173\u5305</span>
<span class="token comment">#\u672C\u65B9\u6CD5\u80FD\u89E3\u51B3\u5927\u90E8\u5206\u7684\u90E8\u7F72\u62A5\u9519</span>
<span class="token function">npm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> update
<span class="token function">yarn</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> upgrade
<span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F51\u7AD9\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7AD9\u5B57\u4F53" aria-hidden="true">#</a> \u7F51\u7AD9\u5B57\u4F53</h2><p>\u7F51\u7AD9\u4E3A\u4E86\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u5E76\u4FDD\u6301\u8BBE\u8BA1\u7684\u4E00\u81F4\u6027\uFF0C\u901A\u5E38\u4F1A\u9009\u9ED8\u8BA4\u5B57\u4F53\u3002\u8FD9\u5BFC\u81F4\u7F51\u7AD9\u8BBE\u8BA1\u96BE\u4EE5\u7A81\u51FA\u91CD\u70B9\u3002\u9488\u5BF9\u8FD9\u70B9\uFF0C\u6211\u901A\u5E38\u4F1A\u4FEE\u6539\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u5B57\u4F53\uFF0C\u5C06\u5176\u4ECE\u9ED8\u8BA4\u5B57\u4F53\u6539\u4E3A <code>\u601D\u6E90\u9ED1\u4F53-\u7C97</code>\u3002</p>`,9),f=s("\u8FDB\u5165 "),k={href:"https://www.iconfont.cn/webfont",target:"_blank",rel:"noopener noreferrer"},g=s("iconfont\u2011webfont"),w=s("\uFF0C\u8F93\u5165\u5BFC\u822A\u680F\u5185\u6240\u6709\u6587\u5B57\uFF0C\u5E76\u8BBE\u7F6E\u6240\u9700\u5B57\u4F53\u3002"),x=n("li",null,"\u70B9\u51FB\u300C\u751F\u6210\u5B57\u4F53\u300D\u540E\uFF0C\u5728\u9009\u4E2D\u5B57\u4F53\u7684\u4E0B\u65B9\uFF0C\u70B9\u51FB\u300C\u672C\u5730\u4E0B\u8F7D\u300D\u3002",-1),y=n("li",null,"\u5C06\u5B57\u4F53\u5305\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u4FEE\u6539\u65B0\u5B57\u4F53\u7684\u4F4D\u7F6E\u53C2\u6570\u3002",-1),S=n("li",null,[s("\u5728\u5BFC\u822A\u680F\u7684 "),n("code",null,"class"),s(" \u5C5E\u6027\u4E2D\u6DFB\u52A0 "),n("code",null,"web-font"),s("\u3002")],-1),P=n("h2",{id:"\u7C73\u62D3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7C73\u62D3","aria-hidden":"true"},"#"),s(" \u7C73\u62D3")],-1),q=s("\u540E\u53F0\u5FD8\u8BB0\u5BC6\u7801\uFF0C\u4F7F\u7528 "),L={href:"https://www.metinfo.cn/download/54.html",target:"_blank",rel:"noopener noreferrer"},N=s("Metinfo \u7C73\u62D3\u91CD\u7F6E\u5DE5\u5177"),$=s("\u3002"),V=n("li",null,"metinfo \u65B0\u7248\u9759\u6001\u9875\u4F1A\u5220\u9664 index.html\uFF0C\u540E\u7EED\u90FD\u6539\u7528 index.php\u3002",-1),j=i(`<h2 id="\u670D\u52A1\u5668-ecs" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668-ecs" aria-hidden="true">#</a> \u670D\u52A1\u5668 ECS</h2><h3 id="\u7CFB\u7EDF\u4FEE\u6B63" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u4FEE\u6B63" aria-hidden="true">#</a> \u7CFB\u7EDF\u4FEE\u6B63</h3><p>\u670D\u52A1\u5668\u4EE5 centos \u4E3A\u4E3B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7CFB\u7EDF\u5347\u7EA7\uFF0C\u5927\u7248\u672C\u66F4\u65B0\u540E\u91CD\u542F\u670D\u52A1\u5668</span>
yum update <span class="token parameter variable">-y</span>

<span class="token function">sudo</span> dnf makecache <span class="token comment">#\u66F4\u65B0DNF\u5305\u5E93</span>
<span class="token function">sudo</span> dnf check-update <span class="token comment">#\u68C0\u67E5\u66F4\u65B0</span>
<span class="token function">sudo</span> dnf update <span class="token comment">#\u66F4\u65B0\u6240\u6709\u7684\u8F6F\u4EF6\u5305</span>

<span class="token comment"># \u65B0\u5EFA\u7528\u6237\uFF0C\u975E root \u6743\u9650</span>
adduser xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),B={id:"\u7F51\u7AD9\u91CD\u5B9A\u5411",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#\u7F51\u7AD9\u91CD\u5B9A\u5411","aria-hidden":"true"},"#",-1),E=s(),H={href:"https://www.jb51.net/article/146957.htm",target:"_blank",rel:"noopener noreferrer"},I=s("\u7F51\u7AD9\u91CD\u5B9A\u5411"),D=i(`<p>\u66F4\u6539 nginx \u914D\u7F6E\u540E\uFF0Cnginx \u91CD\u8F7D\u914D\u7F6E\u540E\u5B9E\u73B0\u7F51\u7AD9\u91CD\u5B9A\u5411\u3002<code>$1</code> \u8868\u793A\u7B2C\u4E00\u4E2A <code>()</code> \u5185\u7684\u6B63\u5219\u5339\u914D\u5185\u5BB9\uFF0C<code>$2</code> \u4E3A\u7B2C\u4E8C\u4E2A\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment">#\u9690\u6027\u94FE\u63A5\u8DF3\u8F6C</span>
location /xx1 {proxy_pass &lt;https://xxx.com/;&gt;}

<span class="token comment">#404 \u524D\uFF0C\u5C06\u65E7\u6587\u7AE0\u94FE\u63A5\u683C\u5F0F\u8F6C\u4E3A\u65B0\u7684\uFF0C\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84</span>
location ^~ /p{
    rewrite ^/p/(.*)$  https://newzone.top/_posts/$1.html;
}

<span class="token comment"># huginn \u8BBE\u7F6E\u4E2D location \u6DFB\u52A0 301 \u5B9A\u5411\uFF0C\u517C\u5BB9\u8001\u8DEF\u5F84\u94FE\u63A5</span>
<span class="token key attr-name">if ( $request_uri</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;/users/1/web_requests/21/guoke.xml&quot; ) {</span>
rewrite ^ http://xxx.com/users/1/web_requests/19/guoke.xml permanent;
}

<span class="token comment">#\u53EA\u5339\u914D\u4E3B\u9875\uFF0C\u5C06\u4E3B\u9875\u8DF3\u8F6C\u4E3A\u5176\u4E2D\u4E00\u4E2A\u5B50\u9875\u9762</span>
<span class="token key attr-name">location</span> <span class="token punctuation">=</span> <span class="token value attr-value">/ {</span>
 rewrite https://xxx.com/ permanent;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5168\u65B0\u5B89\u88C5\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u5168\u65B0\u5B89\u88C5\u670D\u52A1\u5668" aria-hidden="true">#</a> \u5168\u65B0\u5B89\u88C5\u670D\u52A1\u5668</h3>`,3),T=s("\u5B89\u88C5 "),M={href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"},R=s("\u5B9D\u5854\u9762\u677F"),U=s("\u3002"),z=i(`<li><p>\u5220\u9664\u963F\u91CC\u4E91\u4E3B\u673A\u76D1\u63A7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> aegis stop  <span class="token comment">#\u505C\u6B62\u670D\u52A1</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--del</span> aegis  <span class="token comment"># \u5220\u9664\u670D\u52A1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),F=s("\u914D\u7F6E "),A={href:"https://www.bt.cn/bbs/thread-2897-1-1.html",target:"_blank",rel:"noopener noreferrer"},G=s("\u963F\u91CC\u4E91\u7AEF\u53E3\u5F00\u653E"),J=s("\uFF0C\u5BFC\u5165\u5B89\u5168\u89C4\u5219\u3002"),K=i("<li><p>\u5B9D\u5854\u4E0A\u4FEE\u6539\u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\uFF0C\u5E76\u4FEE\u6539\u767B\u5F55 22 \u7684\u9ED8\u8BA4 SSH \u7AEF\u53E3\u3002</p></li><li><p>\u7F51\u7AD9-\u6DFB\u52A0\u7AD9\u70B9\uFF0C\u5C06\u7AD9\u70B9\u6839\u76EE\u5F55\u653E\u5728 /www/wwwroot/xxx\uFF0C\u540C\u65F6\u65B0\u5EFA\u6570\u636E\u5E93\u3002</p></li><li><p>\u4E0A\u4F20\u5168\u7AD9\u6587\u4EF6\u5E76\u89E3\u538B\uFF0C\u7136\u540E\u6309\u7167\u5B89\u88C5\u63D0\u793A\u91CD\u65B0\u5B89\u88C5\u4E00\u6B21\uFF0C\u6700\u540E\u5BFC\u5165\u5907\u4EFD\u6570\u636E\u5E93\u3002</p></li><li><p>404.html \u8D77\u6548\uFF0C\u5B9D\u5854\u7F51\u7AD9\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5220\u9664 <code>error_page 404 /404.html;</code> \u4E2D\u7684 <code>#</code>\u3002</p></li><li><p>SSL \u8BC1\u4E66\u8BBE\u7F6E\uFF0C\u5F00\u542F\u5F3A\u5236 HTTPS\uFF1BPHP \u7248\u672C\uFF1B301 \u91CD\u5B9A\u5411\uFF1B\u6DFB\u52A0\u4F2A\u9759\u6001\u8BBE\u7F6E\uFF08metinfo \u6216\u5176\u4ED6\u7F51\u7AD9\u540E\u53F0\u6709\u4EE3\u7801\uFF09\u3002\u5982\u679C 301 \u8BBE\u7F6E\u5931\u8D25\uFF0C\u76F4\u63A5\u5728\u300C\u4F2A\u9759\u6001\u300D\u914D\u7F6E\u4E2D\uFF0C\u653E\u5165\u8DF3\u8F6C\u4EE3\u7801\u3002</p></li>",5),O={href:"https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=3117",target:"_blank",rel:"noopener noreferrer"},Q=s("ECS \u5B9D\u5854\u8BBE\u7F6E\u4F18\u5316"),W=n("ul",null,[n("li",null,"\u6DFB\u52A0\u8BA1\u5212\u4EFB\u52A1\uFF0C\u5B9A\u671F\u91CA\u653E\u5185\u5B58\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u6BCF\u5929\u91CA\u653E\u4E00\u6B21\uFF0C\u6267\u884C\u65F6\u673A\u4E3A\u534A\u591C\uFF0C\u5982\uFF1A04:00\u3002"),n("li",null,"\u6253\u5F00 Linux \u5DE5\u5177\u7BB1\u6DFB\u52A0 Swap\u3002Swap \u63A8\u8350\u4E0E\u7269\u7406\u5185\u5B58\u76F8\u540C\u3002"),n("li",null,"\u5B89\u88C5 PHP \u7F13\u5B58\u6269\u5C55\uFF0C\u5C3D\u91CF\u4F7F\u7528\u66F4\u9AD8\u7684 PHP \u7248\u672C\uFF0C\u53E6\u5916\u5B89\u88C5 opcache(\u811A\u672C\u7F13\u5B58)\u3001redis(\u5185\u5BB9\u7F13\u5B58)\u3001imagemagick\u3001fileinfo\u3001exif\u3002"),n("li",null,[s("Redis \u4F18\u5316\uFF0C\u5728/etc/sysctl.conf \u4E2D\u6DFB\u52A0 "),n("code",null,"net.core.somaxconn = 2048"),s("\uFF0C\u7136\u540E\u7EC8\u7AEF\u8FD0\u884C "),n("code",null,"sysctl -p"),s("\u3002")])],-1),X=n("li",null,[n("p",null,"\u9632\u706B\u5899\u767D\u540D\u5355\uFF08\u81EA\u5B9A\u4E49\uFF09"),n("ul",null,[n("li",null,[s("\u6DFB\u52A0 url \u89C4\u5219 "),n("code",null,"^/rss.php"),s(" \u5230\u9632\u706B\u5899 URL \u767D\u540D\u5355\uFF0C\u9632\u6B62 rss \u670D\u52A1\u88AB\u5C4F\u853D\u3002")])])],-1),Y=i(`<h3 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h3><h4 id="cpu-100" tabindex="-1"><a class="header-anchor" href="#cpu-100" aria-hidden="true">#</a> CPU 100%</h4><p>\u5F53\u670D\u52A1\u5668 cpu \u6216\u5185\u5B58\u7A81\u7136\u98D9\u5347 100% \u65F6\uFF0C\u4F9D\u6B21\u6392\u9664\u5F53\u524D\u8FD0\u884C\u8FDB\u7A0B\uFF0C\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u66F4\u65B0\u4E86\u63D2\u4EF6\u3001\u5E94\u7528\u6216\u670D\u52A1\u3002</p><p>\u5982\u679C\u627E\u4E0D\u5230\u539F\u56E0\uFF0C\u53EF\u4EE5\u4E34\u65F6\u8BBE\u7F6E\u5B9A\u671F\u4EFB\u52A1\u3002\u6BCF\u9694 3 \u5C0F\u65F6\u91CD\u542F\u4E00\u6B21 nginx/apache\u3002\u6709\u65F6\u91CD\u542F\u4E0D\u6B63\u5E38\uFF0C\u56E0\u6B64\u91CD\u542F\u547D\u4EE4\u540E 10 \u79D2\uFF0C\u518D\u542F\u52A8\u4E00\u6B21 nginx/apache\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/init.d/nginx restart
<span class="token function">sleep</span> 10s
/etc/init.d/nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ssl-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#ssl-\u8BC1\u4E66" aria-hidden="true">#</a> SSL \u8BC1\u4E66</h4><p>\u5982\u679C SSL \u8BC1\u4E66\u90E8\u7F72\u62A5\u9519\uFF0C\u53EF\u4EE5\u6309\u81EA\u52A8\u751F\u6210\u6765\u90E8\u7F72\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BC1\u4E66\u8BBE\u7F6E\u4FEE\u6539 /www/server/panel/vhost/nginx</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$server_port</span> <span class="token operator">!</span>~ <span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> <span class="token operator">&lt;</span>https://www.xxx.com<span class="token variable">$1</span><span class="token operator">&gt;</span> permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#\u8BC1\u4E66\u4FEE\u6539</span>
/www/server/panel/vhost/cert/
<span class="token comment">#\u8BC1\u4E66\u4F4D\u7F6E</span>
/www/server/panel/vhost/ssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6570\u636E\u5E93\u51FA\u9519\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u51FA\u9519\u89E3\u51B3" aria-hidden="true">#</a> \u6570\u636E\u5E93\u51FA\u9519\u89E3\u51B3</h4><ol><li>mysql \u914D\u7F6E\u4E2D <code>mysqld</code> \u5728\u4E00\u884C\u6DFB\u52A0 <code>innodb_force_recovery=4</code>\uFF0C\u6570\u503C\u53EF\u4EE5 0-6\uFF0C\u6570\u503C\u8D8A\u5927\u5BF9\u6570\u636E\u5E93\u635F\u5BB3\u8D8A\u5927\u3002\u6B63\u5E38\u542F\u52A8 mysql \u540E\uFF0C\u5907\u4EFD\u6240\u6709\u6570\u636E\u5E93\u548C\u7BA1\u7406\u5BC6\u7801\uFF0C\u5E76\u4E0B\u8F7D\u5230\u672C\u5730\u3002</li><li>\u5728\u5B9D\u5854\u7684\u300C\u6570\u636E\u5E93\u300D\u4E2D\u5220\u9664\u6240\u6709\u6570\u636E\u5E93\uFF0C\u5378\u8F7D\u5E76\u91CD\u88C5 mysql\u3002</li><li>\u91CD\u65B0\u5BFC\u5165\u6570\u636E\u5E93\u3002</li></ol><h4 id="piwik-\u624B\u52A8\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#piwik-\u624B\u52A8\u5347\u7EA7" aria-hidden="true">#</a> piwik \u624B\u52A8\u5347\u7EA7</h4><p>Matomo/Piwik \u662F\u514D\u8D39\u7684\u7EDF\u8BA1\u670D\u52A1\u3002\u6709\u65F6\u65E0\u6CD5\u4F7F\u7528\u81EA\u52A8\u5B89\u88C5\u5305\uFF0C\u9700\u8981\u624B\u52A8\u5347\u7EA7\u3002</p><ol><li>\u4E0B\u8F7D\u6700\u65B0\u7248\u5E94\u7528\uFF0C\u5E76\u89E3\u538B\u5230\u670D\u52A1\u5668\u3002</li><li>\u5C06\u539F\u76EE\u5F55\u4E2D\u7684 config/config.ini.php \u7C98\u8D34\u5230\u65B0\u7248\u4E2D\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u66F4\u65B0\u6570\u636E\u5E93\u8FDB\u884C\u5347\u7EA7\u4E86\u3002</li><li>\u8FDB\u5165\u300C\u8BBE\u7F6E - \u7CFB\u7EDF - \u5730\u7406\u4F4D\u7F6E\u300D\uFF0C\u62D6\u5230\u9875\u9762\u5E95\u90E8\uFF0C\u6309\u9875\u9762\u8981\u6C42\u4E0B\u8F7D DBIP \u5305\uFF0C\u5E76\u91CD\u547D\u540D\u4FDD\u5B58\u4E3A <code>/www/wwwroot/piwik/misc/DBIP-City.mmdb</code>\u3002</li></ol><hr class="footnotes-sep">`,14),Z={class:"footnotes"},nn={class:"footnotes-list"},sn={id:"footnote1",class:"footnote-item"},en={href:"https://www.w3cschool.cn/nginxsysc/nginxsysc-rewrite.html",target:"_blank",rel:"noopener noreferrer"},an=s("Nginx rewrite \u8BBE\u7F6E"),tn=s(),on=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function ln(cn,rn){const e=c("ExternalLinkIcon");return o(),l("div",null,[d,p,u,n("p",null,[m,n("a",h,[v,a(e)]),b]),_,n("ol",null,[n("li",null,[f,n("a",k,[g,a(e)]),w]),x,y,S]),P,n("ul",null,[n("li",null,[q,n("a",L,[N,a(e)]),$]),V]),j,n("h3",B,[C,E,n("a",H,[I,a(e)])]),D,n("ol",null,[n("li",null,[n("p",null,[T,n("a",M,[R,a(e)]),U])]),z,n("li",null,[n("p",null,[F,n("a",A,[G,a(e)]),J])]),K,n("li",null,[n("p",null,[n("a",O,[Q,a(e)])]),W]),X]),Y,n("section",Z,[n("ol",nn,[n("li",sn,[n("p",null,[n("a",en,[an,a(e)]),tn,on])])])])])}var un=t(r,[["render",ln],["__file","VPS.html.vue"]]);export{un as default};
