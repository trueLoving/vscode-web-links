/**
 * 文档实体类
 */
export class DL {

    /**
     * 文档标签
     */
    public label: string;

    /**
     * 文档链接
     */
    public url: string;


    /**
     * DLg构造函数
     * @param label 文档标签
     * @param url 文档链接
     */
    constructor(label: string, url: string) {
        this.label = label;
        this.url = url;
    }

}