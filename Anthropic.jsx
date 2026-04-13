import { useState } from "react";

const NAV = [
  { id: "company", label: "公司画像" },
  { id: "team", label: "核心团队" },
  { id: "timeline", label: "发展路线" },
  { id: "leaks", label: "泄露事件链" },
  { id: "macro", label: "宏观定位" },
  { id: "industry", label: "竞争格局" },
  { id: "safety", label: "安全博弈" },
  { id: "stocks", label: "关联个股" },
  { id: "risk", label: "风险与推演" },
];

function Card({ title, children, color }) {
  const bc = color === "red" ? "rgba(200,80,80,0.2)" : "rgba(200,180,120,0.15)";
  const bg = color === "red" ? "rgba(200,80,80,0.05)" : "rgba(255,255,255,0.02)";
  return (
    <div style={{ background: bg, border: `1px solid ${bc}`, borderRadius: 10, padding: 16, marginBottom: 14 }}>
      {title && <div style={{ fontSize: 15, fontWeight: 700, color: color === "red" ? "#e8a87c" : "#e2c87e", marginBottom: 10, borderLeft: `3px solid ${color === "red" ? "#e8a87c" : "#e2c87e"}`, paddingLeft: 10 }}>{title}</div>}
      <div style={{ fontSize: 13.5, lineHeight: 1.9, color: "#c8c2b4", whiteSpace: "pre-wrap" }}>{children}</div>
    </div>
  );
}

function Src({ text }) {
  return <span style={{ fontSize: 11.5, color: "#8a7e6e", display: "block", marginTop: 6, fontStyle: "italic" }}>{"\u{1F4CE}"} {text}</span>;
}

function KV({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 10px", borderBottom: "1px solid rgba(200,180,120,0.08)", gap: 12 }}>
      <span style={{ color: "#8a8478", fontSize: 13, minWidth: 140, flexShrink: 0 }}>{label}</span>
      <span style={{ color: "#ece6d0", fontSize: 13, textAlign: "right" }}>{value}</span>
    </div>
  );
}

function SC({ name, ticker, relation, exposure, risk, rating }) {
  return (
    <div style={{ background: "rgba(200,180,120,0.04)", border: "1px solid rgba(200,180,120,0.15)", borderRadius: 10, padding: 14, marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontWeight: 700, color: "#ece6d0", fontSize: 15 }}>{name}</span>
        <span style={{ fontSize: 11, color: "#8a8478", fontFamily: "monospace" }}>{ticker}</span>
      </div>
      <p style={{ margin: "4px 0", fontSize: 13, color: "#b0a890", lineHeight: 1.7 }}><b style={{ color: "#c9b86c" }}>{"关系："}</b>{relation}</p>
      <p style={{ margin: "4px 0", fontSize: 13, color: "#b0a890", lineHeight: 1.7 }}><b style={{ color: "#c9b86c" }}>{"敞口："}</b>{exposure}</p>
      <p style={{ margin: "4px 0", fontSize: 13, color: "#b0a890", lineHeight: 1.7 }}><b style={{ color: "#c9b86c" }}>{"风险："}</b>{risk}</p>
      <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: rating.startsWith("\u26A0") ? "#e8a87c" : "#e2c87e" }}>{rating}</div>
    </div>
  );
}

function P({ children }) { return <div style={{ marginBottom: 14 }}>{children}</div>; }

