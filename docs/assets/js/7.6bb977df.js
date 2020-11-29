(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{213:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"搭建后端项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建后端项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建后端项目")]),t._v(" "),e("p",[t._v("后端项目基于 "),e("code",[t._v("Java JDK1.8+")]),t._v(" 进行开发，首先前往 "),e("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle网站"),e("OutboundLink")],1),t._v(" 下载系统版本所对应的 "),e("code",[t._v("JDK 8.x")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"项目结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),e("p",[e("strong",[t._v("SBDemo")]),t._v(" 目录结构如下：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("SBDemo\n├─ src\n│  ├─ main\n│  │   ├─ java\n│  │   │    └─ com\n│  │   │        └─ stone\n│  │   │             ├─ base                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目基础类目录")]),t._v("\n│  │   │             ├─ conf                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目配置相关目录")]),t._v("\n│  │   │             ├─ controller            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 控制器存放目录")]),t._v("\n│  │   │             ├─ mapper                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MyBatis 接口文件目录")]),t._v("\n│  │   │             ├─ model                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实体类存放目录")]),t._v("\n│  │   │             ├─ service               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体业务逻辑实现")]),t._v("\n│  │   │             ├─ util                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 工具类存放目录")]),t._v("\n│  │   │             └─ Application           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SpringBoot 启动文件")]),t._v("\n│  │   └─ resource\n│  │        ├─ generator\n│  │        │     └─ generatorConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MyBatis 实体类生成插件配置文件")]),t._v("\n│  │        ├─ mapper                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MyBatis xml 映射文件存放目录")]),t._v("\n│  │        ├─ sql\n│  │        │   ├─ NewFiled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据库表结构更新记录 sql 文件")]),t._v("\n│  │        │   └─ view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据库视图 sql 文件")]),t._v("\n│  │        ├─ application"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("yml                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SpringBoot 核心配置文件")]),t._v("\n│  │        ├─ application"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 generatorConfig.xml 中数据库连接")]),t._v("\n│  │        ├─ banner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SpringBoot 启动显示字体")]),t._v("\n│  │        └─ license"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("word"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Aspose.words 验证文件")]),t._v("\n│  └─ test\n│      └─ java\n│           └─ com\n│               └─ stone\n│                    └─ test                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Junit 测试类所在目录")]),t._v("\n├─ target "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("项目运行后生成"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n├─ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gitignore                                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Git 提交忽略文件")]),t._v("\n├─ pom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml                                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Maven 依赖配置文件")]),t._v("\n└─ README"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n")])])]),e("h2",{attrs:{id:"ide下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ide下载","aria-hidden":"true"}},[t._v("#")]),t._v(" IDE下载")]),t._v(" "),e("p",[t._v("项目的开发离不开 "),e("code",[t._v("IDE")]),t._v(" 软件的帮助， 强烈推荐 "),e("code",[t._v("IntelliJ IDEA")]),t._v("。这份指南是根据 "),e("code",[t._v("IDEA")]),t._v(" 进行讲解的，当然你也可以根据自身情况使用 "),e("code",[t._v("Eclipse")]),t._v(" 或 "),e("code",[t._v("MyEclipse")]),t._v("。毕竟这些都只是开发工具，良好的代码质量还是要看开发人员的。")]),t._v(" "),e("p",[t._v("前往 "),e("a",{attrs:{href:"https://www.jetbrains.com/idea/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA官网"),e("OutboundLink")],1),t._v(" 下载系统版本对应的 "),e("code",[t._v("Ultimate")]),t._v(" 版本并进行安装。")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[e("code",[t._v("Ultimate")]),t._v(" 版本拥有 30 天的免费试用，过期后可以在 "),e("a",{attrs:{href:"http://idea.lanyus.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v(" 进行激活😆。（此方法非正规途径，请勿肆意传播！）")])]),t._v(" "),e("p",[t._v("安装完成后打开 "),e("code",[t._v("IDEA")]),t._v("，初次使用会进行简单的设置，傻瓜式的下一步即可，激活方式选择试用 30 天，到达下面这张图所在页面。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005yqb1Zgy1g0yy9hy9hzj31100qsmyt.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),e("p",[t._v("如果你是首次使用 "),e("code",[t._v("IntelliJ IDEA")]),t._v(" 推荐查看 "),e("a",{attrs:{href:"https://github.com/judasn/IntelliJ-IDEA-Tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v(" 进行学习！")])]),t._v(" "),e("h2",{attrs:{id:"导入项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 导入项目")]),t._v(" "),e("p",[t._v("点击 "),e("code",[t._v("Check out from Version Control")]),t._v(" 下拉框选取 "),e("code",[t._v("Git")]),t._v(" 选项，此时会提示你需要登录 "),e("code",[t._v("GitHub")]),t._v(" 账户，输入你之前注册的用户名及密码。\n登录成功后再次选取 "),e("code",[t._v("Git")]),t._v(" 选项，在第一个下拉框中勾选 "),e("code",[t._v("SBDemo.git")]),t._v("，第二个下拉框选择项目存放的本地路径。如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005yqb1Zgy1g0yz4kwq81j310y0qudif.jpg",alt:""}})]),t._v(" "),e("p",[t._v("设置好点击 Clone 按钮，之后会出现进度条，静静地等待一会就好了😏，千万不要点 Cancel。")]),t._v(" "),e("p",[t._v("进度条结束后点击 Open 按钮，接下来会加载到 IDEA 的主界面。注意右下角会有一个进度条，它正在下载项目所需的 "),e("code",[t._v("Maven")]),t._v(" 依赖。")]),t._v(" "),e("h2",{attrs:{id:"添加插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加插件")]),t._v(" "),e("p",[t._v("点击左侧 Project 按钮展示目录结构，依次选择 "),e("code",[t._v("SBDemo/src/main/java/com.stone/service/impl/")]),t._v(" 中的任一 Java 文件，打开后会提示缺失 "),e("code",[t._v("get/set")]),t._v(" 方法编译时警告。\n其原因是项目使用了 "),e("code",[t._v("Lombok")]),t._v("，可以简化实体类的 "),e("code",[t._v("get/set")]),t._v(" 方法，解决异常的方法就是安装 "),e("code",[t._v("Lombok")]),t._v(" 插件。\nIDEA 插件可以大大的简化开发步骤，接下来讲解一下如何安装吧。")]),t._v(" "),e("p",[t._v("首先点击左上角导航栏中的 "),e("code",[t._v("File")]),t._v(" 选项选择 "),e("code",[t._v("Setting")]),t._v("，再选择 "),e("code",[t._v("Plugins")]),t._v(" 选项：")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),e("p",[t._v("以上为 Windows 操作系统的步骤，如果你是使用 macOS 系统则需要点击 IntelliJ IDEA 后选择 Preferences。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005yqb1Zgy1g0zs1ahsyaj31k812o7at.jpg",alt:""}})]),t._v(" "),e("p",[t._v("主要看右方顶部导航拥有三个选项卡，分别为 "),e("code",[t._v("Marketplace")]),t._v("、 "),e("code",[t._v("Installed")]),t._v("、 "),e("code",[t._v("Updates")]),t._v("。当前处于 "),e("code",[t._v("Installed")]),t._v("，会展示本机所安装的所有插件。安装 "),e("code",[t._v("Lombok")]),t._v(" 需要点击导航栏的 "),e("code",[t._v("Marketplace")]),t._v(" 选项卡，在搜索框内输入 Lombok：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005yqb1Zgy1g0zsy6cb7xj31k812o0zw.jpg",alt:""}})]),t._v(" "),e("p",[t._v("选取 "),e("code",[t._v("Lombok Plugin")]),t._v(" 点击 "),e("code",[t._v("Install")]),t._v("，之后会提示你重启 IDEA，确定重启后再次打开之前报错的 java 文件会发现异常消除了。另外再推荐一款插件 "),e("code",[t._v("Mybatis plugin")]),t._v("，可以在 mapper 接口中和 mapper 的 xml 文件中来回跳转，安装步骤和上述一致。")]),t._v(" "),e("h2",{attrs:{id:"运行项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行项目")]),t._v(" "),e("p",[t._v("接下来就可以运行项目了，首先看右上角导航栏，如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005yqb1Zgy1g0zutgzamkj32lc1gqtk7.jpg",alt:""}})]),t._v(" "),e("p",[t._v("选择正常模式启动或者 Debug 模式启动，项目启动成功后会有提示。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005yqb1Zgy1g0zuz9uy3nj32lc1gqkev.jpg",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("SpringBoot")]),t._v(" 启动程序可能不会自动配置，这时候就需要我们手动进行配置了。点击顶部导航栏 "),e("code",[t._v("Add Configuration...")]),t._v(" 按钮，在弹出的窗口中点击 "),e("code",[t._v("Templates")]),t._v(" 展开并找到 "),e("code",[t._v("SpringBoot")]),t._v("。单击进入后选择 "),e("code",[t._v("Main class")]),t._v(" 并选中项目中的 "),e("code",[t._v("Application")]),t._v(" 文件，如图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005yqb1Zly1g100pmltioj31ne16cq9r.jpg",alt:""}})]),t._v(" "),e("p",[t._v("设置完成后点击窗口左上角的 "),e("code",[t._v("+")]),t._v(" 号按钮，找到 "),e("code",[t._v("SpringBoot")]),t._v(" 并单击添加。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005yqb1Zly1g100z8f5s0j31ni168wjx.jpg",alt:""}})]),t._v(" "),e("p",[t._v("点击 OK 后就可以运行项目啦。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),e("p",[t._v("不想每次更改都重新启动服务？将最后一张图 "),e("code",[t._v("On 'Update' action：")]),t._v(" 和 "),e("code",[t._v("On frame deactivation：")]),t._v(" 设置为 "),e("code",[t._v("Update classes and resources")]),t._v(" 就可以在修改方法后自动编译了。"),e("strong",[t._v("仅限于对当前方法修改，如果是新增方法还是需要重启的。")])])])])},[],!1,null,null,null);a.default=n.exports}}]);