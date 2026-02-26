// 标注数据文件 — 与 experience-squad-work-plan-viewer.html 配合使用
const ANNOTATIONS = {
  "version": 1,
  "tags": {
    "E3-S01": "confirmed",
    "E2-S03": "weak",
    "E3-S05": "confirmed",
    "E4-S01": "missing",
    "E4-S02": "pending",
    "E5-S08": "confirmed",
    "E5-S01": "pending",
    "E8-S02": "confirmed",
    "E12-S04": "confirmed",
    "E4-S08": "pending",
    "E5-S04": "confirmed",
    "E12-S03": "pending",
    "E13-S03": "confirmed",
    "E2-S04": "weak",
    "E5-S05": "pending",
    "E2-S01": "pending",
    "E11-S02": "pending",
    "E6-S05": "confirmed",
    "E6-S06": "confirmed",
    "E9-S06": "confirmed"
  },
  "links": {
    "E3-S01": "https://docs.google.com/document/d/1QoaXFgH_RuIIginznnZMdkTHiG4eI3PTX-P0wO2ZpSU/edit?tab=t.0#heading=h.a4quczfjm6vx",
    "E5-S08": "https://docs.google.com/document/d/1ZbOnEx_yrESMqudBSuzXvllBjfnsZZvd5j90hgQ9Sxk/edit?tab=t.0",
    "E4-S02": "https://docs.google.com/document/d/1I3vETG84ynO9TAHm8I5PAwTl2Tpqx2D9YjjQz3dOleU/edit?tab=t.0",
    "E5-S01": "https://docs.google.com/document/d/1KEoZ_V6gbP-Ixhb86osADf5MPwwJmKqmakVNDCovOCg/edit?tab=t.0#heading=h.a0s3kt20z2zp",
    "E5-S05": "https://docs.google.com/document/d/1OOhGtv6yrZCmKTOY3-9WZqnrub2Q1Lay8kfJUOpxRQU/edit?tab=t.0",
    "E13-S03": "https://docs.google.com/document/d/1tiQu_Tw4vFgCpZ8zp_8a01WHj6nkevuVHFVpshMTyIg/edit?tab=t.0",
    "E2-S01": "https://docs.google.com/document/d/13T03hG7Lm3iSnWvetZ00xCp8Rvd2f17C1hPtaXNR0Mo/edit?tab=t.0#heading=h.vrwvjyksjp49",
    "E9-S06": "https://docs.google.com/document/d/1n8LH6Hzh_xzpzmgzICvN7OQFn-zHo4Gd0VLkcV7kDfw/edit?tab=t.0"
  },
  "notes": {
    "E2-S03": "在整个反馈数据中，精确描述\"邮箱输入后验证码发送按钮变灰/无法点击\"这个 UI Bug 的用户反馈一共只有 2 条：\n第 1 条 — feedback_id 204308，2025-11-09，Xiaomi Mi 10 Pro（Android 35）\n> \"输完邮箱地址后发送验证码按钮变灰，outlook.com、proton.me后缀邮箱都是这样。其他的我没试\"\n第 2 条 — feedback_id 200810，2025-09-26，Xiaomi M2012K11AC（Android 33）\n> \"绑定邮箱的时候，输入几个字母的时候验证码按钮就亮了，但是输入完整后按钮却变成灰色不能点击的了，删除一个字母它又亮了能点击了。\"\n需要注意区分的是：\n\"播放按钮变灰\"是另一个完全不同的问题（约 10+ 条），指的是音频播放按钮 disabled，属于音频播放故障类别\n\"邮箱验证码收不到\"也是不同问题（约 15+ 条），是服务端邮件发送/收件箱接收的问题，用户可以点击发送按钮，但收不到验证邮件\n这个按钮变灰的 Bug 从第 2 条反馈的描述来看，几乎可以确定是前端邮箱格式校验的正则表达式写错了（输入几个字母时按钮亮、输入完整邮箱后反而变灰、删掉一个字符又亮了）。两条反馈都来自小米安卓设备，但考虑到该 Bug 的表现特征（正则校验逻辑问题），很可能在所有安卓设备上都存在，只是恰好只有这 2 位用户描述得足够具体。",
    "E4-S01": "其实不支持跨语言搜索。",
    "E4-S02": "独立反馈会话共 11 个。100% 为技术实现问题，GFW 影响为零。桌面端（网页/Windows/Mac）是重灾区：11 个中有 5 个明确涉及桌面端",
    "E5-S01": "我iPhone上所有音频资都可以正常播放。目前提到的问题，可能指的其实是视频的后台播放。但用户反馈中，似乎是指音频。这部分尚待技术验证。",
    "E12-S04": "设定埋点范围（提前为下一个优化版本的功能预埋点）。",
    "E4-S08": "难做。但值得探索（设计与研发）。",
    "E5-S04": "更换一个更灵活的倍速的设计。",
    "E12-S03": "全链路，是个目标。不是一个可执行的Story。",
    "E11-S02": "与 E5 S08 重复。至少可复核来源是重复的。",
    "E13-S03": "总反馈600条，总占比 3.2%（过去一年213条反馈）",
    "E5-S05": "建议 QA 先测试/验证，技术先定位问题。",
    "E11-S01": "搜索成功率如何定义？",
    "E2-S01": "可做的两件事：1）增加SMS供应商（避免单一渠道）；2）增加 邮箱 + Link 直接注册/登陆；",
    "E6-S01": "已经解决？",
    "E9-S06": "原任务原本是平板适配。"
  }
};