function CompanySection() {
  return (<div>
    <Card title="基本面速览">
      <KV label="最新估值" value="$3,800亿 (2026.02 Series G)" />
      <KV label="累计融资" value="~$673亿, 17轮" />
      <KV label="年化Run Rate" value="$300亿 (2026.04, Gross口径, 非全年实收)" />
      <KV label="Claude Code年化RR" value="$25亿 (2026.02)" />
      <KV label="企业客户" value="30万+; 1000+客户年消费>$1M" />
      <KV label="企业收入占比" value="~80%" />
      <KV label="毛利率" value="~40% (2025年预测, The Information)" />
      <KV label="Fortune 10覆盖" value="8/10" />
      <KV label="员工数" value="~4,954人 (截至2026.03)" />
      <KV label="公司性质" value="Public Benefit Corp (PBC)" />
      <KV label="IPO" value="讨论中, 最早2026年10月 (Bloomberg)" />
      <Src text="估值/融资: Anthropic官方 2026.02.12; 员工: Tracxn 2026.03; 客户: Anthropic 2026.04.07; IPO: Bloomberg 2026.03.27" />
    </Card>
    <Card title={"关于'$300亿收入'的重要说明"} color="red">
      {"这个数字是年化Run Rate (ARR), 即近期月收入\u00D712外推, 非2026年全年实际已入账收入。\n\n更关键的是收入口径差异:\n\u2022 Anthropic按Gross(总收入)报告\u2014\u2014将通过AWS/Google/Azure分销的全部客户支出计为收入, 云平台分成计为费用\n\u2022 OpenAI按Net(净收入)报告\u2014\u2014扣除云平台分成后才计为收入\n\n据Semafor(2026.04.10)报道, 口径差异可导致最高$80亿年化差距。据The Information估算, Anthropic 2026年可能向云方支付~$19亿分成, 2027年最高$64亿。\n\n结论: 实际净收入低于$300亿的RR数字, 但具体净收入率未公开。S-1将强制披露。"}
      <Src text="Sacra分析; Semafor 2026.04.10; Sherwood News 2026.04.09引The Information; ainvest.com 2026.04" />
    </Card>
    <Card title="收入增长里程碑 (均为年化Run Rate, Gross口径)">
      <KV label="2024年底" value="~$10亿" />
      <KV label="2025年8月" value="~$50亿" />
      <KV label="2025年底" value="~$90亿" />
      <KV label="2026年2月" value="~$140亿" />
      <KV label="2026年4月" value="~$300亿" />
      <Src text="Anthropic Series F公告(2025.09); Bloomberg(2026.01.21); Series G公告(2026.02.12); Anthropic官方(2026.04.07)" />
    </Card>
  </div>);
}

function TeamSection() {
  const m = [
    ["Dario Amodei", "联合创始人 & CEO", "1983年生于旧金山。普林斯顿计算神经科学PhD。曾任OpenAI研究VP, 主导GPT-2/GPT-3开发。因AI安全方向分歧离开。2026年因拒绝五角大楼无限制使用Claude成为全球焦点。", "Wikipedia; Fortune 2026.02.14"],
    ["Daniela Amodei", "联合创始人 & 总裁", "Dario妹妹, 1987年生。曾任OpenAI安全与政策VP。负责日常运营、商务拓展、融资。主导Series F/G融资和云合作谈判。", "Wikipedia; Clay.com"],
    ["Jared Kaplan", "联合创始人 & CSO(首席科学官)", "哈佛理论物理PhD。Scaling Laws论文核心作者(模型能力随参数/数据/算力的幂律增长), 奠定大模型训练理论基石。主导Constitutional AI开发。", "Wikipedia; Tracxn"],
    ["Jack Clark", "联合创始人 & 政策负责人", "前Bloomberg/The Register记者, 曾任OpenAI政策总监。负责AI政策和政府关系。2026.03创建Anthropic Institute智库。五角大楼争端中负责对外策略。", "Wikipedia 2026.04"],
    ["Tom Brown", "联合创始人", "GPT-3论文第一作者。曾在OpenAI/Google DeepMind/MoPub任职。管理多个核心技术团队。", "Clay.com; The Org"],
    ["Sam McCandlish", "联合创始人", "斯坦福理论物理PhD。曾任OpenAI研究负责人。与Kaplan共同完成Scaling Laws研究。", "Clay.com; Tracxn"],
    ["Ben Mann", "联合创始人", "数据科学家和AI策略师。七位从OpenAI离职的核心成员之一。", "Tracxn; RankRed"],
    ["Chris Olah", "联合创始人 & 可解释性研究负责人", "Mechanistic Interpretability先驱。领导团队逆向工程神经网络内部机制, 已识别Claude模型中与特定概念关联的神经元簇。此前在Google Brain从事可视化研究。", "LambHam 2025.12; Wikipedia"],
    ["Mike Krieger", "前CPO \u2192 Labs负责人", "Instagram联合创始人兼前CTO。2024.05加入任CPO。2026.01转入新设Labs部门。任期内主导Claude Code/Cowork等核心产品。", "Wikipedia 2026.01; PYMNTS 2024.05"],
    ["Krishna Rao", "首席财务官(CFO)", "Anthropic首位CFO, 2024.05加入。哈佛经济学AB(summa cum laude)、耶鲁JD。曾任Blackstone PE投资人、Bain顾问、Airbnb全球企业发展负责人(参与IPO, 筹集>$100亿)、Cedar CFO、Fanatics Commerce CFO。主导Series F/G融资。", "Anthropic官方 2024.05.21; CFO Dive"],
    ["Sasha de Marigny", "首席传播官(CCO)", "负责传播和品牌。2025.12表示'没有立即上市计划'。主导2026超级碗广告。", "Wikipedia"],
  ];
  return (<div>
    <Card title="创始团队与核心高管">
      {"2021年由七位前OpenAI成员创立。出发点: 对AI安全的理念分歧\u2014\u2014Amodei兄妹认为OpenAI在安全问题上不够重视。\n截至2026.03约4,954名员工。"}
      <Src text="Wikipedia-Anthropic; Tracxn 2026.03" />
    </Card>
    {m.map(([name, role, bg, src], i) => (
      <div key={i} style={{ background: "rgba(200,180,120,0.04)", border: "1px solid rgba(200,180,120,0.12)", borderRadius: 10, padding: 14, marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4, flexWrap: "wrap", gap: 4 }}>
          <span style={{ fontWeight: 700, color: "#ece6d0", fontSize: 15 }}>{name}</span>
          <span style={{ fontSize: 12, color: "#c9b86c" }}>{role}</span>
        </div>
        <div style={{ fontSize: 13, color: "#b0a890", lineHeight: 1.75 }}>{bg}</div>
        <Src text={src} />
      </div>
    ))}
  </div>);
}

