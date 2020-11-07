// 其实封装ajax最主要的还是要有思路 参考文献https://juejin.im/post/6844903749773688846#heading-0
// 1数据校验
// 2数据格式的统一
// 3建立连接
// 4设置请求头
// 5设置返回格式的数据
// 6发送数据
// 7返回成功或者失败
// 8超时处理

// 思路一
class AJAX {
    constructor({url = "",method = "GET",data = {},async = true,success,error,resType = "",headers = {}},time = 5000) {
        //集中管理传递过来的参数
        this.option = {url,method,data,async,success,error,resType,headers,time};
        this.timeout;
        this.xhr = new XMLHttpRequest();
        this.start();
    }
    start() {
        //数据校验
        this.checkOption();
        //数据格式的统一
        this.initOption();
        //建立连接
        this.open();
        //设置请求头
        this.setHeaders();
        //设置返回数据格式
        this.setResponseType();
        //发送数据
        this.sendData()
        //返回成功或失败
        this.responseData();
    };

    checkOption() {
        let {url,async,resType,headers,time} = this.option;
        if (url === '') {
            throw new Error('请求地址不能为空'); //打印错误信息，并停止当前进程
            //Console.error('请求地址为空'); 也可以打印错误信息，但是不能停止当前进程
        }
    
        if(typeof headers !== 'object'){
            throw new Error('设置请求头时请传入 {key:value，key:value...} 的格式');
        }
        
        if(typeof resType !== 'string'){
            throw new Error('设置返回数据格式时请传入字符出串格式');
        }
        
        if(typeof time !== 'number'){
            throw new Error('超时时间请传入数字类型数据');
        }
        
        if (typeof url !== 'string') {
            //输出警告信息
            console.warn('当前请求地址不是字符串，现在将其尝试转换为字符串');
        }
        if (async === false && resType != '') {
            console.warn('如果设置了请求方式为同步，即使设置了返回数据格式也不会生效');
        }
    };

    initOption() {
        let {url,async,method} = this.option;
        //url不是字符串转换成字符串
        if (typeof url !== 'string') {
            try {
                this.option.url = url.toString();
                console.log(`转换成功: "${this.option.url}"`);
            } catch (error) {
                throw new Error('url 转换字符串失败');
            }
        }
        //async不是布尔型转成布尔型
        if(typeof async !=='boolean'){
            async == true ? this.option.async = true : this.option.async = false;
        }
    
        //将 post get 转换为大写
        this.option.method = method.toUpperCase();
        
        //post和get数据初始化
        if(this.option.method != 'FORMDATA'){// [1]
            let data = this.option.data;
            if(typeof data === 'object'){//[2]
                if( this.option.method === 'GET'){
                    let arr=[];
                    for(let name in data){
                        arr.push(`${name}=${data[name]}`);//[3]
                    }
                    let strData=arr.join('&');//[4]
                    this.option.data=`?${strData}`;//[5]
                }else if( this.option.method === 'POST'){
                    let formData = new FormData();//[6]
                    for(let key in data){
                        formData.append(`${key}`,`${data[key]}`);
                    }
                    this.option.data=formData;
                }
                
            }else if(typeof data === 'string' && this.option.method === 'GET'){//[7]
                    this.option.data=`?${data}`;
            }
       }
    };

    open(){
        let {method,url,async,data} = this.option;
        if(method === 'GET'){
            this.xhr.open(method,url+data,async);
        }else{
            this.xhr.open(method,url,async);
        }
    }

    setHeaders(){
        let headers = this.option.headers;
        for(let key in headers){
            this.xhr.setRequestHeader(`${key.toString()}`,`${headers[key].toString()}`)
        }
    }

    
    setResponseType() {
        if (this.option.async) {
            this.xhr.responseType = this.option.resType;
        }
    }

    sendData(){
        if(this.option.method == 'GET'){
            this.xhr.send();
        }else{
            this.xhr.send(this.option.data);
        }
        this.timeout = setTimeout(()=>{ 
            typeof this.option.error === 'function' && this.option.error('请求超时，默认超时时间为 5000 毫秒');
            this.option.reject('请求超时，默认超时时间为 5000 毫秒');
        }, this.option.time);
    }

    responseData(){
        this.xhr.onload = ()=>{
            if(this.xhr.status >= 200 && this.xhr.status < 300 || this.xhr.status === 304){
                typeof this.option.success === 'function'  && this.option.success(this.xhr.response);
                
            }else{
                typeof this.option.error === 'function' && this.option.error(this.xhr.statusText);
                
            }
        }
    }
    
    




    

    
    
    
}
