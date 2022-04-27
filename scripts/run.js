const main = async () => {
  const [owner, somebodyElse] = await hre.ethers.getSigners()
  const keyboardsContractFactory = await hre.ethers.getContractFactory(
    'Keyboards'
  )
  const keyboardsContract = await keyboardsContractFactory.deploy()
  await keyboardsContract.deployed()
  console.log('Contract deployed to:', keyboardsContract.address)

  const keyboardTxn1 = await keyboardsContract.create(0, true, 'sepia')
  await keyboardTxn1.wait()

  const keyboardTxn2 = await keyboardsContract.create(1, false, 'grayscale')
  await keyboardTxn2.wait()

  keyboards = await keyboardsContract.getKeyboards()
  console.log('We got the keyboards!', keyboards)
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
