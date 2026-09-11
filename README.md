# Blockchain-Hyperledger-Fabric-Remote-Patient-Monitoring-System

A prototype Remote Patient Monitoring (RPM) system implemented using
Hyperledger Fabric. The project explores how a permissioned blockchain
can be used to improve security, authorization, transparency, and
traceability in healthcare data management.

## Overview

Traditional remote patient monitoring systems often rely on centralized
data storage, which can introduce risks such as unauthorized access,
data manipulation, and single points of failure.

This project proposes a permissioned blockchain-based approach in which
patients, doctors, and administrators interact with a Hyperledger Fabric
network through authenticated identities and controlled transactions.

The prototype was developed as part of an academic research project and
is intended primarily for demonstration and experimentation.

## Key Features

- Permissioned blockchain network using Hyperledger Fabric
- Identity management using Fabric Certificate Authorities (CA)
- Role-based access for administrators, patients, and doctors
- Patient registration and authentication
- Doctor information and specialization search
- Appointment request workflow
- Administrator approval/rejection of appointment requests
- Doctor confirmation or rejection of appointments
- Controlled access to patient health information
- Patient health-record updates
- Transaction recording on the distributed ledger
- CouchDB-based querying using Mango queries
- API-based interaction with the blockchain network
- Blockchain transaction and block monitoring

## System Workflow

The prototype follows a multi-stage appointment and healthcare-data
workflow:

1. An administrator is enrolled in the Fabric network.
2. Authorized users are registered and provided with blockchain
   identities.
3. A patient searches for doctors according to medical specialization.
4. The patient selects an available appointment slot.
5. The appointment request is submitted to the system.
6. An administrator reviews and approves or rejects the request.
7. The doctor receives the approved request and confirms or declines it.
8. Once the appointment is confirmed, the doctor can access the relevant
   patient information.
9. The doctor can update the patient's health records after the
   appointment.
10. Transactions associated with the workflow are recorded on the
    blockchain ledger.

## Technology Stack

### Blockchain

- Hyperledger Fabric
- Fabric CA
- Fabric peers
- Ordering service
- Channels
- Smart contracts / chaincode
- Membership Service Provider (MSP)

### Programming

- JavaScript
- Node.js
- HTML
- CSS

### Database

- CouchDB
- Mango queries

### API / Testing

- REST API
- Advanced REST Client (ARC)

## Repository Structure

```text
fabcar/
│
├── javascript/
│   ├── app.js
│   ├── enrollAdmin.js
│   ├── registerUser.js
│   ├── query.js
│   ├── invoke.js
│   ├── package.json
│   ├── package-lock.json
│   └── wallet/
│
├── java/
│
├── typescript/
│
├── go/
│
├── startFabcar.sh
├── networkDown.sh
├── networkMonitor.sh
├── package.json
└── package-lock.json

The repository retains the structure of the Hyperledger Fabric FabCar
sample while using the Fabric network and application components as
the basis for the research prototype.

Hyperledger Fabric Architecture

The system uses a permissioned Fabric network consisting of organizations,
peers, Certificate Authorities, an ordering service, and clients.

A typical transaction follows this process:

User / Client
      |
      v
Application / API
      |
      v
Endorsing Peer
      |
      |  Transaction Proposal
      v
Endorsement Response
      |
      v
Ordering Service
      |
      v
Block
      |
      v
Peer Ledger

The client submits a transaction proposal to the appropriate endorsing
peer. The transaction is simulated and endorsed before being sent to the
ordering service. The orderer packages transactions into blocks, which
are subsequently distributed to the relevant peers and committed to
their ledgers.

Identity and Access Control

Because Hyperledger Fabric is a permissioned blockchain, participants
must possess valid identities before interacting with the network.

The prototype uses Fabric Certificate Authorities and X.509-based
identities to manage network membership.

The system distinguishes between different actors, including:

Administrator: manages users and reviews appointment requests.
Patient: searches for doctors, requests appointments, and manages
permitted health information.
Doctor: confirms appointments and accesses or updates patient
information according to the workflow.

Unauthorized users are prevented from participating in the network and
accessing protected functionality.

Data Management

The prototype uses CouchDB as the state database associated with
Hyperledger Fabric.

CouchDB enables JSON-based storage and Mango queries, allowing the
application to perform queries such as searching for doctors according
to their specialization.

Examples of information represented by the application include:

Patient information
Diagnosis
Medication
Allergies
Doctor name
Doctor specialization
Hospital
Available appointment slots
Appointment-related information
Application Components

The JavaScript application layer provides the interface between the
client-side application and the Hyperledger Fabric network.

Important components include:

Network configuration
Wallet and identity management
Administrator enrollment
User registration
Fabric gateway connection
Smart contract interaction
Ledger queries
Transaction submission
Running the Prototype
Prerequisites

The original development environment requires the relevant Hyperledger
Fabric development tools, Docker, Docker Compose, Node.js, and npm.

Make sure Docker is running before starting the Fabric network.

Start the Fabric Network

From the project directory:
cd ~/fabric-samples/fabcar
Then start the network using the provided script:
./startFabcar.sh
Depending on the local Fabric version and configuration, the startup
script may require adjustment.

JavaScript Application

Move into the JavaScript application directory:
cd javascript
Install dependencies if required:
npm install
Enroll the administrator:
node enrollAdmin.js
Register a user:
node registerUser.js
Run the application:
node app.js
The exact commands may vary depending on the Fabric version and the
configuration used by the local installation.

Stop the Network

To bring down the Fabric network:
./networkDown.sh
Monitoring

The project can be monitored using Hyperledger Fabric tools and
Hyperledger Explorer.

The blockchain ledger provides a record of transactions and blocks
generated during the workflow. Each block is linked to the previous
block through cryptographic hashes, providing the basis for ledger
integrity.

Research Context

This implementation was developed to demonstrate the practical
application of a permissioned blockchain to Remote Patient Monitoring.

The research focuses on:

Data security
Privacy and controlled access
Decentralization
Traceability
Transparency
Identity management
Secure healthcare-data transactions

The prototype demonstrates the proposed workflow rather than providing
a production-ready healthcare platform.

Limitations

This is an academic prototype and should not be treated as a
production healthcare information system.

In particular:

The frontend is primarily demonstrative.
The system has not been evaluated at production scale.
Real-world healthcare interoperability is outside the scope of the
prototype.
Actual clinical deployment would require substantially stronger
security, privacy, compliance, and infrastructure controls.
Payment functionality described in the research model is conceptual
and does not constitute a real payment system.
Future Work

Possible extensions include:

Integration with real healthcare information systems
Improved privacy mechanisms
More granular access-control policies
Integration with IoT-based patient monitoring devices
Automated smart-contract workflows
Improved scalability and performance evaluation
Interoperability with healthcare standards
Production-grade authentication and security
Comprehensive usability and security testing
Academic Reference

This repository accompanies an academic project on:

Blockchain-Based Remote Patient Monitoring Using Hyperledger Fabric

The research investigates the use of a permissioned blockchain to secure
and manage interactions between patients, doctors, and administrators
within a Remote Patient Monitoring environment.

Disclaimer

This project is provided for academic and research purposes only. It is
a prototype and has not been validated for use in real clinical
environments.