function TimelineSection() {
  const e = [
    ["2021", "七位前OpenAI成员创立Anthropic, 旧金山。获Google等早期投资。"],
    ["2022.04", "获$5.8亿融资, 含FTX $5亿(SBF)。"],
    ["2022夏", "完成第一版Claude训练, 出于安全考量未立即发布。"],
    ["2023.03", "Claude首次发布(限定用户)。"],
    ["2023.09", "Amazon首轮$12.5亿投资。"],
    ["2023.10", "Google投资$5亿, 追加承诺$15亿。"],
    ["2024.03", "Amazon追加$27.5亿, 总计$40亿。"],
    ["2024.05", "Mike Krieger(Instagram联合创始人)任CPO; Krishna Rao任首位CFO。"],
    ["2024.11", "Amazon再投$40亿, 总计$80亿。与Palantir+AWS服务美国情报/国防。"],
    ["2025.03", "Series E, 估值$615亿。"],
    ["2025.05", "Claude 4 Opus/Sonnet发布。Claude Code全面上线。"],
    ["2025.06", "推出Claude Gov进入政府市场。"],
    ["2025.07", "获国防部$2亿合同。"],
    ["2025.09", "Series F $130亿, 估值$1830亿。"],
    ["2025.10", "Google Cloud TPU合作, 100万TPU。"],
    ["2025.11", "Microsoft+NVIDIA三方: $300亿Azure采购, NVIDIA $100亿/MSFT $50亿投资。$500亿美国基础设施计划。"],
    ["2025.12", "收购Bun。Snowflake $2亿合作。"],
    ["2026.01", "设立Labs部门。与国防部争端公开化。"],
    ["2026.02", "Series G $300亿, 估值$3800亿。Opus 4.6发布。超级碗广告。被列'供应链风险'。"],
    ["2026.03", "起诉联邦政府。法官裁定'违法报复'。成立Anthropic Institute。03.26 CMS配置错误泄露~3000内部文件(含Mythos模型)。03.31 Claude Code 512K行源码因npm包装错误泄露。"],
    ["2026.04", "Google/Broadcom 3.5GW TPU协议。RR $300亿。Claude Mythos/Project Glasswing。上诉法院裁决分裂。"],
  ];
  return (<div>
    <Card title="发展路线图">{""}</Card>
    {e.map(([d, desc], i) => (
      <div key={i} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: "1px solid rgba(200,180,120,0.06)" }}>
        <span style={{ minWidth: 70, fontSize: 12.5, color: "#c9b86c", fontWeight: 600, flexShrink: 0 }}>{d}</span>
        <span style={{ fontSize: 13, color: "#c8c2b4", lineHeight: 1.7 }}>{desc}</span>
      </div>
    ))}
    <Src text="Wikipedia-Anthropic(2026.04.12); Anthropic新闻页; CNBC; Bloomberg; Tracxn; 各轮融资官方公告" />
  </div>);
}

