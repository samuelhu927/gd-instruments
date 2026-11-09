const fs = require('fs');
const path = require('path');

const zhDocsDir = path.join(__dirname, 'content', 'docs', 'zh');
fs.mkdirSync(zhDocsDir, { recursive: true });

const articles = [
  { slug: "history-evolution", title: "弹簧的起源与工业革命演变史", content: "弹簧的历史可追溯至古代弓弩与车马悬挂。1676年英国物理学家罗伯特·胡克提出胡克定律，奠定了弹性力学基础。工业革命时期，1857年美国首次为钢制螺旋弹簧申请专利（用于椅座），标志着现代弹簧工业的开端。此后，随着冶金技术与精密加工的发展，弹簧从简单的缓冲元件演变为决定机械系统精度与寿命的核心基础件。" },
  { slug: "spring-types-basics", title: "螺旋弹簧三大基础类型：压缩、拉伸与扭转", content: "压缩弹簧为开圈螺旋，承受轴向压力；拉伸弹簧通常紧密缠绕，端部带有钩环或全圈，承受轴向拉力；扭转弹簧则沿圆周方向施加扭矩。三者不仅受力模型不同，在端部结构、旋向要求及有效圈数判定上均有严格区分。例如，GB/T 1239.1对冷卷拉伸弹簧的端部规定了10种结构形式，直接影响其安装方式与疲劳寿命[reference:20]。" },
  { slug: "steel-65mn-vs-50crva", title: "弹簧钢深度对比：65Mn与50CrVA的选型博弈", content: "65Mn（锰钢）成本低、强度高、淬透性优于普通碳钢，但对过热敏感且有回火脆性，多用于中小型弹簧。50CrVA（铬钒钢）因添加了钒（V）元素，能显著细化晶粒、减小脱碳倾向。根据机械设计手册数据，50CrVA制作的拉簧在10⁷次交变载荷下的疲劳强度比65Mn钢高出15%-20%，是发动机气门簧、精密机床夹具等高负荷场景的首选[reference:21]。" },
  { slug: "cold-vs-hot-coiling", title: "冷卷与热卷工艺的分水岭：线径与精度的抉择", content: "线径d≤8mm（部分标准放宽至14mm）通常采用冷卷法，使用经过铅浴等温淬火的冷拔钢丝，卷制后仅需低温去应力退火（150-350℃）以消除残余应力。线径更大的弹簧需采用热卷法，在800-1000℃高温下成形，随后必须进行淬火+中温回火，以重新获得马氏体组织并调整综合力学性能[reference:22]。" },
  { slug: "heat-treatment-annealing", title: "弹簧去应力退火与淬火回火的热处理密码", content: "卷制成形的弹簧内部存在大量成形残余应力，若不消除会导致尺寸不稳定与早期失效。普通碳素弹簧与精密小型弹簧采用低温去应力退火；而热卷弹簧成形后必须进行均匀的奥氏体化（加热至Ac3点以上）、油淬及中温回火（如390℃左右），以在强度与韧性之间取得平衡[reference:23]。" },
  { slug: "gb-t-1239-tolerance", title: "GB/T 1239.2-2009 力值允差与精度等级的深度剖析", content: "行业内常说的“力值±5%”若未明确精度等级与载荷点则毫无意义。GB/T 1239.2-2009将冷卷压缩弹簧分为不同精度等级，允差需根据弹簧尺寸与载荷查表确定。更重要的是，刚度允差与单点力值允差是两个概念：一根弹簧可能在指定高度下的力值合格，但整段力-位移曲线的斜率（刚度）偏差过大，这对于需要平缓力值变化的应用是致命的[reference:24]。" },
  { slug: "fatigue-testing-standards", title: "弹簧疲劳寿命测试：GB/T 16947与ISO 1814标准实战", content: "疲劳试验在专用弹簧疲劳试验机上进行，通过施加正弦波循环载荷（频率通常5-30Hz），记录弹簧断裂或刚度下降≥10%时的循环次数。GB/T 16947-2009与ISO 1814是核心依据，通常要求循环次数达到10⁶次以上不断裂。测试需严格控制振幅与平均应力，模拟实际工况下的交变应力谱[reference:25]。" },
  { slug: "stiffness-measurement-guide", title: "刚度（K值）的物理本质与试验机测量误差规避", content: "弹簧刚度K=Gd⁴/8D³n，其中G为剪切模量，d为线径，D为中径，n为有效圈数。在万能试验机上以5mm/min速率加载时，需注意加载速度对弹滞损耗的影响。测量时夹具必须与弹簧轴线严格对齐，避免偏心加载引入侧向力，导致测得的刚度值失真[reference:26][reference:27]。" },
  { slug: "permanent-deformation-relaxation", title: "永久变形与应力松弛：弹簧失效的隐形杀手", content: "永久变形测定是将弹簧压缩至固体高度并保持规定时间，卸载后测量自由高度的变化。应力松弛则是指弹簧在长期恒定变形下，负荷随时间逐渐衰减的现象。热强压处理（Thermal Presetting）通过在工作温度以上施加超载预压，有意引入有利的残余应力场，从而提升弹簧抗应力松弛的能力，是高端弹簧制造的关键工序[reference:28][reference:29]。" },
  { slug: "surface-treatment-salt-spray", title: "弹簧表面处理防腐等级与中性盐雾（NSS）测试", content: "依据GB/T 10125进行中性盐雾试验（5% NaCl，pH 6.5-7.2）。发黑（发蓝）处理防腐能力最弱，通常仅能通过24-48小时即出现红锈；镀锌层可提供48-72小时的白锈防护，若配合达克罗（Dacromet）等涂层，中性盐雾时间可延长至数百小时。评级需区分白锈（镀层自身腐蚀）与红锈（基体穿透），红锈的出现即判定防腐失效[reference:30]。" },
  { slug: "shot-peening-fatigue", title: "喷丸强化（Shot Peening）：残余压应力与疲劳极限的博弈", content: "喷丸通过高速丸粒撞击弹簧表面，在表层引入残余压应力，抵消部分工作拉应力，从而抑制疲劳裂纹的萌生与扩展。工艺控制要点包括：丸粒尺寸与硬度的匹配、喷丸电流与丸粒流量的线性关系、以及覆盖率的保证。对于承受高周疲劳的阀门弹簧与悬架弹簧，喷丸是标准配置[reference:31]。" },
  { slug: "failure-analysis-fracture", title: "弹簧失效分析图谱：疲劳断裂、过载与氢脆的断口特征", content: "疲劳断裂通常呈现贝壳状辉纹（宏观）与韧窝/解理面（微观），起源多为表面缺陷或夹杂物；过载断裂则伴随明显的塑性变形（颈缩或剪切唇）；氢脆断裂多表现为沿晶断裂，且往往在装配后短时间内发生。通过扫描电镜（SEM）分析断口形貌，是追溯失效根源、改进工艺的最直接手段[reference:32]。" },
  { slug: "testing-machine-selection", title: "弹簧拉压试验机的核心选型参数与校准规范", content: "选型核心在于力传感器与量程匹配。依据GB/T 16491，0.5级试验机的示值误差需控制在±0.5%以内。关键原则：常用试验力应落在传感器量程的20%-80%区间，避免长期在满量程边缘或低于20%量程下工作（此时相对误差会显著放大）。夹具同轴度至关重要，偏心加载会产生额外弯矩，扭曲刚度测试结果[reference:33]。" },
  { slug: "automotive-suspension-testing", title: "汽车悬架螺旋弹簧的台架试验与动态刚度要求", content: "悬架弹簧在车辆行驶中承受高频、变幅的交变载荷，其动态刚度与静态刚度可能存在差异（受频率与阻尼影响）。台架试验需模拟实际装车状态，测试项目包括：垂向静态刚度、动态刚度扫频、疲劳寿命（通常要求数十万次至百万次循环无断裂），以及盐雾腐蚀后的性能保持率。任何一项不达标均可能导致整车操控性与安全性下降[reference:34]。" },
  { slug: "geometry-parameters-design", title: "有效圈数、旋绕比与节距的几何参数设计陷阱", content: "旋绕比C=D/d不仅影响弹簧的制造难度（C过小卷制困难且应力集中严重），还直接决定曲度系数K值（K=(4C-1)/(4C-4)+0.615/C），进而放大内侧剪切应力。有效圈数n与刚度K成反比（K∝1/n），设计时需在刚度需求与稳定性（n过少易导致失稳）之间权衡。节距t的选取需保证弹簧在最大压缩量下不并圈[reference:35]。" },
  { slug: "extension-initial-tension", title: "拉伸弹簧的初拉力（Initial Tension）形成与测试", content: "冷卷拉伸弹簧在绕制时，钢丝受到扭转并紧密缠绕，卸荷后仍保持一定的圈间压力，即初拉力。初拉力的存在使得弹簧在承受外部载荷前，需要先克服一个初始力才能产生位移，这对于消除机构间隙、实现即时响应至关重要。测试时需在力-位移曲线上识别出初拉力拐点，评估其一致性。" },
  { slug: "end-grinding-verticality", title: "弹簧端面磨削工艺与垂直度公差的控制", content: "压缩弹簧的端面需磨平以保证垂直受力。GB/T 1239.1规定，冷卷弹簧端部厚度不应小于线径d的1/8，且端面与轴线的垂直度公差有严格要求。双端面磨簧机的上下磨头距离需精密调整，磨削过深会减少有效支撑圈数并可能烧伤表面，磨削不足则导致弹簧站立不稳、刚度测试时产生侧向滑移[reference:36][reference:37]。" },
  { slug: "ndt-magnetic-particle-eddy-current", title: "弹簧探伤技术：磁粉（MPI）与涡流（ECT）的适用边界", content: "磁粉探伤（MPI）对铁磁性材料（如65Mn、50CrVA）的表面及近表面裂纹极其敏感，但检测后必须进行彻底退磁，否则残余磁性会吸附铁屑并影响后续焊接或装配。涡流探伤（ECT）适用于非铁磁性材料（如不锈钢弹簧）或自动化在线检测，但对深层缺陷的检出能力有限。选择何种探伤方法，取决于材料属性与缺陷类型[reference:38]。" },
  { slug: "high-temp-alloy-spring", title: "高温合金弹簧（Inconel 718/钛合金）的测试特殊性", content: "在航空航天与核电领域，Inconel 718或钛合金（Ti-6Al-4V）弹簧面临的是高温蠕变与应力松弛的双重挑战。常规的常温刚度测试不足以评估其服役寿命，需在热机械耦合条件下进行长期应力松弛试验（如90℃下持续30小时以上），并基于位错密度演化建立寿命预测模型。热强压处理同样是提升此类弹簧抗松弛能力的关键手段[reference:39]。" },
  { slug: "export-compliance-testing", title: "弹簧出口欧美市场的合规性测试与报告解读", content: "向欧美出口弹簧，ASTM或ISO测试报告是必备的“通行证”。报告中的关键指标包括：载荷-位移曲线（验证刚度与线性度）、硬度梯度（评估热处理质量）、以及盐雾试验评级（如ASTM B117）。商务人员需能快速解读：若报告显示刚度偏差虽在允差内但曲线斜率不一致，可能意味着批次一致性不佳，需在合同中明确约定刚度允差与抽检频率[reference:40]。" }
];

