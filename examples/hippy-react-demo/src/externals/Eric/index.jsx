import React from 'react';
import MyView from './MyView';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from '@hippy/react';

const styles = StyleSheet.create({
  itemTitle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 2,
    backgroundColor: '#fafafa',
    padding: 10,
    marginTop: 10,
  },
  rectangle: {
    width: 160,
    height: 80,
    marginVertical: 10,
  },
  bigRectangle: {
    width: 200,
    height: 100,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  smallRectangle: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});


// 使用自定义的View
export default class MyViewDemo extends React.Component {
  componentDidMount() {
    // 调用控件扩展的方法，不过一般不这么做都是扩展在属性里面
    setTimeout(() => {
      this.myview.changeColor('#0055f0');
    }, 1000);
  };

  render() {
    // 要注意，Hippy 终端只支持加载 Unicode 编码的代码，所以代码都通过 unicode-loader 转换了一次编码。
    // 所以中文如果直接写到 props 会变成 \uxxxx 的乱码。
    // 有两个办法：
    // 1. 将中文写成单独变量。
    // 2. 加载时通过 [unicodeToChar](https://github.com/Tencent/Hippy/blob/master/packages/hippy-react/src/components/text.tsx#L84) 转一下
    const text = '你好，我是MyView';

    const renderTitle = title => (
      <View style={styles.itemTitle}>
        <Text>{title}</Text>
      </View>
    );

    function handleClick() {
      console.log('链接被点击');
    }

    return (

    <ScrollView style={{ padding: 10 }}>

      <MyView
        ref={(ref) => { this.myview = ref; }}
        text={text}
        style={{ width: 250, height: 100, color: 'black' }}
      >
        <Text style={{
          marginTop: 2,
          marginLeft: 2,
          fontSize: 16,
          color: '#4c0afa',
        }}
        >
          内部子View的文字
        </Text>
      </MyView>

      {renderTitle('backgroundColor')}
      <View style={[styles.rectangle, { backgroundColor: '#ff0000' }]} onClick={handleClick} />
      {renderTitle('border props')}
      <View style={[styles.rectangle, { borderColor: '#242424', borderRadius: 4, borderWidth: 1 }]} />
      {renderTitle('flex props')}
      <View style={[styles.bigRectangle, {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }]}
      >
        <View style={[styles.smallRectangle, { backgroundColor: 'yellow' }]} />
        <View style={[styles.smallRectangle, { backgroundColor: 'blue' }]} />
        <View style={[styles.smallRectangle, { backgroundColor: 'green' }]} />
      </View>
    </ScrollView>

    );
  }
}