function LeaksSection() {
  return (<div>
    <Card title="7天3起泄露: 时间线与事实">
      {"这是对Anthropic'安全第一'品牌叙事最严峻的考验。在IPO讨论关键窗口期, 7天内发生了3起独立的信息暴露事件:\n\n事件1: Harness工程博客 (2026.03.24)\nAnthropic发布一篇工程博客, 将竞争优势的叙事从'最好的模型'转向'最好的工程'。这本身不是泄露, 但在后续语境中被解读为知识产权策略转向的信号。\n\n事件2: CMS配置错误 \u2192 Mythos模型泄露 (2026.03.26)\n\u2022 发生了什么: Anthropic的CMS(内容管理系统)将所有上传资产默认设为公开。安全研究员Roy Paz(LayerX Security)和Alexandre Pauwels(剑桥大学)发现约3,000份未发布内部文件可通过公开URL访问。\n\u2022 泄露内容: 包括代号'Capybara'(即Claude Mythos)的未发布模型草案博文, 描述其为'迄今最强大的AI模型'和'阶跃式变化'; 一份欧洲CEO私人峰会邀请(Dario Amodei将出席的18世纪英国乡村庄园活动); 内部PDF和策略文档。\n\u2022 Anthropic回应: Fortune通知后数小时内锁定访问, 称'人为错误导致CMS配置问题', 非安全漏洞。\n\n事件3: Claude Code源码泄露 (2026.03.31)\n\u2022 发生了什么: @anthropic-ai/claude-code npm包的v2.1.88版本附带了一个59.8MB的源映射文件(cli.js.map), 指向Anthropic Cloudflare R2存储桶中的完整未混淆TypeScript源码。\n\u2022 根因: Anthropic 2025年底收购的Bun运行时默认在生产构建中生成源映射。一个已知的Bun bug(#28001, 2026.03.11提交)报告了这一问题, 但在20天内未被修复。有人忘记在.npmignore中添加*.map。Claude Code负责人Boris Cherny确认为'普通开发者错误'。\n\u2022 泄露规模: 约1,906个TypeScript文件, 512,000+行代码, 在GitHub上被fork超41,500次后Anthropic才能发出DMCA下架通知。代码实际上已永久进入公共领域。\n\u2022 泄露内容包括: 44个未公布的Feature Flags; KAIROS(未发布的自主后台代理模式); Undercover Mode(隐藏Anthropic员工AI贡献的功能); 内部模型代号(Capybara=Mythos, Fennec=Opus 4.6, Numbat=未发布模型); 完整的工具架构、权限系统、多Agent编排逻辑。\n\u2022 叠加供应链攻击: 同一天(03.31 00:21-03:29 UTC), npm上出现了被植入远程访问木马(RAT)的恶意axios版本(与Anthropic无关但时间巧合)。在该时间窗口通过npm安装Claude Code的用户可能同时拉取了恶意依赖。\n\u2022 后续攻击: Zscaler报告, 攻击者利用泄露事件散布假冒Claude Code仓库, 植入Vidar Stealer和GhostSocks恶意软件。"}
      <Src text="Fortune 2026.03.26(CMS泄露首发); The Register 2026.03.31; VentureBeat 2026.03.31; BleepingComputer 2026.03.31; The Hacker News 2026.04; Zscaler ThreatLabz 2026.04; DEV Community(Gabriel Anhaia分析); alexkim.com 2026.03.31" />
    </Card>

    <Card title="影响分析: 多维度连锁效应" color="red">
      {"1. 对'安全第一'品牌叙事的冲击\n\nAnthropic的核心品牌定位是'负责任的AI实验室'。这正是它在五角大楼争端中赢得企业客户信任的基础(73%首次企业AI支出)。但7天内两次基础配置错误暴露了一个悖论: 一家以AI安全为使命的公司, 在基础IT运维安全上出现了低级失误。\n\n正如一位开发者所说: '一个据说是网络安全专家的AI模型, 因为CMS配置错误被公开泄露, 这本身就是个讽刺。'\n\n但需要区分: AI模型安全(对齐、宪法AI等)与IT运维安全是两个不同维度。模型安全是Anthropic的核心竞争力, IT运维安全则反映了一家高速增长公司的基础设施跟不上扩张速度的问题。两者不能简单等同。\n\n2. 对IPO的潜在影响\n\nAnthropic正考虑最早2026年10月IPO。连续泄露事件可能:\n\u2022 S-1审查中被SEC关注信息安全披露义务\n\u2022 降低机构投资者对运营成熟度的信心\n\u2022 但也可能被视为高速增长公司的'成长烦恼'(类似Tesla早期的生产质量问题)\n\n3. 对竞争对手的战略价值\n\n泄露暴露了: Claude Code的44个feature flags(=产品路线图), KAIROS自主代理架构, 多Agent编排模式, 权限系统设计。竞争对手(GitHub Copilot/Cursor/OpenAI Codex)现在可以研究并围绕这些能力规划。但也有反论: 代码是'骨架'而非'大脑'(模型权重未泄露), 且泄露证明了Claude Code的工程复杂度极高, 短期内难以复制。\n\n4. 安全供应链的蝴蝶效应\n\nClaude Code源码泄露 + 同日axios供应链攻击 + 后续假冒仓库恶意软件 = 形成了一条完整的攻击链。这不仅影响Anthropic, 更波及整个AI开发者工具生态的信任基础。Anthropic已将Native Installer(非npm)指定为推荐安装方式。\n\n5. Mythos泄露的战略双刃剑\n\nMythos/Capybara的泄露反而成了产品预热:\n\u2022 泄露5天后(04.01), 市场开始pricing in一个超越Opus的新模型\n\u2022 泄露2周后(04.08), Anthropic正式发布Mythos Preview(仅限Project Glasswing合作伙伴)\n\u2022 Mythos发现'数千个零日漏洞'的消息直接引发了安全软件股暴跌和PLTR 13%两日跌幅\n\n从结果看, 泄露加速了市场对Anthropic下一代能力的认知, 但是否为'有意泄露'仍无证据(泄露内容包含CEO私人峰会等Anthropic绝不愿公开的信息, 因此蓄意说可能性低)。"}
      <Src text="Medium(Han Heloir 2026.04, 'Three Accidents'); FindSkill.ai 2026.04; claudefa.st(源码分析); tech-insider.org(综合分析); Bloomberg 2026.03.27(IPO讨论)" />
    </Card>

    <Card title="与其他事件的关联分析">
      {"泄露事件链不能孤立看待, 需与同期其他事件交叉分析:\n\n时间轴叠加:\n03.24 \u2014 Harness博客(战略叙事转向)\n03.26 \u2014 CMS泄露(Mythos/CEO峰会暴露)\n03.27 \u2014 Bloomberg报道IPO讨论\n03.31 \u2014 Claude Code源码泄露 + axios供应链攻击\n04.06-07 \u2014 Google/Broadcom 3.5GW TPU协议 + RR $300亿公布\n04.07-08 \u2014 Claude Mythos Preview正式发布(Project Glasswing)\n04.08 \u2014 D.C.上诉法院拒绝暂停供应链风险指定\n04.09 \u2014 Burry发帖'Anthropic吃PLTR午餐' + 软件股暴跌\n\n逻辑推演:\n泄露事件本应是重大负面, 但被两股正面力量对冲:\na) $300亿RR + Google/Broadcom协议证明了商业基本面的强劲\nb) Mythos的能力展示(发现零日漏洞)将恐惧从'Anthropic不安全'转向'Anthropic的AI太强大', 后者反而强化了其技术领先地位的叙事\n\n净效应评估: 对品牌的长期损害取决于Anthropic是否能在IPO前建立起企业级的安全运营体系。如果S-1中包含严格的安全审计和改进措施, 泄露事件可被定性为'成长痛'; 如果IPO前再次发生类似事件, 则'安全第一'叙事将受到实质性质疑。\n\n一个值得关注的事实: 这不是第一次。2025年2月曾发生过类似泄露, 使得2026年3月的事件至少是13个月内的第二次。Boris Cherny还透露: '我对Claude Code的100%贡献都是Claude Code自己写的。' 这引发了一个更深层问题: 当AI写的代码出现安全问题时, 责任归属和质量控制该如何界定?"}
      <Src text="claudefa.st(Cherny引述/历史泄露); alexkim.com(Bun bug #28001); Fortune 2026.03.26; Bloomberg 2026.03.27" />
    </Card>
  </div>);
}

