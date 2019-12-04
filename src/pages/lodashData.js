export default {
    'data': [
        {
            name: '数组',
            child: [
                {
                    name: '拆分',
                    grammar: '_.chunk(array, [size=1])',
                    explain: '将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。',
                    argus: 'array (Array): 需要处理的数组\n' +
                        '[size=1] (number): 每个数组区块的长度',
                    ret: '(Array): 返回一个包含拆分区块的新数组（相当于一个二维数组）。',
                    ex: `
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
                `
                },
                {
                    name: '过滤假值',
                    grammar: '_.compact(array)',
                    explain: '创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。',
                    argus: 'array (Array): 待处理的数组',
                    ret: '(Array): 返回过滤掉假值的新数组。',
                    ex: `
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
                    `
                },
                {
                    name: '连接数组或值',
                    grammar:'_.concat(array, [values])',
                    explain: '创建一个新数组，将array与任何数组 或 值连接在一起。',
                    argus: 'array (Array): 被连接的数组。\n' +
                        '[values] (...*): 连接的值。',
                    ret: '(Array): 返回连接后的新数组。',
                    ex:`
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
                    `
                },
                {
                    name: '排除给定值',
                    grammar:'_.difference(array, [values])',
                    explain: '创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex:`
_.difference([3, 2, 1], [4, 2]);
// => [3, 1]
                    `
                },
                {
                    name: '通过迭代器排除给定值',
                    grammar:'_.differenceBy(array, [values], [iteratee=_.identity])',
                    explain: '这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。\n',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): iteratee 调用每个元素。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex:`
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]
 
// The \`_.property\` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数排除给定值',
                    grammar:'_.differenceWith(array, [values], [comparator])',
                    explain: '这个方法类似 _.difference ，除了它接受一个 comparator （比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。\n' +
                        '[comparator] (Function): comparator 调用每个元素。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex:`
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
                    `
                },
                {
                    name: '删除前N个元素',
                    grammar:'_.drop(array, [n=1])',
                    explain: '创建一个切片数组，去除array前面的n个元素。（n默认值为1。）',
                    argus: 'array (Array): 要查询的数组。\n' +
                        '[n=1] (number): 要去除的元素个数。',
                    ret: '(Array): 返回array剩余切片。',
                    ex:`
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
                    `
                },
                {
                    name: '删除后N个元素',
                    grammar:'_.dropRight(array, [n=1])',
                    explain: '创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）',
                    argus: 'array (Array): 要查询的数组。\n' +
                        '[n=1] (number): 要去除的元素个数。',
                    ret: '(Array): 返回array剩余切片。',
                    ex:`
_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
                    `
                },
                {
                    name: '填充',
                    grammar:'_.fill(array, value, [start=0], [end=array.length])',
                    explain: '使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。',
                    argus: 'array (Array): 要填充改变的数组。\n' +
                        'value (*): 填充给 array 的值。\n' +
                        '[start=0] (number): 开始位置（默认0）。\n' +
                        '[end=array.length] (number):结束位置（默认array.length）。',
                    ret: '(Array): 返回 array。',
                    ex:`
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
                    `
                },
                {
                    name: '连接',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:``
                },
                {
                    name: '连接',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:``
                },
                {
                    name: '连接',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:``
                },
                {
                    name: '连接',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:``
                }
            ]
        },
        {
            name: '集合',
            child: [
                {
                    name: '组成对象',
                    grammar:'_.countBy(collection, [iteratee=_.identity])',
                    explain: '创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（迭代次数）。 iteratee 调用一个参数：(value)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 一个迭代函数，用来转换key（键）。',
                    ret: '(Object): 返回一个组成集合对象。',
                    ex:`
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The \`_.property\` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
                    `
                }
            ]
        },
        {
            name: '日期',
            child: [
                {
                    name: '时间戳',
                    grammar:'_.now()',
                    explain: '获得 Unix 纪元 (1 January 1970 00:00:00 UTC) 直到现在的毫秒数。',
                    argus: '',
                    ret: '(number): 返回时间戳。',
                    ex:`
_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now());
// => 记录延迟函数调用的毫秒数
                    `
                },
                {
                    name: '组成对象',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:``
                }
            ]
        }
    ]
}