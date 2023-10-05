module.exports = function myLoader(item) {  // loader가 읽을 파일(소스?)이 item으로 들어오게 됨
    console.log('hello myLoader!');
    return item.replace('console.log(', 'alert(');
}