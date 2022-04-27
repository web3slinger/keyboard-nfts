import { ethers } from 'ethers'

import abi from '../utils/Keyboards.json'

const contractAddress = '0x84A222dCE1D5b8bE8cDd9F6567f6dE8eb00eedfe'
const contractABI = abi.abi

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    return new ethers.Contract(contractAddress, contractABI, signer)
  } else {
    return undefined
  }
}
