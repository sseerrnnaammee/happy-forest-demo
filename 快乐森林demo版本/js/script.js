"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {

};

// Define the notifications used in the game
let notifications = {

};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
	'Moonlight': 'moonlight.mp3'，
	'Untangle Intro': 'Untangle1.0_Intro.mp3',
    'Untagle Loop': 'Untangle1.0_loop.mp3'
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	'night': 'hamsterhousenight.png',
	'fireplace':'fireplace.png'
	'hamsterhouse':'hamsterhouse.png'
};

// Define the Characters
const characters = {
	'y': {
		Name: '叙事者',
		Color: "#00bfff",
		Images: {
			surprised: 'surprised.png',
			happy: 'happy.png',
			like: 'like.png',
			puzzled: 'puzzled.png',
			sad: 'sad.png',
			hugging:'hugging.png'
			normal1:'normal.png',
			normal2:'normal2.png'
		}
	}
};

let script = {
	// The game starts here.
	"Chinese":{
		'Start': [
			"scene night with fadeIn", //场景：篝火地
			'play music UntangleIntro',
			'play music UntangleLoop with loop',//不知为何这个音乐出不来
			"y 你好啊",
			'y 你能坐过来吗？',
			// 在这里切换拉近版的场景
			'scene fireplace with fadeIn',
			'show y sad at right with fadeIn',
			'y ...',
			'y 我看你的心情好像不太好',
			'y ...',
			'y 说实话，我不想看到你如此落魄',
			'y 所以我想跟你一起走出这个困境',
			{
				'Choice': {
					'Dialog': 'y 可以吗？',
					'Yes': {
						'Text': '好',
						'Do': 'jump Yes'
					},
					'No': {
						'Text': '不好',
						'Do': 'jump No'
					}
				}
			}
		],
	
		'Yes': [
			'show y happy at right',
			'y 我很高兴你能同意!',
			'y 你已经迈出一大步了',
			'y 首先，我想要你帮我一个忙',
			'y 你能拥抱一下你自己吗？',
			'show y hugging at right',
			'y 像这样',//人物做动作
			'y ...',
			'y 要保持10秒钟才有效果',
			'wait 10000',
			'y 十秒了吗？',
			'show y sad at right',
			'y 在这里我必须说一声抱歉',
			'y 我能想象你一定经历过许多风风雨雨',
			'y 但我却没法亲自来安慰你',
			'show y puzzled at right',
			'y 嗯...',
			'y 你喜欢礼物吗？',
			'y 我给你做个礼物，怎么样？',
			'y ...',
			'y 我知道你肯定想说：',
			'y “我跟你隔了大老远怎么送你礼物”',
			'y 是吧？',
			'y 明天你就知道了，给我一点时间准备惊喜，还是这个地方见面',
			'endDate day1'
		],
	
		'No': [
			'没事，我一直在这里，你可以随时再来',
			// 'endDate day1',
			'jump day2',
		],
		"day2": [
		'show scene hamsterhouse with fadeIn',
		'show character y happy at right with fadeIn',
,		'y 你来啦',//场景：篝火地
		'y 请坐',
		'show character y normal2 at right',
		'y ...',
		'y 你最近还好吗',
{
			'Choice': {
				'Dialog': '你还好吗？',
				'good': {
					'Text': '不错',
					'Do': 'jump good'
				},
				'soso': {
					'Text': '还行',
					'Do': 'jump soso'
				},
				'bad': {
					'Text': '不太好',
					'Do': 'jump bad'
				}
			}
		}
	],

	'good': [
		'show character y happy at right',
		'y 你开心就好',
		'y 我给你看个好东西',
		'jump paper'
	],

	'soso': [
		'show character y happy at right',
		'y 那我给你看个好东西，一定会提起你的兴趣',
		'jump paper'
	],

	'bad': [
		'show character y happy at right',
		'y 我给你看个好东西安慰你吧',
		'jump paper'
	],

	'paper': [
		'show character y normal1 at right',
		'y 请看......',
		'show image 千纸鹤.png left',
		'show character y like at right',
		'y 噔噔！',
		'y 这是我给你做的手工折纸，千纸鹤',
		'show character y normal1 at right',
		'y 当然，我没法亲手把我的手工送给你',
		'show character y puzzled at right',
		'y 不过...',
		'show character y normal1 at right',
		'y 我可以教你怎么折纸',
		'show character y happy at right',
		'y 怎么样？',
		'show character y normal2 at right',
		'y 千纸鹤对你来说可能有点难',
		'y 我们可以先从一个简单的折纸开始学起',
		'y 你想先学...',
		'y 用来占卜玩的东南西北？',
		'y 可以飞的纸飞机？',
		'y 还是可以在水上飘的小船？',
{
			'Choice': {
				'Dialog': '学哪个？',
				'nsew': {
					'Text': '东南西北',
					'Do': 'jump nsew'
				},
				'plane': {
					'Text': '纸飞机',
					'Do': 'jump plane'
				},
				'boat': {
					'Text': '小船',
					'Do': 'jump boat'
				}
			}
		}
	],

	'nsew': [
		'y 好的！让我们来学一下东南西北',
		'show character y happy at right',
		'y 首先我需要你拿一张A4纸',
		'show character y normal1 at right',
		'show image 小船步骤1.png left',
		'y 拿好了吗？',
		'show image 折纸步骤4.png left',
		'y 把纸的一角贴着边折过来',
		'show image 折纸步骤5.png left',
		'y 把下面折起来',
		'show image 折纸步骤6.png left',
		'y 变成这样',
		'show image 折纸步骤7.png left',
		'y 沿着边边撕下，你可以反复再折几次，这样撕的更干净一点',
		'show image 折纸步骤8.png left',
		'y 小心地撕...',
		'show image 折纸步骤9.png left',
		'y 好了！摊开后就是一个完美的正方形！',
		'show image 折纸东南西北步骤1.png left',
		'y 将这个正方形对折',
		'show image 折纸东南西北步骤2.png left',
		'y 好...',
		'show image 折纸东南西北步骤3.png left',
		'y 再摊开...这样我们就可以得到一个中间的线',
		'show image 折纸东南西北步骤4.png left',
		'y 将四个角折进去，对着这个线',
		'show image 折纸东南西北步骤5.png left',
		'y 就是这样',
		'show image 折纸东南西北步骤6.png left',
		'y 翻过来',
		'show image 折纸东南西北步骤7.png left',
		'y 背后应该是这样的',
		'show image 折纸东南西北步骤8.png left',
		'y 再将四个角折进去',
		'show image 折纸东南西北步骤9.png left',
		'y 这时我们的东南西北应该是这样的',
		'show image 折纸东南西北步骤10.png left',
		'y 对折',
		'show image 折纸东南西北步骤11.png left',
		'y 现在是这个样子',
		'show image 折纸东南西北步骤12.png left',
		'y 像我这样把手放进旁边的开口里',
		'show image 折纸东南西北步骤13.png left',
		'y 将其撑开',
		'show image 折纸东南西北步骤15.png left',
		'y 好了！成品应该是这样的',
		'y 如果不像也没关系，毕竟你才刚刚接触折纸，是吧？',
		'jump paperafter'
	],

	'plane': [
		'show character y normal1 at right',
		'y 纸飞机折得越精准，飞得就越稳',
		'show image 纸飞机步骤1.png left',
		'y 首先我们需要准备一张A4纸',
		'show image 纸飞机步骤2.png left',
		'y 将其对折',
		'show image 纸飞机步骤3.png left',
		'y ',
		'show image 纸飞机步骤4.png left',
		'y 再翻开',
		'show image 纸飞机步骤5.png left',
		'y 将两个角像这样往里折',
		'show image 纸飞机步骤6.png left',
		'y 之后跟我一样往下折',
		'show image 纸飞机步骤7.png left',
		'y 把上面两边的角折到中间，像我这样不要折到低',
		'show image 纸飞机步骤8.png left',
		'y 将下面那个小角往上折，卡住上面的两个角',
		'show image 纸飞机步骤9.png left',
		'y 对折成这样',
		'show image 纸飞机步骤10.png left',
		'y 沿着这条线把机翼往下折',
		'show image 纸飞机步骤11.png left',
		'y 后面的也这样做',
		'show image 纸飞机步骤12.png left',
		'y 做好了！纸飞机的成品应该是长这样的',
		'y 如果折歪了也没事，你已经很认真了',
		'jump paperafter'
	],

	'boat': [
		'show character y happy at right',
		'y 这个纸船是真的可以在水上飘的哦',
		'show character y normal1 at right',
		'show image 小船步骤1.png left',
		'y 好的。让我们准备一个A4纸',
		'show image 小船步骤2.png left',
		'y 从上往下对折',
		'show image 小船步骤3.png left',
		'y 好！',
		'show image 小船步骤4.png left',
		'y 对折一下',
		'show image 小船步骤5.png left',
		'y 然后...',
		'show image 小船步骤6.png left',
		'y 再翻开，我们只想要一个正好在中间的参考线',
		'show image 小船步骤7.png left',
		'y 把两个角往里折，对齐中间的线',
		'show image 小船步骤9.png left',
		'y 把下面的部分往上折，反面也这样',
		'show image 小船步骤10.png left',
		'y 像我这样，把手伸进去撑开',
		'show image 小船步骤11.png left',
		'y 然后往里折，就会变成这样',
		'show image 小船步骤12.png left',
		'y 像我这样折...',
		'show image 小船步骤13.png left',
		'y 后面也是这样',
		'show image 小船步骤14.png left',
		'y 现在我们的折纸应该是这样的',
		'show image 小船步骤15.png left',
		'y 我们再次把手放入口袋里撑开',
		'show image 小船步骤16.png left',
		'y 好的，现在像不像一朵花？',
		'show image 小船步骤17.png left',
		'y 把两边的花瓣往外掰...',
		'show image 小船步骤18.png left',
		'y 完成啦！小船的成品应该是长这样的',
		'y 如果做的不像也没关系，照样可以在水上漂',
		'hide image 小船步骤18.png',
		'jump paperafter'
	],

	'paperafter':[
		'show character y happy at right',
		'y 做的不错！你想再看一遍，还是学个其他的折纸？',
{
			'Choice': {
				'Dialog': '再学哪个？',
				'nsew': {
					'Text': '东南西北',
					'Do': 'jump nsew'
				},
				'plane': {
					'Text': '纸飞机',
					'Do': 'jump plane'
				},
				'boat': {
					'Text': '小船',
					'Do': 'jump boat'
				},
				'no':{
					'Text':'不想学了',
					'Do': 'jump nopaper'
				}
			}
		}
	],
	'nopaper':[
	'show character y normal1 at right',
	'y 啊，今天也过的很充实呢',
	'y 你手上的折纸就算是我送给你的礼物呗',
	'show character y happy at right',
	'y 嘿嘿',
	'show character y normal1 at right',
	'y 啊，我今天还有一些时间可以陪你',
	'show character y puzzled at right',
	'y 我可以问你一个问题吗？',
	'y 今天有没有遇到让你苦恼，沮丧的事呢？'
{
			'Choice': {
				'Dialog': '今天有没有遇到让你苦恼，沮丧的事呢？',
				'yes': {
					'Text': '有',
					'Do': 'jump Yes1'
				},
				'no': {
					'Text': '没有',
					'Do': 'jump No1'
				}
			}
		}
	],
	'Yes1':[
	'show character y normal2 at right',
	'y 能不能跟我说一下？',
	'y 你可以选择告诉我或者不告诉我，没有关系的',

	{
			'Choice': {
				'Dialog': '告诉我吗？',
				'yes2': {
					'Text': '好',
					'Do': 'jump Yes2'
				},
				'no2': {
					'Text': '还是不了',
					'Do': 'jump No2'
				}
			}
		}
	],
	'Yes2':[
	'show character y like at right',
	'y 你能相信我让我很开心',
	'show character y normal1 at right',
	'y 把烦心的事打在框里吧',
	'y 尽量把当时发生的事，具体的心情，感受，给记下来，越详细越好',
	//在这里打开“烦心事小本本”功能
	'y 嗯，记下来了',
	'show character y happy at right',
	'y 我们暂时不要想这件事',
	'show character y normal1 at right',
	'y 今天你可以试着去做一些你喜欢的事，放松一下',
	'y 或者...',
	'y 你想要我放首歌吗？听歌可以帮助你舒缓大脑',
	'jump Song'
	],

	'No2':[
	'show character y happy at right',
	'y 没事，每一个人都有自己的心思，不想说也是正常的',
	'show character y normal1 at right',
	'y 你可以先不要想这件事',
	'y 去做些自己喜欢做的事情',
	'y 要是以后遇到了什么不顺心的事，要记得告诉我哦，我一直都在这里',
	'y 我可以帮你放一个舒缓的音乐给你舒缓一下，要不？',
	'jump Song'
	],

	'No1':[
	'show character y puzzled at right',
	'y 没有烦心事吗？那要保持乐观的心态哦',
	'show character y happy at right',
	'y 以后遇到什么事可以随时来找我，我一直都在这里',
	'show character y normal1 at right',
	'y 你想我放首歌放松一下吗？',
	'jump Song'
	],
	'Song':[
		{
			'Choice': {
				'Dialog': '放首歌吗？',
				'yes3': {
					'Text': '好',
					'Do': 'jump Yes3'
				},
				'No3': {
					'Text': '别了',
					'Do': 'jump No3'
				}
			}
		}
	],

	'No3':[
	'show character y happy at right',
	'y 那今天就到这里啦，要好好休息哦',
	'endDate day2'
	],

	'Yes3':[
	'show character y normal1 at right',
	'play music Moonlight',
	'y 这首歌的名字叫《月光曲》，是贝多芬写的',
	'y 你慢慢听，听完了点我一下就行',
	'y 不听了？',
	'jump No3'

	],

	'day 3': [
	'show character y happy at right',
	'y 你来啦！',
	'show character y normal1 at right',
	'y 我今天为你订了一本本子',
	'y 它叫：',
	'show character y normal2 at right',
	'y “烦心事小本本”',
	//（显示烦心事小本本按钮）将烦心事小本本功能打开
	'y 要是有什么让自己不开心的事情发生了，就把它记在这个小本本上',
	'y 我会陪你一起分析',
	'show character y normal1 at right',
	'y 你可以试着新建一个烦心事',
	//用户上次没有写，就跳过这个部分【
	'y 上次你苦恼的事情我帮你在这里记下来了，你还记得吗？',
	'y 再慢慢回忆一下你当时的状态',
	'y ......',
	'y 过了一段时间，是不是就和昨天的感受有些不一样？',
	//】用户上次没有写，就跳过这个部分
	'show character y hugging at right',
	'y 大家都会有情绪波动，我也会有',
	'show character y normal1 at right',
	'y 但是区别就在于我们对待情绪的方式',
	'y 有些人会找一个相信的人诉说',
	'y 有些人会将那件事画下来',
	'y 有些人会写到日记里面',
	'y 有些人还会想象另外一个“自己”，然后和那个“自己”诉苦',
	'show character y happy at right',
	'y 总之，最重要的就是别把心情憋在肚子里',
	'show character y normal2 at right',
	'y 你也可以留一个本子，在上面画画',
	'y 你也可以做一个自己的“烦心事小本本”，这样就可以随身携带了',
	'show character y normal1 at right',
	'y ......',
	'show character y sad at right',
	'y 我可能得离开一段时间',
	'y 不过你不用担心，我只会离开一会儿',
	'show character y happy at right',
	'y 到时候我回来了就可以和你玩个痛快啦',
	'show character y normal1 at right',
	'y 记得要利用好“烦心事小本本”，把每天发生的事情记下来哦',
	'y 那就一会儿见啦',
	'hide character y',
	'“快乐森林”网站测试版本就到这里了',
	'如果有什么关于网站的反馈，欢迎在BiliBili视频平台搜索快乐森林官方号私信反馈',
	'再见！'
	],
};