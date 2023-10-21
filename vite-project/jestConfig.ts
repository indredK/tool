/* eslint-disable no-constant-condition */

const run = (str: string) => {
  console.info(str)
}

const initBabel = () => {
  run("yarn add --dev babel-jest @babel/core @babel/preset-env");
  run("创建 babel.config.js 或者.babelre")
  run(`填入
  module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
  这只是基础例子，配置了就可以运行这里的自带代码，具体还是看各个项目
  `)
}

const initTsByBabel = () => {
  initBabel()
  run("yarn add --dev @babel/preset-typescript");
  run(`babel配置文件加上一句 ，变成
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
`)
}

const init = () => {
  if ("下载基本包") {
    run("yarn add --dev jest");
    run("-已经能够用js编写js的单元测试了")
  }
  /** */
  if ("js测试用例-ts单元") {
    if ("通过babel实现") {
      // 对ts单元，ts类型校验不过竟然可以继续测试，这是缺点，但并不致命，甚至没那么重要（起码测试用例可以覆盖）
      initTsByBabel()
    } else if ("通过ts-jest实现") {
      // 需要配置文件，按提示即可,并不推荐使用这个（配置比较高级，需要参考很多）
      run("yarn add --dev ts-jest");
      run("npx ts-jest config:init")
    }
  }
  /** */
  if ("ts测试用例-js单元") {
    run("import {describe, expect, test} from '@jest/globals';")
    run(`
      import {describe, expect, test} from '@jest/globals';
      import {sum} from './sum';

      describe('sum module', () => {
        test('adds 1 + 2 to equal 3', () => {
          expect(sum(1, 2)).toBe(3);
        });
      });
    `)
  }

  if ("测试UI组件") {
    // jest28版本开始，这个环境就被分离了，需要显式安装
    run("yarn add --dev jest-environment-jsdom");
    // 需要设置环境，要么用jest的全局配置，要么使用单文件的配置
    if ("单文件配置") {
      run("参考：https://jestjs.io/zh-Hans/docs/configuration#testenvironment-string")
    }
    if ("全局配置") {
      run("参考：https://jestjs.io/zh-Hans/docs/configuration");
    }
    // 有些可能需要
    run("yarn add --dev @testing-library/react")
  }

  if ("需要jest的全局配置") {
    // 注意，配置文件为ts的话，是需要安装ts-node的
    run("参考：https://jestjs.io/zh-Hans/docs/configuration");
    // 简单的ts文件配置可以使用，但复杂的tsx jsx等测试配置会比较复杂
  }



}

init()