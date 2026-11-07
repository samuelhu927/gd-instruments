const fs = require('fs');
const path = require('path');

const cmsDir = path.join(__dirname, 'static', 'admin');
fs.mkdirSync(cmsDir, { recursive: true });

// 1. 生成后台入口 index.html
const indexHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spring Showcase CMS</title>
  <link href="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.css" rel="stylesheet" />
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>`;

// 2. 生成后台配置文件 config.yml
const configYml = `backend:
  name: test-repo
  local_backend: true

media_folder: "static/img/uploads"
public_folder: "/img/uploads"

collections:
  - name: "products"
    label: "弹簧产品"
    folder: "content/springs"
    create: true
    slug: "{{slug}}"
    nested:
      depth: 2
    fields:
      - {label: "产品名称", name: "title", widget: "string"}
      - {label: "所属分类", name: "categories", widget: "list", required: false}
      - {label: "生产厂家", name: "manufacturer", widget: "string", required: false}
      - {label: "材质", name: "material", widget: "string", required: false}
      - {label: "线径范围", name: "wire_range", widget: "string", required: false}
      - {label: "应用场景", name: "application", widget: "string", required: false}
      - {label: "产品图片", name: "image", widget: "image", required: false}
      - {label: "产品描述", name: "body", widget: "markdown"}

  - name: "pages"
    label: "单页设置"
    files:
      - label: "拉力试验机 (Testing Equipment)"
        name: "testing"
        file: "content/spring-testing/_index.md"
        fields:
          - {label: "标题", name: "title", widget: "string"}
          - {label: "内容", name: "body", widget: "markdown"}
      - label: "免费陈列 (Free Listing)"
        name: "free-listing"
        file: "content/free-listing/_index.md"
        fields:
          - {label: "标题", name: "title", widget: "string"}
          - {label: "内容", name: "body", widget: "markdown"}
`;

fs.writeFileSync(path.join(cmsDir, 'index.html'), indexHtml, 'utf8');
fs.writeFileSync(path.join(cmsDir, 'config.yml'), configYml, 'utf8');

console.log('✅ CMS 后台文件已生成 (static/admin/index.html 和 config.yml)');