const main = async () => {
  const provider = hre.ethers.getDefaultProvider()
  const [owner, somebodyElse] = await hre.ethers.getSigners()
  const keyboardsContractFactory = await hre.ethers.getContractFactory(
    'Keyboards'
  )
  const keyboardsContract = await keyboardsContractFactory.deploy()
  await keyboardsContract.deployed()
  console.log('Contract deployed to:', keyboardsContract.address)

  const keyboardTxn = await keyboardsContract.create(0, true, 'sepia')
  const keyboardTxnReceipt = await keyboardTxn.wait()
  console.log(keyboardTxnReceipt.events)

  const tipTxn = await keyboardsContract
    .connect(somebodyElse)
    .tip(0, { value: hre.ethers.utils.parseEther('1') })
  const tipTxnReceipt = await tipTxn.wait()
  console.log(tipTxnReceipt.events)

  // const keyboardTxn1 = await keyboardsContract.create(0, true, 'sepia')
  // await keyboardTxn1.wait()

  // const keyboardTxn2 = await keyboardsContract
  //   .connect(somebodyElse)
  //   .create(1, false, 'grayscale')
  // await keyboardTxn2.wait()

  // keyboards = await keyboardsContract.getKeyboards()
  // console.log('We got the keyboards!', keyboards)

  // const balanceBefore = await hre.ethers.provider.getBalance(
  //   somebodyElse.address
  // )
  // console.log(
  //   'somebodyElse balance before!',
  //   hre.ethers.utils.formatEther(balanceBefore)
  // )

  // const tipTxn = await keyboardsContract.tip(1, {
  //   value: hre.ethers.utils.parseEther('1000'),
  // })
  // await tipTxn.wait()

  // const balanceAfter = await hre.ethers.provider.getBalance(
  //   somebodyElse.address
  // )
  // console.log(
  //   'somebodyElse balance after!',
  //   hre.ethers.utils.formatEther(balanceAfter)
  // )
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
