🧠 hugo.toml：大脑。决定网站叫什么名字、有哪些导航、用哪个主题。

📝 content：血肉。你写的所有产品介绍、文字内容（.md 文件）全在这里面。

🎨 themes：衣服。你下载的 hugo-universal 主题就在这，它决定了网站的基本长相。

✂️ layouts：裁缝铺。当你觉得衣服不好看（比如想去掉难看的页脚），你可以在这里写新代码覆盖掉主题里的默认设置。

🖼️ static：仓库。网站用到的图片（img 文件夹）、视频、PDF 文档都放这。

🗂️ data：数据表。主题自带的一些轮播图配置、客户评价配置都在这里（现在暂时没用）。

🏗️ public：成品区。你运行 hugo 后，最终生成的网页文件全在这，不用管它。

你以后要增加供应商，该怎么做？
假设有个工厂老板找你入驻，你只需要 3 个步骤（完全不需要写 C 语言，只要复制粘贴）：

放图：把他的公司照片和弹簧照片存到 static/img/ 里。

建主页：在 compression-springs 文件夹里复制一份 supplier-a.md，改名成 supplier-xxx.md，把里面的公司名、成立年份、产品范围改掉。

挂链接：打开分类页 _index.md，复制一段 <div style="border:..."> 代码，把标题改成新工厂名字，链接改成 href="/springs/compression-springs/supplier-xxx/"。