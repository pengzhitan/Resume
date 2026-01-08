import { Brain, Code, Database, Users, TrendingUp, Shield, Layers, Smartphone, Box, Zap, Puzzle, Activity, Building, GraduationCap, Factory, Award, FileText, Lightbulb } from 'lucide-react';

export const resumeData = {
  profile: {
    name: "彭志谭",
    title: "业务数据部门负责人 / AI数据产品经理",
    experience: "8年经验",
    degree: "硕士学历",
    phone: "16620863340",
    email: "pzt_china@163.com",
    location: "广州",
    image: "profile.jpg"
  },
  advantages: [
    {
      title: "复合技术背景",
      description: "兼具数据产品思维与全栈开发能力，熟练运用 LLM Agent (MCP)、Python自动化 与 React 技术栈，能够独立闭环从业务需求洞察到AI应用落地的全流程。",
      icon: Code
    },
    {
      title: "全链路经营操盘",
      description: "具备 研发-供应链-制造-营销-财经 全价值链数据视野，主导构建的PAC成本模型与全景驾驶舱支撑千万级降本，擅长通过数据治理重塑业务流程。",
      icon: TrendingUp
    },
    {
      title: "大型中台架构经验",
      description: "拥有世界500强集团数据中台（BI/数据资产/标签体系）从0到1实战经验，成功推动数据服务从传统“GUI报表”向“LUI智能对话”转型。",
      icon: Database
    },
    {
      title: "数字化组织赋能者",
      description: "不仅提供工具，更提供方法论。独创数字化人才培养体系，累计赋能4000+人次，善于通过技术降本（自动化）与文化育人双管齐下提升组织效能。",
      icon: Users
    }
  ],
  experience: [
    {
      company: "广州视源电子科技股份有限公司 (CVTE)",
      role: "AI数据产品经理",
      period: "2023.04 - 至今",
      location: "广州",
      responsibilities: [
        "AI数据中台与智能体建设：负责商显BG数据中台的智能化演进，引入 MCP (Model Context Protocol) 协议重构数据服务架构，搭建 Data Agent 与 AI知识库，实现“对话式”查数与资产检索，推动数据服务从“GUI”向“LUI”转型。",
        "全链路经营数字化：主导构建覆盖 研发-供应链-制造-营销-财经-售后 的全价值链指标体系，首创 PAC投料成本模型 与 全景经营驾驶舱，打通跨部门数据孤岛，支撑BG千万级降本与精细化决策。",
        "企业级效能自动化：针对OA审批、权限管理、校招筛选等高频重复场景，自主研发 Python + Chrome DevTools 自动化中台，实现跨系统流程的“无人值守”执行，大幅释放组织人力资源。",
        "数据产品矩阵规划：统筹 移动端BI、Chrome增强插件、供应链知识平台 等产品矩阵的规划与落地，构建“PC+Mobile+Plugin”多端协同的数据应用生态，提升数据触达率与用户体验。"
      ]
    },
    {
      company: "广东美的制冷设备有限公司",
      role: "数据产品经理",
      period: "2019.07 - 2023.03",
      location: "佛山",
      responsibilities: [
        "数据中台建设：主导“美的数据银行”核心套件（自助分析平台、数据资产平台）的产品规划与落地，解决数据孤岛，实现集团数据统一归口与资产化。",
        "用户画像体系：负责“地动仪”（DMP）标签体系搭建，设计用户分群与智能化圈选功能，支持线上精准营销，提升转化率。",
        "业务数据化赋能：深入内销、外销、财经、供应链等业务域，主导5款BI产品从0-1搭建，通过数据可视化支撑管理层决策与运营复盘。",
        "数字化人才建设：建立集团数字化人才分级培养体系，组织线上线下培训40余场，赋能业务人员自主分析能力。"
      ]
    },
    {
      company: "深圳市优乐学科技有限公司",
      role: "数据分析师",
      period: "2018.03 - 2019.06",
      location: "深圳",
      responsibilities: [
        "用户运营体系：基于AARRR模型搭建用户全生命周期指标体系，利用RFM模型对用户分层，指导精细化运营与二次营销，促成四季度营业额环比增长200万。",
        "经营分析闭环：搭建神策BI经营分析看板，监控日/周/月核心指标，建立异常预警机制，为管理层提供决策支持。",
        "渠道ROI分析：建立渠道评估模型，分析各推广渠道转化率与ROI，优化投放策略，有效降低获客成本。"
      ]
    },
    {
      company: "武汉全干医疗科技股份有限公司",
      role: "研究员",
      period: "2016.07 - 2018.02",
      location: "武汉",
      responsibilities: [
        "负责临床实验全生命周期数据监测、收集与整理分析，建立数据模型。（具备严谨的数据逻辑与科研素养）"
      ]
    }
  ],
  projects: [
    // I. AI Agent & Data Platform
    {
      id: "newdp-mcp",
      title: "NewDP MCP Service - 数据平台微服务架构重构",
      role: "AI数据产品经理",
      period: "2025.06 - 2025.09",
      category: "AI Agent & Data Platform",
      background: "原有数据平台脚本代码冗余（单文件1500+行）、维护困难，难以满足MCP（Model Context Protocol）扩展需求。",
      solution: [
        "实施分层架构重构（Service/API/Core），拆解为模块化工程，引入连接池管理与Pydantic类型安全验证。",
        "封装21个MCP工具接口，覆盖工作空间、目录、工作流、SQL查询等核心能力。"
      ],
      result: [
        "代码可维护性显著提升，支持高并发数据请求，成功对接AI模型上下文协议，为Copilot等AI应用提供底层数据服务能力。"
      ],
      icon: Layers,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "midea-bigdata",
      title: "美的大数据中台 - 自助分析平台",
      role: "数据产品经理",
      period: "2021.03 - 2022.06",
      category: "AI Agent & Data Platform",
      background: "集团内部个性化报表需求爆发，各事业部烟囱式建设导致数据孤岛、口径不一，缺乏统一管理平台。",
      solution: [
        "构建企业级自助分析平台，集成永洪BI与Quick BI，制定《共享站点搭建规范》与标准化数据接入流程（需求->开发->资产沉淀->权限管控）。",
        "推行“授人以渔”的自助分析模式，沉淀领域共享站点孵化方法论，赋能业务人员自主构建可视化报表。"
      ],
      result: [
        "成功孵化40+个领域共享站点，产出可视化报表4000+张，实现统一归口与查数。",
        "平台覆盖用户5W+，MAU峰值超4000+，极大推动了集团数据民主化进程。"
      ],
      icon: Database,
      color: "from-blue-600 to-indigo-600"
    },

    // II. Data Asset & Knowledge Management
    {
      id: "dw-store",
      title: "DW-Store - AI原生数据资产知识库",
      role: "AI数据产品经理",
      period: "2025.09 - 2025.11",
      category: "Data Asset & Knowledge Management",
      background: "面对2.3万+数据文件、1.5万+SQL脚本的庞大资产，传统检索方式（Grep）效率低，新人上手难。",
      solution: [
        "构建AI原生知识库，建立分层README文档体系（覆盖率75.6%），实现数据资产的'自解释'。",
        "开发MCP检索服务，支持Cursor等AI工具通过语义理解快速定位数据表、指标与业务逻辑。"
      ],
      result: [
        "检索效率提升5-10倍，新人上手周期从数周缩短至数天，实现跨BG数据资产的高效复用与协同。"
      ],
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "metric-platform",
      title: "Metric Management - 供应链知识管理平台",
      role: "AI数据产品经理",
      period: "2025.08 - 2025.08",
      category: "Data Asset & Knowledge Management",
      background: "供应链业务流程复杂，文档（Confluence）与图表标准不一，知识沉淀分散，缺乏统一的可视化管理平台。",
      solution: [
        "搭建基于React + Vite的模块化知识平台，集成Draw.io流程可视化与Confluence知识图谱。",
        "开发MCP智能代理（Draw.io Agent + Confluence Scraper），实现“一句话生成架构图”与业务规范的自然语言查询。"
      ],
      result: [
        "打通了非结构化文档、流程图与AI助手的连接，构建了全链路可视化的知识体系。",
        "显著提升了技术文档编写效率与业务知识的查阅体验，支撑团队快速上手与协作。"
      ],
      icon: Box,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "bg-indicator",
      title: "Commercial Display BG - 全链路经营驾驶舱",
      role: "AI数据产品经理",
      period: "2023.04 - 至今",
      category: "Data Asset & Knowledge Management",
      background: "商用显示BG业务覆盖研发、供应链、制造、营销、售后全流程，面临数据孤岛严重、经营成本核算逻辑复杂（PAC/加工费/物流费）、全链路经营风险监控滞后等痛点。",
      solution: [
        "全链路指标体系构建（研产供销服）：TTM、SPU进出比、PAC成本模型、N+3/N+6物料价格预测。",
        "数据资产与驾驶舱矩阵：战略级BG经营驾驶舱（营收/毛利/库存/商机），战术级业务专项看板（采购降本/制造运营/售后品质）。"
      ],
      result: [
        "降本增效：累计识别千万级成本优化机会；辅助供应链实现库存周转天数优化15%。",
        "经营可视：实现全链路经营数据100%在线化，月度经营分析报告产出效率提升50%。",
        "质量与体验：研发TTM达成率提升15%，售后服务24小时满足率提升10%。"
      ],
      icon: Activity,
      color: "from-red-500 to-pink-500"
    },

    // III. BI & Mobile
    {
      id: "mobile-bi",
      title: "Mobile BI - 移动端经营分析工作台",
      role: "AI数据产品经理",
      period: "2025.11 - 至今",
      category: "BI & Mobile",
      background: "为满足管理层随时随地掌握核心经营指标的需求。",
      solution: [
        "设计并开发移动端BI驾驶舱，涵盖营收、利润、库存等8大核心指标卡片。",
        "支持多维度（月/季/年）与多组织（集团/BG）切换分析。"
      ],
      result: [
        "实现了经营数据的移动化、实时化触达，大幅提升管理层决策效率。"
      ],
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "bi-plugin",
      title: "BI Chrome Extension - 智能BI增强插件",
      role: "AI数据产品经理",
      period: "2024.06 - 2025.01",
      category: "BI & Mobile",
      background: "提升BI系统用户体验，解决报表查找难、操作繁琐痛点。",
      solution: [
        "基于Chrome Manifest V3架构开发浏览器扩展，集成智能问答助手、报表一键管理与快捷导航功能。"
      ],
      result: [
        "优化了BI系统交互体验，通过插件实现数据查询与操作的自动化，提升用户活跃度。"
      ],
      icon: Puzzle,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "midea-building",
      title: "美的楼宇数字化建设项目",
      role: "数据产品经理",
      period: "2021.09 - 2022.12",
      category: "BI & Mobile",
      background: "配合楼宇事业部业务爆发式增长（卡塔尔世界杯供应商），亟需建设覆盖外销、内销、财经的全链路数字化监控体系。",
      solution: [
        "规范数仓层级（ODS->DM->ADS），拉通外销（EPSI）、内销（签约/履约）、财经（预算/成本）三大领域数据。",
        "构建PC+移动+大屏三端一体化监控体系，解决数据来源多、整合难的问题。"
      ],
      result: [
        "实现了业务层、管理层、决策层的数据可视与预警监控，沉淀了标准化的数据资产，有效支撑了业务的高速扩张与精细化管理。"
      ],
      icon: Building,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: "midea-finance",
      title: "美的财经Space-X经营分析平台",
      role: "数据产品经理",
      period: "2020.06 - 2022.12",
      category: "BI & Mobile",
      background: "针对空调海外市场，解决全链路经营分析手工统计滞后与易错痛点。",
      solution: [
        "创新采用“1业务+1开发”敏捷开发模式，实现需求快速响应与迭代。",
        "构建多维度T+1数据可视化看板，打通8个大区、37个区域财务数据。"
      ],
      result: [
        "效率提升：节省70%重复数据加工时间，缩减50+业务单元的财务对接工作量。",
        "成本节约：项目交付周期缩短至3个月，节约人力成本约60%。",
        "影响力：在已上线36个BI产品中热度排名TOP 1，成为财经领域核心决策平台。"
      ],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "factory-energy",
      title: "美的工厂节能降本数据挖掘项目",
      role: "数据产品经理",
      period: "2020.03 - 2020.09",
      category: "BI & Mobile",
      background: "工厂空压机能耗居高不下，缺乏有效的数据监控与优化手段，是企业节能降本的重点对象。",
      solution: [
        "深入产线梳理工艺流程，结合多元线性回归建立空压机产线能耗模型，识别异常能耗关键因子。",
        "输出节能改善分析报告，拉通IT与制造部门推动生产工艺参数优化。"
      ],
      result: [
        "优化了生产工艺流程，实现能耗异常的可视化监控，预计每年为集团节约能耗成本800万+。"
      ],
      icon: Factory,
      color: "from-gray-500 to-slate-600"
    },
    {
      id: "user-lifecycle",
      title: "用户生命周期与精准营销项目",
      role: "数据产品经理",
      period: "2018.03 - 2019.06",
      category: "BI & Mobile",
      background: "在线教育平台营收增长乏力，缺乏精细化用户运营体系与差异化营销策略。",
      solution: [
        "基于AARRR模型搭建用户全生命周期指标体系，利用RFM模型对用户进行分层与画像。",
        "设计差异化营销策略，开展A/B Test优化运营方案，针对不同用户采取个性化营销。"
      ],
      result: [
        "促成四季度营业额环比增长200万+，显著提升了用户留存率与转化率，沉淀了个性化营销方法论。"
      ],
      icon: Users,
      color: "from-violet-500 to-purple-600"
    },

    // IV. Automation & Efficiency
    {
      id: "auto-platform",
      title: "Enterprise Automation Platform - 企业级效能平台",
      role: "AI数据产品经理",
      period: "2025.01 - 至今",
      category: "Automation & Efficiency",
      background: "随着业务扩张，IT与业务团队在OA流程审批、FineBI权限管理及校招简历筛选等场景面临海量重复性工作，人工操作效率低、易出错且占用高价值人力。",
      solution: [
        "全栈自动化架构：构建基于 Python (Selenium/Requests) + Chrome DevTools Protocol 的自动化中台，攻克了OA系统复杂JS提交难题。",
        "AI招聘数据流水线：自主研发“校招数据处理管道”，集成 Dify AI 大模型能力，实现简历自动解析与智能评分。",
        "精细化权限与数据治理：开发 FineBI 权限自动化工具与 Excel 智能拆分工具，实现批量授权与报表分发。"
      ],
      result: [
        "提效显著：将OA审批与FineBI权限管理的平均耗时从小时级压缩至分钟级，人工操作减少90%。",
        "AI落地：成功应用于校招季，累计自动评分与分类简历10,000+份，大幅释放HR与面试官精力。",
        "零差错：通过代码固化业务逻辑，确保了权限分配与数据分发的100%准确率。"
      ],
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: "talent-training",
      title: "数字化人才培养体系建设项目",
      role: "讲师 & 课程开发者",
      period: "2021.03 - 2022.12",
      category: "Automation & Efficiency",
      background: "集团数字化工具（Quick BI/永洪BI）推广困难，业务人员数据分析能力参差不齐，难以支撑数字化转型。",
      solution: [
        "独创“学中玩”教学模式，开发初/高/精英三阶课程体系，覆盖从入门到精通全路径。",
        "建立“金字塔”人才培养机制，沉淀《活动组织一表通》等标准化运营文档。"
      ],
      result: [
        "累计培训学员4000+人次，课程好评率98%，为集团培养了数百名数字化种子用户。",
        "获评集团“年度百强讲师”（Top 1%），构建了可持续的数字化人才生态。"
      ],
      icon: GraduationCap,
      color: "from-yellow-500 to-red-500"
    }
  ],
  skills: [
    {
      category: "AI与大模型技术",
      items: ["MCP Protocol", "Dify Agent", "Prompt Engineering (RAG/CoT)", "LangChain"],
      icon: Brain
    },
    {
      category: "数据工程与开发",
      items: ["Python (Pandas/Selenium/FastAPI)", "SQL (Hive/Impala/Starrocks)", "React 18 + Vite + TypeScript", "Chrome Extension (MV3)"],
      icon: Code
    },
    {
      category: "数据产品与管理",
      items: ["指标体系设计 (OSM/UJM)", "数据仓库 (Kimball)", "数据治理方法论", "FineBI/Tableau/Quick BI"],
      icon: Shield
    }
  ],
  generalSkills: [
    {
      name: "语言能力",
      value: "CET-6",
      icon: FileText
    },
    {
      name: "荣誉奖项",
      value: "美的集团年度百强讲师 (Top 1%)",
      icon: Award
    },
    {
      name: "学术成果",
      value: "SCI论文1篇，核心期刊2篇，实用新型发明专利1项",
      icon: Lightbulb
    }
  ],
  education: [
    {
      school: "中南大学",
      degree: "硕士",
      major: "肝胆外科暨器官移植医学",
      period: "2013.09 - 2016.06",
      level: "985/211"
    },
    {
      school: "大连医科大学",
      degree: "本科",
      major: "临床医学",
      period: "2008.09 - 2013.06",
      level: "一本"
    }
  ]
};
