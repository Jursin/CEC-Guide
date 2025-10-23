---
title: 首次使用
createTime: 2025/10/14 23:18:29
---

## 
在首次使用一体机时，建议进行以下操作以确保系统长期使用时的最佳体验：

> 以下操作基本可使用 [Windows 轻松设置](https://www.bilibili.com/opus/904672369138729017)工具执行

## 关闭 Windows 自动更新
Windows 系统的自动更新功能本来是好意，能帮我们及时安装安全补丁和新功能。但实际使用时，其不分场合自动在后台更新，导致内存占用、网络卡顿。而且因缺乏严格测试，更新后可能产生各种严重问题，难以恢复，不适合在学校追求稳定的生产环境中使用。

关闭 Windows 自动更新的方法：

打开 ⌈开始⌋-⌈设置⌋-⌈Windows 更新⌋，单击⌈暂停更新⌋。

## 关闭 UAC
用户账户控制（User Accout Control, UAC）是 Windows 操作系统中的一项安全功能，旨在防止未经授权的更改。当对系统的更改需要管理员级权限时，UAC 会全屏通知用户，从而让用户有机会批准或拒绝更改。但在做好安全防控后，频繁的 UAC 通知则会严重影响使用体验。

关闭步骤：打开 ⌈控制面板⌋-⌈系统和安全⌋-⌈用户帐户控制设置⌋，将滑动条拉到最底部并单击⌈确定⌋。

## 关闭 Windows Defender

## 显示文件扩展名
便于识别文件类型，方便文件管理

## 使用 Windows 10 右键菜单（仅 Windows 11 用户）
Windows 11 新版右键菜单虽然美观，但折叠了太多内容，使用起来不方便

## 激活 Windows 与 Microsoft Office
首次使用时，建议先检查 Windows 和 Microsoft Office 激活状态，如果没激活，部分功能将无法使用，影响实际使用体验。

激活方法有许多种，建议通过 [MAS](https://github.com/massgravel/Microsoft-Activation-Scripts) 激活：

1. 打开系统自带的的 PowerShell

2. - 对于 Windows 8, 10, 11：
     ```powershell
     irm https://get.activated.win | iex
     ```
   - 对于 Windows 7：
     ```powershell
     iex ((New-Object Net.WebClient).DownloadString('https://get.activated.win'))
     ```
3. 按下菜单对应的键以执行对应激活方法

也可通过 HEU KMS Activator 等工具激活。

> 如果要求使用 WPS Office，建议使用教育版或其它特供版，正式版臃肿且许多功能都需要会员

## 安装杀毒软件
建议使用[火绒安全软件](https://www.huorong.cn/person)，免费、无广告、功能丰富
