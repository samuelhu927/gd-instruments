const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'content', 'docs');
fs.mkdirSync(docsDir, { recursive: true });

const articles = [
  { slug: "history-evolution-of-springs", title: "The History and Evolution of Springs", content: "Springs have a fascinating history dating back centuries. The concept of elastic energy storage dates back to ancient times with the bow and arrow. The modern coil spring was invented in the 15th century and used in locks. With the Industrial Revolution, the steel coil spring was first patented in America in 1857 for use in chair seats. In 1676, British physicist Robert Hooke postulated Hooke's law, establishing that the force a spring exerts is proportional to its extension." },
  { slug: "types-of-springs-explained", title: "Types of Springs: Compression, Extension & Torsion", content: "Understanding the differences between spring types is crucial. Compression Springs are open-coil helical springs that offer resistance to compressive loading. Extension Springs are close-coiled helical springs that offer resistance to a pulling force. Torsion Springs exert pressure along a circular arc, providing torque. Each type requires specific testing methods and equipment." },
  { slug: "spring-materials-comparison", title: "Spring Materials: 65Mn vs 50CrVA vs Music Wire", content: "Choosing the right material is critical. Music Wire (ASTM A228) is suitable for small, highly stressed springs. 65Mn (Manganese carbon steel) offers good hardenability but is prone to cracking. 50CrVA (Chrome-vanadium) provides excellent fatigue and impact resistance, matching SAE 6150, making it ideal for automotive and heavy machinery springs." },
  { slug: "spring-manufacturing-process-guide", title: "A Complete Guide to Spring Manufacturing Processes", content: "From wire selection to finished product, manufacturing involves coiling, stress relieving, heat treatment, grinding, and surface treatment. Each step directly impacts the spring's performance and fatigue life." },
  { slug: "quality-control-spring-manufacturing", title: "Quality Control in Spring Manufacturing", content: "Quality control is not just about dimensions. It involves metallurgical inspection, surface defect detection (eddy current testing), decarburization checks, and mechanical property verification to ensure batch consistency." },
  { slug: "astm-a231-a878-standards-guide", title: "Understanding ASTM A231 & ASTM A878 Standards", content: "ASTM A231 covers chromium-vanadium alloy steel wire for springs at moderately elevated temperatures. ASTM A878 specifies the highest quality valve spring wire. Compliance ensures international market acceptance." },
  { slug: "iso-2162-spring-testing-standards", title: "ISO 2162: International Spring Testing Standards", content: "ISO 2162 dictates the technical conditions and testing methods for helical springs. It standardizes how force, displacement, and fatigue life are measured across global markets." },
  { slug: "gb-vs-astm-spring-standards", title: "GB/T 1239.2 vs ASTM F2043: Standard Comparison", content: "While GB/T 1239.2 is widely used in China for cylindrical helical springs, ASTM F2043 is the standard in the US. Exporters must understand the differences in tolerance limits and testing speeds to pass international inspections." },
  { slug: "why-spring-stiffness-testing-matters", title: "Why is Spring Stiffness (K-Value) Testing Essential?", content: "The stiffness (K-value) determines how a spring behaves under load. Calculating P' = (F2-F1)/(X2-X1) ensures the spring meets the design requirements for suspension or mechanical actuation." },
  { slug: "load-deflection-curve-analysis", title: "Understanding Load-Deflection Curves in Spring Testing", content: "A load-deflection curve reveals linearity, elastic limits, and potential failure points. Non-linear curves often indicate manufacturing defects or material issues." },
  { slug: "spring-fatigue-testing-methods", title: "Fatigue Testing for Springs: Methods and Importance", content: "Fatigue failure accounts for the majority of spring failures in the field. Testing under cyclic loading (often ≥10^4 cycles) simulates real-world stress and validates durability." },
  { slug: "choose-spring-testing-machine", title: "How to Choose the Right Spring Testing Machine", content: "Key factors include load capacity, displacement accuracy (down to 0.01mm), test speed range, and data acquisition software. A good machine provides repeatable, reliable results." },
  { slug: "force-displacement-measurement-precision", title: "Understanding Force and Displacement Measurement Precision", content: "Modern testing machines use high-precision load cells and photoelectric encoders. Displacement accuracy and force resolution are critical for validating small springs and precise assemblies." },
  { slug: "permanent-deformation-residual-stress-testing", title: "Permanent Deformation and Residual Stress Testing", content: "After applying a load exceeding the elastic limit, permanent deformation occurs. Standards typically require residual deformation to be ≤5% to ensure the spring can be reused or maintain its function." },
  { slug: "spring-surface-treatment-corrosion", title: "Spring Surface Treatment and Corrosion Protection", content: "Zinc plating, powder coating, and shot peening are common surface treatments. They improve corrosion resistance and fatigue life, especially for outdoor or automotive applications." },
  { slug: "spring-heat-treatment-guide", title: "Heat Treatment of Springs: Stress Relieving & Tempering", content: "Stress relieving after coiling and proper tempering after hardening are essential. Incorrect heat treatment leads to brittleness or loss of elasticity." },
  { slug: "spring-rate-pitch-active-coils", title: "Understanding Spring Rate, Pitch, and Active Coils", content: "The spring rate is inversely proportional to the number of active coils. Pitch and end conditions also dictate the free length and travel range. Understanding these geometry basics is vital for quality inspection." },
  { slug: "automotive-suspension-spring-testing", title: "Automotive Suspension Spring Testing Requirements", content: "Suspension springs endure severe dynamic loads. Testing must simulate extreme temperatures, salt spray corrosion, and high-frequency fatigue to meet automotive safety standards." },
  { slug: "compression-vs-tension-testing", title: "Compression vs. Tension Testing: What's the Difference?", content: "Compression testing measures resistance to pushing, while tension testing measures resistance to pulling. The fixtures, grip types, and test speeds differ significantly, requiring versatile testing machines." },
  { slug: "spring-export-compliance-testing", title: "The Role of Custom Spring Testing in Export Compliance", content: "For Chinese manufacturers exporting to Europe or the US, passing ASTM or ISO tests is non-negotiable. A proper test report from a calibrated machine acts as a passport for your spring products." }
];

