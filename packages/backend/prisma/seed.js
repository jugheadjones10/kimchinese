const { PrismaClient } = require("@prisma/client")
const { DateTime } = require("luxon")
const prisma = new PrismaClient()

const scrapedData = require("../tests/sample-scrape-data")
const proxyquire = require("proxyquire")

const { reduceScrapedWords } = require("../src/users/scrape-and-reduce-words")

const { createUserInDB } = proxyquire("../src/users/db", {
  "./scrape-and-reduce-words": {
    scrapeAndReduceWords: function () {
      return Promise.resolve(reduceScrapedWords(scrapedData))
    },
  },
})

async function main() {
  const alice = await createUserInDB({
    username: "alice",
    contactType: "EMAIL",
    email: "alice@alice.com",
    isoTime: DateTime.local(2022, 8, 1, { zone: "Asia/Seoul" }).toISODate(),
    IANA: "Asia/Seoul",
    userWords: ["语重心长", "现实", "实", "大家", "理所当然"],
  })

  console.log({ alice })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
