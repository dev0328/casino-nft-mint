import { ethers } from 'ethers'
import {
  getGorillaAddress,
} from "utils/addressHelper";
import { simpleRpcProvider } from 'utils/providers'

import ape from "config/apeabi.json";

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getGorillaContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(ape, getGorillaAddress(), signer)
}
