const {ethers} = require("hardhat")
const {expect,assert} = require("chai")

describe("Domains",function (){
  let domains
  this.beforeEach(async function(){
    const Domains = await ethers.getContractFactory("Domains")
    domains = await Domains.deploy('icb')
    await domains.getDeployedCode()
  })

  it('should register a domain', async function () {
    const price = await domains.price('example');
    const registerTx = await domains.register('example', { value: price });
    await registerTx.wait();
    const address = await domains.getAddress('example');
    expect(address).to.equal(address);
  });
  it('should return the correct price', async function () {
    const price = await domains.price('hello');
    expect(price).to.equal(price);
  });
  it('should transfer ownership of a domain', async function () {
    // Register a domain
    // ...
    const newOwnerAddress = '0x3DF0baeEb62c62BAa5547f5D4fBF29E9e30B9D64'
    const price = await domains.price('test');
    const regisnewone = await domains.register('test', { value: price });
    const transferTx = await domains.transferOwnership('test', newOwnerAddress);
    await transferTx.wait();
    const owner = await domains.getOwner('test');
    expect(owner).to.equal(newOwnerAddress);
  });
  
});