function MacroSection() {
  return (<div>
    <Card title="主要矛盾">
      {"AI基础设施爆发式扩张 vs. 商业化回报不确定性。2026年超级云厂商AI基础设施支出预计~$5000亿, 但能将token消耗转化为正现金流的企业仍极少。"}
      <Src text="Goldman Sachs估计, 引自Motley Fool 2025.12.04" />
    </Card>
    <Card title="错误定价假设">
      {"市场可能低估'AI替代SaaS'的速度。每次Anthropic发布新产品, 相关SaaS股票集体跳水:\n\u2022 2026.02.03-04: Claude Cowork \u2192 iShares软件ETF跌3.7%\n\u2022 2026.02.20: Claude Code Security \u2192 CRWD跌8%, PANW/SailPoint跌5-9%\n\u2022 2026.04.08-09: Mythos \u2192 Palantir两日跌13%, 软件ETF再跌"}
      <Src text="Bloomberg 2026.02.20; CNN 2026.02.04; Investing.com 2026.04.09" />
    </Card>
  </div>);
}

function IndustrySection() {
  return (<div>
    <Card title="竞争格局">
      {"第一梯队: Anthropic(Claude) / OpenAI(GPT) / Google(Gemini)\n\u2022 路径分化: OpenAI偏消费, Anthropic偏企业(80%企业收入), Google兼具\n\u2022 收入(均RR, 注意口径): Anthropic ~$300亿(Gross) vs OpenAI ~$240亿(Net)\n\u2022 企业首选: Anthropic对OpenAI胜率约7:3 (来源: Ramp AI Index)\n\nClaude是唯一在AWS Bedrock/Google Vertex AI/Azure Foundry三大云平台均可用的前沿大模型。"}
      <Src text="Semafor 2026.04.10(收入); Ramp via Benzinga/Quartz(胜率); Anthropic 2025.11.18(三平台)" />
    </Card>
  </div>);
}

