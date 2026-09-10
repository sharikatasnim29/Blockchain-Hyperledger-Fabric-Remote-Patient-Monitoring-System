/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Gateway, Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');

async function main() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser'); //modify korso ei line e 1 ta tumi boshaiso
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('fabcar');

      

        let key1 = "p1"
        var patient1 = {
	    "p_no" : "01",
            "name" : "Kuddus",
            "diagnosis" : "Cancer",
            "other_diagnosis": "Diabetes",
            "major_drug1": "Erdafitinib",
            "major_drug2": "Insulin",
	    "blood_pressure": "120/80",
            "oxygen_saturation": "95%",
            "hospital" : "Apollo",
            "allergies": "none"
        }

        let key2 = "p2"
        var patient2 = {
	    "p_no" : "02",
            "name" : "Raju",
            "diagnosis" : "diabetes",
            "other_diagnosis": "null",
            "major_drug1": "Insulin",
            "major_drug2": "null",
	    "blood_pressure": "130/80",
            "oxygen_saturation": "99%",
            "hospital" : "City",
            "allergies": "hay fever"
        }

        let key3 = "p3"
        var patient3 = {
	    "p_no" : "03",
            "name" : "robi",
            "diagnosis" : "heart attack",
            "other_diagnosis": "null",
            "major_drug1": "Nidipin",
            "major_drug2": "null",
	    "blood_pressure": "140/110",
            "oxygen_saturation": "97%",
            "hospital" : "Apollo",
            "allergies": "lactose"
        }

        let key4 = "p4"
        var patient4 = {
	    "p_no" : "04",
            "name" : "kumar",
            "diagnosis" : "Heart block",
            "other_diagnosis": "Kidney stone",
            "major_drug1": "Ramipril",
            "major_drug2": "Insulin",
	    "blood_pressure": "110/90",
            "oxygen_saturation": "99%",
            "hospital" : "Ibne-sina",
            "allergies": "none"
        }

        let key5 = "p5"
        var patient5 = {
	    "p_no" : "05",
            "name" : "Abdul",
            "diagnosis" : "kidney stone",
            "other_diagnosis": "Diabetes",
            "major_drug1": "Erdafitinib",
            "major_drug2": "Insulin",
	    "blood_pressure": "140/90",
            "oxygen_saturation": "96%",
            "hospital" : "Apollo",
            "allergies": "none"
        }
        let key6 = "p6"
        var patient6 = {
	    "p_no" : "06",
            "name" : "Rahim",
            "diagnosis" : "kidney stone",
            "other_diagnosis": "Diabetes",
            "major_drug1": "Erdafitinib",
            "major_drug2": "Insulin",
	    "blood_pressure": "140/110",
            "oxygen_saturation": "98%",
            "hospital" : "City",
            "allergies": "none"
        }

        let key7 = "p7"
        var patient7 = {
	    "p_no" : "07",
            "name" : "Dilip",
            "diagnosis" : "kidney stone",
            "other_diagnosis": "null",
            "major_drug1": "Erdafitinib",
            "major_drug2": "Exocasin",
	    "blood_pressure": "150/90",
            "oxygen_saturation": "93%",
            "hospital" : "Ibne-sina",
            "allergies": "none"
        }

        let key8 = "p8"
        var patient8 = {
            "p_no" : "08",
            "name" : "Rupa",
            "diagnosis" : "Cancer",
            "other_diagnosis": "HIgh pressure",
            "major_drug1": "Enagsig",
            "major_drug2": "Osartil",
	    "blood_pressure": "120/80",
            "oxygen_saturation": "99%",
            "hospital" : "Apollo",
            "allergies": "Peanut"
        }

        let key9 = "p9"
        var patient9 = {
            "p_no" : "09",
            "name" : "Siddik",
            "diagnosis" : "Diabetes",
            "other_diagnosis": "Jaundice",
            "major_drug1": "Insulin",
            "major_drug2": "Entrafin",
	    "blood_pressure": "110/70",
            "oxygen_saturation": "100%",
            "hospital" : "Redcrescent",
            "allergies": "Null"
        }

        let key10 = "p10"
        var patient10 = {
            "p_no" : "10",
            "name" : "Suma",
            "diagnosis" : "Lung disease",
            "other_diagnosis": "Null",
            "major_drug1": "Alupen",
            "major_drug2": "Null",
	    "blood_pressure": "90/60",
            "oxygen_saturation": "94%",
            "hospital" : "New Sun",
            "allergies": "none"
        }
	
	  let key11 = "d1"
        var doctor1 = {
            "name" : "Mr.kamal",
            "Field" : "Lung Specialist",
            "other_fields": "Null",
            "hospital" : "New Sun",
            "time_slot": "STT 6.30"
        }

	  let key12 = "d2"
        var doctor2 = {
            "name" : "Mr.Aziz",
            "Field" : "Cardiologist",
            "other_fields": "Null",
            "hospital" : "Redcrescent",
            "time_slot": "SMT 4.30 SMT 6.30"
        }
		  let key13 = "d3"
        var doctor3 = {
            "name" : "Mrs.Rubina",
            "Field" : "Cardiac Specialist",
            "other_fields": "Null",
            "hospital" : "Redcrescent",
            "time_slot": "SMT 2.30"
        }
	 let key14 = "d4"
        var doctor4 = {
            "name" : "Mrs.Rabeya",
            "Field" : "Diabetec Specialist",
            "other_fields": "Null",
            "hospital" : "Apollo",
            "time_slot": "STT 9.30"
        }
	

        await contract.submitTransaction('writeJsonData', key1, JSON.stringify(patient1));
        await contract.submitTransaction('writeJsonData', key2, JSON.stringify(patient2));
        await contract.submitTransaction('writeJsonData', key3, JSON.stringify(patient3));
        await contract.submitTransaction('writeJsonData', key4, JSON.stringify(patient4));
        await contract.submitTransaction('writeJsonData', key5, JSON.stringify(patient5));
	    await contract.submitTransaction('writeJsonData', key6, JSON.stringify(patient6));
        await contract.submitTransaction('writeJsonData', key7, JSON.stringify(patient7));
        await contract.submitTransaction('writeJsonData', key8, JSON.stringify(patient8));
        await contract.submitTransaction('writeJsonData', key9, JSON.stringify(patient9));
        await contract.submitTransaction('writeJsonData', key10, JSON.stringify(patient10));
	    await contract.submitTransaction('writeJsonData', key11, JSON.stringify(doctor1));
        await contract.submitTransaction('writeJsonData', key12, JSON.stringify(doctor2));
        await contract.submitTransaction('writeJsonData', key13, JSON.stringify(doctor3));
        await contract.submitTransaction('writeJsonData', key14, JSON.stringify(doctor4));
        console.log('Transaction has been submitted');

        // Disconnect from the gateway.
        await gateway.disconnect();
        return;
    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

main();
