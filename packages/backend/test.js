async function hey() {
  const hey = (
    await new Promise((res, rej) => {
      res({ hey: "FUCK" })
    })
  ).hey
  console.log(hey)
}
hey()