function SafetySection() {
  return (<div>
    <Card title="五角大楼冲突核心事实">
      {"争端焦点: 国防部要求Claude可用于'所有合法目的', Anthropic坚持两条红线:\n1) 禁止大规模监控美国公民\n2) 禁止无人类监督的完全自主武器\n\n关键节点:\n\u2022 2025.07 \u2014 签$2亿合同\n\u2022 2025秋 \u2014 部署谈判中要求取消限制\n\u2022 2026.02.24 \u2014 Hegseth下最后通牒\n\u2022 2026.02.27 \u2014 Anthropic拒绝; 被列'供应链风险'\n\u2022 2026.03.24 \u2014 法官裁定'违法第一修正案报复'\n\u2022 2026.04.08 \u2014 D.C.上诉法院拒绝暂停 \u2192 法院分裂\n\n当前: 排除在国防部合同外, 但可服务其他联邦机构和商业客户。"}
      <Src text="Defense One 2026.03.26; CNBC 2026.04.08; CNN 2026.03.26; TechPolicy.Press" />
    </Card>
    <Card title="市场反应">
      {"\u2022 2026.03 Anthropic获73%首次企业AI支出 (来源: Ramp AI Index)\n\u2022 500+新客户年消费>$1M (来源: AI Expert Magazine引行业分析师, 单一来源待验证)\n\u2022 OpenAI据报遭反噬, 大量用户取消Plus (来源同上, 数据精确性待多源验证)\n\u2022 150+前法官、30名Google/OpenAI员工提交支持简报"}
      <Src text="AI Expert Magazine 2026.04.10; Defense One; Tekedia 2026.04.10" />
    </Card>
  </div>);
}

function StocksSection() {
  return (<div>
    <P><div style={{ fontSize: 14, fontWeight: 600, color: "#c9b86c", marginBottom: 10 }}>直接股权投资者</div></P>
    <SC name="Amazon (AMZN)" ticker="NASDAQ" relation="最大战略投资者$80亿。AWS主要云/训练伙伴。100万+Trainium2芯片。同时投OpenAI $500亿。" exposure="AWS Q4收入$356亿+24%YoY, Claude需求是因素之一。双向投资形成对冲。" risk="Anthropic放缓则Trainium利用率不足。双重投资引发利益冲突。" rating={"★★★★★ 受益最高"} />
    <SC name="Alphabet (GOOGL)" ticker="NASDAQ" relation="~$30亿投资。Google Cloud TPU。最新3.5GW TPU协议(2027起)。" exposure="Vertex AI分销Claude + BigQuery/Cloud Run等。但Google也是竞争对手(Gemini)。" risk="Anthropic越强 Gemini压力越大。" rating={"★★★★ 云收入受益, 竞合复杂"} />
    <SC name="Microsoft (MSFT)" ticker="NASDAQ" relation="投资最高$50亿。$300亿Azure算力采购。Claude进GitHub/M365 Copilot。" exposure="Azure算力直接受益。但Claude Cowork威胁M365 SaaS收入\u2014\u2014左手卖算力右手被颠覆。" risk="SaaS业务承压。同时是OpenAI最大支持者。" rating={"★★★☆ 算力受益 vs SaaS压力"} />
    <Src text="Amazon: aboutamazon.com 2024.11; Google/AVGO: Broadcom 8-K 2026.04; MSFT: blogs.microsoft.com 2025.11" />

    <P><div style={{ fontSize: 14, fontWeight: 600, color: "#c9b86c", margin: "14px 0 10px" }}>算力供应链</div></P>
    <SC name="NVIDIA (NVDA)" ticker="NASDAQ" relation="投资最高$100亿。1GW Grace Blackwell+Vera Rubin。共同优化架构。" exposure="超大规模客户外新维度。但Anthropic多元芯片策略=不独占。" risk="Trainium/TPU替代GPU趋势。" rating={"★★★★ 受益明确非独占"} />
    <SC name="Broadcom (AVGO)" ticker="NASDAQ" relation="为Google设计TPU(至2031年)。Anthropic 3.5GW通过Broadcom供应。" exposure={"最隐蔽受益者。8-K文件确认两项交易。CEO预计2027年AI芯片收入>$1000亿。协议后股价+8.5%。但8-K注明'取决于Anthropic持续商业成功'。"} risk="TPU业务高度依赖Google单一客户。" rating={"★★★★★ 确定性高, 被低估"} />
    <Src text="NVDA: blogs.nvidia.com 2025.11; AVGO: The Register/FinancialContent 2026.04引Broadcom 8-K" />

    <P><div style={{ fontSize: 14, fontWeight: 600, color: "#e8a87c", margin: "14px 0 10px" }}>竞合与威胁</div></P>
    <SC name="Palantir (PLTR)" ticker="NASDAQ" relation="曾是Claude进国防核心渠道。五角大楼事件后从Maven Smart Systems剥离Claude。" exposure={"Burry(已删帖)称'Anthropic吃PLTR午餐'。论点: AIP依赖第三方LLM; PLTR用嵌入工程师模式非API。\n反论(Wedbush Ives): 威胁被夸大, Gotham/Foundry嵌入深切换成本高, Q4收入+70%。\n估值~200-260x PE, 年内跌~29%。"} risk="Claude持续进化 \u2192 企业绕过PLTR直接用API。200x PE无容错空间。" rating={"\u26A0\uFE0F 威胁>受益, 估值脆弱"} />
    <SC name="CrowdStrike (CRWD)" ticker="NASDAQ" relation="Claude Security/Mythos威胁安全软件, 但也是Glasswing合作方。" exposure={"发布当天(02.20)CRWD-8%/SailPoint-9.4%。Mythos识别'数千零日漏洞'含27年前Bug。目前仅限~40家信任伙伴。"} risk="安全能力若广泛开放 \u2192 安全软件估值压缩。" rating={"\u26A0\uFE0F 短期合作长期威胁"} />
    <SC name="Vertiv(VRT)/Eaton(ETN)" ticker="NYSE" relation="数据中心电力/冷却设备。" exposure="Anthropic算力承诺(AWS+Google+Azure >5GW)直接转化为电力设备需求。" risk="宏观放缓延迟建设。" rating={"★★★★ 确定性较高间接受益"} />
    <Src text="PLTR: Motley Fool/Quartz 2026.04(Burry/Ramp); CRWD: Bloomberg 2026.02.20; Mythos: Yahoo Finance 2026.04.08" />
  </div>);
}

