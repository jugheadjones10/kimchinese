const fakeNewWord = (word) => ({
  word,
  examples: [
    "老师语重心长的一席话，使得小明哑口无言，羞愧满面。",
    "爸爸语重心长地说：“你以后要走怎样的路，自己好好掂量掂量吧！”。",
  ],
  chineseDefinitions: [
    "话深刻有力，情意深长。",
    "他这些语重心长的话，深深地打动了我的心。",
  ],
  englishDefinitions: ["test, test, test"],
  pinyin: "yǔ zhòng xīn cháng",
  pronounceUrl:
    "https://tts.baidu.com/text2audio?tex=%E8%AF%AD%28yu3%29%E9%87%8D%28zhong4%29%E5%BF%83%28xin1%29%E9%95%BF%28chang2%29&cuid=dict&lan=ZH&ctp=1&pdt=30&vol=9&per=4100",
})

const fakeDBReadyNewWord = (word) => ({
  word: word.word,
  pinyin: "yǔ zhòng xīn cháng",
  examples: {
    create: [
      { example: "老师语重心长的一席话，使得小明哑口无言，羞愧满面。" },
      {
        example:
          "爸爸语重心长地说：“你以后要走怎样的路，自己好好掂量掂量吧！”。",
      },
    ],
  },
  englishDefinitions: {
    create: [{ definition: "test, test, test" }],
 },
  chineseDefinitions: {
    create: [
      { definition: "话深刻有力，情意深长。" },
      { definition: "他这些语重心长的话，深深地打动了我的心。" },
    ],
  },
})

const standardUserWordProperties = (dueDate) => ({
  repetition: 0,
  interval: 0,
  efactor: 2.5,
  dueDate,
})

module.exports = {
  fakeNewWord,
  fakeDBReadyNewWord,
  standardUserWordProperties,
}
