const fs = require('fs');
const path = require('path');

const files = {
  'hugo.toml': `baseurl = "https://made-in-gd.com/"
title = "Spring Products Showcase | Custom Spring Suppliers from China"
theme = "hugo-universal"
languageCode = "en-us"
defaultContentLanguage = "en"

[params]
  author = "GD Spring Network"
  defaultKeywords = ["custom spring manufacturer", "compression spring supplier", "extension spring China", "spring testing machine"]
  defaultDescription = "Discover verified spring manufacturers from China. Browse compression, extension, torsion and disc springs, and find the right testing equipment for your springs."
  logo_text = "Spring Showcase"
  copyright = "Copyright (c) 2026, Spring Showcase. All rights reserved."
  about_us = "<p>We connect global buyers with verified Chinese spring manufacturers, and supply precision spring testing equipment for quality control.</p>"
  formspree_action = "https://formspree.io/f/你的表单ID"
  contact_url = "/contact/"

[params.recent_posts]
    enable = false
[params.testimonials]
    enable = false
[params.clients]
    enable = false
[params.see_more]
    enable = false
[params.carouselHomepage]
    enable = false
[params.features]
    enable = false

[menu]
[[menu.main]]
    name = "Springs"
    url = "/springs/"
    weight = 1
    hasChildren = true
[[menu.main]]
    name = "Compression Springs"
    url = "/springs/compression-springs/"
    weight = 1
    parent = "Springs"
[[menu.main]]
    name = "Extension Springs"
    url = "/springs/extension-springs/"
    weight = 2
    parent = "Springs"
[[menu.main]]
    name = "Torsion Springs"
    url = "/springs/torsion-springs/"
    weight = 3
    parent = "Springs"
[[menu.main]]
    name = "Testing Equipment"
    url = "/spring-testing/"
    weight = 2
[[menu.main]]
    name = "Free Listing"
    url = "/free-listing/"
    weight = 3
[[menu.main]]
    name = "About"
    url = "/about/"
    weight = 4
[[menu.main]]
    name = "Contact"
    url = "/contact/"
    weight = 5`,

  'content/_index.md': `---
title: "Spring Products Showcase"
---

## Discover Verified Spring Manufacturers

Browse custom compression, extension, torsion and disc springs from vetted Chinese manufacturers. Each listing includes specifications, materials, and a direct inquiry channel.

**[Browse Springs →](/springs/)**  &nbsp;&nbsp;  **[List Your Springs for Free →](/free-listing/)**

---

## Featured Spring Categories

| | |
|---|---|
| **[Compression Springs](/springs/compression-springs/)** <br> Custom coil springs for automotive, industrial and machinery applications. | **[Extension Springs](/springs/extension-springs/)** <br> Tension springs with hook or loop ends for OEM and export buyers. |
| **[Torsion Springs](/springs/torsion-springs/)** <br> Single and double torsion springs for precise rotational force. | **[Disc Springs](/springs/disc-springs/)** <br> Belleville washers and disc springs for high-load, limited-space applications. |

---

## For Spring Manufacturers: List Your Products for Free

We are building a curated showcase of Chinese spring manufacturers. If you make compression, extension, torsion or disc springs, you can list your products **free of charge**.

**[Learn More & Apply →](/free-listing/)**

---

## Need to Test Your Springs?

Spring rate, load deflection, and fatigue life all depend on accurate testing. We also supply **spring tensile and compression testing machines** for manufacturers and laboratories.

**[Explore Spring Testing Equipment →](/spring-testing/)`,

  'content/springs/_index.md': `---
title: "Spring Products Showcase"
---
Browse our curated directory of spring manufacturers from China. Each product listing includes specifications and a direct inquiry link.

- [Compression Springs](/springs/compression-springs/)
- [Extension Springs](/springs/extension-springs/)
- [Torsion Springs](/springs/torsion-springs/)
- [Disc Springs](/springs/disc-springs/)`,

  'content/springs/compression-springs/_index.md': `---
title: "Compression Springs"
---
Custom helical compression springs from Chinese manufacturers. Wire diameters from 0.1 mm to 50 mm.`,

  'content/springs/extension-springs/_index.md': `---
title: "Extension Springs"
---
Custom extension springs with hook, loop, or German hook ends. Wire diameters from 0.1 mm to 20 mm.`,

  'content/springs/torsion-springs/_index.md': `---
title: "Torsion Springs"
---
Single and double-bodied torsion springs with custom end configurations. Wire diameters from 0.1 mm to 18 mm.`,

  'content/springs/disc-springs/_index.md': `---
title: "Disc Springs"
---
Belleville washers and disc springs for high-load, limited-space applications.`,

  'content/springs/compression-springs/heavy-duty.md': `---
title: "Heavy-Duty Compression Spring — 50CrVA, 3–50 mm Wire"
manufacturer: "Example Spring Co. (Guangdong)"
material: "50CrVA / 65Mn / Stainless Steel"
wire_range: "3 – 50 mm"
application: "Farm machinery, shock absorption, automotive"
---
**Overview:** Heavy-duty compression springs designed for farm machinery, automotive and industrial shock absorption.

**Specifications:**
- Wire diameter: 3 – 50 mm
- Material: 50CrVA / 65Mn / Stainless Steel
- End type: Closed and ground / Open

**[Inquire About This Product →](/contact/)**`,

  'content/springs/extension-springs/oem-extension.md': `---
title: "OEM Extension Spring — Hook Ends, 0.1–20 mm Wire"
manufacturer: "Example Spring Co. (Shandong)"
material: "Carbon Steel / Stainless Steel / Music Wire"
wire_range: "0.1 – 20 mm"
application: "Machinery, electronics, automotive, hardware"
---
**Overview:** Custom extension springs with machine hooks, full loops, side hooks, or German hooks.

**Specifications:**
- Wire diameter: 0.1 – 20 mm
- Material: Carbon steel, stainless steel, music wire
- Hook types: Machine hook, full loop, side hook, German hook

**[Inquire About This Product →](/contact/)**`,

  'content/springs/torsion-springs/double-torsion.md': `---
title: "Double Torsion Spring — Custom Ends, 0.1–18 mm Wire"
manufacturer: "Example Spring Co. (Zhejiang)"
material: "Stainless Steel 304/316, Carbon Steel"
wire_range: "0.1 – 18 mm"
application: "Clothespins, window shades, small machinery"
---
**Overview:** Single and double-bodied torsion springs with custom end configurations.

**Specifications:**
- Wire diameter: 0.1 – 18 mm
- Material: Stainless steel 304/316, carbon steel
- End configurations: Straight, offset, hinge, custom

**[Inquire About This Product →](/contact/)**`,

  'content/spring-testing/_index.md': `---
title: "Spring Testing Equipment"
---
Accurate spring testing is essential for quality control and product development. We supply **spring tensile and compression testing machines** for measuring spring rate, load deflection, and fatigue life.

## Our Spring Testing Machine

**Model GD-S100 Spring Tension/Compression Tester**

- Capacity: 5 kN / 10 kN / 20 kN (optional)
- Accuracy: ISO 7500-1 Class 0.5
- Test speed: 0.001 – 500 mm/min
- Fixtures: Compression platens, extension spring hooks, custom grips available
- Standards: ASTM E4, ISO 7500-1

**[Request a Quote →](/contact/)**`,

  'content/free-listing/_index.md': `---
title: "List Your Springs for Free"
---
We are building a curated showcase of Chinese spring manufacturers. If you produce compression, extension, torsion or disc springs, you can list your products **free of charge**.

## What You Get
- A dedicated product page with your specifications and contact link
- Exposure to overseas buyers searching for spring suppliers
- No listing fee, no commission

**[Apply via our contact form →](/contact/)**`,

  'content/contact/_index.md': `---
title: "Contact Us"
---
Whether you are looking for springs, testing equipment, or a free product listing, send us a message.

<form action="https://formspree.io/f/你的表单ID" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="_replyto" placeholder="Your Email" required>
  <input type="text" name="company" placeholder="Company (optional)">
  <textarea name="message" placeholder="What springs or testing equipment are you looking for?" required></textarea>
  <button type="submit">Send Inquiry</button>
</form>`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('✅ 已生成/更新文件: ' + filePath);
}
console.log('\n🎉 所有文件生成完毕！请回到命令行运行 hugo server 预览。');