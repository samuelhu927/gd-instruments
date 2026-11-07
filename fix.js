const fs = require('fs');
const path = require('path');

// 1. 修复 hugo.toml 里的 Logo 问题，并强制关闭相关模块
let hugoToml = fs.readFileSync('hugo.toml', 'utf8');
if (!hugoToml.includes('disabled_logo')) {
  hugoToml = hugoToml.replace('[params]', '[params]\n  disabled_logo = true\n  logo_text = "SPRING SHOWCASE"\n  date_format = "January 2, 2006"');
}
fs.writeFileSync('hugo.toml', hugoToml, 'utf8');

// 2. 强行删除模板自带的博客示例（告别底部的 Recent Posts）
const blogPath = path.join(__dirname, 'content', 'blog');
if (fs.existsSync(blogPath)) {
  fs.rmSync(blogPath, { recursive: true, force: true });
  console.log('✅ 已删除多余的博客示例文件夹');
}

// 3. 给四个分类页面手写 HTML 卡片排版（告别空白）
const categoryTemplates = {
  'content/springs/compression-springs/_index.md': `---
title: "Compression Springs"
---
Custom helical compression springs from Chinese manufacturers.

<div class="row" style="margin-top: 30px;">
  <div class="col-md-4">
    <div style="border: 1px solid #eee; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
      <h3 style="margin-top:0;">Heavy-Duty Spring</h3>
      <p style="color: #666;">50CrVA / 65Mn<br>Wire: 3 – 50 mm</p>
      <a href="/springs/compression-springs/heavy-duty/" class="btn btn-template-main">View Details</a>
    </div>
  </div>
</div>`,
  'content/springs/extension-springs/_index.md': `---
title: "Extension Springs"
---
Custom extension springs with hook, loop, or German hook ends.

<div class="row" style="margin-top: 30px;">
  <div class="col-md-4">
    <div style="border: 1px solid #eee; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
      <h3 style="margin-top:0;">OEM Extension Spring</h3>
      <p style="color: #666;">Carbon / Stainless Steel<br>Wire: 0.1 – 20 mm</p>
      <a href="/springs/extension-springs/oem-extension/" class="btn btn-template-main">View Details</a>
    </div>
  </div>
</div>`,
  'content/springs/torsion-springs/_index.md': `---
title: "Torsion Springs"
---
Single and double-bodied torsion springs with custom end configurations.

<div class="row" style="margin-top: 30px;">
  <div class="col-md-4">
    <div style="border: 1px solid #eee; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
      <h3 style="margin-top:0;">Double Torsion Spring</h3>
      <p style="color: #666;">Stainless Steel 304/316<br>Wire: 0.1 – 18 mm</p>
      <a href="/springs/torsion-springs/double-torsion/" class="btn btn-template-main">View Details</a>
    </div>
  </div>
</div>`,
  'content/springs/disc-springs/_index.md': `---
title: "Disc Springs"
---
Belleville washers and disc springs for high-load applications.

<div class="row" style="margin-top: 30px;">
  <div class="col-md-12">
    <p>Products coming soon. Please contact us for specific requirements.</p>
    <a href="/contact/" class="btn btn-template-main">Inquire Now</a>
  </div>
</div>`
};

for (const [filePath, content] of Object.entries(categoryTemplates)) {
  fs.writeFileSync(path.join(__dirname, filePath), content, 'utf8');
  console.log('✅ 已修复分类页排版: ' + filePath);
}

console.log('\n🎉 修复完成！请刷新浏览器查看。');