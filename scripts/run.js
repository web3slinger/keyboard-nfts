const main = async () => {
  const [owner, somebodyElse] = await hre.ethers.getSigners()
  const keyboardsContractFactory = await hre.ethers.getContractFactory(
    'Keyboards'
  )
  const keyboardsContract = await keyboardsContractFactory.deploy()
  await keyboardsContract.deployed()
  console.log('Contract deployed to:', keyboardsContract.address)

  let keyboardTxn = await keyboardsContract.create('A really great keyboard!')
  await keyboardTxn.wait()

  keyboardTxn = await keyboardsContract
    .connect(somebodyElse)
    .create('An even better keyboard!')
  await keyboardTxn.wait()

  let keyboards = await keyboardsContract.getKeyboards()
  console.log('We got the keyboards!', keyboards)

  keyboards = await keyboardsContract.connect(somebodyElse).getKeyboards()
  console.log('And as somebody else!', keyboards)
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