// 生成文章
articles.forEach((article, index) => {
  const filePath = path.join(docsDir, `${article.slug}.md`);
  const fileContent = `---
title: "${article.title}"
date: 2026-06-${String(index + 1).padStart(2, '0')}
layout: "single"
---
${article.content}

<div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #00a0b0; margin-top: 30px;">
  <h4 style="margin-top: 0;">Need Professional Spring Testing Equipment?</h4>
  <p style="margin-bottom: 15px;">Ensure your springs meet these standards with our high-precision <strong>Spring Tension & Compression Testers</strong>.</p>
  <a href="/spring-testing/" style="display: inline-block; padding: 10px 20px; background: #1e3c72; color: white; text-decoration: none; border-radius: 5px;">Explore Our Testing Machines</a>
</div>
`;
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`✅ 已生成文章: ${article.title}`);
});

// 生成文档总列表页
const indexContent = `---
title: "Technical Documentation"
layout: "single"
---
<div style="text-align: center; margin-bottom: 40px;">
  <h2 style="color: #1e3c72;">Spring Technology & Testing Knowledge Base</h2>
  <p style="font-size: 1.1rem; color: #555;">Deep insights into spring manufacturing, standards, materials, and precision testing methods.</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
${articles.map(article => `
  <div style="border: 1px solid #eee; padding: 20px; border-radius: 8px; background: #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    <h3 style="margin-top:0; font-size: 1.2rem;"><a href="/docs/${article.slug}/" style="color: #1e3c72; text-decoration: none;">${article.title}</a></h3>
    <p style="color: #666; font-size: 0.9rem; margin-bottom: 0;">Read Article →</p>
  </div>
`).join('')}
</div>
`;
fs.writeFileSync(path.join(docsDir, '_index.md'), indexContent, 'utf8');
console.log('✅ 已生成文档总列表页: /docs/');

console.log('\n🎉 20篇技术文档及列表页生成完毕！');