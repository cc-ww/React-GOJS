# React-GOJS
using gojs in React

# CSS3

# To start
cd my-app
npm i
npm run start


pcapDisable(index, icmp) {
        const url = '/bsa_tam2/api/v1/log_pcap/get_pcap';
        console.log('pcap导出成功');
        const fileUrl = `${url}?sid=${icmp.sid}&time=${icmp.timestamp}`;
        $.fileDownload(fileUrl, {
            successCallback: (resp) => {
                console.log('下载成功！');
            },
            failCallback: (resp) => {
                alert('文件不存在！');
            }
        });
    }