// 引入vscode相关依赖
import * as vscode from "vscode";


/**
 * 打开文档
 * @param label 文档标签
 */
export function openDoc(label: string) {

    // 要打开的文档链接
    let webUrl = "";

    // 获取关于插件的本地配置
    const documetLinks = vscode.workspace.getConfiguration().documentLinks;


    // 寻找要打开的文档相应的链接
    documetLinks.forEach((element: { label: string; url: string; }) => {
        if (element.label == label) {
            webUrl = element.url;
        }
    });

    // 使用默认浏览器打开链接
    vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(webUrl));

}



/**
 * 显示文档列表
 */
export function showDocLinks() {

    // 获取关于插件的本地配置
    const documetLinks = vscode.workspace.getConfiguration().documentLinks;

    // 标签菜单
    let menu: string[] = [];

    documetLinks.forEach((element: { label: string; url: string; }) => {
        menu.push(element.label);
    });

    vscode.window.showQuickPick(menu).then((selectedItem) => {

        if (selectedItem) {
            openDoc(selectedItem);
        } else {
            vscode.window.showInformationMessage("cancel to open document!");
        }

    });

}