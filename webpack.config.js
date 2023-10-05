const path = require('path');   // node js에서 모듈 불러오는 명령어: require
const webpack = require('webpack');

// 모듈을 밖으로 빼내는 노드 JS문법입니다. 엔트리, 아웃풋 그리고 번들링 모드를 설정할 수 있습니디.
module.exports = {  // node js문법  // export default와 같은 거임. 이건 브라우저 자바스크립트 문법
    mode: 'development',

    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].js',  // 대괄호로 하면, 위에 있는 이름이 들어옴. 그냥 main.js로 해도 됨
        path: path.resolve('./dist')
    },

    module: {
        // 로더를 추가하는 장소입니다.
        rules: [
            // {
            //     test: /\.js$/,  // 자바스크립트 파일을 가진 모든 파일을 의미
            //     use: [   // 누가 사용할거냐
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/inline',
                parser: {
                    dataUrlCondition: {
                        maxSize: 80 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            // banner: '배너입니다!!!'
            banner: `마지막 빌드 시간은 : ${new Date().toLocaleString()} 입니다.`
        })
    ]
}