function RiskSection() {
  return (<div>
    <Card title={"关于'CEO称可能破产'的原始语境还原"} color="red">
      {"此前写'CEO称若AI进展延迟12月公司可能破产', 需还原原始语境:\n\nDario Amodei在2026.02接受Dwarkesh Patel采访时原话大意: 如果按收入年增10x的轨迹预购算力, 但'数据中心里的天才国度'比预期晚一年到来, 你就会破产。\n\n他举例: '如果收入不是$1万亿而是$8000亿, 地球上没有任何力量能阻止你破产\u2014\u2014如果你已经按$1万亿预期购买了那么多算力。'\n\n关键区别: 他说的不是'Anthropic会在12月内破产', 而是解释为什么Anthropic比竞争对手更审慎\u2014\u2014因为增长预测哪怕偏差一年就可能致命。这是审慎风险管理的论述, 非破产预警。\n\n他还批评竞争对手在算力支出上'YOLOing'(豪赌), 并强调Anthropic的企业客户收入比消费端更可靠。"}
      <Src text="Fortune 2026.02.14(Jason Ma); Dwarkesh Podcast 2026.02.13 'We are near the end of the exponential'" />
    </Card>
    <Card title="关于'收入按Gross报告'的事实依据" color="red">
      {"多个独立信源已确认这一事实:\n\n1) Sacra(AI行业分析平台): 'Anthropic reports revenue from cloud resellers on a gross basis\u2014counting total end-customer spend as revenue and booking partner payouts as expenses.'\n\n2) Semafor(2026.04.10): 两种口径可导致最高$80亿年化差距。\n\n3) Sherwood News(2026.04.09引The Information): Anthropic将客户全部支出计为收入, 云方分成计为费用; OpenAI则扣除后才计收入。The Information估算Anthropic 2026年可能支付~$19亿分成。\n\n4) ainvest.com(2026.04): '若Anthropic采用OpenAI的净口径, 报告收入将显著降低。'\n\n这不是猜测, 是多源交叉验证的事实。但具体净收入率未公开。"}
      <Src text="Sacra; Semafor 2026.04.10; Sherwood News 2026.04.09; ainvest.com 2026.04" />
    </Card>

    <Card title="风险矩阵">
      {"1. 盈利风险(最大)\n毛利率~40%(2025预测, The Information)。推理成本超预期23%。2026全年支出无官方数据, 此前'$190亿'来自TECHi第三方估算。\n证伪: S-1显示毛利率持续<45%。\n\n2. 收入质量\nGross vs Net差异最高$80亿。\n证伪: S-1净收入率<总收入60%。\n\n3. 运营安全与品牌风险(新增)\n7天内2次基础配置错误(CMS+npm), 且2025.02已有过类似事件(13个月内至少第2次)。泄露暴露了完整产品路线图和安全架构。对'安全第一'品牌叙事构成直接冲击。IPO前若再发生类似事件, 品牌溢价将大幅折损。\n证伪: IPO前6个月内再次发生信息泄露事件。\n\n4. 竞争收敛\n模型差异化窗口可能仅6-12月。Claude Code源码泄露使竞争对手获得完整架构参考。\n证伪: Claude连续两代基准落后。\n\n5. 政治/监管\n供应链风险指定仍在D.C.巡回法院。\n证伪: 终审败诉。\n\n6. 估值\n$3800亿 \u2248 27x RR(Gross)。Net调整后有效PS远超此数。\n证伪: IPO市场关闭或大幅折价。"}
      <Src text="毛利率: The Information; 估值分析: Substack 2026.02.18" />
    </Card>

    <Card title="博弈推演">
      {"情景A 乐观(~30-35%): H2毛利率\u219255%+, 成功IPO, Mythos拉开代差, 五角大楼和解。\n\u2192 受益: AVGO(TPU锁定)/AMZN(AWS+股权)/NVDA。SaaS继续承压。\n\n情景B 基准(~40%): 高增长但毛利率慢改善(45-50%), IPO可能推迟。竞争加剧但保持领先。\n\u2192 受益: AVGO/数据中心基础设施; AMZN最稳定(AWS旱涝保收)。\n\n情景C 悲观(~25%): Scaling Law天花板, Token价格战, 毛利率<30%, IPO失败。\n\u2192 回避AI高估值; SaaS反弹; 算力产能过剩。"}
    </Card>
    <Card title="策略框架(非投资建议)">
      {"核心关注: Broadcom(AVGO) \u2014 8-K确认3.5GW TPU至2031年。Token消耗=Broadcom赚钱。\n卫星关注: Amazon(AMZN) \u2014 AWS算力+两家AI巨头股权双对冲。\n观察: Vertiv(VRT)/Eaton(ETN) \u2014 确定性高, 待估值回调。\n对冲关注: Palantir(PLTR) \u2014 200x PE+LLM依赖。但深度嵌入+70%增速不容忽视。\n审慎: Anthropic IPO \u2014 等S-1(尤其Net/Gross、毛利率、客户集中度)再判断。"}
    </Card>
    <div style={{ fontSize: 11, color: "#5a5448", textAlign: "center", marginTop: 20, lineHeight: 1.6 }}>
      {"\u26A0\uFE0F"} 本分析仅为研究讨论, 不构成投资建议。所有数据来自公开信息源, 已标注出处。投资有风险, 决策需谨慎。
    </div>
  </div>);
}

