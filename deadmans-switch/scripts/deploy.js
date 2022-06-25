async function main() {
    const deadmansSwitch = await ethers.getContractFactory("deadmansSwitch");
 
    // Start deployment, returning a promise that resolves to a contract object
    const deadmans_Switch = await deadmansSwitch.deploy("0xC81A20e3F8EBC43a317942a85a3968B79af20a30");
    console.log("Contract deployed to address:", deadmans_Switch.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });