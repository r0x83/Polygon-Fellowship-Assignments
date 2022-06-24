async function main() {
    const deadmansSwitch = await ethers.getContractFactory("deadmansSwitch");
 
    // Start deployment, returning a promise that resolves to a contract object
    const deadmans_Switch = await deadmansSwitch.deploy("Hello World!");
    console.log("Contract deployed to address:", deadmans_Switch.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });