# Ledger Flex bug reproduction code

1. `npm i`
2. `npm run dev`
3. attach Ledger Flex to USB and unlock
4. open console, and click the button
5. see that the `await TransportWebUSB.create()` never resolves
6. see warning in console and error if button is clicked a second time