const S = { company: CompanySection, team: TeamSection, timeline: TimelineSection, leaks: LeaksSection, macro: MacroSection, industry: IndustrySection, safety: SafetySection, stocks: StocksSection, risk: RiskSection };

export default function App() {
  const [t, setT] = useState("company");
  const C = S[t];
  return (
    <div style={{ minHeight: "100vh", background: "#1a1814", color: "#d4d0c8", fontFamily: "Georgia, 'Noto Serif SC', serif" }}>
      <div style={{ padding: "28px 20px 16px", borderBottom: "1px solid rgba(200,180,120,0.2)", background: "linear-gradient(180deg, rgba(200,180,120,0.08) 0%, transparent 100%)" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#8a8478", textTransform: "uppercase", marginBottom: 6 }}>Deep Dive V2 - Sources Verified</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#ece6d0", margin: 0 }}>Anthropic 深度研究报告</h1>
        <div style={{ fontSize: 12, color: "#6a6458", marginTop: 6 }}>估值$3800亿 | 年化RR $300亿(Gross口径) | 2026.04.12</div>
      </div>
      <div style={{ display: "flex", overflowX: "auto", borderBottom: "1px solid rgba(200,180,120,0.1)", position: "sticky", top: 0, zIndex: 10, background: "#1a1814" }}>
        {NAV.map(n => (
          <button key={n.id} onClick={() => setT(n.id)} style={{
            padding: "10px 13px", fontSize: 12, fontWeight: t === n.id ? 700 : 400,
            color: t === n.id ? "#e2c87e" : "#6a6458", background: "transparent",
            border: "none", borderBottom: t === n.id ? "2px solid #e2c87e" : "2px solid transparent",
            cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit",
          }}>{n.label}</button>
        ))}
      </div>
      <div style={{ padding: "20px 16px 40px", maxWidth: 720, margin: "0 auto" }}><C /></div>
    </div>
  );
}
