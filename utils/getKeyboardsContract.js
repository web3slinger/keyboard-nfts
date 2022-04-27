import { ethers } from 'ethers'

import abi from '../utils/Keyboards.json'

const contractAddress = '0xe55a6Bbd91BAF86371e6df16A3158f87f78057D5'
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
