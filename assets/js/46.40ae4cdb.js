(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{368:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1.安装")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("该安装环境采用 Debain 11，其他系统可参照"),t("a",{attrs:{href:"https://www.postgresql.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("创建文件存储库配置")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo \"deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main\" > /etc/apt/sources.list.d/pgdg.list'")]),s._v("\n")])])]),t("p",[s._v("导入存储库签名密钥")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--quiet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" - https://www.postgresql.org/media/keys/ACCC4CF8.asc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n")])])]),t("p",[s._v("更新软件包列表")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n")])])]),t("p",[s._v("安装默认默认版本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])])]),t("p",[s._v("安装特定版本（-后面为你想要的版本）")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql-14 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])])]),t("h2",{attrs:{id:"_2-修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改密码"}},[s._v("#")]),s._v(" 2.修改密码")]),s._v(" "),t("p",[s._v("Postgresql 会默认创建一个 postgres 用户，切换用户")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" postgres\n")])])]),t("p",[s._v("然后就可以使用psql命令交互工具使用")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("psql\n")])])]),t("p",[s._v("修改密码")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("alter user postgres with password "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"_3-设置外网访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置外网访问"}},[s._v("#")]),s._v(" 3.设置外网访问")]),s._v(" "),t("p",[s._v("如果不清楚配置文件路径存放的可以查看进程")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" postgresql\n")])])]),t("p",[s._v("结果如下")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("postgres    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8451")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":44 ?        00:00:00 /usr/lib/postgresql/14/bin/postgres "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" /var/lib/postgresql/14/main "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" \t\t"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("config_file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/postgresql/14/main/postgresql.conf\nroot        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9043")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8507")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":38 pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" postgresql\n")])])]),t("p",[s._v("修改配置文件postgresql.conf，将listen_addresses的值改为*，记得去掉前面的#注释，同时该文件有pg_hba.conf的文件路径，这个文件也要修改")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/postgresql/14/main/postgresql.conf\n")])])]),t("p",[s._v("文件部分内容如下")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------------------------------------------------------------------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FILE LOCATIONS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------------------------------------------------------------------------------")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The default values of these variables are driven from the -D command-line")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# option or PGDATA environment variable, represented here as ConfigDir.")]),s._v("\n\ndata_directory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/lib/postgresql/14/main'")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# use data in another directory")]),s._v("\n\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (change requires restart)")]),s._v("\nhba_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/etc/postgresql/14/main/pg_hba.conf'")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# host-based authentication file")]),s._v("\n\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (change requires restart)")]),s._v("\nident_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/etc/postgresql/14/main/pg_ident.conf'")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ident configuration file")]),s._v("\n\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (change requires restart)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If external_pid_file is not explicitly set, no extra PID file is written.")]),s._v("\nexternal_pid_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/run/postgresql/14-main.pid'")]),s._v("\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# write an extra PID file")]),s._v("\n\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (change requires restart)")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------------------------------------------------------------------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CONNECTIONS AND AUTHENTICATION")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------------------------------------------------------------------------------")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - Connection Settings -")]),s._v("\n\nlisten_addresses "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v("  \t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# what IP address(es) to listen on;")]),s._v("\n\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# comma-separated list of addresses;")]),s._v("\n\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# defaults to 'localhost'; use '*' for all")]),s._v("\n\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (change requires restart)")]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v("\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (change requires restart)")]),s._v("\nmax_connections "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (change requires restart)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#superuser_reserved_connections = 3\t# (change requires restart)")]),s._v("\nunix_socket_directories "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/run/postgresql'")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# comma-separated list of directories")]),s._v("\n")])])]),t("p",[s._v("修改配置文件pg_hba.conf，直接在文件末尾添加以下配置项，可根据需要自己调整对应值")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" all all "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0 md5\n")])])]),t("p",[s._v("重启 Postgresql")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl restart postgresql.service\n")])])]),t("h2",{attrs:{id:"_4-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用命令"}},[s._v("#")]),s._v(" 4. 常用命令")]),s._v(" "),t("p",[s._v("修改用户密码")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("alter user postgres with password "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("创建普通用户")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("create user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" encrypted password "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("创建超级用户")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("create user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" superuser encrypted password "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("将超级用户改为普通用户")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("alter user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" nosuperuser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("普通用户改为超级用户")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("alter user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" superuser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("设置不允许/允许其登录")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("alter user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" nologin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nalter user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" login"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);