const promoCard = `
<div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #00a0b0; margin-top: 30px;">
  <h4 style="margin-top: 0;">需要专业的弹簧刚度与疲劳试验设备？</h4>
  <p style="margin-bottom: 15px;">确保您的产品符合 GB/T、ISO 或 ASTM 标准，使用我们的高精度<strong>弹簧拉压试验机</strong>获取可靠的力-位移数据。</p>
  <a href="/spring-testing/" style="display: inline-block; padding: 10px 20px; background: #1e3c72; color: white; text-decoration: none; border-radius: 5px;">了解测试设备</a>
</div>
`;

articles.forEach((article, index) => {
  const filePath = path.join(zhDocsDir, `${article.slug}.md`);
  const fileContent = `---
title: "${article.title}"
date: 2026-06-${String(index + 1).padStart(2, '0')}
layout: "single"
---
${article.content}
${promoCard}
`;
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`✅ 已生成中文文档: ${article.title}`);
});

// 生成中文文档总列表页
const listContent = `---
title: "技术文档（中文）"
layout: "single"
---
<div style="text-align: center; margin-bottom: 40px;">
  <h2 style="color: #1e3c72;">弹簧技术与检测知识库</h2>
  <p style="font-size: 1.1rem; color: #555;">涵盖材料、工艺、标准、失效分析与试验机选型的深度中文资料。</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
${articles.map(article => `
  <div style="border: 1px solid #eee; padding: 20px; border-radius: 8px; background: #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    <h3 style="margin-top:0; font-size: 1.15rem;"><a href="/docs/zh/${article.slug}/" style="color: #1e3c72; text-decoration: none;">${article.title}</a></h3>
    <p style="color: #666; font-size: 0.9rem; margin-bottom: 0;">阅读全文 →</p>
  </div>
`).join('')}
</div>
`;
fs.writeFileSync(path.join(zhDocsDir, '_index.md'), listContent, 'utf8');
console.log('✅ 已生成中文文档列表页: /docs/zh/');

console.log('\n🎉 20篇中文深度技术文档及列表页生成完毕！');